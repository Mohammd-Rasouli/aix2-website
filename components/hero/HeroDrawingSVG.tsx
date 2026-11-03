import type { CSSProperties } from 'react';
import { BUILT, DRAWN, MARKED, NODE_IDS, SHEET, boxCorners, computeScene, type SceneState, type Vec3 } from '@/scene/model';
import { K, iso, pathD, sheetBox } from '@/scene/iso';
import styles from './drawing.module.css';

export type DrawingMode = 'poster' | 'marked' | 'built';

const STATE: Record<DrawingMode, SceneState> = { poster: DRAWN, marked: MARKED, built: BUILT };

/** Timings (ms) for the line-by-line assembly. Kept in one place for the motion spec. */
export const ASSEMBLY = {
  gridFade: 400,
  sheet: { delay: 0, dur: 700 },
  node: { delay: 250, step: 80, dur: 420 },
  official: { delay: 600, step: 100, dur: 520 },
  // Phones: the markup follows the assembly.
  variant: { delay: 2300, step: 150, dur: 600 },
  hidden: { delay: 2600, step: 140, dur: 700 },
  finding: { delay: 3500, step: 450, dur: 650 },
};
export const ASSEMBLY_END = ASSEMBLY.official.delay + 10 * ASSEMBLY.official.step + ASSEMBLY.official.dur;

const v = (delay: number, dur: number) => ({ '--delay': `${delay}ms`, '--dur': `${dur}ms` }) as CSSProperties;

function poly(pts: Vec3[]) {
  return pts
    .map((p) => iso(p))
    .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
    .join(' ');
}

function gridPaths() {
  let minor = '';
  let major = '';
  for (let x = Math.ceil(SHEET.x0); x <= SHEET.x1; x++) {
    const d = pathD([
      [x, 0, SHEET.z0],
      [x, 0, SHEET.z1],
    ]);
    if (x % 5 === 0) major += d;
    else minor += d;
  }
  for (let z = Math.ceil(SHEET.z0); z <= SHEET.z1; z++) {
    const d = pathD([
      [SHEET.x0, 0, z],
      [SHEET.x1, 0, z],
    ]);
    if (z % 5 === 0) major += d;
    else minor += d;
  }
  return { minor, major };
}

export function HeroDrawingSVG({ mode, className }: { mode: DrawingMode; className?: string }) {
  const frame = computeScene(STATE[mode]);
  const box = sheetBox();
  const grid = gridPaths();
  const markup = mode !== 'poster';
  const nodes = Object.values(frame.nodes).sort((a, b) => a.x + a.z - (b.x + b.z));
  const findingIndex = { a1: 0, a2: 1, a3: 2 } as const;

  const official = frame.lines.filter((l) => l.kind === 'official');
  const variants = frame.lines.filter((l) => l.kind === 'variant');
  const hidden = frame.lines.filter((l) => l.kind === 'hidden');
  const clouds = frame.lines.filter((l) => l.kind === 'cloud');
  const leaders = frame.lines.filter((l) => l.kind === 'leader');

  return (
    <svg
      className={`${styles.svg} ${className ?? ''}`}
      viewBox={`${box.x.toFixed(1)} ${box.y.toFixed(1)} ${box.w.toFixed(1)} ${box.h.toFixed(1)}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
      data-mode={mode}
    >
      <g className={styles.grid} style={v(0, ASSEMBLY.gridFade)}>
        <path d={grid.minor} className={styles.gridMinor} />
        <path d={grid.major} className={styles.gridMajor} />
      </g>

      <path
        className={`${styles.sheet} ${styles.draw}`}
        pathLength={1}
        d={pathD(
          [
            [SHEET.x0, 0, SHEET.z0],
            [SHEET.x1, 0, SHEET.z0],
            [SHEET.x1, 0, SHEET.z1],
            [SHEET.x0, 0, SHEET.z1],
          ],
          true,
        )}
        style={v(ASSEMBLY.sheet.delay, ASSEMBLY.sheet.dur)}
      />

      {official.map((l, i) => (
        <path
          key={l.id}
          className={`${styles.official} ${styles.draw}`}
          pathLength={1}
          d={pathD(l.points)}
          style={v(ASSEMBLY.official.delay + i * ASSEMBLY.official.step, ASSEMBLY.official.dur)}
        />
      ))}

      {markup &&
        variants.map((l, i) => (
          <path
            key={l.id}
            className={`${styles.variant} ${styles.draw}`}
            pathLength={1}
            d={pathD(l.points)}
            style={v(ASSEMBLY.variant.delay + i * ASSEMBLY.variant.step, ASSEMBLY.variant.dur)}
          />
        ))}

      {nodes.map((nd) => {
        const i = NODE_IDS.indexOf(nd.id);
        const c = boxCorners(nd);
        const delay = ASSEMBLY.node.delay + i * ASSEMBLY.node.step;
        const cls = `${styles.node} ${styles[nd.kind]} ${nd.muted > 0.5 ? styles.muted : ''}`;
        if (nd.h < 0.05) {
          const inset = nd.kind === 'system' ? 0.22 : 0;
          return (
            <g key={nd.id} className={cls}>
              <polygon className={`${styles.faceTop} ${styles.fade}`} points={poly(c.slice(0, 4))} style={v(delay, ASSEMBLY.node.dur)} />
              <path
                className={`${styles.edge} ${styles.draw}`}
                pathLength={1}
                d={pathD(c.slice(0, 4), true)}
                style={v(delay, ASSEMBLY.node.dur)}
              />
              {inset > 0 && (
                <path
                  className={`${styles.edgeInner} ${styles.draw}`}
                  pathLength={1}
                  d={pathD(
                    [
                      [c[0]![0] + inset, 0, c[0]![2] + inset],
                      [c[1]![0] - inset, 0, c[1]![2] + inset],
                      [c[2]![0] - inset, 0, c[2]![2] - inset],
                      [c[3]![0] + inset, 0, c[3]![2] - inset],
                    ],
                    true,
                  )}
                  style={v(delay + 120, ASSEMBLY.node.dur)}
                />
              )}
            </g>
          );
        }
        // Built: +z face (left on screen), +x face (right), then the top.
        const left = [c[3]!, c[2]!, c[6]!, c[7]!];
        const right = [c[1]!, c[2]!, c[6]!, c[5]!];
        const top = [c[4]!, c[5]!, c[6]!, c[7]!];
        return (
          <g key={nd.id} className={cls}>
            <polygon className={styles.faceLeft} points={poly(left)} />
            <polygon className={styles.faceRight} points={poly(right)} />
            <polygon className={styles.faceTop} points={poly(top)} />
          </g>
        );
      })}

      {markup &&
        hidden.map((l, i) => (
          <path
            key={l.id}
            className={`${l.finding ? styles.late : styles.hidden} ${styles.draw}`}
            pathLength={1}
            d={pathD(l.points)}
            style={
              l.finding
                ? v(ASSEMBLY.finding.delay + findingIndex[l.finding] * ASSEMBLY.finding.step, ASSEMBLY.finding.dur)
                : v(ASSEMBLY.hidden.delay + i * ASSEMBLY.hidden.step, ASSEMBLY.hidden.dur)
            }
          />
        ))}

      {markup &&
        clouds.map((l) => (
          <path
            key={l.id}
            className={`${styles.cloud} ${styles.draw}`}
            pathLength={1}
            d={pathD(l.points, true)}
            style={v(ASSEMBLY.finding.delay + findingIndex[l.finding!] * ASSEMBLY.finding.step, ASSEMBLY.finding.dur)}
          />
        ))}

      {markup &&
        leaders.map((l) => (
          <path
            key={l.id}
            className={`${styles.leader} ${styles.draw}`}
            pathLength={1}
            d={pathD(l.points)}
            style={v(ASSEMBLY.finding.delay + findingIndex[l.finding!] * ASSEMBLY.finding.step + 450, 300)}
          />
        ))}
    </svg>
  );
}

/** Overlay positions (percent of the sheet box) for HTML labels on the SVG drawings. */
export function staticOverlay(mode: DrawingMode) {
  const frame = computeScene(STATE[mode]);
  const box = sheetBox();
  const pct = (p: Vec3) => {
    const [x, y] = iso(p);
    return { left: ((x - box.x) / box.w) * 100, top: ((y - box.y) / box.h) * 100 };
  };
  return {
    ratio: box.w / box.h,
    nodes: NODE_IDS.map((id, i) => {
      const n = frame.nodes[id]!;
      return { id, pos: pct([n.x, n.h, n.z]), delay: ASSEMBLY.node.delay + i * ASSEMBLY.node.step + 260 };
    }),
    flows: frame.lines
      .filter((l) => l.kind === 'hidden' && l.label && l.labelAt)
      .map((l, i) => ({ id: l.id, key: l.label!, pos: pct(l.labelAt!), delay: ASSEMBLY.hidden.delay + i * ASSEMBLY.hidden.step + 400 })),
    anchors: frame.anchors.map((a, i) => ({
      id: a.id,
      side: a.side,
      pos: pct(a.anchor),
      delay: ASSEMBLY.finding.delay + i * ASSEMBLY.finding.step + 700,
    })),
  };
}

export type StaticOverlay = ReturnType<typeof staticOverlay>;

export const SVG_UNIT = K;
