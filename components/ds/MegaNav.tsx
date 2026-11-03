'use client';

import { useEffect, useId, useRef, useState, type CSSProperties, type FocusEvent, type KeyboardEvent } from 'react';
import { usePathname } from 'next/navigation';
import { menus, site } from '@/content/site';
import type { MegaMenu } from '@/content/types';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/shell/ThemeToggle';
import { ButtonLink } from './ButtonLink';
import styles from './MegaNav.module.css';

const INTENT = 120; // --hover-intent: passing the pointer over the bar opens nothing
const LINGER = 280; // grace period for the pointer to travel from the bar into the panel

const base = (href: string) => href.split('#')[0]!.split('?')[0]!;

function Chevron() {
  return (
    <svg className={styles.chev} viewBox="0 0 10 6" aria-hidden="true" focusable="false">
      <path d="M1 1l4 4 4-4" />
    </svg>
  );
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg className={className ?? styles.arrow} viewBox="0 0 20 12" aria-hidden="true" focusable="false">
      <path d="M0 6h18M13 1l5 5-5 5" />
    </svg>
  );
}

/** The links of one menu, shared by the desktop panel and the mobile drawer. */
function MenuBody({ menu, pathname, idBase }: { menu: MegaMenu; pathname: string; idBase: string }) {
  return (
    <>
      <div className={styles.overview}>
        <a className={styles.overviewLink} href={menu.href} aria-current={pathname === base(menu.href) ? 'page' : undefined}>
          {menu.label}
          <Arrow />
        </a>
        {menu.summary && <p className={styles.summary}>{menu.summary}</p>}
      </div>
      {menu.columns.map((col, c) => (
        <div key={col.title} className={styles.col}>
          <p className={styles.colTitle} id={`${idBase}-c${c}`}>
            {col.title}
          </p>
          <ul aria-labelledby={`${idBase}-c${c}`}>
            {col.items.map((item) => (
              <li key={item.label}>
                <a className={styles.link} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {menu.featured && (
        <a className={styles.featured} href={menu.featured.href}>
          <span className={styles.featuredLens} aria-hidden="true" />
          <span className={styles.featuredText}>{menu.featured.label}</span>
          <Arrow className={styles.featuredArrow} />
        </a>
      )}
    </>
  );
}

/**
 * Main navigation: five mega menus and Proof, the "Bring us one process" button, and a
 * drawer on small screens. Disclosure pattern: buttons with aria-expanded; Esc closes and
 * returns focus; arrow keys move along the bar and through a panel's links.
 */
export function MegaNav({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [group, setGroup] = useState<string | null>(null);
  const pathname = usePathname() ?? '/';
  const nav = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const triggers = useRef<Record<string, HTMLButtonElement | null>>({});
  const panels = useRef<Record<string, HTMLDivElement | null>>({});
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const uid = useId().replace(/:/g, '');

  const clear = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  };
  useEffect(() => clear, []);

  // Outside press closes the open panel.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!nav.current?.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // The drawer is a native modal dialog: focus is trapped, Esc closes, focus returns.
  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (drawer && !d.open) d.showModal();
    if (!drawer && d.open) d.close();
    document.documentElement.style.overflow = drawer ? 'hidden' : '';
  }, [drawer]);

  const fine = () => window.matchMedia('(pointer: fine)').matches;

  const enter = (id: string) => {
    if (!fine()) return;
    clear();
    if (open) setOpen(id);
    else timer.current = setTimeout(() => setOpen(id), INTENT);
  };
  const leave = () => {
    if (!fine()) return;
    clear();
    timer.current = setTimeout(() => setOpen(null), LINGER);
  };

  const panelLinks = (id: string) => Array.from(panels.current[id]?.querySelectorAll<HTMLAnchorElement>('a') ?? []);
  const topItems = () => Array.from(nav.current?.querySelectorAll<HTMLElement>('[data-top]') ?? []);

  const moveTop = (from: HTMLElement, dir: 1 | -1) => {
    const items = topItems();
    const i = items.indexOf(from);
    items[(i + dir + items.length) % items.length]?.focus();
  };

  const onTriggerKey = (e: KeyboardEvent<HTMLButtonElement>, id: string) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(id);
      requestAnimationFrame(() => panelLinks(id)[0]?.focus());
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      moveTop(e.currentTarget, e.key === 'ArrowRight' ? 1 : -1);
    }
  };

  const onPanelKey = (e: KeyboardEvent<HTMLDivElement>, id: string) => {
    const list = panelLinks(id);
    const i = list.indexOf(document.activeElement as HTMLAnchorElement);
    const go = (n: number) => {
      e.preventDefault();
      list[(n + list.length) % list.length]?.focus();
    };
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      setOpen(null);
      triggers.current[id]?.focus();
    } else if (e.key === 'ArrowDown') go(i + 1);
    else if (e.key === 'ArrowUp') go(i - 1);
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(list.length - 1);
  };

  const onItemBlur = (e: FocusEvent<HTMLLIElement>, id: string) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen((o) => (o === id ? null : o));
  };

  return (
    <header className={[styles.header, overlay ? styles.overlay : ''].join(' ')} data-menu-open={open ? 'true' : 'false'}>
      <a className={styles.wordmark} href="/" aria-label="AIx2, home">
        <Logo />
      </a>

      <nav ref={nav} className={styles.nav} aria-label="Main" onPointerLeave={leave} onPointerEnter={clear}>
        <ul className={styles.list}>
          {menus.map((m) => {
            const current = pathname.startsWith(base(m.href)) && base(m.href) !== '/';
            if (!m.columns.length) {
              return (
                <li key={m.id} className={styles.item}>
                  <a
                    data-top
                    className={styles.top}
                    href={m.href}
                    aria-current={pathname === base(m.href) ? 'page' : undefined}
                    data-current={current ? 'true' : undefined}
                    onPointerEnter={() => {
                      clear();
                      if (open) setOpen(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                        e.preventDefault();
                        moveTop(e.currentTarget, e.key === 'ArrowRight' ? 1 : -1);
                      }
                    }}
                  >
                    {m.label}
                  </a>
                </li>
              );
            }
            const isOpen = open === m.id;
            const compact = m.columns.length < 2 && !m.featured;
            const panelId = `${uid}-${m.id}`;
            const tpl = ['minmax(180px, 0.8fr)', ...m.columns.map(() => 'minmax(0, 1fr)'), ...(m.featured ? ['minmax(240px, 1.1fr)'] : [])].join(' ');
            return (
              <li key={m.id} className={styles.item} data-size={compact ? 'compact' : 'wide'} onBlur={(e) => onItemBlur(e, m.id)}>
                <button
                  data-top
                  ref={(el) => {
                    triggers.current[m.id] = el;
                  }}
                  type="button"
                  className={styles.top}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  data-current={current ? 'true' : undefined}
                  onClick={() => {
                    clear();
                    setOpen(isOpen ? null : m.id);
                  }}
                  onPointerEnter={() => enter(m.id)}
                  onKeyDown={(e) => onTriggerKey(e, m.id)}
                >
                  {m.label}
                  <Chevron />
                </button>
                <div
                  id={panelId}
                  ref={(el) => {
                    panels.current[m.id] = el;
                  }}
                  className={styles.panel}
                  data-open={isOpen ? 'true' : 'false'}
                  style={{ '--tpl': tpl } as CSSProperties}
                  onKeyDown={(e) => onPanelKey(e, m.id)}
                  onPointerEnter={clear}
                >
                  <MenuBody menu={m} pathname={pathname} idBase={panelId} />
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      <ThemeToggle className={styles.theme} />

      <ButtonLink href={site.navButton.href} variant="primary" size="md" cta="bring_one_process" location="header" className={styles.cta}>
        {site.navButton.label}
      </ButtonLink>

      <button type="button" className={styles.menuButton} aria-expanded={drawer} aria-controls={`${uid}-drawer`} onClick={() => setDrawer(true)}>
        <span className={styles.burger} aria-hidden="true" />
        Menu
      </button>

      <dialog
        ref={dialog}
        id={`${uid}-drawer`}
        className={styles.drawer}
        aria-label="Menu"
        onClose={() => setDrawer(false)}
        onCancel={() => setDrawer(false)}
      >
        <div className={styles.drawerHead}>
          <a className={styles.wordmark} href="/" aria-label="AIx2, home">
            <Logo />
          </a>
          <button type="button" className={styles.close} onClick={() => setDrawer(false)} autoFocus>
            Close
            <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">
              <path d="M2 2l8 8M10 2l-8 8" />
            </svg>
          </button>
        </div>
        <ul className={styles.groups}>
          {menus.map((m) => {
            if (!m.columns.length) {
              return (
                <li key={m.id} className={styles.group}>
                  <a className={styles.groupLink} href={m.href}>
                    {m.label}
                  </a>
                </li>
              );
            }
            const expanded = group === m.id;
            const gid = `${uid}-g-${m.id}`;
            return (
              <li key={m.id} className={styles.group}>
                <button type="button" className={styles.groupButton} aria-expanded={expanded} aria-controls={gid} onClick={() => setGroup(expanded ? null : m.id)}>
                  {m.label}
                  <Chevron />
                </button>
                <div id={gid} className={styles.groupPanel} hidden={!expanded}>
                  <MenuBody menu={m} pathname={pathname} idBase={gid} />
                </div>
              </li>
            );
          })}
        </ul>
        <div className={styles.drawerFoot}>
          <ButtonLink href={site.navButton.href} variant="primary" size="lg" cta="bring_one_process" location="drawer" className={styles.drawerCta}>
            {site.navButton.label}
          </ButtonLink>
        </div>
      </dialog>
    </header>
  );
}
