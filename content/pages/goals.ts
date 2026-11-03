/**
 * For companies · By goal: five pages, one per offer in the menu. Source: the Executive Deck
 * (inputs/company/Deck/AIx2ExecutiveDeck_withCasestudies_v12.html; slide numbers in comments),
 * tightened for the web. NEW copy, logged as CC-47. No figures: the deck's numbers have no fact rows.
 * Avoid list: no "digital twin" (organization model), no "real-time everywhere", no GPU claims.
 */
import type { PageContent } from './types';

const next = (route: string) => ({
  type: 'cta' as const,
  id: 'next-step',
  name: 'Next step',
  what: 'Your first step',
  title: 'Start with one truth-defining workflow.',
  // Deck slide 24.
  subhead: 'Choose a material process and give us the evidence. In a focused pilot we surface the as-built model, quantify the gap and return a target-state blueprint.',
  actions: [
    { label: 'Bring us one process', href: `/contact?topic=${route}`, variant: 'primary' as const },
    { label: 'See the customers', href: '/proof', variant: 'text' as const },
  ],
});

export const goalPages: (PageContent & { slug: string })[] = [
  {
    slug: 'diagnosis',
    route: '/companies/diagnosis',
    seo: {
      title: 'AIx2 · Diagnosis: see how you really run',
      description: 'We rebuild how your company really works, bottom-up from its own data: every process layer, the hidden work, and the data supply chain.',
    },
    hero: {
      name: 'Diagnosis',
      what: 'See how you really run',
      title: 'Reconstruct the company bottom-up, as built.',
      subhead: 'We start from the evidence at the bottom, the outcomes and the work that produced them, and infer upward to execution and strategy. The map keeps moving with the processes.',
      actions: [{ label: 'Bring us one process', href: '/contact?topic=diagnosis', variant: 'primary' }],
    },
    blocks: [
      {
        // Slides 5 and 10.
        type: 'diagram',
        kind: 'layers',
        id: 'four-layers',
        name: 'Four layers',
        what: 'How the as-built map is built, from the bottom up',
        title: 'From what was produced to the strategy behind it.',
        guide: 'Read from the bottom: outcomes are observed directly; each layer above is inferred from the one below. Red marks the work that never reaches a system.',
      },
      {
        // Slides 4 and 9.
        type: 'cards',
        id: 'evidence',
        name: 'The evidence',
        what: 'What we read, and what we add where nothing is recorded',
        title: 'Gather what exists. Embed what is missing.',
        columns: 3,
        items: [
          { tag: 'Corporate data', title: 'Databases', copy: 'ERP, CRM and warehouses, read through read-only connections.' },
          { tag: 'Hidden workflows', title: 'Excel, e-mail, chat and paper', copy: 'Read by OCR and our reading models, so work outside the systems is counted too.' },
          { tag: 'New data types', title: 'Audio, video and photo', copy: 'Where a person fills the gap today, we embed the capture in its place. People handle only the exceptions.' },
        ],
        note: 'Everything lands in one evidence base, which feeds every later step.',
      },
      {
        // Slide 16.
        type: 'diagram',
        kind: 'hidden',
        id: 'hidden-work',
        name: 'Hidden work',
        what: 'The work outside the official workflow',
        title: 'Find the work outside the workflow.',
        guide: 'The gold line is the official path. The red detours are where the real work happens: they are mapped next to it, for processes and for data.',
      },
      {
        // Slide 6.
        type: 'diagram',
        kind: 'supplyLoop',
        id: 'data-supply-chain',
        name: 'Data supply chain',
        what: 'How we map data as it moves through the business',
        title: 'Map data as it moves through the business.',
        guide: 'Data inputs are processed into outputs; operations create new data that returns as new inputs. Governance sits under every layer of the loop.',
      },
      {
        // Slide 3, steps 2 and 3 outputs.
        type: 'list',
        style: 'check',
        id: 'you-receive',
        name: 'What you receive',
        what: 'The outputs of the diagnosis',
        title: 'What you hold at the end.',
        items: [
          'An as-built process map, hidden work included, kept current',
          'As-built data governance: the full data supply chain, with an owner at every link',
          'One evidence base that every later finding traces back to',
        ],
      },
      next('diagnosis'),
    ],
  },
  {
    slug: 'optimal-design',
    route: '/companies/optimal-design',
    seo: {
      title: 'AIx2 · Optimal design of processes and data governance',
      description: 'From the company as built, or from its documents, to the best design of its processes and data governance, matched against industry and regulatory references.',
    },
    hero: {
      name: 'Optimal design',
      what: 'Of processes and data governance',
      title: 'Two starting points, one way to the best design.',
      subhead: 'An existing company starts from its as-built map; a new one starts from its documents. Both go through the same mapping to the best design of their processes and data governance.',
      actions: [{ label: 'Bring us one process', href: '/contact?topic=optimal-design', variant: 'primary' }],
    },
    blocks: [
      {
        // Slide 8.
        type: 'diagram',
        kind: 'designFunnel',
        id: 'one-way',
        name: 'The design path',
        what: 'The same three moves, whichever way you start',
        title: 'Break it down, match it, combine the best.',
        guide: 'Follow the gold line from either starting point: buckets of standard processes, matched to the dictionary, combined into the best fit.',
      },
      {
        // Slide 13.
        type: 'diagram',
        kind: 'bestMatch',
        id: 'best-match',
        name: 'Best-match engine',
        what: 'What the design is matched against',
        title: 'Best practice for this company, not a template.',
        guide: 'On the left, what the company really does. On the right, what the industry and the state say it should do. The engine meets them in the middle.',
      },
      {
        // Slide 11.
        type: 'diagram',
        kind: 'hubVsChain',
        id: 'governance',
        name: 'Data governance',
        what: 'Why we design a supply chain, not a data hub',
        title: 'Govern the data supply chain, not a data hub.',
        guide: 'A hub stores data in one place and governs it after it lands. A supply chain names an owner at every link and checks quality at every handoff.',
      },
      {
        type: 'list',
        style: 'check',
        id: 'you-receive',
        name: 'What you receive',
        what: 'The outputs of the design',
        title: 'What you hold at the end.',
        items: [
          'The best design of your corporate processes, bucket by bucket',
          'The best design of your data governance, with an owner and a quality gate at every handoff',
          'Controls and human approval points built into the design',
        ],
      },
      next('optimal-design'),
    ],
  },
  {
    slug: 'strategy',
    route: '/companies/strategy',
    seo: {
      title: 'AIx2 · Connecting strategy to data and processes',
      description: 'One connected model from strategy to the processes and data that carry it out, at the scale of a company, a portfolio or a national program.',
    },
    hero: {
      name: 'Strategy',
      what: 'Connected to data and processes',
      title: 'One connected model, from strategy to the work.',
      subhead: 'Strategy is only as real as the processes and data that carry it out. We map all four process layers and the whole data supply chain, and connect them in one model.',
      actions: [{ label: 'Bring us one process', href: '/contact?topic=strategy', variant: 'primary' }],
    },
    blocks: [
      {
        // Slide 20.
        type: 'diagram',
        kind: 'connected',
        id: 'connected-model',
        name: 'One model',
        what: 'How strategy, processes and data are linked',
        title: 'Strategy, processes and data, in one model.',
        guide: 'Left, the four process layers from strategy to outcomes. Right, the data supply chain. The gold links are the owners and controls that join them.',
      },
      {
        // Slide 5: the layers are inferred upward.
        type: 'steps',
        id: 'inferred',
        name: 'Read upward',
        what: 'How each layer is evidenced by the one below',
        title: 'Strategy you can trace to the work.',
        items: [
          { n: '01', title: 'Outcomes', copy: 'Forms, reports, BI dashboards, operational and customer outputs, observed directly.' },
          { n: '02', title: 'Detailed processes', copy: 'Tasks, systems, exceptions, rework and hidden work, inferred from outcomes and traces.' },
          { n: '03', title: 'Strategy execution', copy: 'Departments, decisions, coordination, approvals and handoffs, inferred from the processes.' },
          { n: '04', title: 'Strategy', copy: 'Sales, marketing, financial, operating and customer strategy, inferred from how it is executed.' },
        ],
      },
      {
        // Slide 22.
        type: 'diagram',
        kind: 'scale',
        id: 'scale',
        name: 'Scale',
        what: 'The same model at three levels',
        title: 'One core model. Three levels of leverage.',
        guide: 'The same as-built model zooms out from one company, to a portfolio of companies, to a national program. Each level contains the one below.',
      },
      next('strategy'),
    ],
  },
  {
    slug: 'monitoring',
    route: '/companies/monitoring',
    seo: {
      title: 'AIx2 · Monitoring implementation',
      description: 'A live model, not a one-off assessment: live checks on new work, owners told what to fix, and every fix verified.',
    },
    hero: {
      name: 'Monitoring implementation',
      what: 'Keep the change in control',
      title: 'A live model, not a one-off assessment.',
      subhead: 'Processes and data change every day. We keep the as-built model, the risk register and the control evidence in step with them, so decisions use what is true now.',
      actions: [{ label: 'Bring us one process', href: '/contact?topic=monitoring', variant: 'primary' }],
    },
    blocks: [
      {
        // Slide 17.
        type: 'diagram',
        kind: 'liveLoop',
        id: 'loop',
        name: 'The loop',
        what: 'What happens each time something changes',
        title: 'The loop that never stops.',
        guide: 'Each change in the business goes once around the loop, ending with the owner’s fix verified.',
      },
      {
        // Slide 17, illustrative chart.
        type: 'diagram',
        kind: 'drift',
        id: 'drift',
        name: 'Model and reality',
        what: 'Why a one-off assessment goes out of date',
        title: 'Always current, not ageing between reviews.',
        guide: 'Illustrative. Gold: a live model stays matched to reality. Red: a one-off assessment matches on the day and drifts until the next review.',
      },
      {
        // Slide 7, part B.
        type: 'cards',
        id: 'assure',
        name: 'Assurance',
        what: 'The two checks that keep running',
        title: 'Live control, with a clear fix for every owner.',
        columns: 2,
        items: [
          { tag: 'Quality control', title: 'Checks on live evidence', copy: 'Drift and new red flags surface as they happen, not at the next audit.' },
          { tag: 'Control assurance', title: 'Wrong work is stopped, with the fix', copy: 'Work or data handled the wrong way is rejected, and its owner gets a clear instruction on what to do and how to fix it.' },
        ],
      },
      next('monitoring'),
    ],
  },
  {
    slug: 'ai-readiness',
    route: '/companies/ai-readiness',
    seo: {
      title: 'AIx2 · AI readiness roadmap',
      description: 'From mapped knowledge to AI agents that do the work: an AI-readiness assessment, controls and human gates, and a deployment inside your boundary.',
    },
    hero: {
      name: 'AI readiness roadmap',
      what: 'From mapped knowledge to AI that does the work',
      title: 'Ready for AI, step by step, with people in control.',
      subhead: 'AI works on what the company really is. We map it first, connect what we map into one knowledge model, and only then put agents to work, with controls and human gates.',
      actions: [{ label: 'Bring us one process', href: '/contact?topic=ai-readiness', variant: 'primary' }],
    },
    blocks: [
      {
        // Slide 21.
        type: 'diagram',
        kind: 'readiness',
        id: 'roadmap',
        name: 'The roadmap',
        what: 'Four stages, from mapping to agents',
        title: 'From mapped knowledge to agents that run the work.',
        guide: 'Read left to right: knowledge modules feed one knowledge hub; the hub forms a live model of the company; function-specific agents work on that model.',
      },
      {
        // Slide 3, step 5.
        type: 'steps',
        id: 'assessment',
        name: 'Assessment',
        what: 'What the readiness assessment covers',
        title: 'Design best practice for the AI age.',
        items: [
          { n: '01', title: 'AI-readiness assessment', copy: 'Which processes and data are ready for AI, and which must be fixed first.', tag: 'Readiness register' },
          { n: '02', title: 'Best-practice redesign', copy: 'The target processes and data governance an AI can safely work on.', tag: 'Target design' },
          { n: '03', title: 'Controls and human gates', copy: 'Where a named person approves, before anything goes live.', tag: 'Control specification' },
        ],
      },
      {
        // Slide 18.
        type: 'cards',
        id: 'deployment',
        name: 'Deployment',
        what: 'Where the platform runs',
        title: 'Architecture that meets the data where it lives.',
        columns: 4,
        items: [
          { tag: 'Maximum isolation', title: 'On-premise', copy: 'On your own servers.' },
          { tag: 'Dedicated boundary', title: 'Private cloud', copy: 'In your own tenant.' },
          { tag: 'Selective federation', title: 'Hybrid', copy: 'Workloads split by sensitivity.' },
          { tag: 'Country control', title: 'Sovereign', copy: 'Inside the jurisdiction.' },
        ],
        note: 'A prerequisite for regulated, sensitive and sovereign environments.',
      },
      next('ai-readiness'),
    ],
  },
];
