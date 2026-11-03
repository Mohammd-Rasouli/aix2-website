import { series } from '@/content/pages';
import { showcase as L } from '@/content/pages/seriesShowcase';
import { Blocks } from '@/components/page/Blocks';
import { PageHero } from '@/components/page/PageHero';
import { PageShell } from '@/components/page/PageShell';
import { SeriesShowcase } from '@/components/page/SeriesShowcase';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(L.seo, series.route);

/**
 * The Stanford sessions: the hosts and counts, the institutions in the room, every session with every
 * guest (USR-04), then the short clips and the recordings from content/pages/series.ts.
 */
export default function Page() {
  const rest = series.blocks.filter((b) => b.type !== 'home' && ['clips', 'recordings'].includes(b.id));
  const index = [
    { id: L.programme.id, name: L.programme.name, what: L.programme.what },
    ...rest.map((b) => (b.type === 'home' ? { id: '', name: '', what: '' } : { id: b.id, name: b.name, what: b.what })),
  ];
  return (
    <PageShell page={series.route}>
      <PageHero name={L.hero.name} what={L.hero.what} title={L.hero.title} subhead={L.hero.subhead} actions={L.hero.actions} index={index} location={series.route} />
      <SeriesShowcase />
      <Blocks blocks={rest} start={1} />
    </PageShell>
  );
}
