import { framing, why } from '@/content/home';
import type { ComparisonCell } from '@/content/types';
import { SectionHead } from '@/components/ds/SectionHead';
import { EndLink } from './EndLink';
import shell from './Section.module.css';
import styles from './WhySection.module.css';

function Symbol({ mark }: { mark: 'full' | 'partial' | 'none' }) {
  return (
    <span className={styles.symbol} data-mark={mark} aria-hidden="true">
      {mark === 'none' ? '–' : null}
    </span>
  );
}

function Cell({ cell }: { cell: ComparisonCell }) {
  return (
    <span className={styles.cell}>
      {cell.mark && <Symbol mark={cell.mark} />}
      {cell.mark && <span className="visually-hidden">{why.legend[cell.mark]}</span>}
      {cell.note && <span className={styles.note}>{cell.note}</span>}
    </span>
  );
}

/** Why AIx2 (LC section 5): three parts, the key line, and a comparison by category. */
export function WhySection({ mark = '05' }: { mark?: string }) {
  const f = framing.why!;
  const us = why.columns.length - 1;
  return (
    <section id="why" data-sheet="5" className={shell.section} aria-labelledby="why-title">
      <SectionHead id="why-title" mark={mark} name={why.eyebrow} what={f.what} title={why.headline} body={why.subhead} />

      <ol className={styles.parts}>
        {why.parts.map((p, i) => (
          <li key={p.name} className={styles.part} data-kind={i === 0 ? 'platform' : 'people'}>
            <p className={styles.partN} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </p>
            <h3 className={styles.partName}>{p.name}</h3>
            <p className={styles.partLine}>{p.line}</p>
            <p className={styles.partCopy}>{p.copy}</p>
          </li>
        ))}
      </ol>

      <p className={styles.key}>{why.keyLine}</p>

      <div className={styles.tableWrap} tabIndex={0} role="region" aria-label="Table, scrolls sideways">
        <table className={styles.table}>
          <caption className="visually-hidden">
            {why.eyebrow}: {why.footnote}
          </caption>
          <thead>
            <tr>
              <td />
              {why.columns.map((col, i) => (
                <th key={col} scope="col" data-us={i === us ? 'true' : undefined}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {why.rows.map((r) => (
              <tr key={r.label}>
                <th scope="row">{r.label}</th>
                {r.cells.map((cell, i) => (
                  <td key={i} data-us={i === us ? 'true' : undefined} data-col={why.columns[i]}>
                    <Cell cell={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.legend}>
        <span className={styles.legendItem}>
          <Symbol mark="full" /> {why.legend.full}
        </span>
        <span className={styles.legendItem}>
          <Symbol mark="partial" /> {why.legend.partial}
        </span>
        <span className={styles.legendItem}>
          <Symbol mark="none" /> {why.legend.none}
        </span>
        <span className={styles.footnote}>{why.footnote}</span>
      </p>

      <EndLink href={why.link.href}>{why.link.label}</EndLink>
    </section>
  );
}
