'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Delta } from '@/components/Delta';
import { useMediaQuery, useReducedMotion } from '@/lib/hooks';
import type { HeroAnnotationContent } from '@/content/types';
import type { ModelPlan } from './ModelCanvas';
import styles from './HeroC.module.css';

const ModelCanvas = dynamic(() => import('./ModelCanvas'), { ssr: false });

interface Props {
  plan: ModelPlan;
  annotations: HeroAnnotationContent[];
  sides: Record<string, 'left' | 'right'>;
  flowLabels: Record<string, string>;
  drawingLabels: Record<string, string>;
  description: string;
  still: { src: string; width: number; height: number };
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

export function ModelStage({ plan, annotations, sides, flowLabels, drawingLabels, description, still, sectionId }: Props) {
  const progress = useRef(0);
  const annRefs = useRef<Record<string, HTMLElement | null>>({});
  const flowRefs = useRef<Record<string, HTMLElement | null>>({});
  const nodeRefs = useRef<Record<string, HTMLElement | null>>({});
  const leaderRefs = useRef<Record<string, SVGPathElement | null>>({});
  const desktop = useMediaQuery('(min-width: 1024px)', true);
  const reduced = useReducedMotion();
  const [webgl, setWebgl] = useState(true);
  const [load, setLoad] = useState(false);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(true);
  const canvasMode = desktop && !reduced && webgl;

  useEffect(() => setWebgl(webglAvailable()), []);

  useEffect(() => {
    if (!canvasMode) return;
    const w = window as Window & { requestIdleCallback?: Window['requestIdleCallback'] };
    if (typeof w.requestIdleCallback === 'function') {
      const id = w.requestIdleCallback(() => setLoad(true), { timeout: 900 });
      return () => w.cancelIdleCallback(id);
    }
    const id = setTimeout(() => setLoad(true), 300);
    return () => clearTimeout(id);
  }, [canvasMode]);

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
    const io = new IntersectionObserver((en) => setActive(en.some((e) => e.isIntersecting)), { rootMargin: '10% 0px' });
    io.observe(section);
    return () => {
      st.kill();
      io.disconnect();
    };
  }, [canvasMode, sectionId]);

  return (
    <div className={styles.stage} data-canvas={canvasMode ? 'true' : 'false'} data-ready={ready ? 'true' : 'false'}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.scene} role="img" aria-label={description}>
        {/* Reduced motion, no WebGL: a rendered still of the same model, as built. */}
        <img className={styles.still} src={still.src} width={still.width} height={still.height} alt="" decoding="async" />
        {canvasMode && load && (
          <div className={styles.canvasLayer}>
            <ModelCanvas
              progress={progress}
              plan={plan}
              overlay={{ annotations: annRefs, flows: flowRefs, nodes: nodeRefs, leaders: leaderRefs }}
              active={active}
              onReady={() => setReady(true)}
            />
          </div>
        )}
      </div>
      <div className={styles.vignette} aria-hidden="true" />

      {canvasMode ? (
        <div className={styles.live}>
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
              >
                {label}
              </li>
            ))}
          </ul>
          <ol className={styles.notes} aria-label="Findings marked on the model">
            {annotations.map((a) => (
              <li
                key={a.id}
                ref={(el) => {
                  annRefs.current[a.id] = el;
                }}
                data-side={sides[a.id] ?? 'right'}
              >
                <span className={styles.note}>
                  <Delta n={a.delta} size="m" />
                  <span className={styles.noteText}>
                    <span className={styles.finding}>{a.text}</span>
                    <span className={styles.source}>{a.foundAt}</span>
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <ol className={styles.revisions} aria-label="Findings marked on the model">
          {annotations.map((a) => (
            <li key={a.id}>
              <Delta n={a.delta} size="m" />
              <span className={styles.noteText}>
                <span className={styles.finding}>{a.text}</span>
                <span className={styles.source}>{a.foundAt}</span>
              </span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
