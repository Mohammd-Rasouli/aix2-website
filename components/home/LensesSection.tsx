import { audiences, framing, lenses } from '@/content/home';
import { ButtonLink } from '@/components/ds/ButtonLink';
import { LensToggle } from '@/components/ds/LensToggle';
import { SectionGuide, SectionHead } from '@/components/ds/SectionHead';
import shell from './Section.module.css';
import styles from './LensesSection.module.css';

/** Two lenses (LC section 6): one model, a lens switch, and the three audiences. */
export function LensesSection({ mark = '06' }: { mark?: string }) {
  const f = framing.lenses!;
  return (
    <section id="lenses" data-sheet="6" className={`${shell.section} ${shell.scene}`} aria-labelledby="lenses-title">
      <div className={styles.top}>
        <SectionHead id="lenses-title" mark={mark} name={lenses.eyebrow} what={f.what} title={lenses.headline} body={lenses.subhead} className={styles.head} />
        <div className={styles.lens}>
          {f.guide && <SectionGuide>{f.guide}</SectionGuide>}
          <LensToggle operator={lenses.operator} investor={lenses.investor} />
        </div>
      </div>

      <ul className={styles.cards}>
        {audiences.cards.map((a) => (
          <li key={a.id} className={styles.card}>
            <p className={styles.audience}>{a.audience}</p>
            <h3 className={styles.title}>{a.title}</h3>
            <ul className={styles.bullets}>
              {a.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <ButtonLink href={a.button.href} variant="secondary" size="md" arrow className={styles.button}>
              {a.button.label}
            </ButtonLink>
          </li>
        ))}
      </ul>

      <p className={styles.scales}>{audiences.scales}</p>
    </section>
  );
}
