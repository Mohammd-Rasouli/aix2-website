import { investorTopics } from '@/content/pages/investorTopics';
import styles from './InvestorTopicPage.module.css';

/** The investor pages as cards on the For investors hub (CC-65): headline and the case figure. */
export function InvestorHubCards({ group }: { group: 'stage' | 'investor' }) {
  const list = investorTopics.filter((t) => t.group === group);
  return (
    <ul className={styles.hub} data-count={list.length}>
      {list.map((o) => (
        <li key={o.slug}>
          <a className={styles.hubCard} href={o.route}>
            <span className={styles.moreGroup}>{o.label}</span>
            <span className={styles.hubTitle}>
              {o.title[0]} <span className={styles.accent}>{o.title[1]}</span>
            </span>
            <span className={styles.hubFig}>
              <span className={styles.hubFigNum}>{o.kase.figure}</span>
              <span className={styles.hubFigLine}>
                {o.kase.figureLine}
                <small>Illustrative case · {o.kase.who}</small>
              </span>
            </span>
            <span className={styles.caseGo}>
              Read more <span aria-hidden="true">→</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
