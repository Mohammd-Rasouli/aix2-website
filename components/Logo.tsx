import styles from './Logo.module.css';

/** The AIx2 mark (the company's own logo, supplied 2026-10-29), traced to one vector path. */
export const MARK_PATH =
  'M43.3 11.2 52.2 26.5 54.2 23 47.4 11.3 49.9 7 56.6 18.6 58.7 15.1 50 0Z M0 86.8 29.4 86.8 35.8 75.4 80.5 75.4 62.7 44.3 57.5 53.4 48.7 53.4 56.2 40.2 54.1 36.7 42.5 56.9 59.5 56.9 62.6 51.5 74.4 71.9 33.8 72 27.4 83.1 6 83.1 43.3 18.4 41.2 14.9Z M56.4 32.8 58.3 36.3 62.7 29.1 93.9 83.1 72.2 83.1 69.8 79.2 65.7 79.1 70.3 86.8 99.9 86.8 100 86.6 62.6 21.9Z M24.6 66.2 66.9 66.2 65 62.8 30.8 62.7 49.9 29.5 47.8 26.1Z';
export const MARK_VIEWBOX = '0 0 100 86.8';

/** The mark alone. It takes the brand colour (gold) from the theme; the original artwork is navy. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={`${styles.mark} ${className ?? ''}`} viewBox={MARK_VIEWBOX} aria-hidden="true" focusable="false">
      <path d={MARK_PATH} fillRule="evenodd" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`${styles.logo} ${className ?? ''}`}>
      <LogoMark />
      <span className={styles.word}>
        AI<span className={styles.x}>x</span>2
      </span>
    </span>
  );
}
