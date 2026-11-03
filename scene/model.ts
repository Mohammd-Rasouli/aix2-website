/**
 * The company drawing behind the hero: one official order route, drawn as an
 * isometric plan, and the same company as built. Plain data and pure functions,
 * shared by the WebGL scene (HeroCanvas) and the SVG drawing (HeroDrawingSVG),
 * so the poster, the reduced-motion drawing and the 3D scene always agree.
 *
 * Units are drawing-grid cells. x runs along the route, z across lanes, y is height.
 */

export type Vec2 = [number, number];
export type Vec3 = [number, number, number];

/** Scroll-driven state, each 0..1. */
export interface SceneState {
  extrude: number; // flat plan → built volumes
  hidden: number; // hidden flows draw on
  deform: number; // the clean layout deforms into the as-built network
  a1: number; // red-ink findings
  a2: number;
  a3: number;
}

export const DRAWN: SceneState = { extrude: 0, hidden: 0, deform: 0, a1: 0, a2: 0, a3: 0 };
export const BUILT: SceneState = { extrude: 1, hidden: 1, deform: 1, a1: 1, a2: 1, a3: 1 };
/** Phones and the SVG fallback: the clean plan, marked up, without volumes. */
export const MARKED: SceneState = { extrude: 0, hidden: 1, deform: 0, a1: 1, a2: 1, a3: 1 };

export type NodeKind = 'team' | 'system' | 'external';

interface NodeSpec {
  id: string;
  kind: NodeKind;
  x: number;
  z: number;
  w: number; // along x
  d: number; // along z
  h: number; // built height
  built?: { dx?: number; dz?: number; scale?: number; h?: number; muted?: boolean };
}

/** Route order = assembly order. */
const NODE_SPECS: NodeSpec[] = [
  { id: 'sales', kind: 'team', x: 2.5, z: 2, w: 3.2, d: 2.2, h: 1.1 },
  { id: 'crm', kind: 'system', x: 7.5, z: 2, w: 1.6, d: 1.6, h: 2.4 },
  { id: 'erp', kind: 'system', x: 12.5, z: 2, w: 1.8, d: 1.8, h: 2.9 },
  { id: 'eng', kind: 'team', x: 12.5, z: 8, w: 3.2, d: 2.2, h: 1.25, built: { dx: 0.8, dz: 1.0 } },
  { id: 'purch', kind: 'team', x: 17.5, z: 8, w: 2.6, d: 2.0, h: 1.0 },
  { id: 'prod', kind: 'team', x: 17.5, z: 14, w: 4.2, d: 2.8, h: 1.6, built: { scale: 1.12 } },
  { id: 'test', kind: 'team', x: 12.5, z: 14, w: 2.4, d: 2.0, h: 1.0, built: { dx: -0.5 } },
  { id: 'ship', kind: 'team', x: 7.5, z: 14, w: 2.6, d: 2.0, h: 1.0 },
  { id: 'fin', kind: 'team', x: 2.5, z: 14, w: 2.8, d: 2.0, h: 1.1 },
  { id: 'vendor', kind: 'external', x: 2.5, z: 8, w: 1.6, d: 1.6, h: 1.8 },
  { id: 'register', kind: 'system', x: 7.5, z: 8, w: 1.4, d: 1.4, h: 2.2, built: { h: 0.8, muted: true } },
];

export const NODE_IDS = NODE_SPECS.map((n) => n.id);

/** The drawing sheet: framing reference for every renderer. */
export const SHEET = { x0: -0.5, x1: 21.5, z0: -0.5, z1: 17 };

export interface NodeState {
  id: string;
  kind: NodeKind;
  x: number;
  z: number;
  w: number;
  d: number;
  h: number;
  muted: number;
  order: number;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
/** Height of a node in the flat plan: just above the route lines. */
export const MIN_H = 0.04;
export const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smooth = (t: number) => t * t * (3 - 2 * t);

export function nodeStates(s: SceneState): Record<string, NodeState> {
  const out: Record<string, NodeState> = {};
  NODE_SPECS.forEach((n, i) => {
    const b = n.built ?? {};
    const t = smooth(clamp01(s.deform));
    const scale = lerp(1, b.scale ?? 1, t);
    const h = lerp(n.h, b.h ?? n.h, t);
    out[n.id] = {
      id: n.id,
      kind: n.kind,
      x: n.x + (b.dx ?? 0) * t,
      z: n.z + (b.dz ?? 0) * t,
      w: n.w * scale,
      d: n.d * scale,
      // Never fully flat: the roof stays just above the route lines so it hides them.
      h: Math.max(MIN_H, h * smooth(clamp01(s.extrude))),
      muted: b.muted ? t : 0,
      order: i,
    };
  });
  return out;
}

type N = Record<string, NodeState>;
const c = (n: NodeState): Vec2 => [n.x, n.z];
const xz = (a: Vec2, b: Vec2): Vec2[] => [a, [b[0], a[1]], b];
const zx = (a: Vec2, b: Vec2): Vec2[] => [a, [a[0], b[1]], b];
const zxz = (a: Vec2, b: Vec2, mid: number): Vec2[] => [a, [a[0], mid], [b[0], mid], b];

export type LineKind = 'official' | 'variant' | 'hidden' | 'cloud' | 'leader';

export interface LineState {
  id: string;
  kind: LineKind;
  points: Vec3[];
  reveal: number; // 0..1 portion drawn, from the start
  order: number; // assembly order (SVG poster)
  label?: string; // flow label key
  labelAt?: Vec3;
  finding?: 'a1' | 'a2' | 'a3';
}

const Y_LINE = 0.012;
const Y_CLOUD = 0.03;

const flat = (pts: Vec2[], y = Y_LINE): Vec3[] => pts.map(([x, z]) => [x, y, z]);

/** The official order route, plus the official side paths. Always drawn. */
const OFFICIAL: { id: string; route: (n: N) => Vec2[] }[] = [
  { id: 'o-sales-crm', route: (n) => [c(n.sales!), c(n.crm!)] },
  { id: 'o-crm-erp', route: (n) => [c(n.crm!), c(n.erp!)] },
  { id: 'o-erp-eng', route: (n) => zx(c(n.erp!), c(n.eng!)) },
  { id: 'o-eng-purch', route: (n) => zx(c(n.eng!), c(n.purch!)) },
  { id: 'o-purch-prod', route: (n) => xz(c(n.purch!), c(n.prod!)) },
  { id: 'o-prod-test', route: (n) => zx(c(n.prod!), c(n.test!)) },
  { id: 'o-test-ship', route: (n) => zx(c(n.test!), c(n.ship!)) },
  { id: 'o-ship-fin', route: (n) => zx(c(n.ship!), c(n.fin!)) },
  { id: 'o-crm-vendor', route: (n) => zxz(c(n.crm!), c(n.vendor!), 5) },
  { id: 'o-eng-register', route: (n) => xz(c(n.eng!), c(n.register!)) },
  { id: 'o-register-prod', route: (n) => zxz(c(n.register!), c(n.prod!), 11) },
];

/** Δ1: one official route, three real ones, splitting right below the ERP. */
const VARIANTS: { id: string; route: (n: N) => Vec2[] }[] = [
  {
    id: 'v-custom',
    route: (n) => [
      [n.erp!.x - 0.6, n.erp!.z],
      [n.erp!.x - 0.6, n.test!.z],
      [n.test!.x, n.test!.z],
    ],
  },
  {
    id: 'v-standard',
    route: (n) => [
      [n.erp!.x + 0.6, n.erp!.z],
      [n.erp!.x + 0.6, 6.2],
      [n.purch!.x, 6.2],
      [n.purch!.x, n.purch!.z],
    ],
  },
];

/** Work that never reaches a system. Arcs over the plan. */
const HIDDEN: { id: string; label?: string; from: string; to: string; lift: number; finding?: 'a3' }[] = [
  { id: 'h-email', label: 'email', from: 'sales', to: 'eng', lift: 2.0 },
  { id: 'h-chat', label: 'chat', from: 'eng', to: 'prod', lift: 1.7 },
  { id: 'h-paper', label: 'paper', from: 'prod', to: 'erp', lift: 2.2 },
  { id: 'h-excel', label: 'excel', from: 'ship', to: 'sales', lift: 2.0 },
  { id: 'h-floor', label: 'floor', from: 'test', to: 'eng', lift: 1.3 },
  { id: 'h-late', from: 'sales', to: 'vendor', lift: 1.2, finding: 'a3' },
];

interface CloudSpec {
  id: 'a1' | 'a2' | 'a3';
  rect: (n: N) => { cx: number; cz: number; w: number; d: number };
  foot: (n: N) => Vec2; // where the leader rises from
  lift: number; // leader height
  side: 'left' | 'right';
}

export const CLOUDS: CloudSpec[] = [
  {
    id: 'a1',
    rect: (n) => ({ cx: n.erp!.x, cz: 4.6, w: 2.9, d: 3.1 }),
    foot: (n) => [n.erp!.x + 1.45, 4.6],
    lift: 3.6,
    side: 'right',
  },
  {
    id: 'a2',
    rect: (n) => ({ cx: n.register!.x, cz: n.register!.z, w: 3.0, d: 2.8 }),
    foot: (n) => [n.register!.x + 1.5, n.register!.z + 0.6],
    lift: 3.9,
    side: 'left',
  },
  {
    id: 'a3',
    rect: (n) => ({ cx: n.vendor!.x, cz: n.vendor!.z - 0.4, w: 3.0, d: 3.4 }),
    foot: (n) => [n.vendor!.x - 1.5, n.vendor!.z + 0.4],
    lift: 2.0,
    side: 'left',
  },
];

/** Polyline helpers */
export function polyLength(pts: Vec3[]): number {
  let L = 0;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1]!, b = pts[i]!;
    L += Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
  }
  return L;
}

/** The first `t` (0..1) of a polyline, by length. */
export function trimPolyline(pts: Vec3[], t: number): Vec3[] {
  if (t >= 1) return pts;
  if (t <= 0 || pts.length < 2) return [];
  const total = polyLength(pts);
  let left = total * t;
  const out: Vec3[] = [pts[0]!];
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1]!, b = pts[i]!;
    const seg = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    if (seg >= left) {
      const k = seg === 0 ? 0 : left / seg;
      out.push([a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k]);
      return out;
    }
    out.push(b);
    left -= seg;
  }
  return out;
}

function arc(a: NodeState, b: NodeState, lift: number, steps = 36): { pts: Vec3[]; apex: Vec3 } {
  const p0: Vec3 = [a.x, a.h, a.z];
  const p2: Vec3 = [b.x, b.h, b.z];
  const p1: Vec3 = [(a.x + b.x) / 2, Math.max(a.h, b.h) + lift * 1.3, (a.z + b.z) / 2];
  const pts: Vec3[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps, u = 1 - t;
    pts.push([
      u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0],
      u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1],
      u * u * p0[2] + 2 * u * t * p1[2] + t * t * p2[2],
    ]);
  }
  return { pts, apex: pts[Math.floor(steps / 2)]! };
}

/** Revision cloud: scallops bulging outward around a plan rectangle. */
export function cloudPoints(cx: number, cz: number, w: number, d: number, bump = 0.62, y = Y_CLOUD): Vec3[] {
  const x0 = cx - w / 2, x1 = cx + w / 2, z0 = cz - d / 2, z1 = cz + d / 2;
  const nx = Math.max(2, Math.round(w / bump));
  const nz = Math.max(2, Math.round(d / bump));
  const corners: Vec2[] = [];
  for (let i = 0; i < nx; i++) corners.push([x0 + (w * i) / nx, z0]);
  for (let i = 0; i < nz; i++) corners.push([x1, z0 + (d * i) / nz]);
  for (let i = 0; i < nx; i++) corners.push([x1 - (w * i) / nx, z1]);
  for (let i = 0; i < nz; i++) corners.push([x0, z1 - (d * i) / nz]);
  const pts: Vec3[] = [];
  const steps = 7;
  for (let i = 0; i < corners.length; i++) {
    const a = corners[i]!, b = corners[(i + 1) % corners.length]!;
    const mx = (a[0] + b[0]) / 2, mz = (a[1] + b[1]) / 2;
    const hx = (b[0] - a[0]) / 2, hz = (b[1] - a[1]) / 2;
    const r = Math.hypot(hx, hz);
    let nxv = -hz / (r || 1), nzv = hx / (r || 1);
    if (nxv * (mx - cx) + nzv * (mz - cz) < 0) {
      nxv = -nxv;
      nzv = -nzv;
    }
    for (let s = i === 0 ? 0 : 1; s <= steps; s++) {
      const th = (Math.PI * s) / steps;
      pts.push([mx - Math.cos(th) * hx + Math.sin(th) * nxv * r * 0.9, y, mz - Math.cos(th) * hz + Math.sin(th) * nzv * r * 0.9]);
    }
  }
  return pts;
}

export interface AnnotationAnchor {
  id: 'a1' | 'a2' | 'a3';
  anchor: Vec3;
  side: 'left' | 'right';
  reveal: number;
}

export interface SceneFrame {
  nodes: Record<string, NodeState>;
  lines: LineState[];
  anchors: AnnotationAnchor[];
}

/** Stagger helper: item i of n inside a 0..1 phase. */
const stagger = (t: number, i: number, n: number, span = 0.55) => {
  const start = n <= 1 ? 0 : (i / (n - 1)) * (1 - span);
  return clamp01((t - start) / span);
};

export function computeScene(s: SceneState): SceneFrame {
  const n = nodeStates(s);
  const lines: LineState[] = [];
  let order = NODE_SPECS.length;

  OFFICIAL.forEach((e) => {
    lines.push({ id: e.id, kind: 'official', points: flat(e.route(n)), reveal: 1, order: order++ });
  });

  const variantT = clamp01((s.deform - 0.25) / 0.75);
  VARIANTS.forEach((e, i) => {
    lines.push({
      id: e.id,
      kind: 'variant',
      points: flat(e.route(n), Y_LINE * 1.5),
      reveal: stagger(variantT, i, VARIANTS.length, 0.8),
      order: order++,
      finding: 'a1',
    });
  });

  HIDDEN.forEach((e, i) => {
    const a = n[e.from]!, b = n[e.to]!;
    const { pts, apex } = arc(a, b, e.lift);
    lines.push({
      id: e.id,
      kind: 'hidden',
      points: pts,
      reveal: e.finding ? clamp01(s[e.finding] * 1.6) : stagger(s.hidden, i, HIDDEN.length - 1),
      order: order++,
      label: e.label,
      labelAt: apex,
      finding: e.finding,
    });
  });

  const anchors: AnnotationAnchor[] = [];
  CLOUDS.forEach((cl) => {
    const r = cl.rect(n);
    const t = s[cl.id];
    lines.push({
      id: `cloud-${cl.id}`,
      kind: 'cloud',
      points: cloudPoints(r.cx, r.cz, r.w, r.d),
      reveal: clamp01(t / 0.6),
      order: order++,
      finding: cl.id,
    });
    const [fx, fz] = cl.foot(n);
    const anchor: Vec3 = [fx, cl.lift, fz];
    lines.push({
      id: `leader-${cl.id}`,
      kind: 'leader',
      points: [
        [fx, Y_CLOUD, fz],
        anchor,
      ],
      reveal: clamp01((t - 0.45) / 0.4),
      order: order++,
      finding: cl.id,
    });
    anchors.push({ id: cl.id, anchor, side: cl.side, reveal: clamp01((t - 0.7) / 0.3) });
  });

  return { nodes: n, lines, anchors };
}

/** Box corners for a node: bottom ring then top ring (x0z0, x1z0, x1z1, x0z1). */
export function boxCorners(b: NodeState): Vec3[] {
  const x0 = b.x - b.w / 2, x1 = b.x + b.w / 2, z0 = b.z - b.d / 2, z1 = b.z + b.d / 2;
  return [
    [x0, 0, z0],
    [x1, 0, z0],
    [x1, 0, z1],
    [x0, 0, z1],
    [x0, b.h, z0],
    [x1, b.h, z0],
    [x1, b.h, z1],
    [x0, b.h, z1],
  ];
}

/**
 * Hero timeline: which part of the pinned scroll drives which state.
 * Shared by the scroll scene and documented in docs/design-directions.md.
 */
export const TIMELINE = {
  // The copy scrolls out over roughly the first third; the plan rises beside it.
  extrude: [0.03, 0.26],
  // Then the camera glides to the centre and dollies in.
  camera: [0.22, 0.56],
  hidden: [0.36, 0.62],
  deform: [0.48, 0.68],
  a1: [0.64, 0.75],
  a2: [0.74, 0.85],
  a3: [0.84, 0.95],
} as const;

export function stateAt(p: number): SceneState & { camera: number } {
  const seg = ([a, b]: readonly [number, number]) => clamp01((p - a) / (b - a));
  return {
    camera: seg(TIMELINE.camera),
    extrude: seg(TIMELINE.extrude),
    hidden: seg(TIMELINE.hidden),
    deform: seg(TIMELINE.deform),
    a1: seg(TIMELINE.a1),
    a2: seg(TIMELINE.a2),
    a3: seg(TIMELINE.a3),
  };
}

/** Footprints only, for flat drawings of the company as drawn (PlanBackdrop). */
export const PLAN_NODES = NODE_SPECS.map(({ id, kind, x, z, w, d }) => ({ id, kind, x, z, w, d }));
