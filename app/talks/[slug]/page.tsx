import { notFound } from 'next/navigation';
import { talks } from '@/content/pages';
import { talkLabels as L } from '@/content/pageLabels';
import { ButtonLink } from '@/components/ds/ButtonLink';
import { PageHero } from '@/components/page/PageHero';
import { PageShell } from '@/components/page/PageShell';
import { TalkVideo } from '@/components/page/TalkVideo';
import { Blocks } from '@/components/page/Blocks';
import { pageMetadata } from '@/lib/seo';
import blocks from '@/components/page/Blocks.module.css';
import styles from './talk.module.css';

const find = (slug: string) => talks.find((t) => t.slug === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return talks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const t = find((await params).slug);
  return t ? pageMetadata(t.seo, t.route) : {};
}

/** The talk page a QR code on stage points to: the video, the slides, one next step. */
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const t = find((await params).slug);
  if (!t) notFound();
  return (
    <PageShell page={t.route}>
      <PageHero name={L.name} what={t.event} title={t.title} subhead={L.heard} actions={[{ ...t.button, variant: 'primary' }]} location={`talk_${t.slug}`} />
      <section className={styles.talk} aria-label={t.line}>
        <div className={styles.video}>
          <TalkVideo id={t.video.id} title={t.title} labels={L} />
          {t.video.dependsOn && <p className={blocks.pending}>Placeholder until {t.video.dependsOn} is answered</p>}
        </div>
        <aside className={styles.aside}>
          <div className={styles.group}>
            <p className={styles.label}>{L.details}</p>
            <p className={styles.event}>{t.event}</p>
            <p className={styles.line}>{t.line}</p>
          </div>
          <div className={styles.group}>
            <p className={styles.label}>{L.slides}</p>
            {t.slides?.href ? (
              <a className={styles.link} href={t.slides.href}>
                {L.slides} <span aria-hidden="true">→</span>
              </a>
            ) : (
              <p className={blocks.pending}>Placeholder until {t.slides?.dependsOn ?? 'OQ-21'} is answered</p>
            )}
          </div>
          <div className={styles.group}>
            <p className={styles.label}>{L.next}</p>
            <ButtonLink href={t.button.href} variant="primary" location={`talk_${t.slug}`}>
              {t.button.label}
            </ButtonLink>
          </div>
        </aside>
      </section>
      {t.blocks && <Blocks blocks={t.blocks} />}
    </PageShell>
  );
}
