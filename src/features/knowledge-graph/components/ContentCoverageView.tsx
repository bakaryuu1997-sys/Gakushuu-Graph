import { BarChart3 } from "lucide-react";
import type { KnowledgeNodeData } from "../types";
import { getNodeLabel } from "../utils/i18n";
import type { LessonWorkspaceProps as Props } from "./LessonWorkspaceTypes";
import { Hero } from "./LessonWorkspacePrimitives";
import { V109ContentCoverageDashboard } from "./V109ContentCoverageDashboard";
import { V116FinalStabilityPanel } from "./V116FinalStabilityPanel";

export function ContentCoverage(props: Props) {
  const lessonIds = new Set(props.lessons.map((lesson) => lesson.nodeId));
  const quizIds = new Set(props.quizzes.map((quiz) => quiz.nodeId));
  const pathIds = new Set(props.studyPath.flatMap((phase) => phase.nodeIds));
  const missingLessons = props.nodes.filter((node) => node.importance === "high" && !lessonIds.has(node.id)).slice(0, 30);
  const missingQuiz = props.nodes.filter((node) => node.importance === "high" && !quizIds.has(node.id)).slice(0, 30);
  const missingPath = props.nodes.filter((node) => node.importance === "high" && !pathIds.has(node.id)).slice(0, 30);
  const cards = [
    ["Nodes", props.nodes.length],
    ["Lessons", props.lessons.length],
    ["Quiz", props.quizzes.length],
    ["Study path nodes", pathIds.size],
  ] as const;

  return (
    <section className="space-y-4">
      <Hero icon={<BarChart3 />} title="Content Coverage" subtitle="Dashboard kiểm tra chất lượng data: lesson, quiz, study path và node còn thiếu nội dung." />
      <V116FinalStabilityPanel />
      <V109ContentCoverageDashboard {...props} />
      <div className="grid gap-3 sm:grid-cols-4">
        {cards.map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-white p-4 shadow-sm">
            <p className="text-xs font-black uppercase text-slate-400">{label}</p>
            <p className="text-3xl font-black text-slate-950">{value}</p>
          </div>
        ))}
      </div>
      <CoverageList title="High nodes thiếu lesson" items={missingLessons} {...props} />
      <CoverageList title="High nodes thiếu quiz" items={missingQuiz} {...props} />
      <CoverageList title="High nodes chưa nằm trong study path" items={missingPath} {...props} />
    </section>
  );
}

function CoverageList({ title, items, language, onSelectNode }: Props & { title: string; items: KnowledgeNodeData[] }) {
  return (
    <section className="glass-panel rounded-[2rem] p-5">
      <h3 className="text-xl font-black text-slate-950">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.length ? (
          items.map((node) => (
            <button
              key={node.id}
              type="button"
              onClick={() => onSelectNode(node.id)}
              className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              {getNodeLabel(node, language)}
            </button>
          ))
        ) : (
          <p className="text-sm font-bold text-emerald-700">OK - không có mục thiếu trong nhóm kiểm tra.</p>
        )}
      </div>
    </section>
  );
}
