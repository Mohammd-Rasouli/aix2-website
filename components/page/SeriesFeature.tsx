import { programme, programmeStats } from '@/content/pages/seriesProgramme';
import { showcase as L } from '@/content/pages/seriesShowcase';
import { ButtonLink } from '@/components/ds/ButtonLink';
import styles from './SeriesFeature.module.css';

/**
 * The Stanford sessions on the Insights hub: the counts, a wall of featured guests as published (USR-04),
 * and the way into the full programme. Featured names are listed in content (an editorial choice).
 */
export function SeriesFeature({ featured, cta }: { featured: string[]; cta: { label: string; href: string } }) {
  const all = new Map(programme.flatMap((s) => s.guests.map((g) => [g.name, { ...g, n: s.n }] as const)));
  const youtube = L.hero.actions[0]!;
  const guests = featured.map((n) => all.get(n)).filter((g): g is NonNullable<typeof g> => Boolean(g));
  return (
    <div className={styles.feature}>
      <div className={styles.lead}>
        <ul className={styles.stats}>
          {L.stats.slice(0, 3).map((st) => (
            <li key={st.key}>
              <span className={styles.fig}>{programmeStats[st.key]}</span>
              <span className={styles.label}>{st.label}</span>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <ButtonLink href={cta.href} variant="primary" size="md" arrow>
            {cta.label}
          </ButtonLink>
          <ButtonLink href={youtube.href} variant="text" size="md">
            {youtube.label}
          </ButtonLink>
        </div>
      </div>
      <ul className={styles.wall}>
        {guests.map((g) => (
          <li key={g.name}>
            <a className={styles.guest} href={`${cta.href}#session-${g.n}`}>
              <span className={styles.name}>{g.name}</span>
              <span className={styles.title}>{g.title}</span>
              <span className={styles.org}>{g.org}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
