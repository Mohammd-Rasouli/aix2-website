import { landing } from '@/content/home';
import { menus } from '@/content/site';
import { SectionHead } from '@/components/ds/SectionHead';
import shell from './Section.module.css';
import styles from './ServeSection.module.css';

/** Who we serve (CC-57): companies and investors, each with what we do and for whom, from the menus. */
export function ServeSection({ mark = '04' }: { mark?: string }) {
  const p = landing.serve;
  return (
    <section id="serve" className={shell.section} aria-labelledby="serve-title">
      <SectionHead id="serve-title" mark={mark} name={p.name} what={p.what} title={p.title} />
      <div className={styles.groups}>
        {p.groups.map((g) => {
          const m = menus.find((x) => x.id === g.menu)!;
          const offers = m.columns.find((c) => c.title === g.offers)!;
          const who = m.columns.find((c) => c.title === g.who)!;
          return (
            <article key={g.id} className={styles.group} aria-labelledby={`serve-${g.id}`}>
              <h3 id={`serve-${g.id}`} className={styles.label}>
                <a href={m.href}>{g.label}</a>
              </h3>
              <p className={styles.summary}>{m.summary}</p>
              <p className={styles.sub}>{offers.title}</p>
              <ul className={styles.offers}>
                {offers.items.map((it) => (
                  <li key={it.href}>
                    <a href={it.href}>
                      <span>{it.label}</span>
                      <svg viewBox="0 0 20 12" aria-hidden="true" focusable="false">
                        <path d="M0 6h18M13 1l5 5-5 5" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
              <p className={styles.sub}>{who.title}</p>
              <ul className={styles.chips}>
                {who.items.map((it) => (
                  <li key={it.href}>
                    <a href={it.href}>{it.label}</a>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
