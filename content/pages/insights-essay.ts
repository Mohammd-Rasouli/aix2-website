import type { PageContent } from './types';

/**
 * Essay detail page: "How AI Platforms Are Changing the Game for Alternative Investment", by Mohammad
 * Rasouli, Middle Market Growth (ACG), January 24, 2024 (draft B5, facts PR-03). A third-party
 * publication: the page summarises the argument in our own words and links to the original; it does not
 * republish it. The author bio on the original is not used (OQ-07). Staged facts: INS-47, INS-49.
 */
const ORIGINAL = 'https://middlemarketgrowth.org/ai-platform-alternative-investment/';

export const essayAiPlatforms: PageContent = {
  route: '/insights/essays/ai-platforms-for-alternative-investment',
  seo: {
    title: 'AIx2 · How AI Platforms Are Changing the Game for Alternative Investment',
    description:
      'A summary of Mohammad Rasouli’s article in Middle Market Growth: why funds are moving from scattered AI tools to one platform, and a seven-step approach for building it.',
  },
  hero: {
    name: 'Essay',
    what: 'An article by Mohammad Rasouli, summarized',
    title: 'How AI Platforms Are Changing the Game for Alternative Investment',
    subhead:
      'Published in Middle Market Growth, the magazine of the Association for Corporate Growth, on January 24, 2024. Our summary of the argument, with a link to the original.',
    actions: [{ label: 'Read the original', href: ORIGINAL, variant: 'primary' }],
  },
  blocks: [
    {
      type: 'prose',
      id: 'argument',
      name: 'The argument',
      what: 'What the article says, in short',
      title: 'From scattered tools to one platform.',
      facts: ['PR-03', 'INS-47'],
      paragraphs: [
        'Funds are moving from fragmented, third-party AI tools to coherent AI platforms: one place that gathers the fund’s own data and serves every use case through a single interface. Large funds already have them. Smaller funds are still learning about them and need outside help. Large language models have made this affordable for smaller funds.',
        'The article’s warning is that the largest risk is taking no action. Preparing infrastructure, cleaning historical data, learning how the fund wants to use AI and changing the culture all take time, so early movers stay ahead.',
      ],
    },
    {
      type: 'list',
      id: 'why-sourcing',
      name: 'Why sourcing first',
      what: 'Why deal sourcing and deal insight come first',
      title: 'Eight reasons to start with deal sourcing.',
      body: 'Large funds already use AI here to find returns, not only to process documents. The article gives eight reasons.',
      facts: ['INS-49'],
      style: 'bullet',
      items: [
        'A competitive edge',
        'Efficient discovery: more ground covered, faster',
        'Better quality of analysis',
        'Relevance tailored to the fund’s own strategy',
        'Analysis of non-traditional data',
        'Faster decisions',
        'Scale without a proportional rise in resources',
        'Continuous improvement as the platform learns',
      ],
    },
    {
      type: 'cards',
      id: 'why-fragmented',
      name: 'Why separate tools fall short',
      what: 'Five failure points of tools that work alone',
      title: 'Five places fragmented tools fail.',
      columns: 3,
      facts: ['INS-49'],
      items: [
        { title: 'Not tailored to the fund', copy: 'Generic tools do not reflect the fund’s thesis or way of working.' },
        { title: 'No access to the fund’s own data', copy: 'So they never learn from the fund’s past decisions.' },
        { title: 'Privacy and security exposure', copy: 'Sensitive data goes to third parties.' },
        { title: 'Fragmentation', copy: 'Tools built for one task do not talk to each other, and building many is costly.' },
        { title: 'Generic output', copy: 'Results lack the depth that high-stakes decisions need.' },
      ],
    },
    {
      type: 'steps',
      id: 'seven-steps',
      name: 'Seven steps',
      what: 'The article’s approach for a fund that builds a platform',
      title: 'Seven steps to a platform.',
      facts: ['INS-49'],
      items: [
        { n: '01', title: 'Define requirements and features', copy: 'Adaptability, personalization, privacy and forward compatibility.' },
        { n: '02', title: 'Pick priority use cases', copy: 'High return and relatively low risk, such as deal sourcing and insight; then extend across the investment cycle.' },
        { n: '03', title: 'Plan the data', copy: 'Public databases, the fund’s proprietary data and confidential target-asset data, fed continuously.' },
        { n: '04', title: 'Choose models and algorithms', copy: 'A mix enhanced with language models, matched to tasks and strategy.' },
        { n: '05', title: 'Decide who builds it', copy: 'Outsourcing gives speed and cost efficiency; building in-house builds the fund’s own capability.' },
        { n: '06', title: 'Cost it in three layers', copy: 'Infrastructure, training on public data and personalization. The first two can often be shared across funds; personalization is unique to each fund and carries most of the value.' },
        { n: '07', title: 'Manage risk, train staff, integrate', copy: 'Review privacy and compliance regularly, train people, and connect the platform to existing systems.' },
      ],
    },
    {
      type: 'list',
      id: 'privacy',
      name: 'Privacy',
      what: 'The article’s three basic privacy practices',
      title: 'Three practices to keep data safe.',
      facts: ['INS-49'],
      style: 'check',
      items: [
        'Train on proprietary data only on a machine kept on the fund’s own servers.',
        'Train a separate model, with clear boundaries, for each asset covered by its own NDA, and delete it when the NDA period ends, so data from one asset never informs another.',
        'For highly sensitive data, such as HR records, search the documents instead of training a model on them.',
      ],
    },
    {
      type: 'cta',
      id: 'original',
      name: 'Original',
      what: 'The full article, on the publisher’s site',
      title: 'Read the article',
      body: 'Published by Middle Market Growth. This page is our summary, not a reprint.',
      actions: [
        { label: 'Read the original', href: ORIGINAL, variant: 'primary' },
        { label: 'All insights', href: '/insights', variant: 'text' },
      ],
    },
  ],
};
