import { hero } from '@/content/home';
import { Delta } from '@/components/Delta';
import { DoorButton } from '@/components/DoorButton';
import { ProofStat } from '@/components/ProofStat';
import { HeroImpact } from './HeroImpact';
import styles from './HeroC.module.css';

/** Built is set solid, drawn as an outline. The words are LC's, unchanged. */
function splitHeadline(text: string) {
  const i = text.indexOf('not as drawn');
  return i < 0 ? { built: text, drawn: '' } : { built: text.slice(0, i).trimEnd(), drawn: text.slice(i) };
}

/** Keeps hyphenated words such as "e-mail" on one line. */
function keepWords(text: string) {
  return text.split(/(\S+-\S+)/).map((part, i) =>
    /\S+-\S+/.test(part) ? (
      <span key={i} style={{ whiteSpace: 'nowrap' }}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export const STILL = { src: '/hero/scan-as-built.webp', light: '/hero/scan-as-built-light.webp', width: 1800, height: 1308 };

/** Direction C hero copy. The scan itself is the fixed ScanBackdrop behind the page. */
export function HeroC() {
  const h = splitHeadline(hero.headline);
  return (
    <section id="hero" data-sheet="1" className={styles.hero} aria-labelledby="hero-title">
      <p className="visually-hidden">{hero.drawingDescription}</p>
      <div className={styles.copy}>
        {/* The first screen, exactly one window tall: headline and doors above, the title block at its foot (CC-76). */}
        <div className={styles.first}>
        <div className={styles.lead}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.built}>{h.built.replace('as built', 'as built')}</span>{' '}
            <span className={styles.drawn}>{h.drawn.replace('as drawn', 'as drawn')}</span>
          </h1>
        </div>
        <div className={styles.act}>
          <p className={styles.subhead}>{keepWords(hero.subhead)}</p>
          <div className={styles.doors}>
            {hero.doors.map((d) => (
              <DoorButton key={d.id} door={d} location="home_hero" />
            ))}
          </div>
        </div>
        <div className={styles.impactRow}>
          <HeroImpact />
        </div>
        </div>
        <div className={styles.proof}>
          <ul className={styles.proofList}>
            {hero.proof.map((s, i) => (
              <li key={s.id}>
                <ProofStat stat={s} delay={1200 + i * 160} />
              </li>
            ))}
          </ul>
          <p className={styles.countries}>{hero.countries}</p>
        </div>
      </div>

      {/* Phones, tablets and reduced motion: a rendered still of the same scan, and the revision table. */}
      <figure className={styles.still}>
        <img className={styles.stillWarm} src={STILL.src} width={STILL.width} height={STILL.height} alt="" decoding="async" />
        <img className={styles.stillLight} src={STILL.light} width={STILL.width} height={STILL.height} alt="" decoding="async" loading="lazy" />
        <figcaption>
          <ol className={styles.revisions} aria-label="Findings marked on the scan">
            {hero.annotations.map((a) => (
              <li key={a.id}>
                <Delta n={a.delta} size="m" />
                <span className={styles.revText}>
                  <span className={styles.finding}>{a.text}</span>
                  <span className={styles.source}>{a.foundAt}</span>
                </span>
              </li>
            ))}
          </ol>
        </figcaption>
      </figure>
    </section>
  );
}
