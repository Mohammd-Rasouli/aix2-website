import { healthcare as content } from '@/content/pages';
import { InnerPage } from '@/components/page/InnerPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(content.seo, content.route);

export default function Page() {
  return <InnerPage content={content} />;
}
