import { fit, framing } from '@/content/home';
import { ButtonLink } from '@/components/ds/ButtonLink';
import { SectionHead } from '@/components/ds/SectionHead';
import shell from './Section.module.css';
import styles from './FitSection.module.css';

/** Is AIx2 right for you? (LC section 9): the six conditions we check before we sign. */
export function FitSection({ mark = '09' }: { mark?: string }) {
  const f = framing.fit!;
  return (
    <section id="fit" data-sheet="9" className={shell.section} aria-labelledby="fit-title">
      <SectionHead id="fit-title" mark={mark} name={fit.eyebrow} what={f.what} title={fit.headline} body={fit.subhead} />
      <ol className={styles.list}>
        {fit.conditions.map((c, i) => (
          <li key={c} className={styles.item}>
            <span className={styles.box} aria-hidden="true">
              <svg viewBox="0 0 16 16" focusable="false">
                <path d="M3.5 8.5l3 3 6-7" />
              </svg>
            </span>
            <span className={styles.n} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className={styles.text}>{c}</span>
          </li>
        ))}
      </ol>
      <div className={styles.closing}>
        <p className={styles.closingLine}>{fit.closing}</p>
        <ButtonLink href={fit.button.href} variant="secondary" size="lg" cta="readiness_check" location="home_fit" arrow>
          {fit.button.label}
        </ButtonLink>
      </div>
    </section>
  );
}
