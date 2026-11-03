/**
 * What each case is, for the Proof library's filters (SS: audience, industry, need, region,
 * engagement). Drawn from the case stories; no new claims. There is no investor case yet (LC).
 */
export interface CaseTags {
  audience: ('company' | 'investor')[];
  industry: string;
  need: string[];
  region: string;
  engagement: string[];
}

export const caseTags: Record<string, CaseTags> = {
  istanbul: {
    audience: ['company'],
    industry: 'Industrial manufacturing',
    need: ['diagnosis', 'optimal design of processes and data governance', 'monitoring implementation'],
    region: 'Turkey',
    engagement: ['Managed service'],
  },
  frankfurt: {
    audience: ['company'],
    industry: 'Technology distribution & export',
    need: ['diagnosis', 'optimal design of processes and data governance'],
    region: 'Germany',
    engagement: ['Due diligence'],
  },
  europe: {
    audience: ['company'],
    industry: 'Software & project delivery',
    need: ['diagnosis', 'optimal design of processes and data governance', 'monitoring implementation'],
    region: 'Europe',
    engagement: ['Due diligence'],
  },
  canada: {
    audience: ['company'],
    industry: 'IT & managed services',
    need: ['diagnosis', 'monitoring implementation'],
    region: 'Canada',
    engagement: ['Managed service'],
  },
  'mirr-oils': {
    audience: ['company'],
    industry: 'Industrial manufacturing',
    need: ['diagnosis', 'optimal design of processes and data governance', 'monitoring implementation'],
    region: 'United Arab Emirates',
    engagement: ['Due diligence'],
  },
  welektrik: {
    audience: ['company'],
    industry: 'Industrial manufacturing',
    need: ['diagnosis', 'optimal design of processes and data governance', 'monitoring implementation'],
    region: 'Turkey',
    engagement: ['Due diligence'],
  },
  'edu-journey': {
    audience: ['company'],
    industry: 'Education & consulting',
    need: ['diagnosis', 'connecting strategy to data and processes'],
    region: 'United States',
    engagement: ['Due diligence'],
  },
};
