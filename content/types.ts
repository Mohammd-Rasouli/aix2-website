/**
 * Content types. Every string a visitor reads lives in content/*.ts, typed here,
 * so a non-developer can edit copy and a CMS can replace these files later.
 * `facts` lists the IDs in docs/facts.md that trace each number.
 */

export interface LinkItem {
  label: string;
  href: string;
}

/** A number that can count up. `value` is what the counter animates to. */
export interface StatNumber {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export interface FromToStatContent {
  id: string;
  label: string;
  from: StatNumber;
  to: StatNumber;
  client: string;
  /** Who measured and over which window, verbatim from LC's case label. */
  measurement: string;
  /** How the change is drawn: a gain on a 0–100 bar, days that collapse, or marks that fill. */
  visual?: 'gain' | 'collapse' | 'fill';
  facts: string[];
}

export interface DoorContent {
  id: 'company' | 'investor';
  label: string;
  href: string;
}

export interface HeroAnnotationContent {
  id: 'a1' | 'a2' | 'a3';
  delta: number;
  /** The count in `text`, for the compact finding card. */
  figure: StatNumber;
  text: string;
  foundAt: string;
  facts: string[];
}

/** A finding as it appears in a findings register: count · severity · owner (BRIEF §4). */
export interface FindingContent {
  id: string;
  count: StatNumber;
  /** The population the count is taken from; draws the proportion bar. */
  of?: { value: number; unit: string };
  text: string;
  severity?: 'Critical' | 'High' | 'Medium' | 'Low';
  owner?: string;
  source: string;
  facts: string[];
  dependsOn?: string;
}

export interface HeroContent {
  /** Captions beside the playing model (desktop): what it shows at each stage. */
  /** Heading over the five captions (CC-61). */
  storyTitle?: string;
  story: { id: string; kicker: string; title: string; line: string }[];
  eyebrow: string;
  headline: string;
  subhead: string;
  doors: [DoorContent, DoorContent];
  proofLink: LinkItem;
  talkLink: LinkItem;
  annotations: HeroAnnotationContent[];
  drawingDescription: string;
  drawingLabels: Record<string, string>;
  flowLabels: Record<string, string>;
  lens: { tag: string; hint: string; labels: Record<string, string> };
  modelKey: ModelKeyContent;
  proof: FromToStatContent[];
  countries: string;
}

/** The key beside the 3D model: what the model is, and what each of its three states means. */
export interface ModelKeyContent {
  title: string;
  line: string;
  rows: { id: 'drawn' | 'built' | 'finding'; term: string; text: string }[];
}

/**
 * Plain words for what a section is, so a metaphor ("Red lines") never stands alone.
 * `name` is LC's own section name or eyebrow; `what` is new copy (CC-12).
 */
export interface SectionFraming {
  name: string;
  /** What kind of content this is: findings, method, proof, people or an offer. */
  what: string;
  /** The visitor's question this section answers (LC "Page path"). Shown on /styleguide only. */
  question: string;
  /** How to read the visual that follows, when it needs it. */
  guide?: string;
}

export type FragmentKind = 'variants' | 'offSystem' | 'unproven' | 'twoHeads' | 'leak' | 'weeks';

export interface RedLineCardContent {
  id: string;
  delta: number;
  title: string;
  line: string;
  foundAt: string;
  figure: StatNumber;
  fragment: FragmentKind;
  facts: string[];
  /** Open question that must be answered before this card can publish. */
  dependsOn?: string;
}

export interface MarketStatContent {
  id: string;
  figure: string;
  text: string;
  source: string;
  href: string;
  facts: string[];
}

export interface RedLinesContent {
  eyebrow: string;
  headline: string;
  body: string;
  cards: RedLineCardContent[];
  highlight: [string, string];
  /** The tag on each card, e.g. "Finding {n} of {total}" (CC-12). */
  cardTag: string;
  marketStats: MarketStatContent[];
  endLink: LinkItem;
}

export interface NavItem {
  label: string;
  href: string;
  hasMenu: boolean;
}

export interface SiteContent {
  url: string;
  locale: string;
  dir: 'ltr' | 'rtl';
  seo: {
    title: string;
    description: string;
    shareTitle: string;
    shareDescription: string;
  };
  announcement: LinkItem;
  /** The One-Week Proof note in the top bar (CC-68). */
  announcementProof: LinkItem & { badge: string; short: string };
  nav: NavItem[];
  navButton: LinkItem;
  sheets: { id: string; number: number; name: string }[];
}

export interface MenuColumn {
  title: string;
  items: LinkItem[];
}

export interface MegaMenu {
  id: string;
  label: string;
  href: string;
  /** Who the section is for, verbatim from the page's hero in SS. */
  summary?: string;
  columns: MenuColumn[];
  featured?: LinkItem;
}

export interface FooterContent {
  tagline: string;
  columns: LinkItem[];
  legal: LinkItem[];
  disclaimer: string;
  line: string;
}

export interface StepContent {
  n: string;
  title: string;
  copy: string;
  tag: string;
}

export interface CaseStat {
  label: string;
  from: string;
  to: string;
}

export interface CaseContent {
  id: string;
  /** Company name (allowed since 2026-10-30); its logo comes from content/cases/logos.ts. */
  name?: string;
  client: string;
  headline: string;
  stats: CaseStat[];
  /** 'findings': the figures are what a diagnosis found, not results; shown in red, never as gains. */
  statsKind?: 'results' | 'findings';
  how: string;
  label: string;
  href: string;
  facts: string[];
  dependsOn?: string;
}

export interface SelectorCard {
  headline: string;
  start: string;
  proof: string;
  button: LinkItem;
  facts: string[];
  dependsOn?: string;
}

export interface ComparisonCell {
  mark?: 'full' | 'partial' | 'none';
  note?: string;
}

export interface FaqItem {
  q: string;
  a: string;
  facts?: string[];
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'select' | 'textarea';
  autoComplete?: string;
  required?: boolean;
  options?: string[];
}
