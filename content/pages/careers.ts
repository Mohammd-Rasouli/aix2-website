import type { PageContent } from './types';

/**
 * Careers. Source: SS "Careers". No open roles were supplied, so the page shows an empty state
 * with an e-mail line (docs/sitemap.md). The hero subhead reuses the Company hero line.
 */
export const careers: PageContent = {
  route: '/company/careers',
  seo: {
    title: 'AIx2 · Careers',
    description: 'Join a team of senior people who stay until the change holds.',
  },
  hero: {
    name: 'Careers',
    what: 'Working here, and open roles',
    title: 'Join a team that stays.',
    subhead: 'Senior people who have done this work inside some of the world’s most demanding organizations, and now do it inside yours.',
  },
  blocks: [
    {
      type: 'cta',
      id: 'open-roles',
      name: 'Open roles',
      what: 'Current openings, and how to reach us',
      title: 'Open roles',
      body: '[Open roles to be listed here.] Or write to us: info@aix2.ai',
      actions: [{ label: 'Write to us', href: '/contact', variant: 'primary' }],
    },
  ],
};
