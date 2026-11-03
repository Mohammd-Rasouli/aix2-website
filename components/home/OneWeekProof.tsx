import { oneWeekProof as P } from '@/content/home';
import styles from './OneWeekProof.module.css';

/**
 * The One-Week Proof (CC-66): the week drawn as a track of four days, what you receive, and the path
 * that follows only if the proof is useful. Used on home (its own section) and inside inner pages.
 */
export function OneWeekProofBody() {
  return (
    <div className={styles.body}>
      <div className={styles.lead}>
        <p className={styles.text}>{P.body}</p>
        <ul className={styles.receive}>
          {P.receive.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <p className={styles.qualifier}>{P.qualifier}</p>
      </div>

      <div className={styles.week}>
        <p className={styles.weekHead}>
          <span className={styles.weekBadge}>1 week</span>
          <span>From your data to a decision</span>
        </p>
        <ol className={styles.days}>
          {P.days.map((d, i) => (
            <li key={d.when} className={styles.day} style={{ ['--i' as string]: i }}>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.when}>{d.when}</span>
              <h3 className={styles.dayTitle}>{d.title}</h3>
              <p className={styles.dayText}>{d.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.path}>
        <p className={styles.pathLabel}>{P.pathLabel}</p>
        <ol className={styles.pathList}>
          {P.path.map((s, i) => (
            <li key={s.title} className={styles.pathStep} data-first={i === 0 ? 'true' : undefined}>
              <span className={styles.pathWhen}>{s.when}</span>
              <span className={styles.pathTitle}>{s.title}</span>
              <span className={styles.pathText}>{s.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
