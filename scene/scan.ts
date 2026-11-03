/**
 * The as-built scan: a point cloud of the company, made from its own data.
 * Like a laser scan of a building, it is compared against the official drawing;
 * points that fall outside the drawn volumes carry a deviation value (the red heatmap).
 *
 * Pure data: generated once on the client, consumed by ScanCanvas.
 */
import { BUILT, DRAWN, computeScene, SHEET, type Vec3 } from './model';

/** Deterministic PRNG so every load draws the same scan. */
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface ScanData {
  count: number;
  position: Float32Array; // as-built scan
  scatter: Float32Array; // raw data, before it is assembled
  delta: Float32Array; // unit Δ mark (centred, size 1)
  delay: Float32Array;
  size: Float32Array;
  dev: Float32Array; // 0..1 distance outside the drawn volume
  kind: Float32Array; // 0 floor, 1 surface, 2 edge
}

interface Box {
  x: number;
  z: number;
  w: number;
  d: number;
  h: number;
}

/** Distance (≥ 0) of a point outside a drawn box. */
function outside(p: Vec3, b: Box) {
  const dx = Math.max(Math.abs(p[0] - b.x) - b.w / 2, 0);
  const dz = Math.max(Math.abs(p[2] - b.z) - b.d / 2, 0);
  const dy = Math.max(p[1] - b.h, 0);
  return Math.hypot(dx, dy, dz);
}

export function buildScan(budget = 42000, seed = 7): ScanData {
  const rand = rng(seed);
  const built = computeScene(BUILT).nodes;
  const drawnNodes = computeScene({ ...DRAWN, extrude: 1 }).nodes;
  const ids = Object.keys(built);

  // Area of every surface, to spread points evenly.
  const surf: { id: string; area: number }[] = ids.map((id) => {
    const b = built[id]!;
    return { id, area: b.w * b.d + 2 * (b.w + b.d) * b.h };
  });
  const surfaceArea = surf.reduce((s, x) => s + x.area, 0);
  const nFloor = Math.round(budget * 0.17);
  const nEdge = Math.round(budget * 0.18);
  const nSurf = budget - nFloor - nEdge;

  const pos: number[] = [];
  const kind: number[] = [];
  const owner: string[] = [];
  const jitter = () => (rand() - 0.5) * 0.03;

  // Surfaces
  for (const s of surf) {
    const b = built[s.id]!;
    const n = Math.round((nSurf * s.area) / surfaceArea);
    const faces = [
      { a: b.w * b.d, f: () => [b.x + (rand() - 0.5) * b.w, b.h, b.z + (rand() - 0.5) * b.d] },
      { a: b.w * b.h, f: () => [b.x + (rand() - 0.5) * b.w, rand() * b.h, b.z - b.d / 2] },
      { a: b.w * b.h, f: () => [b.x + (rand() - 0.5) * b.w, rand() * b.h, b.z + b.d / 2] },
      { a: b.d * b.h, f: () => [b.x - b.w / 2, rand() * b.h, b.z + (rand() - 0.5) * b.d] },
      { a: b.d * b.h, f: () => [b.x + b.w / 2, rand() * b.h, b.z + (rand() - 0.5) * b.d] },
    ];
    const total = faces.reduce((t, f) => t + f.a, 0);
    for (let i = 0; i < n; i++) {
      let r = rand() * total;
      const face = faces.find((f) => (r -= f.a) <= 0) ?? faces[0]!;
      const [x, y, z] = face.f() as Vec3;
      pos.push(x + jitter(), y + jitter(), z + jitter());
      kind.push(1);
      owner.push(s.id);
    }
  }

  // Edges: a crisp silhouette, as a scanner sees corners.
  const edgeLen = ids.reduce((t, id) => {
    const b = built[id]!;
    return t + 4 * (b.w + b.d + b.h);
  }, 0);
  for (const id of ids) {
    const b = built[id]!;
    const x0 = b.x - b.w / 2, x1 = b.x + b.w / 2, z0 = b.z - b.d / 2, z1 = b.z + b.d / 2;
    const segs: [Vec3, Vec3][] = [
      [[x0, b.h, z0], [x1, b.h, z0]], [[x1, b.h, z0], [x1, b.h, z1]], [[x1, b.h, z1], [x0, b.h, z1]], [[x0, b.h, z1], [x0, b.h, z0]],
      [[x0, 0, z0], [x1, 0, z0]], [[x1, 0, z0], [x1, 0, z1]], [[x1, 0, z1], [x0, 0, z1]], [[x0, 0, z1], [x0, 0, z0]],
      [[x0, 0, z0], [x0, b.h, z0]], [[x1, 0, z0], [x1, b.h, z0]], [[x1, 0, z1], [x1, b.h, z1]], [[x0, 0, z1], [x0, b.h, z1]],
    ];
    for (const [a, c] of segs) {
      const L = Math.hypot(c[0] - a[0], c[1] - a[1], c[2] - a[2]);
      const n = Math.round((nEdge * L) / edgeLen);
      for (let i = 0; i < n; i++) {
        const t = rand();
        pos.push(a[0] + (c[0] - a[0]) * t + jitter() * 0.5, a[1] + (c[1] - a[1]) * t + jitter() * 0.5, a[2] + (c[2] - a[2]) * t + jitter() * 0.5);
        kind.push(2);
        owner.push(id);
      }
    }
  }

  // Floor: the scanned slab, denser near the building.
  for (let i = 0; i < nFloor; i++) {
    const x = SHEET.x0 + rand() * (SHEET.x1 - SHEET.x0);
    const z = SHEET.z0 + rand() * (SHEET.z1 - SHEET.z0);
    pos.push(x, 0, z);
    kind.push(0);
    owner.push('');
  }

  const count = pos.length / 3;
  const data: ScanData = {
    count,
    position: new Float32Array(pos),
    scatter: new Float32Array(count * 3),
    delta: new Float32Array(count * 3),
    delay: new Float32Array(count),
    size: new Float32Array(count),
    dev: new Float32Array(count),
    kind: new Float32Array(kind),
  };

  const cx = (SHEET.x0 + SHEET.x1) / 2, cz = (SHEET.z0 + SHEET.z1) / 2;
  for (let i = 0; i < count; i++) {
    const p: Vec3 = [pos[i * 3]!, pos[i * 3 + 1]!, pos[i * 3 + 2]!];
    // Raw data: a wide, slow cloud above the site.
    const u = rand() * Math.PI * 2, v = Math.acos(2 * rand() - 1), r = 9 + Math.cbrt(rand()) * 15;
    data.scatter[i * 3] = cx + r * Math.sin(v) * Math.cos(u) * 1.35;
    data.scatter[i * 3 + 1] = 5 + r * Math.cos(v) * 0.55;
    data.scatter[i * 3 + 2] = cz + r * Math.sin(v) * Math.sin(u);
    // Points assemble from the ground up, in route order.
    data.delay[i] = Math.min(1, Math.max(0, 0.15 * rand() + (p[1] / 3.2) * 0.35 + ((p[0] + p[2]) / 40) * 0.5));
    data.size[i] = kind[i] === 2 ? 1.25 + rand() * 0.4 : kind[i] === 0 ? 0.55 + rand() * 0.35 : 0.8 + rand() * 0.5;
    // Deviation: how far this point sits outside its drawn volume.
    const id = owner[i]!;
    if (id) {
      const d = drawnNodes[id]!;
      const off = outside(p, { x: d.x, z: d.z, w: d.w, d: d.d, h: d.h });
      data.dev[i] = Math.min(1, off / 0.6);
    }
    // The Δ mark: an extruded triangle, edges and faces.
    const tri: Vec3[] = [
      [0, 0.58, 0],
      [0.5, -0.29, 0],
      [-0.5, -0.29, 0],
    ];
    const e = Math.floor(rand() * 3);
    const a = tri[e]!, b = tri[(e + 1) % 3]!;
    const t = rand();
    const onEdge = rand() < 0.78;
    let x = a[0] + (b[0] - a[0]) * t, y = a[1] + (b[1] - a[1]) * t;
    if (!onEdge) {
      // fill toward the centroid, sparsely
      const k = Math.pow(rand(), 0.6);
      x *= k;
      y *= k;
    }
    const depth = (rand() - 0.5) * 0.16;
    data.delta[i * 3] = x + (rand() - 0.5) * 0.012;
    data.delta[i * 3 + 1] = y + (rand() - 0.5) * 0.012;
    data.delta[i * 3 + 2] = depth;
  }
  return data;
}

/** Quadratic control points of the hidden flows (from the model's sampled arcs). */
export function flowCurves() {
  const f = computeScene(BUILT);
  return f.lines
    .filter((l) => l.kind === 'hidden')
    .map((l) => {
      const p0 = l.points[0]!, p2 = l.points[l.points.length - 1]!, apex = l.labelAt ?? l.points[Math.floor(l.points.length / 2)]!;
      const p1: Vec3 = [2 * apex[0] - 0.5 * (p0[0] + p2[0]), 2 * apex[1] - 0.5 * (p0[1] + p2[1]), 2 * apex[2] - 0.5 * (p0[2] + p2[2])];
      return { id: l.id, label: l.label, finding: l.finding, p0, p1, p2 };
    });
}
