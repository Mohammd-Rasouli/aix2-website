import { landing } from '@/content/home';
import { SectionHead } from '@/components/ds/SectionHead';
import shell from './Section.module.css';
import styles from './ImpactSection.module.css';

/** Impact (CC-57): the Summit deck's slide 5, three figures and the two ways we work (USR-07). */
export function ImpactSection({ mark = '05' }: { mark?: string }) {
  const p = landing.impact;
  return (
    <section id="impact" className={`${shell.section} ${styles.section}`} aria-labelledby="impact-title">
      {/* The name set very large and faint behind the figures, lit by the lens light (user, 2026-11-01); decorative. */}
      <div className={styles.stage} aria-hidden="true">
        <span className={styles.glow} />
        <span className={styles.word}>AIx2</span>
      </div>
      <SectionHead id="impact-title" mark={mark} name={p.name} what={p.what} title={p.title} body={p.body} />
      <ul className={styles.stats}>
        {p.stats.map((s) => (
          <li key={s.text} className={styles.stat}>
            <span className={styles.figureRow}>
              {s.prefix && <span className={styles.prefix}>{s.prefix}</span>}
              <span className={styles.figure}>{s.figure}</span>
            </span>
            <span className={styles.text}>{s.text}</span>
          </li>
        ))}
      </ul>
      <ul className={styles.notes}>
        {p.notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <p className={styles.source}>{p.source}</p>
    </section>
  );
}
