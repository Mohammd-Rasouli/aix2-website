import { programme, programmeStats, type SeriesSession } from '@/content/pages/seriesProgramme';
import { showcase as L } from '@/content/pages/seriesShowcase';
import { SectionGuide, SectionHead } from '@/components/ds/SectionHead';
import blocks from './Blocks.module.css';
import styles from './SeriesShowcase.module.css';

const pad = (n: number) => String(n).padStart(2, '0');

function Session({ s }: { s: SeriesSession }) {
  return (
    <li className={styles.session} id={`session-${s.n}`} data-upcoming={s.upcoming ? 'true' : undefined}>
      <div className={styles.meta}>
        <p className={styles.num}>
          <span className={styles.numLabel}>{L.session}</span>
          <span className={styles.numFig}>{pad(s.n)}</span>
        </p>
        {(s.date || s.place) && <p className={styles.when}>{[s.date, s.place].filter(Boolean).join(' · ')}</p>}
        {s.series === 'lp' && (
          <p className={styles.sub}>
            {L.lpSession} {pad(s.seriesSession)}
          </p>
        )}
        {s.upcoming && <p className={styles.badge}>{L.upcoming}</p>}
        <div className={styles.links}>
          {s.video ? (
            <a className={styles.watch} href={`https://www.youtube.com/watch?v=${s.video}`} target="_blank" rel="noopener noreferrer">
              <span className={styles.play} aria-hidden="true" />
              {L.watch}
              <span className="visually-hidden"> {pad(s.n)} on YouTube (opens in a new tab)</span>
            </a>
          ) : (
            !s.upcoming && <span className={styles.noVideo}>{L.noVideo}</span>
          )}
          {s.luma && (
            <a className={styles.luma} href={s.luma} target="_blank" rel="noopener noreferrer">
              {L.luma} <span aria-hidden="true">↗</span>
              <span className="visually-hidden"> for session {pad(s.n)} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
      <div className={styles.body}>
        {s.theme && <h4 className={styles.theme}>{s.theme}</h4>}
        <ul className={styles.guests}>
          {s.guests.map((g) => (
            <li key={g.name} className={styles.guest}>
              <span className={styles.gName}>{g.name}</span>
              {g.title && <span className={styles.gTitle}>{g.title}</span>}
              {g.org && <span className={styles.gOrg}>{g.org}</span>}
              {(g.city || g.type) && <span className={styles.gWhere}>{[g.city, g.type].filter(Boolean).join(' · ')}</span>}
            </li>
          ))}
        </ul>
        {s.n !== 1 ? <p className={styles.mod}>{L.moderated}</p> : <p className={styles.mod}>{L.spoke}</p>}
      </div>
    </li>
  );
}

/**
 * The Stanford sessions as a showcase: the hosts, the counts, the institutions in the room, then every
 * session in one sequence with every guest as published (USR-04).
 */
export function SeriesShowcase() {
  const orgs = L.room;
  const half = Math.ceil(orgs.length / 2);
  const rows = [orgs.slice(0, half), orgs.slice(half)];
  // Newest first, 19 down to 1 (user, 2026-11-01): the later sessions carry the larger allocators.
  const ai = programme.filter((s) => s.series === 'ai').reverse();
  const lp = programme.filter((s) => s.series === 'lp').reverse();
  return (
    <>
      <section className={`${blocks.section} ${styles.band}`} aria-label={L.hostsLabel}>
        <div className={styles.bandInner}>
          <div className={styles.hosts}>
            <p className={styles.kicker}>{L.hostsLabel}</p>
            <ul className={styles.hostList}>
              {L.hosts.map((h) => (
                <li key={h.name}>
                  <span className={styles.gName}>{h.name}</span>
                  <span className={styles.gTitle}>
                    {h.title}, {h.org}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <ul className={styles.stats}>
            {L.stats.map((st) => (
              <li key={st.key}>
                <span className={styles.statFig}>{programmeStats[st.key]}</span>
                <span className={styles.statLabel}>{st.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.room} aria-labelledby="room-title">
        <h2 id="room-title" className={styles.roomTitle}>
          {L.roomLabel}
        </h2>
        <p className={styles.roomLine}>{L.roomLine}</p>
        <div className={styles.marquee}>
          {rows.map((row, k) => (
            <div key={k} className={styles.mRow} data-reverse={k === 1 ? 'true' : undefined}>
              <ul className={styles.mTrack} aria-label={`${L.roomLabel}, ${k + 1} of 2`}>
                {row.map((o) => (
                  <li key={o}>{o}</li>
                ))}
                {/* The second copy makes the loop seamless; hidden from assistive tech and under reduced motion. */}
                {row.map((o) => (
                  <li key={`b-${o}`} aria-hidden="true" className={styles.mCopy}>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id={L.programme.id} className={`${blocks.section} ${styles.programme}`} aria-labelledby="programme-title">
        <SectionHead id="programme-title" name={L.programme.name} what={L.programme.what} title={L.programme.title} />
        <SectionGuide>{L.programme.guide}</SectionGuide>
        {[
          { key: 'lp' as const, list: lp },
          { key: 'ai' as const, list: ai },
        ].map((c) => (
          <div key={c.key} className={styles.chapter} data-series={c.key}>
            <header className={styles.chapterHead}>
              <h3 className={styles.chapterName}>{L.chapters[c.key].name}</h3>
              <p className={styles.chapterLine}>{L.chapters[c.key].line}</p>
            </header>
            <ol className={styles.sessions}>
              {c.list.map((s) => (
                <Session key={s.n} s={s} />
              ))}
            </ol>
          </div>
        ))}
      </section>
    </>
  );
}
