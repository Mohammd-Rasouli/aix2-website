/**
 * Labels for the goal-page diagrams, from the Executive Deck v12 (slide numbers in comments).
 * NEW copy, logged as CC-47. Kept here so the diagrams hold no copy of their own.
 */

/** Slides 5 and 10: the four process layers, top to bottom as drawn. */
export const layers = {
  label: 'Diagram: the four layers of the as-built map, built from the bottom up',
  up: 'Built bottom-up',
  rows: [
    { n: '01', name: 'Strategy', items: 'Sales · marketing · financial · operating · customer strategy', tag: 'Inferred from execution' },
    { n: '02', name: 'Strategy execution', items: 'Departments · decisions · coordination · approvals · handoffs', tag: 'Inferred from processes' },
    { n: '03', name: 'Detailed processes', items: 'Tasks · systems · exceptions · rework · hidden work', tag: 'Inferred from outcomes and traces' },
    { n: '04', name: 'Outcomes', items: 'Forms · reports · BI dashboards · operational and customer outputs', tag: 'Observed directly' },
  ],
  hiddenTitle: 'Hidden work, captured',
  hiddenLine: 'Work that never shows in the system of record is mapped beside the formal flow.',
  hidden: ['Excel rework', 'Meeting decisions', 'Chat approvals', 'Manual uploads'],
};

/** Slide 16 (process row) and slide 12 (data red flags). */
export const hidden = {
  label: 'Diagram: the official path and the hidden detours, for processes and for data',
  formal: 'Official path',
  detour: 'Hidden path',
  rows: [
    { name: 'Process', formal: ['Request', 'ERP workflow', 'Control gate', 'Outcome'], hidden: ['Excel rework', 'Meeting decision', 'Chat approval', 'Manual upload'] },
    { name: 'Data', formal: ['Source system', 'Governed pipeline', 'Warehouse', 'Report'], hidden: ['Unowned data flow', 'Access outside policy', 'Missing lineage'] },
  ],
};

/** Slide 6: the data supply chain as a loop. */
export const supplyLoop = {
  label: 'Diagram: the data supply chain as a loop, with governance under every layer',
  center: { name: 'L0 · Governance foundation', items: 'Policy · ownership · stewardship · quality · controls · privacy · sovereignty' },
  nodes: [
    { id: 'L1', name: 'Data inputs', items: 'ERP · CRM · HRIS · sensors · documents · files' },
    { id: 'L2', name: 'Data processing', items: 'Cleaning · transformation · models · rules' },
    { id: 'L3', name: 'Data outputs', items: 'Forecasts · dashboards · scenarios · recommendations' },
    { id: 'L4', name: 'Operations-generated data', items: 'Interactions · automation outputs · support · feedback' },
  ],
  back: 'L4 returns as new L1 inputs',
};

/** Slide 8. */
export const designFunnel = {
  label: 'Diagram: two starting points, the same three moves, one best design',
  starts: [
    { tag: 'Existing company', name: 'Start from the as-built', copy: 'The mapped processes and data governance are the starting point.' },
    { tag: 'New company', name: 'Start from company documents', copy: 'No as-built yet: we design from the documents, from scratch.' },
  ],
  same: 'The same mapping for both',
  steps: [
    { n: '1', name: 'Break into buckets', copy: 'Standard industry processes and data governance.' },
    { n: '2', name: 'Map to the dictionary', copy: 'Each bucket matched to standard processes and data governance.' },
    { n: '3', name: 'Mix and match', copy: 'The best fit per bucket, even across several industries.' },
  ],
  outcome: 'The best design of the corporate processes and the corporate data governance',
};

/** Slide 13. */
export const bestMatch = {
  label: 'Diagram: the company as built and the references meet in the best-match engine',
  a: { tag: 'A · The company as built', items: ['As-built process map', 'As-built data governance'] },
  b: { tag: 'B · What it should be', items: ['ISO', 'APQC', 'EFQM', 'Sovereign and regulatory policies'] },
  engine: 'Best-match engine',
  out: { name: 'Best practice for this company', items: ['For processes', 'For data governance'] },
};

/** Slide 11. */
export const hubVsChain = {
  label: 'Diagram: governance as a data hub compared with governance as a data supply chain',
  hub: {
    tag: 'Others',
    name: 'Governance as a data hub',
    question: '“Where is the data, and who can access it?”',
    center: 'Central data hub',
    spokes: ['ERP', 'WMS', 'TMS', 'MES', 'Finance', 'IoT', 'Suppliers', 'External'],
    points: ['Data treated as an asset at rest, stored in one place', 'Governed after it lands: catalog, classify, grant access', 'One central team becomes owner, gatekeeper and bottleneck'],
  },
  chain: {
    tag: 'AIx2',
    name: 'Governance as a data supply chain',
    question: '“Is the right data flowing, at the right quality, to the right decision, on time?”',
    stages: [
      { name: 'Supply', items: [{ what: 'ERP / Sales', who: 'Commercial director' }, { what: 'WMS / TMS', who: 'Logistics manager' }, { what: 'MES / IoT', who: 'Plant manager' }] },
      { name: 'Ingest and validate', items: [{ what: 'Data contract at the handoff', who: 'Data engineering' }] },
      { name: 'Transform and model', items: [{ what: 'Features, models, rules', who: 'Data science' }] },
      { name: 'Data products', items: [{ what: 'API, forecast, optimizer', who: 'Product owner' }] },
      { name: 'Consume', items: [{ what: 'Planning' }, { what: 'Operations' }, { what: 'Partners' }] },
    ],
    legend: ['An owner at every link', 'A quality gate at each handoff', 'Feedback flows upstream to the owner'],
  },
};

/** Slide 20. */
export const connected = {
  label: 'Diagram: the four process layers and the data supply chain, connected in one model',
  left: { name: 'Process · 4 layers', items: ['Strategy', 'Strategy execution', 'Detailed processes', 'Outcomes'] },
  right: { name: 'Data supply chain · a loop', items: ['L1 · Data inputs', 'L2 · Data processing', 'L3 · Data outputs', 'L4 · Operations-generated data'] },
  link: 'Connected: process ↔ data, through owners and controls',
  base: 'L0 · Governance foundation',
};

/** Slide 22. */
export const scale = {
  label: 'Diagram: one model at three levels, a company inside a portfolio inside a national program',
  levels: [
    { name: 'A company', items: ['CEO or managing director', 'PMO and governance', 'Departments and teams'] },
    { name: 'A portfolio of companies', items: ['Shareholders and LPs', 'Holding board', 'Value creation office', 'Portfolio risk and ESG'] },
    { name: 'A national program', items: ['Sector ministries', 'Capital allocation', 'Industry sectors'] },
  ],
};

/** Slide 17. */
export const liveLoop = {
  label: 'Diagram: the five steps that run each time the business changes',
  center: 'Live',
  steps: ['Ingest the change', 'Update the as-built map', 'Re-score risks and red flags', 'Alert the owner', 'Verify the fix'],
  notes: ['Drift, new variants and new hidden work are detected as they happen', 'Controls are checked all the time, not only at audit time'],
};

/** Slide 17, the illustrative chart. */
export const drift = {
  label: 'Illustrative chart: a live model stays matched to reality; a one-off assessment drifts between reviews',
  tag: 'Illustrative',
  y: 'Match between the model and reality',
  high: 'High',
  low: 'Low',
  live: 'Live model: always current',
  once: 'One-off assessment: ages between reviews',
  review: 'Review',
};

/** Slide 21, without "digital twin" (avoid list): the organization model. */
export const readiness = {
  label: 'Diagram: knowledge modules feed a knowledge hub, which forms a live model of the company that AI agents work on',
  stages: ['1 · Knowledge modules', '2 · Knowledge hub', '3 · Organization model', '4 · AI agents'],
  modules: {
    first: ['Process mapping', 'Data governance mapping'],
    firstNote: 'From the diagnosis',
    more: ['Decision mapping', 'Roles and responsibilities', 'Applications and infrastructure', 'Organization and workforce', 'Financial and economic'],
  },
  hub: { name: 'Corporate knowledge hub', line: 'One connected, always-current model', items: ['Processes', 'Data governance', 'Decisions', 'Roles', 'Applications', 'Organization', 'Financial'] },
  model: { name: 'Organization model', line: 'A live model of how the company works' },
  agents: { name: 'Function-specific agents', items: [{ name: 'Sales', copy: 'Pipeline, quotes, follow-ups' }, { name: 'Marketing', copy: 'Campaigns, content, segments' }, { name: 'Finance', copy: 'Close, invoices, controls' }, { name: 'Operations', copy: 'Plans, orders, exceptions' }] },
  gate: 'A named person approves before anything goes live',
};
