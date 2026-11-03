'use client';

/**
 * Direction C · the company as a lit architectural model in a dark room.
 * Intro (time): the plan plots itself in light, then the volumes rise.
 * Scroll (scrubbed): the camera settles, hidden work lights up as pulses along its paths,
 * the layout deforms, and the findings land in vermilion ink with margin notes.
 * Shares all geometry and timing data with the other renderers through scene/model.ts.
 */

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Grid, Lightformer, PerformanceMonitor } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState, type MutableRefObject } from 'react';
import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { NODE_IDS, SHEET, clamp01, computeScene, trimPolyline, type SceneFrame, type Vec3 } from '@/scene/model';
import type { FrameRect, OverlayRefs } from './HeroCanvas';

export interface ModelPlan {
  start: FrameRect;
  end: FrameRect;
}

interface Props {
  progress: MutableRefObject<number>;
  plan: ModelPlan;
  overlay: OverlayRefs;
  active: boolean;
  onReady: () => void;
}

const DEG = Math.PI / 180;
const NIGHT = '#070b13';
const COLORS = {
  plan: '#8ea6de',
  chalk: '#f3f1ec',
  pulse: '#ffe3bf',
  red: '#ff5a36',
  team: '#ebe8e1',
  system: '#26324a',
  systemEdge: '#9fb4e8',
};

/** Scroll timeline for C (the build happens in the intro, so scroll tells the as-built story). */
const SCROLL = {
  camera: [0.0, 0.42],
  hidden: [0.16, 0.5],
  deform: [0.36, 0.62],
  a1: [0.58, 0.7],
  a2: [0.68, 0.8],
  a3: [0.78, 0.9],
} as const;

/** Intro timeline, seconds after the canvas appears. */
const INTRO = { plan: [0.1, 1.5], rise: [1.15, 3.1], settle: [0, 3.6] } as const;

const seg = (t: number, [a, b]: readonly [number, number]) => clamp01((t - a) / (b - a));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const noRaycast = () => {};

function radialTexture(inner: string, outer: string) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, inner);
  grd.addColorStop(1, outer);
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function unitBoxEdges(): number[] {
  const p = [
    [-0.5, 0, -0.5], [0.5, 0, -0.5], [0.5, 0, 0.5], [-0.5, 0, 0.5],
    [-0.5, 1, -0.5], [0.5, 1, -0.5], [0.5, 1, 0.5], [-0.5, 1, 0.5],
  ];
  const e = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
  return e.flatMap(([a, b]) => [...p[a!]!, ...p[b!]!]);
}

function lineMat(color: string, width: number, opacity = 1, dashed = false) {
  const m = new LineMaterial({ color: new THREE.Color(color).getHex(), linewidth: width, worldUnits: false, transparent: opacity < 1 || dashed, opacity, dashed });
  m.toneMapped = false;
  m.depthWrite = !(opacity < 1 || dashed);
  if (dashed) {
    m.dashSize = 0.55;
    m.gapSize = 2.6;
  }
  return m;
}

function build() {
  const root = new THREE.Group();
  const mats = {
    plan: lineMat(COLORS.plan, 1.5, 0.95),
    footprint: lineMat(COLORS.plan, 1.3, 0.9),
    variant: lineMat(COLORS.chalk, 2, 0.95),
    hidden: lineMat(COLORS.chalk, 1.3, 0.42),
    pulse: lineMat(COLORS.pulse, 2.6, 1, true),
    late: lineMat(COLORS.red, 2, 0.95),
    cloud: lineMat(COLORS.red, 2.4),
    edgeTeam: lineMat('#ffffff', 1, 0.42),
    edgeSystem: lineMat(COLORS.systemEdge, 1.2, 0.85),
    edgeGhost: lineMat(COLORS.plan, 1.2, 0.7),
    team: new THREE.MeshStandardMaterial({ color: COLORS.team, roughness: 0.86, metalness: 0 }),
    system: new THREE.MeshStandardMaterial({ color: COLORS.system, roughness: 0.42, metalness: 0.35, envMapIntensity: 1.2 }),
    ghost: new THREE.MeshStandardMaterial({ color: COLORS.plan, roughness: 0.6, transparent: true, opacity: 0.16, depthWrite: false }),
    register: new THREE.MeshStandardMaterial({ color: COLORS.system, roughness: 0.42, metalness: 0.35, transparent: true, opacity: 1 }),
  };
  const shadowTex = radialTexture('rgba(0,0,0,0.85)', 'rgba(0,0,0,0)');
  const poolTex = radialTexture('rgba(255,236,214,0.16)', 'rgba(255,236,214,0)');

  // The light pool the model stands in.
  const pool = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ map: poolTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }),
  );
  pool.rotation.x = -Math.PI / 2;
  pool.position.set((SHEET.x0 + SHEET.x1) / 2, 0.003, (SHEET.z0 + SHEET.z1) / 2);
  pool.scale.set(44, 44, 1);
  pool.raycast = noRaycast;
  root.add(pool);

  const box = new THREE.BoxGeometry(1, 1, 1);
  box.translate(0, 0.5, 0);
  const edgePositions = unitBoxEdges();
  const plane = new THREE.PlaneGeometry(1, 1);
  plane.rotateX(-Math.PI / 2);
  const init = computeScene({ extrude: 0, hidden: 0, deform: 0, a1: 0, a2: 0, a3: 0 }).nodes;
  const nodes: Record<string, { group: THREE.Group; mesh: THREE.Mesh; edges: LineSegments2; shadow: THREE.Mesh; footprint: Line2 }> = {};
  for (const id of NODE_IDS) {
    const n = init[id]!;
    const material = id === 'register' ? mats.register : n.kind === 'system' ? mats.system : n.kind === 'external' ? mats.ghost : mats.team;
    const group = new THREE.Group();
    const mesh = new THREE.Mesh(box, material);
    mesh.userData.id = id;
    const eg = new LineSegmentsGeometry();
    eg.setPositions(edgePositions);
    const edges = new LineSegments2(eg, n.kind === 'system' ? mats.edgeSystem : n.kind === 'external' ? mats.edgeGhost : mats.edgeTeam);
    edges.raycast = noRaycast;
    group.add(mesh, edges);
    const shadow = new THREE.Mesh(plane, new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, opacity: 0, toneMapped: false }));
    shadow.raycast = noRaycast;
    const footprint = new Line2(new LineGeometry(), mats.footprint);
    footprint.raycast = noRaycast;
    footprint.frustumCulled = false;
    root.add(group, shadow, footprint);
    nodes[id] = { group, mesh, edges, shadow, footprint };
  }
  return { root, mats, nodes, lines: {} as Record<string, Line2>, pulses: {} as Record<string, Line2> };
}

function Scene({ progress, plan, overlay, onReady }: Omit<Props, 'active'>) {
  const { camera, size, scene, gl } = useThree();
  const built = useMemo(() => build(), []);
  const current = useRef(0);
  const parallax = useRef({ x: 0, y: 0 });
  const pointer = useRef({ x: 0, y: 0 });
  const t0 = useRef<number | null>(null);
  const lastKey = useRef('');
  const lastFrame = useRef<SceneFrame | null>(null);
  const ready = useRef(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const tmp = useMemo(() => new THREE.Vector3(), []);
  const reduced = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);

  useEffect(() => {
    scene.background = new THREE.Color(NIGHT);
    scene.fog = new THREE.Fog(NIGHT, 40, 90);
    gl.toneMapping = THREE.NeutralToneMapping;
    gl.toneMappingExposure = 1.05;
  }, [scene, gl]);

  useEffect(() => {
    const m = built.mats;
    for (const mat of [m.plan, m.footprint, m.variant, m.hidden, m.pulse, m.late, m.cloud, m.edgeTeam, m.edgeSystem, m.edgeGhost]) mat.resolution.set(size.width, size.height);
  }, [size, built]);

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
    document.body.style.cursor = hovered ? 'help' : '';
    return () => {
      document.body.style.cursor = '';
    };
  }, [hovered]);

  const toScreen = (p: Vec3) => {
    tmp.set(p[0], p[1], p[2]).project(camera);
    return [((tmp.x + 1) / 2) * size.width, ((1 - tmp.y) / 2) * size.height] as const;
  };

  useFrame((state, dt) => {
    if (t0.current === null) t0.current = state.clock.elapsedTime;
    const time = state.clock.elapsedTime;
    const it = reduced ? 99 : time - t0.current; // intro clock

    const target = progress.current;
    current.current += (target - current.current) * (1 - Math.exp(-dt * 8));
    if (Math.abs(target - current.current) < 0.0004) current.current = target;
    const p = current.current;

    parallax.current.x += (pointer.current.x - parallax.current.x) * (1 - Math.exp(-dt * 2.5));
    parallax.current.y += (pointer.current.y - parallax.current.y) * (1 - Math.exp(-dt * 2.5));

    const planT = easeInOut(seg(it, INTRO.plan));
    const rise = easeOut(seg(it, INTRO.rise));
    const settle = easeOut(seg(it, INTRO.settle));
    const s = {
      extrude: rise,
      hidden: seg(p, SCROLL.hidden),
      deform: seg(p, SCROLL.deform),
      a1: seg(p, SCROLL.a1),
      a2: seg(p, SCROLL.a2),
      a3: seg(p, SCROLL.a3),
    };
    const e = easeInOut(seg(p, SCROLL.camera));

    // ---- Camera: a 3/4 view that settles in during the intro, then glides to centre and lowers.
    const W = size.width, H = size.height;
    const drift = reduced ? 0 : Math.sin(time * 0.16) * 1.4;
    const az = (lerp(lerp(48, 42, settle), 31, e) + drift + parallax.current.x * 1.8) * DEG;
    const el = (lerp(lerp(44, 38, settle), 27, e) + parallax.current.y * 1.0) * DEG;
    const fov = 30;
    const zoom = lerp(lerp(0.9, 1, settle), 1.22, e);
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
    const pts = [0, 2.4].flatMap((y) => [
      new THREE.Vector3(SHEET.x0 + 1, y, SHEET.z0 + 1),
      new THREE.Vector3(SHEET.x1 - 1, y, SHEET.z0 + 1),
      new THREE.Vector3(SHEET.x1 - 1, y, SHEET.z1 - 1),
      new THREE.Vector3(SHEET.x0 + 1, y, SHEET.z1 - 1),
    ]);
    const T = new THREE.Vector3((SHEET.x0 + SHEET.x1) / 2, 0.8, (SHEET.z0 + SHEET.z1) / 2);
    let dist = 48;
    const cam = camera as THREE.PerspectiveCamera;
    cam.fov = fov;
    cam.aspect = W / H;
    const place = () => {
      cam.position.copy(T).addScaledVector(dir, dist);
      cam.up.set(0, 1, 0);
      cam.lookAt(T);
      cam.near = Math.max(0.1, dist - 60);
      cam.far = dist + 80;
      cam.updateProjectionMatrix();
      cam.updateMatrixWorld();
    };
    place();
    for (let i = 0; i < 4; i++) {
      let mnx = Infinity, mxx = -Infinity, mny = Infinity, mxy = -Infinity;
      for (const c of pts) {
        tmp.copy(c).project(cam);
        const x = ((tmp.x + 1) / 2) * W, y = ((1 - tmp.y) / 2) * H;
        mnx = Math.min(mnx, x); mxx = Math.max(mxx, x); mny = Math.min(mny, y); mxy = Math.max(mxy, y);
      }
      const ppu = H / (2 * dist * Math.tan((fov * DEG) / 2));
      const k = Math.min(fw / (mxx - mnx), fh / (mxy - mny));
      T.addScaledVector(right, -(fcx - (mnx + mxx) / 2) / ppu).addScaledVector(up, (fcy - (mny + mxy) / 2) / ppu);
      dist /= k;
      place();
    }
    cam.fov = (2 * Math.atan(Math.tan((fov * DEG) / 2) / zoom)) / DEG;
    cam.updateProjectionMatrix();
    (scene.fog as THREE.Fog).near = dist * 0.85;
    (scene.fog as THREE.Fog).far = dist * 2.1;

    // ---- Geometry, rebuilt only when the state changes.
    const key = [planT, s.extrude, s.hidden, s.deform, s.a1, s.a2, s.a3].map((v) => v.toFixed(4)).join('|');
    if (key !== lastKey.current) {
      lastKey.current = key;
      const f = computeScene(s);
      lastFrame.current = f;
      NODE_IDS.forEach((id, i) => {
        const n = f.nodes[id]!;
        const o = built.nodes[id]!;
        const show = clamp01((planT * (NODE_IDS.length + 3) - i) / 3);
        o.group.position.set(n.x, 0, n.z);
        o.group.scale.set(n.w, Math.max(0.002, n.h * clamp01(s.extrude * 1.02)), n.d);
        o.group.visible = s.extrude > 0.002;
        o.shadow.position.set(n.x + 0.25, 0.004, n.z + 0.3);
        o.shadow.scale.set(n.w * 1.75 + 0.6, 1, n.d * 1.75 + 0.6);
        (o.shadow.material as THREE.MeshBasicMaterial).opacity = 0.62 * clamp01(n.h / 0.9) * s.extrude;
        // The plan: each footprint plots itself, in order along the route.
        const x0 = n.x - n.w / 2, x1 = n.x + n.w / 2, z0 = n.z - n.d / 2, z1 = n.z + n.d / 2;
        const loop: Vec3[] = [[x0, 0.012, z0], [x1, 0.012, z0], [x1, 0.012, z1], [x0, 0.012, z1], [x0, 0.012, z0]];
        const fp = trimPolyline(loop, show);
        o.footprint.visible = fp.length > 1;
        if (fp.length > 1) {
          o.footprint.geometry.dispose();
          const g = new LineGeometry();
          g.setPositions(fp.flat());
          o.footprint.geometry = g;
        }
      });
      built.mats.register.opacity = 1 - 0.72 * f.nodes.register!.muted;
      let official = 0;
      for (const l of f.lines) {
        if (l.kind === 'leader') continue;
        let reveal = l.reveal;
        if (l.kind === 'official') reveal = clamp01((planT * 14 - official++ * 0.8) / 3);
        let obj = built.lines[l.id];
        if (!obj) {
          const mat =
            l.kind === 'official' ? built.mats.plan
            : l.kind === 'variant' ? built.mats.variant
            : l.kind === 'cloud' ? built.mats.cloud
            : l.finding ? built.mats.late
            : built.mats.hidden;
          obj = new Line2(new LineGeometry(), mat);
          obj.frustumCulled = false;
          obj.raycast = noRaycast;
          obj.renderOrder = l.kind === 'cloud' ? 3 : 1;
          built.lines[l.id] = obj;
          built.root.add(obj);
          if (l.kind === 'hidden' && !l.finding) {
            const pulse = new Line2(new LineGeometry(), built.mats.pulse);
            pulse.frustumCulled = false;
            pulse.raycast = noRaycast;
            pulse.renderOrder = 2;
            built.pulses[l.id] = pulse;
            built.root.add(pulse);
          }
        }
        const pts = trimPolyline(l.points, reveal);
        obj.visible = pts.length > 1;
        if (pts.length > 1) {
          obj.geometry.dispose();
          const g = new LineGeometry();
          g.setPositions(pts.flat());
          obj.geometry = g;
        }
        const pulse = built.pulses[l.id];
        if (pulse) {
          pulse.visible = reveal > 0.98;
          if (pulse.visible) {
            pulse.geometry.dispose();
            const g = new LineGeometry();
            g.setPositions(l.points.flat());
            pulse.geometry = g;
            pulse.computeLineDistances();
          }
        }
      }
    }
    // Work moving along the hidden paths.
    built.mats.pulse.dashOffset = reduced ? 0 : -time * 1.6;

    // ---- HTML overlays.
    const f = lastFrame.current;
    if (f) {
      const colRight = plan.end.x1 * W + 18;
      const colLeft = plan.end.x0 * W - 18;
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
        let prev = -Infinity;
        for (const q of placed.filter((r) => r.a.side === side).sort((m, n) => m.foot[1] - n.foot[1])) {
          q.y = Math.min(Math.max(q.foot[1] - 30, H * 0.14, prev + 128), H * 0.86);
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
          path.setAttribute('d', `M${q.foot[0].toFixed(1)} ${q.foot[1].toFixed(1)}L${(nx - sgn * 26).toFixed(1)} ${q.y.toFixed(1)}L${nx.toFixed(1)} ${q.y.toFixed(1)}`);
          path.style.strokeDashoffset = (1 - q.leaderReveal).toFixed(3);
        }
      }
      for (const l of f.lines) {
        if (l.kind !== 'hidden' || !l.label || !l.labelAt) continue;
        const el = overlay.flows.current[l.label];
        if (!el) continue;
        const [x, y] = toScreen(l.labelAt);
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
        el.style.opacity = (clamp01((l.reveal - 0.8) / 0.2) * (1 - 0.5 * clamp01(s.a1 * 2))).toFixed(3);
      }
      const labelIn = clamp01((it - 2.4) / 0.6);
      const dim = 1 - 0.5 * clamp01(s.a1 * 2);
      for (const id of NODE_IDS) {
        const el = overlay.nodes.current[id];
        if (!el) continue;
        const n = f.nodes[id]!;
        const [x, y] = toScreen([n.x, n.h + 0.02, n.z]);
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
        el.style.opacity = (hovered === id ? 1 : labelIn * dim).toFixed(3);
        el.dataset.hover = hovered === id ? 'true' : 'false';
      }
    }

    if (!ready.current) {
      ready.current = true;
      requestAnimationFrame(() => onReady());
    }
  });

  return (
    <>
      <hemisphereLight args={['#e3e9ff', '#0a0f19', 0.7]} />
      <directionalLight position={[-6, 16, 10]} intensity={2.4} color="#fff2e2" />
      <directionalLight position={[22, 7, -8]} intensity={0.9} color="#9cb6ff" />
      <ambientLight intensity={0.12} />
      <Environment resolution={64} frames={1}>
        <Lightformer intensity={1.6} position={[0, 10, 0]} rotation-x={Math.PI / 2} scale={[30, 30, 1]} />
        <Lightformer intensity={0.8} color="#9cb6ff" position={[20, 4, -6]} scale={[10, 6, 1]} />
      </Environment>
      <Grid
        position={[(SHEET.x0 + SHEET.x1) / 2, -0.002, (SHEET.z0 + SHEET.z1) / 2]}
        args={[80, 80]}
        cellSize={1}
        cellThickness={0.55}
        cellColor="#1a2540"
        sectionSize={5}
        sectionThickness={1}
        sectionColor="#2b3b62"
        fadeDistance={58}
        fadeStrength={1.4}
        infiniteGrid
      />
      <primitive
        object={built.root}
        onPointerOver={(ev: { object: THREE.Object3D; stopPropagation: () => void }) => {
          const id = ev.object.userData.id as string | undefined;
          if (!id) return;
          ev.stopPropagation();
          setHovered(id);
        }}
        onPointerOut={(ev: { object: THREE.Object3D }) => {
          const id = ev.object.userData.id as string | undefined;
          setHovered((h) => (h === id ? null : h));
        }}
      />
    </>
  );
}

export default function ModelCanvas(props: Props) {
  const [dpr, setDpr] = useState(1.5);
  return (
    <Canvas
      dpr={[1, Math.min(dpr, 1.75)]}
      frameloop={props.active ? 'always' : 'never'}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      camera={{ fov: 30, near: 1, far: 400, position: [40, 40, 40] }}
      style={{ position: 'absolute', inset: 0 }}
      aria-hidden="true"
      tabIndex={-1}
    >
      <PerformanceMonitor onIncline={() => setDpr(1.75)} onDecline={() => setDpr(1)} />
      <Scene {...props} />
    </Canvas>
  );
}
