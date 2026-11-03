import { SHEET, type Vec3 } from './model';

/** True isometric projection (camera on the (1,1,1) diagonal, y up), screen y pointing down. */
const S2 = Math.SQRT2;
const S6 = Math.sqrt(6);

/** User units per drawing cell in the SVG, chosen so 1 unit ≈ 1 CSS px on desktop. */
export const K = 32;

export function iso([x, y, z]: Vec3): [number, number] {
  return [((x - z) / S2) * K, ((x - 2 * y + z) / S6) * K];
}

export interface Box2 {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** The sheet's projected bounds (y = 0), with a margin for volumes and arcs above the sheet. */
export function sheetBox(pad = 0.6): Box2 {
  const corners: Vec3[] = [
    [SHEET.x0, 0, SHEET.z0],
    [SHEET.x1, 0, SHEET.z0],
    [SHEET.x1, 0, SHEET.z1],
    [SHEET.x0, 0, SHEET.z1],
  ];
  const pts = corners.map(iso);
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  const x0 = Math.min(...xs) - pad * K;
  const x1 = Math.max(...xs) + pad * K;
  const y0 = Math.min(...ys) - pad * K;
  const y1 = Math.max(...ys) + pad * K;
  return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
}

export const pathD = (pts: Vec3[], close = false) =>
  pts.length < 2
    ? ''
    : pts
        .map((p, i) => {
          const [x, y] = iso(p);
          return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
        })
        .join('') + (close ? 'Z' : '');

/** Position of a 3D point as a percentage of the sheet box, for HTML overlays. */
export function toPercent(p: Vec3, box = sheetBox()): { left: number; top: number } {
  const [x, y] = iso(p);
  return { left: ((x - box.x) / box.w) * 100, top: ((y - box.y) / box.h) * 100 };
}
