'use client';

import { useId, useState, type CSSProperties } from 'react';
import styles from './BeforeAfter.module.css';

export interface BeforeAfterRow {
  label: string;
  before: string;
  after: string;
}

/**
 * Before / after, as in Atlas's compare view: the same rows twice, the as-is state under the
 * after state, split by a divider you drag (or move with the arrow keys; it is a range input).
 * Screen readers get a plain list of "label: before to after" instead of the two layers.
 */
export function BeforeAfter({ rows, labels = { before: 'Before · as-is', after: 'After · as built now' } }: { rows: BeforeAfterRow[]; labels?: { before: string; after: string } }) {
  // The divider rests in the middle of the value column (labels take the first third).
  const [pos, setPos] = useState(66);
  const id = useId();
  const layer = (side: 'before' | 'after') => (
    <ul className={styles.rows} data-side={side} aria-hidden="true">
      {rows.map((r) => (
        <li key={r.label} className={styles.row}>
          <span className={styles.label}>{r.label}</span>
          <span className={styles.value}>{side === 'before' ? r.before : r.after}</span>
        </li>
      ))}
    </ul>
  );
  return (
    <figure className={styles.wrap}>
      <div className={styles.stage} style={{ '--pos': `${pos}%` } as CSSProperties}>
        <div className={styles.layer} data-side="before">
          <span className={styles.badge} data-side="before">{labels.before}</span>
          {layer('before')}
        </div>
        <div className={styles.layer} data-side="after">
          <span className={styles.badge} data-side="after">{labels.after}</span>
          {layer('after')}
        </div>
        <span className={styles.divider} aria-hidden="true">
          <span className={styles.knob}>
            <svg viewBox="0 0 20 12" focusable="false">
              <path d="M6 1 1 6l5 5M14 1l5 5-5 5" />
            </svg>
          </span>
        </span>
        <label htmlFor={id} className="visually-hidden">
          Move the divider between before and after
        </label>
        <input id={id} className={styles.range} type="range" min={30} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} />
      </div>
      <ul className="visually-hidden">
        {rows.map((r) => (
          <li key={r.label}>
            {r.label}: {r.before} to {r.after}
          </li>
        ))}
      </ul>
      <figcaption className={styles.hint}>Drag the divider to compare before and after.</figcaption>
    </figure>
  );
}
