import type { PageContent } from './types';

/**
 * Atlas. Source: SS "Atlas". No GPU savings figure, no CPU/GPU hardware claims (A-28), no
 * repository counts beyond SS (OQ-18). System names are text only.
 */
export const atlas: PageContent = {
  route: '/atlas',
  seo: {
    title: 'AIx2 · Atlas',
    description:
      'Atlas rebuilds how your organization really runs from its own data, sets it against best practice, and backs every finding with evidence.',
  },
  hero: {
    name: 'Atlas',
    what: 'The evidence platform behind the method',
    title: 'Atlas: the evidence engine behind the company as built.',
    subhead:
      'Atlas rebuilds how your organization really runs from its own data, sets it against best practice, and backs every finding with evidence.',
  },
  blocks: [
    {
      type: 'cards',
      id: 'three-maps',
      name: 'Three maps',
      what: 'The three maps Atlas draws of one company',
      title: 'Three maps of one company.',
      columns: 3,
      items: [
        { title: 'Process', copy: 'How work really flows, from strategy to task.' },
        { title: 'Data supply chain and governance', copy: 'Where data comes from and which decisions it drives.' },
        { title: 'AI infrastructure and GPU', copy: 'Workloads, utilization and spend.' },
      ],
    },
    {
      type: 'list',
      id: 'what-it-does',
      name: 'What it does',
      what: 'The five jobs Atlas does on every case',
      title: 'Five things, on every case.',
      style: 'check',
      facts: ['A-14', 'A-15'],
      items: [
        'Extracts read-only from the systems you run',
        'Rebuilds every case: paths, variants, waits, bottlenecks, rework, drift',
        'Checks it against frameworks and your own rules, four-eyes controls included',
        'Turns each deviation into a finding (“breaks the rule in x of y cases”) with its evidence',
        'Gives leaders a decision layer and an assistant that answers only from computed facts, with a citation on every sentence',
      ],
    },
    {
      type: 'cards',
      id: 'connects-to',
      name: 'Connects to',
      what: 'The systems Atlas reads, by type',
      title: 'Reads the systems you already run.',
      columns: 3,
      facts: ['A-10'],
      items: [
        { title: 'ERP', copy: 'SAP ECC and S/4HANA, Oracle, Microsoft Dynamics 365, NetSuite, Infor, Odoo' },
        { title: 'CRM and service', copy: 'Salesforce, ServiceNow, Jira, Zendesk, HubSpot' },
        { title: 'HR' },
        { title: 'Databases and data platforms', copy: 'Oracle, SQL Server, PostgreSQL, Snowflake, Databricks' },
        { title: 'Files', copy: 'Excel, PDF, scans' },
        { title: 'E-mail and chat metadata' },
      ],
    },
    {
      type: 'cards',
      id: 'repositories',
      name: 'Repositories',
      what: 'The two best-practice models Atlas measures against',
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
      type: 'prose',
      id: 'organization-twin',
      name: 'Organization Twin',
      what: 'How the maps grow into one model',
      title: 'From maps to a live model of the company.',
      facts: ['A-25'],
      paragraphs: [
        'Process and data are the first two modules; decisions, roles, applications, organization, finance, customers, suppliers and assets join them.',
        'On top run decision-support agents that propose actions; a named person approves each one.',
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
      type: 'stats',
      id: 'performance',
      name: 'Performance',
      what: 'Speed figures from our reference build',
      title: 'Built for real volumes.',
      facts: ['A-08'],
      items: [
        { figure: '50 million events', text: 'ingested in about 11 minutes', source: 'Reference build, one server', facts: ['A-08'] },
        { figure: '2.77 million events', text: 'fully analysed in 27 seconds', source: 'Reference build, one server', facts: ['A-08'] },
      ],
    },
    {
      type: 'cards',
      id: 'deployment',
      name: 'Deployment',
      what: 'Where your data can live',
      title: 'Your boundary, your choice.',
      columns: 3,
      facts: ['A-11', 'A-12', 'A-13'],
      items: [
        { title: 'On-premise', copy: 'No data, model call or telemetry leaves' },
        { title: 'Cloud managed by AIx2', copy: 'The fastest start; only masked text goes to model providers, never used for their training' },
        { title: 'Sovereign', copy: 'The runtime is yours, wholly inside your environment' },
      ],
    },
    {
      type: 'cards',
      id: 'screens',
      name: 'Screens',
      what: 'Atlas screens, with no client names',
      title: 'See it.',
      columns: 3,
      items: [
        { title: 'Dashboard', dependsOn: 'OQ-19' },
        { title: 'Workflow graph', dependsOn: 'OQ-19' },
        { title: 'Findings register', dependsOn: 'OQ-19' },
        { title: 'Compliance matrix', dependsOn: 'OQ-19' },
        { title: 'Overrun forecast, with causes and an approval step', dependsOn: 'OQ-19' },
      ],
    },
    {
      type: 'cta',
      id: 'next-step',
      name: 'Next step',
      what: 'Your first step with Atlas',
      title: 'Atlas works best with the people who run it with you.',
      dependsOn: 'OQ-18',
      actions: [
        { label: 'Request a technical walkthrough', href: '/contact?topic=walkthrough', variant: 'primary' },
        { label: 'Download the product profile', href: '/contact?topic=product-profile', variant: 'secondary' },
      ],
    },
  ],
};
