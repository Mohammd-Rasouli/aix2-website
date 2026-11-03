'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState, type MutableRefObject } from 'react';
import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import {
  NODE_IDS,
  SHEET,
  clamp01,
  computeScene,
  stateAt,
  trimPolyline,
  type LineKind,
  type SceneFrame,
  type Vec3,
} from '@/scene/model';

export interface FrameRect {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export interface CameraPlan {
  start: FrameRect;
  end: FrameRect;
  endAzimuth: number; // degrees
  endElevation: number;
  endFov: number;
  endZoom: number;
}

export interface OverlayRefs {
  annotations: MutableRefObject<Record<string, HTMLElement | null>>;
  flows: MutableRefObject<Record<string, HTMLElement | null>>;
  nodes: MutableRefObject<Record<string, HTMLElement | null>>;
  leaders: MutableRefObject<Record<string, SVGPathElement | null>>;
}

interface Props {
  progress: MutableRefObject<number>;
  plan: CameraPlan;
  overlay: OverlayRefs;
  colorSource: MutableRefObject<HTMLElement | null>;
  active: boolean;
  /** True once the canvas has replaced the SVG poster; parallax waits for it. */
  live: boolean;
  onReady: () => void;
}

const DEG = Math.PI / 180;
const ISO_EL = Math.atan(1 / Math.SQRT2) / DEG; // 35.264°
const START_FOV = 1.2;
const SHEET_PAD = 0.6;
/** Height kept in frame once the volumes rise (tallest node plus the flows above it). */
const HEIGHT_ALLOW = 2.6;

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function readColors(el: HTMLElement | null) {
  const cs = el ? getComputedStyle(el) : null;
  const get = (name: string, fallback: string) => (cs?.getPropertyValue(name).trim() || fallback);
  return {
    line: get('--line', '#0e2240'),
    lineSoft: get('--line-soft', '#7d889c'),
    grid: get('--grid', '#c9ced6'),
    gridAlpha: parseFloat(get('--grid-alpha', '0.5')),
    red: get('--red', '#d2302c'),
    faceTop: get('--face-top', '#fbfaf7'),
    faceLeft: get('--face-left', '#e7e3da'),
    faceRight: get('--face-right', '#d9d5cb'),
  };
}

type Colors = ReturnType<typeof readColors>;

const WIDTH: Record<LineKind | 'edge' | 'sheet' | 'late', number> = {
  official: 1.5,
  variant: 2.1,
  hidden: 2.6,
  late: 2.1,
  cloud: 2.4,
  leader: 1.4,
  edge: 1.4,
  sheet: 1.2,
};

function makeMaterials(c: Colors) {
  const lm = (color: string, linewidth: number) =>
    new LineMaterial({ color: new THREE.Color(color).getHex(), linewidth, worldUnits: false, transparent: false });
  return {
    official: lm(c.lineSoft, WIDTH.official),
    variant: lm(c.line, WIDTH.variant),
    hidden: lm(c.line, WIDTH.hidden),
    late: lm(c.red, WIDTH.late),
    cloud: lm(c.red, WIDTH.cloud),
    leader: lm(c.red, WIDTH.leader),
    edge: lm(c.line, WIDTH.edge),
    edgeMuted: lm(c.lineSoft, WIDTH.edge),
    edgeSoft: lm(c.lineSoft, WIDTH.edge),
    sheet: lm(c.lineSoft, WIDTH.sheet),
    faces: (() => {
      const mk = (color: string) =>
        new THREE.MeshBasicMaterial({ color, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
      const top = mk(c.faceTop), left = mk(c.faceLeft), right = mk(c.faceRight);
      // BoxGeometry groups: +x, -x, +y, -y, +z, -z
      return [right, right, top, top, left, left];
    })(),
    gridMinor: new THREE.LineBasicMaterial({ color: c.grid, transparent: true, opacity: c.gridAlpha * 0.7 }),
    gridMajor: new THREE.LineBasicMaterial({ color: c.grid, transparent: true, opacity: c.gridAlpha }),
  };
}

type Materials = ReturnType<typeof makeMaterials>;

/** Unit box edges, base at y = 0, centred on x/z. */
function unitBoxEdges(): number[] {
  const p = [
    [-0.5, 0, -0.5],
    [0.5, 0, -0.5],
    [0.5, 0, 0.5],
    [-0.5, 0, 0.5],
    [-0.5, 1, -0.5],
    [0.5, 1, -0.5],
    [0.5, 1, 0.5],
    [-0.5, 1, 0.5],
  ];
  const e = [
    [0, 1], [1, 2], [2, 3], [3, 0],
    [4, 5], [5, 6], [6, 7], [7, 4],
    [0, 4], [1, 5], [2, 6], [3, 7],
  ];
  return e.flatMap(([a, b]) => [...p[a!]!, ...p[b!]!]);
}

function insetTop(w: number, d: number, inset: number): number[] {
  const ix = 0.5 - inset / w, iz = 0.5 - inset / d;
  const y = 1.0005;
  const r = [
    [-ix, y, -iz],
    [ix, y, -iz],
    [ix, y, iz],
    [-ix, y, iz],
  ];
  return [0, 1, 2, 3].flatMap((i) => [...r[i]!, ...r[(i + 1) % 4]!]);
}

const noRaycast = () => {};

interface NodeObj {
  group: THREE.Group;
  mesh: THREE.Mesh;
  edges: LineSegments2;
  inner?: LineSegments2;
}

function buildScene(mats: Materials) {
  const root = new THREE.Group();

  // Grid
  const minor: number[] = [];
  const major: number[] = [];
  for (let x = Math.ceil(SHEET.x0); x <= SHEET.x1; x++) {
    (x % 5 === 0 ? major : minor).push(x, 0, SHEET.z0, x, 0, SHEET.z1);
  }
  for (let z = Math.ceil(SHEET.z0); z <= SHEET.z1; z++) {
    (z % 5 === 0 ? major : minor).push(SHEET.x0, 0, z, SHEET.x1, 0, z);
  }
  const g1 = new THREE.BufferGeometry();
  g1.setAttribute('position', new THREE.Float32BufferAttribute(minor, 3));
  const g2 = new THREE.BufferGeometry();
  g2.setAttribute('position', new THREE.Float32BufferAttribute(major, 3));
  const gridMinor = new THREE.LineSegments(g1, mats.gridMinor);
  const gridMajor = new THREE.LineSegments(g2, mats.gridMajor);
  gridMinor.raycast = noRaycast;
  gridMajor.raycast = noRaycast;
  root.add(gridMinor, gridMajor);

  // Sheet border
  const sheetGeo = new LineGeometry();
  sheetGeo.setPositions([
    SHEET.x0, 0.002, SHEET.z0, SHEET.x1, 0.002, SHEET.z0, SHEET.x1, 0.002, SHEET.z1, SHEET.x0, 0.002, SHEET.z1, SHEET.x0, 0.002, SHEET.z0,
  ]);
  const sheet = new Line2(sheetGeo, mats.sheet);
  sheet.raycast = noRaycast;
  root.add(sheet);

  // Nodes
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  boxGeo.translate(0, 0.5, 0);
  const edgePositions = unitBoxEdges();
  const nodes: Record<string, NodeObj> = {};
  const initial = computeScene({ extrude: 0, hidden: 0, deform: 0, a1: 0, a2: 0, a3: 0 }).nodes;
  for (const id of NODE_IDS) {
    const n = initial[id]!;
    const group = new THREE.Group();
    const mesh = new THREE.Mesh(boxGeo, mats.faces);
    mesh.userData.id = id;
    const eg = new LineSegmentsGeometry();
    eg.setPositions(edgePositions);
    const edges = new LineSegments2(eg, n.kind === 'external' ? mats.edgeSoft : mats.edge);
    edges.raycast = noRaycast;
    group.add(mesh, edges);
    let inner: LineSegments2 | undefined;
    if (n.kind === 'system') {
      const ig = new LineSegmentsGeometry();
      ig.setPositions(insetTop(n.w, n.d, 0.22));
      inner = new LineSegments2(ig, mats.edge);
      inner.raycast = noRaycast;
      group.add(inner);
    }
    root.add(group);
    nodes[id] = { group, mesh, edges, inner };
  }

  return { root, nodes, lines: {} as Record<string, Line2> };
}

function lineMaterialFor(kind: LineKind, finding: string | undefined, mats: Materials) {
  if (kind === 'hidden' && finding) return mats.late;
  return mats[kind];
}

function Scene({ progress, plan, overlay, colorSource, live, onReady }: Omit<Props, 'active'>) {
  const { camera, size } = useThree();
  const mats = useMemo(() => makeMaterials(readColors(colorSource.current)), [colorSource]);
  const built = useMemo(() => buildScene(mats), [mats]);
  const current = useRef(0);
  const parallax = useRef({ x: 0, y: 0 });
  const lastKey = useRef('');
  const ready = useRef(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const tmp = useMemo(() => new THREE.Vector3(), []);
  const pointer = useRef({ x: 0, y: 0 });
  const lastFrame = useRef<SceneFrame | null>(null);

  // Parallax follows the pointer anywhere in the window, including over the HTML copy.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useEffect(() => {
    for (const m of [mats.official, mats.variant, mats.hidden, mats.late, mats.cloud, mats.leader, mats.edge, mats.edgeMuted, mats.edgeSoft, mats.sheet]) {
      m.resolution.set(size.width, size.height);
    }
  }, [size, mats]);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'help' : '';
    return () => {
      document.body.style.cursor = '';
    };
  }, [hovered]);

  const toScreen = (p: Vec3) => {
    tmp.set(p[0], p[1], p[2]).project(camera);
    return [((tmp.x + 1) / 2) * size.width, ((1 - tmp.y) / 2) * size.height, tmp.z] as const;
  };

  useFrame((_state, dt) => {
    // Smooth the scroll progress (short inertial settle, ~0.3 s).
    const target = progress.current;
    const k = 1 - Math.exp(-dt * 9);
    current.current += (target - current.current) * k;
    if (Math.abs(target - current.current) < 0.0004) current.current = target;
    const p = current.current;

    // Pointer parallax, damped. Off until the canvas has replaced the poster.
    const px = live ? pointer.current.x : 0, py = live ? pointer.current.y : 0;
    parallax.current.x += (px - parallax.current.x) * (1 - Math.exp(-dt * 3));
    parallax.current.y += (py - parallax.current.y) * (1 - Math.exp(-dt * 3));

    const s = stateAt(p);
    const e = easeInOut(s.camera);

    // ---- Camera: a dolly-zoom from a flat drawing (≈ orthographic) to a built model.
    // The sheet is fitted into the frame rect through the real perspective projection, so the
    // near corner never overflows. Zoom then narrows the lens without changing the perspective.
    const W = size.width, H = size.height;
    const az = (lerp(45, plan.endAzimuth, e) + parallax.current.x * 1.6) * DEG;
    const el = (lerp(ISO_EL, plan.endElevation, e) + parallax.current.y * 1.0) * DEG;
    const fov = lerp(START_FOV, plan.endFov, e * e);
    const zoom = lerp(1, plan.endZoom, e);
    const fr = {
      x0: lerp(plan.start.x0, plan.end.x0, e) * W,
      y0: lerp(plan.start.y0, plan.end.y0, e) * H,
      x1: lerp(plan.start.x1, plan.end.x1, e) * W,
      y1: lerp(plan.start.y1, plan.end.y1, e) * H,
    };
    const fw = fr.x1 - fr.x0, fh = fr.y1 - fr.y0;
    const fcx = (fr.x0 + fr.x1) / 2, fcy = (fr.y0 + fr.y1) / 2;
    const dir = new THREE.Vector3(Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az));
    const fwd = dir.clone().negate();
    const right = new THREE.Vector3().crossVectors(fwd, new THREE.Vector3(0, 1, 0)).normalize();
    const up = new THREE.Vector3().crossVectors(right, fwd).normalize();
    const lift = HEIGHT_ALLOW * e;
    const pts = [0, lift].flatMap((y) => [
      new THREE.Vector3(SHEET.x0, y, SHEET.z0),
      new THREE.Vector3(SHEET.x1, y, SHEET.z0),
      new THREE.Vector3(SHEET.x1, y, SHEET.z1),
      new THREE.Vector3(SHEET.x0, y, SHEET.z1),
    ]);

    // First guess: orthographic fit of the flat sheet (exactly the SVG poster's framing).
    let bx0 = Infinity, bx1 = -Infinity, by0 = Infinity, by1 = -Infinity;
    for (const c of pts.slice(0, 4)) {
      const sx = c.dot(right), sy = -c.dot(up);
      bx0 = Math.min(bx0, sx); bx1 = Math.max(bx1, sx);
      by0 = Math.min(by0, sy); by1 = Math.max(by1, sy);
    }
    const bw = bx1 - bx0 + SHEET_PAD * 2, bh = by1 - by0 + SHEET_PAD * 2;
    const scale = Math.min(fw / bw, fh / bh); // px per unit
    const C = right.clone().multiplyScalar((bx0 + bx1) / 2).add(up.clone().multiplyScalar(-(by0 + by1) / 2));
    const T = C.clone()
      .sub(right.clone().multiplyScalar((fcx - W / 2) / scale))
      .add(up.clone().multiplyScalar((fcy - H / 2) / scale));
    let dist = H / scale / 2 / Math.tan((fov * DEG) / 2);
    const cam = camera as THREE.PerspectiveCamera;
    cam.fov = fov;
    cam.aspect = W / H;
    cam.up.set(0, 1, 0);
    const place = () => {
      cam.position.copy(T).addScaledVector(dir, dist);
      cam.lookAt(T);
      cam.near = Math.max(0.05, dist - 90);
      cam.far = dist + 90;
      cam.updateProjectionMatrix();
      cam.updateMatrixWorld();
    };
    place();
    // Refine through the perspective projection once the camera starts to move.
    if (e > 0.0005) {
      for (let it = 0; it < 3; it++) {
        let mnx = Infinity, mxx = -Infinity, mny = Infinity, mxy = -Infinity;
        for (const c of pts) {
          tmp.copy(c).project(cam);
          const x = ((tmp.x + 1) / 2) * W, y = ((1 - tmp.y) / 2) * H;
          mnx = Math.min(mnx, x); mxx = Math.max(mxx, x);
          mny = Math.min(mny, y); mxy = Math.max(mxy, y);
        }
        const ppu = H / (2 * dist * Math.tan((fov * DEG) / 2));
        const pad = SHEET_PAD * ppu;
        const kfit = Math.min(fw / (mxx - mnx + 2 * pad), fh / (mxy - mny + 2 * pad));
        T.addScaledVector(right, -(fcx - (mnx + mxx) / 2) / ppu).addScaledVector(up, (fcy - (mny + mxy) / 2) / ppu);
        dist /= kfit;
        place();
      }
    }
    if (zoom !== 1) {
      cam.fov = (2 * Math.atan(Math.tan((fov * DEG) / 2) / zoom)) / DEG;
      cam.updateProjectionMatrix();
    }

    // ---- Scene state. Geometry only updates when the state changes.
    const key = [s.extrude, s.hidden, s.deform, s.a1, s.a2, s.a3].map((v) => v.toFixed(4)).join('|');
    let frame: SceneFrame | null = null;
    if (key !== lastKey.current) {
      lastKey.current = key;
      frame = computeScene(s);
      for (const id of NODE_IDS) {
        const n = frame.nodes[id]!;
        const o = built.nodes[id]!;
        o.group.position.set(n.x, 0, n.z);
        o.group.scale.set(n.w, n.h, n.d);
        o.edges.material = n.muted > 0.5 ? mats.edgeMuted : n.kind === 'external' ? mats.edgeSoft : mats.edge;
      }
      for (const l of frame.lines) {
        // Leaders are drawn in screen space, out to the margin notes (see below).
        if (l.kind === 'leader') continue;
        let obj = built.lines[l.id];
        const pts = trimPolyline(l.points, l.reveal);
        if (!obj) {
          obj = new Line2(new LineGeometry(), lineMaterialFor(l.kind, l.finding, mats));
          obj.frustumCulled = false;
          obj.raycast = noRaycast;
          obj.renderOrder = l.kind === 'cloud' ? 3 : 1;
          built.lines[l.id] = obj;
          built.root.add(obj);
        }
        if (pts.length < 2) {
          obj.visible = false;
        } else {
          obj.visible = true;
          // LineGeometry needs at least 2 points; rebuild the buffers for the trimmed polyline.
          obj.geometry.dispose();
          const geo = new LineGeometry();
          geo.setPositions(pts.flat());
          obj.geometry = geo;
        }
      }
    }

    // ---- HTML overlays, projected every frame (the camera moves with the pointer).
    if (frame) lastFrame.current = frame;
    const f = lastFrame.current ?? computeScene(s);
    // Findings: notes sit in the margins of the sheet, as on an as-built drawing; a red
    // leader runs from the edge of each revision cloud to its note. Notes in one margin
    // keep their top-to-bottom order and never overlap.
    const W2 = size.width, H2 = size.height;
    const colRight = plan.end.x1 * W2 + 18;
    const colLeft = plan.end.x0 * W2 - 18;
    const placed = f.anchors.map((a) => {
      const cloud = f.lines.find((l) => l.id === `cloud-${a.id}`)!;
      const leader = f.lines.find((l) => l.id === `leader-${a.id}`)!;
      let foot: [number, number] = [0, 0];
      let best = a.side === 'right' ? -Infinity : Infinity;
      for (let i = 0; i < cloud.points.length; i += 2) {
        const [x, y] = toScreen(cloud.points[i]!);
        if ((a.side === 'right' && x > best) || (a.side === 'left' && x < best)) {
          best = x;
          foot = [x, y];
        }
      }
      return { a, foot, y: foot[1], leaderReveal: leader.reveal };
    });
    for (const side of ['left', 'right'] as const) {
      const col = placed.filter((q) => q.a.side === side).sort((m, n) => m.foot[1] - n.foot[1]);
      let prev = -Infinity;
      for (const q of col) {
        q.y = Math.min(Math.max(q.foot[1] - 30, H2 * 0.14, prev + 128), H2 * 0.86);
        prev = q.y;
      }
    }
    for (const q of placed) {
      const el = overlay.annotations.current[q.a.id];
      const path = overlay.leaders.current[q.a.id];
      const sgn = q.a.side === 'right' ? 1 : -1;
      const nx = q.a.side === 'right' ? colRight : colLeft;
      if (el) {
        el.style.transform = `translate3d(${nx.toFixed(1)}px, ${q.y.toFixed(1)}px, 0)`;
        el.style.opacity = q.a.reveal.toFixed(3);
      }
      if (path) {
        const sx = nx - sgn * 26;
        path.setAttribute(
          'd',
          `M${q.foot[0].toFixed(1)} ${q.foot[1].toFixed(1)}L${sx.toFixed(1)} ${q.y.toFixed(1)}L${nx.toFixed(1)} ${q.y.toFixed(1)}`,
        );
        path.style.strokeDashoffset = (1 - q.leaderReveal).toFixed(3);
      }
    }
    for (const l of f.lines) {
      if (l.kind !== 'hidden' || !l.label || !l.labelAt) continue;
      const el = overlay.flows.current[l.label];
      if (!el) continue;
      const [x, y] = toScreen(l.labelAt);
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      el.style.opacity = clamp01((l.reveal - 0.75) / 0.25).toFixed(3);
    }
    // Node labels sit on the plan like room labels, then on the roofs; they step back
    // once the red-ink findings arrive. Hover lifts one label forward.
    const dim = 1 - 0.45 * clamp01(s.a1 * 2);
    for (const id of NODE_IDS) {
      const el = overlay.nodes.current[id];
      if (!el) continue;
      const n = f.nodes[id]!;
      const [x, y] = toScreen([n.x, n.h, n.z]);
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      el.style.opacity = hovered === id ? '1' : dim.toFixed(3);
      el.dataset.hover = hovered === id ? 'true' : 'false';
    }

    if (!ready.current) {
      ready.current = true;
      requestAnimationFrame(() => onReady());
    }
  });

  // Only node volumes take pointer events; lines and the grid are not raycast.
  return (
    <primitive
      object={built.root}
      onPointerOver={(e: { object: THREE.Object3D; stopPropagation: () => void }) => {
        const id = e.object.userData.id as string | undefined;
        if (!id) return;
        e.stopPropagation();
        setHovered(id);
      }}
      onPointerOut={(e: { object: THREE.Object3D }) => {
        const id = e.object.userData.id as string | undefined;
        setHovered((h) => (h === id ? null : h));
      }}
    />
  );
}

export default function HeroCanvas(props: Props) {
  const [dpr, setDpr] = useState(1.5);
  return (
    <Canvas
      flat
      dpr={[1, Math.min(dpr, 1.75)]}
      frameloop={props.active ? 'always' : 'never'}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: false }}
      camera={{ fov: START_FOV, near: 1, far: 4000, position: [600, 600, 600] }}
      style={{ position: 'absolute', inset: 0 }}
      aria-hidden="true"
      tabIndex={-1}
    >
      <PerformanceMonitor onIncline={() => setDpr(1.75)} onDecline={() => setDpr(1)} />
      <Scene {...props} />
    </Canvas>
  );
}
