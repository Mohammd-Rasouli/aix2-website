import { PlanBackdrop, planSection } from '@/components/ds/PlanBackdrop';
import { capital, framing, trackRecord as t } from '@/content/home';
import { SectionHead } from '@/components/ds/SectionHead';
import { EndLink } from './EndLink';
import shell from './Section.module.css';
import styles from './CapitalSection.module.css';

/**
 * Why capital listens (LC section 8), about the company, not one person (user, 2026-10-29): the
 * series, the teaching and the team. The "Trusted by" strip sits under the hero (TrustedBy). The founder's own card lives on /company/team (CC-18).
 */
export function CapitalSection({ mark = '08' }: { mark?: string }) {
  const f = framing.capital!;
  return (
    <section id="capital" data-sheet="8" className={`${shell.section} ${planSection}`} aria-labelledby="capital-title">
      <PlanBackdrop at="right" />
      <SectionHead id="capital-title" mark={mark} name={t.eyebrow} what={f.what} title={t.headline} body={t.subhead} />

      <div className={styles.strip}>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>{t.series.name}</h3>
          <p className={styles.cardCopy}>{t.series.line}</p>
          <EndLink href={capital.seriesLink.href}>{capital.seriesLink.label}</EndLink>
        </article>

        <article className={styles.card}>
          <p className={styles.cardCopy}>{capital.teaching}</p>
          <p className={shell.pending}>Placeholder until {capital.teachingDependsOn} is answered</p>
          <EndLink href={capital.teachingLink.href}>{capital.teachingLink.label}</EndLink>
        </article>

        <article className={styles.card}>
          <p className={styles.cardCopy}>
            {capital.affiliations} <span className={styles.unconfirmed}>[{capital.affiliationsPending}]</span>
          </p>
          <p className={shell.pending}>To confirm · {capital.affiliationsDependsOn}</p>
          <EndLink href={capital.teamLink.href}>{capital.teamLink.label}</EndLink>
        </article>
      </div>

      <EndLink href={capital.conferencesLink.href}>{capital.conferencesLink.label}</EndLink>
    </section>
  );
}
