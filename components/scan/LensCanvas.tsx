'use client';

/**
 * The AIx2 lens. The company, as drawn, lies on a dark table: its official route and its
 * teams and systems in fine cream lines. The pointer is a gold lens: inside it the company
 * appears as built: the blocks stand up, work outside the systems flows as light, the route
 * splits into three, the change register is bypassed. On scroll the lens opens to the whole
 * company, and the findings land one at a time.
 *
 * Every material in the scene shares one lens uniform (screen-space circle): built things
 * Geometry and lighting use native Three.js primitives to keep the canvas dependency-light.
 * show only inside it; the drawing dims inside it.
 */

import { Canvas, useFrame, useThree } from '@react-three/fiber';
// Use native Three.js geometry to avoid an optional drei dependency in the preview bundle.
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { Bloom, EffectComposer, Noise, ToneMapping, Vignette } from '@react-three/postprocessing';
import { BlendFunction, ToneMappingMode } from 'postprocessing';
import { useEffect, useMemo, useRef, type MutableRefObject } from 'react';
import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { BUILT, DRAWN, NODE_IDS, SHEET, clamp01, computeScene, type SceneFrame, type Vec3 } from '@/scene/model';
import { flowCurves } from '@/scene/scan';
import { cloudPath } from '@/scene/cloud2d';
import type { Rect } from './ScanCanvas';
import { useTheme } from '@/components/shell/ThemeToggle';
import { isLightTheme } from '@/components/shell/theme';

export interface LensOverlay {
  annotations: MutableRefObject<Record<string, HTMLElement | null>>;
  leaders: MutableRefObject<Record<string, SVGPathElement | null>>;
  /** Red-ink revision clouds, drawn over the render around each finding's subject. */
  clouds: MutableRefObject<Record<string, SVGPathElement | null>>;
  flows: MutableRefObject<Record<string, HTMLElement | null>>;
  nodes: MutableRefObject<Record<string, HTMLElement | null>>;
  layer: MutableRefObject<HTMLElement | null>;
  ring: MutableRefObject<HTMLElement | null>;
  hint: MutableRefObject<HTMLElement | null>;
  /** The model key, top right: notes on the right keep clear of it. */
  modelKey?: MutableRefObject<HTMLElement | null>;
  /** Where the model sits in How (the sticky rail) and in Two lenses (the lens frame). */
  howAnchor?: MutableRefObject<HTMLElement | null>;
  lensAnchor?: MutableRefObject<HTMLElement | null>;
  layerLabels?: MutableRefObject<(HTMLElement | null)[]>;
  lensLabels?: MutableRefObject<Record<string, HTMLElement | null>>;
}

/** Later sections the scene carries into: How (visibility, active step) and Two lenses (visibility, lens). */
export interface ScenePhases {
  how: number;
  step: number;
  lens: number;
  mode: 'operator' | 'investor';
}

interface Props {
  hero: MutableRefObject<number>;
  next: MutableRefObject<number>;
  mid: MutableRefObject<number>;
  frames: { start: Rect; end: Rect };
  overlay: LensOverlay;
  sides: Record<string, 'left' | 'right'>;
  onReady: () => void;
  phases?: MutableRefObject<ScenePhases>;
}

const DEG = Math.PI / 180;
const HERO = { open: [0.14, 0.42], camera: [0.14, 0.46], flows: [0.0, 0.01], dev: [0.4, 0.6], a1: [0.6, 0.71], a2: [0.71, 0.82], a3: [0.82, 0.93] } as const;
const WINDOWS: Record<'a1' | 'a2' | 'a3', [number, number]> = { a1: [0.6, 0.72], a2: [0.72, 0.83], a3: [0.83, 1.01] };
const SUBJECT: Record<'a1' | 'a2' | 'a3', string> = { a1: 'erp', a2: 'register', a3: 'vendor' };
/** What each red cloud encircles: always a whole block, so the ink never crosses another one. */
const CLOUD_SUBJECT: Record<'a1' | 'a2' | 'a3', string | null> = { a1: 'erp', a2: 'register', a3: 'vendor' };
const KEY_LABELS = new Set(['sales', 'erp', 'eng', 'prod']);
/** How: the company separates into four layers, this far apart. Teams and the route make the process map. */
const LAYER_GAP = 2.7;
const nodeLayer = (kind: string) => (kind === 'team' ? 1 : 0);
/** Two lenses: what each overlay marks, on the same geometry. */
const OP_HEAT: [string, string][] = [
  ['purch', 'prod'],
  ['prod', 'test'],
];
const DEVIATES = new Set(['eng', 'prod', 'test']);

const seg = (t: number, [a, b]: readonly [number, number]) => clamp01((t - a) / (b - a));
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const noRaycast = () => {};

function RoundedBoxMesh({
  args,
  radius,
  smoothness,
  material,
  position,
  'position-y': positionY,
}: {
  args: [number, number, number];
  radius: number;
  smoothness: number;
  material?: THREE.Material;
  position?: [number, number, number];
  'position-y'?: number;
  raycast?: THREE.Object3D['raycast'];
}) {
  const geometry = useMemo(() => {
    const roundedGeometry = new RoundedBoxGeometry(...args, smoothness, radius);
    roundedGeometry.computeVertexNormals();
    return roundedGeometry;
  }, [args, radius, smoothness]);
  return <mesh geometry={geometry} material={material} position={position} position-y={positionY} raycast={noRaycast} />;
}

const built = computeScene(BUILT);
const drawn = computeScene({ ...DRAWN, extrude: 1 });
const curves = flowCurves();
const CENTER = new THREE.Vector3((SHEET.x0 + SHEET.x1) / 2, 0, (SHEET.z0 + SHEET.z1) / 2);

/* ---------------- The lens mask, shared by every material ---------------- */

const LENS = { value: new THREE.Vector4(-9999, -9999, 0, 30) }; // x, y (device px, from bottom-left), radius, soft edge

/** mode 1: visible inside the lens (the company as built); 0: the drawing, dimmed inside; 2: always. */
function lensify<T extends THREE.Material>(m: T, mode: 0 | 1 | 2): T {
  const modeU = { value: mode };
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uLens = LENS;
    shader.uniforms.uLensMode = modeU;
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      `#include <common>
uniform vec4 uLens;
uniform float uLensMode;
float lensMask() {
  if (uLensMode > 1.5) return 1.0;
  float d = distance(gl_FragCoord.xy, uLens.xy);
  float inside = 1.0 - smoothstep(uLens.z - uLens.w, uLens.z, d);
  return uLensMode > 0.5 ? inside : mix(1.0, 0.14, inside);
}`,
    );
    const hook = '\n  gl_FragColor.a *= lensMask();\n  if (gl_FragColor.a < 0.004) discard;';
    if (shader.fragmentShader.includes('#include <opaque_fragment>')) {
      shader.fragmentShader = shader.fragmentShader.replace('#include <opaque_fragment>', `#include <opaque_fragment>${hook}`);
    } else {
      shader.fragmentShader = shader.fragmentShader.replace('gl_FragColor = vec4( diffuseColor.rgb, alpha );', `gl_FragColor = vec4( diffuseColor.rgb, alpha );${hook}`);
    }
  };
  m.customProgramCacheKey = () => `lens-${m.type}`;
  m.transparent = true;
  return m;
}

/**
 * A data flow as a stream of light (CC-70): along the tube (uv.x) three pulses travel, each a bright head
 * with a long fading tail; across it the surface is brightest where it faces the eye, so the core reads as
 * a lit filament and the halo as a soft glow. Shares the lens uniform: visible only inside the lens.
 */
function stream(halo: boolean) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uLens: LENS,
      uTime: { value: 0 },
      uReveal: { value: 0 },
      uSeed: { value: 0 },
      uAlpha: { value: 1 },
      uBase: { value: halo ? 0.08 : 0.32 },
      uColor: { value: new THREE.Color('#e7c27a') },
      uHi: { value: new THREE.Color('#fff3d6') },
    },
    vertexShader: `varying vec2 vUv; varying vec3 vN;
void main() { vUv = uv; vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `uniform vec4 uLens; uniform float uTime, uReveal, uSeed, uAlpha, uBase; uniform vec3 uColor, uHi;
varying vec2 vUv; varying vec3 vN;
void main() {
  float x = vUv.x;
  if (x > uReveal) discard;
  float pulse = 0.0;
  for (int k = 0; k < 3; k++) {
    float h = fract(uTime * 0.13 + uSeed + float(k) / 3.0);
    float d = h - x;
    pulse = max(pulse, d >= 0.0 ? exp(-d * 14.0) : exp(d * 140.0));
  }
  float face = pow(abs(vN.z), ${halo ? '2.2' : '0.6'});
  float ends = smoothstep(0.0, 0.035, x) * smoothstep(0.0, 0.035, uReveal - x + 0.02);
  float d = distance(gl_FragCoord.xy, uLens.xy);
  float lens = 1.0 - smoothstep(uLens.z - uLens.w, uLens.z, d);
  float a = (uBase + (1.0 - uBase) * pulse) * face * ends * lens * uAlpha;
  if (a < 0.004) discard;
  gl_FragColor = vec4(mix(uColor, uHi, pulse * ${halo ? '0.5' : '0.85'}), a);
}`,
    transparent: true,
    depthWrite: false,
    blending: halo ? THREE.AdditiveBlending : THREE.NormalBlending,
    toneMapped: false,
  });
}

function line(color: string, width: number, opacity: number, mode: 0 | 1 | 2) {
  const m = new LineMaterial({ color: new THREE.Color(color).getHex(), linewidth: width, worldUnits: false, transparent: true, opacity });
  m.toneMapped = false;
  m.depthWrite = false;
  return lensify(m, mode);
}

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

function radial(inner: string, outer: string) {
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

/**
 * Scene colours per theme. Warm: the drawing in cream on a dark table, the built company lit and
 * glowing. Light: the drawing in brown ink on cream paper, no glow (light on paper only washes out).
 * Entries: material key → [colour, emissive?, emissive intensity?].
 */
type Tint = [string, string?, number?];
/**
 * Stream colours per theme: [core, highlight, late core, late highlight, halo additive?, halo alpha, core base].
 * On white the streams are ink-dark gold with an amber pulse; on the dark grounds they are light that glows.
 */
const STREAM: Record<string, [string, string, string, string, boolean, number, number]> = {
  warm: ['#e7b866', '#fff1d2', '#ff6a4a', '#ffd2c4', true, 0.9, 0.32],
  light: ['#7e5d26', '#c98a12', '#b3301d', '#e0573e', false, 0.4, 0.7],
  brand: ['#d9b26a', '#fff3d6', '#ff6a4a', '#ffd2c4', true, 0.85, 0.36],
  'brand-light': ['#7e5d26', '#c98a12', '#b3301d', '#e0573e', false, 0.4, 0.7],
};
const SCENE: Record<'warm' | 'light' | 'brand' | 'brand-light', { mats: Record<string, Tint>; fog: string; env: string; hemiGround: string; table: string; sky: [string, string]; shadow: number; glow: number }> = {
  warm: {
    mats: {
      drawnRoute: ['#d9cdb4'], drawnNode: ['#d9cdb4'], grid: ['#3a3328'], variant: ['#f2ebdd'],
      team: ['#e9e1d0'], system: ['#b48a4a'], vendor: ['#cfc5b1'], register: ['#b48a4a'], red: ['#d9472f'],
      lid: ['#f6f0e3'], lidSys: ['#d2a865'], plinth: ['#8a7d66'], seam: ['#ffd38a', '#ffc062', 1.6],
      flow: ['#ffd38a', '#ffc062'], late: ['#ff6a4a', '#ff4d2e', 2.4], spark: ['#fff3dc', '#fff0d4', 4],
      slab: ['#c9a35b'], slabEdge: ['#c9a35b'], target: ['#f0cf8a'], chip: ['#2a2219', '#c9a35b'],
      heat: ['#ff6a3d'], fix: ['#f0cf8a'], ring: ['#ff5a3c', '#ff3d20', 1.8], rework: ['#ffa25c', '#ff7a2e', 1.6],
      flagPole: ['#f2ebdd'], flag: ['#e5533d', '#c2381b', 0.8], goldMark: ['#e7c27a', '#c9a35b', 1.3],
    },
    fog: '#0c0a08', env: '#1a1611', hemiGround: '#1a1510', table: '#14110d', sky: ['#0c0a08', '#1a1611'], shadow: 1, glow: 1,
  },
  light: {
    // A paper architectural model: sand blocks for teams, dark bronze for systems (as in the dark theme),
    // a deep red for findings, ink lines for the drawing.
    mats: {
      drawnRoute: ['#4a4236'], drawnNode: ['#4a4236'], grid: ['#c9bba2'], variant: ['#1c1812'],
      team: ['#d3c4a8'], system: ['#3a3128'], vendor: ['#e2d7c3'], register: ['#a8812f'], red: ['#b3301d'],
      lid: ['#e6dac3'], lidSys: ['#5a4b3c'], plinth: ['#b3a588'], seam: ['#c98a12', '#a86c0a', 0.5],
      flow: ['#9a7226', '#7e5d26'], late: ['#b3301d', '#8f2616', 0.3], spark: ['#7e5d26', '#7e5d26', 0.2],
      slab: ['#b8913f'], slabEdge: ['#7e5d26'], target: ['#7e5d26'], chip: ['#3a332a', '#b8913f'],
      heat: ['#b3301d'], fix: ['#7e5d26'], ring: ['#b3301d', '#8f2616', 0.3], rework: ['#b5602a', '#8f4a1e', 0.3],
      flagPole: ['#3a332a'], flag: ['#b3301d', '#8f2616', 0.2], goldMark: ['#a8812f', '#7e5d26', 0.3],
    },
    fog: '#eef0ec', env: '#9d9483', hemiGround: '#b9ae9c', table: '#e9e7e0', sky: ['#eef1ef', '#f6f7f4'], shadow: 0.55, glow: 0.12,
  },
  // Brand (the user's palette, 2026-10-30): a deep-blue night; teams light, systems Deep Blue, flows Gold.
  brand: {
    mats: {
      drawnRoute: ['#8bbbe3'], drawnNode: ['#8bbbe3'], grid: ['#16324a'], variant: ['#f3f6f9'],
      team: ['#c3d0dc'], system: ['#1d5f93'], vendor: ['#9fb2c4'], register: ['#d9963a'] /* warmer than the brand gold: the blue sky tints gold metal green */, red: ['#d9472f'],
      lid: ['#e3ebf2'], lidSys: ['#3d82bd'], plinth: ['#7f93a8'], seam: ['#9ad6ff', '#5fb4ff', 1.8],
      flow: ['#e7c27a', '#c9a35b'], late: ['#ff6a4a', '#ff4d2e', 1.4], spark: ['#fff3dc', '#fff0d4', 1.4],
      slab: ['#c9a35b'], slabEdge: ['#c9a35b'], target: ['#e7c27a'], chip: ['#0b1d2d', '#c9a35b'],
      heat: ['#ff6a3d'], fix: ['#e7c27a'], ring: ['#ff5a3c', '#ff3d20', 1.8], rework: ['#ffa25c', '#ff7a2e', 1.6],
      flagPole: ['#f3f6f9'], flag: ['#e5533d', '#c2381b', 0.8], goldMark: ['#e7c27a', '#c9a35b', 1.3],
    },
    fog: '#0a2034', env: '#4a7aa6', hemiGround: '#0c1d2e', table: '#0b2033', sky: ['#0a2236', '#17406a'], shadow: 1, glow: 0.5,
  },
  'brand-light': {
    mats: {
      drawnRoute: ['#004d80'], drawnNode: ['#004d80'], grid: ['#c9d3dc'], variant: ['#000000'],
      team: ['#eef2f6'], system: ['#0b4a7a'], vendor: ['#dde4eb'], register: ['#c9a35b'], red: ['#c23b26'],
      lid: ['#ffffff'], lidSys: ['#2a6fa6'], plinth: ['#c3ccd6'], seam: ['#7ec4f5', '#3d9be6', 0.9],
      flow: ['#a8823f', '#7e5d26'], late: ['#b3301d', '#8f2616', 0.3], spark: ['#8a6a2c', '#7e5d26', 0.2],
      slab: ['#c9a35b'], slabEdge: ['#004d80'], target: ['#004d80'], chip: ['#0b1d2d', '#c9a35b'],
      heat: ['#b3301d'], fix: ['#004d80'], ring: ['#b3301d', '#8f2616', 0.3], rework: ['#b5602a', '#8f4a1e', 0.3],
      flagPole: ['#000000'], flag: ['#b3301d', '#8f2616', 0.2], goldMark: ['#c9a35b', '#8f6a22', 0.3],
    },
    fog: '#eef3f8', env: '#9aa7b4', hemiGround: '#b4c0cc', table: '#e9eef3', sky: ['#eef3f8', '#f8fafc'], shadow: 0.5, glow: 0.12,
  },
};

function Backdrop({ sky }: { sky: [string, string] }) {
  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        vertexShader: `varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        uniforms: { fogc: { value: new THREE.Color() }, top: { value: new THREE.Color() } },
        fragmentShader: `uniform vec3 fogc; uniform vec3 top; varying vec3 vP; void main(){
          float h = vP.y * 0.5 + 0.5;
          vec3 c = mix(fogc, top, smoothstep(0.56, 0.98, h));
          gl_FragColor = vec4(c, 1.0);
        }`,
      }),
    [],
  );
  useEffect(() => {
    (mat.uniforms.fogc!.value as THREE.Color).set(sky[0]);
    (mat.uniforms.top!.value as THREE.Color).set(sky[1]);
  }, [mat, sky]);
  return (
    <mesh scale={220} material={mat} raycast={noRaycast} renderOrder={-10}>
      <sphereGeometry args={[1, 48, 24]} />
    </mesh>
  );
}

function Scene({ hero, next, mid, frames, overlay, sides, onReady, phases }: Props) {
  const { camera, size, gl } = useThree();
  const nodeRefs = useRef<Record<string, THREE.Group | null>>({});
  const flowMeshes = useRef<(THREE.Mesh | null)[]>([]);
  const sparks = useRef<THREE.InstancedMesh>(null);
  const pool = useRef<THREE.Mesh>(null);
  const slabRefs = useRef<(THREE.Mesh | null)[]>([]);
  const chips = useRef<THREE.InstancedMesh>(null);
  const lensRefs = useRef<Record<string, THREE.Object3D | null>>({});
  const ph = useRef({ how: 0, lens: 0, mix: 0, step: 1, stepGlow: [1, 0, 0, 0, 0] });
  const hp = useRef(0), np = useRef(0);
  const t0 = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0, last: -99, ui: false, inside: false });
  const lens = useRef({ x: -9999, y: -9999, r: 0, big: 1, f: 0 });
  const par = useRef({ x: 0, y: 0 });
  const ready = useRef(false);
  const tmp = useMemo(() => new THREE.Vector3(), []);
  const hitV = useMemo(() => new THREE.Vector3(), []);
  const ray = useMemo(() => new THREE.Raycaster(), []);
  const floorPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), []);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const mats = useMemo(() => {
    const physical = (p: THREE.MeshPhysicalMaterialParameters) => lensify(new THREE.MeshPhysicalMaterial(p), 1);
    return {
      drawnRoute: line('#d9cdb4', 1.25, 0.8, 0),
      drawnNode: line('#d9cdb4', 1.1, 0.7, 0),
      grid: lensify(new THREE.LineBasicMaterial({ color: '#3a3328', transparent: true, opacity: 0.55 }), 0),
      variant: line('#f2ebdd', 1.8, 0.95, 1),
      team: physical({ color: '#e9e1d0', roughness: 0.38, clearcoat: 1, clearcoatRoughness: 0.18, sheen: 0.4, sheenRoughness: 0.5, envMapIntensity: 1 }),
      lid: physical({ color: '#f6f0e3', roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1 }),
      plinth: physical({ color: '#b9c5d1', roughness: 0.55, metalness: 0.1, envMapIntensity: 0.8 }),
      seam: lensify(new THREE.MeshStandardMaterial({ color: '#8fd0ff', emissive: '#5fb4ff', emissiveIntensity: 1.6, toneMapped: false }), 1),
      lidSys: physical({ color: '#d2a865', roughness: 0.2, metalness: 0.3, clearcoat: 1, clearcoatRoughness: 0.06, envMapIntensity: 1.3 }),
      system: physical({ color: '#b48a4a', metalness: 1, roughness: 0.28, clearcoat: 0.8, clearcoatRoughness: 0.12, envMapIntensity: 1.3 }),
      vendor: physical({ color: '#cfc5b1', roughness: 0.12, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.05, ior: 1.45, opacity: 0.55, envMapIntensity: 1.4 }),
      register: physical({ color: '#b48a4a', metalness: 1, roughness: 0.3, opacity: 1 }),
      red: physical({ color: '#d9472f', roughness: 0.26, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1 }),
      flow: lensify(new THREE.MeshStandardMaterial({ color: '#ffd38a', emissive: '#ffc062', emissiveIntensity: 2.2, toneMapped: false }), 1),
      late: lensify(new THREE.MeshStandardMaterial({ color: '#ff6a4a', emissive: '#ff4d2e', emissiveIntensity: 2.4, toneMapped: false }), 1),
      spark: lensify(new THREE.MeshStandardMaterial({ color: '#fff3dc', emissive: '#fff0d4', emissiveIntensity: 4, toneMapped: false }), 1),
      shadow: lensify(new THREE.MeshBasicMaterial({ map: radial('rgba(0,0,0,0.9)', 'rgba(0,0,0,0)'), transparent: true, depthWrite: false, toneMapped: false }), 1),
      pool: new THREE.MeshBasicMaterial({ map: radial('rgba(255,214,150,0.22)', 'rgba(255,214,150,0)'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }),
      // How: the layers, their edges, and the compute layer's chips.
      slab: new THREE.MeshBasicMaterial({ color: '#c9a35b', transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, toneMapped: false }),
      slabEdge: (() => {
        const m = new LineMaterial({ color: new THREE.Color('#c9a35b').getHex(), linewidth: 1.4, worldUnits: false, transparent: true, opacity: 0 });
        m.toneMapped = false;
        m.depthWrite = false;
        return m;
      })(),
      target: (() => {
        const m = new LineMaterial({ color: new THREE.Color('#f0cf8a').getHex(), linewidth: 2, worldUnits: false, transparent: true, opacity: 0, dashed: true, dashSize: 0.55, gapSize: 0.35 });
        m.toneMapped = false;
        m.depthWrite = false;
        return m;
      })(),
      chip: new THREE.MeshPhysicalMaterial({ color: '#2a2219', metalness: 0.9, roughness: 0.32, emissive: '#c9a35b', emissiveIntensity: 0.15, clearcoat: 0.6 }),
      // Two lenses: the operator's marks and the investor's.
      heat: (() => {
        const m = new LineMaterial({ color: new THREE.Color('#ff6a3d').getHex(), linewidth: 4, worldUnits: false, transparent: true, opacity: 0 });
        m.toneMapped = false;
        m.depthWrite = false;
        return m;
      })(),
      fix: (() => {
        const m = new LineMaterial({ color: new THREE.Color('#f0cf8a').getHex(), linewidth: 2.2, worldUnits: false, transparent: true, opacity: 0, dashed: true, dashSize: 0.5, gapSize: 0.32 });
        m.toneMapped = false;
        m.depthWrite = false;
        return m;
      })(),
      ring: new THREE.MeshStandardMaterial({ color: '#ff5a3c', emissive: '#ff3d20', emissiveIntensity: 1.8, transparent: true, opacity: 0, toneMapped: false }),
      rework: new THREE.MeshStandardMaterial({ color: '#ffa25c', emissive: '#ff7a2e', emissiveIntensity: 1.6, transparent: true, opacity: 0, toneMapped: false }),
      flagPole: new THREE.MeshStandardMaterial({ color: '#f2ebdd', roughness: 0.5, transparent: true, opacity: 0 }),
      flag: new THREE.MeshStandardMaterial({ color: '#e5533d', emissive: '#c2381b', emissiveIntensity: 0.8, side: THREE.DoubleSide, transparent: true, opacity: 0, toneMapped: false }),
      goldMark: new THREE.MeshStandardMaterial({ color: '#e7c27a', emissive: '#c9a35b', emissiveIntensity: 1.3, transparent: true, opacity: 0, toneMapped: false }),
    };
  }, []);

  const theme = useTheme();
  const light = isLightTheme(theme);
  const P = SCENE[theme];
  const glowK = useRef(1);
  useEffect(() => {
    for (const [k, [c, e, ei]] of Object.entries(P.mats)) {
      const m = (mats as Record<string, THREE.Material>)[k] as THREE.Material & { color?: THREE.Color; emissive?: THREE.Color; emissiveIntensity?: number };
      if (!m) continue;
      m.color?.set(c);
      if (e && m.emissive) m.emissive.set(e);
      if (ei !== undefined) m.emissiveIntensity = ei;
    }
    mats.shadow.opacity = P.shadow;
    mats.vendor.opacity = light ? 0.92 : 0.55;
    glowK.current = P.glow;
  }, [P, mats]);

  // The drawing: official route, node outlines and a faint grid, all on the table.
  const drawing = useMemo(() => {
    const objs: THREE.Object3D[] = [];
    const add = (pts: number[], m: LineMaterial) => {
      const g = new LineGeometry();
      g.setPositions(pts);
      const o = new Line2(g, m);
      o.raycast = noRaycast;
      o.userData.layer = 1; // the drawing is the process map
      objs.push(o);
    };
    for (const l of drawn.lines.filter((x) => x.kind === 'official')) add(l.points.flatMap((p) => [p[0], 0.014, p[2]]), mats.drawnRoute);
    for (const id of NODE_IDS) {
      const b = drawn.nodes[id]!;
      const x0 = b.x - b.w / 2, x1 = b.x + b.w / 2, z0 = b.z - b.d / 2, z1 = b.z + b.d / 2;
      add([x0, 0.014, z0, x1, 0.014, z0, x1, 0.014, z1, x0, 0.014, z1, x0, 0.014, z0], mats.drawnNode);
    }
    const grid: number[] = [];
    for (let x = Math.ceil(SHEET.x0); x <= SHEET.x1; x++) grid.push(x, 0.002, SHEET.z0, x, 0.002, SHEET.z1);
    for (let z = Math.ceil(SHEET.z0); z <= SHEET.z1; z++) grid.push(SHEET.x0, 0.002, z, SHEET.x1, 0.002, z);
    const gg = new THREE.BufferGeometry();
    gg.setAttribute('position', new THREE.Float32BufferAttribute(grid, 3));
    const gl = new THREE.LineSegments(gg, mats.grid);
    gl.raycast = noRaycast;
    gl.userData.layer = 0;
    objs.push(gl);
    for (const l of built.lines.filter((x) => x.kind === 'variant')) add(l.points.flatMap((p) => [p[0], 0.03, p[2]]), mats.variant);
    return objs;
  }, [mats]);

  const flowGeos = useMemo(
    () =>
      curves.map((c) => {
        const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(...c.p0), new THREE.Vector3(...c.p1), new THREE.Vector3(...c.p2));
        // On a light ground the flows are drawn finer: thick tubes read as cartoon pipes on white.
        const r = (c.finding ? 0.045 : 0.055) * (light ? 1.05 : 1);
        return {
          curve,
          geo: safe(new THREE.TubeGeometry(curve, 128, r, 10, false)),
          halo: safe(new THREE.TubeGeometry(curve, 128, r * (light ? 3.2 : 4.2), 12, false)),
          core: stream(false),
          glow: stream(true),
          late: !!c.finding,
        };
      }),
    [light],
  );

  useEffect(() => {
    const [c0, c1, l0, l1, add, ha, base] = STREAM[theme] ?? STREAM.brand!;
    flowGeos.forEach((f, i) => {
      for (const m of [f.core, f.glow]) {
        m.uniforms.uColor!.value.set(f.late ? l0 : c0);
        m.uniforms.uHi!.value.set(f.late ? l1 : c1);
        m.uniforms.uSeed!.value = i * 0.173;
      }
      f.core.uniforms.uBase!.value = base;
      f.glow.blending = add ? THREE.AdditiveBlending : THREE.NormalBlending;
      f.glow.uniforms.uAlpha!.value = ha;
      f.glow.needsUpdate = true;
    });
  }, [flowGeos, theme]);

  // How: one slab per layer, its edge, and the target design (step 04) over the process map.
  const stack = useMemo(() => {
    const edges: Line2[] = [];
    const rect = (y: number, inset = 0) => {
      const x0 = SHEET.x0 + 0.5 + inset, x1 = SHEET.x1 - 0.5 - inset, z0 = SHEET.z0 + 0.5 + inset, z1 = SHEET.z1 - 0.5 - inset;
      return [x0, y, z0, x1, y, z0, x1, y, z1, x0, y, z1, x0, y, z0];
    };
    for (let i = 0; i < 4; i++) {
      const g = new LineGeometry();
      g.setPositions(rect(0));
      const o = new Line2(g, mats.slabEdge.clone());
      o.raycast = noRaycast;
      edges.push(o);
    }
    const tg = new LineGeometry();
    tg.setPositions(rect(0, 2.2));
    const target = new Line2(tg, mats.target);
    target.computeLineDistances();
    target.raycast = noRaycast;
    return { edges, target };
  }, [mats]);
  const CHIP_N = 24;
  const slabMats = useMemo(() => [0, 1, 2, 3].map(() => mats.slab.clone()), [mats]);

  // Two lenses: heat on the waiting edges, the fix, a rework loop, rings, flags and marks.
  const lensGeo = useMemo(() => {
    const B = built.nodes;
    const heat = OP_HEAT.map(([a, b]) => {
      const A = B[a]!, C = B[b]!;
      const g = new LineGeometry();
      g.setPositions([A.x, 0.06, A.z, A.x, 0.06, C.z, C.x, 0.06, C.z]);
      const o = new Line2(g, mats.heat);
      o.raycast = noRaycast;
      return o;
    });
    const arc = (a: string, b: string, lift: number) => {
      const A = B[a]!, C = B[b]!;
      return new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(A.x, A.h + 0.1, A.z),
        new THREE.Vector3((A.x + C.x) / 2, Math.max(A.h, C.h) + lift, (A.z + C.z) / 2),
        new THREE.Vector3(C.x, C.h + 0.1, C.z),
      );
    };
    const fixCurve = arc('eng', 'prod', 4.2);
    const fg = new LineGeometry();
    fg.setPositions(fixCurve.getPoints(48).flatMap((v) => [v.x, v.y, v.z]));
    const fix = new Line2(fg, mats.fix);
    fix.computeLineDistances();
    fix.raycast = noRaycast;
    const reworkCurve = arc('test', 'eng', 2.6);
    const rework = safe(new THREE.TubeGeometry(reworkCurve, 64, 0.06, 8, false));
    return { heat, fix, fixApex: fixCurve.getPoint(0.5), rework, reworkApex: reworkCurve.getPoint(0.5) };
  }, [mats]);

  useEffect(() => {
    const all = [mats.drawnRoute, mats.drawnNode, mats.variant, mats.target, mats.heat, mats.fix, ...stack.edges.map((e) => e.material as LineMaterial)];
    for (const m of all) m.resolution.set(size.width, size.height);
  }, [size, mats, stack]);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.last = performance.now();
      mouse.current.inside = true;
      // Over words or controls the lens stays out of the way.
      const t = e.target instanceof Element ? e.target : null;
      mouse.current.ui = !!t?.closest('a, button, input, select, textarea, label, summary, [role="button"], [role="radio"], h1, h2, h3, p, li, dt, dd');
    };
    // The magnifier stays while the pointer rests; it goes when the pointer leaves the window (CC-74).
    const out = (e: MouseEvent) => {
      if (!e.relatedTarget) mouse.current.inside = false;
    };
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('mouseout', out);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('mouseout', out);
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
    const W = size.width, H = size.height;
    const mouseOn = performance.now() - mouse.current.last < 2600;
    const mx = mouseOn ? (mouse.current.x / W) * 2 - 1 : 0, my = mouseOn ? -((mouse.current.y / H) * 2 - 1) : 0;
    par.current.x += (mx - par.current.x) * (1 - Math.exp(-dt * 2));
    par.current.y += (my - par.current.y) * (1 - Math.exp(-dt * 2));

    const settle = easeOut(clamp01(it / 4));
    const e = ease(seg(p, HERO.camera));

    // Later sections: How (the layers) and Two lenses (the overlays), each 0..1.
    const P = ph.current;
    const tgt = phases?.current;
    const kk = 1 - Math.exp(-dt * 5);
    P.how += ((tgt?.how ?? 0) - P.how) * kk;
    P.lens += ((tgt?.lens ?? 0) - P.lens) * kk;
    P.mix += ((tgt?.mode === 'investor' ? 1 : 0) - P.mix) * (1 - Math.exp(-dt * 4));
    P.step = tgt?.step ?? 1;
    for (let i = 0; i < 5; i++) {
      const g0 = P.stepGlow[i] ?? 0;
      P.stepGlow[i] = g0 + ((P.step === i + 1 ? 1 : 0) - g0) * (1 - Math.exp(-dt * 6));
    }
    const hw = ease(clamp01(P.how)), lw = ease(clamp01(P.lens)), mix = ease(clamp01(P.mix));
    const explode = hw;

    // ---- Camera
    const drift = Math.sin(time * 0.1) * 1.6;
    let azD = lerp(lerp(48, 40, settle), 32, e) + drift + par.current.x * 2.2 + q * 5;
    let elD = lerp(lerp(40, 34, settle), 27, e) + par.current.y * 1.4 + q * 8;
    let zoom = lerp(lerp(0.88, 1, settle), 1.14, e) * lerp(1, 0.92, q);
    // How: lower and from the side, so the layers read as a stack. Two lenses: the investor steps back.
    azD = lerp(azD, 38 + par.current.x * 1.5, hw);
    elD = lerp(elD, 24 + par.current.y, hw);
    zoom = lerp(zoom, 1, hw);
    azD = lerp(azD, lerp(30, 36, mix) + par.current.x * 1.5, lw);
    elD = lerp(elD, lerp(31, 38, mix) + par.current.y, lw);
    zoom = lerp(zoom, lerp(0.97, 0.88, mix), lw);
    const az = azD * DEG;
    const el = elD * DEG;
    const fov = 28;
    const fr = {
      x0: lerp(frames.start.x0, frames.end.x0, e) * W,
      y0: lerp(frames.start.y0, frames.end.y0, e) * H,
      x1: lerp(frames.start.x1, frames.end.x1, e) * W,
      y1: lerp(frames.start.y1, frames.end.y1, e) * H,
    };
    // The model moves into the frame the page gives it: the rail in How, the lens frame in Two lenses.
    const into = (w: number, anchor: HTMLElement | null | undefined, inset: { l: number; r: number; t: number; b: number }) => {
      if (w < 0.001 || !anchor) return;
      const r = anchor.getBoundingClientRect();
      fr.x0 = lerp(fr.x0, r.left + r.width * inset.l, w);
      fr.y0 = lerp(fr.y0, r.top + r.height * inset.t, w);
      fr.x1 = lerp(fr.x1, r.right - r.width * inset.r, w);
      fr.y1 = lerp(fr.y1, r.bottom - r.height * inset.b, w);
    };
    into(hw, overlay.howAnchor?.current, { l: 0, r: 0.24, t: 0, b: 0 });
    into(lw, overlay.lensAnchor?.current, { l: 0.1, r: 0.1, t: 0.14, b: 0.12 });
    const fw = fr.x1 - fr.x0, fh = fr.y1 - fr.y0, fcx = (fr.x0 + fr.x1) / 2, fcy = (fr.y0 + fr.y1) / 2;
    const dir = new THREE.Vector3(Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az));
    const fwd = dir.clone().negate();
    const right = new THREE.Vector3().crossVectors(fwd, new THREE.Vector3(0, 1, 0)).normalize();
    const up = new THREE.Vector3().crossVectors(right, fwd).normalize();
    const ins = lerp(1.5, 0.5, explode);
    const pts = [0, 2.6 + 3 * LAYER_GAP * explode].flatMap((y) => [
      new THREE.Vector3(SHEET.x0 + ins, y, SHEET.z0 + ins),
      new THREE.Vector3(SHEET.x1 - ins, y, SHEET.z0 + ins),
      new THREE.Vector3(SHEET.x1 - ins, y, SHEET.z1 - ins),
      new THREE.Vector3(SHEET.x0 + ins, y, SHEET.z1 - ins),
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
    // Fog follows the camera: the model stays lit however far back a small frame puts the camera.
    const fog = state.scene.fog as THREE.Fog | null;
    if (fog) {
      fog.near = dist * 0.9;
      fog.far = dist * 2.4;
    }

    // ---- The lens: follows the pointer (or wanders over the model), then opens to the whole company.
    const open = ease(seg(p, HERO.open));
    const appear = easeOut(clamp01((it - 1.2) / 1.1));
    // Without a mouse the lens drifts over the middle of the model, clear of the key (top right)
    // and of the proof row at the foot of the first screen.
    const rIdle = Math.min(W, H) * 0.27;
    const kEl = overlay.modelKey?.current;
    const kx0 = kEl ? kEl.offsetLeft : W;
    const wxLo = fcx - fw * 0.3, wxHi = Math.max(wxLo, Math.min(fcx + fw * 0.2, kx0 - 12 - rIdle));
    const wyLo = fcy - fh * 0.08, wyHi = Math.max(wyLo, Math.min(fcy + fh * 0.12, H - 330 - rIdle));
    const wanderX = (wxLo + wxHi) / 2 + Math.sin(time * 0.33) * (wxHi - wxLo) / 2;
    const wanderY = (wyLo + wyHi) / 2 + Math.cos(time * 0.27) * (wyHi - wyLo) / 2;
    // CC-73: the lens rests open over the model, so the first screen always shows the company as built.
    // It follows the pointer only while the pointer is over the model itself (not over words, controls or margins).
    let overModel = false;
    if (mouse.current.inside) {
      ray.setFromCamera(new THREE.Vector2((mouse.current.x / W) * 2 - 1, -((mouse.current.y / H) * 2 - 1)), cam);
      const hit = ray.ray.intersectPlane(floorPlane, hitV);
      overModel = !!hit && hit.x > SHEET.x0 + 0.8 && hit.x < SHEET.x1 - 0.8 && hit.z > SHEET.z0 + 0.8 && hit.z < SHEET.z1 - 0.8;
    }
    const follow = mouse.current.inside && overModel && !mouse.current.ui;
    const tx = lerp(follow ? mouse.current.x : wanderX, fcx, open);
    const ty = lerp(follow ? mouse.current.y : wanderY, fcy, open);
    const L = lens.current;
    if (L.x < -999) {
      L.x = tx;
      L.y = ty;
    }
    const k = 1 - Math.exp(-dt * (follow ? 10 : 3));
    L.x += (tx - L.x) * k;
    L.y += (ty - L.y) * k;
    L.big += (1 - L.big) * (1 - Math.exp(-dt * 9));
    // CC-74 (user, 2026-11-02): at rest only the company as drawn shows. Over the model the pointer becomes a
    // magnifier: a lens that follows it and shows the company as built inside. Nowhere else is there a ring.
    L.f += ((follow ? 1 : 0) - L.f) * (1 - Math.exp(-dt * 7));
    const baseR = Math.min(W, H) * 0.2 + Math.sin(time * 1.1) * 3;
    const full = Math.hypot(W, H) * 0.8;
    // As the page scrolls the magnifier appears and grows until it opens onto the whole company, as before.
    const lensOn = Math.max(L.f, clamp01((p - 0.02) / 0.1));
    L.r = lerp(baseR * lensOn * appear, full, open);
    const dpr = gl.getPixelRatio();
    LENS.value.set(L.x * dpr, (H - L.y) * dpr, L.r * dpr, 34 * dpr);

    // ---- The company as built
    const deform = ease(seg(p, HERO.dev));
    const devT = seg(p, HERO.dev);
    NODE_IDS.forEach((id, i) => {
      const g = nodeRefs.current[id];
      if (!g) return;
      const a = drawn.nodes[id]!, b = built.nodes[id]!;
      const rise = easeOut(clamp01((it - 0.9 - i * 0.07) / 1.2));
      g.position.set(lerp(a.x, b.x, deform), nodeLayer(b.kind) * LAYER_GAP * explode, lerp(a.z, b.z, deform));
      g.scale.set(lerp(a.w / b.w, 1, deform), Math.max(0.02, rise * lerp(a.h / b.h, 1, deform)), lerp(a.d / b.d, 1, deform));
    });
    mats.register.opacity = 1 - (light ? 0 : 0.65) * devT; // on white a strong fade reads as a rendering error
    // The deviating blocks turn red as the scan departs from the drawing.
    for (const id of DEVIATES) {
      const g = nodeRefs.current[id];
      const mesh = g?.children[0] as THREE.Mesh | undefined;
      // In How the gap turns red at step 03; in Two lenses the overlays carry the meaning instead.
      const redOn = devT > 0.5 && !(hw > 0.5 && P.step < 3) && lw < 0.5;
      if (mesh) mesh.material = redOn ? mats.red : mats.team;
      const lid = g?.children[1] as THREE.Mesh | undefined;
      if (lid && lid.geometry?.type !== 'PlaneGeometry') lid.material = redOn ? mats.red : mats.lid;
    }
    for (const o of drawing) o.position.y = ((o.userData.layer as number | undefined) ?? 0) * LAYER_GAP * explode;
    mats.flow.emissiveIntensity = lerp(2.2, 0.8, lw) * glowK.current;
    mats.drawnRoute.opacity = 0.8 * clamp01(it / 1.2);
    mats.drawnNode.opacity = 0.7 * clamp01(it / 1.2);

    // Flows and sparks: always running inside the lens.
    flowGeos.forEach((f, i) => {
      const mesh = flowMeshes.current[i];
      if (!mesh) return;
      const reveal = f.late ? seg(p, HERO.a3) : clamp01((it - 1.6 - i * 0.18) / 1.4);
      const on = reveal > 0.01 && (q < 0.95 || hw > 0.02 || lw > 0.02) && !(f.late && lw > 0.5);
      const speed = P.step === 5 && hw > 0.5 ? 1.6 : 1;
      for (const m of [f.core, f.glow]) {
        m.uniforms.uReveal!.value = reveal * 1.02;
        m.uniforms.uTime!.value = time * speed;
      }
      f.glow.uniforms.uAlpha!.value = (STREAM[theme] ?? STREAM.brand!)[5] * lerp(1, 0.55, lw);
      mesh.visible = on;
      mesh.position.y = 2 * LAYER_GAP * explode;
      const halo = mesh.parent?.children.find((c) => c.userData.haloOf === i);
      if (halo) {
        halo.visible = on;
        halo.position.y = mesh.position.y;
      }
    });
    // The spark balls are retired: the streams carry their own pulses (CC-70).
    // A warm pool of light where the lens looks.
    if (pool.current) {
      ray.setFromCamera(new THREE.Vector2((L.x / W) * 2 - 1, -((L.y / H) * 2 - 1)), cam);
      const hit = ray.ray.intersectPlane(floorPlane, tmp.clone());
      if (hit) pool.current.position.set(hit.x, 0.004, hit.z);
      const s = lerp(lerp(3, 16, L.big), 60, open);
      pool.current.scale.set(s, s, 1);
      (pool.current.material as THREE.MeshBasicMaterial).opacity = appear * (1 - 0.6 * q) * (0.25 + 0.75 * L.big);
    }

    // ---- How: the layers
    const lit = [
      P.stepGlow[0]! + P.stepGlow[4]!,
      P.stepGlow[1]! + P.stepGlow[2]! + P.stepGlow[3]! + P.stepGlow[4]!,
      P.stepGlow[1]! + P.stepGlow[4]!,
      P.stepGlow[1]! + P.stepGlow[4]!,
    ].map((v) => clamp01(v));
    stack.edges.forEach((o, i) => {
      o.position.y = i * LAYER_GAP * explode + 0.02;
      o.visible = explode > 0.01;
      (o.material as LineMaterial).opacity = explode * lerp(0.28, 0.95, lit[i]!);
    });
    slabRefs.current.forEach((m, i) => {
      if (!m) return;
      m.position.y = i * LAYER_GAP * explode;
      m.visible = explode > 0.01;
      (m.material as THREE.MeshBasicMaterial).opacity = explode * lerp(0.025, 0.085, lit[i]!);
    });
    stack.target.position.y = LAYER_GAP * explode + 0.7;
    stack.target.visible = explode > 0.01;
    mats.target.opacity = explode * clamp01(P.stepGlow[3]! + P.stepGlow[4]! * 0.6);
    if (chips.current) {
      const cols = 6, rows = 4;
      for (let i = 0; i < CHIP_N; i++) {
        const cx = SHEET.x0 + 3 + ((i % cols) + 0.5) * ((SHEET.x1 - SHEET.x0 - 6) / cols);
        const cz = SHEET.z0 + 3 + (Math.floor(i / cols) + 0.5) * ((SHEET.z1 - SHEET.z0 - 6) / rows);
        dummy.position.set(cx, 3 * LAYER_GAP * explode + 0.2, cz);
        dummy.scale.set(1, Math.max(0.0001, explode), 1);
        dummy.updateMatrix();
        chips.current.setMatrixAt(i, dummy.matrix);
      }
      chips.current.instanceMatrix.needsUpdate = true;
      chips.current.visible = explode > 0.01;
      mats.chip.emissiveIntensity = (0.12 + 0.5 * lit[3]!) * (light ? 0.4 : 1) + (P.stepGlow[4]! > 0.5 ? 0.35 * (0.5 + 0.5 * Math.sin(time * 4)) : 0);
    }

    // ---- Two lenses: the overlay for each lens, on the same model
    const opV = lw * (1 - mix), invV = lw * mix;
    mats.heat.opacity = opV;
    mats.fix.opacity = opV;
    mats.rework.opacity = opV;
    mats.ring.opacity = Math.max(opV, invV);
    mats.flagPole.opacity = invV;
    mats.flag.opacity = invV;
    mats.goldMark.opacity = invV;
    const LR = lensRefs.current;
    for (const o of lensGeo.heat) o.visible = opV > 0.01;
    lensGeo.fix.visible = opV > 0.01;
    if (LR.rework) LR.rework.visible = opV > 0.01;
    if (LR.ringOp) {
      LR.ringOp.visible = opV > 0.01;
      LR.ringOp.scale.setScalar(1 + 0.04 * Math.sin(time * 3));
    }
    if (LR.ringInv) LR.ringInv.visible = invV > 0.01;
    for (const k of ['flagVendor', 'flagRegister', 'lever', 'verify']) if (LR[k]) LR[k]!.visible = invV > 0.01;
    if (LR.lever) LR.lever.position.y = built.nodes.sales!.h + 1.4 + 0.15 * Math.sin(time * 2);
    if (LR.verify) LR.verify.rotation.y = time * 0.8;

    // ---- HTML overlays
    const ring = overlay.ring.current;
    if (ring) {
      const show = appear * (1 - open) * Math.max(L.f, clamp01((p - 0.02) / 0.1));
      ring.style.transform = `translate3d(${L.x.toFixed(1)}px, ${L.y.toFixed(1)}px, 0)`;
      ring.style.width = ring.style.height = `${(L.r * 2).toFixed(0)}px`;
      ring.style.opacity = show.toFixed(3);
      // The "As built" tag belongs to the open lens, not to the small pointer ring.
      ring.style.setProperty('--tag', clamp01((L.big - 0.6) / 0.4).toFixed(2));
    }
    if (overlay.hint.current) {
      // The hint sits just under the lens until the pointer takes over.
      // Bottom-left of the lens, clear of the labels that sit under the model (CC-73).
      overlay.hint.current.style.transform = `translate3d(${(fcx - fw * 0.28).toFixed(1)}px, ${(fcy + fh * 0.44).toFixed(1)}px, 0)`;
      overlay.hint.current.style.opacity = '0'; // the hint is removed (user, 2026-11-02)
    }
    const f: SceneFrame = computeScene({ extrude: 1, hidden: 1, deform, a1: seg(p, HERO.a1), a2: seg(p, HERO.a2), a3: seg(p, HERO.a3) });
    if (overlay.layer.current) overlay.layer.current.style.opacity = ((1 - clamp01(mid.current * 2.2)) * (1 - seg(q, [0, 0.25]))).toFixed(3);
    const inLens = (x: number, y: number) => clamp01((L.r - Math.hypot(x - L.x, y - L.y)) / 40);

    // Labels inside the lens: what each hidden thing is.
    for (const l of f.lines) {
      if (l.kind !== 'hidden' || !l.label || !l.labelAt) continue;
      const el = overlay.flows.current[l.label];
      if (!el) continue;
      const [x, y] = toScreen(l.labelAt);
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      el.style.opacity = (inLens(x, y) * clamp01((it - 3) / 0.6) * (1 - seg(p, [0.5, 0.58]))).toFixed(3);
    }
    const extras: [string, Vec3][] = [
      ['routes', [built.nodes.erp!.x + 1.2, 0.05, 4.6]],
      ['bypassed', [built.nodes.register!.x, (nodeRefs.current.register?.scale.y ?? 1) * built.nodes.register!.h + 0.25, built.nodes.register!.z]],
    ];
    for (const [key, pos] of extras) {
      const el = overlay.flows.current[key];
      if (!el) continue;
      const [x, y] = toScreen(pos);
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      el.style.opacity = (inLens(x, y) * clamp01((it - 3) / 0.6) * (1 - seg(p, [0.5, 0.58]))).toFixed(3);
    }

    // Findings: one at a time, each with its leader and note.
    const colR = frames.end.x1 * W + 18, colL = frames.end.x0 * W - 18;
    let activeSubject: string | null = null;
    for (const a of f.anchors) {
      const [s0, s1] = WINDOWS[a.id];
      const on = clamp01((p - s0) / 0.025) * (a.id === 'a3' ? 1 : clamp01((s1 - p) / 0.025));
      if (on > 0.5) activeSubject = SUBJECT[a.id];
      const leader = f.lines.find((l) => l.id === `leader-${a.id}`)!;
      const side = sides[a.id] ?? a.side;
      // The cloud is red ink on top of the render, fitted around the subject's whole outline,
      // so it never cuts through a block or hides behind one.
      const subject = CLOUD_SUBJECT[a.id];
      const corners: Vec3[] = [];
      const gs = subject ? nodeRefs.current[subject] : null;
      if (subject && gs) {
        const b = built.nodes[subject]!;
        const w = b.w * gs.scale.x, d = b.d * gs.scale.z, h = b.h * gs.scale.y;
        for (const yy of [0, h]) for (const [dx, dz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]] as const) corners.push([gs.position.x + (dx * w) / 2, yy, gs.position.z + (dz * d) / 2]);
      } else {
        const ev = built.nodes.erp!;
        const z0 = ev.z + ev.d / 2 + 0.55;
        for (const [x, z] of [[ev.x - 1.15, z0], [ev.x + 1.15, z0], [ev.x + 1.15, 6.4], [ev.x - 1.15, 6.4]] as const) corners.push([x, 0.03, z]);
      }
      let bx0 = Infinity, bx1 = -Infinity, by0 = Infinity, by1 = -Infinity;
      for (const c3 of corners) {
        const [sx, sy] = toScreen(c3);
        bx0 = Math.min(bx0, sx); bx1 = Math.max(bx1, sx); by0 = Math.min(by0, sy); by1 = Math.max(by1, sy);
      }
      const pad = 15;
      const cx0 = bx0 - pad, cy0 = by0 - pad, cw = bx1 - bx0 + pad * 2, ch = by1 - by0 + pad * 2;
      const draw = clamp01(seg(p, HERO[a.id]) / 0.6) * (1 - seg(q, [0, 0.3]));
      const cloudEl = overlay.clouds.current[a.id];
      if (cloudEl) {
        cloudEl.setAttribute('d', cloudPath(cx0, cy0, cw, ch, 15));
        cloudEl.style.strokeDashoffset = (1 - draw).toFixed(3);
        cloudEl.style.opacity = draw > 0.001 ? '1' : '0';
      }
      const foot: [number, number] = [side === 'right' ? cx0 + cw : cx0, cy0 + ch / 2];
      const el = overlay.annotations.current[a.id];
      const noteBox = el?.firstElementChild as HTMLElement | null | undefined;
      const nh = noteBox?.offsetHeight ?? 80, nw = noteBox?.offsetWidth ?? 248;
      // Right-hand notes keep clear of the model key and inside the page margin.
      const keyEl = overlay.modelKey?.current;
      const keyBottom = keyEl ? keyEl.offsetTop + keyEl.offsetHeight + 14 + nh / 2 : 0;
      const y = Math.min(Math.max(foot[1] - 30, H * 0.18, side === 'right' ? keyBottom : 0), H * 0.8);
      const nx = side === 'right' ? Math.min(colR, W - 56 - nw) : colL;
      const sg = side === 'right' ? 1 : -1;
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
    // Layer names, beside the right corner of each layer.
    const LL = overlay.layerLabels?.current;
    if (LL) {
      for (let i = 0; i < 4; i++) {
        const el = LL[i];
        if (!el) continue;
        const y = i * LAYER_GAP * explode;
        let best: [number, number] = [-Infinity, 0];
        for (const [x, z] of [[SHEET.x0 + 0.5, SHEET.z0 + 0.5], [SHEET.x1 - 0.5, SHEET.z0 + 0.5], [SHEET.x1 - 0.5, SHEET.z1 - 0.5], [SHEET.x0 + 0.5, SHEET.z1 - 0.5]] as const) {
          const sp = toScreen([x, y, z]);
          if (sp[0] > best[0]) best = [sp[0], sp[1]];
        }
        el.style.transform = `translate3d(${(best[0] + 14).toFixed(1)}px, ${best[1].toFixed(1)}px, 0)`;
        el.style.opacity = (explode * lerp(0.5, 1, lit[i]!)).toFixed(3);
        el.dataset.lit = lit[i]! > 0.5 ? 'true' : 'false';
      }
    }
    // Lens marks: what each overlay shows, in words.
    const ML = overlay.lensLabels?.current;
    if (ML) {
      const B = built.nodes;
      const mark = (key: string, pos: Vec3, v: number) => {
        const el = ML[key];
        if (!el) return;
        const [x, y] = toScreen(pos);
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
        el.style.opacity = v.toFixed(3);
      };
      mark('bottleneck', [B.prod!.x, B.prod!.h + 0.9, B.prod!.z + B.prod!.d / 2 + 1.6], opV);
      mark('waiting', [B.purch!.x + 1.6, 0.2, B.purch!.z + (B.prod!.z - B.purch!.z) * 0.38], opV);
      mark('rework', [lensGeo.reworkApex.x - 1.2, lensGeo.reworkApex.y + 0.2, lensGeo.reworkApex.z], opV);
      mark('fix', [lensGeo.fixApex.x + 0.6, lensGeo.fixApex.y + 1.3, lensGeo.fixApex.z], opV);
      mark('risk', [B.fin!.x, 0.2, B.fin!.z + B.fin!.d / 2 + 1.9], invV);
      mark('flag', [B.vendor!.x, B.vendor!.h + 1.9, B.vendor!.z], invV);
      mark('lever', [B.sales!.x, B.sales!.h + 2.9, B.sales!.z], invV);
      mark('verify', [B.erp!.x, B.erp!.h + 2.1, B.erp!.z], invV);
    }

    // Node labels: key ones on arrival, then only the block a finding is about.
    const arrival = clamp01((it - 1.6) / 0.8) * (1 - seg(p, [0.08, 0.16]));
    for (const id of NODE_IDS) {
      const el = overlay.nodes.current[id];
      const g = nodeRefs.current[id];
      if (!el || !g) continue;
      const b = built.nodes[id]!;
      const [x, y] = toScreen([g.position.x, b.h * g.scale.y * inLens(...toScreen([g.position.x, 0, g.position.z])) + 0.1, g.position.z]);
      const show = Math.max(KEY_LABELS.has(id) ? arrival : 0, activeSubject === id ? 1 : 0);
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      el.style.opacity = show.toFixed(3);
    }

    if (!ready.current) {
      ready.current = true;
      requestAnimationFrame(() => onReady());
    }
  });

  return (
    <>
      <Backdrop sky={P.sky} />
      <fog attach="fog" args={[P.fog, 60, 150]} />
      <color attach="background" args={[P.env]} />
      <ambientLight key={`ambient-${theme}`} intensity={light ? 0.28 : 0.4} color={light ? '#fff7e8' : '#ffe8c2'} />
      <pointLight position={[0, 14, 4]} intensity={light ? 18 : 12} distance={70} color="#fff1dc" />
      <pointLight position={[-16, 6, 8]} intensity={light ? 12 : 9} distance={55} color="#ffd9a6" />
      <pointLight position={[18, 5, -6]} intensity={light ? 8 : 5} distance={55} color="#c9d4ff" />
      <hemisphereLight key={`hemi-${theme}`} args={[light ? '#ffffff' : theme === 'brand' ? '#eaf3ff' : '#fff1dc', P.hemiGround, light ? 0.32 : 0.45]} />
      <directionalLight position={[-12, 18, 10]} intensity={light ? 2.6 : 2.2} color={light ? '#fffaf2' : theme === 'brand' ? '#f2f7ff' : '#ffeccf'} />

      {/* The table. */}
      <mesh rotation-x={-Math.PI / 2} position={[CENTER.x, 0, CENTER.z]} raycast={noRaycast}>
        {/* Far larger than any view: its edge always lies beyond the fog, so no horizon line shows. */}
        <planeGeometry args={[1400, 1400]} />
        <meshStandardMaterial color={P.table} roughness={0.95} />
      </mesh>
      <mesh ref={pool} rotation-x={-Math.PI / 2} material={mats.pool} raycast={noRaycast} visible={theme !== 'light'} />
      {drawing.map((o, i) => (
        <primitive key={i} object={o} />
      ))}

      {/* The company as built: only inside the lens. */}
      {NODE_IDS.map((id) => {
        const b = built.nodes[id]!;
        const mat = id === 'register' ? mats.register : b.kind === 'system' ? mats.system : b.kind === 'external' ? mats.vendor : mats.team;
        return (
          <group
            key={id}
            ref={(g) => {
              nodeRefs.current[id] = g;
            }}
          >
            {b.kind === 'system' && id !== 'register' ? (
              <>
                {/* A system: stacked slabs with glowing seams between them, like a rack (CC-71). */}
                {(() => {
                  const n = Math.max(2, Math.round(b.h / 0.8));
                  const gap = 0.07;
                  const sh = (b.h - gap * (n - 1)) / n;
                  return Array.from({ length: n }, (_, k) => (
                    <group key={k}>
                      <RoundedBoxMesh args={[b.w, sh, b.d]} radius={Math.min(0.12, sh / 3)} smoothness={3} position-y={k * (sh + gap) + sh / 2} material={mat} raycast={noRaycast} />
                      {k < n - 1 && (
                        <mesh position-y={(k + 1) * (sh + gap) - gap / 2} material={mats.seam} raycast={noRaycast}>
                          <boxGeometry args={[b.w * 0.86, gap * 0.55, b.d * 0.86]} />
                        </mesh>
                      )}
                    </group>
                  ));
                })()}
                <RoundedBoxMesh args={[Math.max(0.1, b.w - 0.3), 0.05, Math.max(0.1, b.d - 0.3)]} radius={0.02} smoothness={2} position-y={b.h + 0.012} material={mats.lidSys} raycast={noRaycast} />
              </>
            ) : id === 'register' ? (
              /* The change register: a gold tablet. */
              <RoundedBoxMesh args={[b.w * 1.25, b.h * 0.55, b.d * 1.25]} radius={0.1} smoothness={4} position-y={(b.h * 0.55) / 2} material={mat} raycast={noRaycast} />
            ) : (
              <>
                {/* A team (or the vendor): a soft module with an inset top, on a thin plinth (CC-71). */}
                <RoundedBoxMesh args={[b.w, b.h, b.d]} radius={Math.min(0.32, b.h / 3, b.w / 4)} smoothness={6} position-y={b.h / 2 + 0.06} material={mat} raycast={noRaycast} />
                <RoundedBoxMesh args={[Math.max(0.1, b.w - 0.44), 0.04, Math.max(0.1, b.d - 0.44)]} radius={0.02} smoothness={2} position-y={b.h + 0.07} material={mats.lid} raycast={noRaycast} />
                <RoundedBoxMesh args={[b.w + 0.22, 0.07, b.d + 0.22]} radius={0.035} smoothness={2} position-y={0.035} material={mats.plinth} raycast={noRaycast} />
              </>
            )}
            <mesh rotation-x={-Math.PI / 2} position={[0.25, 0.006, 0.3]} scale={[b.w * 1.7 + 0.6, b.d * 1.7 + 0.6, 1]} material={mats.shadow} raycast={noRaycast}>
              <planeGeometry args={[1, 1]} />
            </mesh>
          </group>
        );
      })}
      {flowGeos.map((f, i) => (
        <mesh key={`halo-${i}`} geometry={f.halo} material={f.glow} userData={{ haloOf: i }} raycast={noRaycast} renderOrder={2} />
      ))}
      {flowGeos.map((f, i) => (
        <mesh
          key={i}
          geometry={f.geo}
          material={f.core}
          ref={(mm) => {
            flowMeshes.current[i] = mm;
          }}
          raycast={noRaycast}
          renderOrder={3}
        />
      ))}
      <instancedMesh ref={sparks} args={[undefined, undefined, 15]} material={mats.spark} raycast={noRaycast} visible={false}>
        <sphereGeometry args={[0.12, 16, 12]} />
      </instancedMesh>
      {/* How: the four layers of the company. */}
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={`slab-${i}`}
          ref={(m) => {
            slabRefs.current[i] = m;
          }}
          rotation-x={-Math.PI / 2}
          position={[CENTER.x, 0, CENTER.z]}
          material={slabMats[i]}
          raycast={noRaycast}
          visible={false}
        >
          <planeGeometry args={[SHEET.x1 - SHEET.x0 - 1, SHEET.z1 - SHEET.z0 - 1]} />
        </mesh>
      ))}
      {stack.edges.map((o, i) => (
        <primitive key={`edge-${i}`} object={o} />
      ))}
      <primitive object={stack.target} />
      <instancedMesh ref={chips} args={[undefined, undefined, CHIP_N]} material={mats.chip} raycast={noRaycast} visible={false}>
        <boxGeometry args={[1.5, 0.4, 1.5]} />
      </instancedMesh>

      {/* Two lenses: the operator's marks and the investor's, on the same model. */}
      {lensGeo.heat.map((o, i) => (
        <primitive key={`heat-${i}`} object={o} />
      ))}
      <primitive object={lensGeo.fix} />
      <mesh
        ref={(m) => {
          lensRefs.current.rework = m;
        }}
        geometry={lensGeo.rework}
        material={mats.rework}
        raycast={noRaycast}
        visible={false}
      />
      <mesh
        ref={(m) => {
          lensRefs.current.ringOp = m;
        }}
        position={[built.nodes.prod!.x, 0.05, built.nodes.prod!.z]}
        rotation-x={-Math.PI / 2}
        material={mats.ring}
        raycast={noRaycast}
        visible={false}
      >
        <torusGeometry args={[Math.max(built.nodes.prod!.w, built.nodes.prod!.d) * 0.78, 0.06, 8, 96]} />
      </mesh>
      <mesh
        ref={(m) => {
          lensRefs.current.ringInv = m;
        }}
        position={[built.nodes.fin!.x, 0.05, built.nodes.fin!.z]}
        rotation-x={-Math.PI / 2}
        material={mats.ring}
        raycast={noRaycast}
        visible={false}
      >
        <torusGeometry args={[Math.max(built.nodes.fin!.w, built.nodes.fin!.d) * 0.82, 0.05, 8, 96]} />
      </mesh>
      {(['vendor', 'register'] as const).map((id) => {
        const b = built.nodes[id]!;
        return (
          <group
            key={id}
            ref={(g) => {
              lensRefs.current[id === 'vendor' ? 'flagVendor' : 'flagRegister'] = g;
            }}
            position={[b.x, b.h, b.z]}
            visible={false}
          >
            <mesh position-y={0.75} material={mats.flagPole} raycast={noRaycast}>
              <cylinderGeometry args={[0.035, 0.035, 1.5, 8]} />
            </mesh>
            <mesh position={[0.36, 1.25, 0]} material={mats.flag} raycast={noRaycast}>
              <planeGeometry args={[0.72, 0.46]} />
            </mesh>
          </group>
        );
      })}
      <group
        ref={(g) => {
          lensRefs.current.lever = g;
        }}
        position={[built.nodes.sales!.x, built.nodes.sales!.h + 1.4, built.nodes.sales!.z]}
        visible={false}
      >
        <mesh material={mats.goldMark} raycast={noRaycast}>
          <cylinderGeometry args={[0.09, 0.09, 1.1, 12]} />
        </mesh>
        <mesh position-y={0.75} material={mats.goldMark} raycast={noRaycast}>
          <coneGeometry args={[0.3, 0.5, 20]} />
        </mesh>
      </group>
      <mesh
        ref={(m) => {
          lensRefs.current.verify = m;
        }}
        position={[built.nodes.erp!.x, built.nodes.erp!.h + 1.2, built.nodes.erp!.z]}
        material={mats.goldMark}
        raycast={noRaycast}
        visible={false}
      >
        <torusGeometry args={[0.45, 0.07, 10, 48]} />
      </mesh>

      {/* Light: no bloom (the paper itself is bright enough to bloom), a neutral curve that keeps cream cream. */}
      <EffectComposer key={`fx-${theme}`} multisampling={0}>
        <Bloom mipmapBlur intensity={light ? 0 : theme === 'brand' ? 0.45 : 0.9} luminanceThreshold={0.8} luminanceSmoothing={0.25} />
        <ToneMapping mode={light ? ToneMappingMode.NEUTRAL : ToneMappingMode.ACES_FILMIC} />
        <Noise premultiply blendFunction={BlendFunction.SOFT_LIGHT} opacity={light || theme === 'brand' ? 0 : 0.22} />
        <Vignette offset={0.3} darkness={light ? 0.18 : 0.7} />
      </EffectComposer>
    </>
  );
}

export default function LensCanvas(props: Props & { active: boolean }) {
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
