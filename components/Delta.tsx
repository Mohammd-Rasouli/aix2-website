import styles from './Delta.module.css';

/**
 * Finding marker: a numbered revision circle, in red ink. Used only for findings.
 * (A triangle read as a warning sign, so the drafting delta became a circle.)
 */
export function Delta({ n, size = 'm', label = true }: { n: number; size?: 's' | 'm' | 'l'; label?: boolean }) {
  return (
    <span className={`${styles.delta} ${styles[size]}`}>
      <span className={styles.num} aria-hidden="true">
        {n}
      </span>
      {label && <span className="visually-hidden">Finding {n}: </span>}
    </span>
  );
}
