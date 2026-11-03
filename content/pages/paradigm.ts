import type { PageContent } from './types';

/**
 * Paradigm (replaces the Atlas page in the menu; user, 2026-10-30): how AIx2 looks at the work, in five
 * points the user gave. Supporting copy comes from the Plug and Play Summit deck (vShare slides 6, 9, 10)
 * and from the Atlas page (SS "Atlas"); its facts keep their IDs. New strings: CC-34.
 */
export const paradigm: PageContent = {
  route: '/paradigm',
  seo: {
    title: 'AIx2 · Paradigm',
    description:
      'How AIx2 works: from your actual data, continuously and in real time, end to end until the result, delivered as a service, on-premise with open models.',
  },
  hero: {
    name: 'Paradigm',
    what: 'How we look at the work, in five points',
    title: 'Five things we will not compromise on.',
    subhead:
      'An enterprise intelligence platform with expert support when needed. We read the company from its own data, keep reading it, stay until the result, and keep the data inside your walls.',
  },
  blocks: [
    {
      type: 'cards',
      id: 'actual-data',
      name: 'From actual data',
      what: 'We read your systems, not people’s memories',
      title: 'From your actual data, not from interviews.',
      body: 'Read-only links to the systems you already run, plus the work that never reaches a system: spreadsheets, e-mail, chat, paper and the shop floor.',
      columns: 3,
      facts: ['A-10'],
      items: [
        { title: 'ERP', copy: 'SAP ECC and S/4HANA, Oracle, Microsoft Dynamics 365, NetSuite, Infor, Odoo' },
        { title: 'CRM and service', copy: 'Salesforce, ServiceNow, Jira, Zendesk, HubSpot' },
        { title: 'Databases and data platforms', copy: 'Oracle, SQL Server, PostgreSQL, Snowflake, Databricks' },
        { title: 'Files', copy: 'Excel, PDF, scans' },
        { title: 'E-mail and chat metadata' },
        { title: 'No data? We create it', copy: 'Forms digitised, cameras on the shop floor, meetings recorded with consent' },
      ],
    },
    {
      type: 'stats',
      id: 'real-time',
      name: 'Continuous and real time',
      what: 'Not a snapshot: the model keeps reading',
      title: 'Continuous and in real time, not a report that ages.',
      body: 'The as-built model keeps reading the systems after the diagnosis, so every case is checked as it happens and drift shows the day it starts.',
      facts: ['A-08'],
      items: [
        { figure: '50 million events', text: 'ingested in about 11 minutes', source: 'Reference build, one server', facts: ['A-08'] },
        { figure: '2.77 million events', text: 'fully analysed in 27 seconds', source: 'Reference build, one server', facts: ['A-08'] },
      ],
    },
    {
      type: 'flow',
      id: 'end-to-end',
      name: 'End to end',
      what: 'From the first data to a result that holds',
      title: 'End to end, until the result.',
      body: 'We do not hand over software and leave. The same team runs every step, from collecting data to checking the change on every live case.',
      shape: 'lane',
      items: [
        { title: 'Collecting Data', copy: 'Connect ERP, CRM and other systems; capture hidden work in Excel, e-mail and chat' },
        { title: 'Mapping Processes and Data Flow', copy: 'Map processes as they really run, and the data behind them' },
        { title: 'Gap Analysis', copy: 'Measure the gap to best practice; surface red flags in processes and data' },
        { title: 'Optimal Design', copy: 'Design the optimal processes and data flow; build the transformation playbook' },
        { title: 'Implementation Live Assurance', copy: 'Run live QC on every case, and score the company in real time against the optimal design' },
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
      type: 'gallery',
      id: 'screens',
      name: 'See it in Atlas',
      what: 'Screens from our platform, as it runs',
      title: 'The paradigm, on screen.',
      body: 'Atlas is the platform behind the five points. These screens come from a demonstration workspace.',
      items: [
        { src: '/atlas/diligence.webp', w: 752, h: 515, title: 'Red flags by role', caption: 'Open gaps and critical red flags, set against the standards for each role.' },
        { src: '/atlas/pyramid.webp', w: 716, h: 400, title: 'From strategy to action', caption: 'Five layers, from strategies to policies, programs, projects and actions; each link counts the records behind it.' },
        { src: '/atlas/qa.webp', w: 752, h: 535, title: 'Live QA on every finding', caption: 'Each gap, with its risk level, owner and evidence, checked continuously.' },
      ],
    },
    {
      type: 'cards',
      id: 'as-a-service',
      name: 'Delivered as a service',
      what: 'Engineers and consultants who stay with you',
      title: 'A service, not only software.',
      body: 'Our experts ensure results by expanding your data sources and staying with you through the implementation.',
      columns: 3,
      items: [
        { title: 'Forward-deployed engineering', copy: 'Engineers inside your organization connect the data and build the model with your teams.' },
        { title: 'Forward-deployed strategy consulting', copy: 'Consultants turn the evidence into decisions, owners and a plan your leaders sign off.' },
        { title: 'Managed service', copy: 'After the diagnosis, we keep the model running and the controls checked, for as long as you need.' },
      ],
    },
    {
      type: 'cards',
      id: 'on-premise',
      name: 'On-premise, open models',
      what: 'Your data never leaves your walls',
      title: 'On-premise, with open-source models.',
      body: 'The models run inside your environment, so data, model calls and telemetry stay with you. Confidentiality is designed in, not promised.',
      columns: 3,
      facts: ['A-11', 'A-12', 'A-13'],
      items: [
        { title: 'On-premise', copy: 'No data, model call or telemetry leaves' },
        { title: 'Sovereign', copy: 'The runtime is yours, wholly inside your environment' },
        { title: 'Cloud managed by AIx2', copy: 'The fastest start; only masked text goes to model providers, never used for their training' },
      ],
    },
    {
      type: 'list',
      id: 'built-to-be-trusted',
      name: 'Built to be trusted',
      what: 'The guarantees built into every result',
      title: 'Computed by code. Explained by AI. Approved by people.',
      style: 'check',
      facts: ['A-14', 'A-15', 'A-16', 'A-27'],
      items: [
        'Same input, same result',
        'The full population of cases, not samples',
        'A light model screens, people decide, a second person approves before anything is published',
        'Lineage from any figure to its source file',
        'Every model call open to inspection',
      ],
    },
    {
      type: 'cards',
      id: 'repositories',
      name: 'Repositories',
      what: 'The two best-practice models we measure against',
      title: 'A documented yardstick, not an opinion.',
      columns: 2,
      facts: ['A-04', 'A-06'],
      items: [
        {
          title: 'Process repository',
          copy: '21 business modules, five levels from module to task, every task typed by who does it, so automation potential is measured task by task',
        },
        {
          title: 'Data governance repository',
          copy: '13 layers under one governing layer, showing what is missing, defined differently or aligned',
        },
      ],
    },
    {
      type: 'cta',
      id: 'next-step',
      name: 'Next step',
      what: 'See the paradigm on one of your processes',
      title: 'Bring us one process.',
      subhead: 'We’ll show you how it really runs, what to fix, and what to do next.',
      actions: [
        { label: 'Book a 30-minute call', href: 'https://meetings.hubspot.com/aix2/aix2-team', variant: 'primary' },
        { label: 'Request a technical walkthrough', href: '/contact?topic=walkthrough', variant: 'secondary' },
      ],
    },
  ],
};
