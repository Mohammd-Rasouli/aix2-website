/**
 * Legal pages. DRAFT PLACEHOLDERS: every paragraph is a bracketed note for counsel, not legal text
 * (OQ-14). The current aix2.ai privacy policy and terms cover an older product and are not reused.
 */
const STATUS = 'Draft · pending legal review (OQ-14)';

export const legalPages: {
  route: string;
  seo: { title: string; description: string };
  title: string;
  status: string;
  sections: { title: string; paragraphs: string[] }[];
}[] = [
  {
    route: '/legal/privacy',
    seo: { title: 'AIx2 · Privacy', description: 'Draft privacy notice for aix2.ai, pending legal review.' },
    title: 'Privacy',
    status: STATUS,
    sections: [
      { title: 'Who is responsible', paragraphs: ['[To be written with counsel: the controller of personal data on this site and how to reach them.]'] },
      { title: 'Data you send us', paragraphs: ['[To be written with counsel: who processes data submitted through the contact form, and why.]'] },
      { title: 'Cookies and analytics', paragraphs: ['[To be written with counsel: what is measured on this site, with which provider, and on what basis (OQ-32).]'] },
      { title: 'How long we keep data', paragraphs: ['[To be written with counsel: retention periods for contact requests.]'] },
      { title: 'Your rights', paragraphs: ['[To be written with counsel: the rights available to visitors and how to use them.]'] },
    ],
  },
  {
    route: '/legal/terms',
    seo: { title: 'AIx2 · Terms', description: 'Draft terms of use for aix2.ai, pending legal review.' },
    title: 'Terms',
    status: STATUS,
    sections: [
      { title: 'Use of this site', paragraphs: ['[To be written with counsel: the terms for using this website.]'] },
      { title: 'What this site is not', paragraphs: ['[To be written with counsel: the disclaimer shown in the site footer, in full legal form.]'] },
      { title: 'Content and ownership', paragraphs: ['[To be written with counsel: ownership of site content and use of the AIx2 name.]'] },
      { title: 'Governing law', paragraphs: ['[To be written with counsel: governing law and jurisdiction.]'] },
    ],
  },
  {
    route: '/legal/imprint',
    seo: { title: 'AIx2 · Imprint', description: 'Draft imprint for aix2.ai, pending legal review.' },
    title: 'Imprint',
    status: STATUS,
    sections: [
      {
        title: 'Company details',
        paragraphs: [
          '[Company name]',
          '[Registered address]',
          '[Register court and number]',
          '[Managing directors]',
          '[VAT ID]',
          '[Contact]',
        ],
      },
    ],
  },
  {
    route: '/legal/cookies',
    seo: { title: 'AIx2 · Cookie settings', description: 'Draft cookie information for aix2.ai, pending legal review.' },
    title: 'Cookie settings',
    status: STATUS,
    sections: [
      { title: 'Cookies we use', paragraphs: ['[To be written with counsel: the cookies this site sets, if any, and their purpose (OQ-32).]'] },
      { title: 'Your choices', paragraphs: ['[To be written with counsel: how a visitor can accept, decline or change their choice.]'] },
    ],
  },
];
