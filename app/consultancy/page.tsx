import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ds/ButtonLink';
import { PageShell } from '@/components/page/PageShell';
import styles from './consultancy.module.css';

export const metadata: Metadata = {
  title: 'AIx2 · Consultancy: strategy, transformation and implementation',
  description:
    'Strategy design, transformation including AI transformation, and implementation by strategy consultants and PhD engineers, grounded in how your company really runs.',
  alternates: { canonical: '/consultancy' },
  openGraph: {
    title: 'AIx2 · Consultancy: strategy, transformation and implementation',
    description:
      'From strategy to the shop floor. Strategy consultants and PhD engineers design the transformation and stay through implementation.',
    url: '/consultancy',
    siteName: 'AIx2',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'AIx2' }],
  },
};

const services = [
  { group: 'Strategy', title: 'Strategy design', copy: 'Where to play and how to win, set against how the company really runs. A strategy your leaders sign and your data can track.' },
  { group: 'AI', title: 'AI transformation', copy: 'The AI moves worth funding, the data and controls they need, and the build, in an order your operations can carry.' },
  { group: 'Organization', title: 'Operating model and organization', copy: 'Structures, roles, decision rights and governance, designed around the work as it is really done.' },
  { group: 'Operations', title: 'Process and data-governance redesign', copy: 'The optimal processes and data flows, measured against best practice, gap by gap.' },
  { group: 'Delivery', title: 'Implementation and transformation office', copy: 'We run the program with your teams: owners, milestones, and a live check on every case that the change holds.' },
  { group: 'Investors', title: 'Operational diligence and value creation', copy: 'Before you price a company, how it really runs. After you own it, the plan that lifts its value, and the people to deliver it.' },
];

const phases = [
  { title: 'Strategy design', copy: 'Ambition, priorities and the case for change, agreed with your leadership and tied to measures your systems already hold.', outcome: 'A strategy your board signs' },
  { title: 'Evidence from your data', copy: 'Atlas reads your systems: collecting data, mapping processes and data flow, and gap analysis, from the Five Step Method.', outcome: 'The company as built' },
  { title: 'Transformation design', copy: 'Optimal design of processes, organization, data and AI, sequenced into a roadmap with a value and an owner for each move.', outcome: 'Roadmap and business case' },
  { title: 'Implementation', copy: 'A transformation office inside your organization, with implementation live assurance on every case until the change holds.', outcome: 'Results that hold' },
];

const comparison = [
  ['You start with', 'One process, in one week', 'A strategic question your leadership owns'],
  ['Who does the work', 'Atlas, with our forward-deployed engineers', 'Senior strategy consultants and PhD engineers, inside your teams'],
  ['What you get', 'The company as built, its gaps and the optimal design', 'The strategy, the transformation design and an implementation that is run, not handed over'],
  ['Best when', 'You want to see how you really run, fast', 'You need one partner from the boardroom to the shop floor'],
];

const principles = [
  'Evidence from your systems, not opinions from interviews',
  'The same team designs the change and builds it',
  'Every recommendation comes with its value, its owner and its source',
  'We stay until the change holds, checked live on every case',
  'Your data stays inside your walls, on-premise if you need it',
];

export default function ConsultancyPage() {
  return (
    <PageShell page="/consultancy">
      <div className={styles.page}>
        <section className={styles.hero} aria-labelledby="consultancy-title">
          <p className={styles.eyebrow}><span>Consultancy</span><i aria-hidden="true" />Strategy and transformation, beyond the software</p>
          <h1 id="consultancy-title">From strategy to the <em>shop floor.</em></h1>
          <div className={styles.heroBottom}>
            <p className={styles.intro}>When you need more than software, we are your consultancy. Our strategy consultants and PhD engineers design the strategy and the transformation, including AI transformation, then stay with you through implementation until it holds.</p>
            <ButtonLink href="https://meetings.hubspot.com/aix2/aix2-team" variant="primary" size="lg" cta="book_call" location="consultancy-hero">
              Book a 30-minute call
            </ButtonLink>
          </div>
          <a className={styles.downLink} href="#engagement">Explore the engagement <span aria-hidden="true">↓</span></a>
        </section>

        <section className={styles.engagement} id="engagement" aria-labelledby="engagement-title">
          <div className={styles.sectionHead}>
            <p className={styles.index}>How an engagement runs</p>
            <h2 id="engagement-title">One line, from strategy to results.</h2>
            <p>Reading the drawing: the line is the engagement, from strategy to results. The band beneath is Atlas, the evidence every step stands on.</p>
          </div>
          <div className={styles.map} aria-label="Engagement phases grounded in Atlas company evidence">
            <div className={styles.mapRail} aria-hidden="true"><span /></div>
            <ol className={styles.phaseList}>
              {phases.map((phase, index) => <li key={phase.title}>
                <span className={styles.phaseNumber}>0{index + 1}</span>
                <h3>{phase.title}</h3>
                <p>{phase.outcome}</p>
              </li>)}
              <li className={styles.result}>
                <span className={styles.phaseNumber}>→</span>
                <h3>Results that hold</h3>
              </li>
            </ol>
            <div className={styles.atlasBand}><span>Atlas</span><p>Your company as built</p><small>Consultants and PhD engineers</small></div>
          </div>
        </section>

        <section className={styles.people} aria-labelledby="people-title">
          <div className={styles.sectionHead}>
            <p className={styles.index}>01 / Who you work with</p>
            <h2 id="people-title">The people behind every engagement</h2>
          </div>
          <div className={styles.peopleCopy}>
            <h3>We have designed transformation at McKinsey. Now we engineer it.</h3>
            <p>You are talking to PhD engineers and strategy consultants: people who publish at the best AI conferences, speak from Stanford, and have built at large technology companies.</p>
          </div>
          <ul className={styles.credentialList}>
            <li><strong>McKinsey</strong><span>Our team designed AI-led transformation at McKinsey, from the New York office.</span></li>
            <li><strong>~20</strong><span>Large funds and companies where our team rolled that transformation out.</span></li>
            <li><strong>NeurIPS</strong><span>And other top AI conferences, where our PhD engineers publish their research.</span></li>
            <li><strong>Stanford</strong><span>AI research, and the Stanford AI &amp; Investment Series we co-host.</span></li>
            <li><strong>Engineering</strong><span>Experience from large technology companies, Microsoft among them.</span></li>
          </ul>
        </section>

        <section className={styles.services} aria-labelledby="services-title">
          <div className={styles.sectionHead}>
            <p className={styles.index}>02 / What we do</p>
            <h2 id="services-title">Six services, from the boardroom to the floor</h2>
            <p>One team for the whole transformation. Take one service or all of them. Each one stands on the same evidence: how your company really runs, read from its own systems.</p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service, index) => <article className={styles.service} key={service.title}>
              <p className={styles.serviceGroup}>{service.group} <span>0{index + 1}</span></p>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>)}
          </div>
        </section>

        <section className={styles.phases} aria-labelledby="phases-title">
          <div className={styles.sectionHead}>
            <p className={styles.index}>03 / How an engagement runs</p>
            <h2 id="phases-title">Four phases, each one can run on its own</h2>
            <p>Designed with you. Delivered with you.</p>
          </div>
          <ol className={styles.phaseCards}>
            {phases.map((phase, index) => <li key={phase.title}>
              <p className={styles.index}>Step 0{index + 1}</p>
              <h3>{phase.title}</h3>
              <p>{phase.copy}</p>
              <strong>{phase.outcome}</strong>
            </li>)}
          </ol>
          <p className={styles.note}>Most clients start with one process in Atlas, then bring us in for the rest.</p>
        </section>

        <section className={styles.compare} aria-labelledby="compare-title">
          <div className={styles.sectionHead}>
            <p className={styles.index}>04 / Two ways to work with us</p>
            <h2 id="compare-title">Atlas on its own, or the full consultancy</h2>
            <p>Start with Atlas. Add the consultancy when you need it.</p>
          </div>
          <div className={styles.tableWrap}>
            <table>
              <thead><tr><th scope="col"> </th><th scope="col">Atlas, software-led</th><th scope="col">Consultancy, full service</th></tr></thead>
              <tbody>{comparison.map(([label, atlas, consultancy]) => <tr key={label}><th scope="row">{label}</th><td>{atlas}</td><td>{consultancy}</td></tr>)}</tbody>
            </table>
          </div>
          <p className={styles.note}>Atlas runs under every consultancy engagement, so each recommendation traces back to your own data.</p>
        </section>

        <section className={styles.why} aria-labelledby="why-title">
          <div className={styles.whyLead}>
            <p className={styles.index}>05 / Why AIx2</p>
            <h2 id="why-title">What a classic strategy project does not give you</h2>
            <p>Top-tier strategy rigor, with engineers in the room.</p>
          </div>
          <ul>{principles.map((principle, index) => <li key={principle}><span>0{index + 1}</span>{principle}</li>)}</ul>
        </section>

        <section className={styles.close} aria-label="Start a consultancy conversation">
          <p className={styles.index}>Strategy to implementation</p>
          <h2>Build a transformation that holds.</h2>
          <ButtonLink href="https://meetings.hubspot.com/aix2/aix2-team" variant="primary" size="lg" cta="book_call" location="consultancy-footer">
            Book a 30-minute call
          </ButtonLink>
        </section>
      </div>
    </PageShell>
  );
}
