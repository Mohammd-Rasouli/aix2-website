import type { PageContent } from './types';

/**
 * How it works. Source: SS "How it works". Step titles and copy are LC's (home steps); the tag on
 * each step is SS's named deliverable.
 */
export const howItWorks: PageContent = {
  route: '/how-it-works',
  seo: {
    title: 'AIx2 · How it works',
    description:
      'Five steps, run inside your organization by forward-deployed engineers and strategy consultants, with your people signing off at every one.',
  },
  hero: {
    name: 'How it works',
    what: 'The method, week by week',
    title: 'The method: from the company as drawn to the company as built.',
    subhead:
      'Five steps, run inside your organization by forward-deployed engineers and strategy consultants, with your people signing off at every one.',
  },
  blocks: [
    {
      type: 'steps',
      id: 'five-steps',
      name: 'Five Step Method',
      what: 'The five deliverables you receive',
      title: 'Five steps, five named deliverables.',
      facts: ['A-01'],
      items: [
        {
          n: '01',
          title: 'Collecting Data',
          copy: 'Read-only connections to the systems you already run, plus the work that never reaches them: spreadsheets, e-mail, chat and paper. Where nobody records the data today, we create it.',
          tag: 'One evidence base',
        },
        {
          n: '02',
          title: 'Mapping Processes and Data Flow',
          copy: 'We rebuild how work really flows, case by case, how data moves through the business, and where AI infrastructure and GPU spend go, with an owner at every link.',
          tag: 'As-built process map and data supply chain map, with owners',
        },
        {
          n: '03',
          title: 'Gap Analysis',
          copy: 'We test what really happens against your own rules, best practice and the law. Every finding carries a count, the evidence and a named owner.',
          tag: 'Findings register (count, evidence, owner, severity) and a compliance matrix: Met · Partial · Not met · No evidence',
        },
        {
          n: '04',
          title: 'Optimal Design',
          copy: 'We match each part of your business to documented best-practice models and design the target processes, controls and approval gates. Your leadership decides.',
          tag: 'Target design, a control specification per finding and a 90-day plan',
        },
        {
          n: '05',
          title: 'Implementation Live Assurance',
          copy: 'Checks run on every new case, so drift surfaces as it happens. Your teams run the controls, or we run them for you.',
          tag: 'Live checks, exceptions routed to owners and a monthly readout',
        },
      ],
    },
    {
      type: 'imageCompare',
      id: 'before-after',
      name: 'Before and after',
      what: 'One process, as it runs and as it should run',
      title: 'Drag across the process to redesign it.',
      body: 'The same travel-permit process in Atlas. Before: hidden work, rejections and exceptions, as the records show it really runs. After: the best-practice design, with a segregation-of-duties control added.',
      before: { src: '/atlas/process-before.webp', w: 676, h: 618, alt: 'Atlas process map, as is: swimlanes for source system, employee, administration and pre-approver, with hidden-work steps, rejections and exceptions marked.' },
      after: { src: '/atlas/process-after.webp', w: 676, h: 618, alt: 'Atlas process map, best practice: the same swimlanes with clean approval steps, no hidden work, and an added segregation-of-duties check.' },
    },
    {
      type: 'cards',
      id: 'three-references',
      name: 'Three references',
      what: 'The three yardsticks every finding is tested against',
      title: 'Every finding is tested three ways.',
      columns: 3,
      facts: ['A-02', 'A-03'],
      items: [
        { title: 'Your own policies and procedures' },
        { title: 'Best practice', copy: 'ISO, APQC, ITIL, COBIT, EFQM' },
        { title: 'The law and your regulators' },
      ],
    },
    {
      type: 'prose',
      id: 'capture',
      name: 'Capture',
      what: 'How we collect data that no system records',
      title: 'No data? We create it.',
      facts: ['A-21'],
      paragraphs: [
        'Where a person fills the gap today, we embed the capture in their place: OCR for paper, meetings transcribed with consent, photo stations, vision on the shop floor.',
        'Designed for your process; people only on the exceptions.',
        'Recording and vision only with consent, under GDPR and KVKK. Meeting audio is deleted once transcribed.',
      ],
    },
    {
      type: 'prose',
      id: 'people',
      name: 'The people who stay',
      what: 'Who does the work inside your organization',
      title: 'Senior people, inside your organization.',
      paragraphs: [
        'Forward-deployed engineers connect, capture and build.',
        'Forward-deployed strategy consultants judge, design and stay through implementation.',
      ],
    },
    {
      type: 'timeline',
      id: 'timeline',
      name: 'Timeline',
      what: 'Each stage of the work, in order',
      title: 'What happens, week by week.',
      facts: ['A-26'],
      items: [
        { when: 'Weeks 0–2', title: 'Connect' },
        { when: 'Weeks 2–5', title: 'Mapping Processes and Data Flow' },
        { when: 'Weeks 5–9', title: 'Check' },
        { when: 'Weeks 9–12', title: 'Forecast and hand over' },
        { when: 'Then', title: 'Run' },
      ],
    },
    {
      type: 'cards',
      id: 'ways-to-work',
      name: 'Ways to work',
      what: 'The three ways to engage us',
      title: 'Three ways to work with us.',
      columns: 3,
      facts: ['X-02'],
      items: [
        // CC-66: the One-Week Proof comes first; the rest only if it is useful.
        { title: 'One-Week Proof', copy: 'One process with its complete data. In one week: the process as built, first findings with owners, and the value at stake.' },
        { title: 'Full engagement', copy: 'A company or a business unit, 8–12 weeks, fixed fee, after a useful proof.' },
        { title: 'Managed service', copy: 'We keep the model live, with monthly readouts and agents whose every action a named person approves.' },
      ],
    },
    {
      type: 'cards',
      id: 'who-does-what',
      name: 'Who does what',
      what: 'How roles split between you and us',
      title: 'You decide. We do the work.',
      columns: 3,
      items: [
        { title: 'Sponsor', copy: 'Scope, priorities, investment' },
        { title: 'Process owners', copy: 'Approve every finding and every model update' },
        { title: 'AIx2', copy: 'Connections, modelling, checks, reporting' },
      ],
    },
    { type: 'home', ref: 'fit' },
    {
      type: 'cta',
      id: 'next-step',
      name: 'Next step',
      what: 'Your first step, and where to read about security',
      title: 'Bring us one process.',
      actions: [
        { label: 'Bring us one process', href: '/contact', variant: 'primary' },
        { label: 'Visit the Trust center', href: '/trust', variant: 'text' },
      ],
    },
  ],
};
