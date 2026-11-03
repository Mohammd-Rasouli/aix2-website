import { landing } from '@/content/home';
import { CountUp } from './CountUp';
import styles from './HeroImpact.module.css';

/**
 * Impacts we've delivered, as the first screen's title block (CC-76). The first screen reads as one drawing
 * sheet: the headline and the drawing above, and along its foot a title block ruled off by a hairline, with
 * no box around it. Each figure is measured the way the drawing is drawn: a bar, the part removed shown
 * dashed under a dimension line (or, for a gain, the part added). The three ways we work are the sheet's
 * numbered notes. Figures USR-07.
 */
export function HeroImpact() {
  const p = landing.impact;
  return (
    <section className={styles.block} aria-labelledby="hero-impact-title">
      <h2 id="hero-impact-title" className={styles.intro}>
        <span className={styles.introLead}>{p.runIn[0]}</span> <span className={styles.introRest}>{p.runIn[1]}</span>
      </h2>

      <ul className={styles.measures}>
        {p.stats.map((s, i) => {
          const n = parseFloat(s.figure);
          return (
            <li key={s.text} className={styles.measure} style={{ ['--i' as string]: i }}>
              <p className={styles.what}>{s.what}</p>
              <p className={styles.value}>
                {s.prefix && <span className={styles.small}>{s.prefix}</span>}
                <CountUp className={styles.fig} value={n} suffix="%" delay={1200 + i * 250} duration={900} />
                <span className={styles.small}>{s.unit}</span>
              </p>
              {s.kind === 'cut' ? (
                <>
                  <div className={styles.track} aria-hidden="true" style={{ ['--keep' as string]: `${100 - n}%` }}>
                    <span className={styles.solid} data-part="keep" />
                    <span className={styles.cut}>
                      <span className={styles.dim} />
                    </span>
                  </div>
                  <p className={styles.ba}>{s.caption}</p>
                </>
              ) : (
                <>
                  <div className={styles.track} aria-hidden="true" style={{ ['--base' as string]: `${(100 / (100 + n)) * 100}%` }}>
                    <span className={styles.base} />
                    <span className={styles.solid} data-part="add">
                      <span className={styles.dim} />
                    </span>
                  </div>
                  <p className={styles.ba}>{s.caption}</p>
                </>
              )}
            </li>
          );
        })}
      </ul>

      <ol className={styles.notes}>
        {p.notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ol>
    </section>
  );
}
