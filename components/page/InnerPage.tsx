import type { ReactNode } from 'react';
import type { PageContent } from '@/content/pages/types';
import { Blocks, blockIndex } from './Blocks';
import { PageHero } from './PageHero';
import { PageShell } from './PageShell';

/** An inner page: the hero with its "On this page" index, anything page-specific, then the blocks. */
export function InnerPage({ content, children, after }: { content: PageContent; children?: ReactNode; after?: ReactNode }) {
  const h = content.hero;
  return (
    <PageShell page={content.route}>
      <PageHero name={h.name} what={h.what} title={h.title} subhead={h.subhead} actions={h.actions} dependsOn={h.dependsOn} index={blockIndex(content.blocks)} location={content.route} />
      {children}
      <Blocks blocks={content.blocks} />
      {after}
    </PageShell>
  );
}
