import type { CasePageContent } from '../pages/types';

/**
 * Case page: lubricants and greases manufacturer, UAE with German roots (Mirr Oils / German Mirror).
 *
 * CC-59 (user, 2026-11-01): there is no client-story file for this client, so the user asked for a story
 * composed from what the company publishes (founded in Nuremberg in 1995, in the UAE since 2000, a blending
 * and filling plant in the Hamriyah Free Zone, Sharjah, engine, industrial and marine oils and greases,
 * ISO 9001 and ISO/IEC 17025, sold in many countries) and from the method. Every figure is part of that
 * scenario: facts MO-01 to MO-12, flagged ⚠️ OQ-42 (confirm with the client before launch). No people's
 * names; the fee is not shown (OQ-12).
 */
export const mirrOils: CasePageContent = {
  route: '/proof/lubricants-manufacturer-uae',
  seo: {
    title: 'AIx2 · Case: Mirr Oils, from order to dispatch under control',
    description:
      'A lubricants and greases manufacturer selling in many countries mapped its path from distributor order to dispatch from its own data in 12 weeks. Export orders now ship in 8 days instead of 14, and documentation errors fell from 11% to 2%.',
  },
  client: 'Lubricants and greases manufacturer · UAE, German roots · ~300 people',
  name: 'Mirr Oils',
  story: [
    {
      heading: 'The engagement in brief',
      paragraphs: [
        'German Mirror Lubricants & Greases (brand: Mirr Oils) · engine, industrial and marine oils and greases · Hamriyah Free Zone, Sharjah',
        'A manufacturer selling in many countries, and the 12 weeks that put every batch and every export order on one map',
        'The company was incorporated in Nuremberg in 1995 and has run from the UAE since 2000. Its own blending plant, grease plant, filling lines and can-making serve distributors in many countries under the Mirr Oils name and under private labels.',
        'Client issue: growth had added products, pack sizes and destinations faster than the processes around them. Nobody could say, with evidence, where an export order lost its days between the distributor’s request and the truck at the port.',
        'Solution: AIx2 ran a 12-week due diligence of the path from distributor order to dispatch, across seven sources, with the group CEO’s sign-off on access before kick-off. It found 24 findings, five of them critical, and designed a control for each critical one.',
        'Impact: within six months of the 90-day plan, export orders shipped in a median of 8 days instead of 14, batches needing a re-test or re-blend fell from 6.5% to 2%, and export-document errors from 11% to 2%.',
      ],
    },
    {
      heading: 'Where the company stood',
      paragraphs: [
        'Mirr Oils blends and fills engine oils, hydraulic and gear oils, marine lubricants and greases, and packs them from small bottles to drums, totes and bulk. Its quality system is certified to ISO 9001, and its laboratory to ISO/IEC 17025.',
        'The product range kept widening: private labels, toll blending, new pack sizes, new destinations. Each addition touched the same chain: a distributor order, a formulation, a blend, a lab release, packaging, a filling slot, export documents and shipping.',
        'The group CEO asked one question: where does an order lose time between the distributor’s request and the port, and who owns each step?',
      ],
    },
    {
      heading: 'What AIx2 did',
      paragraphs: [
        'Weeks 0–2 · Connect: read-only connections to seven sources: the ERP, the batch and blend records, the laboratory system, the warehouse, the packaging-materials plan, the export-document files and the distributor order mailbox.',
        'Weeks 2–6 · Map: the order-to-dispatch path as it really ran, order by order. 16 processes, four data flows, and the routes around the ERP: orders agreed by e-mail, packaging booked on a shared sheet, certificates typed by hand.',
        'Weeks 6–10 · Find the gap: every order checked against Mirr Oils’ own procedures, its ISO 9001 and ISO/IEC 17025 requirements and each destination’s document rules. 24 findings, each with a count, the evidence and a named owner.',
        'Weeks 10–12 · Design: target processes, a control for each critical finding and a 90-day plan, approved by the group CEO. The company’s own teams built the controls; AIx2 ran live checks on every new order.',
      ],
    },
    {
      heading: 'What we found',
      paragraphs: [
        'Export orders waited a median of 14 days from distributor request to dispatch, and the longest waits were not in the plant. They sat in document preparation and in the wait for packaging.',
        '11% of export shipments had a document error: a certificate of analysis that did not match the batch, or a packing list that did not match the pallets. Each one cost days at the port.',
        '6.5% of batches needed a re-test or a re-blend, mostly because the formulation sheet in use was not the latest approved one.',
        'The filling line stopped nine times a month for missing packaging: caps, labels or cartons booked on a sheet that was not tied to the order book.',
        'Of 16 processes, six had a named owner. Several people did the same work in different ways.',
      ],
    },
    {
      heading: 'What changed',
      paragraphs: [
        'Distributor orders move into the ERP with one approval step, and the packaging plan reads from the order book. Filling-line stoppages fell from nine a month to two.',
        'The formulation sheet is pulled from the approved record at the moment of the blend, and a live check blocks a batch that uses an older version. Batches needing a re-test or re-blend fell from 6.5% to 2%.',
        'The certificate of analysis and the packing list are generated from the batch and the pallets, not typed. Export-document errors fell from 11% to 2%.',
        'Export orders now ship in a median of 8 days, and 91% of distributor orders arrive complete and on time, up from 72%.',
        'All 16 processes have an owner, and exceptions go to that person the same day.',
      ],
    },
    {
      heading: 'How the results were verified',
      paragraphs: [
        'Mirr Oils’ finance lead and quality manager measured dispatch time, on-time and complete delivery, re-blends and stoppages from the ERP, the batch records and the filling-line log. AIx2 measured document errors from its live checks.',
        'Window: the 6 months after the 90-day plan (Feb–Jul 2026) against the 12 months to Sep 2025. Sample: 1,840 export orders in the baseline window and 1,020 in the measured window.',
        'The group CEO signed off every finding and every control before it went live.',
      ],
    },
    {
      heading: 'Commercial outcome',
      paragraphs: [
        'Modelled from the measured results, with the finance lead’s attribution rule: only the share of each change that the finance lead agreed came from the new controls.',
        'About USD 0.9 million a year from fewer re-blends, fewer filling-line stoppages and fewer port-side claims, plus a one-off release of about USD 2.4 million of working capital as days of finished stock fell from 74 to 52. Payback on the engagement: under one year.',
        'The fee is not shown.',
      ],
    },
    {
      heading: 'What the client said it changed',
      paragraphs: [
        'For the first time the leadership team reads one set of facts every Monday: which orders are late, why, and who owns the fix.',
        'The company can take on more private-label and toll-blending work without adding the paperwork that used to come with each new product, because the documents now come from the batch.',
      ],
    },
  ],
  profile: {
    description:
      'Mirr Oils is the premium brand of German Mirror Lubricants & Greases, a manufacturer of engine, industrial and marine oils and greases. It was incorporated in Nuremberg in 1995, has run from the Hamriyah Free Zone in Sharjah, UAE, since 2000, has about 300 people, and sells through distributors in many countries.',
    situation:
      'The range, the pack sizes and the destinations had grown faster than the processes behind them. Distributor orders, packaging, lab release and export documents lived in an ERP, shared sheets and e-mail. Only 6 of 16 processes had an owner, and 11% of export shipments had a document error.',
    whatWeDid: [
      'Started with a one-week proof of concept on one process; the full engagement followed once it proved useful',
      'Agreed access with the group CEO before kick-off, and named an owner for each process by week 4',
      'Connected read-only to seven sources, each with a data contract and a named owner',
      'Mapped the order-to-dispatch path as it really ran: 16 processes and four data flows',
      'Checked every order against Mirr Oils’ own procedures, ISO 9001 and ISO/IEC 17025 requirements and each destination’s document rules: 24 findings, 5 critical',
      'Designed target processes and a control for each critical finding, approved by the group CEO',
      'Ran live checks on every new order and batch, so a mismatched document or an outdated formulation surfaces the same day',
    ],
    duration: 'A 12-week due diligence; results measured over the 6 months after the 90-day plan',
    phases: [
      { when: 'Week 0', what: 'One-week proof of concept on one process' },
      { when: 'Weeks 0–2', what: 'Connect; access signed off' },
      { when: 'Weeks 2–6', what: 'Map the order-to-dispatch path' },
      { when: 'Weeks 6–10', what: 'Find the gap' },
      { when: 'Weeks 10–12', what: 'Design and plan' },
      { when: 'Months 4–10', what: 'Live checks; results measured by the finance lead and the quality manager' },
    ],
    team: ['Group CEO (executive sponsor)', 'Chief operating officer', 'Finance lead', 'Quality manager and laboratory head', 'Head of supply chain', 'Head of export sales'],
    scope: ['ERP and accounting', 'Batch and blend records', 'Laboratory system', 'Warehouse', 'Packaging-materials plan', 'Export-document files', 'Distributor order mailbox'],
    facts: ['MO-01', 'MO-02', 'MO-03', 'MO-04', 'MO-05', 'USR-01', 'USR-10'],
  },
  headline: 'Export orders shipped in 8 days, not 14. Document errors from 11% to 2%.',
  keyStats: [
    { label: 'Export orders, request to dispatch', from: '14 days', to: '8 days', facts: ['MO-01'] },
    { label: 'Export shipments with a document error', from: '11%', to: '2%', facts: ['MO-02'] },
    { label: 'Batches needing a re-test or re-blend', from: '6.5%', to: '2%', facts: ['MO-03'] },
  ],
  summary: {
    issue:
      'A manufacturer of engine, industrial and marine lubricants and greases, with its own blending, grease and filling plants and distributors in many countries, had added products, pack sizes and destinations faster than its processes. Export orders waited a median of 14 days, 11% of shipments had a document error, and only 6 of 16 processes had an owner.',
    solution:
      'AIx2 ran a 12-week due diligence of the path from distributor order to dispatch across seven sources, with the group CEO’s access sign-off before kick-off. It found 24 findings, five of them critical, and designed a control for each critical one. The company’s teams built the controls, and live checks ran on every new order and batch.',
    impact:
      'Within six months: export orders shipped in 8 days instead of 14, document errors fell from 11% to 2%, batches needing a re-test or re-blend from 6.5% to 2%, and complete on-time delivery rose from 72% to 91%. All 16 processes have an owner.',
  },
  table: [
    { label: 'Export order, request to dispatch', from: '14 days (median)', to: '8 days (median)', facts: ['MO-01'] },
    { label: 'Export shipments with a document error', from: '11%', to: '2%', facts: ['MO-02'] },
    { label: 'Batches needing a re-test or re-blend', from: '6.5%', to: '2%', facts: ['MO-03'] },
    { label: 'Filling-line stoppages for missing packaging', from: '9 a month', to: '2 a month', facts: ['MO-04'] },
    { label: 'Distributor orders complete and on time', from: '72%', to: '91%', facts: ['MO-05'] },
    { label: 'Days of finished stock', from: '74 days', to: '52 days', facts: ['MO-06'] },
    { label: 'Processes with a named owner', from: '6 of 16', to: '16 of 16', facts: ['MO-07'] },
  ],
  measured: [
    {
      label: 'Export order, request to dispatch',
      definition: 'Median days from the distributor’s order request to the shipment leaving the plant',
      before: '14 days',
      after: '8 days',
      sample: '1,840 export orders in the baseline window; 1,020 in the measured window',
      source: 'ERP and dispatch log, measured by Mirr Oils’ finance lead',
      facts: ['MO-01'],
    },
    {
      label: 'Export shipments with a document error',
      definition: 'Share of export shipments with a certificate or packing-list mismatch found before or at the port',
      before: '11%',
      after: '2%',
      sample: 'All export shipments in each window',
      source: 'AIx2 live check on export documents, confirmed by the quality manager',
      facts: ['MO-02'],
    },
    {
      label: 'Batches needing a re-test or re-blend',
      definition: 'Share of batches that failed first release and went to a re-test or a re-blend',
      before: '6.5%',
      after: '2%',
      sample: 'All batches in each window',
      source: 'Laboratory system and batch records, measured by the quality manager',
      facts: ['MO-03'],
    },
    {
      label: 'Filling-line stoppages for missing packaging',
      definition: 'Stoppages of more than 30 minutes caused by missing caps, labels or cartons, per month',
      before: '9 a month',
      after: '2 a month',
      sample: 'Filling-line log, every month in each window',
      source: 'Filling-line log, reviewed by the head of supply chain',
      facts: ['MO-04'],
    },
    {
      label: 'Distributor orders complete and on time',
      definition: 'Share of distributor orders shipped complete and on or before the confirmed date',
      before: '72%',
      after: '91%',
      sample: 'All distributor orders in each window',
      source: 'ERP and dispatch log, measured by the finance lead',
      facts: ['MO-05'],
    },
    {
      label: 'Days of finished stock',
      definition: 'Average days of finished-goods stock on hand',
      before: '74 days',
      after: '52 days',
      sample: 'Month-end stock, every month in each window',
      source: 'ERP, measured by the finance lead',
      facts: ['MO-06'],
    },
  ],
  verification: [
    'Mirr Oils’ finance lead and quality manager measured dispatch time, on-time delivery, re-blends, stoppages and stock from the ERP, the batch records and the filling-line log',
    'AIx2 measured document errors from its live checks, confirmed by the quality manager',
    'Window: Feb–Jul 2026 against the 12 months to Sep 2025',
    'The group CEO signed off every finding and every control before it went live',
  ],
  financial: {
    paragraphs: [
      'Modelled from the measured results, with an explicit attribution rule: only the share of each change that the finance lead agreed came from the new controls.',
      'About USD 0.9 million a year from fewer re-blends, fewer filling-line stoppages and fewer port-side claims, plus a one-off release of about USD 2.4 million of working capital. Payback on the engagement: under one year.',
    ],
    dependsOn: 'OQ-42',
  },
  howItRan: {
    work: [
      'Weeks 0–2 · Connect: seven sources opened read-only; the group CEO signed access before kick-off.',
      'Weeks 2–6 · Map: the order-to-dispatch path as it really ran, 16 processes and four data flows.',
      'Weeks 6–10 · Find the gap: every order checked against Mirr Oils’ procedures, ISO 9001, ISO/IEC 17025 and destination document rules. 24 findings.',
      'Weeks 10–12 · Design: a control for each critical finding and a 90-day plan, approved by the group CEO.',
      'Human sign-off at every step: the group CEO approved every finding and control; the owners ran them.',
    ],
    data: [
      'Read-only connections to seven sources, each with a data contract and a named owner.',
      'Everything stayed on Mirr Oils’ own servers. AIx2 held no copy after the engagement.',
    ],
  },
  required: [
    { category: 'Map work from event logs', detail: 'The ERP, the batch records and the laboratory system held years of events, so the as-built map could be rebuilt from real orders and batches.' },
    { category: 'Capture work outside the systems', detail: 'Orders agreed by e-mail, packaging booked on shared sheets and certificates typed by hand were read from the mailbox, the sheets and the document files.' },
    { category: 'Join process and data', detail: 'Each order was followed from the distributor’s request to the dispatch note across the ERP, the batch records, the laboratory system and the export files.' },
    { category: 'Check against procedures and standards', detail: 'The company’s own procedures, ISO 9001 and ISO/IEC 17025 requirements, and the document rules of each destination.' },
  ],
  forYou: [
    'An ERP or core system in use for two years or more: event data must exist',
    'A named owner for each key process: every finding needs an owner',
    'Data access signed off by your sponsor before kick-off: no weeks of waiting',
    'Documented procedures for the main flows: the check needs a baseline',
    'An executive sponsor with time every week: decisions in days',
    'The same path runs through any manufacturer that blends, fills and exports: order, formulation, release, packaging, documents and shipping.',
  ],
  timeline: [
    { when: 'Weeks 0–2', what: 'Seven sources connected; the group CEO signs access.' },
    { when: 'Weeks 2–6', what: 'The order-to-dispatch path mapped: 16 processes, four data flows.' },
    { when: 'Weeks 6–10', what: '24 findings, five critical, each with evidence and an owner.' },
    { when: 'Weeks 10–12', what: 'Controls designed and a 90-day plan approved.' },
    { when: 'Months 4–10', what: 'Live checks on every new order and batch; results measured.' },
  ],
  owners: [
    'Group CEO: signed access before kick-off and approved every finding and control',
    'Chief operating officer: owned the order-to-dispatch path',
    'Quality manager: owned formulation versions, lab release and the certificate of analysis',
    'Head of supply chain: owned the packaging plan and the filling schedule',
    'Finance lead: measured dispatch time, on-time delivery and stock',
    'AIx2: mapping, findings, control design and live checks',
  ],
  madeItWork: [
    'The group CEO signed data access before kick-off, so the work started on day one.',
    'Every process had a named owner by week 4, so every finding had someone to act on it.',
    'The documents now come from the batch and the pallets, so there is nothing to retype.',
    'Mirr Oils’ own teams built the controls; live checks kept them honest.',
  ],
  oneYearLater: undefined,
  measurementLabel: 'Measured by Mirr Oils’ finance lead and quality manager: Feb–Jul 2026 vs the 12 months to Sep 2025.',
  facts: ['MO-01', 'MO-02', 'MO-03', 'MO-04', 'MO-05', 'MO-06', 'MO-07', 'MO-08', 'MO-09', 'MO-10', 'MO-11', 'MO-12', 'USR-01', 'USR-03', 'USR-09'],
  dependsOn: 'OQ-42',
};
