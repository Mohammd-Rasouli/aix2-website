import type { ReactNode } from 'react';
import type { ActionLink } from '@/content/pages/types';
import { ButtonLink } from '@/components/ds/ButtonLink';
import styles from './PageHero.module.css';

export interface PageIndexItem {
  id: string;
  name: string;
  what: string;
}

interface Props {
  name: string;
  what: string;
  title: string;
  subhead: string;
  actions?: ActionLink[];
  /** Sections of the page, for the "On this page" index. */
  index?: PageIndexItem[];
  dependsOn?: string;
  /** A visual in place of the index (e.g. the case's key numbers). */
  aside?: ReactNode;
  location: string;
}

/**
 * The first screen of an inner page. Like a drawing's title block, it says what the page is,
 * then lists what each section on it holds, in plain words.
 */
export function PageHero({ name, what, title, subhead, actions, index, dependsOn, aside, location }: Props) {
  return (
    <header className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.lead}>
        <p className={styles.kicker}>
          <span className={styles.name}>{name}</span>
          <span className={styles.what}>{what}</span>
        </p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subhead}>{subhead}</p>
        {dependsOn && <p className={styles.pending}>Placeholder until {dependsOn} is answered</p>}
        {actions && actions.length > 0 && (
          <div className={styles.actions}>
            {actions.map((a, i) => (
              <ButtonLink key={a.href + a.label} href={a.href} variant={a.variant ?? (i === 0 ? 'primary' : 'secondary')} size="lg" cta={a.label.toLowerCase().replace(/\W+/g, '_')} location={location} arrow={a.variant === 'text'}>
                {a.label}
              </ButtonLink>
            ))}
          </div>
        )}
      </div>
      {aside ??
        (index && index.length > 0 && (
          <nav className={styles.index} aria-label="On this page">
            <p className={styles.indexTitle}>On this page</p>
            <ol>
              {index.map((it, i) => (
                <li key={it.id}>
                  <a href={`#${it.id}`}>
                    <span className={styles.indexN}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.indexText}>
                      <span className={styles.indexName}>{it.name}</span>
                      <span className={styles.indexWhat}>{it.what}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ))}
    </header>
  );
}
