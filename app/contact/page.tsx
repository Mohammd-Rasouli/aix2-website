import { contact as content, contactPage as C } from '@/content/pages';
import { ButtonLink } from '@/components/ds/ButtonLink';
import { PageShell } from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/seo';
import styles from './contact.module.css';

export const metadata = pageMetadata(content.seo, content.route);

/**
 * Contact, on one screen (user, 2026-10-31: the page was too complex): the promise, two ways to reach
 * us and what happens next; no form, one call to action (CC-51, CC-53). Copy in content/pages/contact.ts.
 */
export default function Page() {
  const h = content.hero;
  return (
    <PageShell page={content.route}>
      <section className={styles.contact} aria-labelledby="contact-title">
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.lead}>
          <p className={styles.kicker}>
            <span className={styles.name}>{h.name}</span>
            <span className={styles.what}>{h.what}</span>
          </p>
          <h1 id="contact-title" className={styles.title}>
            {h.title}
          </h1>
          <p className={styles.subhead}>{h.subhead}</p>

          <div className={styles.ways}>
            <ButtonLink href={C.call.href} variant="primary" size="lg" cta="book_call" location="contact">
              {C.call.label}
            </ButtonLink>
            <a className={styles.mail} href={`mailto:${C.email.address}`}>
              <span className={styles.mailLabel}>{C.email.label}</span>
              <span className={styles.mailAddress}>{C.email.address}</span>
            </a>
          </div>

          <div className={styles.next}>
            <p className={styles.nextTitle}>{C.stepsTitle}</p>
            <ol className={styles.steps}>
              {C.steps.map((s, i) => (
                <li key={s}>
                  <span className={styles.n} aria-hidden="true">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
