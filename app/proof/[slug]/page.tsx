import { notFound } from 'next/navigation';
import { casePages } from '@/content/cases';
import { CasePage } from '@/components/page/CasePage';
import { PageShell } from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/seo';

const slugOf = (route: string) => route.split('/').pop()!;
const find = (slug: string) => casePages.find((c) => slugOf(c.route) === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return casePages.map((c) => ({ slug: slugOf(c.route) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const c = find((await params).slug);
  return c ? pageMetadata(c.seo, c.route) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const c = find((await params).slug);
  if (!c) notFound();
  return (
    <PageShell page={c.route}>
      <CasePage c={c} />
    </PageShell>
  );
}
