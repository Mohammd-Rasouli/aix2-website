'use client';

import type { CSSProperties } from 'react';
import { CountUp } from '@/components/CountUp';
import { useInViewOnce } from '@/lib/hooks';
import type { FindingContent } from '@/content/types';
import styles from './FindingCard.module.css';

const LEVEL = { Low: 1, Medium: 2, High: 3, Critical: 4 } as const;

/**
 * A finding as the register records it: count · severity · owner, and where it was found.
 * full: the register entry, with the share of the population drawn as a bar.
 * compact: count, words and client, for the hero's three findings.
 */
export function FindingCard({ finding, n, variant = 'full' }: { finding: FindingContent; n?: number; variant?: 'full' | 'compact' }) {
  const { ref, inView } = useInViewOnce<HTMLElement>('0px 0px -15% 0px');
  const share = finding.of ? Math.min(1, finding.count.value / finding.of.value) : 0;
  const level = finding.severity ? LEVEL[finding.severity] : 0;
  return (
    <article ref={ref} className={`${styles.card} ${styles[variant]}`} data-in={inView ? 'true' : 'false'} style={{ '--share': share } as CSSProperties}>
      <header className={styles.top}>
        <span className={styles.tag}>
          <span className={styles.dot} aria-hidden="true" />
          {n ? `Finding ${n}` : 'Finding'}
        </span>
        {finding.severity && (
          <span className={styles.severity}>
            <span className={styles.bars} aria-hidden="true">
              {[1, 2, 3, 4].map((i) => (
                <span key={i} data-on={i <= level ? 'true' : 'false'} />
              ))}
            </span>
            <span>
              <span className="visually-hidden">Severity: </span>
              {finding.severity}
            </span>
          </span>
        )}
      </header>

      <p className={styles.count}>
        <CountUp value={finding.count} run={inView} className={styles.figure} />
        {finding.of && (
          <span className={styles.of}>
            of {finding.of.value.toLocaleString('en-US')} {finding.of.unit}
          </span>
        )}
      </p>
      <h3 className={styles.text}>{finding.text}</h3>

      {finding.of && (
        <div className={styles.share} aria-hidden="true">
          <span className={styles.shareFill} />
        </div>
      )}

      <footer className={styles.foot}>
        {finding.owner && (
          <p className={styles.owner}>
            <span className={styles.key}>Owner</span> {finding.owner}
          </p>
        )}
        <p className={styles.source}>{finding.source}</p>
        {finding.dependsOn && <p className={styles.pending}>Placeholder until {finding.dependsOn} is answered</p>}
      </footer>
    </article>
  );
}
