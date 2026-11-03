import type { CaseContent, ComparisonCell, FaqItem, FindingContent, FormField, HeroContent, RedLinesContent, SectionFraming, SelectorCard, StepContent } from './types';

/**
 * Homepage copy. English text is verbatim from LC (inputs/content/AIx2_landing_content.md).
 * Changes are proposed in docs/copy-changes.md, never made here silently.
 * Every number traces to docs/facts.md through `facts`.
 */

// Measurement labels, verbatim from LC (Proof section), first sentence where the label has two.
const IST_MEASURED = 'Measured by the client: May–Oct 2026 vs the 12 months to Dec 2025.';
const FRA_MEASURED = 'Measured by the client’s finance lead: Mar–Sep 2026 vs the 12 months to Nov 2025.';

export const hero: HeroContent = {
  eyebrow: 'Due diligence and transformation, from a company’s own data',
  headline: 'See the company as built, not as drawn.',
  subhead:
    // CC-78: the user's sentence (2026-11-02), verbatim.
    'We map how a company really runs — systems, spreadsheets, paper and the shop floor — Then we analyze the gap and design the change in the age of AI, and stay until it holds.',
  doors: [
    { id: 'company', label: 'I run a company', href: '/companies' },
    { id: 'investor', label: 'I invest in companies', href: '/investors' },
  ],
  // CC-56: no recording of the Summit talk exists; the channel holds the Stanford sessions (user, 2026-11-01).
  // CC-66: the first step, on the first screen.
  proofLink: { label: 'Start with a one-week proof', href: '#one-week-proof' }, // CC-67
  talkLink: { label: 'Heard us speak? Watch the talk', href: 'https://www.youtube.com/@DrMohammadRasouli' },
  annotations: [
    {
      id: 'a1',
      delta: 1,
      figure: { value: 3 },
      text: '3 variants of one official order route',
      foundAt: 'Industrial manufacturer, Istanbul',
      facts: ['IST-05'],
    },
    {
      id: 'a2',
      delta: 2,
      figure: { value: 26, suffix: '%' },
      text: '26% of engineering changes agreed outside the change register',
      foundAt: 'Industrial manufacturer, Istanbul',
      facts: ['IST-06'],
    },
    {
      id: 'a3',
      delta: 3,
      figure: { value: 45, suffix: '%' },
      text: '45% of rebate-eligible deals registered too late',
      foundAt: 'Technology reseller, Frankfurt',
      facts: ['FRA-04'],
    },
  ],
  // Alt text for the drawing. New copy (no LC source); checked against the avoid-words list.
  drawingDescription:
    'A drawing of one company’s official order route: sales, CRM, ERP, engineering, purchasing, production, test bench, shipping and finance, joined by clean lines. Scrolling turns it into the company as built: the volumes rise, work moves by e-mail, chat, Excel, paper and the shop floor, and three findings are marked in red ink.',
  drawingLabels: {
    sales: 'Sales',
    crm: 'CRM',
    erp: 'ERP',
    vendor: 'Vendor portal',
    register: 'Change register',
    eng: 'Engineering',
    purch: 'Purchasing',
    prod: 'Production',
    test: 'Test bench',
    ship: 'Shipping',
    fin: 'Finance',
  },
  flowLabels: {
    email: 'E-mail',
    chat: 'Chat',
    excel: 'Excel',
    paper: 'Paper',
    floor: 'Shop floor',
  },
  // NEW (CC-11): the lens. Small labels shown only inside it, and the hint before the pointer moves.
  lens: {
    tag: 'As built',
    hint: 'Move the pointer over the drawing to see the company as built', // CC-74
    labels: { routes: '3 routes', bypassed: 'Bypassed' },
  },
  // NEW (CC-12): the key beside the model, so a visitor knows what they are looking at.
  /** Captions beside the model as it plays (desktop). NEW (CC-19): the user asked what the model shows. */
  // CC-61 (user, 2026-11-02): the title over the five captions while the scan plays.
  storyTitle: 'Five Steps from As-Built Data to Implementing Optimal Design',
  story: [
    // CC-52: one caption per step of the Five Step Method (user, 2026-11-01: the hero showed only three).
    {
      id: 'collect',
      kicker: 'Step 1 of 5 · Collecting Data',
      title: 'We start from your own data.',
      line: 'Read-only connections to the systems you already run, plus the work that never reaches them: spreadsheets, e-mail, chat and paper.',
    },
    {
      id: 'map',
      kicker: 'Step 2 of 5 · Mapping Processes and Data Flow',
      title: 'We rebuild the company as built.',
      line: 'Each block is a team, a system or a supplier. The lit lines are the routes work and data really take between them.',
    },
    {
      id: 'finding',
      kicker: 'Step 3 of 5 · Gap Analysis',
      title: 'Red lines: where the two versions differ.',
      line: 'Each red mark is a finding, with a count, an owner and the evidence.',
    },
    {
      id: 'design',
      kicker: 'Step 4 of 5 · Optimal Design',
      title: 'We design the fix for each red line.',
      line: 'Target processes, controls and approval gates, matched to best practice. Your leadership decides.',
    },
    {
      id: 'live',
      kicker: 'Step 5 of 5 · Implementation Live Assurance',
      title: 'Then every new case is checked, live.',
      line: 'Drift surfaces as it happens, and named owners approve each fix.',
    },
  ],
  modelKey: {
    title: 'One company, mapped from its own data',
    line: 'Teams, systems and suppliers, and the routes work takes between them.',
    rows: [
      { id: 'drawn', term: 'As drawn', text: 'the official process' },
      { id: 'built', term: 'As built', text: 'how work really runs' },
      { id: 'finding', term: 'Red line', text: 'a finding: where the two differ' },
    ],
  },
  // LC hero proof bar. Stat 2 is LC's fallback (Audit evidence, Istanbul): the Europe case was removed (user, 2026-10-30).
  proof: [
    {
      id: 'on-time',
      label: 'On-time delivery',
      from: { value: 75, suffix: '%' },
      to: { value: 95, suffix: '%' },
      client: 'Industrial manufacturer, Istanbul',
      measurement: IST_MEASURED,
      visual: 'gain',
      facts: ['IST-01'],
    },
    {
      id: 'audit',
      label: 'Audit evidence',
      from: { value: 15, suffix: ' working days' }, // word units are set smaller (CC-02)
      to: { value: 1, suffix: ' day' },
      client: 'Industrial manufacturer, Istanbul',
      measurement: IST_MEASURED,
      visual: 'collapse',
      facts: ['IST-02'],
    },
    {
      id: 'export',
      label: 'Export orders screened before the quote',
      from: { value: 40, suffix: '%' },
      to: { value: 100, suffix: '%' },
      client: 'Technology reseller, Frankfurt',
      measurement: FRA_MEASURED,
      visual: 'fill',
      facts: ['FRA-01'],
    },
  ],
  countries: 'Engagements in Germany, Turkey, Canada and the United States.',
};

export const redLines: RedLinesContent = {
  eyebrow: 'Red lines',
  cardTag: 'Finding {n} of {total}', // NEW (CC-12)
  headline: 'Every company has two versions. Decisions are made on the drawn one.',
  body: 'The org chart shows who reports to whom. The process manual shows how work should flow. The ERP shows what was recorded. The company as built — approvals in chat, changes agreed by e-mail, counts typed from memory at the end of a shift — runs somewhere else. Strategy, investment and AI decisions fail in that gap.',
  cards: [
    {
      id: 'rl-1',
      delta: 1,
      title: 'One official process. Three real ones.',
      line: 'The documented order route ran in three variants, and most lateness was waiting, not work.',
      foundAt: 'Industrial manufacturer, Istanbul',
      figure: { value: 3 },
      fragment: 'variants',
      facts: ['IST-05', 'IST-08'],
    },
    {
      id: 'rl-2',
      delta: 2,
      title: 'Decisions that never reach a system.',
      line: '26% of engineering changes were agreed outside the change register.', // LC fallback (Europe case removed)
      foundAt: 'Industrial manufacturer, Istanbul',
      figure: { value: 26, suffix: '%' },
      fragment: 'offSystem',
      facts: ['IST-06'],
    },
    {
      id: 'rl-3',
      delta: 3,
      title: 'Controls that are assumed, not proven.',
      line: '“Protected” was reported for a third of managed clients without evidence.',
      foundAt: 'IT and managed-services network, Canada',
      figure: { value: 34, suffix: '%' },
      fragment: 'unproven',
      facts: ['CAN-05'],
    },
    {
      id: 'rl-4',
      delta: 4,
      title: 'Know-how in two heads.',
      line: '78% of technical quote requests could only be answered by two senior engineers.',
      foundAt: 'Industrial manufacturer, Istanbul',
      figure: { value: 78, suffix: '%' },
      fragment: 'twoHeads',
      facts: ['IST-07'],
    },
    {
      id: 'rl-5',
      delta: 5,
      title: 'Money leaking between systems.',
      line: '45% of rebate-eligible deals were registered too late to earn the rebate.',
      foundAt: 'Technology reseller, Frankfurt',
      figure: { value: 45, suffix: '%' },
      fragment: 'leak',
      facts: ['FRA-04'],
    },
    {
      id: 'rl-6',
      delta: 6,
      title: 'Evidence that takes weeks.',
      line: 'Each certification audit took three weeks of evidence-gathering.', // CC-04
      foundAt: 'Industrial manufacturer, Istanbul',
      figure: { value: 3, suffix: ' weeks' },
      fragment: 'weeks',
      facts: ['IST-02'],
    },
  ],
  highlight: ['Interviews tell you what people remember.', 'Evidence tells you what was built.'],
  marketStats: [
    {
      id: 'm-bain',
      figure: '88%',
      text: 'of business transformations fail to achieve their original ambitions.',
      source: 'Bain & Company, 2024',
      href: 'https://bain.com/about/media-center/press-releases/2024/88-of-business-transformations-fail-to-achieve-their-original-ambitions-those-that-succeed-avoid-overloading-top-talent/',
      facts: ['M-01'],
    },
    {
      id: 'm-bcg',
      figure: '~70%',
      text: 'of the return on AI investment comes from people, organization and processes, BCG finds; about 20% comes from technology and 10% from algorithms.', // CC-46
      source: 'BCG, 2026',
      href: 'https://www.bcg.com/assets/2025/executive-perspectives-ai-first-companies-private-equity.pdf',
      facts: ['M-02'],
    },
    {
      id: 'm-ey',
      figure: '~1 in 4',
      text: 'private equity deals runs into risks that due diligence did not identify.',
      source: 'EY, 2025',
      href: 'https://www.fuld.com/the-evolution-of-pe-value-creation-critical-insights-from-eys-2025-benchmark-survey/',
      facts: ['M-03'],
    },
  ],
  endLink: { label: 'See how we find it', href: '/how-it-works' },
};

/** The finding-card example from BRIEF §4 (CAN-06). OQ-02 answered 2026-10-29: clients consented. */
export const findingExample: FindingContent = {
  id: 'can-06',
  count: { value: 9420 },
  of: { value: 61000, unit: 'accounts' },
  text: 'MFA not enforced on 9,420 of 61,000 accounts',
  severity: 'Critical',
  owner: 'Security lead',
  source: 'IT and managed-services network, Canada',
  facts: ['CAN-06'],
};

/**
 * What each section is, in plain words (CC-12). `name` is LC's section name or eyebrow;
 * `question` is LC's "Page path" column, translated; `what` and `guide` are new copy.
 * Keys are the sheet ids in content/site.ts.
 */
export const framing: Record<string, SectionFraming> = {
  hero: { name: 'As built, not as drawn', what: 'Due diligence and transformation, from a company’s own data', question: 'What do they do, and is it for me?' },
  start: { name: 'Start where you are', what: 'Where to begin, for your role and your goal', question: 'Where do I start, in my situation?' },
  'red-lines': {
    name: 'Red lines',
    what: 'Problems we found inside client companies',
    question: 'Do they know my problem?',
    guide: 'Six findings from real engagements. On each card, the red mark shows where the company as built departed from its drawing.',
  },
  how: { name: 'How we get the as-built', what: 'Our Five Step Method', question: 'With what data, what method and which people?' },
  why: { name: 'Why AIx2', what: 'How we differ from consultants and from software', question: 'How are they different from a consultancy or a software vendor?' },
  lenses: {
    name: 'Two lenses',
    what: 'The same evidence, for operators and for investors',
    question: 'Why does one company work on both transformation and capital?',
    guide: 'Switch the lens to see what each side looks for in the same company.',
  },
  proof: { name: 'Customers', what: 'Client cases, with the results each client measured', question: 'Did it really work?' },
  capital: { name: 'Why capital listens', what: 'Who we are, and the rooms where investors hear us', question: 'Who are these people?' },
  fit: { name: 'Is AIx2 right for you?', what: 'The conditions we check before we start', question: 'Is it right for us?' },
  trust: { name: 'Trust', what: 'How your data stays safe', question: 'Does our data stay safe?' },
  insights: { name: 'Insights', what: 'Talks, sessions and essays to start with', question: 'I’m not ready to call. What should I see?' },
  faq: { name: 'Questions', what: 'What people ask before the first call', question: 'And what if…?' },
  'start-sprint': { name: 'Start', what: 'Your first step, and what it gives you', question: 'What is the first step?' },
};

/**
 * Track record (maturity): where AIx2 has worked and spoken. Copy from LC ("Why capital
 * listens", Proof client lines); conference names and years from docs/facts.md T-xx (✅ only).
 * New strings with no LC source are marked NEW and listed in docs/copy-changes.md (CC-10).
 */
export const trackRecord = {
  eyebrow: 'Why capital listens',
  headline: 'Senior people, in the rooms where capital decides.',
  subhead:
    'Our team has done this work inside some of the world’s most demanding organizations. Our founder co-hosts a Stanford series where investors discuss AI and investment, and speaks at the industry’s main investor conferences.',
  workedTitle: 'Where we have worked', // NEW
  countries: 'Engagements in Germany, Turkey, Canada and the United States.',
  clients: [
    {
      place: 'Istanbul',
      who: 'Industrial manufacturer · explosion-protected equipment · ~85 people',
      headline: 'Every unit provably inside its certificate. Orders on time.',
      facts: ['IST-12'],
    },
    {
      place: 'Frankfurt',
      who: 'Technology reseller and IoT designer · ~50 people',
      headline: 'Export risk screened before every quote. Rebates protected.',
      facts: ['FRA-07'],
    },
    {
      place: 'Canada',
      who: 'IT and managed-services network · 42 locations',
      headline: 'From assumed to proven, across 42 locations.',
      facts: ['CAN-07'],
    },
  ],
  spokenTitle: 'Where we have spoken', // NEW
  series: {
    name: 'Stanford AI & Investment Series',
    line: 'Co-organized with Stanford student VC and private equity clubs, with chief investment officers, founders and fund managers as guests.',
    facts: ['S-01', 'S-02'],
  },
  conferencesLead: 'Speaker at SuperReturn and other investor conferences.',
  conferences: [
    { name: 'SuperReturn International', year: 2024, facts: ['T-01'] },
    { name: 'SuperReturn US West', year: 2024, facts: ['T-04'] },
    { name: 'PERE America Forum', year: 2024, facts: ['T-08'] },
    { name: 'PERE Asia Summit', year: 2024, facts: ['T-10'] },
    { name: 'Finovate Fall', year: 2024, facts: ['T-07'] },
    { name: 'Responsible Investment Forum New York', year: 2024, facts: ['T-12'] },
    { name: 'Professional Pensions Conference', year: 2024, facts: ['T-14'] },
    { name: 'Proskauer Funds in Focus', year: 2024, facts: ['T-17'] },
    { name: 'SuperReturn Middle East', year: 2023, facts: ['T-02'] },
    { name: 'GAIM Ops West', year: 2023, facts: ['T-06'] },
  ],
  mediaTitle: 'Heard on', // NEW
  media: ['Private Equity Value Creation Podcast', 'The Derivative', 'Absolute Return Podcast', 'AIMA · The Long Short', 'Forbes', 'Chief Investment Officer'],
};

/** How we get the as-built (LC). "8–12 weeks" is X-02. */
export const steps = {
  eyebrow: 'How we get the as-built',
  headline: 'Five steps. From the company as drawn to a change that holds.',
  subhead:
    'The same method for one process or a whole company, run by forward-deployed engineers and strategy consultants inside your organization.',
  items: [
    {
      n: '01',
      title: 'Collecting Data',
      copy: 'Read-only connections to the systems you already run, plus the work that never reaches them: spreadsheets, e-mail, chat and paper. Where nobody records the data today, we create it.',
      tag: 'No data? We create it.',
    },
    {
      n: '02',
      title: 'Mapping Processes and Data Flow',
      copy: 'We rebuild how work really flows, case by case, how data moves through the business, and where AI infrastructure and GPU spend go, with an owner at every link.',
      tag: 'The org chart is the drawing. The as-built map is the evidence.',
    },
    {
      n: '03',
      title: 'Gap Analysis',
      copy: 'We test what really happens against your own rules, best practice and the law. Every finding carries a count, the evidence and a named owner.',
      tag: 'Full population, not samples.',
    },
    {
      n: '04',
      title: 'Optimal Design',
      copy: 'We match each part of your business to documented best-practice models and design the target processes, controls and approval gates. Your leadership decides.',
      tag: 'Two starting points: as built, or from your documents.',
    },
    {
      n: '05',
      title: 'Implementation Live Assurance',
      copy: 'Checks run on every new case, so drift surfaces as it happens. Your teams run the controls, or we run them for you.',
      tag: 'AI proposes. Named owners approve.',
    },
  ] as StepContent[],
  line: 'Every engagement starts with a one-week proof on one process. A full engagement takes 8–12 weeks.', // CC-66
  link: { label: 'See the full method', href: '/how-it-works' },
};

/** Two lenses (LC). */
export const lenses = {
  eyebrow: 'Two lenses',
  headline: 'One company as built. Two decisions.',
  subhead:
    'Operators use it to decide what to fix. Investors use it to decide what it’s worth. It is the same evidence, so both sides of the table can trust it.',
  operator: { label: 'Operator', line: 'Bottlenecks, rework, waiting time and the fix.' },
  investor: { label: 'Investor', line: 'Risks, value levers, red flags and what to verify before signing.' },
};

/** Proof (LC), section head. */
export const proofHead = {
  eyebrow: 'Customers',
  headline: 'Results our clients measured themselves.',
  subhead: 'Every number comes from the client’s own systems, with the measurement window stated. Where a value is modelled, we say so.',
  endLink: { label: 'See all customers', href: '/proof' },
};

/** Customer cases, in the user's order (2026-10-31): largest and most important clients first. */
export const cases: CaseContent[] = [
  {
    id: 'canada',
    name: 'MicroAge Canada',
    client: 'IT and managed-services network · Canada · 42 locations',
    headline: 'From assumed to proven, across 42 locations.',
    stats: [
      { label: 'Clients with proven protection', from: '66%', to: '100%' },
      { label: 'Security questionnaires', from: '6 h', to: '45 min' },
      { label: 'New-location onboarding', from: '6 weeks', to: '2 weeks' },
    ],
    how: '11 national sources and 42 local setups in one model, in English and French, hosted in Canada. Kept as a managed service.',
    label: 'From the network’s own ticketing, monitoring and billing records; baseline Nov 2025, readings at day 90. Value figures not claimed.',
    href: '/proof/it-network-canada',
    facts: ['CAN-01', 'CAN-02', 'CAN-03', 'CAN-07', 'CAN-08'],
  },
  {
    id: 'istanbul',
    name: 'Northexzone',
    client: 'Industrial manufacturer · Istanbul · explosion-protected equipment · ~85 people',
    headline: 'Every unit provably inside its certificate. Orders on time.',
    stats: [
      { label: 'On-time delivery', from: '75%', to: '95%' },
      { label: 'Audit evidence', from: '15 working days', to: '1 day' },
      { label: 'Danger-zone entries per 1,000 hours', from: '4.8', to: '0.9' },
      { label: 'Major audit findings', from: '3', to: '0' },
    ],
    how: '12 sources, three years of paper forms and vision at six machines, all on the client’s own servers. Kept as a managed service.',
    label: 'Measured by the client: May–Oct 2026 vs the 12 months to Dec 2025. Safety against a four-week shadow baseline.',
    href: '/proof/industrial-manufacturer-istanbul',
    facts: ['IST-01', 'IST-02', 'IST-03', 'IST-04', 'IST-09', 'IST-10', 'IST-11'],
  },
  {
    id: 'mirr-oils',
    name: 'Mirr Oils',
    client: 'Lubricants and greases manufacturer · UAE, German roots · ~300 people',
    // CC-59: a story written for the user (2026-11-01) from the company's public profile and the method; figures MO-01 to MO-07, OQ-42.
    headline: 'Export orders shipped in 8 days, not 14. Document errors from 11% to 2%.',
    stats: [
      { label: 'Export orders, request to dispatch', from: '14 days', to: '8 days' },
      { label: 'Export shipments with a document error', from: '11%', to: '2%' },
      { label: 'Batches needing a re-test or re-blend', from: '6.5%', to: '2%' },
    ],
    how: 'A 12-week due diligence of the path from distributor order to dispatch: 24 findings, each with an owner. The company’s own teams built the controls.',
    label: 'Measured by Mirr Oils’ finance lead and quality manager: Feb–Jul 2026 vs the 12 months to Sep 2025.',
    href: '/proof/lubricants-manufacturer-uae',
    facts: ['MO-01', 'MO-02', 'MO-03', 'MO-07'],
  },
  {
    id: 'welektrik',
    name: 'Welektrik',
    client: 'Electrical and Ex-proof equipment supplier · Istanbul and Balıkesir · ~50 people',
    // CC-58: written as a success scenario at the user's request (2026-11-01); figures WEL-11 to WEL-16, OQ-41.
    headline: 'Promised dates kept: 68% to 90%. Every process owned.',
    stats: [
      { label: 'Orders delivered on the promised date', from: '68%', to: '90%' },
      { label: 'Dispatches with a complete documentation file', from: '62%', to: '96%' },
      { label: 'Quote to order', from: '9 days', to: '4 days' },
    ],
    how: 'A two-week readiness check, then a 12-week due diligence: 21 findings, each with an owner. Welektrik’s own teams built the controls.',
    label: 'Measured by Welektrik’s finance lead: Jan–Apr 2026 vs the 12 months to Sep 2025.',
    href: '/proof/electrical-equipment-supplier-istanbul',
    facts: ['WEL-11', 'WEL-12', 'WEL-13', 'WEL-16'],
  },
  {
    id: 'frankfurt',
    name: 'Futura-Tec',
    client: 'Technology reseller and IoT designer · Frankfurt · ~50 people',
    headline: 'Export risk screened before every quote. Rebates protected.',
    stats: [
      { label: 'Export orders screened before the quote', from: '40%', to: '100%' },
      { label: 'Vendor deals registered before quotation', from: '55%', to: '95%' },
      { label: 'Delivery to invoice', from: '21 days', to: '7 days' },
    ],
    how: 'One 8-week due diligence: 24 findings, each with a control specification. The client’s own teams built the controls into their CRM.',
    label: 'Measured by the client’s finance lead: Mar–Sep 2026 vs the 12 months to Nov 2025.',
    href: '/proof/technology-reseller-frankfurt',
    facts: ['FRA-01', 'FRA-02', 'FRA-03', 'FRA-06', 'FRA-07'],
  },
  {
    id: 'edu-journey',
    name: 'Edu Journey',
    client: 'Dental education and advanced-therapeutics consulting · Texas · ~20 people',
    headline: 'A twenty-person company with many processes, mapped end to end for the first time.',
    stats: [
      { label: 'Faculty profiles linked to a course or event', from: '3 of 23', to: '23 of 23 (target)' },
      { label: 'Published home-page figures traced to records', from: '0 of 4', to: '4 of 4 (target)' },
      { label: 'Risks', from: 'Unranked', to: '18 findings ranked, with owners' },
    ],
    how: 'One ten-week due diligence across 8 sources, both divisions mapped in parallel. Our first engagement, and the method every later one has used.',
    label: 'Found in the due diligence, October–December 2025. Targets set in the report; delivery is the company’s and is not claimed.',
    href: '/proof/dental-education-consulting-texas',
    facts: ['EDU-01', 'EDU-02', 'EDU-05'],
  },
  {
    id: 'europe',
    name: 'EPC',
    client: 'Software provider for capital projects · Europe · ~100 people',
    headline: 'Late, over-budget projects became predictable.',
    stats: [
      { label: 'Time to go-live', from: '12 weeks', to: '6 weeks' },
      { label: 'Projects within budget', from: '60%', to: '86%' },
      { label: 'Audit evidence', from: '3 weeks', to: '1 day' },
    ],
    how: 'One 12-week due diligence across 11 systems, including recorded workshops. The client’s teams now run the controls.',
    label: 'Measured by the client: Jul–Oct 2026 vs the 12 months to Mar 2026; a cohort of 7 new projects.',
    href: '/proof/software-provider-europe',
    facts: ['EUR-01', 'EUR-02', 'EUR-03', 'EUR-07', 'EUR-08'],
  },
];

/** Start (LC). Booking link O-01; e-mail and reply time wait for OQ-13. */
export const start = {
  headline: 'Bring us one process.',
  // CC-66: the One-Week Proof is the first step.
  subhead: 'One process, one week: we show you how it really runs, what to fix and what it is worth. If it is useful, we continue.',
  offer: 'The One-Week Proof: one process with its complete data; in one week, its as-built map, first findings with owners and the value at stake.',
  primary: { label: 'Book a 30-minute call', href: 'https://meetings.hubspot.com/aix2/aix2-team' },
  investor: { label: 'Ask for a Portfolio X-ray', href: '/contact?topic=portfolio-xray' },
  secondary: { label: 'Request the security overview', href: '/trust#security-overview' },
  contact: 'Or write to us: info@aix2.ai',
  steps: [
    'A 30-minute call to choose one process and check its data',
    'NDA and read-only access to that process',
    'One week later: the process as built, first findings and the value at stake',
    'You decide whether to continue',
  ],
};

/**
 * Start where you are (LC). One sentence with three choices opens a result card.
 * "raise capital or prepare a sale" stays out of the options until the legal review (OQ-11).
 */
export const selector = {
  heading: 'Start where you are.',
  sentence: ['I’m a', 'in', ', and I need to', '.'] as const,
  roles: [
    'CEO or owner',
    'COO or head of operations',
    'CFO or finance lead',
    'Investor or operating partner',
    'Quality, risk or compliance lead',
    'Consultant or outsourcing partner',
  ],
  industries: [
    'Industrial manufacturing',
    'Software & project delivery',
    'IT & managed services',
    'Technology distribution & export',
    'Energy & capital projects',
    'Insurance & financial services',
  ],
  goals: [
    'see how we really run',
    'prove compliance on demand',
    'stop revenue leaking',
    'deliver on time and on budget',
    'get ready for AI',
    'diligence a company before investing',
    'build one baseline across a portfolio',
  ],
  button: 'Show me where to start',
  // NEW (CC-13): the result card's three labels. "Where we start" and "Proof" are LC's column names.
  labels: { finding: 'What we usually find', start: 'Where we start', proof: 'Proof' },
  // NEW (CC-13): shown before the first choice, so the section says what it will give.
  preview: 'Choose your role, industry and goal. We’ll show the finding we usually see, where we start, and a result from a client.',
  cards: {
    'see how we really run': {
      headline: 'The org chart shows one process. The work runs three.',
      start: 'We map one end-to-end process — order-to-cash, project delivery or service — from your systems and the work around them.',
      proof: 'Industrial manufacturer: three order variants found where the official process had one. On-time delivery 75% → 95%.',
      button: { label: 'Start with a one-week proof', href: '/contact?topic=proof' },
      facts: ['IST-05', 'IST-01'],
    },
    'prove compliance on demand': {
      headline: 'Your controls are assumed, not proven.',
      start: 'We map every requirement to where its evidence lives and check it continuously: met, partial, not met, no evidence.',
      proof: 'Industrial manufacturer: audit evidence 15 working days → 1 day; major audit findings 3 → 0.',
      button: { label: 'Start a compliance Sprint', href: '/contact?topic=compliance' },
      facts: ['IST-02', 'IST-04'],
    },
    'stop revenue leaking': {
      headline: 'Each system looks fine. The money leaks between them.',
      start: 'We join CRM, ERP, partner portals and billing into one view per deal, contract or seat.',
      proof: 'Technology reseller: vendor deals registered in time 55% → 95%; delivery to invoice 21 → 7 days.',
      button: { label: 'Find the leak', href: '/contact?topic=revenue' },
      facts: ['FRA-02', 'FRA-03'],
    },
    'deliver on time and on budget': {
      headline: 'Projects run over, and you find out too late.',
      start: 'We rebuild every project or order as one timeline, split work from waiting, and flag overruns while they can still be fixed.',
      proof: 'Industrial manufacturer: on-time delivery 75% → 95%.', // CC-35 (Europe case removed)
      button: { label: 'Make delivery predictable', href: '/contact?topic=delivery' },
      facts: ['IST-01'],
    },
    'get ready for AI': {
      headline: 'You’re being sold AI faster than you can see your own operations.',
      start: 'We map the workflow as built, mark which tasks systems should do, and set the controls and human approval gates before any agent goes live.',
      proof: 'Only 5% of companies have the full set of controls for AI agents today (BCG, 2026).',
      button: { label: 'Automate the work as built', href: '/contact?topic=ai' },
      facts: ['M-04'],
    },
    'diligence a company before investing': {
      headline: 'Management presentations tell one story. The systems tell another.',
      start: 'We run a read-only diligence of the target’s processes and data: variants, controls, red flags and real cost-to-serve, each with a count and an owner.',
      proof: 'Nearly one in four PE deals runs into risks that due diligence did not identify (EY, 2025).',
      button: { label: 'Talk to us about a deal', href: '/contact?topic=deal' },
      facts: ['M-03'],
    },
    'build one baseline across a portfolio': {
      headline: 'Every company runs a different ERP and reports a different truth.',
      start: 'We build one as-built model per company, comparable across the portfolio: maturity, risk concentration and a value-creation roadmap.',
      proof: 'The same model zooms out from one company to a portfolio of companies.',
      button: { label: 'Ask for a Portfolio X-ray', href: '/contact?topic=portfolio-xray' },
      facts: [],
    },
  } as Record<string, SelectorCard>,
  /** Consultants and outsourcers get the partner card instead (LC). */
  partner: {
    headline: 'You bring the question and the benchmarks. We bring the company as built.',
    start: 'A pricing-ready baseline for one function of one client.',
    proof: '',
    button: { label: 'Partner with us', href: '/partners' },
    facts: [],
  } as SelectorCard,
  /** The card a role opens by default (LC). */
  roleGoal: {
    'Quality, risk or compliance lead': 'prove compliance on demand',
    'CFO or finance lead': 'stop revenue leaking',
    'Investor or operating partner': 'diligence a company before investing',
  } as Record<string, string>,
  /** Industry-specific proof lines (LC). */
  industryProof: [
    {
      industry: 'IT & managed services',
      goal: 'prove compliance on demand',
      proof: 'IT and managed-services network: clients with proven protection 66% → 100%.', // NEW wording around LC's figure (CC-13)
      facts: ['CAN-01'],
    },
  ],
  defaults: { role: 'CEO or owner', industry: 'Industrial manufacturing', goal: 'see how we really run' },
};

/** Why AIx2 (LC). The vendor line under the table waits for OQ-08. */
export const why = {
  eyebrow: 'Why AIx2',
  headline: 'Not a tool you’re left alone with. Not a deck you’re left with.',
  subhead:
    'AIx2 combines an evidence platform with senior engineers and strategy consultants who work inside your organization, and stay until the change holds.',
  parts: [
    {
      name: 'Atlas',
      line: 'The evidence engine',
      copy: 'Reads the full population of cases, not samples. Every figure is computed by code and traceable to its source; the AI explains, with a citation on every sentence.',
    },
    {
      name: 'Forward-deployed engineers',
      line: 'Connect, capture, build',
      copy: 'They connect your systems read-only, capture the work those systems miss, and build the controls into the tools your teams already use.',
    },
    {
      name: 'Forward-deployed strategy consultants',
      line: 'Judge, design, stay',
      copy: 'Senior people from strategy, operations and research who turn evidence into decisions — the redesign, the business case, the sequence — and stay through implementation.',
    },
  ],
  keyLine: 'Atlas finds, measures and proposes. Your people decide. We stay until it holds.',
  columns: ['Interview-led consulting', 'Process-mining software', 'Data platforms', 'AIx2'],
  rows: [
    { label: 'Starts from your real system data', cells: [{ mark: 'partial', note: 'samples and extracts' }, { mark: 'full' }, { mark: 'full', note: 'once pipelines are built' }, { mark: 'full' }] },
    { label: 'Captures work outside systems: paper, meetings, the shop floor', cells: [{ mark: 'partial', note: 'through interviews' }, { mark: 'partial', note: 'desktop task mining' }, { note: 'custom build' }, { mark: 'full' }] },
    { label: 'Tests against your rules, best practice and the law, with evidence', cells: [{ mark: 'partial', note: 'on samples' }, { mark: 'partial', note: 'against a target process' }, { note: 'custom build' }, { mark: 'full' }] },
    { label: 'Designs the fix', cells: [{ mark: 'full' }, { mark: 'partial', note: 'simulation' }, { mark: 'none' }, { mark: 'full' }] },
    { label: 'Stays through implementation', cells: [{ mark: 'partial' }, { note: 'through partners' }, { mark: 'none' }, { mark: 'full' }] },
    { label: 'Runs inside your network', cells: [{ note: 'n/a' }, { note: 'often cloud' }, { note: 'often cloud-first' }, { mark: 'full' }] },
  ] as { label: string; cells: ComparisonCell[] }[],
  legend: { full: 'built in', partial: 'partial', none: 'not covered' },
  footnote:
    'Comparison by category, not by vendor; capabilities vary by product and edition. Process-mining tools and data platforms are strong in their own scope, and Atlas reads from and feeds both.',
  link: { label: 'Our paradigm', href: '/paradigm' },
};

/** Two lenses (LC): the three audience cards and the line under them. */
export const audiences = {
  cards: [
    {
      id: 'companies',
      audience: 'For companies: CEOs, owners, COOs, CFOs',
      title: 'Redesign the company as built, not as drawn.',
      // LC's fifth bullet (raising capital, an evidence pack) waits for the legal review (OQ-11).
      bullets: [
        'Find where time and money really go',
        'Prove compliance on demand, to auditors, customers and regulators',
        'Make delivery and projects predictable',
        'Know where AI will pay before you buy it',
      ],
      button: { label: 'Start with a one-week proof', href: '/companies#one-week-proof' }, // CC-66
    },
    {
      id: 'investors',
      audience: 'For investors: private equity, holdings, family offices, LPs, sovereign and state portfolios',
      title: 'Diligence the company as built, not as pitched.',
      bullets: [
        'Before you sign: the company as built, its gaps, red flags and real cost-to-serve',
        'First 100 days: baseline, control gaps, quick wins',
        'Value creation: one comparable baseline across every portfolio company',
        'Exit: an equity story buyers can verify',
      ],
      button: { label: 'Talk to us about a deal', href: '/investors' },
    },
    {
      id: 'partners',
      audience: 'For partners: strategy consultancies, outsourcers, implementation partners',
      title: 'You lead. We bring the company as built.',
      bullets: [
        'We feed your benchmarks and never compete with them',
        'We never own or approach your client relationships',
        'A pricing-ready baseline for every outsourcing deal',
      ],
      button: { label: 'Partner with us', href: '/partners' },
    },
  ],
  scales: 'One model, three scales: a company, a portfolio of companies, a national program.',
};

/**
 * Why capital listens (LC), as the home page shows it. Team names, the teaching line and
 * the unconfirmed affiliations are placeholders until OQ-06, OQ-07 and OQ-22 are answered.
 */
export const capital = {
  seriesLink: { label: 'Watch the sessions', href: '/insights/stanford-ai-investment-series' },
  conferencesLink: { label: 'Talks and keynotes', href: '/insights#keynotes' },
  teaching: 'We teach what we do: a co-taught course at Stanford GSB, and lectures at Columbia, Wharton and NYU Stern.',
  teachingLink: { label: 'Watch the lectures', href: '/insights#podcasts-lectures' },
  teachingDependsOn: 'OQ-22',
  leader: {
    name: 'Mohammad Rasouli',
    role: 'Founder and CEO',
    lines: ['Stanford AI researcher', 'ex-McKinsey', 'ex-Microsoft', 'PhD, Electrical and Computer Engineering'],
    facts: ['P-01', 'P-02', 'P-03', 'P-04', 'P-05'],
    dependsOn: 'OQ-07',
  },
  team: ['[Name] · [Role at AIx2] · Ex-[Company] · [Degree or teaching role]', '[Name] · [Role at AIx2] · Ex-[Company] · [Degree or teaching role]'],
  teamDependsOn: 'OQ-06',
  affiliations: 'Prior affiliations of AIx2 team members: McKinsey & Company · Microsoft · Stanford University',
  affiliationsPending: 'Google · Uber · MIT, once confirmed',
  affiliationsDependsOn: 'OQ-07',
  teamLink: { label: 'Meet the team', href: '/company/team' },
  photoNote: 'Photo to come', // NEW (CC-13)
};

/**
 * "Trusted by": every organization logo from aix2.ai (home band, conferences, press and podcasts),
 * at the user's request (2026-10-29), with permission confirmed by the user. University logos are
 * left out (BRIEF §8). Logos are recoloured to one tone; w and h are the files' pixel sizes, used
 * to give every mark the same optical area. Labels are NEW (CC-17). Facts NET-01 to NET-04; OQ-09.
 */
export const trustedBy = {
  title: 'Trusted by', // CC-55 (user, 2026-11-01: "Trusted by" again after trying "Sample Customers")
  // CC-39: only our clients' logos (user, 2026-10-30), cut from the Plug and Play Summit deck (vShare slide 4).
  groups: [
    {
      label: 'Clients',
      items: [
        { name: 'MicroAge', logo: '/logos/clients/microage.png', w: 320, h: 240 },
        { name: 'Northexzone', logo: '/logos/clients/northexzone.png', w: 384, h: 152 },
        { name: 'Mirr Oils', logo: '/logos/clients/mirr-oils.png', w: 336, h: 98 },
        { name: 'Welektrik', logo: '/logos/clients/welektrik.png', w: 378, h: 153 },
        { name: 'Futura Tec', logo: '/logos/clients/futura-tec.png', w: 384, h: 132 },
        { name: 'Edu Journey', logo: '/logos/clients/edu-journey.png', w: 328, h: 63 },
        { name: 'EPC', logo: '/logos/clients/epc.png', w: 201, h: 227 },
      ],
    },
  ],
};

/** Is AIx2 right for you? (LC; the six conditions are NW-06). */
export const fit = {
  eyebrow: 'Is AIx2 right for you?',
  headline: 'We do our best work when the basics are in place.',
  subhead: 'A due diligence needs data, owners and a sponsor. We check six things before we sign; it protects your budget and our team’s time.',
  conditions: [
    'A core system, ERP or equivalent, in real use for at least two years',
    'Named owners for your key processes',
    'Data access signed off by your sponsor before kick-off',
    'Documented procedures for the main flows',
    'An executive sponsor with time every week',
    'At least three years of operations with stable processes',
  ],
  closing: 'Not there yet? Start with a short readiness check instead of a full diligence.',
  button: { label: 'Ask for a readiness check', href: '/contact?topic=readiness' },
  facts: ['NW-06'],
};

/** Trust (LC): the short version of the Trust center. */
export const trust = {
  eyebrow: 'Trust',
  headline: 'Your data stays home.',
  subhead: 'Built for regulated, sensitive and sovereign environments.',
  commitments: [
    { title: 'Read-only, everywhere', copy: 'Every connector uses a dedicated read-only account, a data contract and a named owner on your side.' },
    { title: 'Inside your boundary', copy: 'On your premises, in a private or sovereign cloud, or managed by AIx2 for the fastest start. On-premise, no data, model call or telemetry leaves.' },
    { title: 'Privacy first', copy: 'Personal data is masked before any analysis. Meeting audio is deleted once transcribed.' },
    { title: 'No one is scored', copy: 'Results are reported by team, line and shift, never by individual.' },
    { title: 'People decide', copy: 'A named owner approves every finding and every model update before use.' },
    { title: 'Computed, not guessed', copy: 'Every figure is produced by code and traceable to its source. The AI explains, and cites.' },
    { title: 'Clean exit', copy: 'All access removed and all data deleted at the end, confirmed in writing.' },
  ],
  regulation:
    'Designed to support your obligations under GDPR, the EU AI Act, NIS2, Saudi PDPL and NDMO standards, KVKK, Quebec Law 25 and PIPEDA. Support in English, Arabic and French.',
  buttons: [
    { label: 'Visit the Trust center', href: '/trust' },
    { label: 'Request the security overview', href: '/trust#security-overview' },
  ],
  facts: ['A-12', 'A-14', 'A-20', 'A-21', 'A-22', 'A-23', 'A-24'],
};

/** Insights (LC). The newsletter waits for OQ-30. */
export const insightsTeaser = {
  eyebrow: 'Insights',
  headline: 'See how we think.',
  items: [
    {
      type: 'Series',
      // CC-50: the sessions named by their guests (USR-04).
      title: 'Sessions at Stanford',
      line: 'With Vinod Khosla, the CIOs of the Rockefeller Foundation and the Hewlett Foundation, the Teacher Retirement System of Texas, and 83 more guests.',
      href: '/insights/stanford-ai-investment-series',
    },
    {
      type: 'Talk',
      title: 'Your enterprise, as it really runs',
      line: 'Our four-minute talk from the Plug and Play Summit.',
      href: '/talks/plug-and-play-summit-2026',
    },
    {
      type: 'Survey',
      title: 'Fundraising 2025: Survey Results',
      line: '124 GPs, 22 LPs and 4 placement agents on where fundraising conversion is won or lost.',
      href: '/insights/research/fundraising-2025',
    },
  ],
  link: { label: 'All insights', href: '/insights' },
};

/** Questions (LC), in LC's order: each one answers a real buyer objection. */
export const faq = {
  eyebrow: 'Questions',
  headline: 'Questions we hear before the first call.', // NEW (CC-13): LC gives the section no headline
  items: [
    {
      q: 'How is AIx2 different from process-mining software?',
      a: 'Process-mining tools analyze the event logs your systems produce, and they do it well. We read those logs too, plus the work that never reaches a system. Then we test what we find against your rules, best practice and the law, design the fix, and stay through implementation. Atlas can also feed the tools you already use.',
    },
    {
      q: 'How is it different from a consulting firm?',
      a: 'Most consulting starts from interviews and samples. We start from your systems and the full population of cases, and every finding carries a count, the evidence and a named owner. Senior consultants are part of our team; they work from that evidence.',
    },
    {
      q: 'What do you need from us?',
      a: 'Read-only access to the systems in scope, named owners for the main processes, documented procedures where they exist, and a sponsor with time every week. We agree scope and data access before kick-off.',
    },
    {
      q: 'How long does it take?',
      a: 'One week for the first proof on one process, when its data is complete. If it is useful, a full due diligence usually takes 8 to 12 weeks.', // CC-66
      facts: ['X-02', 'X-03'],
    },
    {
      q: 'What is the One-Week Proof?',
      a: 'Our first step. You choose one process and give us read-only access to its data. Within a week you get it as it really runs, the first findings with counts and owners, and the value at stake. Then you decide whether to continue. The one week applies when the data for that process is complete.',
    },
    {
      q: 'Does our data leave the company?',
      a: 'Not unless you choose our managed cloud. On-premise, no data, model call or telemetry leaves your environment. Every connection is read-only, and everything is deleted at the end.',
      facts: ['A-12', 'A-20'],
    },
    {
      q: 'Our data lives in spreadsheets, paper and people’s heads. Is that a problem?',
      a: 'That is often where we start. We read paper with OCR, transcribe meetings with consent, and where nothing is recorded we add capture designed for your process. If there are no core systems at all, we suggest a readiness check first.',
    },
    {
      q: 'Will people be monitored or scored?',
      a: 'No. We report by team, line and shift, never by individual. The rules for people data are agreed with you, and with your works council where there is one, before we start.',
      facts: ['A-22'],
    },
    {
      q: 'What happens after the diligence?',
      a: 'Two paths. Teams with their own engineers build the controls into their tools and run them. Others keep AIx2 running them as a managed service, with monthly readouts.',
    },
    {
      q: 'Do you work with our consultants or implementation partners?',
      a: 'Yes. We supply the evidence; they keep the client relationship, the strategy and the program. We never compete with their benchmarks.',
    },
    {
      q: 'Do you help us raise capital?',
      a: 'We build the evidence, not the deal. An evidence pack gives investors the company as built: processes, controls and numbers, each traceable to its source. We do not provide investment-banking or brokerage services.',
    },
    {
      q: 'Where do you work?',
      a: 'We have delivered engagements in Germany, Turkey, Canada and the United States, and we support Arabic and Saudi data-governance requirements for clients in the Gulf.',
      facts: ['X-01'],
    },
    {
      q: 'What does it cost?',
      a: 'A fixed fee for a defined scope, agreed after a short scoping call. A due diligence is typically in the range of USD 70–150k.', // second sentence NEW (CC-26, X-04; OQ-12 answered)
    },
  ] as FaqItem[],
};

/** The contact form (LC). The endpoint is a placeholder until OQ-33; the reply time waits for OQ-13. */
export const contactForm = {
  title: 'Tell us about the process', // NEW (CC-13): LC gives the form no heading
  fields: [
    { name: 'name', label: 'Full name', type: 'text', autoComplete: 'name', required: true },
    { name: 'email', label: 'Work e-mail', type: 'email', autoComplete: 'email', required: true },
    { name: 'company', label: 'Company', type: 'text', autoComplete: 'organization', required: true },
    {
      name: 'role',
      label: 'Your role',
      type: 'select',
      options: ['CEO or owner', 'COO or operations', 'CFO or finance', 'Investor or operating partner', 'Quality, risk or compliance', 'Consultant or partner', 'Other'],
    },
    {
      name: 'process',
      label: 'Which process?',
      type: 'select',
      options: ['Order-to-cash', 'Procure-to-pay', 'Project delivery', 'Service operations', 'Quality and compliance', 'Not sure yet'],
    },
    {
      name: 'decision',
      label: 'What decision is it for?',
      type: 'select',
      options: ['Fix and redesign', 'Audit and compliance', 'Investment, M&A or exit', 'Raise capital or prepare a sale', 'AI readiness'],
    },
    { name: 'message', label: 'Anything we should know?', type: 'textarea' },
  ] as FormField[],
  optional: 'optional', // NEW (CC-13)
  submit: 'Send',
  confirmation: 'Thank you. We’ll reply within two working days to set up the call.',
  confirmationDependsOn: 'OQ-13',
  // NEW (CC-13): errors are stated in words next to the field.
  errors: { required: 'Please fill in this field.', email: 'Please enter an e-mail address, like name@company.com.', failed: 'Something went wrong on our side. Please try again, or book a call instead.' },
};

/**
 * Words on the drawings of the company: the four layers (How) and the marks of each lens (Two
 * lenses). Layer names follow LC's menu ("Three maps: process, data supply chain, AI infrastructure
 * and GPU"); the marks are LC's own lens lines (CC-12).
 */
export const sceneLabels = {
  layers: ['Data sources', 'Process map', 'Data supply chain', 'AI infrastructure and GPU'],
  lens: {
    bottleneck: 'Bottleneck',
    waiting: 'Waiting time',
    rework: 'Rework',
    fix: 'The fix',
    risk: 'Risk',
    flag: 'Red flag',
    lever: 'Value lever',
    verify: 'Verify before signing',
  },
};

/**
 * The shorter landing (user, 2026-11-01: simpler from section 2 on, "like Skan.ai"). CC-57.
 * Order: hero · Sample Customers · the problem · Five Step Method · who we serve · impact · customers ·
 * Stanford sessions · call to action.
 */
export const landing = {
  problem: {
    name: 'The problem',
    what: 'What leaders face before they change a company',
    // Plug and Play Summit deck, slide 3, as written. Figures USR-06 (user, 2026-11-01: add as on the slides).
    title: ['Leaders are asked to change a company', 'they can’t see.'],
    stats: [
      { figure: '76%', text: 'Lack visibility into real processes and gaps' },
      { figure: '61%', text: 'Struggle to bridge strategy and day-to-day execution' },
      { figure: '88%', text: 'Fail in transformation' },
      { figure: '65%', text: 'Don’t know where to start with AI' },
    ],
    source: 'AIx2 research, as presented at the Plug and Play Summit',
    facts: ['USR-06'],
  },
  serve: {
    name: 'Who we serve',
    what: 'What we do for companies and for investors',
    title: 'One method, for the people who run companies and the people who fund them.',
    groups: [
      { id: 'companies', label: 'For companies', menu: 'companies', offers: 'By goal', who: 'By industry' },
      { id: 'investors', label: 'For investors', menu: 'investors', offers: 'By deal stage', who: 'By investor' },
    ],
  },
  impact: {
    name: 'Impact',
    what: 'What our clients gained',
    // Plug and Play Summit deck, slide 5, as written. Figures USR-07 (user, 2026-11-01).
    title: 'Impacts we’ve delivered.',
    body: 'By mapping processes, showing where to fix, providing optimal design and monitoring implementation.',
    // CC-76: on the first screen the title and the line read as one sentence, the slide's own headline.
    runIn: ['Impacts we’ve delivered', 'by mapping processes, showing where to fix, providing optimal design and monitoring implementation.'] as const,
    stats: [
      // what / unit / kind feed the dimension-line drawing on the first screen (CC-72).
      { prefix: 'up to', figure: '87%', text: 'process time saved', what: 'Process time', unit: 'saved', kind: 'cut' as const, caption: 'From 100% of the original time to as little as 13%.' },
      { prefix: 'up to', figure: '93%', text: 'process costs saved', what: 'Process costs', unit: 'saved', kind: 'cut' as const, caption: 'From 100% of the original cost to as little as 7%.' },
      { prefix: '', figure: '28%', text: 'higher strategy alignment', what: 'Strategy alignment', unit: 'higher', kind: 'add' as const, caption: 'From a baseline of 100 to 128.' },
    ],
    // CC-62 (user, 2026-11-02): the third box.
    notes: ['From actual data, as built', 'With live quality monitoring and assurance', 'Complete AI readiness and data governance strategy bottom-up from your day to day processes'],
    source: 'Across AIx2 client engagements',
    facts: ['USR-07'],
  },
  series: {
    name: 'Stanford sessions',
    what: 'Conversations with the people who allocate capital',
    title: 'Who comes to our sessions at Stanford.',
    body: 'Chief investment officers of foundations, endowments, pensions and family offices, and the investors they back. Co-hosted and moderated by AIx2.',
    cta: { label: 'See every session', href: '/insights/stanford-ai-investment-series' },
  },
};

/**
 * The One-Week Proof (CC-66, user 2026-11-02): the first step everywhere on the site. The user's rule:
 * a quick, real result first; the full engagement only if it proves useful. The promise holds when the
 * data for the chosen process is complete, and the site says so wherever it is made (USR-10).
 */
export const oneWeekProof = {
  name: 'One-Week Proof',
  what: 'How every engagement starts',
  title: 'One process. One week. See it as built.',
  body: 'Bring us one real process and its data. Within a week you get it back as it really runs: every route the work takes, the first findings with counts and owners, and what they are worth. If it is useful, we continue. If not, you have spent a week.',
  qualifier: 'The one-week delivery applies when the data for the chosen process is complete. We check that on the first call.',
  days: [
    { when: 'Day 1', title: 'Data in', text: 'Read-only access to one process: its system records, spreadsheets and e-mail.' },
    { when: 'Days 2–3', title: 'Mapped as built', text: 'Every case of the process, the routes it really takes and where it leaves the systems.' },
    { when: 'Day 4', title: 'First findings', text: 'Gaps against your own rules, each with a count, the evidence and an owner, and the value at stake.' },
    { when: 'Day 5', title: 'Readout', text: 'A one-hour readout with your team. You decide whether to continue.' },
  ],
  receive: ['The process, as it really runs', 'First findings with counts and owners', 'The value at stake, in money and time', 'A proposal for the full engagement'],
  pathLabel: 'And then, only if it is useful',
  path: [
    { when: '1 week', title: 'One-Week Proof', text: 'One process, real findings.' },
    { when: '8–12 weeks', title: 'Full engagement', text: 'The company or business unit, if the proof is useful.' },
    { when: 'Ongoing', title: 'Live assurance', text: 'Checks on every new case, run by your teams or by us.' },
  ],
  facts: ['USR-10', 'X-02'],
};
