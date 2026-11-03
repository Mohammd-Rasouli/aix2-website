import { PlanBackdrop, planSection } from '@/components/ds/PlanBackdrop';
import { framing, trust } from '@/content/home';
import { ButtonLink } from '@/components/ds/ButtonLink';
import { SectionHead } from '@/components/ds/SectionHead';
import shell from './Section.module.css';
import styles from './TrustSection.module.css';

/**
 * Trust (LC section 10), set as a spec sheet: the head and what the safeguards support on the left,
 * the seven commitments as a numbered ledger on the right, like the terms of a contract.
 */
export function TrustSection({ mark = '10' }: { mark?: string }) {
  const f = framing.trust!;
  return (
    <section id="trust" data-sheet="10" className={`${shell.section} ${planSection}`} aria-labelledby="trust-title">
      <PlanBackdrop at="bottom-left" />
      <div className={styles.sheet}>
        <div className={styles.side}>
          <SectionHead id="trust-title" mark={mark} name={trust.eyebrow} what={f.what} title={trust.headline} body={trust.subhead} />
          <div className={styles.regulation}>
            <p>{trust.regulation}</p>
            <div className={styles.buttons}>
              <ButtonLink href={trust.buttons[0]!.href} variant="secondary" size="md" arrow>
                {trust.buttons[0]!.label}
              </ButtonLink>
              <ButtonLink href={trust.buttons[1]!.href} variant="text" cta="security_overview" location="home_trust">
                {trust.buttons[1]!.label}
              </ButtonLink>
            </div>
          </div>
        </div>
        <ol className={styles.ledger}>
          {trust.commitments.map((c, i) => (
            <li key={c.title} className={styles.row}>
              <span className={styles.n} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.title}>{c.title}</h3>
              <p className={styles.copy}>{c.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
