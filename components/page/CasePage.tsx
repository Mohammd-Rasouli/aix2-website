import type { CasePageContent } from '@/content/pages/types';
import { caseFrame } from '@/content/caseFrame';
import { clientLogos } from '@/content/cases/logos';
import { BeforeAfter } from '@/components/ds/BeforeAfter';
import { CaseVisual, artKind } from '@/components/ds/CaseArt';
import { ButtonLink } from '@/components/ds/ButtonLink';
import { SectionHead } from '@/components/ds/SectionHead';
import { PageHero } from './PageHero';
import blocks from './Blocks.module.css';
import styles from './CasePage.module.css';

const F = caseFrame;

function Head({ id, n, k }: { id: string; n: number; k: keyof typeof F.parts }) {
  const p = F.parts[k];
  return <SectionHead id={`${id}-title`} mark={String(n).padStart(2, '0')} name={p.name} what={p.what} title={p.title} />;
}

/** A case page, in the order of SS's case template. Every number cites its fact IDs in content. */
export function CasePage({ c }: { c: CasePageContent }) {
  let n = 0;
  const next = () => ++n;
  const sections: { id: string; k: keyof typeof F.parts }[] = [
    ...(c.profile ? [{ id: 'profile', k: 'profile' as const }] : []),
    { id: 'summary', k: 'summary' },
    { id: 'from-to', k: 'table' },
    { id: 'measured', k: 'measured' },
    { id: 'verified', k: 'verified' },
    ...(c.financial ? [{ id: 'financial', k: 'financial' as const }] : []),
    ...(c.story?.length ? [{ id: 'story', k: 'story' as const }] : []),
    { id: 'how-it-ran', k: 'ran' },
    { id: 'required', k: 'required' },
    { id: 'for-you', k: 'forYou' },
    { id: 'timeline', k: 'timeline' },
    { id: 'one-year-later', k: 'oneYear' },
  ];
  const index = sections.map((s) => ({ id: s.id, name: F.parts[s.k].name, what: F.parts[s.k].what }));

  return (
    <>
      <PageHero
        name={F.heroName}
        what={c.client}
        title={c.headline}
        subhead={c.measurementLabel}
        dependsOn={c.dependsOn}
        actions={[
          { label: F.report.label, href: F.report.href, variant: 'primary' },
          { label: F.all.label, href: F.all.href, variant: 'text' },
        ]}
        location={`case_${c.route.split('/').pop()}`}
        aside={
          <aside className={styles.keyStats} aria-label={F.keyStatsLabel}>
            {artKind(c.route.split('/').pop()!) && (
              <div className={styles.art}>
                <CaseVisual id={c.route.split('/').pop()!} />
              </div>
            )}
            {c.name && (
              <p className={styles.client}>
                {clientLogos[c.name] ? (
                  // eslint-disable-next-line @next/next/no-img-element -- small static mark
                  <img src={clientLogos[c.name]!.src} alt={c.name} width={clientLogos[c.name]!.w} height={clientLogos[c.name]!.h} />
                ) : (
                  <span>{c.name}</span>
                )}
              </p>
            )}
            {c.keyStats.map((s) => (
              <div key={s.label} className={styles.key}>
                <p className={styles.keyLabel}>{s.label}</p>
                <p className={styles.keyFigures}>
                  <span className={styles.from}>{s.from}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                  <span className="visually-hidden"> to </span>
                  <span className={styles.to}>{s.to}</span>
                </p>
              </div>
            ))}
            <nav className={styles.miniIndex} aria-label="On this page">
              {index.map((it) => (
                <a key={it.id} href={`#${it.id}`}>
                  {it.name}
                </a>
              ))}
            </nav>
          </aside>
        }
      />

      {c.profile && (
        <section id="profile" className={blocks.section} aria-labelledby="profile-title">
          <Head id="profile" n={next()} k="profile" />
          <div className={styles.profile}>
            <div className={styles.profileLead}>
              <div className={styles.profileBlock}>
                <p className={styles.profileLabel}>{F.profileLabels.description}</p>
                <p className={styles.profileText}>{c.profile.description}</p>
              </div>
              <div className={styles.profileBlock}>
                <p className={styles.profileLabel}>{F.profileLabels.situation}</p>
                <p className={styles.profileText}>{c.profile.situation}</p>
              </div>
            </div>
            <dl className={styles.sheet}>
              <div className={styles.sheetRow}>
                <dt>{F.profileLabels.whatWeDid}</dt>
                <dd>
                  <ol className={styles.did}>
                    {c.profile.whatWeDid.map((x, i) => (
                      <li key={x}>
                        <span className={styles.didN} aria-hidden="true">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {x}
                      </li>
                    ))}
                  </ol>
                </dd>
              </div>
              <div className={styles.sheetRow}>
                <dt>{F.profileLabels.duration}</dt>
                <dd>
                  <p className={styles.duration}>{c.profile.duration}</p>
                  {c.profile.phases && c.profile.phases.length > 0 && (
                    <ol className={styles.track} style={{ ['--n' as string]: c.profile.phases.length }}>
                      {c.profile.phases.map((ph) => (
                        <li key={ph.when + ph.what}>
                          <span className={styles.trackWhen}>{ph.when}</span>
                          <span className={styles.trackWhat}>{ph.what}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                </dd>
              </div>
              <div className={styles.sheetRow}>
                <dt>{F.profileLabels.team}</dt>
                <dd>
                  <ul className={styles.roles}>
                    {c.profile.team.map((r, i) => (
                      <li key={r} data-lead={i === 0 ? 'true' : undefined}>
                        {r}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              {c.profile.scope && c.profile.scope.length > 0 && (
                <div className={styles.sheetRow}>
                  <dt>{F.profileLabels.scope}</dt>
                  <dd>
                    <ul className={styles.scope}>
                      {c.profile.scope.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </section>
      )}

      <section id="summary" className={blocks.section} aria-labelledby="summary-title">
        <Head id="summary" n={next()} k="summary" />
        <div className={styles.summary}>
          {(['issue', 'solution', 'impact'] as const).map((k) => (
            <div key={k} className={styles.summaryCol}>
              <p className={styles.summaryLabel}>{F.summaryLabels[k]}</p>
              <p className={styles.summaryText}>{c.summary[k]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="from-to" className={blocks.section} aria-labelledby="from-to-title">
        <Head id="from-to" n={next()} k="table" />
        <BeforeAfter rows={c.table.map((r) => ({ label: r.label, before: r.from, after: r.to }))} />
        <p className={blocks.note}>{c.measurementLabel}</p>
      </section>

      <section id="measured" className={blocks.section} aria-labelledby="measured-title">
        <Head id="measured" n={next()} k="measured" />
        <div className={blocks.tableWrap} tabIndex={0} role="region" aria-label="Table, scrolls sideways">
          <table className={`${blocks.table} ${styles.measured}`}>
            <thead>
              <tr>
                {F.measuredColumns.map((col) => (
                  <th key={col} scope="col">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.measured.map((m) => (
                <tr key={m.label}>
                  <th scope="row">{m.label}</th>
                  <td>{m.definition}</td>
                  <td>{m.before}</td>
                  <td className={styles.after}>{m.after}</td>
                  <td>{m.sample}</td>
                  <td>{m.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="verified" className={blocks.section} aria-labelledby="verified-title">
        <Head id="verified" n={next()} k="verified" />
        <ul className={blocks.list} data-style="check">
          {c.verification.map((v) => (
            <li key={v}>
              <span className={blocks.check} aria-hidden="true">
                <svg viewBox="0 0 16 16" focusable="false">
                  <path d="M3.5 8.5l3 3 6-7" />
                </svg>
              </span>
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </section>

      {c.financial && (
        <section id="financial" className={blocks.section} aria-labelledby="financial-title">
          <Head id="financial" n={next()} k="financial" />
          {c.financial.dependsOn && <p className={blocks.pending}>Placeholder until {c.financial.dependsOn} is answered</p>}
          <div className={blocks.prose}>
            {c.financial.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      )}


      {c.story?.length ? (
        <section id="story" className={blocks.section} aria-labelledby="story-title">
          <Head id="story" n={next()} k="story" />
          <div className={styles.story}>
            <nav className={styles.storyIndex} aria-label="Chapters">
              <ol>
                {c.story.map((ch, i) => (
                  <li key={ch.heading + i}>
                    <a href={`#ch-${i + 1}`}>
                      <span className={styles.chN} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                      {ch.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className={styles.chapters}>
              {c.story.map((ch, i) => (
                <article key={ch.heading + i} id={`ch-${i + 1}`} className={styles.chapter}>
                  <h3 className={styles.chTitle}>
                    <span className={styles.chN} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    {ch.heading}
                  </h3>
                  {ch.paragraphs.map((p, j) => (
                    <p key={j} className={styles.chText}>
                      {p}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section id="how-it-ran" className={blocks.section} aria-labelledby="how-it-ran-title">
        <Head id="how-it-ran" n={next()} k="ran" />
        <div className={styles.two}>
          <div className={styles.twoCol}>
            <p className={styles.summaryLabel}>{F.ranLabels.work}</p>
            {c.howItRan.work.map((p) => (
              <p key={p} className={styles.twoText}>
                {p}
              </p>
            ))}
          </div>
          <div className={styles.twoCol}>
            <p className={styles.summaryLabel}>{F.ranLabels.data}</p>
            <ul className={styles.dataList}>
              {c.howItRan.data.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="required" className={blocks.section} aria-labelledby="required-title">
        <Head id="required" n={next()} k="required" />
        <dl className={styles.required}>
          {c.required.map((r) => (
            <div key={r.category} className={styles.reqRow}>
              <dt>{r.category}</dt>
              <dd>{r.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="for-you" className={blocks.section} aria-labelledby="for-you-title">
        <Head id="for-you" n={next()} k="forYou" />
        <ul className={blocks.list} data-style="bullet">
          {c.forYou.map((v, i) => (
            <li key={v}>
              <span className={blocks.bullet} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="timeline" className={blocks.section} aria-labelledby="timeline-title">
        <Head id="timeline" n={next()} k="timeline" />
        <ol className={blocks.timeline} style={{ ['--n' as string]: Math.min(c.timeline.length, 6) }}>
          {c.timeline.map((t) => (
            <li key={t.when + t.what} className={blocks.tItem}>
              <span className={blocks.tDot} aria-hidden="true" />
              <p className={blocks.tWhen}>{t.when}</p>
              <p className={blocks.tCopy}>{t.what}</p>
            </li>
          ))}
        </ol>
        <div className={styles.two}>
          <div className={styles.twoCol}>
            <p className={styles.summaryLabel}>{F.timelineLabels.owners}</p>
            <ul className={styles.dataList}>
              {c.owners.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
          <div className={styles.twoCol}>
            <p className={styles.summaryLabel}>{F.timelineLabels.madeItWork}</p>
            <ul className={styles.dataList}>
              {c.madeItWork.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="one-year-later" className={blocks.section} aria-labelledby="one-year-later-title">
        <Head id="one-year-later" n={next()} k="oneYear" />
        <div className={styles.later}>
          <span className={styles.laterRing} aria-hidden="true" />
          <p>{c.oneYearLater ?? F.oneYearPending}</p>
        </div>
      </section>

      <section className={`${blocks.section} ${styles.report}`} data-wide="true" aria-label={F.report.label}>
        <p className={styles.reportLine}>{F.report.line}</p>
        <div className={styles.reportActions}>
          <ButtonLink href={F.report.href} variant="primary" size="lg" cta="case_report" location={c.route}>
            {F.report.label}
          </ButtonLink>
          <ButtonLink href={F.all.href} variant="text" location={c.route}>
            {F.all.label}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
