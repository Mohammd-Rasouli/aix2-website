import type { PageContent } from './types';

/**
 * Team. Source: SS "Company: Team". Only Mohammad Rasouli is verified (OQ-06); everyone else is a
 * placeholder card in LC's format. Text only: no university logos. "Principles" and "Research" are on
 * /company/principles (the old /research URL redirects to #research).
 */
export const team: PageContent = {
  route: '/company/team',
  seo: {
    title: 'AIx2 · Team',
    description: 'Senior engineers, consultants and researchers who have done this work inside demanding organizations, and now do it inside yours.',
  },
  hero: {
    name: 'Team',
    what: 'The people, and where they have worked',
    title: 'Engineering. Consulting. Research.',
    subhead: 'Senior people who have done this work inside some of the world’s most demanding organizations, and now do it inside yours.',
  },
  blocks: [
    {
      type: 'cards',
      id: 'leadership',
      name: 'Leadership',
      what: 'Who leads the company, with exact backgrounds',
      title: 'Who leads AIx2.',
      columns: 2,
      facts: ['P-01', 'P-02', 'P-03', 'P-04', 'P-05', 'P-06'],
      items: [
        {
          title: 'Mohammad Rasouli',
          copy: 'Founder and CEO · Stanford AI researcher · ex-McKinsey · ex-Microsoft · PhD, Electrical and Computer Engineering · 450+ citations',
          dependsOn: 'OQ-07',
        },
      ],
    },
    {
      type: 'cards',
      id: 'senior-team',
      name: 'Senior team',
      what: 'The engineers and consultants you will work with',
      title: 'The people you’ll work with.',
      columns: 3,
      items: [
        { title: '[Name]', copy: '[Role at AIx2] · Ex-[Company] · [Degree or teaching role]', dependsOn: 'OQ-06' },
        { title: '[Name]', copy: '[Role at AIx2] · Ex-[Company] · [Degree or teaching role]', dependsOn: 'OQ-06' },
        { title: '[Name]', copy: '[Role at AIx2] · Ex-[Company] · [Degree or teaching role]', dependsOn: 'OQ-06' },
      ],
    },
    {
      type: 'cards',
      id: 'affiliations',
      name: 'Affiliations',
      what: 'Where team members have worked or studied',
      title: 'Prior affiliations of AIx2 team members',
      columns: 4,
      facts: ['P-11', 'P-12'],
      items: [
        { title: 'McKinsey & Company' },
        { title: 'Microsoft' },
        { title: 'Stanford University' },
        { title: '[Google · Uber · MIT, once confirmed]', dependsOn: 'OQ-07' },
      ],
    },
    {
      type: 'cards',
      id: 'where-capital-listens',
      name: 'Where capital listens',
      what: 'The series, conferences and classes we take part in',
      title: 'Where we spend our time.',
      columns: 2,
      facts: ['S-01', 'S-03', 'P-07', 'P-08', 'P-09'],
      items: [
        { title: 'Stanford AI & Investment Series, co-hosted and moderated by Mohammad Rasouli', href: '/insights/stanford-ai-investment-series', dependsOn: 'OQ-03' },
        { title: 'SuperReturn and other investor conferences', href: '/insights#keynotes' },
        { title: 'A co-taught course at Stanford GSB', dependsOn: 'OQ-22' },
        { title: 'Lectures at Columbia, Wharton and NYU Stern', href: '/insights#podcasts-lectures', dependsOn: 'OQ-22' },
      ],
    },
    {
      type: 'cta',
      id: 'our-story',
      name: 'Our story',
      what: 'Where the name and the method come from',
      title: 'The name, and the first client.',
      body: 'Our name comes from AI for alternative investment, where we started. Our first client shaped our method.',
      dependsOn: 'OQ-10',
      actions: [{ label: 'See all customers', href: '/proof', variant: 'text' }],
    },
    {
      type: 'cta',
      id: 'next-step',
      name: 'Next step',
      what: 'Your first step',
      title: 'Book a call.',
      actions: [{ label: 'Book a call', href: '/contact', variant: 'primary' }],
    },
  ],
};
