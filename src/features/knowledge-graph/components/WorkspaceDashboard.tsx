import type { ReactNode } from "react";
import { ArrowRight, Code2, Layers3, SearchCheck, Target } from "lucide-react";
import { getNodeLabel as label } from "../utils/i18n";
import type { KnowledgeNodeData } from "../types";
import type { LessonWorkspaceProps as Props } from "./LessonWorkspaceTypes";
import { Hero, NodeCard } from "./LessonWorkspacePrimitives";
import { VisualQaPanel } from "./VisualQaPanel";
import { LocalReleasePanel } from "./LocalReleasePanel";
import { ReleaseNotesV77R } from "./ReleaseNotesV77R";
import { CourseCompletionDashboard } from "./CourseCompletionDashboard";
import { ReleaseUxV91RPanel } from "./ReleaseUxV91RPanel";
import {
  computeReadinessGroups,
  computeReadinessScore,
  orderDashboardNodes,
} from "./WorkspaceDashboardLogic";

export function Dashboard(props: Props) {
  const ordered = orderDashboardNodes(props.nodes, props.studyPath);
  const next10 = ordered
    .filter((node) => props.statuses[node.id] !== "mastered")
    .slice(0, 10);
  const needReview = props.nodes
    .filter((node) => props.statuses[node.id] === "need_review")
    .slice(0, 10);
  const lessonIds = new Set(props.lessons.map((lesson) => lesson.nodeId));
  const missingLessons = props.nodes
    .filter((node) => node.importance === "high" && !lessonIds.has(node.id))
    .slice(0, 8);
  const weakGroups = computeReadinessGroups(props);
  const readiness = computeReadinessScore(props);
  return (
    <section className="space-y-4">
      <Hero
        icon={<Target />}
        title="Home Dashboard"
        subtitle="V96R: mở app là biết hôm nay học gì, học tiếp bài nào, review gì và project tiếp theo."
      />
      <HomeQuickActions props={props} nextNodes={next10} needReview={needReview} weakGroups={weakGroups} />
      <div className="grid gap-3 md:grid-cols-4">
        <Metric title="Readiness" value={`${Math.max(0, readiness)}%`} tone="emerald" />
        <Metric title="Done" value={props.stats.mastered} tone="emerald" />
        <Metric title="Need Review" value={props.stats.needReview} tone="amber" />
        <Metric title="Lessons ready" value={`${props.lessons.length}/${props.nodes.length}`} tone={missingLessons.length ? "amber" : "emerald"} />
      </div>
      <section className="glass-panel rounded-[2rem] p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-black text-slate-950 dark:text-white">Hôm nay nên học gì</h2>
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Ưu tiên: Review → Continue → Next high node</p>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {(needReview.length ? needReview : next10).slice(0, 6).map((node, i) => (
            <NodeCard key={node.id} node={node} index={i + 1} {...props} />
          ))}
        </div>
      </section>
      <section className="glass-panel rounded-[2rem] p-5">
        <h2 className="text-2xl font-black text-slate-950 dark:text-white">Weak domain</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {weakGroups.slice(0, 6).map((item) => (
            <div key={item.group} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="flex justify-between text-sm font-black text-slate-800 dark:text-slate-100">
                <span className="capitalize">{item.group}</span>
                <span>{item.score}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div className={`h-full rounded-full ${item.score >= 70 ? "bg-emerald-500" : "bg-amber-500"}`} style={{ width: `${item.score}%` }} />
              </div>
              <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                {item.done}/{item.total} done · {item.review} need review
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="glass-panel rounded-[2rem] p-5">
        <h2 className="text-2xl font-black text-slate-950 dark:text-white">Next 10 nodes</h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {next10.map((node, i) => (
            <NodeCard key={node.id} node={node} index={i + 1} {...props} />
          ))}
        </div>
      </section>
      {missingLessons.length > 0 && (
        <section className="glass-panel rounded-[2rem] p-5">
          <h2 className="text-2xl font-black text-slate-950 dark:text-white">High nodes cần kiểm tra lesson</h2>
          <p className="mt-2 text-sm font-bold text-slate-600 dark:text-slate-300">V98R đã tự sinh lesson thực hành cho toàn bộ node; danh sách này chỉ còn là cảnh báo integrity nếu có mismatch.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {missingLessons.map((node) => (
              <button key={node.id} onClick={() => props.onSelectNode(node.id)} className="rounded-full bg-rose-50 px-3 py-2 text-xs font-bold text-rose-700 dark:bg-rose-950/40 dark:text-rose-200">
                {label(node, props.language)}
              </button>
            ))}
          </div>
        </section>
      )}
      <DetailsAccordion>
        <ReleaseNotesV77R courseTitle={props.courseTitle} />
        <ReleaseUxV91RPanel />
        <CourseCompletionDashboard activeCourseId={props.courseTitle.includes("AI Passport") ? "ai-passport" : props.courseTitle.includes("基本情報") ? "fundamental-info" : props.courseTitle.includes("Python") ? "python" : undefined} />
        <LocalReleasePanel courseTitle={props.courseTitle} stats={props.stats} onExportProgress={props.onExportProgress ?? (() => undefined)} onImportProgress={props.onImportProgress ?? (async () => undefined)} onResetProgress={props.onResetProgress ?? (() => undefined)} />
        <VisualQaPanel />
      </DetailsAccordion>
    </section>
  );
}

function HomeQuickActions({ props, nextNodes, needReview, weakGroups }: { props: Props; nextNodes: KnowledgeNodeData[]; needReview: KnowledgeNodeData[]; weakGroups: ReturnType<typeof computeReadinessGroups> }) {
  const continueNode = nextNodes[0] ?? props.selectedNode;
  const reviewNode = needReview[0];
  const weak = weakGroups.find((item) => item.score < 70) ?? weakGroups[0];
  const projectLabel = props.courseTitle.includes("Python") ? "Python project tiếp theo" : props.courseTitle.includes("基本情報") ? "科目B trace tiếp theo" : "Practice tiếp theo";
  const actions = [
    {
      title: "Hôm nay học gì",
      body: continueNode ? label(continueNode, props.language) : "Chọn course để bắt đầu",
      icon: <Target className="h-5 w-5" />,
      action: () => { if (continueNode) props.onSelectNode(continueNode.id); props.onView?.("today"); },
      tone: "bg-indigo-600 text-white",
    },
    {
      title: "Continue học tiếp",
      body: continueNode ? `${continueNode.importance} · ${continueNode.category}` : "Không có node tiếp theo",
      icon: <ArrowRight className="h-5 w-5" />,
      action: () => continueNode && props.onSelectNode(continueNode.id),
      tone: "bg-emerald-600 text-white",
    },
    {
      title: "Review câu sai",
      body: reviewNode ? label(reviewNode, props.language) : "Chưa có Need Review",
      icon: <SearchCheck className="h-5 w-5" />,
      action: () => { if (reviewNode) props.onSelectNode(reviewNode.id); props.onView?.("weak"); },
      tone: "bg-amber-500 text-white",
    },
    {
      title: projectLabel,
      body: "Mở practice/project bank",
      icon: <Code2 className="h-5 w-5" />,
      action: () => props.onView?.(props.courseTitle.includes("Python") ? "practice" : "practice"),
      tone: "bg-slate-950 text-white dark:bg-white dark:text-slate-950",
    },
    {
      title: "Weak domain",
      body: weak ? `${weak.group}: ${weak.score}%` : "Chưa có dữ liệu",
      icon: <Layers3 className="h-5 w-5" />,
      action: () => props.onView?.("weak"),
      tone: "bg-fuchsia-600 text-white",
    },
  ];

  return (
    <section className="grid gap-3 lg:grid-cols-5" aria-label="V96R home quick actions">
      {actions.map((item) => (
        <button key={item.title} type="button" onClick={item.action} className={`rounded-[1.4rem] p-4 text-left shadow-sm transition hover:-translate-y-0.5 ${item.tone}`}>
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-2xl bg-white/15 p-2">{item.icon}</span>
            <span className="text-[10px] font-black uppercase tracking-[.16em] opacity-75">Quick</span>
          </div>
          <p className="mt-3 text-sm font-black">{item.title}</p>
          <p className="mt-1 line-clamp-2 text-xs font-bold opacity-80">{item.body}</p>
        </button>
      ))}
    </section>
  );
}

function DetailsAccordion({ children }: { children: ReactNode }) {
  return (
    <details className="glass-panel rounded-[2rem] p-4">
      <summary className="cursor-pointer text-sm font-black text-slate-700 dark:text-slate-200">Release / audit panels nâng cao</summary>
      <div className="mt-4 space-y-4">{children}</div>
    </details>
  );
}

function Metric({ title, value, tone }: { title: string; value: string | number; tone: "emerald" | "amber" | "rose" }) {
  const toneClass =
    tone === "emerald"
      ? "text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-200"
      : tone === "amber"
        ? "text-amber-700 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-200"
        : "text-rose-700 bg-rose-50 dark:bg-rose-950/30 dark:text-rose-200";
  return (
    <div className={`rounded-2xl p-4 shadow-sm ${toneClass}`}>
      <p className="text-xs font-black uppercase tracking-[.14em] opacity-70">{title}</p>
      <p className="mt-2 text-4xl font-black">{value}</p>
    </div>
  );
}
