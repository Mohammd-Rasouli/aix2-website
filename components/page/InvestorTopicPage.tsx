import { investorTopicLabels as L, investorTopics, type InvestorTopic } from '@/content/pages/investorTopics';
import { SectionHead } from '@/components/ds/SectionHead';
import blocks from './Blocks.module.css';
import styles from './InvestorTopicPage.module.css';

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * One investor page (CC-64): a deal stage or an investor type, from the Summit deck's investor slides.
 * Hero with the illustrative case's headline figure; then the problem, benchmarks, how AIx2 helps,
 * how the work runs, the illustrative case told in full, what you receive, and the other pages.
 */
export function InvestorTopicPage({ t }: { t: InvestorTopic }) {
  const others = investorTopics.filter((o) => o.slug !== t.slug);
  let n = 0;
  const mark = () => pad(++n);
  return (
    <>
      <header className={styles.hero}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.lead}>
          <p className={styles.kicker}>
            <a className={styles.crumb} href="/investors">
              For investors
            </a>
            <span className={styles.what}>
              {t.group === 'stage' ? L.stage : L.investor} · {t.label}
            </span>
          </p>
          <h1 className={styles.title}>
            {t.title[0]} <span className={styles.accent}>{t.title[1]}</span>
          </h1>
          <p className={styles.subhead}>{t.subhead}</p>
        </div>
        <a className={styles.caseCard} href="#case">
          <span className={styles.caseTag}>{t.kase.tag}</span>
          <span className={styles.caseWho}>{t.kase.who}</span>
          <span className={styles.caseFigure}>{t.kase.figure}</span>
          <span className={styles.caseLine}>{t.kase.figureLine}</span>
          <span className={styles.caseSub}>{t.kase.figureSub}</span>
          <span className={styles.caseGo}>
            Read the case <span aria-hidden="true">→</span>
          </span>
        </a>
      </header>

      <section id="problem" className={blocks.section} aria-labelledby="problem-title">
        <div className={styles.split}>
          <SectionHead id="problem-title" mark={mark()} name={L.problem.name} what={L.problem.what} title={t.problem.title} />
          <div className={styles.prose}>
            {t.problem.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="benchmarks" className={`${blocks.section} ${styles.tint}`} aria-labelledby="benchmarks-title">
        <SectionHead id="benchmarks-title" mark={mark()} name={L.benchmarks.name} what={L.benchmarks.what} title="What the research says." />
        <ul className={styles.bench} style={{ ['--n' as string]: t.benchmarks.length }}>
          {t.benchmarks.map((b, i) => (
            <li key={b.text} className={styles.benchItem}>
              <span className={styles.benchFig}>{b.figure}</span>
              <span className={styles.benchUnit}>{b.unit}</span>
              <span className={styles.benchText}>{b.text}</span>
              <span className={styles.benchSrc}>
                <sup>{i + 1}</sup> {b.source}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section id="how" className={blocks.section} aria-labelledby="how-title">
        <SectionHead id="how-title" mark={mark()} name={L.helps.name} what={L.helps.what} title="Four things change." />
        <ol className={styles.helps}>
          {t.helps.map((h, i) => (
            <li key={h.title} className={styles.help}>
              <span className={styles.helpN} aria-hidden="true">
                {pad(i + 1)}
              </span>
              <h3 className={styles.helpTitle}>{h.title}</h3>
              <p className={styles.helpText}>{h.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="steps" className={`${blocks.section} ${styles.tint}`} aria-labelledby="steps-title">
        <SectionHead id="steps-title" mark={mark()} name={L.steps.name} what={L.steps.what} title="From read-only access to results, step by step." />
        <ol className={styles.steps}>
          {t.steps.map((s) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.stepDot} aria-hidden="true" />
              <span className={styles.stepWhen}>{s.when}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="case" className={blocks.section} aria-labelledby="case-title">
        <SectionHead id="case-title" mark={mark()} name={L.kase.name} what={L.kase.what} title={t.kase.who} />
        <p className={styles.illus}>{L.illustrative}</p>
        <div className={styles.caseGrid}>
          <div className={styles.caseStory}>
            <div className={styles.caseBig}>
              <span className={styles.caseFigure}>{t.kase.figure}</span>
              <span>
                <span className={styles.caseLine}>{t.kase.figureLine}</span>
                <span className={styles.caseSub}>{t.kase.figureSub}</span>
              </span>
            </div>
            <h3 className={styles.storyHead}>The situation</h3>
            <p className={styles.storyText}>{t.kase.situation}</p>
            <h3 className={styles.storyHead}>What AIx2 did</h3>
            <ol className={styles.did}>
              {t.kase.did.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ol>
          </div>
          <div className={styles.rows}>
            <p className={styles.rowsHead}>
              <span>{L.before}</span>
              <span>{L.after}</span>
            </p>
            {t.kase.rows.map((r) => (
              <div key={r.label} className={styles.row}>
                <p className={styles.rowLabel}>{r.label}</p>
                <p className={styles.rowFig}>
                  <span className={styles.from}>{r.from}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                  <span className="visually-hidden"> to </span>
                  <span className={styles.to}>{r.to}</span>
                </p>
              </div>
            ))}
            <p className={styles.math}>{t.kase.math}</p>
          </div>
        </div>
      </section>

      <section id="receive" className={`${blocks.section} ${styles.tint}`} aria-labelledby="receive-title">
        <div className={styles.split}>
          <SectionHead id="receive-title" mark={mark()} name={L.receive.name} what={L.receive.what} title="What lands on your desk." />
          <ul className={styles.receive}>
            {t.receive.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="more" className={blocks.section} aria-labelledby="more-title">
        <SectionHead id="more-title" mark={mark()} name={L.more.name} what={L.more.what} title="The same evidence, for every seat at the table." />
        <ul className={styles.more}>
          {others.map((o) => (
            <li key={o.slug}>
              <a className={styles.moreCard} href={o.route}>
                <span className={styles.moreGroup}>{o.group === 'stage' ? L.stage : L.investor}</span>
                <span className={styles.moreLabel}>{o.label}</span>
                <span className={styles.moreLine}>
                  {o.title[0]} {o.title[1]}
                </span>
                <span className={styles.moreFig}>
                  {o.kase.figure} <small>{o.kase.figureLine}</small>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

