import { hero } from '@/content/home';
import { HeroC } from '@/components/hero/HeroC';
import { RedLines } from '@/components/redlines/RedLines';
import { ScanBackdrop } from '@/components/scan/ScanBackdrop';
import { SiteHeader } from '@/components/shell/SiteHeader';
import { SmoothScroll } from '@/components/shell/SmoothScroll';
import { TitleBlock } from '@/components/shell/TitleBlock';
import { TrackRecord } from '@/components/TrackRecord';
import { CLOUDS } from '@/scene/model';
import styles from './DirectionPage.module.css';

/** Direction C · the as-built scan: one fixed point-cloud scene carried from the hero into Red lines. */
export function DirectionC() {
  const sides = Object.fromEntries(CLOUDS.map((c) => [c.id, c.side])) as Record<string, 'left' | 'right'>;
  return (
    <div className={`${styles.page} ${styles.warm}`} data-theme="warm" data-direction="c">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScanBackdrop annotations={hero.annotations} sides={sides} flowLabels={hero.flowLabels} drawingLabels={hero.drawingLabels} lens={hero.lens} modelKey={hero.modelKey} />
      <div className={styles.over}>
        <SiteHeader />
        <main id="main">
          <HeroC />
          <TrackRecord />
          <RedLines variant="c" />
        </main>
        <footer id="page-foot" className={styles.foot}>
          <p className={styles.footName}>Direction C · The AIx2 lens</p>
          <p className={styles.footNote}>Design prototype for review: the home hero and the Red lines section. Not for publication.</p>
          <p className={styles.footLinks}>
            <a href="/directions/a">Direction A →</a>
            <a href="/directions/b">Direction B →</a>
            <a href="/directions">All directions</a>
          </p>
        </footer>
      </div>
      <TitleBlock />
      <SmoothScroll />
    </div>
  );
}
