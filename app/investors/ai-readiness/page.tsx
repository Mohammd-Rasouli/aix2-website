import { investorAiReadiness as content } from '@/content/pages/investorAi';
import { InnerPage } from '@/components/page/InnerPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(content.seo, content.route);

/** For investors · AI readiness roadmap (CC-80): the operators' roadmap, read for a portfolio. */
export default function Page() {
  return <InnerPage content={content} />;
}
