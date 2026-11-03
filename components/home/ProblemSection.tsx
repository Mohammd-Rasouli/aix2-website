import { hero, landing, oneWeekProof } from '@/content/home';
import { SectionHead } from '@/components/ds/SectionHead';
import shell from './Section.module.css';
import styles from './ProblemSection.module.css';

/** The problem (CC-57): the Summit deck's slide 3, four figures under red rules (USR-06). */
export function ProblemSection({ mark = '02' }: { mark?: string }) {
  const p = landing.problem;
  return (
    <section id="problem" className={`${shell.section} ${shell.overScene}`} aria-labelledby="problem-title">
      <SectionHead
        id="problem-title"
        mark={mark}
        name={p.name}
        what={p.what}
        title={
          <>
            {p.title[0]} <span className={styles.accent}>{p.title[1]}</span>
          </>
        }
      />
      <ul className={styles.stats}>
        {p.stats.map((s) => (
          <li key={s.figure + s.text} className={styles.stat}>
            <span className={styles.figure}>{s.figure}</span>
            <span className={styles.text}>{s.text}</span>
          </li>
        ))}
      </ul>
      <p className={styles.source}>{p.source}</p>
      {/* CC-67: the answer to the problem, leading into the One-Week Proof section below. */}
      <a className={styles.next} href={hero.proofLink.href}>
        <span className={styles.nextBadge}>1 week</span>
        <span className={styles.nextText}>
          <strong>{oneWeekProof.title}</strong>
          <span>{hero.proofLink.label}</span>
        </span>
        <span className={styles.nextArrow} aria-hidden="true">
          →
        </span>
      </a>
    </section>
  );
}
