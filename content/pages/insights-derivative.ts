import type { PageContent } from './types';

/**
 * Podcast detail page: The Derivative (RCM Alternatives), recorded January 20, 2025, published January
 * 30, 2025 (draft B4, facts POD-06). A summary in eight points written from the publisher's transcript;
 * no long verbatim quotes, no audio hosted by AIx2. The founder's background lines in the episode are
 * not used (OQ-07). Staged facts: INS-41 to INS-51.
 */
const EPISODE = 'https://www.rcmalternatives.com/2025/01/the-state-of-ai-and-ai-in-alternative-investments-with-mohammad-rasouli-of-aix2/';

export const podcastDerivative: PageContent = {
  route: '/insights/podcasts/the-derivative',
  seo: {
    title: 'AIx2 · The Derivative: The State of AI in Alternative Investments',
    description:
      'Eight points from Mohammad Rasouli’s interview on The Derivative: why AI fits investing, predictive and generative AI, why adoption goes wrong, and what it means for jobs.',
  },
  hero: {
    name: 'Podcast',
    what: 'An interview on The Derivative, summarized',
    title: 'The State of AI, and AI in Alternative Investments',
    subhead:
      'Mohammad Rasouli on where AI fits in investing, why adoption goes wrong and what it means for jobs. Eight points from the episode, with a link to the full recording.',
    actions: [{ label: 'Listen on RCM Alternatives', href: EPISODE, variant: 'primary' }],
  },
  blocks: [
    {
      type: 'list',
      id: 'the-episode',
      name: 'The episode',
      what: 'Where it ran, when, and what it covers',
      title: 'The Derivative, January 2025.',
      body: 'The Derivative is the podcast of RCM Alternatives. This episode was recorded on January 20, 2025 and published on January 30, 2025. The publisher’s transcript runs to about 57 minutes.',
      facts: ['POD-06', 'INS-48'],
      style: 'bullet',
      items: [
        'AI in alternative investments, from due diligence and deal sourcing to portfolio monitoring and reporting',
        'Adoption challenges and best practice',
        'What AI means for jobs in finance and for the economy',
      ],
    },
    {
      type: 'steps',
      id: 'what-was-said',
      name: 'What was said',
      what: 'The argument of the interview, in eight points',
      title: 'Eight points from the conversation.',
      facts: ['POD-06', 'INS-44', 'INS-51'],
      items: [
        {
          n: '01',
          title: 'Why AI fits investing',
          copy: '“The core business of investment is finding these opportunities.” AI gathers information, finds a pattern of success and runs it over new data, much as an investor forms a thesis and matches new assets to it. He says that is why the largest funds used predictive AI long before ChatGPT.',
        },
        {
          n: '02',
          title: 'Two kinds of AI, two kinds of use',
          copy: 'Predictive AI is about finding returns: spotting assets, predicting how they will perform, the chance an LP commits, who to hire. Generative AI is about day-to-day work: due diligence, market research, portfolio monitoring, exit preparation, documents, LP queries, reporting and investment memos. Low-cost commercial language models put the second kind within reach of smaller funds that have no AI team.',
        },
        {
          n: '03',
          title: 'How to choose an AI expert',
          copy: 'Whatever the industry, the expert should know AI deeply at the engineering level: has written code, done data science, understands neural networks. Finance, transformation or HR expertise comes on top of that.',
        },
        {
          n: '04',
          title: 'A framework for scoping use cases',
          copy: 'In his keynotes he updates a framework every six months. It places where AI stands on a scale of deliverables and shows which use cases can reach high quality with little human involvement. Video analysis, audio chatbots, document writing and financial insight differ, so a proposed use case can be checked against it.',
        },
        {
          n: '05',
          title: 'Where adoption goes wrong',
          copy: 'Two causes. One is the wrong use case or the wrong expectation, such as asking AI for a risk analysis of a whole portfolio in one go instead of breaking it into specific elements with clear inputs and prompts. The other is adoption inside the organization, which needs behavioral, cultural and organizational change. There is a learning curve, so starting sooner brings the organization along sooner.',
        },
        {
          n: '06',
          title: 'The limits of prediction',
          copy: 'AI predicts inside the patterns it has seen, so rare events are hard, and questions about what would have happened need other techniques: model-based AI, reinforcement learning, synthetic data. He does not expect AI to stop for lack of data, computing power or energy.',
        },
        {
          n: '07',
          title: 'What it means for jobs',
          copy: 'The change is real but it is not full replacement. It transforms how people work. Fluency with the tools will be expected, as it is with Excel, and the fundamentals are less complex than the buzzwords suggest.',
        },
        {
          n: '08',
          title: 'The mood of the industry',
          copy: 'At SuperReturn a year earlier, the room worried about fear of AI, hallucination and security; more recently the question had become how to scale experiments. He is relatively optimistic, says AI safety and alignment are taken seriously by researchers, and notes that regulation matters. He compares the different approaches of the US and Europe to an A/B test.',
        },
      ],
      line: 'Summarized by AIx2 from the publisher’s transcript, which the publisher says was compiled automatically and may contain errors. The recording is the source.',
    },
    {
      type: 'cta',
      id: 'listen',
      name: 'Listen',
      what: 'The full episode, on the publisher’s page',
      title: 'Hear it in full',
      body: 'Audio and transcript are hosted by RCM Alternatives, not by AIx2.',
      actions: [
        { label: 'Listen on RCM Alternatives', href: EPISODE, variant: 'primary' },
        { label: 'All insights', href: '/insights', variant: 'text' },
      ],
    },
  ],
};
