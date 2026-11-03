'use client';

import { useState, type CSSProperties } from 'react';
import { RedLine } from '@/components/ds/RedLine';
import styles from './styleguide.module.css';

/** The official order route with its three real variants: the departure the red line marks. */
function Variants() {
  return (
    <svg className={styles.demoDrawing} viewBox="0 0 300 120" aria-hidden="true" focusable="false">
      <line className={styles.dl} x1="0" y1="60" x2="300" y2="60" />
      <rect className={styles.db} x="14" y="40" width="54" height="40" rx="3" />
      <rect className={styles.db} x="232" y="40" width="54" height="40" rx="3" />
      <path className={styles.dv} d="M68 60 C 110 60, 110 18, 150 18 S 190 60, 232 60" />
      <path className={styles.dv} d="M68 60 C 110 60, 110 102, 150 102 S 190 60, 232 60" />
      <circle className={styles.dn} cx="150" cy="60" r="4" />
      <circle className={styles.dn} cx="150" cy="18" r="4" />
      <circle className={styles.dn} cx="150" cy="102" r="4" />
    </svg>
  );
}

export function RedLineDemo({ finding, source }: { finding: string; source: string }) {
  const [replay, setReplay] = useState(0);
  return (
    <div className={styles.demo}>
      <RedLine finding={finding} source={source} n={1} replay={replay}>
        <Variants />
      </RedLine>
      <button type="button" className={styles.replay} onClick={() => setReplay((r) => r + 1)}>
        Draw again
      </button>
    </div>
  );
}

const DURS = [
  { token: '--dur-fast', ms: 150, use: 'Hover, press, colour' },
  { token: '--dur-base', ms: 300, use: 'Menus, toggles, card depth' },
  { token: '--dur-slow', ms: 600, use: 'Red lines, counts, entries' },
];

export function MotionDemo() {
  const [on, setOn] = useState(false);
  return (
    <div className={styles.motion} data-on={on ? 'true' : 'false'}>
      {DURS.map((d) => (
        <div key={d.token} className={styles.motionRow}>
          <p className={styles.motionName}>
            <code>{d.token}</code> {d.ms} ms
            <span>{d.use}</span>
          </p>
          <div className={styles.track}>
            <span className={styles.puck} style={{ '--t': `${d.ms}ms` } as CSSProperties} />
          </div>
        </div>
      ))}
      <div className={styles.motionRow}>
        <p className={styles.motionName}>
          <code>--stagger</code> 60 ms
          <span>Eight items at most</span>
        </p>
        <div className={styles.stagger}>
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i} style={{ '--i': i } as CSSProperties} />
          ))}
        </div>
      </div>
      <button type="button" className={styles.replay} onClick={() => setOn((v) => !v)}>
        {on ? 'Reset' : 'Play'}
      </button>
    </div>
  );
}
