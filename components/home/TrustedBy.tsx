import { trustedBy } from '@/content/home';
import { LogoWall } from '@/components/ds/LogoWall';
import shell from './Section.module.css';
import styles from './TrustedBy.module.css';

/** Trusted by: the logo strip directly under the hero, over a veil so the scene carries through. */
export function TrustedBy() {
  return (
    <section id="trusted-by" className={[shell.section, shell.overScene, styles.band].join(' ')} aria-labelledby="trusted-by-title">
      <LogoWall id="trusted-by-title" title={trustedBy.title} groups={trustedBy.groups} />
    </section>
  );
}
