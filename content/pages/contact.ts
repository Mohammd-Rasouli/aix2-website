import type { PageContent } from './types';

/**
 * Contact. Source: SS "Contact". The form itself is `contactForm` in content/home.ts and is rendered
 * by the page component after the "steps" block; it is not a block here.
 */
export const contact: PageContent = {
  route: '/contact',
  seo: {
    title: 'AIx2 · Contact',
    description: 'Bring us one process and we’ll show you how it really runs, what to fix, and what to do next.',
  },
  hero: {
    name: 'Contact',
    what: 'How to start, and how to reach us',
    title: 'Bring us one process.',
    subhead: 'One process, one week: we show you how it really runs, what to fix and what it is worth. If it is useful, we continue.', // CC-66
  },
  // The page renders `contactPage` below; it has no blocks (user, 2026-10-31: the page was too complex).
  blocks: [],
};

/** Contact, on one screen (CC-51): two ways to reach us, what happens next, the form. */
export const contactPage = {
  email: { label: 'E-mail', address: 'info@aix2.ai' },
  call: { label: 'Book a 30-minute call', href: 'https://meetings.hubspot.com/aix2/aix2-team' },
  stepsTitle: 'What happens next',
  steps: [
    'A 30-minute call to choose one process and check its data',
    'NDA and read-only access to that process',
    'One week later: the process as built, first findings and the value at stake',
    'You decide whether to continue',
  ],
};
