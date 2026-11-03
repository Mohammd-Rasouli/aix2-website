import styles from './LogoWall.module.css';

interface Logo {
  name: string;
  logo: string;
  /** Pixel size of the file, used to give every mark the same optical area. */
  w: number;
  h: number;
  /** A repeat that only fills the loop: hidden from assistive tech. */
  dup?: boolean;
}

/** Height that gives a mark of this aspect ratio the same visual area as the others. */
function opticalHeight(w: number, h: number, area: number) {
  return Math.round(Math.min(40, Math.max(16, Math.sqrt(area / (w / h)))));
}

function Track({ items, reverse, label, area = 2600, big }: { items: Logo[]; reverse?: boolean; label: string; area?: number; big?: boolean }) {
  const marks = (copy: boolean) =>
    items.map((it, i) => (
      <li key={(copy ? 'b-' : 'a-') + i + it.name} className={copy ? `${styles.logo} ${styles.copy}` : styles.logo} aria-hidden={copy || it.dup || undefined}>
        {/* eslint-disable-next-line @next/next/no-img-element -- small static marks, sized here */}
        <img src={it.logo} alt={copy || it.dup ? '' : it.name} width={it.w} height={it.h} loading="lazy" decoding="async" style={{ height: opticalHeight(it.w, it.h, area) + (big ? 8 : 0) }} />
      </li>
    ));
  return (
    <div className={styles.row} data-reverse={reverse ? 'true' : undefined} data-big={big ? 'true' : undefined}>
      <ul className={styles.track} aria-label={label}>
        {marks(false)}
        {/* The second copy makes the loop seamless; it is hidden from assistive tech and under reduced motion. */}
        {marks(true)}
      </ul>
    </div>
  );
}

/**
 * Trusted by: logos drifting slowly in two rows, fading at the edges. Hover or focus pauses the
 * drift; under reduced motion the logos sit still in a centred wrap.
 */
export function LogoWall({ id, title, groups }: { id?: string; title: string; groups: { label: string; items: Logo[] }[] }) {
  // A short list (our clients) drifts in one row, set larger (user, 2026-11-01: moving shows there are many).
  // The list repeats inside each copy so one copy is wider than the screen and the loop never shows a gap.
  const all = groups.flatMap((g) => g.items);
  if (all.length <= 10) {
    const fill = [...all, ...all.map((it) => ({ ...it, dup: true }))];
    return (
      <div className={styles.wall}>
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
        <div className={styles.rows} tabIndex={-1}>
          <Track items={fill} label={groups.map((g) => g.label).join(', ')} area={5200} big />
        </div>
      </div>
    );
  }
  // Row one: funds and founders with press; row two: the conferences.
  const conferences = groups.find((g) => g.label.startsWith('Conferences'));
  const rest = groups.filter((g) => g !== conferences);
  return (
    <div className={styles.wall}>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      <div className={styles.rows} tabIndex={-1}>
        <Track items={rest.flatMap((g) => g.items)} label={rest.map((g) => g.label).join(', ')} />
        {conferences && <Track items={conferences.items} label={conferences.label} reverse />}
      </div>
    </div>
  );
}
