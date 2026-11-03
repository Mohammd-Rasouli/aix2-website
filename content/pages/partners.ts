import type { PageContent } from './types';

/** Partners. Source: SS "Partners". No partner names (McKinsey, TASAMA) without a written agreement. */
export const partners: PageContent = {
  route: '/partners',
  seo: {
    title: 'AIx2 · Partners',
    description: 'For strategy consultancies, outsourcers and implementation partners who want their client’s real operations on the table, fast.',
  },
  hero: {
    name: 'Partners',
    what: 'For consultancies, outsourcers and implementation partners',
    title: 'You lead. We bring the company as built.',
    subhead: 'For strategy consultancies, outsourcers and implementation partners who want their client’s real operations on the table, fast.',
  },
  blocks: [
    {
      type: 'flow',
      id: 'consultancies',
      name: 'Consultancies',
      what: 'Who leads each step of a joint engagement',
      title: 'You bring the question, the benchmarks and the answer. We bring the as-built evidence, live.',
      body: 'The client decides and owns the change.',
      shape: 'lane',
      items: [
        { title: 'Frame', copy: 'You lead', who: 'You' },
        { title: 'Evidence', copy: 'We gather and map', who: 'AIx2' },
        { title: 'Practice', copy: 'You design best practice', who: 'You' },
        { title: 'Gap', copy: 'We measure every process against it', who: 'AIx2' },
        { title: 'Change', copy: 'You design the change and the business case', who: 'You' },
        { title: 'Deliver', copy: 'You lead; we keep tracking live', who: 'You' },
      ],
    },
    {
      type: 'list',
      id: 'our-limits',
      name: 'Our limits',
      what: 'What we promise never to do',
      title: 'What we never do on a joint engagement.',
      style: 'bullet',
      items: [
        'Own or approach your client relationships',
        'Set strategy or decide where to invest',
        'Run executive workshops or set targets',
        'Compete with your benchmarks or tools',
        'Lead the transformation',
      ],
    },
    {
      type: 'list',
      id: 'outsourcers',
      name: 'Outsourcers',
      what: 'What outsourcers get from diligence',
      title: 'Most margin is lost before signature, and recovered after it.',
      style: 'check',
      items: [
        'Diligence for every client: a pricing-ready baseline',
        'Fit to your service catalog',
        'One standard and continuous control across clients',
      ],
    },
    {
      type: 'prose',
      id: 'implementation-partners',
      name: 'Implementation partners',
      what: 'What we add before a deployment',
      title: 'Evidence before deployment.',
      paragraphs: ['An as-built map, and the controls your agents need before they go live.'],
    },
    {
      type: 'cta',
      id: 'next-step',
      name: 'Next step',
      what: 'How to start a partnership',
      title: 'Partner with us.',
      actions: [{ label: 'Partner with us', href: '/contact?topic=partner', variant: 'primary' }],
    },
  ],
};
