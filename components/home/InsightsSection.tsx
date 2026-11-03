import { framing, insightsTeaser as c } from '@/content/home';
import { SectionHead } from '@/components/ds/SectionHead';
import { EndLink } from './EndLink';
import shell from './Section.module.css';
import styles from './InsightsSection.module.css';

/**
 * Insights (LC section 11): three things to watch or read before a call. Behind the cards, the name AIx2
 * set very large and faint, cropped by the edges and lit by the lens light, as on the talk slides (decorative).
 */
export function InsightsSection({ mark = '11' }: { mark?: string }) {
  const f = framing.insights!;
  return (
    <section id="insights" data-sheet="11" className={`${shell.section} ${styles.section}`} aria-labelledby="insights-title">
      <div className={styles.stage} aria-hidden="true">
        <span className={styles.glow} />
        <span className={styles.word}>AIx2</span>
      </div>
      <SectionHead id="insights-title" mark={mark} name={c.eyebrow} what={f.what} title={c.headline} />
      <ul className={styles.grid}>
        {c.items.map((it) => (
          <li key={it.title}>
            <a className={styles.card} href={it.href}>
              <span className={styles.type}>{it.type}</span>
              <span className={styles.title}>{it.title}</span>
              <span className={styles.line}>{it.line}</span>
              <span className={styles.go} aria-hidden="true">
                <svg viewBox="0 0 20 12" focusable="false">
                  <path d="M0 6h18M13 1l5 5-5 5" />
                </svg>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <EndLink href={c.link.href}>{c.link.label}</EndLink>
    </section>
  );
}
