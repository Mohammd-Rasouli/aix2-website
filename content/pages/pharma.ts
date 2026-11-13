import type { PageContent } from './types';

/**
 * Industry page: pharmaceuticals and pharmacy. Source: the user's Plug and Play Summit slides 6 and 8
 * (inputs/company/Industries/pharma/). Slide 6 is an ILLUSTRATIVE case built from published benchmarks,
 * not an AIx2 client result, and is labelled as such. Numbers PH-xx in docs/facts.md. New lines: CC-37.
 */
export const pharma: PageContent = {
  route: '/industries/pharma',
  seo: {
    title: 'AIx2 · Pharmaceuticals and pharmacy',
    description:
      'Pharmacy processes can be improved massively, from prescription to pickup. And in GMP manufacturing, batch release and quality, from the plant’s own data.',
  },
  hero: {
    name: 'Pharmaceuticals and pharmacy',
    what: 'What we do in pharma, and an illustrative case',
    title: 'Pharmacy processes can be improved massively, from prescription to pickup.',
    subhead:
      'From the plant to the counter, we map how batches, prescriptions and claims really move, measure the gap to best practice, and check every case as it happens.',
    actions: [
      { label: 'Bring us one process', href: '/contact?topic=pharma', variant: 'primary' },
      { label: 'See the illustrative case', href: '/industries/pharma#illustrative-case', variant: 'text' },
    ],
  },
  blocks: [
    {
      type: 'stats',
      id: 'what-pharmacies-gain',
      name: 'What a pharmacy can gain',
      what: 'Published figures, with their sources',
      title: 'Where pharmacy value leaks today.',
      facts: ['PH-01', 'PH-02', 'PH-03', 'PH-04'],
      items: [
        { figure: '27%', text: 'of prescriptions never filled, lost to payer rejections and abandonment', source: 'IQVIA Institute, “Understanding the Use of Medicines in the U.S. 2025,” 2025', facts: ['PH-01'] },
        { figure: '18 sec', text: 'prior-auth approval when automated, instead of a 4-day delay', source: 'Surescripts, Annual Impact Report 2025 (2026); Surescripts analysis of new prescriptions, January 2026', facts: ['PH-02'] },
        { figure: '30%', text: 'less warehouse inventory with AI replenishment across 400+ pharmacies', source: 'HCLTech, “AI-driven supply chains keep pharmacies stocked,” case study, 2025', facts: ['PH-03'] },
        { figure: '40%', text: 'of pharmacists say lack of time is their #1 daily challenge', source: 'Surescripts and APCO Insight, survey of 250 pharmacists and 253 prescribers, September 2025', facts: ['PH-04'] },
      ],
    },
    {
      type: 'cards',
      id: 'what-operators-need',
      name: 'What pharmacy operators need',
      what: 'Retail, specialty and mail',
      title: 'Built for how pharmacies really run.',
      columns: 4,
      facts: ['PH-05'],
      items: [
        { title: 'Lower cost to fill', copy: 'True cost per script and payer, as cost-based reimbursement grows (McKinsey, “The revival of pharmacy,” 2026).' },
        { title: 'Inside your systems', copy: 'Reads pharmacy, claims and wholesaler data. No new screens.' },
        { title: 'Fewer rejects, fewer calls', copy: 'Catches prior-auth and claim rejects before the counter.' },
        { title: 'Tailored to every store', copy: 'Staffing, inventory and workflow tuned to each store’s real demand.' },
      ],
    },
    {
      type: 'stats',
      id: 'illustrative-case',
      name: 'Illustrative case',
      what: 'GMP pharma manufacturer: batch release and quality',
      title: '25–45% lower QC lab costs.',
      body: 'An illustrative case built from published benchmarks, not an AIx2 client result. Each figure carries its source.',
      facts: ['PH-06', 'PH-07', 'PH-08', 'PH-09'],
      items: [
        { figure: '25–45%', text: 'lower QC lab costs (published benchmark range)', source: 'McKinsey, “Digitization, automation, and online testing: Embracing smart quality control,” 2021', facts: ['PH-06'] },
        { figure: '4 weeks → 6 hours', text: 'batch release time', source: 'ISA InTech, “Digital transformation of batch review” (Emerson case, global biopharma manufacturer), 2020', facts: ['PH-07'] },
        { figure: '−40%', text: 'deviation closure time', source: 'McKinsey, “Gen AI: A game changer for biopharma operations,” 2025', facts: ['PH-08'] },
        { figure: '−80%', text: 'non-perfect batches', source: 'AstraZeneca Wuxi site, World Economic Forum Global Lighthouse Network, 2024', facts: ['PH-09'] },
      ],
    },
    {
      type: 'steps',
      id: 'how-we-get-there',
      name: 'How we get there',
      what: 'The Five Step Method, in a GMP plant',
      title: 'From batch records to inspection-ready, every day.',
      items: [
        { n: '01', title: 'Collecting Data', copy: 'Connect SAP S/4HANA, MES and eBR; add LIMS, Veeva Vault QMS and PI historian; capture paper logbooks, Excel and e-mail' },
        { n: '02', title: 'Mapping Processes and Data Flow', copy: 'Map each batch from dispense to release; map deviation, CAPA and change-control flows; trace GMP data from MES to LIMS to SAP' },
        { n: '03', title: 'Gap Analysis', copy: 'Measure the gap to GMP best practice; surface right-first-time losses and review loops; flag ALCOA+ gaps in data integrity' },
        { n: '04', title: 'Optimal Design', copy: 'Design review by exception and parallel QC/QA; build a validated (CSA) transformation playbook' },
        { n: '05', title: 'Implementation Live Assurance', copy: 'Run live QC on every batch record; flag deviations before batch disposition; stay inspection-ready for FDA and EMA' },
      ],
    },
    {
      type: 'cta',
      id: 'next-step',
      name: 'Next step',
      what: 'Start with one process',
      title: 'Bring us one process.',
      subhead: 'We’ll show you how it really runs, what to fix, and what to do next.',
      actions: [
        { label: 'Book a 30-minute call', href: 'https://calendar.app.google/NFXFr2FhHQkvWNMM6', variant: 'primary' },
        { label: 'Ask about your process', href: '/contact?topic=pharma', variant: 'secondary' },
      ],
    },
  ],
};
