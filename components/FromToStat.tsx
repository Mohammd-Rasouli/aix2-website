import type { FromToStatContent } from '@/content/types';
import { formatStat } from '@/lib/format';
import styles from './FromToStat.module.css';

/**
 * From → To stat. The arrow is a drafting dimension line. The measurement label
 * (client, who measured, window) is part of the component and cannot be left out.
 */
export function FromToStat({ stat, size = 'm' }: { stat: FromToStatContent; size?: 'm' | 'l' }) {
  return (
    <div className={`${styles.stat} ${styles[size]}`}>
      <p className={styles.figure}>
        <span className={styles.from}>{formatStat(stat.from, stat.from.value)}</span>
        <svg className={styles.dim} viewBox="0 0 64 14" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path className={styles.dimTick} d="M1 2v10" />
          <path d="M1 7h60M56 3l5 4-5 4" />
        </svg>
        <span className="visually-hidden"> to </span>
        <span className={styles.to}>{formatStat(stat.to, stat.to.value)}</span>
      </p>
      <p className={styles.label}>{stat.label}</p>
      <p className={styles.meta}>
        <span className={styles.client}>{stat.client}</span>
        <span className={styles.window}>{stat.measurement}</span>
      </p>
    </div>
  );
}
