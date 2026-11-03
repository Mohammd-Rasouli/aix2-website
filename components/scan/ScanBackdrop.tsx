'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import type { gsap as GsapType } from 'gsap';
import type { ScrollTrigger as ScrollTriggerType } from 'gsap/ScrollTrigger';
import { Delta } from '@/components/Delta';
import type { ModelStage } from '@/components/ds/ModelKey';
import { useMediaQuery, useReducedMotion } from '@/lib/hooks';
import type { HeroAnnotationContent, ModelKeyContent } from '@/content/types';
import type { ScenePhases } from './LensCanvas';
import styles from './ScanBackdrop.module.css';

// The lens: the company as drawn, and as built wherever the lens looks.
// (StudioCanvas and the point-cloud ScanCanvas stay in the repo as earlier takes.)
const ScanCanvas = dynamic(() => import('./LensCanvas'), { ssr: false });

interface Props {
  annotations: HeroAnnotationContent[];
  sides: Record<string, 'left' | 'right'>;
  flowLabels: Record<string, string>;
  drawingLabels: Record<string, string>;
  lens: { tag: string; hint: string; labels: Record<string, string> };
  modelKey: ModelKeyContent;
  /** The section right after the hero: as it arrives, the hero's labels and notes fade. */
  afterHeroId?: string;
  /** Sections the scene shows behind; it stops rendering when none of them is on screen. */
  sceneIds?: string[];
  /** The section the scan hands over to after the hero; the scene steps back behind it. */
  nextId?: string;
  /** Captions for the stages of the hero run: what the model shows at each (CC-19). */
  story?: { id: string; kicker: string; title: string; line: string }[];
  /** The heading over the captions while they play. */
  storyTitle?: string;
  /** Words for the layers (How) and the lens marks (Two lenses), where the page has those sections. */
  sceneLabels?: { layers: string[]; lens: Record<string, string> };
}

const LENS_TONE: Record<string, 'red' | 'gold' | 'ink'> = { bottleneck: 'red', waiting: 'red', rework: 'ink', fix: 'gold', risk: 'red', flag: 'red', lever: 'gold', verify: 'gold' };

/** Which row of the key matches the screen: the lens (drawn and built), the opened model, the findings. */
/** The caption's beat: the five steps of the method (CC-52). Gap Analysis lands on the red lines (stage 'finding' from 0.6). */
/** Systems on the model, for the label markers (CC-71). */
const SYSTEM_IDS = new Set(['crm', 'erp', 'register']);

function beatAt(p: number) {
  if (p < 0.2) return 'lens';
  if (p < 0.4) return 'collect';
  if (p < 0.6) return 'map';
  if (p < 0.73) return 'finding';
  if (p < 0.86) return 'design';
  return 'live';
}

function stageAt(p: number): ModelStage {
  if (p < 0.2) return 'lens';
  if (p < 0.6) return 'built';
  return 'finding';
}

const FRAMES = {
  // CC-73: the whole model now shows at rest, so it is framed in the free space right of the headline, above Impact.
  start: { x0: 0.56, y0: 0.13, x1: 0.97, y1: 0.7 },
  end: { x0: 0.19, y0: 0.06, x1: 0.81, y1: 0.94 },
};

/** The real viewport and motion setting. During hydration `on` still holds the server default (desktop), so effects check this before loading anything heavy. */
function sceneAllowed() {
  return window.matchMedia('(min-width: 1024px)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

/** One fixed canvas behind the page: the scan travels from the hero into Red lines. */
export function ScanBackdrop({ annotations, sides, flowLabels, drawingLabels, lens, modelKey, afterHeroId = 'track-record', nextId = 'red-lines', sceneIds = ['hero', 'track-record', 'red-lines'], sceneLabels, story = [], storyTitle }: Props) {
  const hero = useRef(0);
  const next = useRef(0);
  const mid = useRef(0);
  const box = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement | null>(null);
  const ann = useRef<Record<string, HTMLElement | null>>({});
  const leaders = useRef<Record<string, SVGPathElement | null>>({});
  const clouds = useRef<Record<string, SVGPathElement | null>>({});
  const flows = useRef<Record<string, HTMLElement | null>>({});
  const nodes = useRef<Record<string, HTMLElement | null>>({});
  const ring = useRef<HTMLElement | null>(null);
  const hint = useRef<HTMLElement | null>(null);
  const key = useRef<HTMLDivElement>(null);
  const storyEl = useRef<HTMLDivElement>(null);
  const phases = useRef<ScenePhases>({ how: 0, step: 1, lens: 0, mode: 'operator' });
  const howAnchor = useRef<HTMLElement | null>(null);
  const lensAnchor = useRef<HTMLElement | null>(null);
  const layerLabels = useRef<(HTMLElement | null)[]>([]);
  const lensLabels = useRef<Record<string, HTMLElement | null>>({});
  const desktop = useMediaQuery('(min-width: 1024px)', true);
  const reduced = useReducedMotion();
  const [webgl, setWebgl] = useState(true);
  const [load, setLoad] = useState(false);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(true);
  const on = desktop && !reduced && webgl;
  const sceneKey = sceneIds.join(',');

  useEffect(() => setWebgl(webglAvailable()), []);
  useEffect(() => {
    // Inspection hook for the capture scripts (no effect on the page).
    (window as Window & { __scan?: unknown }).__scan = { hero, next };
  }, []);

  useEffect(() => {
    if (!on || !sceneAllowed()) return;
    const w = window as Window & { requestIdleCallback?: Window['requestIdleCallback'] };
    if (typeof w.requestIdleCallback === 'function') {
      const id = w.requestIdleCallback(() => setLoad(true), { timeout: 800 });
      return () => w.cancelIdleCallback(id);
    }
    const id = setTimeout(() => setLoad(true), 300);
    return () => clearTimeout(id);
  }, [on]);

  useEffect(() => {
    if (!on || !sceneAllowed()) return;
    // GSAP is only needed where the scene runs (desktop, motion allowed): phones never download it.
    let cancelled = false;
    let teardown: (() => void) | undefined;
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([g, s]) => {
      if (!cancelled) teardown = setup(g.gsap, s.ScrollTrigger);
    });
    return () => {
      cancelled = true;
      teardown?.();
    };

    function setup(gsap: typeof GsapType, ScrollTrigger: typeof ScrollTriggerType) {
    gsap.registerPlugin(ScrollTrigger);
    const heroEl = document.getElementById('hero');
    const midEl = document.getElementById(afterHeroId);
    const redEl = document.getElementById(nextId);
    const howEl = document.getElementById('how');
    const lensEl = document.getElementById('lenses');
    howAnchor.current = document.querySelector<HTMLElement>('[data-scene-anchor="how"]');
    lensAnchor.current = document.querySelector<HTMLElement>('[data-scene-anchor="lens"]');
    const vis = { dim: 0, howIn: 0, howOut: 0, lensIn: 0, lensOut: 0 };
    // The scene dims behind Red lines, and comes back where it has something to show.
    const applyBox = () => {
      phases.current.how = vis.howIn * (1 - vis.howOut);
      phases.current.lens = vis.lensIn * (1 - vis.lensOut);
      if (box.current) box.current.style.opacity = Math.max(1 - 0.72 * vis.dim, phases.current.how, phases.current.lens).toFixed(3);
    };
    const triggers: ScrollTriggerType[] = [];
    if (heroEl)
      triggers.push(
        ScrollTrigger.create({
          trigger: heroEl,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (s) => {
            hero.current = s.progress;
            const stage = stageAt(s.progress);
            if (key.current && key.current.dataset.stage !== stage) key.current.dataset.stage = stage;
            // The caption follows the same run: problem, what we do, what you get.
            const beat = beatAt(s.progress);
            if (storyEl.current && storyEl.current.dataset.stage !== beat) storyEl.current.dataset.stage = beat;
          },
        }),
      );
    if (midEl)
      triggers.push(
        ScrollTrigger.create({
          trigger: midEl,
          start: 'top bottom',
          end: 'top 40%',
          onUpdate: (s) => {
            mid.current = s.progress;
            // The caption leaves as the next section rises in.
            const after = s.progress > 0.3 ? 'true' : 'false';
            if (storyEl.current && storyEl.current.dataset.after !== after) storyEl.current.dataset.after = after;
          },
        }),
      );
    if (redEl)
      triggers.push(
        ScrollTrigger.create({
          trigger: redEl,
          start: 'top bottom',
          end: 'top 15%',
          onUpdate: (s) => {
            next.current = s.progress;
          },
        }),
        // Past the Red lines heading, the scan steps back behind the cards.
        ScrollTrigger.create({
          trigger: redEl,
          start: 'top 10%',
          end: 'top -60%',
          onUpdate: (s) => {
            vis.dim = s.progress;
            applyBox();
          },
        }),
      );
    const ramp = (el: HTMLElement | null, inKey: 'howIn' | 'lensIn', outKey: 'howOut' | 'lensOut') => {
      if (!el) return;
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          end: 'top 30%',
          onUpdate: (st) => {
            vis[inKey] = st.progress;
            applyBox();
          },
        }),
        ScrollTrigger.create({
          trigger: el,
          start: 'bottom 80%',
          end: 'bottom 20%',
          onUpdate: (st) => {
            vis[outKey] = st.progress;
            applyBox();
          },
        }),
      );
    };
    ramp(howEl, 'howIn', 'howOut');
    ramp(lensEl, 'lensIn', 'lensOut');
    const onStep = (ev: Event) => {
      phases.current.step = (ev as CustomEvent<number>).detail;
    };
    const onLens = (ev: Event) => {
      phases.current.mode = (ev as CustomEvent<'operator' | 'investor'>).detail;
    };
    window.addEventListener('aix2:step', onStep);
    window.addEventListener('aix2:lens', onLens);

    // Render only while a section the scene sits behind is on screen.
    const seen = new Set<Element>();
    const scenes = sceneKey.split(',').map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) seen.add(e.target);
        else seen.delete(e.target);
      }
      setActive(seen.size > 0);
    });
    scenes.forEach((el) => io.observe(el));
    return () => {
      triggers.forEach((t) => t.kill());
      io.disconnect();
      window.removeEventListener('aix2:step', onStep);
      window.removeEventListener('aix2:lens', onLens);
    };
    }
  }, [on, afterHeroId, nextId, sceneKey]);

  // The page knows when the scene runs, so the drawings that stand in for it can step aside.
  useEffect(() => {
    if (!on || !ready) return;
    document.documentElement.dataset.scene = 'on';
    return () => {
      delete document.documentElement.dataset.scene;
    };
  }, [on, ready]);

  if (!on) return <div className={styles.box} aria-hidden="true" />;

  return (
    <div ref={box} className={styles.box} data-ready={ready ? 'true' : 'false'} aria-hidden="true">
      {load && (
        <div className={styles.canvas}>
          <ScanCanvas
            hero={hero}
            next={next}
            mid={mid}
            frames={FRAMES}
            sides={sides}
            overlay={{ annotations: ann, leaders, clouds, flows, nodes, layer, ring, hint, modelKey: key, howAnchor, lensAnchor, layerLabels, lensLabels }}
            phases={phases}
            active={active}
            onReady={() => setReady(true)}
          />
        </div>
      )}
      <div className={styles.vignette} />
      {sceneLabels && (
        <div className={styles.later}>
          <ul className={styles.layerLabels}>
            {sceneLabels.layers.map((n, i) => (
              <li
                key={n}
                ref={(el) => {
                  layerLabels.current[i] = el;
                }}
              >
                {n}
              </li>
            ))}
          </ul>
          <ul className={styles.lensLabels}>
            {Object.entries(sceneLabels.lens).map(([k, n]) => (
              <li
                key={k}
                data-tone={LENS_TONE[k] ?? 'ink'}
                ref={(el) => {
                  lensLabels.current[k] = el;
                }}
              >
                {n}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className={styles.layer}
        ref={(el) => {
          layer.current = el;
        }}
      >
        {story.length > 0 && (
          <div ref={storyEl} className={styles.story} data-stage="lens">
            {storyTitle && <p className={styles.storyTitle}>{storyTitle}</p>}
            {story.map((b) => (
              <article key={b.id} className={styles.beat} data-beat={b.id}>
                <p className={styles.beatKicker}>{b.kicker}</p>
                <h2 className={styles.beatTitle}>{b.title}</h2>
                <p className={styles.beatLine}>{b.line}</p>
              </article>
            ))}
          </div>
        )}
        <svg className={styles.leaders} focusable="false">
          {annotations.map((a) => (
            <path
              key={`c-${a.id}`}
              className={styles.cloud}
              pathLength={1}
              ref={(el) => {
                clouds.current[a.id] = el;
              }}
            />
          ))}
          {annotations.map((a) => (
            <path
              key={a.id}
              pathLength={1}
              ref={(el) => {
                leaders.current[a.id] = el;
              }}
            />
          ))}
        </svg>
        <div
          className={styles.ring}
          ref={(el) => {
            ring.current = el;
          }}
        >
          <span className={styles.ringTag}>{lens.tag}</span>
        </div>
        <p
          className={styles.hint}
          ref={(el) => {
            hint.current = el;
          }}
        >
          {lens.hint}
        </p>
        <ul className={styles.flows}>
          {Object.entries({ ...flowLabels, ...lens.labels }).map(([k, label]) => (
            <li
              key={k}
              data-kind={k in lens.labels ? (k === 'bypassed' ? 'alert' : 'note') : 'flow'}
              ref={(el) => {
                flows.current[k] = el;
              }}
            >
              {label}
            </li>
          ))}
        </ul>
        <ul className={styles.nodeLabels}>
          {Object.keys(drawingLabels).map((id) => (
            <li
              key={id}
              data-kind={SYSTEM_IDS.has(id) ? 'system' : id === 'vendor' ? 'external' : 'team'}
              ref={(el) => {
                nodes.current[id] = el;
              }}
            >
              {drawingLabels[id]}
            </li>
          ))}
        </ul>
        <ol className={styles.notes}>
          {annotations.map((a) => (
            <li
              key={a.id}
              ref={(el) => {
                ann.current[a.id] = el;
              }}
              data-side={sides[a.id] ?? 'right'}
            >
              <span className={styles.note}>
                <Delta n={a.delta} size="m" label={false} />
                <span className={styles.noteText}>
                  <span className={styles.finding}>{a.text}</span>
                  <span className={styles.source}>{a.foundAt}</span>
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
