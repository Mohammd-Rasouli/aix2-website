import { notFound } from 'next/navigation';
import { investorTopics } from '@/content/pages/investorTopics';
import { PageShell } from '@/components/page/PageShell';
import { InvestorTopicPage } from '@/components/page/InvestorTopicPage';
import { pageMetadata } from '@/lib/seo';

const find = (slug: string) => investorTopics.find((t) => t.slug === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return investorTopics.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }) {
  const t = find((await params).topic);
  return t ? pageMetadata(t.seo, t.route) : {};
}

/** For investors: one page per deal stage and per investor type (content/pages/investorTopics.ts, CC-64). */
export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
  const t = find((await params).topic);
  if (!t) notFound();
  return (
    <PageShell page={t.route}>
      <InvestorTopicPage t={t} />
    </PageShell>
  );
}
