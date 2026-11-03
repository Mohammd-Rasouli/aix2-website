import type { LinkItem } from '../types';
import type { Block } from './types';

/**
 * Talk pages (/talks/[slug]), reached from QR codes on stage. Date, city, video and slides are not
 * known yet (OQ-21). `blocks` is the written version of the talk (draft B8): the argument, the
 * five-step method, one case and how AIx2 compares by category. Numbers are the cleared case-page
 * values only (IST-01 to IST-06, IST-09, IST-10, IST-19, IST-20); the deck's own percentages and dollar
 * figures are never used (docs/facts.md X-06). Competitors are named by category, never by company.
 * The route has to render `blocks` with the shared <Blocks> component (see the report). Staged facts:
 * INS-52 (docs/facts-staging-insights.md).
 */
export interface TalkContent {
  slug: string;
  route: string;
  seo: { title: string; description: string };
  title: string;
  event: string;
  line: string;
  video: { provider: 'youtube'; id?: string; dependsOn?: string };
  slides?: { href?: string; dependsOn?: string };
  button: LinkItem;
  /** The written version of the talk, below the video. */
  blocks?: Block[];
}

const MEASURED = 'Measured by the client: May–Oct 2026 vs the 12 months to Dec 2025';

export const talks: TalkContent[] = [
  {
    slug: 'plug-and-play-summit-2026',
    route: '/talks/plug-and-play-summit-2026',
    seo: {
      title: 'AIx2 · Your enterprise, as it really runs',
      description:
        'Our four-minute talk from the Plug and Play Summit, in writing: the argument, the five-step method, one manufacturing case with its measured results, and how AIx2 compares by category.',
    },
    title: 'Your enterprise, as it really runs',
    event: 'Plug and Play Summit',
    line: 'Our four-minute talk from the Plug and Play Summit.',
    video: { provider: 'youtube', dependsOn: 'OQ-21' },
    slides: { dependsOn: 'OQ-21' },
    button: { label: 'Bring us one process', href: '/contact' },
    blocks: [
      {
        type: 'prose',
        id: 'argument',
        name: 'The argument',
        what: 'What the talk says, in short',
        title: 'Leaders are asked to change a company they cannot see.',
        facts: ['T-20'],
        paragraphs: [
          'Interviews and workshops show the company as people describe it. The systems show it as it is built.',
          'AIx2 reads the records a company already keeps, read-only. It maps the process, the data supply chain and the AI infrastructure as built, measures the gap to best practice, designs the better way, and checks live that it holds.',
        ],
      },
      {
        type: 'flow',
        id: 'five-steps',
        name: 'Five Step Method',
        what: 'Five steps, from the records to a result that holds',
        title: 'Five steps, in this order.',
        facts: ['INS-52'],
        shape: 'lane',
        items: [
          { title: 'Collecting Data', copy: 'Read-only, from ERP, CRM, spreadsheets, e-mail, chat and cameras.' },
          { title: 'Mapping Processes and Data Flow', copy: 'The processes, the strategy and the data supply chain, as built.' },
          { title: 'Gap Analysis', copy: 'The distance to best practice, and the red flags.' },
          { title: 'Optimal Design', copy: 'Processes, data flow and a playbook.' },
          { title: 'Implementation Live Assurance', copy: 'A live score against the optimal design.' },
        ],
      },
      {
        type: 'steps',
        id: 'the-case',
        name: 'The case in the talk',
        what: 'The same path, in one manufacturer',
        title: 'Twelve weeks at an industrial manufacturer in Istanbul.',
        body: 'An explosion-protected equipment maker. The whole path, from first connection to a forecast, took twelve weeks; the work then continued as a managed service.',
        facts: ['IST-04', 'IST-05', 'IST-06', 'IST-09', 'IST-10', 'IST-19', 'IST-20'],
        items: [
          { n: '01', title: 'Collecting Data', copy: 'Twelve sources were read, including three years of paper forms.' },
          { n: '02', title: 'Mapping Processes and Data Flow', copy: 'The official order process existed in three variants, not one. 26% of engineering changes were agreed outside the change register.' },
          { n: '03', title: 'Check against the standards', copy: 'The work was set against ISO 9001, ATEX and IECEx. Major audit findings went from 3 to 0.' },
          { n: '04', title: 'Design the better way', copy: 'A release check and a late-order forecast.' },
        ],
        line: 'Full story, with the sample behind each number, on the case page.',
      },
      {
        type: 'stats',
        id: 'results',
        name: 'Results',
        what: 'What the client measured, before and after',
        title: 'What the client measured.',
        facts: ['IST-01', 'IST-02', 'IST-03', 'IST-04'],
        items: [
          { figure: '75% → 95%', text: 'on-time delivery', source: MEASURED, facts: ['IST-01'] },
          { figure: '15 → 1', text: 'working days to assemble audit evidence', source: MEASURED, facts: ['IST-02'] },
          { figure: '4.8 → 0.9', text: 'danger-zone entries per 1,000 hours', source: 'Safety against a four-week shadow baseline', facts: ['IST-03'] },
          { figure: '3 → 0', text: 'major audit findings', source: MEASURED, facts: ['IST-04'] },
        ],
      },
      {
        type: 'cards',
        id: 'two-buyers',
        name: 'One engine, two buyers',
        what: 'Who the same method serves',
        title: 'One engine serves operators and investors.',
        columns: 2,
        facts: ['T-20'],
        items: [
          { tag: 'For operators', title: 'Diagnosis, optimal design, and monitoring of the implementation', copy: 'For the people who run a company and need a design that holds.', href: '/companies' },
          { tag: 'For investors', title: 'Due diligence, value creation and M&A', copy: 'From systems and data rather than interviews.', href: '/investors' },
        ],
      },
      {
        type: 'prose',
        id: 'how-we-work',
        name: 'How we work',
        what: 'The people and the setup behind the method',
        title: 'Engineers and strategy consultants, inside your organization.',
        facts: ['T-20'],
        paragraphs: [
          'Forward-deployed engineers and forward-deployed strategy consultants work together inside your organization. Everything runs on-premises, with open-source models. The platform comes with expert support when needed; the experts widen the data sources and stay through the implementation.',
        ],
      },
      {
        type: 'compare',
        id: 'compared',
        name: 'How it compares',
        what: 'Four kinds of provider, by category',
        title: 'What each kind of provider covers.',
        facts: ['T-20'],
        columns: ['Works from', 'Covers'],
        rows: [
          { label: 'Consulting firms', cells: ['Interviews, not real data', 'Analysis and design'] },
          { label: 'Large platform vendors', cells: ['Their own product', 'A piece each'] },
          { label: 'Process-mining newcomers', cells: ['Real data', 'Mapping; they stop short of design'] },
          { label: 'AIx2', cells: ['Real data, kept live', 'Mapping, analysis and design: all five steps'] },
        ],
        footnote: 'Compared by category, not by company.',
      },
      {
        type: 'cards',
        id: 'go-further',
        name: 'Go further',
        what: 'Pages for the cases and industries in the talk',
        title: 'Where to read more.',
        columns: 3,
        items: [
          { tag: 'Case', title: 'Industrial manufacturer, Istanbul', copy: 'The full story, with the window and sample behind every number.', href: '/proof/industrial-manufacturer-istanbul' },
          { tag: 'Industry', title: 'Manufacturing', copy: 'Where the method applies on the shop floor and in the order-to-delivery path.', href: '/industries/manufacturing' },
          { tag: 'Industry', title: 'Healthcare', copy: 'A second case shown in the talk: a teaching hospital’s inpatient diabetes care.', href: '/industries/healthcare' },
        ],
      },
      {
        type: 'prose',
        id: 'about-the-numbers',
        name: 'About the numbers',
        what: 'Where the figures on this page come from',
        title: 'Every figure is from the case page.',
        paragraphs: [
          'The numbers here are the ones the client measured, with their window and sample on the case page. The slides shown on stage are not the source of the numbers.',
        ],
      },
      {
        type: 'cta',
        id: 'next',
        name: 'Next step',
        what: 'The offer made at the end of the talk',
        title: 'Bring us one process.',
        subhead: 'We’ll show you how it really runs, what to fix, and what to do next.',
        actions: [{ label: 'Bring us one process', href: '/contact', variant: 'primary' }],
      },
    ],
  },
];
