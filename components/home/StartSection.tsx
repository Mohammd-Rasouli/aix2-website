import { framing, start } from '@/content/home';
import { CTABand } from '@/components/ds/CTABand';
import shell from './Section.module.css';
import styles from './StartSection.module.css';

/** Start (LC section 13): the closing invitation, with the one call to action (CC-53). */
export function StartSection() {
  const f = framing['start-sprint']!;
  return (
    <section id="start-sprint" data-sheet="13" className={`${shell.section} ${styles.section}`} aria-label={start.headline}>
      <CTABand content={start} kicker={{ name: f.name, what: f.what }} id="start-title" />
    </section>
  );
}
