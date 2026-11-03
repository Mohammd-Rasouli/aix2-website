'use client';

/**
 * The as-built scan. One fixed canvas behind the whole page.
 *  - Intro: the official drawing appears as fine lines; the company's data (a slow cloud of
 *    points) streams in and assembles into a scan of the company as built.
 *  - Hero scroll: the camera settles; work outside the systems flows as particle streams;
 *    where the scan departs from the drawing, points heat to vermilion; the findings land.
 *  - Into Red lines: the cloud re-forms into the Δ mark, the difference between drawn and built.
 *  - The pointer pushes the points aside, like a hand through a scan.
 */

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState, type MutableRefObject } from 'react';
import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { BUILT, DRAWN, NODE_IDS, SHEET, clamp01, computeScene, trimPolyline, type SceneFrame, type Vec3 } from '@/scene/model';
import { buildScan, flowCurves } from '@/scene/scan';

export interface Rect {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export interface ScanOverlay {
  annotations: MutableRefObject<Record<string, HTMLElement | null>>;
  leaders: MutableRefObject<Record<string, SVGPathElement | null>>;
  flows: MutableRefObject<Record<string, HTMLElement | null>>;
  nodes: MutableRefObject<Record<string, HTMLElement | null>>;
  layer: MutableRefObject<HTMLElement | null>;
}

interface Props {
  mid?: MutableRefObject<number>;
  hero: MutableRefObject<number>; // 0..1 through the hero
  next: MutableRefObject<number>; // 0..1 as Red lines arrives
  frames: { start: Rect; end: Rect };
  overlay: ScanOverlay;
  sides: Record<string, 'left' | 'right'>;
  onReady: () => void;
}

const DEG = Math.PI / 180;
const NIGHT = '#05070c';
const PLAN = '#7f98d8';
const RED = '#ff5a36';

// The copy fades over the first scroll; the camera waits for it, then the story plays.
const HERO = { camera: [0.16, 0.48], hidden: [0.28, 0.56], dev: [0.4, 0.64], a1: [0.6, 0.71], a2: [0.69, 0.8], a3: [0.78, 0.89] } as const;
const INTRO = { lines: [0.1, 1.4], morph: [0.5, 3.8], settle: [0, 4.2] } as const;
const seg = (t: number, [a, b]: readonly [number, number]) => clamp01((t - a) / (b - a));
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const noRaycast = () => {};

const SCAN_VS = /* glsl */ `
uniform float uTime, uMorph, uDev, uDelta, uPixel, uSize, uAspect, uMouseOn;
uniform vec2 uMouse;
uniform vec3 uDeltaC;
uniform float uDeltaS;
uniform mat3 uDeltaR;
attribute vec3 aScatter;
attribute vec3 aDelta;
attribute float aDelay;
attribute float aSize;
attribute float aDev;
attribute float aKind;
varying vec3 vColor;
varying float vAlpha;
void main() {
  float t = clamp((uMorph - aDelay * 0.55) / 0.45, 0.0, 1.0);
  t = t * t * (3.0 - 2.0 * t);
  vec3 drift = vec3(sin(uTime * 0.5 + aDelay * 37.0), cos(uTime * 0.43 + aDelay * 23.0), sin(uTime * 0.37 + aDelay * 51.0));
  vec3 p = mix(aScatter + drift * 0.7, position + drift * 0.006, t);
  float td = clamp((uDelta - aDelay * 0.45) / 0.55, 0.0, 1.0);
  td = td * td * (3.0 - 2.0 * td);
  vec3 dp = uDeltaC + uDeltaR * (aDelta * uDeltaS) + drift * 0.012 * uDeltaS;
  p = mix(p, dp, td);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vec4 clip = projectionMatrix * mv;
  vec2 ndc = clip.xy / clip.w;
  vec2 dd = ndc - uMouse;
  dd.x *= uAspect;
  float r = length(dd);
  float f = uMouseOn * smoothstep(0.17, 0.0, r);
  ndc += (dd / max(r, 1e-4)) * f * 0.045 * vec2(1.0 / uAspect, 1.0);
  clip.xy = ndc * clip.w;
  gl_Position = clip;
  gl_PointSize = uSize * aSize * (1.0 + f * 1.2) * uPixel * (20.0 / -mv.z);
  vec3 floorC = vec3(0.36, 0.45, 0.7);
  vec3 surfC = vec3(0.86, 0.87, 0.9);
  vec3 edgeC = vec3(1.0, 0.99, 0.97);
  vec3 base = aKind < 0.5 ? floorC : (aKind < 1.5 ? surfC : edgeC);
  vec3 hot = vec3(1.0, 0.33, 0.2);
  float heat = clamp(aDev * uDev * 1.5, 0.0, 1.0);
  vec3 col = mix(base, hot, heat);
  col = mix(col, hot, td * 0.92);
  vColor = col;
  float a = aKind < 0.5 ? 0.24 : (aKind < 1.5 ? 0.6 : 1.0);
  vAlpha = (a * mix(0.38, 1.0, t) + heat * 0.35 + f * 0.5) * mix(1.0, 0.85, td);
}
`;

const SCAN_FS = /* glsl */ `
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if (d > 0.5) discard;
  gl_FragColor = vec4(vColor, vAlpha * smoothstep(0.5, 0.1, d));
}
`;

const FLOW_VS = /* glsl */ `
uniform float uTime, uHidden, uLate, uPixel, uSize, uFade;
uniform vec3 uP0[6];
uniform vec3 uP1[6];
uniform vec3 uP2[6];
uniform float uIsLate[6];
attribute float aCurve, aOffset, aSpeed, aJit;
varying float vAlpha;
varying float vLate;
void main() {
  int c = int(aCurve + 0.5);
  float late = uIsLate[c];
  float t = fract(aOffset + uTime * aSpeed);
  float u = 1.0 - t;
  vec3 p = u * u * uP0[c] + 2.0 * u * t * uP1[c] + t * t * uP2[c];
  p += vec3(sin(aJit * 91.0 + uTime * 1.3), cos(aJit * 53.0 + uTime), sin(aJit * 17.0 + uTime * 1.1)) * 0.05;
  float gate = late > 0.5 ? uLate : uHidden;
  float show = step(t, gate * 1.12) * smoothstep(0.0, 0.08, gate);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * (0.8 + aJit * 0.6) * uPixel * (20.0 / -mv.z);
  vAlpha = show * uFade * (0.5 + 0.5 * sin(3.14159 * t));
  vLate = late;
}
`;

const FLOW_FS = /* glsl */ `
varying float vAlpha;
varying float vLate;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if (d > 0.5) discard;
  vec3 col = mix(vec3(1.0, 0.9, 0.76), vec3(1.0, 0.36, 0.22), vLate);
  gl_FragColor = vec4(col, vAlpha * smoothstep(0.5, 0.0, d));
}
`;

function lineMat(color: string, width: number, opacity: number) {
  const m = new LineMaterial({ color: new THREE.Color(color).getHex(), linewidth: width, worldUnits: false, transparent: true, opacity });
  m.toneMapped = false;
  m.depthWrite = false;
  return m;
}

function build() {
  const scan = buildScan(56000);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(scan.position, 3));
  geo.setAttribute('aScatter', new THREE.BufferAttribute(scan.scatter, 3));
  geo.setAttribute('aDelta', new THREE.BufferAttribute(scan.delta, 3));
  geo.setAttribute('aDelay', new THREE.BufferAttribute(scan.delay, 1));
  geo.setAttribute('aSize', new THREE.BufferAttribute(scan.size, 1));
  geo.setAttribute('aDev', new THREE.BufferAttribute(scan.dev, 1));
  geo.setAttribute('aKind', new THREE.BufferAttribute(scan.kind, 1));
  geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(10.5, 3, 8), 60);
  const scanMat = new THREE.ShaderMaterial({
    vertexShader: SCAN_VS,
    fragmentShader: SCAN_FS,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uMorph: { value: 0 },
      uDev: { value: 0 },
      uDelta: { value: 0 },
      uPixel: { value: 1 },
      uSize: { value: 4.1 },
      uAspect: { value: 1.6 },
      uMouse: { value: new THREE.Vector2(9, 9) },
      uMouseOn: { value: 0 },
      uDeltaC: { value: new THREE.Vector3() },
      uDeltaS: { value: 8 },
      uDeltaR: { value: new THREE.Matrix3() },
    },
  });
  const points = new THREE.Points(geo, scanMat);
  points.frustumCulled = false;
  points.raycast = noRaycast;

  // Flows: work moving outside the systems.
  const curves = flowCurves();
  const per = 760;
  const n = curves.length * per;
  const fg = new THREE.BufferGeometry();
  const aCurve = new Float32Array(n), aOffset = new Float32Array(n), aSpeed = new Float32Array(n), aJit = new Float32Array(n);
  let k = 0;
  curves.forEach((c, ci) => {
    for (let i = 0; i < per; i++, k++) {
      aCurve[k] = ci;
      aOffset[k] = Math.random();
      aSpeed[k] = 0.05 + Math.random() * 0.05;
      aJit[k] = Math.random();
    }
  });
  fg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  fg.setAttribute('aCurve', new THREE.BufferAttribute(aCurve, 1));
  fg.setAttribute('aOffset', new THREE.BufferAttribute(aOffset, 1));
  fg.setAttribute('aSpeed', new THREE.BufferAttribute(aSpeed, 1));
  fg.setAttribute('aJit', new THREE.BufferAttribute(aJit, 1));
  const pad = (arr: THREE.Vector3[]) => {
    while (arr.length < 6) arr.push(new THREE.Vector3());
    return arr;
  };
  const flowMat = new THREE.ShaderMaterial({
    vertexShader: FLOW_VS,
    fragmentShader: FLOW_FS,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uHidden: { value: 0 },
      uLate: { value: 0 },
      uFade: { value: 1 },
      uPixel: { value: 1 },
      uSize: { value: 4.8 },
      uP0: { value: pad(curves.map((c) => new THREE.Vector3(...c.p0))) },
      uP1: { value: pad(curves.map((c) => new THREE.Vector3(...c.p1))) },
      uP2: { value: pad(curves.map((c) => new THREE.Vector3(...c.p2))) },
      uIsLate: { value: [...curves.map((c) => (c.finding ? 1 : 0)), ...new Array(6 - curves.length).fill(0)] },
    },
  });
  const flows = new THREE.Points(fg, flowMat);
  flows.frustumCulled = false;
  flows.raycast = noRaycast;

  // The official drawing: what the company says it is.
  const drawn = computeScene({ ...DRAWN, extrude: 1 });
  const edges: number[] = [];
  for (const id of NODE_IDS) {
    const b = drawn.nodes[id]!;
    const x0 = b.x - b.w / 2, x1 = b.x + b.w / 2, z0 = b.z - b.d / 2, z1 = b.z + b.d / 2, h = b.h;
    const c: Vec3[] = [[x0, 0, z0], [x1, 0, z0], [x1, 0, z1], [x0, 0, z1], [x0, h, z0], [x1, h, z0], [x1, h, z1], [x0, h, z1]];
    for (const [a, d] of [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]] as const) edges.push(...c[a]!, ...c[d]!);
  }
  for (const l of drawn.lines.filter((x) => x.kind === 'official')) {
    for (let i = 1; i < l.points.length; i++) edges.push(...l.points[i - 1]!, ...l.points[i]!);
  }
  const eg = new LineSegmentsGeometry();
  eg.setPositions(edges);
  const drawnMat = lineMat(PLAN, 1, 0);
  const wire = new LineSegments2(eg, drawnMat);
  wire.raycast = noRaycast;
  wire.frustumCulled = false;

  // Invisible volumes for hover.
  const hit = new THREE.Group();
  const box = new THREE.BoxGeometry(1, 1, 1);
  box.translate(0, 0.5, 0);
  const hitMat = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false });
  const builtNodes = computeScene(BUILT).nodes;
  for (const id of NODE_IDS) {
    const b = builtNodes[id]!;
    const m = new THREE.Mesh(box, hitMat);
    m.position.set(b.x, 0, b.z);
    m.scale.set(b.w, b.h, b.d);
    m.userData.id = id;
    hit.add(m);
  }

  const root = new THREE.Group();
  root.add(wire, points, flows, hit);
  return { root, scanMat, flowMat, drawnMat, cloudMat: lineMat(RED, 2.2, 0.95), hit, clouds: {} as Record<string, Line2> };
}

function Scene({ hero, next, frames, overlay, sides, onReady }: Props) {
  const { camera, size, scene, gl } = useThree();
  const b = useMemo(() => build(), []);
  const hp = useRef(0);
  const np = useRef(0);
  const t0 = useRef<number | null>(null);
  const mouse = useRef({ x: 9, y: 9, on: 0, target: 0 });
  const par = useRef({ x: 0, y: 0 });
  const hovered = useRef<string | null>(null);
  const ray = useMemo(() => new THREE.Raycaster(), []);
  const tmp = useMemo(() => new THREE.Vector3(), []);
  const ready = useRef(false);
  const lastKey = useRef('');
  const frameRef = useRef<SceneFrame | null>(null);

  useEffect(() => {
    scene.background = new THREE.Color(NIGHT);
    gl.toneMapping = THREE.NoToneMapping;
  }, [scene, gl]);

  useEffect(() => {
    b.drawnMat.resolution.set(size.width, size.height);
    b.cloudMat.resolution.set(size.width, size.height);
    b.scanMat.uniforms.uAspect!.value = size.width / size.height;
  }, [size, b]);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
      mouse.current.target = e.pointerType === 'mouse' ? 1 : 0;
    };
    const leave = () => {
      mouse.current.target = 0;
    };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
    };
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
    par.current.x += ((m.on ? m.x : 0) - par.current.x) * (1 - Math.exp(-dt * 2.2));
    par.current.y += ((m.on ? m.y : 0) - par.current.y) * (1 - Math.exp(-dt * 2.2));

    const settle = ease(seg(it, INTRO.settle));
    const e = ease(seg(p, HERO.camera));
    const W = size.width, H = size.height;

    // ---- Camera: an unhurried orbit that settles, then glides to the centre.
    const drift = Math.sin(time * 0.12) * 2.2;
    const az = (lerp(lerp(52, 42, settle), 30, e) + drift + par.current.x * 3.2 + q * 8) * DEG;
    const el = (lerp(lerp(46, 36, settle), 26, e) + par.current.y * 1.8 - q * 4) * DEG;
    const fov = 32;
    const zoom = lerp(lerp(0.82, 1, settle), 1.2, e) * lerp(1, 0.92, q);
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
    const pts = [0, 2.6].flatMap((y) => [
      new THREE.Vector3(SHEET.x0 + 1.5, y, SHEET.z0 + 1.5),
      new THREE.Vector3(SHEET.x1 - 1.5, y, SHEET.z0 + 1.5),
      new THREE.Vector3(SHEET.x1 - 1.5, y, SHEET.z1 - 1.5),
      new THREE.Vector3(SHEET.x0 + 1.5, y, SHEET.z1 - 1.5),
    ]);
    const T = new THREE.Vector3((SHEET.x0 + SHEET.x1) / 2, 1, (SHEET.z0 + SHEET.z1) / 2);
    let dist = 50;
    const cam = camera as THREE.PerspectiveCamera;
    cam.fov = fov;
    cam.aspect = W / H;
    const place = () => {
      cam.position.copy(T).addScaledVector(dir, dist);
      cam.up.set(0, 1, 0);
      cam.lookAt(T);
      cam.near = Math.max(0.1, dist - 70);
      cam.far = dist + 90;
      cam.updateProjectionMatrix();
      cam.updateMatrixWorld();
    };
    place();
    for (let i = 0; i < 4; i++) {
      let a = Infinity, bb = -Infinity, c = Infinity, d = -Infinity;
      for (const v of pts) {
        tmp.copy(v).project(cam);
        const x = ((tmp.x + 1) / 2) * W, y = ((1 - tmp.y) / 2) * H;
        a = Math.min(a, x); bb = Math.max(bb, x); c = Math.min(c, y); d = Math.max(d, y);
      }
      const ppu = H / (2 * dist * Math.tan((fov * DEG) / 2));
      const kf = Math.min(fw / (bb - a), fh / (d - c));
      T.addScaledVector(right, -(fcx - (a + bb) / 2) / ppu).addScaledVector(up, (fcy - (c + d) / 2) / ppu);
      dist /= kf;
      place();
    }
    cam.fov = (2 * Math.atan(Math.tan((fov * DEG) / 2) / zoom)) / DEG;
    cam.updateProjectionMatrix();
    cam.updateMatrixWorld();

    // ---- Uniforms.
    const ppu = H / (2 * dist * Math.tan((cam.fov * DEG) / 2));
    const su = b.scanMat.uniforms;
    su.uTime!.value = time;
    su.uMorph!.value = ease(seg(it, INTRO.morph));
    su.uDev!.value = seg(p, HERO.dev);
    su.uDelta!.value = ease(seg(q, [0.08, 0.85]));
    su.uPixel!.value = gl.getPixelRatio();
    su.uMouse!.value.set(m.x, m.y);
    su.uMouseOn!.value = m.on;
    // The Δ floats to the right of the Red lines heading, facing the camera.
    const dc = T.clone().addScaledVector(right, (W * 0.24) / ppu).addScaledVector(up, (H * 0.04) / ppu);
    su.uDeltaC!.value.copy(dc);
    su.uDeltaS!.value = (H * 0.5) / ppu;
    const rot = new THREE.Matrix4().makeBasis(right, up, dir).multiply(new THREE.Matrix4().makeRotationY(Math.sin(time * 0.35) * 0.35));
    su.uDeltaR!.value.setFromMatrix4(rot);
    const fu = b.flowMat.uniforms;
    fu.uTime!.value = time;
    fu.uHidden!.value = seg(p, HERO.hidden);
    fu.uLate!.value = seg(p, HERO.a3);
    fu.uFade!.value = 1 - seg(q, [0.0, 0.4]);
    fu.uPixel!.value = gl.getPixelRatio();
    b.drawnMat.opacity = 0.5 * ease(seg(it, INTRO.lines)) * (1 - seg(q, [0, 0.4]));

    // ---- Red clouds.
    const st = { extrude: 1, hidden: 1, deform: 1, a1: seg(p, HERO.a1), a2: seg(p, HERO.a2), a3: seg(p, HERO.a3) };
    const key = [st.a1, st.a2, st.a3].map((v) => v.toFixed(3)).join('|');
    if (key !== lastKey.current || !frameRef.current) {
      lastKey.current = key;
      const f = computeScene(st);
      frameRef.current = f;
      for (const l of f.lines.filter((x) => x.kind === 'cloud')) {
        let o = b.clouds[l.id];
        if (!o) {
          o = new Line2(new LineGeometry(), b.cloudMat);
          o.frustumCulled = false;
          o.raycast = noRaycast;
          b.clouds[l.id] = o;
          b.root.add(o);
        }
        const pp = trimPolyline(l.points, l.reveal);
        o.visible = pp.length > 1;
        if (pp.length > 1) {
          o.geometry.dispose();
          const g = new LineGeometry();
          g.setPositions(pp.flat());
          o.geometry = g;
        }
      }
    }
    b.cloudMat.opacity = 0.95 * (1 - seg(q, [0, 0.3]));

    // ---- Hover: which volume is under the pointer.
    ray.setFromCamera(new THREE.Vector2(m.x, m.y), cam);
    const hit = m.on > 0.5 ? ray.intersectObjects(b.hit.children, false)[0] : undefined;
    hovered.current = (hit?.object.userData.id as string | undefined) ?? null;

    // ---- HTML overlays.
    const f = frameRef.current!;
    const heroOut = 1 - seg(q, [0, 0.25]);
    if (overlay.layer.current) overlay.layer.current.style.opacity = heroOut.toFixed(3);
    const colR = frames.end.x1 * W + 18, colL = frames.end.x0 * W - 18;
    const placed = f.anchors.map((a) => {
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
      return { a, side, foot, y: foot[1], lr: leader.reveal };
    });
    for (const sd of ['left', 'right'] as const) {
      let prev = -Infinity;
      for (const qq of placed.filter((r) => r.side === sd).sort((u, v) => u.foot[1] - v.foot[1])) {
        qq.y = Math.min(Math.max(qq.foot[1] - 30, H * 0.14, prev + 128), H * 0.86);
        prev = qq.y;
      }
    }
    for (const qq of placed) {
      const el = overlay.annotations.current[qq.a.id];
      const path = overlay.leaders.current[qq.a.id];
      const sg = qq.side === 'right' ? 1 : -1;
      const nx = qq.side === 'right' ? colR : colL;
      if (el) {
        el.style.transform = `translate3d(${nx.toFixed(1)}px, ${qq.y.toFixed(1)}px, 0)`;
        el.style.opacity = qq.a.reveal.toFixed(3);
      }
      if (path) {
        path.setAttribute('d', `M${qq.foot[0].toFixed(1)} ${qq.foot[1].toFixed(1)}L${(nx - sg * 26).toFixed(1)} ${qq.y.toFixed(1)}L${nx.toFixed(1)} ${qq.y.toFixed(1)}`);
        path.style.strokeDashoffset = (1 - qq.lr).toFixed(3);
      }
    }
    const fl = seg(p, HERO.hidden);
    for (const l of f.lines) {
      if (l.kind !== 'hidden' || !l.label || !l.labelAt) continue;
      const el = overlay.flows.current[l.label];
      if (!el) continue;
      const [x, y] = toScreen(l.labelAt);
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      el.style.opacity = (clamp01((fl - 0.6) / 0.3) * (1 - 0.55 * seg(p, HERO.a1))).toFixed(3);
    }
    const labelIn = clamp01((it - 3.2) / 0.8) * (1 - 0.5 * seg(p, HERO.a1));
    for (const id of NODE_IDS) {
      const el = overlay.nodes.current[id];
      if (!el) continue;
      const n = f.nodes[id]!;
      const [x, y] = toScreen([n.x, n.h + 0.05, n.z]);
      const hov = hovered.current === id;
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      el.style.opacity = (hov ? 1 : labelIn).toFixed(3);
      el.dataset.hover = hov ? 'true' : 'false';
    }

    if (!ready.current) {
      ready.current = true;
      requestAnimationFrame(() => onReady());
    }
  });

  return <primitive object={b.root} />;
}

export default function ScanCanvas(props: Props & { active: boolean }) {
  const [dpr, setDpr] = useState(1.5);
  const { active, ...rest } = props;
  return (
    <Canvas
      dpr={[1, Math.min(dpr, 1.75)]}
      frameloop={active ? 'always' : 'never'}
      gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
      camera={{ fov: 32, near: 1, far: 400, position: [40, 40, 40] }}
      style={{ position: 'absolute', inset: 0 }}
      aria-hidden="true"
      tabIndex={-1}
    >
      <PerformanceMonitor onIncline={() => setDpr(1.75)} onDecline={() => setDpr(1)} />
      <Scene {...rest} />
    </Canvas>
  );
}
