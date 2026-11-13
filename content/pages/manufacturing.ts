import type { PageContent } from './types';

/**
 * Industry page: manufacturing. Source: the user's Plug and Play Summit slides 6 and 7 (supplied 2026-10-30;
 * transcript in inputs/company/Industries/slides-6-7-transcribed.md). Case in point = the Istanbul case
 * (Northexzone). "$10.7–11.3M saved a year" is shown at the user's decision (OQ-40, 2026-10-30). Client logos at the user's request. New lines: CC-38.
 */
export const manufacturing: PageContent = {
  route: '/industries/manufacturing',
  seo: {
    title: 'AIx2 · Manufacturing',
    description:
      'Manufacturing can be improved massively, in output and in quality. On-time delivery rose from 75% to 95% at an explosion-protected equipment manufacturer.',
  },
  hero: {
    name: 'Manufacturing',
    what: 'What we do for manufacturers, and a client case',
    title: 'Manufacturing can be improved massively, in output and in quality.',
    subhead:
      'We map how orders, machines and quality really run from the plant’s own data, measure the gap to best practice, and check every process as it happens.',
    actions: [
      { label: 'Bring us one process', href: '/contact?topic=manufacturing', variant: 'primary' },
      { label: 'See the case', href: '/industries/manufacturing#case', variant: 'text' },
    ],
  },
  blocks: [
    {
      type: 'logos',
      id: 'clients',
      name: 'Our manufacturing clients',
      what: 'Plants we have worked inside',
      title: 'Manufacturers who work with us.',
      items: [
        { name: 'Northexzone', logo: '/logos/clients/northexzone.png', w: 384, h: 152, href: '/proof/industrial-manufacturer-istanbul' },
        { name: 'Welektrik', logo: '/logos/clients/welektrik.png', w: 378, h: 153 },
      ],
    },
    {
      type: 'stats',
      id: 'what-you-can-gain',
      name: 'What a manufacturer can gain',
      what: 'Published results, with their sources',
      title: 'The gains are documented.',
      facts: ['MF-01', 'MF-02', 'MF-03', 'MF-04'],
      items: [
        { figure: '85%', text: 'world-class OEE, vs ~60% typical: every loss mapped and owned', source: 'Nakajima, “Introduction to TPM,” Japan Institute of Plant Maintenance', facts: ['MF-01'] },
        { figure: '10–30%', text: 'higher throughput where Industry 4.0 is done right', source: 'McKinsey, “Capturing the true value of Industry 4.0,” 2022', facts: ['MF-02'] },
        { figure: '15–30%', text: 'higher labor productivity: manual work taken out of the loop', source: 'McKinsey, “Capturing the true value of Industry 4.0,” 2022', facts: ['MF-03'] },
        { figure: '10–20%', text: 'lower cost of quality with live, digital quality control', source: 'McKinsey, “Industry 4.0: How to navigate digitization of the manufacturing sector,” 2015', facts: ['MF-04'] },
      ],
    },
    {
      type: 'cards',
      id: 'what-you-need',
      name: 'What manufacturers need',
      what: 'On time, audit-ready, safe',
      title: 'Built for how plants really run.',
      columns: 4,
      items: [
        { title: 'On-time delivery', copy: 'Orders shipped when promised, bottlenecks found early.' },
        { title: 'Audit-ready quality', copy: 'Evidence for every unit, ready in a day, not weeks.' },
        { title: 'Safer floors', copy: 'Danger-zone entries and near misses tracked live.' },
        { title: 'Low-risk start', copy: 'One plant, 10 weeks. Runs on-prem with open-source models.' },
      ],
    },
    {
      type: 'stats',
      id: 'case',
      name: 'Case in point',
      what: 'Explosion-protected equipment manufacturer, Istanbul',
      title: '$10.7–11.3M saved a year.',
      body: 'Results at month 12. On time, every unit audit-ready, safer floors.',
      facts: ['MF-05', 'IST-01', 'IST-02', 'IST-03'],
      items: [
        { figure: '75% → 95%', text: 'on-time delivery', source: 'Measured by the client: May–Oct 2026 vs the 12 months to Dec 2025', facts: ['IST-01'] },
        { figure: '3 weeks → 1 day', text: 'audit evidence prep', source: 'Measured by the client', facts: ['IST-02'] },
        { figure: '4.8 → 0.9', text: 'danger-zone entries per 1,000 hours', source: 'Measured by the client, against a four-week shadow baseline', facts: ['IST-03'] },
      ],
    },
    {
      type: 'steps',
      id: 'how-we-got-there',
      name: 'How we got there',
      what: 'The Five Step Method in the plant',
      title: 'From the plant’s own data to live checks on every process.',
      items: [
        { n: '01', title: 'Collecting Data', copy: 'Connect ERP, CRM and other systems; capture hidden work in Excel, e-mail and chat; add embedded data and live camera feeds' },
        { n: '02', title: 'Mapping Processes and Data Flow', copy: 'Map processes as they really run; map the strategy behind them; trace the data supply chain' },
        { n: '03', title: 'Gap Analysis', copy: 'Measure the gap to best practice; surface major red flags in processes and data flow' },
        { n: '04', title: 'Optimal Design', copy: 'Design optimal processes and data flow; build the transformation playbook' },
        { n: '05', title: 'Implementation Live Assurance', copy: 'Run live QC on every process and data flow; reject and QA flagged processes and data; score the enterprise in real time against the optimal design' },
      ],
    },
    {
      type: 'cta',
      id: 'next-step',
      name: 'Next step',
      what: 'Start with one plant',
      title: 'Bring us one process.',
      subhead: 'We’ll show you how it really runs, what to fix, and what to do next.',
      actions: [
        { label: 'Read the full case', href: '/proof/industrial-manufacturer-istanbul', variant: 'primary' },
        { label: 'Book a 30-minute call', href: 'https://calendar.app.google/NFXFr2FhHQkvWNMM6', variant: 'secondary' },
      ],
    },
  ],
};
