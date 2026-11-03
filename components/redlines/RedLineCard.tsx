'use client';

import type { CSSProperties } from 'react';
import { CountUp } from '@/components/CountUp';
import { useInViewOnce } from '@/lib/hooks';
import type { RedLineCardContent } from '@/content/types';
import { Fragment } from './Fragment';
import styles from './RedLines.module.css';

/**
 * A finding card: a fragment of the drawing, marked in red, with its count.
 */
export function RedLineCard({ card, index, tag }: { card: RedLineCardContent; index: number; tag: string }) {
  const { ref, inView } = useInViewOnce<HTMLLIElement>('0px 0px -18% 0px');

  return (
    <li ref={ref} className={styles.card} data-inview={inView ? 'true' : 'false'} style={{ '--i': index } as CSSProperties}>
      {/* What this card is, before anything else: a finding, and the client it was found at. */}
      <p className={styles.meta}>
        <span className={styles.tag}>
          <span className={styles.tagDot} aria-hidden="true" />
          {tag}
        </span>
        <span className={styles.client}>{card.foundAt}</span>
      </p>
      <div className={styles.fragment}>
        <Fragment kind={card.fragment} />
      </div>
      <div className={styles.cardBody}>
        <p className={styles.count}>
          <CountUp value={card.figure} run={inView} className={styles.figure} />
        </p>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardLine}>{card.line}</p>
        {card.dependsOn && <p className={styles.pending}>Placeholder until {card.dependsOn} is answered</p>}
      </div>
    </li>
  );
}
