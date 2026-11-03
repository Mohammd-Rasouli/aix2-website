import type { PageContent } from './types';

/**
 * Principles. Source: SS "Company: Team, Principles and Careers". The hero reuses the Company hero
 * subhead (SS gives the Principles section no hero of its own). The Research block keeps the id
 * "research" so the old /research URL can redirect to /company/principles#research.
 */
export const principles: PageContent = {
  route: '/company/principles',
  seo: {
    title: 'AIx2 · Principles',
    description: 'How AIx2 works: evidence, named owners, your data at home, and a team that stays until the change holds.',
  },
  hero: {
    name: 'Principles',
    what: 'The rules we work by',
    title: 'Principles',
    subhead: 'Senior people who have done this work inside some of the world’s most demanding organizations, and now do it inside yours.',
  },
  blocks: [
    {
      type: 'list',
      id: 'principles',
      name: 'Principles',
      what: 'The rules we hold ourselves to',
      title: 'How we work.',
      style: 'check',
      items: [
        'Evidence, not interviews',
        'Every finding has a count, the evidence and an owner',
        'AI proposes; your people decide',
        'Your data stays home',
        'No data? We create it',
        'No one is scored individually',
        'We report what the client measured, and label what we modelled',
        'We stay until the change holds',
      ],
    },
    {
      type: 'prose',
      id: 'research',
      name: 'Research',
      what: 'How we test our methods before client work',
      title: 'We test our methods in the open.',
      paragraphs: [
        'We benchmark our methods on public, citable process datasets, such as the BPI Challenge 2020 travel-permit log, before we use them on yours.',
      ],
    },
    {
      type: 'cta',
      id: 'next-step',
      name: 'Next step',
      what: 'Your first step',
      title: 'Bring us one process.',
      actions: [{ label: 'Bring us one process', href: '/contact', variant: 'primary' }],
    },
  ],
};
