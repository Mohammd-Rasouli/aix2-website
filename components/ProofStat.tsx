'use client';

import type { CSSProperties } from 'react';
import { CountUp } from '@/components/CountUp';
import { useInViewOnce } from '@/lib/hooks';
import { formatStat } from '@/lib/format';
import type { FromToStatContent } from '@/content/types';
import styles from './ProofStat.module.css';

/**
 * A measured result, drawn. Each figure says something different, so each has its own picture:
 *  - gain: the share that moved, on a 0–100 bar (on-time delivery 75% → 95%)
 *  - collapse: days that fold into one (audit evidence 15 days → 1 day)
 *  - fill: marks that fill up (export orders screened 40% → 100%)
 * The numbers stay in the text; the picture is decorative and hidden from screen readers.
 */
export function ProofStat({ stat, delay = 0 }: { stat: FromToStatContent; delay?: number }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>('0px');
  return (
    <div ref={ref} className={styles.card} data-in={inView ? 'true' : 'false'} style={{ '--d': `${delay}ms` } as CSSProperties}>
      <p className={styles.label}>{stat.label}</p>
      <p className={styles.figure}>
        <span className={styles.from}>
          {formatStat({ ...stat.from, suffix: unitless(stat.from.suffix) }, stat.from.value)}
          {unit(stat.from.suffix) && <span className={styles.unit}>{unit(stat.from.suffix)}</span>}
        </span>
        <svg className={styles.arrow} viewBox="0 0 40 12" aria-hidden="true" focusable="false">
          <path d="M1 6h36M32 1.5l5 4.5-5 4.5" />
        </svg>
        <span className="visually-hidden"> to </span>
        <span className={styles.to}>
          <CountUp value={{ ...stat.to, suffix: unitless(stat.to.suffix) }} start={stat.from.value} run={inView} duration={1400} />
          {unit(stat.to.suffix) && <span className={styles.unit}>{unit(stat.to.suffix)}</span>}
        </span>
      </p>
      <Visual stat={stat} />
      <p className={styles.client}>{stat.client}</p>
      <p className={styles.measure}>{stat.measurement}</p>
    </div>
  );
}

/** Word units (" working days") are set smaller than the figure; symbols such as "%" stay with it. */
const unit = (suffix?: string) => (suffix && /[a-z]/i.test(suffix) ? suffix : '');
const unitless = (suffix?: string) => (unit(suffix) ? '' : suffix);

function Visual({ stat }: { stat: FromToStatContent }) {
  const from = stat.from.value;
  const to = stat.to.value;
  if (stat.visual === 'collapse') {
    const n = Math.round(from);
    return (
      <div className={styles.days} aria-hidden="true">
        {Array.from({ length: n }, (_, i) => (
          <span key={i} className={i < to ? styles.dayKept : styles.dayGone} style={{ '--i': n - i } as CSSProperties} />
        ))}
      </div>
    );
  }
  if (stat.visual === 'fill') {
    const before = Math.round(from / 10);
    const after = Math.round(to / 10);
    return (
      <div className={styles.marks} aria-hidden="true">
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className={i < before ? styles.markBefore : i < after ? styles.markAfter : styles.markEmpty} style={{ '--i': i - before } as CSSProperties} />
        ))}
      </div>
    );
  }
  // gain
  return (
    <div className={styles.bar} aria-hidden="true">
      <span className={styles.barBefore} style={{ width: `${from}%` }} />
      <span className={styles.barGain} style={{ left: `${from}%`, width: `${to - from}%` }} />
      <span className={styles.barTick} style={{ left: `${from}%` }} />
    </div>
  );
}
