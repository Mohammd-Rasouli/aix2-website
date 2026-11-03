import { proofLibrary as content } from '@/content/pages';
import { cases, trustedBy } from '@/content/home';
import { LogoWall } from '@/components/ds/LogoWall';
import { libraryLabels } from '@/content/pageLabels';
import { PageHero } from '@/components/page/PageHero';
import { PageShell } from '@/components/page/PageShell';
import { ProofLibrary } from '@/components/page/ProofLibrary';
import { pageMetadata } from '@/lib/seo';
import styles from './page.module.css';

export const metadata = pageMetadata(content.seo, content.route);

export default function Page() {
  const h = content.hero;
  return (
    <PageShell page={content.route}>
      <PageHero name={h.name} what={h.what} title={h.title} subhead={h.subhead} location={content.route} />
      <section className={styles.logos} aria-labelledby="customers-logos">
        <LogoWall id="customers-logos" title="Sample Customers" groups={trustedBy.groups} />
      </section>
      <ProofLibrary cases={cases} filters={content.filters} labels={libraryLabels} />
    </PageShell>
  );
}
