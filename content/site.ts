import type { FooterContent, MegaMenu, SiteContent } from './types';

/** Site-wide copy. Source: inputs/content/AIx2_landing_content.md (LC), "Menu and SEO". */
export const site: SiteContent = {
  url: 'https://aix2.ai',
  locale: 'en-US',
  dir: 'ltr',
  seo: {
    title: 'AIx2 - Operational Diligence and Transformation in the Age of AI',
    description:
      'AIx2 provides operators and investors with operational diligence and transformation including AI transformation, from actual data as-built.',
    shareTitle: 'AIx2 - Operational Diligence and Transformation in the Age of AI',
    shareDescription:
      'AIx2 provides operators and investors with operational diligence and transformation including AI transformation, from actual data as-built.',
  },
  announcement: {
    label: 'Watch the latest Stanford AI & Investment session',
    href: '/insights/stanford-ai-investment-series',
  },
  // CC-68 (user, 2026-11-02): the One-Week Proof named on the first screen, in the top bar of every page.
  announcementProof: {
    badge: '1 week',
    label: 'Start with a one-week proof on one process',
    short: 'Start with a one-week proof',
    href: '/#one-week-proof',
  },
  nav: [
    { label: 'For companies', href: '/companies', hasMenu: true },
    { label: 'For investors', href: '/investors', hasMenu: true },
    { label: 'How it works', href: '/how-it-works', hasMenu: true },
    { label: 'Customers', href: '/proof', hasMenu: false },
    { label: 'Consultancy', href: '/consultancy', hasMenu: true },
    { label: 'Insights', href: '/insights', hasMenu: true },
    { label: 'Company', href: '/company/team', hasMenu: true },
  ],
  // CC-53 (user, 2026-11-01): one simple call to action everywhere, straight to the team calendar.
  navButton: { label: 'Book a call', href: 'https://calendar.app.google/NFXFr2FhHQkvWNMM6' },
  /** Homepage sections as drawing sheets, in LC order (section 0, the announcement bar, is not a sheet). */
  sheets: [
    { id: 'hero', number: 1, name: 'As built, not as drawn' },
    { id: 'start', number: 2, name: 'Start where you are' },
    { id: 'red-lines', number: 3, name: 'Red lines' },
    { id: 'how', number: 4, name: 'How we get the as-built' },
    { id: 'why', number: 5, name: 'Why AIx2' },
    { id: 'lenses', number: 6, name: 'Two lenses' },
    { id: 'proof', number: 7, name: 'Customers' },
    { id: 'capital', number: 8, name: 'Why capital listens' },
    { id: 'fit', number: 9, name: 'Is AIx2 right for you?' },
    { id: 'trust', number: 10, name: 'Trust' },
    { id: 'insights', number: 11, name: 'Insights' },
    { id: 'faq', number: 12, name: 'Questions' },
    { id: 'start-sprint', number: 13, name: 'Bring us one process' },
  ],
};

/**
 * Mega menus, verbatim from LC "Menu and SEO". Need and industry pages are Phase 2: until then
 * they link to the related case or to Contact (docs/sitemap.md). Essays and the glossary stay
 * out of the menu until they exist (OQ-23). `summary` is each page's hero line from SS, verbatim.
 */
export const menus: MegaMenu[] = [
  {
    id: 'companies',
    label: 'For companies',
    href: '/companies',
    // CC-30: the user's line (2026-10-30), tidied.
    summary: 'Understand your company as it actually runs, from your own data, processes and strategy. Then implement the optimal design and become AI-first.',
    columns: [
      {
        title: 'By goal',
        items: [
          // CC-29: the operator offers as named in the Plug and Play Summit deck (slide 8) and the user's list.
          { label: 'Diagnosis: see how you really run', href: '/companies/diagnosis' },
          { label: 'Optimal design of processes and data governance', href: '/companies/optimal-design' }, // CC-45
          { label: 'Connecting strategy to data and processes', href: '/companies/strategy' }, // CC-45
          { label: 'Monitoring implementation', href: '/companies/monitoring' },
          { label: 'AI readiness roadmap', href: '/companies/ai-readiness' },
        ],
      },
      {
        title: 'By industry',
        items: [
          // CC-31/CC-38: industry pages from the user's slides (2026-10-30). IT and Software removed.
          { label: 'Manufacturing', href: '/industries/manufacturing' },
          { label: 'Healthcare and hospitals', href: '/industries/healthcare' },
          { label: 'Pharmaceuticals and pharmacy', href: '/industries/pharma' },
          { label: 'Power and utilities', href: '/industries/utilities' },
          { label: 'Oil and gas', href: '/industries/oil-and-gas' },
          { label: 'Insurance', href: '/industries/insurance' },
          { label: 'Banking', href: '/industries/banking' },
          { label: 'Supply chain', href: '/industries/supply-chain' },
          { label: 'Technology distribution & export', href: '/proof/technology-reseller-frankfurt' },
        ],
      },
    ],
    featured: { label: 'The One-Week Proof: one process, as built, in one week', href: '/companies#one-week-proof' }, // CC-66
  },
  {
    id: 'investors',
    label: 'For investors',
    href: '/investors',
    summary:
      'For private equity, holdings, family offices, LPs and state portfolios that need to know how a company really runs, before they price it and after they own it.',
    columns: [
      {
        // CC-32: the investor offers as named in the Plug and Play Summit deck (slide 8); Exit readiness removed (user).
        title: 'By deal stage',
        items: [
          { label: 'Due diligence', href: '/investors/due-diligence' },
          { label: 'M&A', href: '/investors/m-and-a' },
          { label: 'Value creation', href: '/investors/value-creation' },
          { label: 'AI readiness roadmap', href: '/investors/ai-readiness' }, // CC-80
        ],
      },
      {
        title: 'By investor',
        items: [
          { label: 'Private equity and growth funds', href: '/investors/private-equity' },
          { label: 'Holdings and family offices', href: '/investors/family-offices' },
          { label: 'LPs and endowments', href: '/investors/lps-and-endowments' },
          { label: 'Sovereign and state portfolios', href: '/investors/sovereign' },
        ],
      },
    ],
    featured: { label: 'Portfolio X-ray: see where value leaks across the companies you own', href: '/investors#portfolio-xray' },
  },
  {
    id: 'how',
    label: 'How it works',
    href: '/how-it-works',
    summary: 'Five steps, run inside your organization by forward-deployed engineers and strategy consultants, with your people signing off at every one.',
    columns: [
      {
        // CC-33: the five steps as named on the deck's case slide (vShare slide 6).
        title: 'Five Step Method',
        items: [
          { label: 'Collecting Data', href: '/how-it-works#five-steps' },
          { label: 'Mapping Processes and Data Flow', href: '/how-it-works#five-steps' },
          { label: 'Gap Analysis', href: '/how-it-works#five-steps' },
          { label: 'Optimal Design', href: '/how-it-works#five-steps' },
          { label: 'Implementation Live Assurance', href: '/how-it-works#five-steps' },
        ],
      },
      {
        // CC-34: Paradigm replaces Atlas (user, 2026-10-30): how we look at the work, in five points.
        title: 'Paradigm',
        items: [
          { label: 'From actual data', href: '/paradigm#actual-data' },
          { label: 'Continuous and real time', href: '/paradigm#real-time' },
          { label: 'End to end, until the result', href: '/paradigm#end-to-end' },
          { label: 'Delivered as a service', href: '/paradigm#as-a-service' },
          { label: 'On-premise, with open models', href: '/paradigm#on-premise' },
        ],
      },
      {
        title: 'Trust',
        items: [
          { label: 'Trust center', href: '/trust' },
          { label: 'Security', href: '/trust#security' },
          { label: 'Privacy', href: '/trust#privacy' },
          { label: 'Responsible AI', href: '/trust#ai-governance' },
        ],
      },
    ],
  },
  { id: 'proof', label: 'Customers', href: '/proof', columns: [] },
  {
    id: 'consultancy',
    label: 'Consultancy',
    href: '/consultancy',
    summary:
      'When you need more than software: strategy design, transformation including AI transformation, and implementation, by strategy consultants and PhD engineers who stay until it holds.',
    columns: [
      {
        title: 'What we do',
        items: [
          { label: 'Strategy design', href: '/consultancy#strategy-design' },
          { label: 'AI transformation', href: '/consultancy#ai-transformation' },
          { label: 'Operating model and organization', href: '/consultancy#operating-model-and-organization' },
          { label: 'Implementation and transformation office', href: '/consultancy#implementation-and-transformation-office' },
        ],
      },
      {
        title: 'Working with us',
        items: [
          { label: 'Who you work with', href: '/consultancy#people-title' },
          { label: 'How an engagement runs', href: '/consultancy#engagement' },
          { label: 'Atlas or the full consultancy', href: '/consultancy#compare-title' },
        ],
      },
    ],
  },
  {
    id: 'insights',
    label: 'Insights',
    href: '/insights',
    columns: [
      {
        title: 'Insights',
        items: [
          { label: 'Stanford AI & Investment Series', href: '/insights/stanford-ai-investment-series' },
          { label: 'Keynotes and conferences', href: '/insights#keynotes' },
          { label: 'Fundraising 2025 survey', href: '/insights/research/fundraising-2025' },
          { label: 'Podcasts and lectures', href: '/insights#podcasts-lectures' },
        ],
      },
    ],
  },
];

/** Footer, verbatim from LC (Start: footer). Disclaimer O-04, line O-05. */
export const footer: FooterContent = {
  tagline: 'AIx2 · The company as built, not as drawn.',
  columns: [
    { label: 'For companies', href: '/companies' },
    { label: 'For investors', href: '/investors' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Customers', href: '/proof' },
    { label: 'Insights', href: '/insights' },
    { label: 'Company', href: '/company/team' },
    { label: 'Trust center', href: '/trust' },
    { label: 'Careers', href: '/company/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy', href: '/legal/privacy' },
    { label: 'Terms', href: '/legal/terms' },
    { label: 'Imprint', href: '/legal/imprint' },
    { label: 'Cookie settings', href: '/legal/cookies' },
  ],
  disclaimer:
    'AIx2 provides operational and technology due diligence. We do not provide investment-banking or brokerage services, and we do not guarantee fundraising outcomes or investment returns.',
  line: "Atlas is AIx2's evidence platform. © 2026 AIx2.",
};

/** CC-53: the one call to action on every page (footer strip, header button, contact page). */
export const contactCta = {
  title: 'Bring us one process.',
  line: 'One process, one week: see it as built, with the first findings and what they are worth. If it is useful, we continue.', // CC-66
  book: { label: 'Book a 30-minute call', href: 'https://calendar.app.google/NFXFr2FhHQkvWNMM6' },
  emailLabel: 'Or e-mail',
  email: 'info@aix2.ai',
};
