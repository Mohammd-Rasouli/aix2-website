import type { ReactNode } from 'react';
import styles from './SectionHead.module.css';

interface Props {
  /** Id of the heading, for the section's aria-labelledby. */
  id: string;
  /** Sheet number, e.g. "03". Decorative. */
  mark?: string;
  /** LC's name for the section, e.g. "Red lines". */
  name: string;
  /** What the section is, in plain words, e.g. "Problems we found inside client companies". */
  what: string;
  title: ReactNode;
  body?: ReactNode;
  /** stack: one column. narrow: one column held to the left half, beside a visual. split: title left, body right. */
  layout?: 'stack' | 'narrow' | 'split';
  level?: 2 | 3;
  className?: string;
}

/**
 * Every section opens by saying what it is. A metaphor such as "Red lines" never stands
 * alone: the kicker pairs LC's section name with a plain description of its content.
 */
export function SectionHead({ id, mark, name, what, title, body, layout = 'stack', level = 2, className }: Props) {
  const Heading = level === 2 ? 'h2' : 'h3';
  return (
    <header className={[styles.head, styles[layout], className].filter(Boolean).join(' ')}>
      <p className={styles.kicker}>
        {mark && (
          <span className={styles.mark} aria-hidden="true">
            {mark}
          </span>
        )}
        <span className={styles.name}>{name}</span>
        <span className={styles.what}>{what}</span>
      </p>
      <Heading id={id} className={styles.title}>
        {title}
      </Heading>
      {body && <p className={styles.body}>{body}</p>}
    </header>
  );
}

/** One line on how to read the visual that follows. Sits directly above it. */
export function SectionGuide({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={[styles.guide, className].filter(Boolean).join(' ')}>
      <span className={styles.guideIcon} aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
