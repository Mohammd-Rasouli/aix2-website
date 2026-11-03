import type { CSSProperties } from 'react';
import { hero } from '@/content/home';
import { Delta } from '@/components/Delta';
import { DoorButton } from '@/components/DoorButton';
import { FromToStat } from '@/components/FromToStat';
import { HeroDrawingSVG, staticOverlay } from './HeroDrawingSVG';
import { HeroStage } from './HeroStage';
import type { CameraPlan } from './HeroCanvas';
import styles from './Hero.module.css';

export type Variant = 'a' | 'b';

/** Typography only: a no-break space keeps a phrase on one line. The words are unchanged. */
function keepTogether(text: string, phrases: string[]) {
  return phrases.reduce((t, ph) => t.replace(ph, ph.replace(/ /g, '\u00a0')), text);
}

/** Where the drawing sits on the first screen, and where the camera ends after the scroll. */
const PLANS: Record<Variant, CameraPlan> = {
  a: {
    start: { x0: 0.455, y0: 0.035, x1: 0.975, y1: 0.665 },
    end: { x0: 0.19, y0: 0.03, x1: 0.81, y1: 0.93 },
    endAzimuth: 36,
    endElevation: 30,
    endFov: 24,
    endZoom: 1.28,
  },
  b: {
    start: { x0: 0.5, y0: 0.02, x1: 0.995, y1: 0.74 },
    end: { x0: 0.19, y0: 0.02, x1: 0.81, y1: 0.94 },
    endAzimuth: 33,
    endElevation: 27,
    endFov: 34,
    endZoom: 1.42,
  },
};

export function Hero({ variant }: { variant: Variant }) {
  const poster = staticOverlay('poster');
  const built = staticOverlay('built');
  const marked = staticOverlay('marked');
  const sectionId = 'hero';

  return (
    <section id={sectionId} data-sheet="1" className={`${styles.hero} ${styles[variant]}`} aria-labelledby="hero-title">
      <HeroStage
        sectionId={sectionId}
        plan={PLANS[variant]}
        annotations={hero.annotations}
        flowLabels={hero.flowLabels}
        drawingLabels={hero.drawingLabels}
        description={hero.drawingDescription}
        poster={<HeroDrawingSVG mode="poster" />}
        posterOverlay={poster}
        builtDrawing={<HeroDrawingSVG mode="built" />}
        builtOverlay={built}
      />

      <div className={styles.copy}>
        {/* A: lead and act float on the sheet. B: they sit inside the drawing's title block. */}
        <div className={styles.block}>
          <div className={styles.lead}>
            <p className={styles.eyebrow}>
              <span className={styles.sheetMark} aria-hidden="true">
                01
              </span>
              {hero.eyebrow}
            </p>
            <h1 id="hero-title" className={styles.title}>
              {keepTogether(hero.headline, ['as built'])}
            </h1>
          </div>
          <div className={styles.act}>
            <p className={styles.subhead}>{hero.subhead}</p>
            <div className={styles.doors}>
              {hero.doors.map((d) => (
                <DoorButton key={d.id} door={d} location="home_hero" />
              ))}
            </div>
            <a className={styles.talk} href={hero.talkLink.href}>
              {hero.talkLink.label}
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
        <div className={styles.proof}>
          <ul className={styles.proofList}>
            {hero.proof.map((s) => (
              <li key={s.id}>
                <FromToStat stat={s} />
              </li>
            ))}
          </ul>
          <p className={styles.countries}>{hero.countries}</p>
        </div>
      </div>

      {/* Phones: the plan, marked up, with a revision table instead of floating notes. */}
      <figure className={styles.mobileFigure}>
        <div className={styles.mobileFit} style={{ '--ratio': marked.ratio.toFixed(4) } as CSSProperties}>
          <div className={styles.mobileDrawing} role="img" aria-label={hero.drawingDescription}>
            <HeroDrawingSVG mode="marked" />
          </div>
          <ul className={styles.mobileTags} aria-hidden="true">
            {marked.anchors.map((a, i) => (
              <li
                key={a.id}
                style={{ left: `${a.pos.left}%`, top: `${a.pos.top}%`, '--delay': `${a.delay}ms` } as CSSProperties}
              >
                <Delta n={i + 1} size="s" label={false} />
              </li>
            ))}
          </ul>
          <ul className={styles.mobileFlows} aria-hidden="true">
            {marked.flows.map((f) => (
              <li
                key={f.id}
                style={{ left: `${f.pos.left}%`, top: `${f.pos.top}%`, '--delay': `${f.delay}ms` } as CSSProperties}
              >
                {hero.flowLabels[f.key]}
              </li>
            ))}
          </ul>
        </div>
        <figcaption>
          <ol className={styles.revisions}>
            {hero.annotations.map((a) => (
              <li key={a.id}>
                <Delta n={a.delta} size="m" />
                <span>
                  <span className={styles.revText}>{a.text}</span>
                  <span className={styles.revSource}>{a.foundAt}</span>
                </span>
              </li>
            ))}
          </ol>
        </figcaption>
      </figure>
    </section>
  );
}
