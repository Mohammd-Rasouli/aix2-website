'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Delta } from '@/components/Delta';
import { useMediaQuery, useReducedMotion } from '@/lib/hooks';
import type { HeroAnnotationContent } from '@/content/types';
import type { CameraPlan } from './HeroCanvas';
import { ASSEMBLY_END, type StaticOverlay } from './HeroDrawingSVG';
import styles from './Hero.module.css';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

interface Props {
  plan: CameraPlan;
  annotations: HeroAnnotationContent[];
  flowLabels: Record<string, string>;
  drawingLabels: Record<string, string>;
  description: string;
  poster: ReactNode;
  posterOverlay: StaticOverlay;
  builtDrawing: ReactNode;
  builtOverlay: StaticOverlay;
  sectionId: string;
}

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

const at = (pos: { left: number; top: number }, delay?: number) =>
  ({ left: `${pos.left}%`, top: `${pos.top}%`, ...(delay !== undefined ? { '--delay': `${delay}ms` } : {}) }) as CSSProperties;

export function HeroStage(props: Props) {
  const { plan, annotations, flowLabels, drawingLabels, description, poster, posterOverlay, builtDrawing, builtOverlay, sectionId } =
    props;
  const stageRef = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const annRefs = useRef<Record<string, HTMLElement | null>>({});
  const flowRefs = useRef<Record<string, HTMLElement | null>>({});
  const nodeRefs = useRef<Record<string, HTMLElement | null>>({});
  const leaderRefs = useRef<Record<string, SVGPathElement | null>>({});

  const desktop = useMediaQuery('(min-width: 1024px)', true);
  const reduced = useReducedMotion();
  const [webgl, setWebgl] = useState(true);
  const [load, setLoad] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);
  const [assembled, setAssembled] = useState(false);
  const [active, setActive] = useState(true);

  const canvasMode = desktop && !reduced && webgl;
  const live = canvasMode && canvasReady && assembled;

  useEffect(() => setWebgl(webglAvailable()), []);

  // The SVG poster assembles first; the 3D scene loads when the browser is idle.
  useEffect(() => {
    const t = window.setTimeout(() => setAssembled(true), ASSEMBLY_END + 120);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!canvasMode) return;
    // Safari has no requestIdleCallback; fall back to a short timeout.
    const w = window as Window & { requestIdleCallback?: Window['requestIdleCallback'] };
    if (typeof w.requestIdleCallback === 'function') {
      const id = w.requestIdleCallback(() => setLoad(true), { timeout: 1500 });
      return () => w.cancelIdleCallback(id);
    }
    const id = setTimeout(() => setLoad(true), 600);
    return () => clearTimeout(id);
  }, [canvasMode]);

  // Scroll progress through the pinned hero, and render only while it is on screen.
  useEffect(() => {
    if (!canvasMode) return;
    gsap.registerPlugin(ScrollTrigger);
    const section = document.getElementById(sectionId);
    if (!section) return;
    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        progress.current = self.progress;
      },
    });
    progress.current = st.progress;
    const io = new IntersectionObserver((entries) => setActive(entries.some((e) => e.isIntersecting)), {
      rootMargin: '10% 0px',
    });
    io.observe(section);
    return () => {
      st.kill();
      io.disconnect();
    };
  }, [canvasMode, sectionId]);

  const frameVars = {
    '--fx0': `${plan.start.x0 * 100}%`,
    '--fy0': `${plan.start.y0 * 100}%`,
    '--fx1': `${plan.start.x1 * 100}%`,
    '--fy1': `${plan.start.y1 * 100}%`,
    '--ratio': builtOverlay.ratio.toFixed(4),
  } as CSSProperties;

  return (
    <div
      ref={stageRef}
      className={styles.stage}
      style={frameVars}
      data-canvas={canvasMode ? 'true' : 'false'}
      data-live={live ? 'true' : 'false'}
    >
      <div className={styles.drawing} role="img" aria-label={description}>
        <div className={styles.frame}>
          <div className={styles.fit}>
            <div className={styles.poster}>
              {poster}
              <ul className={styles.nodeLabels}>
                {posterOverlay.nodes.map((n) => (
                  <li key={n.id} className={`${styles.nodeLabel} ${styles.assembleIn}`} style={at(n.pos, n.delay)}>
                    {drawingLabels[n.id]}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.builtStatic}>{builtDrawing}</div>
          </div>
        </div>
        {canvasMode && load && (
          <div className={styles.canvasLayer}>
            <HeroCanvas
              progress={progress}
              plan={plan}
              overlay={{ annotations: annRefs, flows: flowRefs, nodes: nodeRefs, leaders: leaderRefs }}
              colorSource={stageRef}
              active={active}
              live={live}
              onReady={() => setCanvasReady(true)}
            />
          </div>
        )}
      </div>

      {/* Reduced motion or no WebGL: the as-built drawing at rest, deltas on it, the revision table below. */}
      <div className={`${styles.frame} ${styles.staticNotes}`} aria-hidden="true">
        <div className={styles.fit}>
          <ul className={styles.nodeLabels}>
            {builtOverlay.nodes.map((n) => (
              <li key={n.id} className={styles.nodeLabel} style={at(n.pos)}>
                {drawingLabels[n.id]}
              </li>
            ))}
          </ul>
          <ul className={styles.flows}>
            {builtOverlay.flows.map((f) => (
              <li key={f.id} className={styles.flow} style={at(f.pos)}>
                {flowLabels[f.key]}
              </li>
            ))}
          </ul>
          <ul className={styles.tags}>
            {builtOverlay.anchors.map((a, i) => (
              <li key={a.id} style={at(a.pos)}>
                <Delta n={i + 1} size="s" label={false} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ol className={styles.revisionBlock} aria-label="Findings marked on the drawing">
        {annotations.map((a) => (
          <li key={a.id}>
            <NoteBody a={a} />
          </li>
        ))}
      </ol>

      {/* Live: positioned every frame by the 3D scene. */}
      {canvasMode && (
        <div className={styles.liveLayer}>
          <svg className={styles.leaders} aria-hidden="true" focusable="false">
            {annotations.map((a) => (
              <path
                key={a.id}
                pathLength={1}
                ref={(el) => {
                  leaderRefs.current[a.id] = el;
                }}
              />
            ))}
          </svg>
          <ul className={styles.nodeLabels} aria-hidden="true">
            {Object.keys(drawingLabels).map((id) => (
              <li
                key={id}
                ref={(el) => {
                  nodeRefs.current[id] = el;
                }}
                className={`${styles.nodeLabel} ${styles.liveNode}`}
              >
                {drawingLabels[id]}
              </li>
            ))}
          </ul>
          <ul className={styles.flows} aria-hidden="true">
            {Object.entries(flowLabels).map(([key, label]) => (
              <li
                key={key}
                ref={(el) => {
                  flowRefs.current[key] = el;
                }}
                className={`${styles.flow} ${styles.liveFlow}`}
              >
                {label}
              </li>
            ))}
          </ul>
          <ol className={styles.notes} aria-label="Findings marked on the drawing">
            {annotations.map((a) => (
              <li
                key={a.id}
                ref={(el) => {
                  annRefs.current[a.id] = el;
                }}
                className={`${styles.note} ${styles.liveNote}`}
                data-side={builtOverlay.anchors.find((x) => x.id === a.id)?.side ?? 'right'}
              >
                <NoteBody a={a} boxed />
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

function NoteBody({ a, boxed = false }: { a: HeroAnnotationContent; boxed?: boolean }) {
  return (
    <span className={boxed ? `${styles.noteBody} ${styles.noteBoxed}` : styles.noteBody}>
      <Delta n={a.delta} size="m" />
      <span className={styles.noteText}>
        <span className={styles.noteFinding}>{a.text}</span>
        <span className={styles.noteSource}>{a.foundAt}</span>
      </span>
    </span>
  );
}
