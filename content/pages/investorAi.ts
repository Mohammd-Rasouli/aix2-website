/**
 * For investors · AI readiness roadmap (CC-80, user 2026-11-02: "an AI Readiness Roadmap on the investors
 * side, like the one for operators"). Mirrors /companies/ai-readiness (goals.ts, Executive Deck slides 3, 18,
 * 21) with the investor's questions: which companies are ready, where AI pays, how it is governed, in what
 * order. No figures.
 */
import type { PageContent } from './types';

export const investorAiReadiness: PageContent = {
  route: '/investors/ai-readiness',
  seo: {
    title: 'AIx2 · AI readiness roadmap for investors',
    description:
      'Which companies you own or are about to buy are ready for AI, where it pays, and how it stays governed: a readiness view built from each company’s own processes and data.',
  },
  hero: {
    name: 'AI readiness roadmap',
    what: 'For investors: AI across the companies you own',
    title: 'Know which companies are ready for AI, before you fund it.',
    subhead:
      'Every portfolio company now has an AI plan on a slide. We test it against how the company really runs: which processes and data can carry AI today, where it will pay, what must be fixed first, and who approves what the agents do.',
  },
  blocks: [
    {
      // Executive Deck slide 21, read for a portfolio.
      type: 'diagram',
      kind: 'readiness',
      id: 'roadmap',
      name: 'The roadmap',
      what: 'Four stages, from mapping to agents, company by company',
      title: 'From mapped knowledge to agents that run the work.',
      guide: 'Read left to right: each company’s mapped knowledge feeds one hub; the hub forms a live model of the company; agents work on that model. A portfolio company is ready for the next stage only when the one before it holds.',
    },
    {
      type: 'steps',
      id: 'assessment',
      name: 'Assessment',
      what: 'What the portfolio readiness assessment covers',
      title: 'One readiness view across the portfolio.',
      items: [
        { n: '01', title: 'Readiness by company', copy: 'For each company, which processes and data are ready for AI and which must be fixed first, from its own systems.', tag: 'Readiness register per company' },
        { n: '02', title: 'Where AI pays', copy: 'The processes where AI would move margin or cash, sized from each company’s own data, not from a vendor’s case study.', tag: 'Value levers by company' },
        { n: '03', title: 'Controls and human gates', copy: 'Where a named person approves before anything an agent does goes live, so the board can sign off on it.', tag: 'Control specification' },
        { n: '04', title: 'The order of work', copy: 'Which companies go first, which fix their data first, and what the fund rolls out from one company to the next.', tag: 'Portfolio roadmap' },
      ],
    },
    {
      type: 'cards',
      id: 'by-stage',
      name: 'By deal stage',
      what: 'Where the readiness view is used',
      title: 'The same view, at every stage of the deal.',
      columns: 3,
      items: [
        { tag: 'Before you sign', title: 'Test the target’s AI story', copy: 'The AI claims in the management case, checked against the target’s real processes and data.', href: '/investors/due-diligence' },
        { tag: 'During the hold', title: 'An AI plan per company', copy: 'AI initiatives in the value-creation plan, each tied to a process, a KPI and an owner.', href: '/investors/value-creation' },
        { tag: 'Across the fund', title: 'One view for the board and LPs', copy: 'Every company’s AI readiness and progress on one standard view, from live data.', href: '/investors/private-equity' },
      ],
    },
    {
      // Executive Deck slide 18.
      type: 'cards',
      id: 'deployment',
      name: 'Deployment',
      what: 'Where the platform runs',
      title: 'Architecture that meets the data where it lives.',
      columns: 4,
      items: [
        { tag: 'Maximum isolation', title: 'On-premise', copy: 'On each company’s own servers.' },
        { tag: 'Dedicated boundary', title: 'Private cloud', copy: 'In your own tenant.' },
        { tag: 'Selective federation', title: 'Hybrid', copy: 'Workloads split by sensitivity.' },
        { tag: 'Country control', title: 'Sovereign', copy: 'Inside the jurisdiction.' },
      ],
      note: 'A prerequisite for regulated, sensitive and sovereign portfolios.',
    },
  ],
};
