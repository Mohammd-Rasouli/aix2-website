'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Delta } from '@/components/Delta';
import { useInViewOnce } from '@/lib/hooks';
import { cloudPath } from '@/scene/cloud2d';
import styles from './RedLine.module.css';

interface Props {
  /** The drawn thing the finding departs from: a fragment of the official process. */
  children: ReactNode;
  finding: string;
  /** The client, described anonymously. */
  source: string;
  n?: number;
  /** side: the note sits to the right on a leader. below: the note sits under it. */
  layout?: 'side' | 'below';
  /** Change it to draw the line again (/styleguide). */
  replay?: number;
}

const PAD = 12;

/**
 * The red line: red ink that marks where the company as built departs from its drawing.
 * The revision cloud draws itself when it enters view, then its finding note appears.
 * Red is never the only signal: the note carries the number and the words.
 */
export function RedLine({ children, finding, source, n = 1, layout = 'side', replay = 0 }: Props) {
  const { ref, inView } = useInViewOnce<HTMLElement>('0px 0px -20% 0px');
  const target = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });
  const [drawn, setDrawn] = useState(false);
  // Until scripts run, everything shows drawn; once armed, the line waits for the viewport.
  const [armed, setArmed] = useState(false);
  useEffect(() => setArmed(true), []);

  useEffect(() => {
    const el = target.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      if (e) setBox({ w: Math.round(e.contentRect.width), h: Math.round(e.contentRect.height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    setDrawn(false);
    let b = 0;
    const a = requestAnimationFrame(() => {
      b = requestAnimationFrame(() => setDrawn(true));
    });
    return () => {
      cancelAnimationFrame(a);
      cancelAnimationFrame(b);
    };
  }, [inView, replay]);

  const W = box.w + PAD * 2;
  const H = box.h + PAD * 2;
  const d = box.w ? cloudPath(2, 2, W - 4, H - 4, 14) : '';

  return (
    <figure ref={ref} className={`${styles.redline} ${styles[layout]}`} data-drawn={armed ? (drawn ? 'true' : 'false') : undefined}>
      <div className={styles.target} ref={target}>
        {children}
        <svg className={styles.stroke} width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ left: -PAD, top: -PAD }} aria-hidden="true" focusable="false">
          {d && <path d={d} pathLength={1} />}
        </svg>
      </div>
      <figcaption className={styles.label} style={{ marginLeft: layout === 'side' ? PAD : 0 }}>
        <span className={styles.leader} aria-hidden="true" />
        <span className={styles.note}>
          <Delta n={n} size="m" />
          <span className={styles.noteText}>
            <span className={styles.finding}>{finding}</span>
            <span className={styles.source}>{source}</span>
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
