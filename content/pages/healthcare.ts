import type { PageContent } from './types';

/**
 * Industry page: healthcare and hospitals. Source: the user's Plug and Play Summit slides 3 and 7
 * (transcribed in inputs/company/Industries/healthcare/slides-transcribed.md). Numbers HC-xx in docs/facts.md.
 * Headlines and lines are the slides' own words; connecting sentences are new (CC-36).
 */
export const healthcare: PageContent = {
  route: '/industries/healthcare',
  seo: {
    title: 'AIx2 · Healthcare and hospitals',
    description:
      'Hospital care can be improved massively, inside Epic, without clinicians noticing. A teaching hospital saved $4.2–4.8M a year in inpatient diabetes care.',
  },
  hero: {
    name: 'Healthcare and hospitals',
    what: 'What we do for hospitals, and one case',
    title: 'Hospital care can be improved massively, inside Epic, without clinicians noticing.',
    subhead:
      'We map the care pathway as it really runs from the hospital’s own records, set it against clinical standards, and land the fixes where clinicians already work.',
    actions: [
      { label: 'Bring us one pathway', href: '/contact?topic=healthcare', variant: 'primary' },
      { label: 'See the case', href: '/industries/healthcare#case', variant: 'text' },
    ],
  },
  blocks: [
    {
      type: 'stats',
      id: 'what-hospitals-gain',
      name: 'What a hospital can gain',
      what: 'Published results, with their sources',
      title: 'The gains are documented.',
      facts: ['HC-01', 'HC-02', 'HC-03', 'HC-04'],
      items: [
        { figure: '1.6 days', text: 'shorter length of stay with an endocrine consult within 48 hours', source: 'Sheahan et al., Endocrinology, Diabetes & Metabolism, 2021', facts: ['HC-01'] },
        { figure: '39%', text: 'fewer high-glucose patients with a virtual glucose service in Epic', source: 'Rushakoff et al., Annals of Internal Medicine, 2017', facts: ['HC-02'] },
        { figure: '7.7 h', text: 'in Epic per 8 h of clinic for endocrinologists, the 2nd-highest specialty', source: 'Holmgren et al., Journal of General Internal Medicine, 2024', facts: ['HC-03'] },
        { figure: '4–11%', text: 'of hospital costs: the AI savings potential ($60–120B a year)', source: 'Sahni, Stein, Zemmel & Cutler, NBER Working Paper 30857, 2023', facts: ['HC-04'] },
      ],
    },
    {
      type: 'cards',
      id: 'how-we-work',
      name: 'How we work in a hospital',
      what: 'Why the head of endocrinology says yes',
      title: 'How we win the clinical champion.',
      columns: 4,
      items: [
        { title: 'Epic is the process map', copy: 'Mapped from Clarity, Caboodle and audit logs. No interviews.' },
        { title: 'Invisible in the workflow', copy: 'Fixes land where clinicians already work: BPAs, order sets, In Basket.' },
        { title: 'Zero human in the loop', copy: 'Runs on its own. No added staff, no training, no new screen or login.' },
        { title: 'Hyper-tailored', copy: 'Tuned to your endocrine protocols and CMS glycemic-harm measures, mandatory from the 2026 reporting period.' },
      ],
    },
    {
      type: 'stats',
      id: 'case',
      name: 'Case in point',
      what: 'Teaching hospital, inpatient diabetes care',
      title: '$4.2–4.8M saved a year.',
      body: 'Results at month 12 · 0 clinician training hours.',
      facts: ['HC-05', 'HC-06', 'HC-07', 'HC-08'],
      items: [
        { figure: '58% → 92%', text: 'insulin orders to ADA standard', source: 'Teaching hospital, results at month 12', facts: ['HC-06'] },
        { figure: '4.1 → 2.3', text: 'hypoglycemia per 100 patient-days', source: 'Teaching hospital, results at month 12', facts: ['HC-07'] },
        { figure: '19% → 15%', text: '30-day readmissions', source: 'Teaching hospital, results at month 12', facts: ['HC-08'] },
      ],
    },
    {
      type: 'steps',
      id: 'how-we-got-there',
      name: 'How we got there',
      what: 'The six steps of the hospital case',
      title: 'From EHR orders to live checks on every patient.',
      facts: ['HC-09', 'HC-10'],
      items: [
        { n: '01', title: 'Gather the data', copy: 'EHR orders, glucose meters, pharmacy, lab, nurse notes' },
        { n: '02', title: 'Map the process', copy: 'As-built glucose pathway: 14 variants across 9 wards' },
        { n: '03', title: 'Map the data', copy: 'Meter to order to dose; 3 feeds with no owner' },
        { n: '04', title: 'Assess the gap', copy: 'vs ADA Standards of Care: sliding-scale only, late basal insulin' },
        { n: '05', title: 'Design best practice', copy: 'Tailored order-set defaults, signed off by the head of endocrinology' },
        { n: '06', title: 'Implementation monitoring', copy: 'Live QC on every patient, silent to clinicians' },
      ],
    },
    {
      type: 'cta',
      id: 'next-step',
      name: 'Next step',
      what: 'Start with one care pathway',
      title: 'Bring us one pathway.',
      subhead: 'We’ll show you how it really runs, what to fix, and what to do next.',
      actions: [
        { label: 'Book a 30-minute call', href: 'https://meetings.hubspot.com/aix2/aix2-team', variant: 'primary' },
        { label: 'Ask about your pathway', href: '/contact?topic=healthcare', variant: 'secondary' },
      ],
    },
  ],
};
