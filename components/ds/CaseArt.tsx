import type { ReactElement } from 'react';
import { clientPhotos } from '@/content/cases/logos';
import styles from './CaseArt.module.css';

/**
 * Cover art for a customer: a small isometric scene of the client's world (plant, panels, drums, racks,
 * pallets, books, layers) drawn in the site's own tones, so the Customers cards carry an image of their own
 * without stock photos or invented client imagery (CC-60). Decorative: aria-hidden.
 */
type Prim =
  | { t: 'box'; x: number; y: number; w: number; d: number; h: number; z?: number; lit?: number }
  | { t: 'cyl'; x: number; y: number; r: number; h: number; lit?: boolean };

export type ArtKind = 'plant' | 'panels' | 'lubricants' | 'network' | 'pallets' | 'books' | 'layers';

const SCENES: Record<ArtKind, Prim[]> = {
  plant: [
    { t: 'box', x: 0, y: 0, w: 3, d: 2.4, h: 2.2, lit: 2 },
    { t: 'box', x: 4, y: 0.4, w: 2.2, d: 2, h: 1.5, lit: 1 },
    { t: 'box', x: 0.4, y: 3.6, w: 7.5, d: 1, h: 0.45 },
    { t: 'box', x: 1.2, y: 3.75, w: 0.9, d: 0.7, h: 0.5, z: 0.45, lit: 1 },
    { t: 'box', x: 3.4, y: 3.75, w: 0.9, d: 0.7, h: 0.5, z: 0.45 },
    { t: 'box', x: 5.6, y: 3.75, w: 0.9, d: 0.7, h: 0.5, z: 0.45, lit: 1 },
    { t: 'box', x: 7, y: 0, w: 1.6, d: 2.4, h: 3.2 },
  ],
  panels: [0, 1, 2, 3, 4].map((i) => ({ t: 'box' as const, x: i * 1.55, y: 0, w: 1.3, d: 1.6, h: 3.4 - (i % 2) * 0.5, lit: 3 })).concat([
    { t: 'box' as const, x: 0.2, y: 2.9, w: 7, d: 0.7, h: 0.3, lit: 0 },
    { t: 'box' as const, x: 1.4, y: 3.1, w: 1.1, d: 0.9, h: 1.1, lit: 1 },
    { t: 'box' as const, x: 4.6, y: 3.1, w: 1.1, d: 0.9, h: 0.8, lit: 0 },
  ]),
  lubricants: [
    { t: 'cyl', x: 1.4, y: 1.4, r: 1.3, h: 3.6, lit: true },
    { t: 'cyl', x: 4.2, y: 1.4, r: 1.3, h: 3, lit: false },
    { t: 'box', x: 6.4, y: 0.4, w: 2.4, d: 1.8, h: 1.4, lit: 2 },
    { t: 'cyl', x: 0.9, y: 4.4, r: 0.62, h: 1.5 },
    { t: 'cyl', x: 2.6, y: 4.4, r: 0.62, h: 1.5, lit: true },
    { t: 'cyl', x: 4.3, y: 4.4, r: 0.62, h: 1.5 },
    { t: 'cyl', x: 6, y: 4.4, r: 0.62, h: 1.5, lit: true },
    { t: 'box', x: 7.2, y: 3.6, w: 1.4, d: 1.5, h: 0.5, lit: 1 },
  ],
  network: [
    { t: 'box', x: 0, y: 0, w: 1.4, d: 1.6, h: 3.6, lit: 5 },
    { t: 'box', x: 1.7, y: 0, w: 1.4, d: 1.6, h: 3.6, lit: 5 },
    { t: 'box', x: 3.4, y: 0, w: 1.4, d: 1.6, h: 3.6, lit: 4 },
    { t: 'box', x: 5.1, y: 0, w: 1.4, d: 1.6, h: 2.8, lit: 3 },
    { t: 'box', x: 0.2, y: 3, w: 2.2, d: 1.1, h: 0.5, lit: 2 },
    { t: 'box', x: 3.2, y: 3, w: 2.2, d: 1.1, h: 0.5, lit: 1 },
  ],
  pallets: [
    { t: 'box', x: 0, y: 0, w: 1.7, d: 1.7, h: 1.2, lit: 1 },
    { t: 'box', x: 0, y: 0, w: 1.7, d: 1.7, h: 1.1, z: 1.2 },
    { t: 'box', x: 2.1, y: 0, w: 1.7, d: 1.7, h: 1.2 },
    { t: 'box', x: 4.2, y: 0, w: 1.7, d: 1.7, h: 1.2, lit: 1 },
    { t: 'box', x: 4.2, y: 0, w: 1.7, d: 1.7, h: 1.1, z: 1.2, lit: 1 },
    { t: 'box', x: 0, y: 2.6, w: 6.4, d: 1.9, h: 1.7, lit: 3 },
    { t: 'box', x: 6.6, y: 0.2, w: 1.7, d: 1.7, h: 1.2 },
  ],
  books: [
    { t: 'box', x: 0, y: 0, w: 3.4, d: 2.4, h: 0.45 },
    { t: 'box', x: 0.2, y: 0.1, w: 3, d: 2.2, h: 0.4, z: 0.45, lit: 1 },
    { t: 'box', x: 0.1, y: 0, w: 3.2, d: 2.3, h: 0.35, z: 0.85 },
    { t: 'box', x: 4.3, y: 0.2, w: 3, d: 0.4, h: 2.2, lit: 3 },
    { t: 'box', x: 4.6, y: 0.2, w: 2.4, d: 1.4, h: 0.3, z: 0 },
    { t: 'box', x: 0.4, y: 3.2, w: 2.6, d: 1.6, h: 0.35 },
    { t: 'box', x: 0.6, y: 3.3, w: 2.2, d: 1.4, h: 0.35, z: 0.35, lit: 1 },
    { t: 'box', x: 4.4, y: 3.1, w: 3.2, d: 2, h: 0.35, lit: 2 },
  ],
  layers: [
    { t: 'box', x: 0, y: 0, w: 6, d: 4, h: 0.4, lit: 2 },
    { t: 'box', x: 0.4, y: 0.3, w: 5.2, d: 3.4, h: 0.4, z: 1.1, lit: 3 },
    { t: 'box', x: 0.8, y: 0.6, w: 4.4, d: 2.8, h: 0.4, z: 2.2, lit: 2 },
    { t: 'box', x: 1.2, y: 0.9, w: 3.6, d: 2.2, h: 0.4, z: 3.3, lit: 4 },
  ],
};

const U = 22;
const px = (x: number, y: number, z: number) => [(x - y) * 0.866 * U, (x + y) * 0.5 * U - z * U] as const;
const pts = (a: (readonly [number, number])[]) => a.map(([X, Y]) => `${X.toFixed(1)},${Y.toFixed(1)}`).join(' ');

function render(p: Prim, i: number): { el: ReactElement; b: [number, number, number, number] } {
  if (p.t === 'box') {
    const z = p.z ?? 0, { x, y, w, d, h } = p;
    const top = [px(x, y, z + h), px(x + w, y, z + h), px(x + w, y + d, z + h), px(x, y + d, z + h)];
    const left = [px(x, y + d, z), px(x + w, y + d, z), px(x + w, y + d, z + h), px(x, y + d, z + h)];
    const right = [px(x + w, y, z), px(x + w, y + d, z), px(x + w, y + d, z + h), px(x + w, y, z + h)];
    const all = [...top, ...left, ...right];
    const lights = [];
    // Small lit strips on the left face: status lights, drawers, slots.
    for (let k = 0; k < (p.lit ?? 0); k++) {
      const t0 = 0.22 + k * 0.17;
      const a = px(x + w * 0.12, y + d, z + h * t0), b = px(x + w * 0.62, y + d, z + h * t0), c = px(x + w * 0.62, y + d, z + h * (t0 + 0.06)), e = px(x + w * 0.12, y + d, z + h * (t0 + 0.06));
      lights.push(<polygon key={k} className={styles.lit} points={pts([a, b, c, e])} />);
    }
    return {
      el: (
        <g key={i}>
          <polygon className={styles.left} points={pts(left)} />
          <polygon className={styles.right} points={pts(right)} />
          <polygon className={styles.top} points={pts(top)} />
          {lights}
        </g>
      ),
      b: [Math.min(...all.map((q) => q[0])), Math.min(...all.map((q) => q[1])), Math.max(...all.map((q) => q[0])), Math.max(...all.map((q) => q[1]))],
    };
  }
  const [cx, cy] = px(p.x, p.y, 0);
  const rx = p.r * U * 1.1, ry = rx * 0.5, H = p.h * U;
  return {
    el: (
      <g key={i}>
        <path className={styles.left} d={`M${(cx - rx).toFixed(1)},${(cy - H).toFixed(1)} L${(cx - rx).toFixed(1)},${cy.toFixed(1)} A${rx.toFixed(1)},${ry.toFixed(1)} 0 0 0 ${(cx + rx).toFixed(1)},${cy.toFixed(1)} L${(cx + rx).toFixed(1)},${(cy - H).toFixed(1)} Z`} />
        <path className={styles.right} d={`M${cx.toFixed(1)},${(cy + ry - H).toFixed(1)} L${cx.toFixed(1)},${(cy + ry).toFixed(1)} A${rx.toFixed(1)},${ry.toFixed(1)} 0 0 0 ${(cx + rx).toFixed(1)},${cy.toFixed(1)} L${(cx + rx).toFixed(1)},${(cy - H).toFixed(1)} Z`} />
        <ellipse className={styles.top} cx={cx} cy={cy - H} rx={rx} ry={ry} />
        {p.lit && <ellipse className={styles.band} cx={cx} cy={cy - H * 0.45} rx={rx} ry={ry} />}
      </g>
    ),
    b: [cx - rx, cy - H - ry, cx + rx, cy + ry],
  };
}

export function CaseArt({ kind, className }: { kind: ArtKind; className?: string }) {
  const prims = [...SCENES[kind]].sort((a, b) => a.x + a.y + (a.t === 'box' ? 0 : a.r) - (b.x + b.y + (b.t === 'box' ? 0 : b.r)) || (a.t === 'box' ? a.z ?? 0 : 0) - (b.t === 'box' ? b.z ?? 0 : 0));
  const items = prims.map(render);
  const x0 = Math.min(...items.map((r) => r.b[0])), y0 = Math.min(...items.map((r) => r.b[1]));
  const x1 = Math.max(...items.map((r) => r.b[2])), y1 = Math.max(...items.map((r) => r.b[3]));
  const pad = 18;
  return (
    <svg className={`${styles.art} ${className ?? ''}`} viewBox={`${(x0 - pad).toFixed(0)} ${(y0 - pad).toFixed(0)} ${(x1 - x0 + pad * 2).toFixed(0)} ${(y1 - y0 + pad * 2).toFixed(0)}`} aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet">
      <ellipse className={styles.shadow} cx={(x0 + x1) / 2} cy={y1 - 6} rx={(x1 - x0) * 0.5} ry={(y1 - y0) * 0.12} />
      {items.map((r) => r.el)}
    </svg>
  );
}

/** Which scene belongs to which customer (card id or the last part of the case route). */
const KIND: Record<string, ArtKind> = {
  canada: 'network',
  'it-network-canada': 'network',
  istanbul: 'plant',
  'industrial-manufacturer-istanbul': 'plant',
  'mirr-oils': 'lubricants',
  'lubricants-manufacturer-uae': 'lubricants',
  welektrik: 'panels',
  'electrical-equipment-supplier-istanbul': 'panels',
  frankfurt: 'pallets',
  'technology-reseller-frankfurt': 'pallets',
  'edu-journey': 'books',
  'dental-education-consulting-texas': 'books',
  europe: 'layers',
  'software-provider-europe': 'layers',
};

/** Card id → case route slug, so one photo entry serves the card and the page. */
const CARD_SLUG: Record<string, string> = {
  canada: 'it-network-canada',
  istanbul: 'industrial-manufacturer-istanbul',
  'mirr-oils': 'lubricants-manufacturer-uae',
  welektrik: 'electrical-equipment-supplier-istanbul',
  frankfurt: 'technology-reseller-frankfurt',
  'edu-journey': 'dental-education-consulting-texas',
  europe: 'software-provider-europe',
};

export const artKind = (idOrSlug: string): ArtKind | undefined => KIND[idOrSlug];

/** The client's own photo when there is one, otherwise the drawn scene. */
export function CaseVisual({ id }: { id: string }) {
  const photo = clientPhotos[id] ?? clientPhotos[CARD_SLUG[id] ?? ''];
  if (photo)
    // eslint-disable-next-line @next/next/no-img-element -- fixed client photo, sized by its frame
    return <img className={styles.photo} src={photo.src} alt={photo.alt} width={photo.w} height={photo.h} loading="lazy" decoding="async" />;
  const kind = artKind(id);
  return kind ? <CaseArt kind={kind} /> : null;
}
