import { framing, trackRecord as t } from '@/content/home';
import { SectionHead } from '@/components/ds/SectionHead';
import styles from './TrackRecord.module.css';

/** Maturity on the home page: where AIx2 has worked (clients, described anonymously) and spoken. */
export function TrackRecord() {
  return (
    <section id="track-record" className={styles.section} aria-labelledby="track-title">
      <SectionHead id="track-title" name={t.eyebrow} what={framing.capital!.what} title={t.headline} body={t.subhead} />

      <div className={styles.grid}>
        <div className={styles.worked}>
          <h3 className={styles.colTitle}>{t.workedTitle}</h3>
          <ul className={styles.clients}>
            {t.clients.map((c) => (
              <li key={c.place} className={styles.client}>
                <p className={styles.place}>{c.place}</p>
                <p className={styles.who}>{c.who}</p>
                <p className={styles.result}>{c.headline}</p>
              </li>
            ))}
          </ul>
          <p className={styles.countries}>{t.countries}</p>
        </div>

        <div className={styles.spoken}>
          <h3 className={styles.colTitle}>{t.spokenTitle}</h3>
          <div className={styles.series}>
            <p className={styles.seriesName}>{t.series.name}</p>
            <p className={styles.seriesLine}>{t.series.line}</p>
          </div>
          <p className={styles.lead}>{t.conferencesLead}</p>
          <ul className={styles.stages}>
            {t.conferences.map((c) => (
              <li key={c.name}>
                <span className={styles.stage}>{c.name}</span>
                <span className={styles.year}>{c.year}</span>
              </li>
            ))}
          </ul>
          <p className={styles.mediaTitle}>{t.mediaTitle}</p>
          <p className={styles.media}>{t.media.join(' · ')}</p>
        </div>
      </div>
    </section>
  );
}
