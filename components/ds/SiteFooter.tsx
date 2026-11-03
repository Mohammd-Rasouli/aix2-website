import { contactCta, footer } from '@/content/site';
import { ButtonLink } from './ButtonLink';
import { LogoMark } from '@/components/Logo';
import styles from './SiteFooter.module.css';

/**
 * Footer: the one call to action (CC-53), tagline, links, legal, and the disclaimer exactly as written (O-04).
 */
export function SiteFooter({ id, cta = true }: { id?: string; cta?: boolean }) {
  return (
    <footer id={id} className={styles.footer}>
      {cta && (
        <section className={styles.cta} aria-labelledby="footer-cta-title">
          <div className={styles.ctaText}>
            <h2 id="footer-cta-title" className={styles.ctaTitle}>
              {contactCta.title}
            </h2>
            <p className={styles.ctaLine}>{contactCta.line}</p>
          </div>
          <div className={styles.ctaActions}>
            <ButtonLink href={contactCta.book.href} variant="primary" size="lg" cta="book_call" location="footer">
              {contactCta.book.label}
            </ButtonLink>
            <p className={styles.ctaMail}>
              {contactCta.emailLabel} <a href={`mailto:${contactCta.email}`}>{contactCta.email}</a>
            </p>
          </div>
        </section>
      )}
      <div className={styles.top}>
        <div className={styles.brand}>
          <LogoMark className={styles.mark} />
          <p className={styles.tagline}>{footer.tagline}</p>
        </div>
        <nav className={styles.nav} aria-label="Footer">
          <ul className={styles.links}>
            {footer.columns.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.bottom}>
        <ul className={styles.legal}>
          {footer.legal.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <p className={styles.disclaimer}>{footer.disclaimer}</p>
        <p className={styles.line}>{footer.line}</p>
      </div>
    </footer>
  );
}
