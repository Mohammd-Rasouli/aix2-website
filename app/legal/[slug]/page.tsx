import { notFound } from 'next/navigation';
import { legalPages } from '@/content/pages';
import { legalLabels as L } from '@/content/pageLabels';
import { PageHero } from '@/components/page/PageHero';
import { PageShell } from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/seo';
import styles from './legal.module.css';

const slugOf = (route: string) => route.split('/').pop()!;
const find = (slug: string) => legalPages.find((p) => slugOf(p.route) === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: slugOf(p.route) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = find((await params).slug);
  return p ? { ...pageMetadata(p.seo, p.route), robots: { index: false, follow: true } } : {};
}

/** Legal pages: one document, contents on the left, the text on the right. Drafts for counsel (OQ-14), noindex. */
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = find((await params).slug);
  if (!p) notFound();
  const others = legalPages.filter((o) => o.route !== p.route);
  return (
    <PageShell page={p.route}>
      <PageHero name={L.name} what={L.what} title={p.title} subhead={p.status} location={p.route} />
      <div className={styles.doc}>
        <nav className={styles.toc} aria-label={L.contents}>
          <p className={styles.tocTitle}>{L.contents}</p>
          <ol>
            {p.sections.map((s, i) => (
              <li key={s.title}>
                <a href={`#section-${i + 1}`}>
                  <span className={styles.n} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
          <p className={styles.tocTitle}>{L.others}</p>
          <ul>
            {others.map((o) => (
              <li key={o.route}>
                <a href={o.route}>{o.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <article className={styles.body}>
          <p className={styles.pending}>Placeholder until OQ-14 is answered</p>
          {p.sections.map((s, i) => (
            <section key={s.title} id={`section-${i + 1}`} className={styles.part} aria-labelledby={`section-${i + 1}-title`}>
              <h2 id={`section-${i + 1}-title`} className={styles.partTitle}>
                <span className={styles.n} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s.title}
              </h2>
              {s.paragraphs.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </section>
          ))}
        </article>
      </div>
    </PageShell>
  );
}
