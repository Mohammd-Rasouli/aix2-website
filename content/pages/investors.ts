import type { PageContent } from './types';

/** For investors. Source: SS "For investors". Capital-raising and "Trusted by" copy are not used. */
export const investors: PageContent = {
  route: '/investors',
  seo: {
    title: 'AIx2 · For investors',
    description:
      'Diligence for private equity, holdings, family offices, LPs and state portfolios that need to know how a company really runs, before they price it and after they own it.',
  },
  hero: {
    name: 'For investors',
    what: 'Evidence at every deal stage, for every kind of investor', // CC-65
    title: 'Diligence the company as built, not as pitched.',
    subhead:
      'For private equity, holdings, family offices, LPs and state portfolios that need to know how a company really runs, before they price it and after they own it.',
  },
  blocks: [
    {
      type: 'stats',
      id: 'why-now',
      name: 'Why now',
      what: 'Market figures, each with its publisher',
      title: 'Value now has to come from operations.',
      facts: ['M-05', 'M-06', 'M-03', 'M-07'],
      items: [
        {
          figure: 'About seven years',
          text: 'Holding periods',
          source: 'Bain, 2026',
          href: 'https://www.bain.com/insights/outlook-gaining-traction-global-private-equity-report-2026',
          facts: ['M-05'],
        },
        {
          figure: 'About 32,000 companies',
          text: 'worth about $3.8T awaiting exit',
          source: 'Bain, 2026',
          href: 'https://www.bain.com/insights/outlook-gaining-traction-global-private-equity-report-2026',
          facts: ['M-06'],
        },
        {
          figure: 'Nearly one in four',
          text: 'deals runs into risks diligence missed',
          source: 'EY, 2025',
          href: 'https://www.fuld.com/the-evolution-of-pe-value-creation-critical-insights-from-eys-2025-benchmark-survey/',
          facts: ['M-03'],
        },
        {
          figure: '68%',
          text: 'of surveyed US buyout professionals rely on outside advisors for value creation', // CC-46
          source: 'L.E.K., 2026',
          href: 'https://www.lek.com/sites/default/files/2026-07/pe-pulse-2026-ei.pdf',
          facts: ['M-07'],
        },
      ],
    },
    {
      // CC-65 (user, 2026-11-02): each deal stage has its own page (content/pages/investorTopics.ts).
      type: 'investorHub',
      id: 'by-deal-stage',
      name: 'By deal stage',
      what: 'What you get at each point in the deal',
      title: 'Evidence at every stage of the deal.',
      group: 'stage',
    },
    {
      type: 'investorHub',
      id: 'by-investor',
      name: 'By investor',
      what: 'What we do, by type of investor',
      title: 'Built for how you invest.',
      group: 'investor',
    },
    {
      // CC-80: the AI readiness roadmap for investors, linked from the hub.
      type: 'cards',
      id: 'ai-readiness',
      name: 'AI readiness roadmap',
      what: 'AI across the companies you own',
      title: 'Know which companies are ready for AI, before you fund it.',
      columns: 2,
      items: [
        { tag: 'Readiness by company', title: 'Which processes and data can carry AI today', copy: 'And which must be fixed first, from each company’s own systems.', href: '/investors/ai-readiness' },
        { tag: 'Roadmap', title: 'Where AI pays, and in what order', copy: 'Value levers by company, controls and human gates, and the order of work across the portfolio.', href: '/investors/ai-readiness#assessment' },
      ],
    },
    {
      // No contact button here: the footer carries the one call to action (CC-53).
      type: 'prose',
      id: 'portfolio-xray',
      name: 'Portfolio X-ray',
      what: 'A light scan across your portfolio',
      title: 'See where value leaks across the companies you own.',
      paragraphs: [
        'A light scan of several portfolio companies, ranked by where value leaks and what to fix first: margins, cash, controls and the work that runs outside the systems.',
        'It is the quickest way in for a fund or a holding: read-only access, a few weeks, and one comparable view of the companies you own.',
      ],
    },
    {
      type: 'cards',
      id: 'why-capital-listens',
      name: 'Why capital listens',
      what: 'The rooms where we speak and teach',
      title: 'Where we spend our time.',
      columns: 3,
      facts: ['S-01', 'P-09', 'P-08'],
      items: [
        { title: 'Stanford AI & Investment Series', href: '/insights/stanford-ai-investment-series', dependsOn: 'OQ-03' },
        { title: 'SuperReturn and other investor conferences', href: '/insights#keynotes' },
        { title: 'Lectures at Columbia, Wharton and NYU Stern', href: '/insights#podcasts-lectures', dependsOn: 'OQ-22' },
      ],
    },
    {
      type: 'list',
      id: 'deal-teams',
      name: 'Deal teams',
      what: 'How we work to a deal timeline',
      title: 'Built for deal timelines.',
      style: 'check',
      items: ['Read-only and under NDA', 'A one-week proof before you commit', 'Outputs written for the investment committee', 'Alongside your other advisors'],
    },
  ],
};
