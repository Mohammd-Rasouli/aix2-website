import type { FragmentKind } from '@/content/types';
import { cloudPath } from '@/scene/cloud2d';
import styles from './Fragment.module.css';

/**
 * Six fragments of the same company drawing, one per red line.
 * Every fragment carries the official route at y = 100, edge to edge, so the
 * fragments join into one continuous drawing when tiled (direction B).
 * The red cloud marks the departure; it draws itself when the card enters view.
 */

const W = 360;
const H = 200;
const ROUTE = 100;

function Box({ x, y, w, h, system = false }: { x: number; y: number; w: number; h: number; system?: boolean }) {
  return (
    <g>
      <rect className={styles.node} x={x} y={y} width={w} height={h} />
      {system && <rect className={styles.inner} x={x + 5} y={y + 5} width={w - 10} height={h - 10} />}
    </g>
  );
}

function Mark({ d }: { d: string }) {
  return <path className={styles.mark} d={d} pathLength={1} />;
}

function Variants() {
  return (
    <>
      <path className={styles.route} d={`M0 ${ROUTE}H${W}`} />
      <Box x={36} y={84} w={54} h={32} system />
      <Box x={270} y={84} w={54} h={32} system />
      <path className={styles.ink} d="M90 100H118V58H232V100H270" />
      <path className={styles.ink} d="M118 100V142H222V100" />
      <path className={styles.ink} d="M118 100H270" />
      {/* waiting: the work stops here */}
      <path className={styles.inkThin} d="M168 52v12M174 52v12M160 136v12M166 136v12" />
      <circle className={styles.dot} cx={118} cy={100} r={3.2} />
      <Mark d={cloudPath(104, 40, 142, 120, 15)} />
    </>
  );
}

function OffSystem() {
  return (
    <>
      <path className={styles.route} d={`M0 ${ROUTE}H${W}`} />
      <Box x={244} y={72} w={72} h={56} system />
      <circle className={styles.node} cx={70} cy={50} r={11} />
      <circle className={styles.node} cx={128} cy={34} r={11} />
      <circle className={styles.node} cx={96} cy={152} r={11} />
      <path className={styles.dash} d="M81 50C130 54 170 62 200 70" />
      <path className={styles.dash} d="M139 34C168 38 190 48 206 58" />
      <path className={styles.dash} d="M107 152C150 148 178 132 198 118" />
      <path className={styles.inkThin} d="M200 66l6 8M206 66l-6 8M206 54l6 8M212 54l-6 8M196 114l6 8M202 114l-6 8" />
      <Mark d={cloudPath(186, 40, 40, 92, 13)} />
    </>
  );
}

function Unproven() {
  const xs = Array.from({ length: 9 }, (_, i) => 20 + i * 37);
  const missing = new Set([2, 5, 8]);
  return (
    <>
      <path className={styles.route} d={`M0 ${ROUTE}H${W}`} />
      <path className={styles.inkThin} d={`M8 164H${W - 8}`} />
      {xs.map((x, i) => (
        <g key={x}>
          <rect className={styles.node} x={x} y={86} width={22} height={28} />
          <path className={styles.tick} d={`M${x + 5} 70l5 5 9-11`} />
          {!missing.has(i) && <path className={styles.ink} d={`M${x + 11} 114V164`} />}
          {!missing.has(i) && <circle className={styles.dot} cx={x + 11} cy={164} r={2.6} />}
        </g>
      ))}
      {[...missing].map((i) => (
        <Mark key={i} d={cloudPath(xs[i]! - 7, 80, 36, 42, 11)} />
      ))}
    </>
  );
}

function TwoHeads() {
  const ys = [26, 46, 66, 84, 116, 134, 154, 174];
  return (
    <>
      <path className={styles.route} d={`M0 ${ROUTE}H${W}`} />
      {ys.map((y, i) => (
        <path key={y} className={styles.inkThin} d={`M14 ${y}C120 ${y} 160 ${i < 4 ? 86 : 114} 240 ${i < 4 ? 86 : 114}`} />
      ))}
      {ys.map((y) => (
        <rect key={`r${y}`} className={styles.node} x={6} y={y - 5} width={12} height={10} />
      ))}
      <circle className={styles.head} cx={250} cy={86} r={9} />
      <circle className={styles.head} cx={250} cy={114} r={9} />
      <path className={styles.ink} d="M259 86C276 86 278 100 296 100M259 114C276 114 278 100 296 100" />
      <Mark d={cloudPath(224, 62, 52, 76, 12.5)} />
    </>
  );
}

function Leak() {
  return (
    <>
      <path className={styles.route} d={`M0 ${ROUTE}H${W}`} />
      <Box x={30} y={78} w={62} h={44} system />
      <Box x={268} y={78} w={62} h={44} system />
      <path className={styles.inkThin} d="M20 160H340" />
      <path className={styles.ink} d="M140 152v16" />
      <path className={styles.ink} d="M244 152v16" />
      <path className={styles.dash} d="M299 122V160H244" />
      <path className={styles.dim} d="M140 182H244M140 177v10M244 177v10M148 178l-8 4 8 4M236 178l8 4-8 4" />
      <Mark d={cloudPath(222, 136, 44, 60, 11)} />
    </>
  );
}

function Weeks() {
  const ticks = Array.from({ length: 16 }, (_, i) => 86 + i * 13.2);
  return (
    <>
      <path className={styles.route} d={`M0 ${ROUTE}H${W}`} />
      <Box x={26} y={82} w={52} h={36} />
      <Box x={286} y={82} w={52} h={36} system />
      {[112, 146, 180, 214, 248].map((x) => (
        <path key={x} className={styles.paper} d={`M${x} 90h18l6 6v18h-24Z`} />
      ))}
      <path className={styles.dim} d="M86 58H284M86 50v16M284 50v16M94 54l-8 4 8 4M276 54l8 4-8 4" />
      {ticks.map((x) => (
        <path key={x} className={styles.inkThin} d={`M${x.toFixed(1)} 66v-4`} />
      ))}
      <Mark d={cloudPath(76, 38, 218, 40, 14)} />
    </>
  );
}

const DRAWINGS: Record<FragmentKind, () => React.JSX.Element> = {
  variants: Variants,
  offSystem: OffSystem,
  unproven: Unproven,
  twoHeads: TwoHeads,
  leak: Leak,
  weeks: Weeks,
};

export function Fragment({ kind }: { kind: FragmentKind }) {
  const Drawing = DRAWINGS[kind];
  const gridId = `grid-${kind}`;
  return (
    <svg className={styles.svg} viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={gridId} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" className={styles.gridLine} />
        </pattern>
      </defs>
      <rect width={W} height={H} fill={`url(#${gridId})`} />
      <Drawing />
    </svg>
  );
}
