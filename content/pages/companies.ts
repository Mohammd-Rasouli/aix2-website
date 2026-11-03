import type { PageContent } from './types';

/** For companies. Source: SS "For companies"; Phase 1 need links from docs/sitemap.md. */
export const companies: PageContent = {
  route: '/companies',
  seo: {
    title: 'AIx2 · For companies',
    description:
      'Evidence from your own data on how your company really runs, for CEOs, owners, COOs and CFOs who want to fix, prove or prepare something before they spend.',
  },
  hero: {
    name: 'For companies',
    what: 'For operators: needs, proof and a first step',
    title: 'Redesign the company as built, not as drawn.',
    subhead: 'For CEOs, owners, COOs and CFOs who need to fix, prove or prepare something, and want evidence before they spend.',
  },
  blocks: [
    { type: 'home', ref: 'red-lines' },
    {
      type: 'cards',
      id: 'by-need',
      name: 'By need',
      what: 'Starting points, by the decision you face',
      title: 'Start with the decision in front of you.',
      columns: 3,
      items: [
        { title: 'See how we really run', copy: 'The org chart shows one process. The work runs three.', href: '/proof/industrial-manufacturer-istanbul' },
        { title: 'Prove compliance on demand', copy: 'Your controls are assumed, not proven.', href: '/proof/industrial-manufacturer-istanbul' },
        { title: 'Stop revenue leaking', copy: 'Each system looks fine. The money leaks between them.', href: '/proof/technology-reseller-frankfurt' },
        { title: 'Deliver on time and on budget', copy: 'Projects run over, and you find out too late.', href: '/proof/industrial-manufacturer-istanbul' },
        { title: 'Get ready for AI', copy: 'You’re being sold AI faster than you can see your own operations.', href: '/paradigm' },
        { title: 'Raise capital or prepare a sale', copy: 'Investors will price the company as built. Show it to them first.', href: '/contact', dependsOn: 'OQ-11' },
      ],
    },
    {
      type: 'cards',
      id: 'proof',
      name: 'Customers',
      what: 'The operator cases, with who and where',
      title: 'Results from companies like yours.',
      columns: 2,
      facts: ['CAN-07'],
      items: [
        { title: 'Industrial manufacturer · Istanbul', copy: 'Every unit provably inside its certificate. Orders on time.', href: '/proof/industrial-manufacturer-istanbul' },
        { title: 'Technology reseller and IoT designer · Frankfurt', copy: 'Export risk screened before every quote. Rebates protected.', href: '/proof/technology-reseller-frankfurt' },
        { title: 'IT and managed-services network · Canada · 42 locations', copy: 'From assumed to proven, across 42 locations.', href: '/proof/it-network-canada' },
      ],
    },
    // CC-66: the One-Week Proof replaces the As-Built Sprint as the first step.
    { type: 'oneWeekProof', id: 'one-week-proof', name: 'One-Week Proof', what: 'How every engagement starts', title: 'One process. One week. See it as built.' },
    {
      type: 'list',
      id: 'what-we-need',
      name: 'What we need',
      what: 'What we ask of you before we start',
      title: 'What we need from you.',
      style: 'bullet',
      items: ['A sponsor with time every week', 'Named owners for key processes', 'Read-only access, signed off before kick-off'],
    },
    {
      type: 'list',
      id: 'after',
      name: 'After',
      what: 'Your two options once the diligence ends',
      title: 'After the diligence, two paths.',
      style: 'bullet',
      items: ['Your teams build the controls into their own tools and run them', 'Or we keep them running as a managed service, with monthly readouts'],
    },
    {
      type: 'prose',
      id: 'capital',
      name: 'Capital',
      what: 'An evidence pack for investors',
      title: 'Raising capital or preparing a sale?',
      dependsOn: 'OQ-11',
      paragraphs: ['Give investors an evidence pack built from your own data: the company as built, its controls and its numbers, each traceable to its source.'],
    },
    {
      type: 'cta',
      id: 'next-step',
      name: 'Next step',
      what: 'Your first step',
      title: 'Bring us one process.',
      actions: [{ label: 'Start with a one-week proof', href: '/contact?topic=proof', variant: 'primary' }],
    },
  ],
};
