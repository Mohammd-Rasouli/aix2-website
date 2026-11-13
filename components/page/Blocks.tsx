import type { ReactNode } from 'react';
import { framing, redLines } from '@/content/home';
import type { Block, BlockHead } from '@/content/pages/types';
import { ButtonLink } from '@/components/ds/ButtonLink';
import { SectionHead } from '@/components/ds/SectionHead';
import { RedLines } from '@/components/redlines/RedLines';
import { CapitalSection } from '@/components/home/CapitalSection';
import { FaqSection } from '@/components/home/FaqSection';
import { InvestorHubCards } from './InvestorHub';
import { OneWeekProofBody } from '@/components/home/OneWeekProof';
import { FitSection } from '@/components/home/FitSection';
import { HowSection } from '@/components/home/HowSection';
import { InsightsSection } from '@/components/home/InsightsSection';
import { LensesSection } from '@/components/home/LensesSection';
import { ProofSection } from '@/components/home/ProofSection';
import { StartSection } from '@/components/home/StartSection';
import { TrustSection } from '@/components/home/TrustSection';
import { WhySection } from '@/components/home/WhySection';
import type { PageIndexItem } from './PageHero';
import { ImageCompare } from '@/components/ds/ImageCompare';
import { SectionGuide } from '@/components/ds/SectionHead';
import { Diagram } from '@/components/goal/Diagram';
import { SeriesFeature } from './SeriesFeature';
import styles from './Blocks.module.css';

type HomeRef = Extract<Block, { type: 'home' }>['ref'];

const HOME_ID: Record<HomeRef, string> = {
  'red-lines': 'red-lines',
  how: 'how',
  why: 'why',
  lenses: 'lenses',
  proof: 'proof',
  capital: 'capital',
  fit: 'fit',
  trust: 'trust',
  insights: 'insights',
  faq: 'faq',
  start: 'start-sprint',
};

const HOME_NAME: Partial<Record<HomeRef, string>> = { 'red-lines': redLines.eyebrow };

/** The "On this page" entries for a list of blocks, in order. */
export function blockIndex(blocks: Block[]): PageIndexItem[] {
  return blocks.map((b) => {
    if (b.type === 'home') {
      const id = HOME_ID[b.ref];
      const f = framing[id];
      return { id, name: HOME_NAME[b.ref] ?? f?.name ?? b.ref, what: f?.what ?? '' };
    }
    return { id: b.id, name: b.name, what: b.what };
  });
}

function homeSection(ref: HomeRef, mark: string) {
  switch (ref) {
    case 'red-lines':
      return <RedLines variant="c" mark={mark} />;
    case 'how':
      return <HowSection mark={mark} />;
    case 'why':
      return <WhySection mark={mark} />;
    case 'lenses':
      return <LensesSection mark={mark} />;
    case 'proof':
      return <ProofSection mark={mark} />;
    case 'capital':
      return <CapitalSection mark={mark} />;
    case 'fit':
      return <FitSection mark={mark} />;
    case 'trust':
      return <TrustSection mark={mark} />;
    case 'insights':
      return <InsightsSection mark={mark} />;
    case 'faq':
      return <FaqSection mark={mark} />;
    case 'start':
      return <StartSection />;
  }
}

type Layout = 'full' | 'split' | 'cta';

/**
 * Short blocks read as a spec sheet: the head holds the left columns (sticky), the content the
 * right. Wide content (steps, three-up cards, tables, timelines) keeps the full measure.
 */
function layoutOf(b: Exclude<Block, { type: 'home' }>): Layout {
  switch (b.type) {
    case 'cta':
      return 'cta';
    case 'list':
    case 'prose':
    case 'logos':
      return 'split';
    case 'cards':
      return b.items.length <= 2 || (b.items.length <= 4 && b.items.every((it) => !it.copy)) ? 'split' : 'full';
    case 'stats':
      return b.items.length <= 2 ? 'split' : 'full';
    default:
      return 'full';
  }
}

function Shell({ b, mark, children, layout }: { b: BlockHead; mark: string; children: ReactNode; layout: Layout }) {
  return (
    <section id={b.id} className={styles.section} data-layout={layout} data-wide={layout === 'cta' ? 'true' : undefined} aria-labelledby={`${b.id}-title`}>
      <div className={styles.headCol}>
        <SectionHead id={`${b.id}-title`} mark={mark} name={b.name} what={b.what} title={b.title} body={b.body} />
        {b.dependsOn && <p className={styles.pending}>Placeholder until {b.dependsOn} is answered</p>}
      </div>
      <div className={styles.bodyCol}>{children}</div>
    </section>
  );
}

function Arrow() {
  return (
    <svg className={styles.arrow} viewBox="0 0 20 12" aria-hidden="true" focusable="false">
      <path d="M0 6h18M13 1l5 5-5 5" />
    </svg>
  );
}

function BlockBody({ b }: { b: Exclude<Block, { type: 'home' }> }) {
  switch (b.type) {
    case 'cards':
      return (
        <>
          <ul className={styles.cards} data-count={b.items.length} data-cols={b.columns ?? (b.items.length === 4 ? 4 : b.items.length === 2 ? 2 : 3)}>
            {b.items.map((it) => {
              const inner = (
                <>
                  {it.tag && <span className={styles.tag}>{it.tag}</span>}
                  <h3 className={styles.cardTitle}>{it.title}</h3>
                  {it.copy && <p className={styles.cardCopy}>{it.copy}</p>}
                  {it.dependsOn && <p className={styles.pending}>Placeholder until {it.dependsOn} is answered</p>}
                  {it.href && <Arrow />}
                </>
              );
              return (
                <li key={it.title} id={it.id} className={styles.card}>
                  {it.href ? (
                    <a className={styles.cardLink} href={it.href}>
                      {inner}
                    </a>
                  ) : (
                    <div className={styles.cardInner}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
          {b.note && <p className={styles.note}>{b.note}</p>}
        </>
      );
    case 'list':
      return (
        <>
          <ul className={styles.list} data-style={b.style ?? 'bullet'}>
            {b.items.map((it, i) => (
              <li key={it}>
                {b.style === 'check' ? (
                  <span className={styles.check} aria-hidden="true">
                    <svg viewBox="0 0 16 16" focusable="false">
                      <path d="M3.5 8.5l3 3 6-7" />
                    </svg>
                  </span>
                ) : (
                  <span className={styles.bullet} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                )}
                <span>{it}</span>
              </li>
            ))}
          </ul>
          {(b.closing || b.action) && (
            <div className={styles.closing}>
              {b.closing && <p>{b.closing}</p>}
              {b.action && (
                <ButtonLink href={b.action.href} variant={b.action.variant ?? 'secondary'} size="md" arrow>
                  {b.action.label}
                </ButtonLink>
              )}
            </div>
          )}
        </>
      );
    case 'steps':
      return (
        <>
          <ol className={styles.steps}>
            {b.items.map((it) => (
              <li key={it.n} className={styles.step}>
                <span className={styles.stepN} aria-hidden="true">
                  {it.n}
                </span>
                <div className={styles.stepText}>
                  <h3 className={styles.cardTitle}>
                    <span className="visually-hidden">Step {it.n}: </span>
                    {it.title}
                  </h3>
                  <p className={styles.cardCopy}>{it.copy}</p>
                  {it.tag && <p className={styles.deliverable}>{it.tag}</p>}
                </div>
              </li>
            ))}
          </ol>
          {b.line && <p className={styles.note}>{b.line}</p>}
        </>
      );
    case 'timeline': {
      // A long run of dated items (keynotes) reads as a ledger by year; a short one as a drawn line.
      if (b.items.length > 6) {
        const years = [...new Set(b.items.map((it) => it.when))];
        return (
          <ol className={styles.ledger}>
            {years.map((y) => {
              const rows = b.items.filter((it) => it.when === y);
              return (
                <li key={y} className={styles.ledgerRow}>
                  <p className={styles.ledgerYear} data-pending={y.startsWith('[') ? 'true' : undefined}>
                    {y}
                  </p>
                  <ul className={styles.ledgerItems}>
                    {rows.map((it) => (
                      <li key={it.title}>{it.title}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        );
      }
      return (
        <ol className={styles.timeline} style={{ ['--n' as string]: b.items.length }}>
          {b.items.map((it) => (
            <li key={it.when + it.title} className={styles.tItem}>
              <span className={styles.tDot} aria-hidden="true" />
              <p className={styles.tWhen}>{it.when}</p>
              <p className={styles.tTitle}>{it.title}</p>
              {it.copy && <p className={styles.tCopy}>{it.copy}</p>}
            </li>
          ))}
        </ol>
      );
    }
    case 'flow':
      return b.shape === 'cycle' ? (
        <ol className={styles.cycle} style={{ ['--n' as string]: b.items.length }}>
          {b.items.map((it, i) => (
            <li key={it.title} id={it.id} className={styles.cItem} style={{ ['--i' as string]: i }}>
              <span className={styles.cN} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className={styles.cTitle}>{it.title}</p>
              {it.copy && <p className={styles.cCopy}>{it.copy}</p>}
            </li>
          ))}
        </ol>
      ) : (
        <ol className={styles.lane}>
          {b.items.map((it, i) => (
            <li key={it.title} id={it.id} className={styles.lItem}>
              <span className={styles.lN} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className={styles.lTitle}>{it.title}</p>
              {it.copy && <p className={styles.lCopy}>{it.copy}</p>}
              {it.who && <p className={styles.lWho}>{it.who}</p>}
            </li>
          ))}
        </ol>
      );
    case 'stats':
      return (
        <ul className={styles.stats}>
          {b.items.map((it) => (
            <li key={it.figure + it.text} className={styles.stat}>
              <p className={styles.statFigure}>{it.figure}</p>
              <p className={styles.statText}>{it.text}</p>
              <p className={styles.statSource}>
                {it.href ? (
                  <a href={it.href} target="_blank" rel="noopener noreferrer">
                    {it.source}
                    <span className="visually-hidden"> (source, opens in a new tab)</span>
                  </a>
                ) : (
                  it.source
                )}
              </p>
            </li>
          ))}
        </ul>
      );
    case 'compare':
      return (
        <>
          <div className={styles.tableWrap} tabIndex={0} role="region" aria-label="Table, scrolls sideways">
            <table className={styles.table}>
              <thead>
                <tr>
                  <td />
                  {b.columns.map((c, i) => (
                    <th key={c} scope="col" data-us={i === b.columns.length - 1 ? 'true' : undefined}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    {r.cells.map((c, i) => (
                      <td key={i} data-us={i === b.columns.length - 1 ? 'true' : undefined} data-col={b.columns[i]}>
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {b.footnote && <p className={styles.note}>{b.footnote}</p>}
        </>
      );
    case 'imageCompare':
      return <ImageCompare before={b.before} after={b.after} />;
    case 'oneWeekProof':
      return <OneWeekProofBody />;
    case 'investorHub':
      return <InvestorHubCards group={b.group} />;
    case 'seriesFeature':
      return <SeriesFeature featured={b.featured} cta={b.cta} />;
    case 'diagram':
      return (
        <>
          {b.guide && <SectionGuide>{b.guide}</SectionGuide>}
          <Diagram kind={b.kind} />
        </>
      );
    case 'gallery':
      return (
        <ul className={styles.gallery}>
          {b.items.map((it) => (
            <li key={it.src} className={styles.shot}>
              <span className={styles.shotFrame}>
                <span className={styles.shotBar} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element -- product screenshots, sized here */}
                <img src={it.src} alt={`${it.title}: ${it.caption}`} width={it.w} height={it.h} loading="lazy" decoding="async" />
              </span>
              <span className={styles.shotTitle}>{it.title}</span>
              <span className={styles.shotCaption}>{it.caption}</span>
            </li>
          ))}
        </ul>
      );
    case 'logos':
      return (
        <ul className={styles.logos}>
          {b.items.map((it) => {
            // eslint-disable-next-line @next/next/no-img-element -- small static marks
            const img = <img src={it.logo} alt={it.name} width={it.w} height={it.h} loading="lazy" decoding="async" />;
            return <li key={it.name}>{it.href ? <a href={it.href}>{img}</a> : img}</li>;
          })}
        </ul>
      );
    case 'prose':
      return (
        <div className={styles.prose}>
          {b.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      );
    case 'cta':
      return (
        <div className={styles.cta}>
          {b.subhead && <p className={styles.ctaSub}>{b.subhead}</p>}
          <div className={styles.ctaActions}>
            {b.actions.map((a, i) => (
              <ButtonLink key={a.href + a.label} href={a.href} variant={a.variant ?? (i === 0 ? 'primary' : 'secondary')} size="lg" cta={a.label.toLowerCase().replace(/\W+/g, '_')} location={b.id} arrow={a.variant === 'text'}>
                {a.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      );
  }
}

/** Renders a page's blocks in order; each opens with the shared section head. */
/** A contact action (the contact page or the calendar). The footer carries the one call to action (CC-53). */
const isContact = (href: string) => href.startsWith('/contact') || href.includes('calendar.app.google');

/** A CTA block that offers a contact action is dropped: the footer carries the one call to action (CC-53). */
function withoutContactCtas(blocks: Block[]): Block[] {
  return blocks.filter((b) => b.type !== 'cta' || !b.actions.some((a) => isContact(a.href)));
}

export function Blocks({ blocks: all, start = 0 }: { blocks: Block[]; start?: number }) {
  const blocks = withoutContactCtas(all);
  return (
    <>
      {blocks.map((b, i) => {
        const mark = String(start + i + 1).padStart(2, '0');
        if (b.type === 'home') return <div key={`home-${b.ref}`}>{homeSection(b.ref, mark)}</div>;
        return (
          <Shell key={b.id} b={b} mark={mark} layout={layoutOf(b)}>
            <BlockBody b={b} />
          </Shell>
        );
      })}
    </>
  );
}
