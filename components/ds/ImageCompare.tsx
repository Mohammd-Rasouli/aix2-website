'use client';

import { useId, useState, type CSSProperties } from 'react';
import styles from './ImageCompare.module.css';

export interface CompareImage {
  src: string;
  w: number;
  h: number;
  alt: string;
}

/**
 * Atlas's compare view, on the site: the as-is image under the after image, and a divider you drag
 * across to turn one into the other (a range input underneath, so the arrow keys move it too).
 */
export function ImageCompare({ before, after, labels = { before: 'Before · as-is', after: 'After · best practice' } }: { before: CompareImage; after: CompareImage; labels?: { before: string; after: string } }) {
  const [pos, setPos] = useState(50);
  const id = useId();
  return (
    <figure className={styles.wrap}>
      <div className={styles.stage} style={{ '--pos': `${pos}%`, aspectRatio: `${before.w} / ${before.h}` } as CSSProperties}>
        {/* eslint-disable-next-line @next/next/no-img-element -- product screenshot */}
        <img className={styles.img} src={before.src} alt={before.alt} width={before.w} height={before.h} loading="lazy" decoding="async" />
        {/* eslint-disable-next-line @next/next/no-img-element -- product screenshot */}
        <img className={`${styles.img} ${styles.after}`} src={after.src} alt={after.alt} width={after.w} height={after.h} loading="lazy" decoding="async" />
        {/* The Atlas pictures carry their own Before / After labels. */}
        <span className={styles.divider} aria-hidden="true">
          <span className={styles.knob}>
            <svg viewBox="0 0 20 12" focusable="false">
              <path d="M6 1 1 6l5 5M14 1l5 5-5 5" />
            </svg>
          </span>
        </span>
        <label htmlFor={id} className="visually-hidden">
          Drag to compare the process before and after
        </label>
        <input id={id} className={styles.range} type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} />
      </div>
      <figcaption className={styles.hint}>Drag the divider across the picture: the process as it runs today turns into the best-practice design.</figcaption>
    </figure>
  );
}
