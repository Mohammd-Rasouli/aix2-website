'use client';

import { useEffect, useRef, useState } from 'react';
import { sceneLabels } from '@/content/home';
import type { StepContent } from '@/content/types';
import styles from './StepSequence.module.css';

/** The company in layers: what each step works on lights up as the step is read. */
const LAYERS = sceneLabels.layers;
const MARKS: [number, number][] = [
  [-0.55, -0.15],
  [-0.12, 0.4],
  [0.28, -0.38],
  [0.58, 0.18],
];

/** A small square on an isometric plane, at plane coordinates u, v in [-1, 1]. */
function rhomb(x0: number, y: number, a: number, b: number, u: number, v: number, d = 0.11) {
  const P = (p: number, q: number) => `${(x0 + ((p - q) * a) / 2).toFixed(1)},${(y + ((p + q) * b) / 2).toFixed(1)}`;
  return [P(u - d, v - d), P(u + d, v - d), P(u + d, v + d), P(u - d, v + d)].join(' ');
}

function Layers({ step }: { step: number }) {
  const x0 = 160;
  const a = 136;
  const b = 42;
  const ys = [300, 216, 132, 48];
  const plane = (y: number, k = 1) => `${x0},${y - b * k} ${x0 + a * k},${y} ${x0},${y + b * k} ${x0 - a * k},${y}`;
  return (
    <svg className={styles.layers} viewBox="0 0 540 350" aria-hidden="true" focusable="false" data-step={step} data-scene-anchor="how">
      {ys.map((y, i) => (
        <g key={LAYERS[i]} className={styles.layer} data-layer={i}>
          <polygon className={styles.plane} points={plane(y)} />
          {/* a few marks on each plane, so it reads as a map, not a tile */}
          {MARKS.map(([u, v], j) => (
            <polygon key={j} className={styles.mark} points={rhomb(x0, y, a, b, u, v)} />
          ))}
          <line className={styles.tick} x1={x0 + a} y1={y} x2={x0 + a + 16} y2={y} />
          <text className={styles.layerName} x={x0 + a + 22} y={y + 4}>
            {LAYERS[i]}
          </text>
        </g>
      ))}
      {/* 03 · the gap: red clouds on the process map */}
      <g className={styles.gap}>
        <ellipse cx={x0 - 40} cy={ys[1]! - 4} rx={26} ry={11} />
        <ellipse cx={x0 + 52} cy={ys[1]! + 10} rx={22} ry={9} />
      </g>
      {/* 04 · best practice: the target design over the process map */}
      <polygon className={styles.target} points={plane(ys[1]! - 22, 0.9)} />
      {/* 05 · live assurance: checks running on every layer */}
      <g className={styles.checks}>
        {ys.map((y, i) => (
          <circle key={i} cx={x0 + (i % 2 ? 60 : -70)} cy={y + (i % 2 ? -6 : 8)} r={4} style={{ animationDelay: `${i * 220}ms` }} />
        ))}
      </g>
    </svg>
  );
}

/**
 * How we get the as-built: five steps on a sticky rail. The rail shows which part of
 * the company each step works on; the index marks the step being read.
 */
export function StepSequence({ items, line, link }: { items: StepContent[]; line: string; link: { label: string; href: string } }) {
  const [active, setActive] = useState(1);
  const panels = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.n));
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    panels.current.forEach((p) => p && io.observe(p));
    return () => io.disconnect();
  }, []);

  // The 3D scene, where it runs, follows the step being read.
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('aix2:step', { detail: active }));
  }, [active]);

  return (
    <div className={styles.seq}>
      <div className={styles.rail}>
        <div className={styles.railInner}>
          <Layers step={active} />
          <ol className={styles.index}>
            {items.map((s, i) => (
              <li key={s.n}>
                <a href={`#step-${s.n}`} className={styles.indexLink} aria-current={active === i + 1 ? 'step' : undefined}>
                  <span className={styles.indexN}>{s.n}</span>
                  <span>{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
          <div className={styles.progress} aria-hidden="true">
            <span style={{ transform: `scaleY(${active / items.length})` }} />
          </div>
        </div>
      </div>

      <ol className={styles.steps}>
        {items.map((s, i) => (
          <li
            key={s.n}
            id={`step-${s.n}`}
            data-n={i + 1}
            ref={(el) => {
              panels.current[i] = el;
            }}
            className={styles.step}
            data-active={active === i + 1 ? 'true' : 'false'}
          >
            <p className={styles.n} aria-hidden="true">
              {s.n}
            </p>
            <h3 className={styles.title}>
              <span className="visually-hidden">Step {i + 1}: </span>
              {s.title}
            </h3>
            <p className={styles.copy}>{s.copy}</p>
            <p className={styles.tag}>{s.tag}</p>
          </li>
        ))}
        <li className={styles.end}>
          <p className={styles.endLine}>{line}</p>
          <a className={styles.endLink} href={link.href}>
            {link.label}
            <span aria-hidden="true"> →</span>
          </a>
        </li>
      </ol>
    </div>
  );
}
