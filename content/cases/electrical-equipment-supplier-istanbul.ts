import type { CasePageContent } from '../pages/types';

/**
 * Case page: electrical and Ex-proof equipment supplier, Istanbul (Welektrik).
 *
 * CC-58 (user, 2026-11-01): the earlier version told the engagement that stopped at month 2 (source
 * 5_Welektrik.html). The user asked for it to be written as a success scenario, composed from what is
 * known about the company (founded 2022, about 50 people, panels, special cables, gas detectors, Ex-proof
 * projects, an academy; Istanbul and Balıkesir) and from the method. Every figure below is part of that
 * scenario: facts WEL-11 to WEL-20, flagged ⚠️ OQ-41 (confirm the figures with the client before launch).
 * The original story stays in inputs/company/Client Story/5_Welektrik.html. No people's names; the fee is not shown (OQ-12).
 */
export const electricalEquipmentSupplierIstanbul: CasePageContent = {
  route: '/proof/electrical-equipment-supplier-istanbul',
  seo: {
    title: 'AIx2 · Case: Welektrik, from fast growth to controlled delivery',
    description:
      'A fast-growing supplier of panels, special cables and Ex-proof equipment mapped its order-to-delivery path from its own data in 12 weeks. Promised dates kept rose from 68% to 90%, and every process now has an owner.',
  },
  client: 'Electrical and Ex-proof equipment supplier · Istanbul and Balıkesir · ~50 people',
  name: 'Welektrik',
  story: [
    {
      heading: 'The engagement in brief',
      paragraphs: [
        'Welektrik Enerji Sanayi Tic. Ltd. Şti. · electrical and Ex-proof equipment · Istanbul and Balıkesir',
        'A four-year-old company that grew faster than its processes, and fixed that in one quarter',
        'Welektrik supplies low-voltage and distribution panels, special cables, gas detectors and Ex-proof project solutions, and runs an academy. Founded in 2022, it reached about 50 people with two sites. Orders grew, and delivery dates, documentation packages and stock records did not keep up.',
        'Client issue: nobody could say, with evidence, why some projects shipped on the promised day and others slipped by weeks. Quotes, orders, purchasing, production and dispatch lived in an ERP, in spreadsheets and in messaging groups.',
        'Solution: after a short readiness check, AIx2 ran a 12-week due diligence of the order-to-delivery path. The managing director signed data access for all nine core sources before kick-off, and every process had a named owner by week 4.',
        'Impact: the work found 21 findings, four of them critical. Within four months of the 90-day plan, orders delivered on the promised date rose from 68% to 90%, and complete documentation packages at dispatch from 62% to 96%.',
      ],
    },
    {
      heading: 'Where the company stood',
      paragraphs: [
        'Welektrik won projects on speed and technical range: panels built to IEC 61439, special cables for solar, fire-resistant and low-smoke uses, gas detection, and Ex-proof equipment for plants. The academy trained installers and engineers on the same products.',
        'Growth came from two sites. Engineering and sales sat in Istanbul; assembly and the warehouse in Balıkesir. A quote left Istanbul as a spreadsheet, an order reached Balıkesir as a message, and the documentation file was assembled by hand on the day of dispatch.',
        'The managing director asked one question: where does an order lose time between the quote and the truck, and who owns each step?',
      ],
    },
    {
      heading: 'Why the work started with a readiness check',
      paragraphs: [
        'Welektrik was young, so AIx2 did not start with a full due diligence. A two-week readiness check asked six things: whether the ERP was in real use, whether key processes had owners, whether data access could be signed off by the sponsor before kick-off, whether the main flows were documented, whether an executive had time every week, and whether the operation was stable enough to map.',
        'Four were in place. Two were not: process owners, and a written access sign-off. The managing director closed both within ten days, then signed access to the nine core sources and named the owners. The due diligence started only after that.',
      ],
    },
    {
      heading: 'What AIx2 did',
      paragraphs: [
        'Weeks 0–2 · Connect: read-only connections to nine sources: the ERP, accounting, CRM, the project files, the purchasing mailbox, the warehouse sheets, the quality records, the dispatch log and the academy bookings.',
        'Weeks 2–6 · Map: the order-to-delivery path as it really ran, case by case, from the quote to the dispatch note. Fourteen processes, three data flows, and the routes that bypassed the ERP.',
        'Weeks 6–10 · Find the gap: every case checked against Welektrik’s own procedures, IEC 61439 verification requirements and the documentation each Ex-proof delivery needs. 21 findings, each with a count, the evidence and a named owner.',
        'Weeks 10–12 · Design: target processes, a control for each critical finding and a 90-day plan, approved by the managing director. Welektrik’s teams built the controls; AIx2 ran live checks on every new order.',
      ],
    },
    {
      heading: 'What we found',
      paragraphs: [
        'Quotes were approved in a messaging group, outside the ERP. 38% of panel quotes had a price or a lead time that did not match the order that followed.',
        'The documentation file for each panel was assembled on the day of dispatch. 38% of dispatches left Balıkesir with an incomplete verification file, and the customer waited for it.',
        'Special-cable orders were cut to a length typed in a message. 7% needed rework for a wrong length or specification.',
        'Stock counts at Balıkesir matched the warehouse sheet for 81% of items, so purchasing ordered by feel.',
        'Fourteen processes were running, and five had an owner. Several people did the same work in different ways.',
      ],
    },
    {
      heading: 'What changed',
      paragraphs: [
        'Quotes and orders moved into the ERP with one approval step. The quote-to-order cycle fell from 9 days to 4.',
        'The documentation file is now built as the panel is built, and a live check blocks dispatch when it is incomplete. Complete files at dispatch rose from 62% to 96%.',
        'Cable orders are cut from the order record, not from a message. Rework fell from 7% to 2%.',
        'A weekly count of the fastest-moving items lifted stock accuracy at Balıkesir from 81% to 97%.',
        'Every one of the 14 processes has an owner, and exceptions go to that person the same day.',
      ],
    },
    {
      heading: 'How the results were verified',
      paragraphs: [
        'Welektrik’s finance lead measured delivery, rework and stock accuracy from the ERP and the dispatch log. AIx2 measured documentation completeness and quote accuracy from its live checks.',
        'Window: the 4 months after the 90-day plan (Jan–Apr 2026) against the 12 months to Sep 2025. Sample: all 612 projects and orders delivered in the baseline window and 247 in the measured window.',
        'The managing director signed off every finding and every control before it went live.',
      ],
    },
    {
      heading: 'Commercial outcome',
      paragraphs: [
        'Modelled from the measured results, with the finance lead’s attribution rule: only the share of the change that Welektrik’s finance lead agreed came from the new controls.',
        'About €280,000 a year from fewer reworked cable orders, fewer re-sent documentation packages and faster payment on delivery. A first conversation about payback: under one year on the engagement.',
        'The fee is not shown.',
      ],
    },
    {
      heading: 'What the client said it changed',
      paragraphs: [
        'For the first time the management team looks at the same facts on Monday morning: which projects are late, why, and who owns the fix.',
        'The company can now take larger Ex-proof projects, where a complete documentation file is a condition of the order.',
      ],
    },
  ],
  profile: {
    description:
      'Welektrik is an electrical and Ex-proof equipment supplier of about 50 people, founded in 2022 in Istanbul, with a facility in Balıkesir. It supplies low-voltage and distribution panels, special cables, gas detectors and Ex-proof project solutions, and runs an academy.',
    situation:
      'Orders were growing faster than the processes behind them. Quotes, orders, purchasing, production and dispatch lived in an ERP, spreadsheets and messaging groups, only 5 of 14 processes had an owner, and 38% of dispatches left with an incomplete documentation file.',
    whatWeDid: [
      'Started with a one-week proof of concept on one process; the full engagement followed once it proved useful',
      'Ran a two-week readiness check first, against six criteria; the managing director then signed data access and named the process owners',
      'Connected read-only to nine sources, each with a data contract and a named owner',
      'Mapped the order-to-delivery path as it really ran: 14 processes and 3 data flows',
      'Checked every case against Welektrik’s own procedures, IEC 61439 verification requirements and Ex-proof documentation needs: 21 findings, 4 critical',
      'Designed target processes and a control for each critical finding, approved by the managing director',
      'Ran live checks on every new order, so a missing document or a mismatched quote surfaces the same day',
    ],
    duration: 'Two-week readiness check, then a 12-week due diligence; results measured over the 4 months after the 90-day plan',
    phases: [
      { when: 'Week 0', what: 'One-week proof of concept on one process' },
      { when: 'Weeks 0–2', what: 'Readiness check; access signed off' },
      { when: 'Weeks 2–6', what: 'Connect and map' },
      { when: 'Weeks 6–10', what: 'Find the gap' },
      { when: 'Weeks 10–12', what: 'Design and plan' },
      { when: 'Months 4–8', what: 'Live checks; results measured by Welektrik’s finance lead' },
    ],
    team: ['Managing director (executive sponsor)', 'Operations director', 'Finance lead', 'Head of engineering', 'Warehouse and dispatch lead'],
    scope: ['ERP and accounting', 'CRM and quotes', 'Project and quality files', 'Purchasing mailbox', 'Warehouse sheets', 'Dispatch log', 'Academy bookings'],
    facts: ['WEL-11', 'WEL-12', 'WEL-13', 'WEL-14', 'WEL-15', 'USR-01', 'USR-10'],
  },
  headline: 'Promised dates kept: 68% to 90%. Every process owned.',
  keyStats: [
    { label: 'Orders delivered on the promised date', from: '68%', to: '90%', facts: ['WEL-11'] },
    { label: 'Dispatches with a complete documentation file', from: '62%', to: '96%', facts: ['WEL-12'] },
    { label: 'Quote to order', from: '9 days', to: '4 days', facts: ['WEL-13'] },
  ],
  summary: {
    issue:
      'A company of about 50 people, founded in 2022, had grown to two sites and a wide range: panels, special cables, gas detectors and Ex-proof projects. Delivery dates slipped, documentation was assembled by hand on the day of dispatch, and only 5 of 14 processes had an owner.',
    solution:
      'After a two-week readiness check, AIx2 ran a 12-week due diligence of the order-to-delivery path from nine data sources, with the managing director’s access sign-off before kick-off. It found 21 findings, four of them critical, and designed a control for each critical one. Welektrik’s teams built the controls, and live checks ran on every new order.',
    impact:
      'Within four months: orders delivered on the promised date rose from 68% to 90%, complete documentation files at dispatch from 62% to 96%, and the quote-to-order cycle fell from 9 days to 4. All 14 processes have an owner. The company now takes larger Ex-proof projects, where a complete file is a condition of the order.',
  },
  table: [
    { label: 'Delivery on the promised date', from: '68% of orders', to: '90% of orders', facts: ['WEL-11'] },
    { label: 'Documentation file at dispatch', from: '62% complete', to: '96% complete', facts: ['WEL-12'] },
    { label: 'Quote to order', from: '9 days', to: '4 days', facts: ['WEL-13'] },
    { label: 'Special-cable orders reworked', from: '7%', to: '2%', facts: ['WEL-14'] },
    { label: 'Stock accuracy at Balıkesir', from: '81% of items', to: '97% of items', facts: ['WEL-15'] },
    { label: 'Processes with a named owner', from: '5 of 14', to: '14 of 14', facts: ['WEL-16'] },
  ],
  measured: [
    {
      label: 'Orders delivered on the promised date',
      definition: 'Share of orders and projects shipped on or before the date promised in the order confirmation',
      before: '68%',
      after: '90%',
      sample: '612 orders in the baseline window; 247 in the measured window',
      source: 'ERP and dispatch log, measured by Welektrik’s finance lead',
      facts: ['WEL-11'],
    },
    {
      label: 'Dispatches with a complete documentation file',
      definition: 'Share of panel and Ex-proof dispatches that left with the full verification and documentation file',
      before: '62%',
      after: '96%',
      sample: 'All panel and Ex-proof dispatches in each window',
      source: 'AIx2 live check on the documentation file, confirmed by the quality lead',
      facts: ['WEL-12'],
    },
    {
      label: 'Quote to order',
      definition: 'Median days from the quote being sent to the order being entered in the ERP',
      before: '9 days',
      after: '4 days',
      sample: 'All quoted projects in each window',
      source: 'ERP, measured by Welektrik’s finance lead',
      facts: ['WEL-13'],
    },
    {
      label: 'Special-cable orders reworked',
      definition: 'Share of special-cable orders re-cut or re-sent for a wrong length or specification',
      before: '7%',
      after: '2%',
      sample: 'All special-cable orders in each window',
      source: 'Dispatch log and credit notes, measured by Welektrik’s finance lead',
      facts: ['WEL-14'],
    },
    {
      label: 'Stock accuracy at Balıkesir',
      definition: 'Share of counted items where the warehouse sheet matched the physical count',
      before: '81%',
      after: '97%',
      sample: 'Weekly counts of the fastest-moving items',
      source: 'Warehouse counts, reviewed by the operations director',
      facts: ['WEL-15'],
    },
  ],
  verification: [
    'Welektrik’s finance lead measured delivery, quote-to-order, rework and stock accuracy from the ERP and the dispatch log',
    'AIx2 measured documentation completeness from its live checks, confirmed by the quality lead',
    'Window: Jan–Apr 2026 against the 12 months to Sep 2025',
    'The managing director signed off every finding and every control before it went live',
  ],
  financial: {
    paragraphs: [
      'Modelled from the measured results, with an explicit attribution rule: only the share of each change that Welektrik’s finance lead agreed came from the new controls.',
      'About €280,000 a year, from fewer reworked cable orders, fewer re-sent documentation packages and faster payment on delivery. Payback on the engagement: under one year.',
    ],
    dependsOn: 'OQ-41',
  },
  howItRan: {
    work: [
      'Weeks 0–2 · Readiness check: six criteria checked, two gaps closed by the managing director, access signed before kick-off.',
      'Weeks 2–6 · Map: the order-to-delivery path as it really ran, 14 processes and 3 data flows.',
      'Weeks 6–10 · Find the gap: every case checked against Welektrik’s procedures, IEC 61439 and Ex-proof documentation needs. 21 findings.',
      'Weeks 10–12 · Design: a control for each critical finding and a 90-day plan, approved by the managing director.',
      'Human sign-off at every step: the managing director approved every finding and control; the owners ran them.',
    ],
    data: [
      'Read-only connections to nine sources, each with a data contract and a named owner.',
      'Everything stayed on Welektrik’s own servers. AIx2 held no copy after the engagement.',
    ],
  },
  required: [
    { category: 'Map work from event logs', detail: 'The ERP held two years of orders and dispatches, so the as-built map could be rebuilt from real events.' },
    { category: 'Capture work outside the systems', detail: 'Quotes approved in messaging groups and files assembled by hand were read from the mailbox, the sheets and the shared folders.' },
    { category: 'Join process and data', detail: 'Each order was followed from quote to dispatch note across the ERP, the sheets and the quality records.' },
    { category: 'Check against procedures and standards', detail: 'Welektrik’s own procedures, IEC 61439 verification requirements and the documentation each Ex-proof delivery needs.' },
  ],
  forYou: [
    'An ERP or core system in use for two years or more: event data must exist',
    'A named owner for each key process: every finding needs an owner',
    'Data access signed off by your sponsor before kick-off: no weeks of waiting',
    'Documented procedures for the main flows: the check needs a baseline',
    'An executive sponsor with time every week: decisions in days',
    'A company still taking shape starts with a short readiness check, as Welektrik did, and moves to the full due diligence when the basics are in place.',
  ],
  timeline: [
    { when: 'Weeks 0–2', what: 'Readiness check; the managing director signs access and names the owners.' },
    { when: 'Weeks 2–6', what: 'Nine sources connected; the order-to-delivery path mapped.' },
    { when: 'Weeks 6–10', what: '21 findings, four critical, each with evidence and an owner.' },
    { when: 'Weeks 10–12', what: 'Controls designed and a 90-day plan approved.' },
    { when: 'Months 4–8', what: 'Live checks on every new order; results measured.' },
  ],
  owners: [
    'Managing director: signed access before kick-off and approved every finding and control',
    'Operations director: owned the order-to-delivery path and the weekly stock count',
    'Finance lead: measured delivery, rework and stock accuracy',
    'Head of engineering: owned the documentation file for panels and Ex-proof deliveries',
    'AIx2: readiness check, mapping, findings, control design and live checks',
  ],
  madeItWork: [
    'The sponsor signed data access before kick-off, so the work started on day one.',
    'Every process had a named owner by week 4, so every finding had someone to act on it.',
    'The readiness check came first: a young company moved to the full due diligence only when the basics were in place.',
    'Welektrik’s own teams built the controls; live checks kept them honest.',
  ],
  oneYearLater: undefined,
  measurementLabel: 'Measured by Welektrik’s finance lead: Jan–Apr 2026 vs the 12 months to Sep 2025.',
  facts: ['WEL-11', 'WEL-12', 'WEL-13', 'WEL-14', 'WEL-15', 'WEL-16', 'WEL-17', 'WEL-18', 'WEL-19', 'WEL-20', 'USR-01', 'USR-08'],
  dependsOn: 'OQ-41',
};
