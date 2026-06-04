import { useState } from "react";
import {
  CalendarDays,
  GraduationCap,
  ListChecks,
  Search,
  Timer,
} from "lucide-react";
import type { KnowledgeNodeData, StudyStatus } from "../types";
import { getNodeExamPoint as exam, getNodeLabel as label, getPhaseGoal, getPhaseTitle } from "../utils/i18n";
import type { LessonWorkspaceProps as Props } from "./LessonWorkspaceTypes";
import { Hero, NodeCard } from "./LessonWorkspacePrimitives";

const startNode = (
  phase: Props["studyPath"][number],
  statuses: Record<string, StudyStatus>,
) =>
  phase.nodeIds.find((id) => statuses[id] !== "mastered") ?? phase.nodeIds[0];

const orderNodes = (nodes: KnowledgeNodeData[], path: Props["studyPath"]) => {
  const map = new Map(nodes.map((node) => [node.id, node]));
  return path
    .flatMap((phase) => phase.nodeIds)
    .map((id) => map.get(id))
    .filter(Boolean) as KnowledgeNodeData[];
};

export function StudyPathView(props: Props) {
  const map = new Map(props.nodes.map((n) => [n.id, n]));
  return (
    <section className="space-y-4">
      <Hero
        icon={<ListChecks />}
        title="Study Path"
        subtitle="Mỗi phase có nút Study this phase để nhảy tới node chưa học đầu tiên."
      />
      {props.studyPath.map((phase, pi) => {
        const items = phase.nodeIds
          .map((id) => map.get(id))
          .filter(Boolean) as KnowledgeNodeData[];
        return (
          <article key={phase.id} className="glass-panel rounded-[2rem] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase text-indigo-600">
                  Phase {pi + 1}
                </p>
                <h3 className="text-xl font-black text-slate-950">
                  {getPhaseTitle(phase, props.language)}
                </h3>
                <p className="text-sm text-slate-600">
                  {getPhaseGoal(phase, props.language)}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  props.onSelectNode(startNode(phase, props.statuses))
                }
                className="rounded-2xl bg-slate-950 px-4 py-2 text-xs font-black text-white"
              >
                Study this phase
              </button>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {items.map((node, i) => (
                <NodeCard key={node.id} node={node} index={i + 1} {...props} />
              ))}
            </div>
          </article>
        );
      })}
    </section>
  );
}
export function PhaseStudy(props: Props) {
  const selectedPhase = Math.max(
    0,
    props.studyPath.findIndex((p) => p.nodeIds.includes(props.selectedNode.id)),
  );
  const [idx, setIdx] = useState(selectedPhase);
  const phase = props.studyPath[idx] ?? props.studyPath[0];
  const items = phase.nodeIds
    .map((id) => props.nodes.find((n) => n.id === id))
    .filter(Boolean) as KnowledgeNodeData[];
  const cur = Math.max(
    0,
    items.findIndex((n) => n.id === props.selectedNode.id),
  );
  const nextUnmastered = startNode(phase, props.statuses);
  return (
    <section className="space-y-4">
      <Hero
        icon={<GraduationCap />}
        title={`Đang ở bước ${cur + 1}/${items.length}`}
        subtitle={
          items[cur]
            ? exam(items[cur], props.language)
            : "Chọn phase để bắt đầu học."
        }
      />
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => props.onSelectNode(nextUnmastered)}
          className="rounded-2xl bg-emerald-600 px-4 py-2 text-xs font-black text-white shadow-sm"
        >
          Next unmastered
        </button>
        {props.studyPath.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => {
              setIdx(i);
              props.onSelectNode(startNode(p, props.statuses));
            }}
            className={`shrink-0 rounded-2xl px-4 py-2 text-xs font-black ${i === idx ? "bg-slate-950 text-white" : "bg-white text-slate-600 shadow-sm"}`}
          >
            Phase {i + 1}
          </button>
        ))}
      </div>
      <div className="grid gap-2">
        {items.map((node, i) => (
          <NodeCard
            key={node.id}
            node={node}
            index={i + 1}
            active={node.id === props.selectedNode.id}
            {...props}
          />
        ))}
      </div>
    </section>
  );
}
export function CrashCourse(props: Props) {
  const [days, setDays] = useState<3 | 7>(3);
  const nodes = orderNodes(props.nodes, props.studyPath)
    .filter(
      (n) => n.importance === "high" || props.statuses[n.id] !== "mastered",
    )
    .slice(0, days === 3 ? 36 : 84);
  return (
    <section className="space-y-4">
      <Hero
        icon={<Timer />}
        title={`Exam Crash Course ${days} ngày`}
        subtitle="Ôn nhanh node HOT và node chưa mastered trước ngày thi."
      />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setDays(3)}
          className={`rounded-2xl px-4 py-2 text-sm font-black ${days === 3 ? "bg-slate-950 text-white" : "bg-white shadow-sm"}`}
        >
          3 ngày
        </button>
        <button
          type="button"
          onClick={() => setDays(7)}
          className={`rounded-2xl px-4 py-2 text-sm font-black ${days === 7 ? "bg-slate-950 text-white" : "bg-white shadow-sm"}`}
        >
          7 ngày
        </button>
      </div>
      {Array.from({ length: days }, (_, d) => (
        <article key={d} className="glass-panel rounded-[2rem] p-5">
          <h3 className="text-xl font-black text-slate-950">Day {d + 1}</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {nodes
              .filter((_, i) => i % days === d)
              .map((node, i) => (
                <NodeCard key={node.id} node={node} index={i + 1} {...props} />
              ))}
          </div>
        </article>
      ))}
    </section>
  );
}
