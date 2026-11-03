import { notFound } from 'next/navigation';
import { industryPages } from '@/content/pages/industries';
import { InnerPage } from '@/components/page/InnerPage';
import { pageMetadata } from '@/lib/seo';

/** Industry pages built from the user's slides (content/pages/industries.ts). Healthcare and pharma have their own folders. */
const bySlug = (slug: string) => industryPages.find((p) => p.route === `/industries/${slug}`);

export function generateStaticParams() {
  return industryPages.map((p) => ({ slug: p.route.split('/').pop()! }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = bySlug((await params).slug);
  return p ? pageMetadata(p.seo, p.route) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = bySlug((await params).slug);
  if (!p) notFound();
  return <InnerPage content={p} />;
}
