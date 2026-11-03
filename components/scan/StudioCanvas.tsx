'use client';

/**
 * The company as an architectural model in a soft, light studio.
 *  - Teams are pearl-ceramic blocks, systems are satin-chrome towers, the vendor portal is
 *    clear glass. The official drawing is etched in the floor.
 *  - Intro: the blocks rise out of the drawing; the AIx2 mark (a glass square over an indigo
 *    square, out of register) floats above the model.
 *  - Hero scroll: the camera settles; work outside the systems appears as glossy ribbons with
 *    pearls travelling along them; the blocks drift to where they really stand, and those that
 *    depart from the drawing turn vermilion; the findings arrive one at a time.
 *  - Into Red lines: the mark travels with you and faces you beside the heading.
 *  - The pointer tilts the camera and turns the mark. Labels are few: key ones on arrival,
 *    then only the one each finding is about, plus whatever is under the pointer.
 */

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ContactShadows, Environment, Lightformer, MeshTransmissionMaterial, PerformanceMonitor, RoundedBox } from '@react-three/drei';
import { Bloom, DepthOfField, EffectComposer, Noise, ToneMapping, Vignette } from '@react-three/postprocessing';
import { BlendFunction, ToneMappingMode } from 'postprocessing';
import { useEffect, useMemo, useRef, useState, type MutableRefObject } from 'react';
import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { BUILT, DRAWN, NODE_IDS, SHEET, clamp01, computeScene, type SceneFrame, type Vec3 } from '@/scene/model';
import { flowCurves } from '@/scene/scan';
import type { Rect, ScanOverlay } from './ScanCanvas';

interface Props {
  hero: MutableRefObject<number>;
  next: MutableRefObject<number>;
  /** 0..1 as the section after the hero arrives: the hero's notes step back. */
  mid: MutableRefObject<number>;
  frames: { start: Rect; end: Rect };
  overlay: ScanOverlay;
  sides: Record<string, 'left' | 'right'>;
  onReady: () => void;
}

const DEG = Math.PI / 180;
const HERO = { camera: [0.16, 0.48], flows: [0.26, 0.56], dev: [0.4, 0.64], a1: [0.6, 0.71], a2: [0.71, 0.82], a3: [0.82, 0.93] } as const;
/** Each finding has the stage to itself for its window. */
const WINDOWS: Record<'a1' | 'a2' | 'a3', [number, number]> = { a1: [0.6, 0.72], a2: [0.72, 0.83], a3: [0.83, 1.01] };
/** The block each finding is about: its label is the only one shown with the note. */
const SUBJECT: Record<'a1' | 'a2' | 'a3', string> = { a1: 'erp', a2: 'register', a3: 'vendor' };
const KEY_LABELS = new Set(['sales', 'erp', 'eng', 'prod']);
const DEVIATES = new Set(['eng', 'prod', 'test']);

const seg = (t: number, [a, b]: readonly [number, number]) => clamp01((t - a) / (b - a));
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const noRaycast = () => {};

const built = computeScene(BUILT);
const drawn = computeScene({ ...DRAWN, extrude: 1 });
const curves = flowCurves();
const CENTER = new THREE.Vector3((SHEET.x0 + SHEET.x1) / 2, 0, (SHEET.z0 + SHEET.z1) / 2);
const PEARL = new THREE.Color('#fbfbfe');
const VERMILION = new THREE.Color('#f2552f');

/** Tube frames can produce NaN on degenerate segments; one NaN pixel blacks out a bloomed frame. */
function safe<T extends THREE.BufferGeometry>(g: T): T {
  for (const name of ['normal', 'position'] as const) {
    const a = g.getAttribute(name) as THREE.BufferAttribute | undefined;
    if (!a) continue;
    const arr = a.array as Float32Array;
    for (let i = 0; i < arr.length; i += 3) {
      if (!Number.isFinite(arr[i]!) || !Number.isFinite(arr[i + 1]!) || !Number.isFinite(arr[i + 2]!)) {
        arr[i] = 0;
        arr[i + 1] = name === 'normal' ? 1 : 0;
        arr[i + 2] = 0;
      }
    }
    a.needsUpdate = true;
  }
  return g;
}

function Backdrop() {
  // A seamless studio sweep: pale lavender-grey, lighter where the key light falls.
  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
        vertexShader: `varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `varying vec3 vP; void main(){
          float h = vP.y * 0.5 + 0.5;
          vec3 low = vec3(0.86, 0.865, 0.9);
          vec3 mid = vec3(0.925, 0.928, 0.955);
          vec3 top = vec3(0.965, 0.965, 0.98);
          vec3 c = mix(low, mid, smoothstep(0.4, 0.55, h));
          c = mix(c, top, smoothstep(0.55, 0.9, h));
          float key = smoothstep(0.75, 1.0, dot(vP, normalize(vec3(-0.5, 0.6, 0.6))));
          c += vec3(0.03, 0.028, 0.02) * key;
          gl_FragColor = vec4(c, 1.0);
        }`,
      }),
    [],
  );
  return (
    <mesh scale={220} material={mat} raycast={noRaycast} renderOrder={-10}>
      <sphereGeometry args={[1, 48, 24]} />
    </mesh>
  );
}

function Scene({ hero, next, mid, frames, overlay, sides, onReady }: Props) {
  const { camera, size } = useThree();
  const nodeRefs = useRef<Record<string, THREE.Group | null>>({});
  const nodeMats = useRef<Record<string, THREE.MeshPhysicalMaterial | null>>({});
  const mark = useRef<THREE.Group>(null);
  const flowMeshes = useRef<(THREE.Mesh | null)[]>([]);
  const cloudMeshes = useRef<Record<string, THREE.Mesh | null>>({});
  const pearls = useRef<THREE.InstancedMesh>(null);
  const dofTarget = useMemo(() => new THREE.Vector3(), []);
  const hp = useRef(0), np = useRef(0);
  const t0 = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0, on: 0, target: 0 });
  const par = useRef({ x: 0, y: 0 });
  const hovered = useRef<string | null>(null);
  const ready = useRef(false);
  const tmp = useMemo(() => new THREE.Vector3(), []);
  const ray = useMemo(() => new THREE.Raycaster(), []);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // The official drawing, etched in the floor.
  const planLines = useMemo(() => {
    const mat = new LineMaterial({ color: 0x8a94c4, linewidth: 1.1, worldUnits: false, transparent: true, opacity: 0.6 });
    const objs: Line2[] = [];
    const add = (pts: number[]) => {
      const g = new LineGeometry();
      g.setPositions(pts);
      const o = new Line2(g, mat);
      o.raycast = noRaycast;
      objs.push(o);
    };
    for (const l of drawn.lines.filter((x) => x.kind === 'official')) add(l.points.flatMap((p) => [p[0], 0.012, p[2]]));
    for (const id of NODE_IDS) {
      const b = drawn.nodes[id]!;
      const x0 = b.x - b.w / 2, x1 = b.x + b.w / 2, z0 = b.z - b.d / 2, z1 = b.z + b.d / 2;
      add([x0, 0.012, z0, x1, 0.012, z0, x1, 0.012, z1, x0, 0.012, z1, x0, 0.012, z0]);
    }
    return { mat, objs };
  }, []);

  const flowGeos = useMemo(
    () =>
      curves.map((c) => {
        const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(...c.p0), new THREE.Vector3(...c.p1), new THREE.Vector3(...c.p2));
        return { curve, geo: safe(new THREE.TubeGeometry(curve, 96, c.finding ? 0.07 : 0.1, 14, false)), late: !!c.finding };
      }),
    [],
  );

  const cloudGeos = useMemo(
    () =>
      built.lines
        .filter((l) => l.kind === 'cloud')
        .map((l) => {
          const raw = l.points.filter((_, i) => i % 2 === 0).map((p) => new THREE.Vector3(p[0], 0.06, p[2]));
          const pts = raw.filter((v, i) => i === 0 || v.distanceTo(raw[i - 1]!) > 1e-4);
          if (pts.length > 2 && pts[0]!.distanceTo(pts[pts.length - 1]!) < 1e-4) pts.pop();
          const curve = new THREE.CatmullRomCurve3(pts, true);
          return { id: l.id, geo: safe(new THREE.TubeGeometry(curve, 240, 0.05, 8, true)) };
        }),
    [],
  );

  useEffect(() => {
    planLines.mat.resolution.set(size.width, size.height);
  }, [size, planLines]);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
      mouse.current.target = e.pointerType === 'mouse' ? 1 : 0;
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  const toScreen = (p: Vec3) => {
    tmp.set(p[0], p[1], p[2]).project(camera);
    return [((tmp.x + 1) / 2) * size.width, ((1 - tmp.y) / 2) * size.height] as const;
  };

  useFrame((state, dt) => {
    const time = state.clock.elapsedTime;
    if (t0.current === null) t0.current = time;
    const it = time - t0.current;
    hp.current += (hero.current - hp.current) * (1 - Math.exp(-dt * 7));
    np.current += (next.current - np.current) * (1 - Math.exp(-dt * 6));
    const p = hp.current, q = np.current;
    const m = mouse.current;
    m.on += (m.target - m.on) * (1 - Math.exp(-dt * 4));
    par.current.x += (m.x * m.on - par.current.x) * (1 - Math.exp(-dt * 2.4));
    par.current.y += (m.y * m.on - par.current.y) * (1 - Math.exp(-dt * 2.4));

    const settle = easeOut(clamp01(it / 4.2));
    const e = ease(seg(p, HERO.camera));
    const W = size.width, H = size.height;

    // ---- Camera: an unhurried orbit that settles, then glides to the centre.
    const drift = Math.sin(time * 0.11) * 2;
    const az = (lerp(lerp(50, 40, settle), 30, e) + drift + par.current.x * 4 + q * 6) * DEG;
    const el = (lerp(lerp(36, 30, settle), 24, e) + par.current.y * 2.2 + q * 6) * DEG;
    const fov = 28;
    const zoom = lerp(lerp(0.86, 1, settle), 1.16, e) * lerp(1, 0.9, q);
    const fr = {
      x0: lerp(frames.start.x0, frames.end.x0, e) * W,
      y0: lerp(frames.start.y0, frames.end.y0, e) * H,
      x1: lerp(frames.start.x1, frames.end.x1, e) * W,
      y1: lerp(frames.start.y1, frames.end.y1, e) * H,
    };
    const fw = fr.x1 - fr.x0, fh = fr.y1 - fr.y0, fcx = (fr.x0 + fr.x1) / 2, fcy = (fr.y0 + fr.y1) / 2;
    const dir = new THREE.Vector3(Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az));
    const fwd = dir.clone().negate();
    const right = new THREE.Vector3().crossVectors(fwd, new THREE.Vector3(0, 1, 0)).normalize();
    const up = new THREE.Vector3().crossVectors(right, fwd).normalize();
    const pts = [0, 3.2].flatMap((y) => [
      new THREE.Vector3(SHEET.x0 + 1.5, y, SHEET.z0 + 1.5),
      new THREE.Vector3(SHEET.x1 - 1.5, y, SHEET.z0 + 1.5),
      new THREE.Vector3(SHEET.x1 - 1.5, y, SHEET.z1 - 1.5),
      new THREE.Vector3(SHEET.x0 + 1.5, y, SHEET.z1 - 1.5),
    ]);
    const T = CENTER.clone().setY(1);
    let dist = 50;
    const cam = camera as THREE.PerspectiveCamera;
    cam.fov = fov;
    cam.aspect = W / H;
    const place = () => {
      cam.position.copy(T).addScaledVector(dir, dist);
      cam.up.set(0, 1, 0);
      cam.lookAt(T);
      cam.near = 0.5;
      cam.far = 600;
      cam.updateProjectionMatrix();
      cam.updateMatrixWorld();
    };
    place();
    for (let i = 0; i < 4; i++) {
      let a = Infinity, b = -Infinity, c = Infinity, d = -Infinity;
      for (const v of pts) {
        tmp.copy(v).project(cam);
        const x = ((tmp.x + 1) / 2) * W, y = ((1 - tmp.y) / 2) * H;
        a = Math.min(a, x); b = Math.max(b, x); c = Math.min(c, y); d = Math.max(d, y);
      }
      const ppu = H / (2 * dist * Math.tan((fov * DEG) / 2));
      const kf = Math.min(fw / (b - a), fh / (d - c));
      T.addScaledVector(right, -(fcx - (a + b) / 2) / ppu).addScaledVector(up, (fcy - (c + d) / 2) / ppu);
      dist /= kf;
      place();
    }
    cam.fov = (2 * Math.atan(Math.tan((fov * DEG) / 2) / zoom)) / DEG;
    cam.updateProjectionMatrix();
    cam.updateMatrixWorld();
    const ppu = H / (2 * dist * Math.tan((cam.fov * DEG) / 2));
    dofTarget.copy(T);

    // ---- The blocks rise out of the drawing, then drift to where they really stand.
    const deform = ease(seg(p, HERO.dev));
    const devT = seg(p, HERO.dev);
    NODE_IDS.forEach((id, i) => {
      const g = nodeRefs.current[id];
      if (!g) return;
      const a = drawn.nodes[id]!, b = built.nodes[id]!;
      const rise = easeOut(clamp01((it - 0.35 - i * 0.14) / 1.4));
      g.position.set(lerp(a.x, b.x, deform), 0, lerp(a.z, b.z, deform));
      g.scale.set(lerp(a.w / b.w, 1, deform), Math.max(0.02, rise * lerp(a.h / b.h, 1, deform)), lerp(a.d / b.d, 1, deform));
      g.visible = rise > 0.01;
      const mm = nodeMats.current[id];
      if (mm && DEVIATES.has(id)) mm.color.lerpColors(PEARL, VERMILION, devT);
      if (mm && id === 'register') {
        mm.opacity = 1 - 0.62 * devT;
        mm.transparent = devT > 0;
      }
    });
    planLines.mat.opacity = 0.6 * clamp01(it / 1.2) * (1 - 0.7 * q);

    // ---- Work outside the systems: glossy ribbons grow along their arcs, pearls travel them.
    const flowT = seg(p, HERO.flows);
    flowGeos.forEach((f, i) => {
      const mesh = flowMeshes.current[i];
      if (!mesh) return;
      const reveal = f.late ? seg(p, HERO.a3) : clamp01((flowT * (flowGeos.length + 1) - i) / 2);
      const segs = Math.floor(96 * reveal);
      mesh.geometry.setDrawRange(0, segs * 14 * 6);
      mesh.visible = segs > 0 && q < 0.95;
    });
    if (pearls.current) {
      let k = 0;
      flowGeos.forEach((f, i) => {
        if (f.late) return;
        const show = clamp01((flowT * (flowGeos.length + 1) - i) / 2) > 0.98 && q < 0.6;
        for (let j = 0; j < 3; j++, k++) {
          const t = (time * 0.1 + j / 3 + i * 0.13) % 1;
          f.curve.getPoint(t, dummy.position);
          dummy.scale.setScalar(show ? 1 : 0.0001);
          dummy.updateMatrix();
          pearls.current!.setMatrixAt(k, dummy.matrix);
        }
      });
      pearls.current.instanceMatrix.needsUpdate = true;
    }

    // ---- Findings: vermilion revision rings, drawn one at a time.
    for (const c of cloudGeos) {
      const mesh = cloudMeshes.current[c.id];
      if (!mesh) continue;
      const id = c.id.replace('cloud-', '') as 'a1' | 'a2' | 'a3';
      const r = clamp01(seg(p, HERO[id]) / 0.6) * (1 - seg(q, [0, 0.3]));
      mesh.geometry.setDrawRange(0, Math.floor(240 * r) * 8 * 6);
      mesh.visible = r > 0.01;
    }

    // ---- The AIx2 mark: above the model in the hero, beside the heading in Red lines.
    if (mark.current) {
      const mIn = easeOut(clamp01((it - 1.6) / 1.6));
      const heroPos = new THREE.Vector3(16.6, 5.4 + Math.sin(time * 0.8) * 0.16, 2.4);
      const redPos = T.clone().addScaledVector(right, (W * 0.25) / ppu).addScaledVector(up, (H * 0.04) / ppu);
      const k = ease(seg(q, [0.05, 0.85]));
      mark.current.position.lerpVectors(heroPos, redPos, k);
      mark.current.scale.setScalar(Math.max(0.0001, lerp(1.25, (H * 0.3) / ppu / 2.2, k) * mIn));
      const face = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(right, up, dir));
      const spinY = lerp(Math.sin(time * 0.4) * 0.6, Math.sin(time * 0.5) * 0.3, k) + par.current.x * 0.8;
      const spin = new THREE.Quaternion().setFromEuler(new THREE.Euler(lerp(-0.15, -0.05, k) + par.current.y * 0.35, spinY, 0));
      mark.current.quaternion.copy(face).multiply(spin);
    }

    // ---- Hover
    ray.setFromCamera(new THREE.Vector2(m.x, m.y), cam);
    let hov: string | null = null;
    if (m.on > 0.5) {
      for (const id of NODE_IDS) {
        const g = nodeRefs.current[id];
        if (g && ray.intersectObject(g, true)[0]) {
          hov = id;
          break;
        }
      }
    }
    hovered.current = hov;

    // ---- HTML overlays: one finding at a time.
    const f: SceneFrame = computeScene({ extrude: 1, hidden: 1, deform, a1: seg(p, HERO.a1), a2: seg(p, HERO.a2), a3: seg(p, HERO.a3) });
    if (overlay.layer.current) overlay.layer.current.style.opacity = ((1 - clamp01(mid.current * 2.2)) * (1 - seg(q, [0, 0.25]))).toFixed(3);
    const colR = frames.end.x1 * W + 18, colL = frames.end.x0 * W - 18;
    let activeSubject: string | null = null;
    for (const a of f.anchors) {
      const [s0, s1] = WINDOWS[a.id];
      const on = clamp01((p - s0) / 0.025) * (a.id === 'a3' ? 1 : clamp01((s1 - p) / 0.025));
      if (on > 0.5) activeSubject = SUBJECT[a.id];
      const cloud = f.lines.find((l) => l.id === `cloud-${a.id}`)!;
      const leader = f.lines.find((l) => l.id === `leader-${a.id}`)!;
      const side = sides[a.id] ?? a.side;
      let foot: [number, number] = [0, 0];
      let best = side === 'right' ? -Infinity : Infinity;
      for (let i = 0; i < cloud.points.length; i += 2) {
        const [x, y] = toScreen(cloud.points[i]!);
        if ((side === 'right' && x > best) || (side === 'left' && x < best)) {
          best = x;
          foot = [x, y];
        }
      }
      const y = Math.min(Math.max(foot[1] - 30, H * 0.18), H * 0.8);
      const nx = side === 'right' ? colR : colL;
      const sg = side === 'right' ? 1 : -1;
      const el = overlay.annotations.current[a.id];
      const path = overlay.leaders.current[a.id];
      if (el) {
        el.style.transform = `translate3d(${nx.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
        el.style.opacity = (on * a.reveal).toFixed(3);
      }
      if (path) {
        path.setAttribute('d', `M${foot[0].toFixed(1)} ${foot[1].toFixed(1)}L${(nx - sg * 26).toFixed(1)} ${y.toFixed(1)}L${nx.toFixed(1)} ${y.toFixed(1)}`);
        path.style.strokeDashoffset = (1 - leader.reveal).toFixed(3);
        path.style.opacity = on.toFixed(3);
      }
    }
    // Labels: the key ones on arrival; later only the block a finding is about, or the one under the pointer.
    const arrival = clamp01((it - 2.6) / 0.8) * (1 - seg(p, [0.08, 0.16]));
    for (const id of NODE_IDS) {
      const el = overlay.nodes.current[id];
      const g = nodeRefs.current[id];
      if (!el || !g) continue;
      const b = built.nodes[id]!;
      const [x, y] = toScreen([g.position.x, b.h * g.scale.y + 0.1, g.position.z]);
      const isH = hovered.current === id;
      const show = isH ? 1 : Math.max(KEY_LABELS.has(id) ? arrival : 0, activeSubject === id ? 1 : 0);
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      el.style.opacity = show.toFixed(3);
      el.dataset.hover = isH ? 'true' : 'false';
    }

    if (!ready.current) {
      ready.current = true;
      requestAnimationFrame(() => onReady());
    }
  });

  return (
    <>
      <Backdrop />
      <fog attach="fog" args={['#e4e5ee', 70, 170]} />
      <Environment resolution={256} frames={1}>
        {/* A light studio around the model, so chrome and glass reflect light, not black. */}
        <color attach="background" args={['#8d92aa']} />
        <Lightformer form="rect" intensity={2.6} position={[0, 14, 4]} rotation-x={Math.PI / 2} scale={[28, 14, 1]} />
        <Lightformer form="rect" intensity={1.8} color="#fff4ea" position={[-16, 6, 8]} rotation-y={Math.PI / 2} scale={[16, 6, 1]} />
        <Lightformer form="rect" intensity={1.6} color="#e6e3ff" position={[18, 5, -6]} rotation-y={-Math.PI / 2} scale={[16, 5, 1]} />
        <Lightformer form="rect" intensity={1.2} color="#ffffff" position={[0, 6, -20]} scale={[34, 8, 1]} />
      </Environment>
      <hemisphereLight args={['#ffffff', '#9a9eb8', 0.55]} />
      <directionalLight position={[-12, 18, 10]} intensity={2.8} color="#fff6ec" />
      <directionalLight position={[16, 6, -6]} intensity={0.5} color="#d9dcff" />

      {/* A matte studio floor with the official drawing etched into it. */}
      <mesh rotation-x={-Math.PI / 2} position={[CENTER.x, 0, CENTER.z]} raycast={noRaycast}>
        <planeGeometry args={[160, 160]} />
        <meshStandardMaterial color="#d6d8e4" roughness={0.92} metalness={0} />
      </mesh>
      <ContactShadows position={[CENTER.x, 0.006, CENTER.z]} scale={44} blur={1.8} far={4.5} opacity={0.85} resolution={1024} color="#151935" frames={Infinity} />
      {planLines.objs.map((o, i) => (
        <primitive key={i} object={o} />
      ))}

      {/* The company: pearl-ceramic blocks (teams), satin-chrome towers (systems), a clear-glass vendor portal. */}
      {NODE_IDS.map((id) => {
        const b = built.nodes[id]!;
        const setMat = (mm: THREE.MeshPhysicalMaterial | null) => {
          nodeMats.current[id] = mm;
        };
        return (
          <group
            key={id}
            ref={(g) => {
              nodeRefs.current[id] = g;
            }}
          >
            <RoundedBox args={[b.w, b.h, b.d]} radius={Math.min(0.26, b.h / 3, b.w / 4)} smoothness={6} position-y={b.h / 2}>
              {b.kind === 'system' ? (
                <meshPhysicalMaterial ref={setMat} color="#b6b9c9" metalness={1} roughness={0.17} clearcoat={1} clearcoatRoughness={0.06} envMapIntensity={1.35} />
              ) : b.kind === 'external' ? (
                <meshPhysicalMaterial ref={setMat} color="#eef0ff" transmission={1} roughness={0.14} thickness={0.7} ior={1.4} attenuationColor="#c9cfff" attenuationDistance={3} clearcoat={1} envMapIntensity={0.9} />
              ) : (
                <meshPhysicalMaterial ref={setMat} color="#f3f3f7" roughness={0.36} metalness={0} clearcoat={0.7} clearcoatRoughness={0.16} envMapIntensity={0.9} />
              )}
            </RoundedBox>
          </group>
        );
      })}

      {/* Work outside the systems: glossy lavender ribbons, and pearls that travel them. */}
      {flowGeos.map((f, i) => (
        <mesh
          key={i}
          geometry={f.geo}
          ref={(mm) => {
            flowMeshes.current[i] = mm;
          }}
          raycast={noRaycast}
        >
          {f.late ? (
            <meshPhysicalMaterial color="#f2552f" roughness={0.18} clearcoat={1} clearcoatRoughness={0.06} />
          ) : (
            <meshPhysicalMaterial color="#7f76f0" metalness={0.3} roughness={0.2} clearcoat={1} clearcoatRoughness={0.05} envMapIntensity={1.2} />
          )}
        </mesh>
      ))}
      <instancedMesh ref={pearls} args={[undefined, undefined, 15]} raycast={noRaycast}>
        <sphereGeometry args={[0.2, 24, 16]} />
        <meshPhysicalMaterial color="#ffffff" roughness={0.1} clearcoat={1} envMapIntensity={1.2} />
      </instancedMesh>

      {/* Findings: vermilion revision rings on the floor. */}
      {cloudGeos.map((c) => (
        <mesh
          key={c.id}
          geometry={c.geo}
          ref={(mm) => {
            cloudMeshes.current[c.id] = mm;
          }}
          raycast={noRaycast}
        >
          <meshPhysicalMaterial color="#f2552f" roughness={0.22} clearcoat={1} clearcoatRoughness={0.08} />
        </mesh>
      ))}

      {/* The AIx2 mark in 3D: a glass square (as drawn) over an indigo square (as built), out of register. */}
      <group ref={mark} scale={0.0001}>
        <RoundedBox args={[2.2, 2.2, 0.36]} radius={0.3} smoothness={8} raycast={noRaycast}>
          <MeshTransmissionMaterial
            samples={6}
            resolution={512}
            thickness={0.35}
            roughness={0.05}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0}
            distortionScale={0.3}
            ior={1.5}
            color="#ffffff"
            attenuationColor="#ffffff"
            attenuationDistance={20}
            background={new THREE.Color('#e9eaf2')}
            backside
            backsideThickness={0.2}
          />
        </RoundedBox>
        <RoundedBox args={[2.2, 2.2, 0.3]} radius={0.3} smoothness={8} position={[0.62, -0.62, 0.42]} raycast={noRaycast}>
          <meshPhysicalMaterial color="#2f3a8f" roughness={0.22} metalness={0.2} clearcoat={1} clearcoatRoughness={0.06} envMapIntensity={1.2} />
        </RoundedBox>
      </group>

      <Effects target={dofTarget} />
    </>
  );
}

function Effects({ target }: { target: THREE.Vector3 }) {
  const [hq, setHq] = useState(true);
  return (
    <>
      <PerformanceMonitor onDecline={() => setHq(false)} />
      <EffectComposer multisampling={0}>
        <Bloom mipmapBlur intensity={0.22} luminanceThreshold={0.96} luminanceSmoothing={0.1} />
        {hq ? <DepthOfField target={target} focalLength={0.016} bokehScale={1.3} height={540} /> : null}
        <ToneMapping mode={ToneMappingMode.NEUTRAL} />
        <Noise premultiply blendFunction={BlendFunction.SOFT_LIGHT} opacity={0.12} />
        <Vignette offset={0.38} darkness={0.22} />
      </EffectComposer>
    </>
  );
}

export default function StudioCanvas(props: Props & { active: boolean }) {
  const { active, ...rest } = props;
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? 'always' : 'never'}
      gl={{ antialias: false, alpha: false, powerPreference: 'high-performance', toneMapping: THREE.NoToneMapping }}
      camera={{ fov: 28, near: 0.5, far: 600, position: [40, 30, 40] }}
      style={{ position: 'absolute', inset: 0 }}
      aria-hidden="true"
      tabIndex={-1}
    >
      <Scene {...rest} />
    </Canvas>
  );
}
