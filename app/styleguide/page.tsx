import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { cases, findingExample, framing, hero, lenses, proofHead, redLines, start, steps } from '@/content/home';
import { site } from '@/content/site';
import { DoorButton } from '@/components/DoorButton';
import { ProofStat } from '@/components/ProofStat';
import { ButtonLink } from '@/components/ds/ButtonLink';
import { CaseCard } from '@/components/ds/CaseCard';
import { CTABand } from '@/components/ds/CTABand';
import { FindingCard } from '@/components/ds/FindingCard';
import { LensToggle } from '@/components/ds/LensToggle';
import { ModelKey } from '@/components/ds/ModelKey';
import { SectionGuide, SectionHead } from '@/components/ds/SectionHead';
import { SiteFooter } from '@/components/ds/SiteFooter';
import { StepSequence } from '@/components/ds/StepSequence';
import { SiteHeader } from '@/components/shell/SiteHeader';
import { MotionDemo, RedLineDemo } from '@/components/styleguide/Demos';
import styles from '@/components/styleguide/styleguide.module.css';

export const metadata: Metadata = {
  title: 'Design system · AIx2',
  robots: { index: false, follow: false },
};

const COLOURS = [
  { role: '--ground', hex: '#0E0C09', name: 'Ground', ratio: '', use: 'Page background' },
  { role: '--ground-raised', hex: '#17140F', name: 'Raised', ratio: '', use: 'Cards, panels, menus' },
  { role: '--ground-sunk', hex: '#090806', name: 'Sunk', ratio: '', use: 'Drawing fragments, footer' },
  { role: '--ink', hex: '#F2EBDD', name: 'Cream ink', ratio: '16.5', use: 'Headings and running text' },
  { role: '--ink-2', hex: '#B8AD98', name: 'Sand', ratio: '8.8', use: 'Secondary text and labels' },
  { role: '--plan', hex: '#D9CDB4', name: 'Plan line', ratio: '12.4', use: 'The drawn layer: the official process' },
  { role: '--gold', hex: '#C9A35B', name: 'Gold', ratio: '8.3', use: 'The lens, the built layer, active states' },
  { role: '--positive', hex: '#D8B26A', name: 'Gain', ratio: '9.8', use: 'The improvement in From → To' },
  { role: '--red', hex: '#E5533D', name: 'Red ink', ratio: '5.2', use: 'Findings only: clouds, leaders, marks' },
  { role: '--red-text', hex: '#F07A63', name: 'Red text', ratio: '7.1', use: 'Finding figures and small red text' },
  { role: '--line-soft', hex: '#6F6656', name: 'Soft line', ratio: '3.5', use: 'Control borders, meaningful rules' },
  { role: '--grid', hex: '#3A3328', name: 'Grid', ratio: '1.6', use: 'The drafting grid; decorative only' },
];

const TYPE: { token: string; size: string; spec: string; sample: ReactNode; cls: string }[] = [
  {
    token: '--step-hero',
    size: '44 → 88 px',
    spec: '500 · −0.045em · the H1 only',
    cls: 'tHero',
    sample: (
      <>
        <span>See the company as built,</span> <span className={styles.drawn}>not as drawn.</span>
      </>
    ),
  },
  { token: '--step-display', size: '40 → 72 px', spec: '500 · −0.032em', cls: 'tDisplay', sample: start.headline },
  { token: '--step-h2', size: '30 → 52 px', spec: '460 · −0.024em', cls: 'tH2', sample: steps.headline },
  { token: '--step-h3', size: '19 → 24 px', spec: '500 · −0.012em', cls: 'tH3', sample: redLines.cards[0]!.title },
  { token: '--step-lead', size: '17 → 20 px', spec: '400 · 1.5', cls: 'tLead', sample: start.subhead },
  { token: '--step-body', size: '17 px', spec: '400 · 1.55 · max 38em', cls: 'tBody', sample: steps.items[0]!.copy },
  { token: '--step-small', size: '15 px', spec: '450', cls: 'tSmall', sample: steps.line },
  { token: '--step-label', size: '13 px', spec: '450 · the smallest text', cls: 'tLabel', sample: cases[0]!.label },
  {
    token: '--step-figure-l',
    size: '36 → 56 px',
    spec: '400 · tabular figures',
    cls: 'tFigure',
    sample: (
      <>
        <span className={styles.from}>75%</span> <span className={styles.arrow}>→</span> <span className={styles.to}>95%</span>
      </>
    ),
  },
];

const SPACE = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];
const RADII = [
  { token: '--radius', px: '2 px', use: 'Drawn things' },
  { token: '--radius-s', px: '8 px', use: 'Chips, small tiles' },
  { token: '--radius-m', px: '14 px', use: 'Tiles in a card' },
  { token: '--radius-l', px: '20 px', use: 'Cards, panels' },
  { token: '--radius-pill', px: '999 px', use: 'Everything you press' },
];

const SECTIONS = [
  ['colour', 'Colour'],
  ['type', 'Type'],
  ['space', 'Space and grid'],
  ['shape', 'Shape and depth'],
  ['motion', 'Motion'],
  ['wayfinding', 'Wayfinding'],
  ['navigation', 'Navigation'],
  ['actions', 'Doors and buttons'],
  ['red-ink', 'Red line and findings'],
  ['numbers', 'From → To'],
  ['lens', 'Lens toggle'],
  ['proof', 'Case cards'],
  ['method', 'Step sequence'],
  ['cta', 'CTA band'],
  ['footer', 'Footer'],
] as const;

function Part({ id, n, title, children, lead }: { id: string; n: number; title: string; lead: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className={styles.part} aria-labelledby={`${id}-h`}>
      <header className={styles.partHead}>
        <p className={styles.partN}>{String(n).padStart(2, '0')}</p>
        <h2 id={`${id}-h`} className={styles.partTitle}>
          {title}
        </h2>
        <p className={styles.partLead}>{lead}</p>
      </header>
      {children}
    </section>
  );
}

export default function StyleguidePage() {
  const sheetIds = site.sheets.map((s) => s.id);
  const [door1, door2] = hero.doors;
  return (
    <div className={styles.page}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <header className={styles.intro}>
          <p className={styles.introKicker}>AIx2 · Step 4 · Not indexed</p>
          <h1 className={styles.introTitle}>Design system</h1>
          <p className={styles.introLead}>
            Direction C, the AIx2 lens. Cream is the drawing, gold is the company as built, red is a finding. Every component below uses the tokens only and the copy from
            the content files.
          </p>
          <nav aria-label="Styleguide sections">
            <ol className={styles.toc}>
              {SECTIONS.map(([id, label], i) => (
                <li key={id}>
                  <a href={`#${id}`}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </header>

        <Part id="colour" n={1} title="Colour" lead="Contrast is measured on the ground (WCAG 2.x). Every text pair passes AA on ground, raised and glass. Red is for findings only.">
          <ul className={styles.swatches}>
            {COLOURS.map((c) => (
              <li key={c.role} className={styles.swatch}>
                <span className={styles.chip} style={{ background: `var(${c.role})` }} />
                <span className={styles.swName}>{c.name}</span>
                <code className={styles.swRole}>
                  {c.role} · {c.hex}
                </code>
                <span className={styles.swUse}>{c.use}</span>
                {c.ratio && <span className={styles.swRatio}>{c.ratio}:1 on ground</span>}
              </li>
            ))}
          </ul>
        </Part>

        <Part id="type" n={2} title="Type" lead="One family, Geist. No monospace. Headlines balance and fit in two lines; running text stops at 38em.">
          <ul className={styles.typeList}>
            {TYPE.map((t) => (
              <li key={t.token} className={styles.typeRow}>
                <div className={styles.typeMeta}>
                  <code>{t.token}</code>
                  <span>{t.size}</span>
                  <span>{t.spec}</span>
                </div>
                <p className={styles[t.cls]}>{t.sample}</p>
              </li>
            ))}
          </ul>
        </Part>

        <Part id="space" n={3} title="Space and grid" lead="A 4 px scale. One 12-column grid inside equal outer margins (20 → 56 px), gutters 16 → 24 px.">
          <div className={styles.spaceGrid}>
            <ul className={styles.space}>
              {SPACE.map((s, i) => (
                <li key={s}>
                  <code>--space-{i + 1}</code>
                  <span className={styles.bar} style={{ width: s }} />
                  <span>{s} px</span>
                </li>
              ))}
            </ul>
            <div className={styles.cols} aria-hidden="true">
              {Array.from({ length: 12 }, (_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
          </div>
        </Part>

        <Part id="shape" n={4} title="Shape and depth" lead="Drawn things stay square; objects you hold are round. Panels over the 3D scene are glass.">
          <ul className={styles.radii}>
            {RADII.map((r) => (
              <li key={r.token}>
                <span className={styles.radiusBox} style={{ borderRadius: `var(${r.token})` }} />
                <code>{r.token}</code>
                <span>
                  {r.px} · {r.use}
                </span>
              </li>
            ))}
          </ul>
          <div className={styles.surfaces}>
            <div className={styles.surfGlass}>
              <code>--surface-glass</code>
              <span>Raised at 84%, 12 px blur, --shadow-1</span>
            </div>
            <div className={styles.surfTile}>
              <code>--surface-tile</code>
              <span>Tiles inside a card</span>
            </div>
            <div className={styles.surfLift}>
              <code>--shadow-2</code>
              <span>Lifted: hover, open menu</span>
            </div>
          </div>
        </Part>

        <Part id="motion" n={5} title="Motion" lead="Motion explains; it never decorates. Quint ease-out for entries, expo for large moves. Reduced motion: every transition jumps to its end state.">
          <MotionDemo />
        </Part>

        <Part
          id="wayfinding"
          n={6}
          title="Wayfinding"
          lead="Every section says plainly what it is. The kicker pairs LC's section name with what the section contains, a guide line says how to read a visual, and the model has a key."
        >
          <div className={styles.wayDemo}>
            <SectionHead id="sg-red-lines" mark="03" name={redLines.eyebrow} what={framing['red-lines']!.what} title={redLines.headline} level={3} />
            <SectionGuide>{framing['red-lines']!.guide}</SectionGuide>
          </div>
          <div className={styles.keys}>
            {(['lens', 'built', 'finding'] as const).map((st) => (
              <figure key={st} className={styles.keyFig}>
                <ModelKey content={hero.modelKey} stage={st} />
                <figcaption>
                  <code>data-stage=&quot;{st}&quot;</code> {st === 'lens' ? 'First screen: the lens shows built inside, drawn outside' : st === 'built' ? 'The lens opens: the company as built' : 'The findings are marked'}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className={styles.tableWrap} tabIndex={0} role="region" aria-label="Table, scrolls sideways">
            <table className={styles.table}>
              <caption>What each home section is, and the question it answers (LC page path)</caption>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Section (LC)</th>
                  <th scope="col">What it is, in plain words</th>
                  <th scope="col">Visitor&apos;s question</th>
                </tr>
              </thead>
              <tbody>
                {sheetIds.map((id, i) => {
                  const f = framing[id];
                  if (!f) return null;
                  return (
                    <tr key={id}>
                      <td>{String(i + 1).padStart(2, '0')}</td>
                      <td className={styles.tdName}>{f.name}</td>
                      <td>{f.what}</td>
                      <td className={styles.tdQ}>{f.question}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Part>

        <Part
          id="navigation"
          n={7}
          title="Navigation"
          lead="The header at the top of this page is the live component. Hover pauses 120 ms before a menu opens; click, Enter and Space toggle; arrow keys move along the bar and through a panel; Esc closes and returns focus. Under 1024 px, Menu opens a modal drawer."
        >
          <ul className={styles.specList}>
            <li>
              <strong>Panels</strong> show each section&apos;s name, the page&apos;s own one-line summary (SS), the LC columns and the featured offer.
            </li>
            <li>
              <strong>Current section</strong> is marked with a short gold line and <code>aria-current</code>.
            </li>
            <li>
              <strong>Drawer</strong> is a native modal dialog: focus is trapped, Esc closes it, and focus returns to Menu.
            </li>
          </ul>
        </Part>

        <Part id="actions" n={8} title="Doors and buttons" lead="Two equal doors, then three buttons: one cream primary per view, an outline secondary, and a text link. Everything you press is round and at least 44 px tall.">
          <div className={styles.row}>
            <DoorButton door={door1} location="styleguide" />
            <DoorButton door={door2} location="styleguide" />
          </div>
          <div className={styles.states}>
            {(['hover', 'focus', 'active'] as const).map((f) => (
              <figure key={f}>
                <DoorButton door={door1} location="styleguide" force={f} />
                <figcaption>{f === 'active' ? 'pressed' : f}</figcaption>
              </figure>
            ))}
          </div>
          <div className={styles.row}>
            <ButtonLink href="#actions" variant="primary" size="lg">
              {start.primary.label}
            </ButtonLink>
            <ButtonLink href="#actions" variant="secondary" size="lg">
              {start.investor.label}
            </ButtonLink>
            <ButtonLink href="#actions" variant="text">
              {start.secondary.label}
            </ButtonLink>
          </div>
          <div className={styles.states}>
            {(['hover', 'focus', 'active'] as const).map((f) => (
              <figure key={f}>
                <ButtonLink href="#actions" variant="primary" size="md" force={f}>
                  {site.navButton.label}
                </ButtonLink>
                <figcaption>{f === 'active' ? 'pressed' : f}</figcaption>
              </figure>
            ))}
            {(['hover', 'focus'] as const).map((f) => (
              <figure key={`s-${f}`}>
                <ButtonLink href="#actions" variant="secondary" size="md" force={f}>
                  {start.investor.label}
                </ButtonLink>
                <figcaption>secondary · {f}</figcaption>
              </figure>
            ))}
          </div>
        </Part>

        <Part
          id="red-ink"
          n={9}
          title="Red line and findings"
          lead="The red line marks where the company as built departs from its drawing. It draws itself once (600 ms), then its note appears. A finding is recorded as count · severity · owner."
        >
          <RedLineDemo finding={hero.annotations[0]!.text} source={hero.annotations[0]!.foundAt} />
          <div className={styles.findings}>
            <FindingCard finding={findingExample} />
            <div className={styles.compactList}>
              {hero.annotations.map((a) => (
                <FindingCard
                  key={a.id}
                  variant="compact"
                  n={a.delta}
                  finding={{ id: a.id, count: a.figure, text: a.text, source: a.foundAt, facts: a.facts }}
                />
              ))}
            </div>
          </div>
        </Part>

        <Part id="numbers" n={10} title="From → To" lead="Two numbers, an arrow, a drawing of the change, and who measured it over which window. The label is part of the component and cannot be left out.">
          <ul className={styles.proofRow}>
            {hero.proof.map((s, i) => (
              <li key={s.id}>
                <ProofStat stat={s} delay={i * 160} />
              </li>
            ))}
          </ul>
        </Part>

        <Part id="lens" n={11} title="Lens toggle" lead="One model, two overlays, and a camera re-frame. Mouse, touch and keyboard; the line under it is announced; each change fires lens_toggle.">
          <div className={styles.lensDemo}>
            <SectionHead id="sg-lenses" name={lenses.eyebrow} what={framing.lenses!.what} title={lenses.headline} body={lenses.subhead} level={3} />
            <LensToggle operator={lenses.operator} investor={lenses.investor} />
          </div>
        </Part>

        <Part id="proof" n={12} title="Case cards" lead="Anonymous client, headline, From → To tiles, how, and who measured. The card lifts and leans a little on hover.">
          <SectionHead id="sg-proof" name={proofHead.eyebrow} what={framing.proof!.what} title={proofHead.headline} body={proofHead.subhead} level={3} className={styles.proofHead} />
          <ul className={styles.caseGrid}>
            {cases.map((c) => (
              <li key={c.id}>
                <CaseCard item={c} />
              </li>
            ))}
          </ul>
        </Part>

        <Part id="method" n={13} title="Step sequence" lead="Five steps on a sticky rail. The drawing shows which part of the company each step works on; the index marks the step being read.">
          <SectionHead id="sg-how" mark="04" name={steps.eyebrow} what={framing.how!.what} title={steps.headline} body={steps.subhead} level={3} className={styles.howHead} />
          <StepSequence items={steps.items} line={steps.line} link={steps.link} />
        </Part>

        <Part id="cta" n={14} title="CTA band" lead="The closing band: one primary action, the investor door, the security overview, and the Sprint with its four steps. The e-mail address waits for OQ-13.">
          <CTABand content={start} kicker={{ name: framing['start-sprint']!.name, what: framing['start-sprint']!.what }} id="sg-cta" />
        </Part>

        <Part id="footer" n={15} title="Footer" lead="Tagline, links, legal, and the disclaimer exactly as written. The footer below is the live component.">
          <p className={styles.note} aria-hidden="true">
            ↓
          </p>
        </Part>
      </main>
      <SiteFooter />
    </div>
  );
}
