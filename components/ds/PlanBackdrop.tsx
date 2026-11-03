import { PLAN_NODES, SHEET } from '@/scene/model';
import styles from './PlanBackdrop.module.css';

/** Isometric projection of the drawing sheet (x right-down, z left-down), in sheet units. */
const C = Math.cos(Math.PI / 6);
const S = Math.sin(Math.PI / 6);
const iso = (x: number, z: number) => [(x - z) * C, (x + z) * S] as const;
const pt = (x: number, z: number) => iso(x, z).map((v) => v.toFixed(2)).join(' ');
const box = (x: number, z: number, w: number, d: number) => {
  const [x0, x1, z0, z1] = [x - w / 2, x + w / 2, z - d / 2, z + d / 2];
  return `M${pt(x0, z0)} L${pt(x1, z0)} L${pt(x1, z1)} L${pt(x0, z1)} Z`;
};
const ORDER = ['sales', 'crm', 'erp', 'eng', 'purch', 'prod', 'test', 'ship', 'fin'];
const byId = Object.fromEntries(PLAN_NODES.map((n) => [n.id, n]));
const route = ORDER.map((id, i) => `${i ? 'L' : 'M'}${pt(byId[id]!.x, byId[id]!.z)}`).join(' ');
const grid: string[] = [];
for (let x = Math.ceil(SHEET.x0); x <= SHEET.x1; x += 2) grid.push(`M${pt(x, SHEET.z0)} L${pt(x, SHEET.z1)}`);
for (let z = Math.ceil(SHEET.z0); z <= SHEET.z1; z += 2) grid.push(`M${pt(SHEET.x0, z)} L${pt(SHEET.x1, z)}`);
const corners = [iso(SHEET.x0, SHEET.z1), iso(SHEET.x1, SHEET.z0), iso(SHEET.x0, SHEET.z0), iso(SHEET.x1, SHEET.z1)];
const VB = `${(corners[0]![0] - 1).toFixed(1)} ${(corners[2]![1] - 1).toFixed(1)} ${(corners[1]![0] - corners[0]![0] + 2).toFixed(1)} ${(corners[3]![1] - corners[2]![1] + 2).toFixed(1)}`;

/**
 * The company as drawn, flat and faint, behind a plain section, under a soft lens light. Same model as
 * the 3D scene, so the page's quiet sections still show the same company (decorative, aria-hidden).
 * `at` places the drawing; each section crops it differently.
 */
export function PlanBackdrop({ at = 'right' }: { at?: 'right' | 'left' | 'bottom-left' | 'bottom-right' }) {
  return (
    <div className={styles.backdrop} data-at={at} aria-hidden="true">
      <span className={styles.glow} />
      <svg className={styles.plan} viewBox={VB} focusable="false">
        <path className={styles.grid} d={grid.join(' ')} />
        {PLAN_NODES.map((n) => (
          <path key={n.id} className={styles.node} data-kind={n.kind} d={box(n.x, n.z, n.w, n.d)} />
        ))}
        <path className={styles.route} d={route} />
      </svg>
    </div>
  );
}

/** Add to the section so its own content sits above the backdrop. */
export const planSection = styles.section;
