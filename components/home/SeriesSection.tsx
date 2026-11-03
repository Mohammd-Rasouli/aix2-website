import { landing } from '@/content/home';
import { insights } from '@/content/pages/insights';
import { SectionHead } from '@/components/ds/SectionHead';
import { SeriesFeature } from '@/components/page/SeriesFeature';
import shell from './Section.module.css';

/** Stanford sessions on home (CC-57): the Insights hub's featured guests, as published (USR-04). */
export function SeriesSection({ mark = '07' }: { mark?: string }) {
  const p = landing.series;
  const block = insights.blocks.find((b) => b.type === 'seriesFeature');
  const featured = block && block.type === 'seriesFeature' ? block.featured : [];
  return (
    <section id="stanford" className={shell.section} aria-labelledby="stanford-title">
      <SectionHead id="stanford-title" mark={mark} name={p.name} what={p.what} title={p.title} body={p.body} />
      <SeriesFeature featured={featured} cta={p.cta} />
    </section>
  );
}
