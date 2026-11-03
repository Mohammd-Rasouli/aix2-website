import { framing, redLines } from '@/content/home';
import { SectionGuide, SectionHead } from '@/components/ds/SectionHead';
import { RedLineCard } from './RedLineCard';
import styles from './RedLines.module.css';

export function RedLines({ variant, mark = '03' }: { variant: 'a' | 'b' | 'c'; mark?: string }) {
  const c = redLines;
  const f = framing['red-lines']!;
  return (
    <section id="red-lines" data-sheet="3" className={`${styles.section} ${styles[variant]}`} aria-labelledby="red-lines-title">
      <SectionHead
        id="red-lines-title"
        mark={mark}
        name={c.eyebrow}
        what={f.what}
        title={c.headline}
        body={c.body}
        layout={variant === 'c' ? 'narrow' : 'split'}
        className={styles.head}
      />

      {f.guide && <SectionGuide className={styles.guide}>{f.guide}</SectionGuide>}

      <ol className={styles.cards}>
        {c.cards.map((card, i) => (
          <RedLineCard key={card.id} card={card} index={i} tag={c.cardTag.replace('{n}', String(i + 1)).replace('{total}', String(c.cards.length))} />
        ))}
      </ol>

      <div className={styles.after}>
        <p className={styles.highlight}>
          <span className={styles.highlightA}>{c.highlight[0]}</span> <span className={styles.highlightB}>{c.highlight[1]}</span>
        </p>

        <ul className={styles.market} aria-label="Market context">
          {c.marketStats.map((m) => (
            <li key={m.id} className={styles.marketItem}>
              <p className={styles.marketFigure}>{m.figure}</p>
              <p className={styles.marketText}>{m.text}</p>
              <p className={styles.marketSource}>
                <a href={m.href} target="_blank" rel="noopener noreferrer">
                  {m.source}
                  <span className="visually-hidden"> (source, opens in a new tab)</span>
                  <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">
                    <path d="M3.5 2.5h6v6M9.5 2.5l-7 7" />
                  </svg>
                </a>
              </p>
            </li>
          ))}
        </ul>

        <a className={styles.endLink} href={c.endLink.href}>
          {c.endLink.label}
          <span aria-hidden="true"> →</span>
        </a>
      </div>
    </section>
  );
}
