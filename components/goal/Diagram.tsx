import * as D from "@/content/pages/goalDiagrams";
import type { DiagramKind } from "@/content/pages/types";
import { Reveal } from "./Reveal";
import s from "./Diagram.module.css";

/** `--i` drives the stagger of each piece's entrance (see Diagram.module.css). */
const i = (n: number) => ({ ["--i" as string]: n });

function Layers() {
  const d = D.layers;
  return (
    <Reveal className={`${s.fig} ${s.layers}`} label={d.label}>
      <div className={s.stack}>
        <span className={s.upRail} aria-hidden="true">
          <span>{d.up}</span>
        </span>
        <ol className={s.layerList}>
          {d.rows.map((r, k) => (
            // Rows enter from the bottom: the last (Outcomes) first.
            <li
              key={r.n}
              className={s.layer}
              data-row={k}
              style={{
                ...i(d.rows.length - 1 - k),
                ["--w" as string]: `${78 + k * 7}%`,
              }}
            >
              <span className={s.layerN}>{r.n}</span>
              <span className={s.layerText}>
                <span className={s.layerName}>{r.name}</span>
                <span className={s.layerItems}>{r.items}</span>
              </span>
              <span
                className={s.layerTag}
                data-observed={k === d.rows.length - 1 ? "true" : undefined}
              >
                {r.tag}
              </span>
            </li>
          ))}
        </ol>
      </div>
      <aside className={s.hiddenBox} style={i(5)}>
        <p className={s.hiddenTitle}>{d.hiddenTitle}</p>
        <p className={s.hiddenLine}>{d.hiddenLine}</p>
        <ul className={s.chips}>
          {d.hidden.map((h, k) => (
            <li key={h} className={s.chipRed} style={i(6 + k)}>
              {h}
            </li>
          ))}
        </ul>
      </aside>
    </Reveal>
  );
}

function Hidden() {
  const d = D.hidden;
  return (
    <Reveal className={`${s.fig} ${s.hidden}`} label={d.label}>
      {d.rows.map((r, row) => (
        <div key={r.name} className={s.pathRow}>
          <p className={s.pathName}>{r.name}</p>
          <div className={s.paths}>
            <p className={s.pathLabel}>{d.formal}</p>
            <ol className={s.formal} style={i(row * 4)}>
              {r.formal.map((f, k) => (
                <li key={f} className={s.formalNode} style={i(row * 4 + k)}>
                  <span className={s.formalN}>{k + 1}</span>
                  {f}
                </li>
              ))}
            </ol>
            <p className={s.pathLabel} data-red="true">
              {d.detour}
            </p>
            <ul className={s.detours}>
              {r.hidden.map((h, k) => (
                <li key={h} className={s.detour} style={i(row * 4 + k + 3)}>
                  <span aria-hidden="true">↗</span> {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Reveal>
  );
}

function SupplyLoop() {
  const d = D.supplyLoop;
  return (
    <Reveal className={`${s.fig} ${s.loop}`} label={d.label}>
      <div className={s.loopStage}>
        <svg
          className={s.loopRing}
          viewBox="0 0 400 400"
          aria-hidden="true"
          focusable="false"
        >
          <circle className={s.ringTrack} cx="200" cy="200" r="150" />
          <circle
            className={s.ringFlow}
            cx="200"
            cy="200"
            r="150"
            pathLength={100}
          />
          <circle className={s.ringDot} cx="200" cy="50" r="5" />
        </svg>
        <div className={s.loopCenter} style={i(4)}>
          <p className={s.loopCenterName}>{d.center.name}</p>
          <p className={s.loopCenterItems}>{d.center.items}</p>
        </div>
        <ol className={s.loopNodes}>
          {d.nodes.map((n, k) => (
            <li key={n.id} className={s.loopNode} data-pos={k} style={i(k)}>
              <span className={s.loopId}>{n.id}</span>
              <span className={s.loopName}>{n.name}</span>
              <span className={s.loopItems}>{n.items}</span>
            </li>
          ))}
        </ol>
      </div>
      <p className={s.loopBack}>{d.back}</p>
    </Reveal>
  );
}

function DesignFunnel() {
  const d = D.designFunnel;
  return (
    <Reveal className={`${s.fig} ${s.funnel}`} label={d.label}>
      <ul className={s.starts}>
        {d.starts.map((st, k) => (
          <li key={st.tag} className={s.start} style={i(k)}>
            <span className={s.tag}>{st.tag}</span>
            <span className={s.startName}>{st.name}</span>
            <span className={s.startCopy}>{st.copy}</span>
          </li>
        ))}
      </ul>
      <span className={s.converge} aria-hidden="true">
        <svg viewBox="0 0 400 60" preserveAspectRatio="none">
          <path className={s.draw} d="M100 0 C100 34 200 26 200 60" />
          <path className={s.draw} d="M300 0 C300 34 200 26 200 60" />
        </svg>
      </span>
      <div className={s.same}>
        <p className={s.sameLabel}>{d.same}</p>
        <ol className={s.moves}>
          {d.steps.map((m, k) => (
            <li key={m.n} className={s.move} style={i(2 + k)}>
              <span className={s.moveN}>{m.n}</span>
              <span className={s.moveName}>{m.name}</span>
              <span className={s.moveCopy}>{m.copy}</span>
            </li>
          ))}
        </ol>
      </div>
      <span className={s.down} aria-hidden="true" />
      <p className={s.outcome} style={i(6)}>
        {d.outcome}
      </p>
    </Reveal>
  );
}

function BestMatch() {
  const d = D.bestMatch;
  return (
    <Reveal className={`${s.fig} ${s.match}`} label={d.label}>
      <div className={s.side} style={i(0)}>
        <p className={s.tag}>{d.a.tag}</p>
        <ul className={s.sideList}>
          {d.a.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div className={s.engine} style={i(2)}>
        <span className={s.engineRing} aria-hidden="true" />
        <span className={s.engineName}>{d.engine}</span>
      </div>
      <div className={s.side} data-ref="true" style={i(1)}>
        <p className={s.tag}>{d.b.tag}</p>
        <ul className={s.sideList}>
          {d.b.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div className={s.matchOut} style={i(4)}>
        <p className={s.matchOutName}>{d.out.name}</p>
        <ul className={s.chips}>
          {d.out.items.map((x) => (
            <li key={x} className={s.chipGold}>
              {x}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function HubVsChain() {
  const d = D.hubVsChain;
  return (
    <Reveal className={`${s.fig} ${s.hvc}`} label={d.label}>
      <div className={s.panel} data-muted="true" style={i(0)}>
        <p className={s.tag}>{d.hub.tag}</p>
        <p className={s.panelName}>{d.hub.name}</p>
        <p className={s.panelQ}>{d.hub.question}</p>
        <div className={s.hub}>
          <span className={s.hubCenter}>{d.hub.center}</span>
          <ul className={s.spokes}>
            {d.hub.spokes.map((x, k) => (
              <li
                key={x}
                style={{
                  ["--a" as string]: `${(k * 360) / d.hub.spokes.length}deg`,
                }}
              >
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
        <ul className={s.points}>
          {d.hub.points.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div className={s.panel} style={i(1)}>
        <p className={s.tag} data-gold="true">
          {d.chain.tag}
        </p>
        <p className={s.panelName}>{d.chain.name}</p>
        <p className={s.panelQ}>{d.chain.question}</p>
        <ol className={s.chain}>
          {d.chain.stages.map((st, k) => (
            <li key={st.name} className={s.stage} style={i(2 + k)}>
              <span className={s.stageName}>{st.name}</span>
              <ul className={s.stageItems}>
                {st.items.map((it) => (
                  <li key={it.what}>
                    <span className={s.stageWhat}>{it.what}</span>
                    {"who" in it && it.who && (
                      <span className={s.stageWho}>{it.who}</span>
                    )}
                  </li>
                ))}
              </ul>
              {k < d.chain.stages.length - 1 && (
                <span className={s.gate} aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
        <ul className={s.legend}>
          {d.chain.legend.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function Connected() {
  const d = D.connected;
  return (
    <Reveal className={`${s.fig} ${s.conn}`} label={d.label}>
      <div className={s.col} style={i(0)}>
        <p className={s.tag}>{d.left.name}</p>
        <ol className={s.colList}>
          {d.left.items.map((x, k) => (
            <li key={x} style={i(k)}>
              <span className={s.colN}>{String(k + 1).padStart(2, "0")}</span>
              {x}
            </li>
          ))}
        </ol>
      </div>
      <div className={s.links} aria-hidden="true">
        <svg viewBox="0 0 200 240" preserveAspectRatio="none">
          {[0, 1, 2, 3].map((a) =>
            [0, 1, 2, 3]
              .filter((b) => Math.abs(a - b) <= 1)
              .map((b) => (
                <path
                  key={`${a}-${b}`}
                  className={s.link}
                  style={i(a + b)}
                  d={`M0 ${30 + a * 60} C100 ${30 + a * 60} 100 ${30 + b * 60} 200 ${30 + b * 60}`}
                />
              )),
          )}
        </svg>
        <p className={s.linkLabel}>{d.link}</p>
      </div>
      <div className={s.col} style={i(1)}>
        <p className={s.tag} data-plan="true">
          {d.right.name}
        </p>
        <ol className={s.colList}>
          {d.right.items.map((x, k) => (
            <li key={x} style={i(k + 1)}>
              {x}
            </li>
          ))}
        </ol>
        <p className={s.base}>{d.base}</p>
      </div>
    </Reveal>
  );
}

function Scale() {
  const d = D.scale;
  return (
    <Reveal className={`${s.fig} ${s.scale}`} label={d.label}>
      <div className={s.nest} data-level="2" style={i(2)}>
        <p className={s.nestName}>{d.levels[2]!.name}</p>
        <ul className={s.nestItems}>
          {d.levels[2]!.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <div className={s.nest} data-level="1" style={i(1)}>
          <p className={s.nestName}>{d.levels[1]!.name}</p>
          <ul className={s.nestItems}>
            {d.levels[1]!.items.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <div className={s.nest} data-level="0" style={i(0)}>
            <p className={s.nestName}>{d.levels[0]!.name}</p>
            <ul className={s.nestItems}>
              {d.levels[0]!.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function LiveLoop() {
  const d = D.liveLoop;
  const n = d.steps.length;
  return (
    <Reveal className={`${s.fig} ${s.live}`} label={d.label}>
      <div className={s.wheel}>
        <svg
          className={s.wheelRing}
          viewBox="0 0 400 400"
          aria-hidden="true"
          focusable="false"
        >
          <circle className={s.ringTrack} cx="200" cy="200" r="140" />
          <circle
            className={s.ringFlow}
            cx="200"
            cy="200"
            r="140"
            pathLength={100}
          />
        </svg>
        <span className={s.orbit} aria-hidden="true">
          <i />
        </span>
        <span className={s.wheelCenter}>{d.center}</span>
        <ol className={s.wheelSteps}>
          {d.steps.map((x, k) => (
            <li
              key={x}
              style={{ ...i(k), ["--a" as string]: `${(k * 360) / n - 90}deg` }}
            >
              <span className={s.wheelN}>{k + 1}</span>
              <span className={s.wheelText}>{x}</span>
            </li>
          ))}
        </ol>
      </div>
      <ul className={s.liveNotes}>
        {d.notes.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </Reveal>
  );
}

function Drift() {
  const d = D.drift;
  // A sawtooth: matched at each review, drifting in between. Illustrative only.
  const once =
    "M40 40 L180 150 L180 40 L320 150 L320 40 L460 150 L460 40 L600 150 L600 40 L700 118";
  return (
    <Reveal className={`${s.fig} ${s.drift}`} label={d.label}>
      <p className={s.tag} data-muted="true">
        {d.tag}
      </p>
      <div className={s.chart}>
        <span className={s.axisY}>{d.y}</span>
        <svg
          viewBox="0 0 720 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <line className={s.grid} x1="40" y1="40" x2="700" y2="40" />
          <line className={s.grid} x1="40" y1="150" x2="700" y2="150" />
          {[180, 320, 460, 600].map((x) => (
            <line
              key={x}
              className={s.reviewLine}
              x1={x}
              y1="20"
              x2={x}
              y2="180"
            />
          ))}
          <path className={s.onceLine} d={once} pathLength={100} />
          <path
            className={s.liveLine}
            d="M40 46 C200 40 360 50 520 42 S660 44 700 42"
            pathLength={100}
          />
        </svg>
        <span className={s.hi}>{d.high}</span>
        <span className={s.lo}>{d.low}</span>
      </div>
      <ul className={s.chartKey}>
        <li data-gold="true">{d.live}</li>
        <li data-red="true">{d.once}</li>
        <li data-review="true">{d.review}</li>
      </ul>
    </Reveal>
  );
}

function Readiness() {
  const d = D.readiness;
  return (
    <Reveal className={`${s.fig} ${s.ready}`} label={d.label}>
      <ol className={s.readyCols}>
        <li className={s.readyCol} style={i(0)}>
          <p className={s.readyStage}>{d.stages[0]}</p>
          <ul className={s.mods}>
            {d.modules.first.map((x) => (
              <li key={x} data-first="true">
                {x}
              </li>
            ))}
            <li className={s.modsNote}>{d.modules.firstNote}</li>
            {d.modules.more.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </li>
        <li className={s.readyCol} style={i(1)}>
          <p className={s.readyStage}>{d.stages[1]}</p>
          <div className={s.hubCard}>
            <p className={s.hubName}>{d.hub.name}</p>
            <p className={s.hubLine}>{d.hub.line}</p>
            <ul className={s.hubItems}>
              {d.hub.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </li>
        <li className={s.readyCol} style={i(2)}>
          <p className={s.readyStage}>{d.stages[2]}</p>
          <div className={s.modelCard}>
            <span className={s.modelLens} aria-hidden="true">
              <i />
            </span>
            <p className={s.hubName}>{d.model.name}</p>
            <p className={s.hubLine}>{d.model.line}</p>
          </div>
        </li>
        <li className={s.readyCol} style={i(3)}>
          <p className={s.readyStage}>{d.stages[3]}</p>
          <ul className={s.agents}>
            {d.agents.items.map((a) => (
              <li key={a.name}>
                <span className={s.agentName}>{a.name}</span>
                <span className={s.agentCopy}>{a.copy}</span>
              </li>
            ))}
          </ul>
        </li>
      </ol>
      <p className={s.gateLine}>
        <span className={s.gateIcon} aria-hidden="true" />
        {d.gate}
      </p>
    </Reveal>
  );
}

const KINDS: Record<DiagramKind, () => React.JSX.Element> = {
  layers: Layers,
  hidden: Hidden,
  supplyLoop: SupplyLoop,
  designFunnel: DesignFunnel,
  bestMatch: BestMatch,
  hubVsChain: HubVsChain,
  connected: Connected,
  scale: Scale,
  liveLoop: LiveLoop,
  drift: Drift,
  readiness: Readiness,
};

/** A drawn diagram for the goal pages. All text is in the DOM; motion plays once on entry. */
export function Diagram({ kind }: { kind: DiagramKind }) {
  const C = KINDS[kind];
  return <C />;
}
