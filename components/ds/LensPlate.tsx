/**
 * The two-lens plate: one company model in isometric view, with an operator overlay
 * and an investor overlay on the same geometry. The SVG stand-in for TwoLensesScene,
 * and its reduced-motion fallback. Overlay words come from LC's two lens lines.
 */

import { sceneLabels } from '@/content/home';

type Lens = 'operator' | 'investor';
const T = sceneLabels.lens;

const S = 40; // px per grid unit
const OX = 197;
const OY = 52;
const C30 = 0.866;

const iso = (gx: number, gy: number, h = 0): [number, number] => [OX + (gx - gy) * C30 * S, OY + (gx + gy) * 0.5 * S - h];
const pts = (p: [number, number][]) => p.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');

interface Node {
  id: string;
  gx: number;
  gy: number;
  w: number;
  h: number;
}

const NODES: Node[] = [
  { id: 'a', gx: 0, gy: 1.6, w: 0.8, h: 18 },
  { id: 'b', gx: 2.2, gy: 0, w: 0.8, h: 26 },
  { id: 'c', gx: 3.8, gy: 1.8, w: 1, h: 34 },
  { id: 'd', gx: 1.8, gy: 3.6, w: 0.8, h: 16 },
  { id: 'e', gx: 6.2, gy: 0.4, w: 0.8, h: 24 },
  { id: 'f', gx: 6.2, gy: 3.2, w: 0.8, h: 20 },
];
const byId = Object.fromEntries(NODES.map((n) => [n.id, n])) as Record<string, Node>;
const EDGES: [string, string][] = [
  ['a', 'b'],
  ['b', 'c'],
  ['a', 'd'],
  ['d', 'c'],
  ['c', 'e'],
  ['c', 'f'],
];

const center = (n: Node, h = 0) => iso(n.gx + n.w / 2, n.gy + n.w / 2, h);
const top = (n: Node) => center(n, n.h);

function Box({ n }: { n: Node }) {
  const { gx, gy, w, h } = n;
  const f = (x: number, y: number) => iso(x, y);
  const t = (x: number, y: number) => iso(x, y, h);
  return (
    <g>
      <polygon className="face-l" points={pts([t(gx, gy + w), t(gx + w, gy + w), f(gx + w, gy + w), f(gx, gy + w)])} />
      <polygon className="face-r" points={pts([t(gx + w, gy), t(gx + w, gy + w), f(gx + w, gy + w), f(gx + w, gy)])} />
      <polygon className="face-t" points={pts([t(gx, gy), t(gx + w, gy), t(gx + w, gy + w), t(gx, gy + w)])} />
    </g>
  );
}

function Pill({ x, y, text, tone = 'ink' }: { x: number; y: number; text: string; tone?: 'ink' | 'gold' | 'red' }) {
  const w = text.length * 6.6 + 20;
  return (
    <g className={`pill pill-${tone}`} transform={`translate(${(x - w / 2).toFixed(1)} ${(y - 11).toFixed(1)})`}>
      <rect width={w} height={22} rx={11} />
      <text x={w / 2} y={15} textAnchor="middle">
        {text}
      </text>
    </g>
  );
}

function Flag({ n }: { n: Node }) {
  const [x, y] = top(n);
  return (
    <g className="flag" transform={`translate(${x.toFixed(1)} ${(y - 4).toFixed(1)})`}>
      <path d="M0 0V-26" />
      <path className="flag-cloth" d="M0 -26h13l-4 5 4 5H0z" />
    </g>
  );
}

export function LensPlate({ lens, label }: { lens: Lens; label: string }) {
  const sorted = [...NODES].sort((m, n) => m.gx + m.gy - (n.gx + n.gy));
  const [bx, by] = top(byId.b!);
  const [cx, cy] = center(byId.c!);
  const [ex, ey] = top(byId.e!);
  const [fx, fy] = top(byId.f!);
  const [dx, dy] = center(byId.d!);
  const [ax, ay] = center(byId.a!);
  const ce = [center(byId.c!), center(byId.e!)] as const;
  const bc = [center(byId.b!), center(byId.c!)] as const;
  return (
    <svg className="lens-plate" viewBox="0 0 560 340" role="img" aria-label={label} data-lens={lens}>
      <defs>
        <linearGradient id="heat" x1="0" x2="1">
          <stop offset="0" stopColor="var(--gold)" />
          <stop offset="1" stopColor="var(--red)" />
        </linearGradient>
      </defs>
      <g className="model">
        {/* floor grid */}
        <g className="floor">
          {Array.from({ length: 9 }, (_, i) => (
            <line key={`x${i}`} x1={iso(i - 0.5, -0.6)[0]} y1={iso(i - 0.5, -0.6)[1]} x2={iso(i - 0.5, 4.8)[0]} y2={iso(i - 0.5, 4.8)[1]} />
          ))}
          {Array.from({ length: 6 }, (_, i) => (
            <line key={`y${i}`} x1={iso(-0.6, i - 0.5)[0]} y1={iso(-0.6, i - 0.5)[1]} x2={iso(7.6, i - 0.5)[0]} y2={iso(7.6, i - 0.5)[1]} />
          ))}
        </g>
        {/* the routes between teams and systems */}
        <g className="edges">
          {EDGES.map(([m, n]) => {
            const [x1, y1] = center(byId[m]!);
            const [x2, y2] = center(byId[n]!);
            return <line key={m + n} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>

        {/* Operator: waiting time as heat on the edges, the bottleneck, rework, and the fix */}
        <g className="overlay overlay-operator" aria-hidden="true">
          <line className="heat" x1={bc[0][0]} y1={bc[0][1]} x2={bc[1][0]} y2={bc[1][1]} />
          <line className="heat heat-strong" x1={ce[0][0]} y1={ce[0][1]} x2={ce[1][0]} y2={ce[1][1]} />
          <path className="rework" d={`M${dx} ${dy} C ${dx - 60} ${dy + 10}, ${ax - 60} ${ay + 30}, ${ax - 6} ${ay + 6}`} />
          <path className="fix" d={`M${bx} ${by - 6} Q ${(bx + ex) / 2} ${Math.min(by, ey) - 58} ${ex} ${ey - 6}`} />
          <ellipse className="ring" cx={cx} cy={cy} rx={52} ry={28} />
        </g>

        {sorted.map((n) => (
          <Box key={n.id} n={n} />
        ))}

        {/* Investor: risk, red flags, a value lever, what to verify before signing */}
        <g className="overlay overlay-investor" aria-hidden="true">
          <ellipse className="ring ring-dash" cx={center(byId.e!)[0]} cy={center(byId.e!)[1]} rx={40} ry={22} />
          <Flag n={byId.d!} />
          <Flag n={byId.c!} />
          <g className="lever" transform={`translate(${bx.toFixed(1)} ${(by - 8).toFixed(1)})`}>
            <path d="M0 0V-24M-6 -18L0 -24L6 -18" />
          </g>
          <g className="verify" transform={`translate(${fx.toFixed(1)} ${(fy - 10).toFixed(1)})`}>
            <circle r={10} />
            <path d="M-4 0l3 3 5-6" />
          </g>
        </g>
      </g>

      <g className="labels labels-operator" aria-hidden="true">
        <Pill x={(ce[0][0] + ce[1][0]) / 2 + 22} y={(ce[0][1] + ce[1][1]) / 2 + 30} text={T.waiting} tone="gold" />
        <Pill x={cx - 4} y={cy + 44} text={T.bottleneck} tone="red" />
        <Pill x={ax - 46} y={(ay + dy) / 2 + 6} text={T.rework} />
        <Pill x={(bx + ex) / 2 + 10} y={Math.min(by, ey) - 50} text={T.fix} tone="gold" />
      </g>
      <g className="labels labels-investor" aria-hidden="true">
        <Pill x={center(byId.e!)[0] + 8} y={center(byId.e!)[1] + 40} text={T.risk} tone="red" />
        <Pill x={dx - 10} y={dy + 34} text={T.flag} tone="red" />
        <Pill x={bx} y={by - 46} text={T.lever} tone="gold" />
        <Pill x={fx + 30} y={fy + 58} text={T.verify} tone="gold" />
      </g>
    </svg>
  );
}
