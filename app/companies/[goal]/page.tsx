import { notFound } from 'next/navigation';
import { goalPages } from '@/content/pages';
import { InnerPage } from '@/components/page/InnerPage';
import { pageMetadata } from '@/lib/seo';

const find = (slug: string) => goalPages.find((g) => g.slug === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return goalPages.map((g) => ({ goal: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ goal: string }> }) {
  const g = find((await params).goal);
  return g ? pageMetadata(g.seo, g.route) : {};
}

/** For companies · By goal: one page per offer, built from the Executive Deck (content/pages/goals.ts). */
export default async function Page({ params }: { params: Promise<{ goal: string }> }) {
  const g = find((await params).goal);
  if (!g) notFound();
  return <InnerPage content={g} />;
}
