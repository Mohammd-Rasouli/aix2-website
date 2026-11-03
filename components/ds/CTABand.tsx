import { ButtonLink } from './ButtonLink';
import styles from './CTABand.module.css';

interface StartContent {
  headline: string;
  subhead: string;
  offer: string;
  primary: { label: string; href: string };
  investor: { label: string; href: string };
  secondary: { label: string; href: string };
  contact: string;
  steps: string[];
}

/** "Bring us one process": the closing band, one call to action and the e-mail (CC-53). */
export function CTABand({ content, kicker, id = 'cta-title' }: { content: StartContent; kicker: { name: string; what: string }; id?: string }) {
  const email = /^(.*?)([\w.+-]+@[\w-]+\.[\w.]+)\s*$/.exec(content.contact);
  return (
    <section className={styles.band} aria-labelledby={id}>
      <div className={styles.lens} aria-hidden="true" />
      <div className={styles.main}>
        <p className={styles.kicker}>
          <span className={styles.name}>{kicker.name}</span>
          <span className={styles.what}>{kicker.what}</span>
        </p>
        <h2 id={id} className={styles.title}>
          {content.headline}
        </h2>
        <p className={styles.subhead}>{content.subhead}</p>
        <div className={styles.actions}>
          <ButtonLink href={content.primary.href} variant="primary" size="lg" cta="book_call" location="cta_band">
            {content.primary.label}
          </ButtonLink>
        </div>
        {email && (
          <p className={styles.more}>
            <span className={styles.contact}>
              {email[1]}
              <a href={`mailto:${email[2]}`}>{email[2]}</a>
            </span>
          </p>
        )}
      </div>

    </section>
  );
}
