import { hero, sceneLabels } from '@/content/home';
import { site } from '@/content/site';
import { HeroC } from '@/components/hero/HeroC';
import { ScanBackdrop } from '@/components/scan/ScanBackdrop';
import { SiteHeader } from '@/components/shell/SiteHeader';
import { SmoothScroll } from '@/components/shell/SmoothScroll';
import { SiteFooter } from '@/components/ds/SiteFooter';
import { HowSection } from '@/components/home/HowSection';
import { OneWeekProofSection } from '@/components/home/OneWeekProofSection';
import { ProblemSection } from '@/components/home/ProblemSection';
import { SeriesSection } from '@/components/home/SeriesSection';
import { ServeSection } from '@/components/home/ServeSection';
import { ProofSection } from '@/components/home/ProofSection';
import { StartSection } from '@/components/home/StartSection';
import { TrustedBy } from '@/components/home/TrustedBy';
import { CLOUDS } from '@/scene/model';
import styles from './home.module.css';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AIx2',
  url: site.url,
  description: site.seo.description,
};

/** Home, the shorter landing (CC-57, user 2026-11-01). The scene behind the hero carries into The problem. */
export default function Home() {
  const sides = Object.fromEntries(CLOUDS.map((c) => [c.id, c.side])) as Record<string, 'left' | 'right'>;
  return (
    <div className={styles.page} data-page="home">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <ScanBackdrop
        annotations={hero.annotations}
        sides={sides}
        flowLabels={hero.flowLabels}
        drawingLabels={hero.drawingLabels}
        lens={hero.lens}
        modelKey={hero.modelKey}
        afterHeroId="trusted-by"
        nextId="problem"
        sceneIds={['hero', 'trusted-by', 'problem', 'how']}
        sceneLabels={sceneLabels}
        story={hero.story}
        storyTitle={hero.storyTitle}
      />
      <div className={styles.over}>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          <HeroC />
          <TrustedBy />
          <ProblemSection mark="02" />
          <OneWeekProofSection mark="03" />
          <HowSection mark="04" />
          <ServeSection mark="05" />
          <ProofSection mark="06" />
          <SeriesSection mark="07" />
          <StartSection />
        </main>
        <SiteFooter id="page-foot" cta={false} />
      </div>
      <SmoothScroll />
    </div>
  );
}
