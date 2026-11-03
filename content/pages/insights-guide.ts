import type { PageContent } from './types';

/**
 * Guide detail page: AIx2's own guide on enterprise AI assistants versus specialised ("vertical") AI,
 * from the aix2.ai blog post of 2025 (draft B3). Product names and database names are replaced with
 * generic nouns (draft B3, "Fit and edits"). The guide holds no numbers beyond counts of steps and
 * use cases (staged as INS-50). The last paragraph, on operating companies, is new copy. The post is
 * written for investment firms; migration of the post itself is OQ-24.
 */
const ORIGINAL = 'https://aix2.ai/blog/chatgpt-vs-vertical-ai';

export const guideChatgptVsVertical: PageContent = {
  route: '/insights/guides/chatgpt-vs-vertical-ai',
  seo: {
    title: 'AIx2 · General AI assistant or vertical AI: where each belongs',
    description:
      'A guide in three steps: start with an enterprise AI assistant for everyone, learn where it stops, then add specialised tools for the few workflows where accuracy and integration matter.',
  },
  hero: {
    name: 'Guide',
    what: 'A guide for firms adopting AI, in three steps',
    title: 'General AI assistant or vertical AI: where each belongs',
    subhead:
      'Start with an enterprise assistant for everyone, learn where it stops, then buy specialised tools only for the workflows that decide the outcome.',
    actions: [{ label: 'Read the original post', href: ORIGINAL, variant: 'secondary' }],
  },
  blocks: [
    {
      type: 'prose',
      id: 'argument',
      name: 'The argument',
      what: 'Why not begin with a specialised product',
      title: 'Do not start with a vertical product.',
      facts: ['INS-50'],
      paragraphs: [
        'Give everyone a general assistant first, find out where it stops, and only then buy specialised tools for the few workflows where accuracy and integration matter.',
        'The goal of the first step is not to overhaul your due diligence overnight. It is to build an AI-ready culture, use the simple cases at low cost, and learn their limits.',
      ],
    },
    {
      type: 'list',
      id: 'step-1',
      name: 'Step 1',
      what: 'Try an enterprise assistant on simple, frequent tasks',
      title: 'Step 1. Experience the assistant.',
      body: 'Subscribe the team to an enterprise-grade general assistant. These are inexpensive, secure and connect to the tools the firm already uses: shared documents, e-mail and cloud servers. Choose cases that are simple, frequent and limited to writing in plain language:',
      facts: ['INS-50'],
      style: 'bullet',
      items: [
        'Drafting e-mails and investor communications',
        'Preparing for meetings by summarizing earlier notes and call transcripts',
        'Generating first ideas for thematic write-ups',
        'Cleaning up and formatting basic data sets',
      ],
    },
    {
      type: 'cards',
      id: 'step-2',
      name: 'Step 2',
      what: 'Where a general assistant reaches its limits',
      title: 'Step 2. Understand the limits.',
      body: 'On complex private-investment work, a general-purpose assistant meets three boundaries.',
      columns: 3,
      facts: ['INS-50'],
      items: [
        { title: 'Quality and nuance', copy: 'Long reports, such as a full diligence analysis, lack depth and accuracy. The tools are not made for exact calculations, industry-specific logic or complicated reporting.' },
        { title: 'No integration', copy: 'They do not connect to the firm’s CRM or to the industry databases it relies on.' },
        { title: 'No workflow design', copy: 'You cannot define reusable templates or multi-step processes for tasks such as deal screening or portfolio analysis.' },
      ],
      note: 'For the most critical, value-adding workflows you then need agents trained on the firm’s own data, methods and objectives.',
    },
    {
      type: 'cards',
      id: 'step-3',
      name: 'Step 3',
      what: 'Five places specialised tools earn their cost',
      title: 'Step 3. Add specialised tools where they pay.',
      columns: 3,
      facts: ['INS-50'],
      items: [
        { tag: 'Legal', title: 'Document review', copy: 'Analyze NDAs, credit agreements and purchase agreements; extract key clauses, flag risks, compare terms with the firm’s precedent positions.' },
        { tag: 'Finance', title: 'Modelling and financial analysis', copy: 'Build models from simple prompts, automate sensitivity analysis, run scenarios quickly and audit formulas for errors.' },
        { tag: 'Deals', title: 'Deal screening', copy: 'Review information memoranda, summarize each in a standard one-pager, score them on the investment committee’s criteria, and connect to the CRM.' },
        { tag: 'Deals', title: 'Deal sourcing and execution', copy: 'From screening through data-room analysis to financial models, inside the CRM and workflow, to judge opportunities faster and with less diligence risk.' },
        { tag: 'Portfolio', title: 'Portfolio management and operations', copy: 'Performance monitoring, answers from the internal knowledge base, and faster reports and board materials.' },
      ],
    },
    {
      type: 'prose',
      id: 'for-operators',
      name: 'For operating companies',
      what: 'The same order applies outside funds',
      title: 'The order is the same for a company.',
      paragraphs: [
        'The guide was written for investment firms. The order holds for an operating company too: start broad, learn where the general tool stops, then specialise where the workflow decides the result.',
      ],
    },
    {
      type: 'cta',
      id: 'original',
      name: 'Original',
      what: 'The guide as first published on aix2.ai',
      title: 'The original post',
      body: 'Written for private investment firms, with a link to the aix2.ai use cases page.',
      actions: [
        { label: 'Read the original post', href: ORIGINAL, variant: 'primary' },
        { label: 'All insights', href: '/insights', variant: 'text' },
      ],
    },
  ],
};
