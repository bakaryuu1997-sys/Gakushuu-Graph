import { AlertTriangle, ArrowRight, BookOpenCheck, CheckCircle2, ClipboardList, Target } from "lucide-react";
import { getLessonText, getNodeExamPoint, getNodeLabel } from "../utils/i18n";
import type { KnowledgeNodeData } from "../types";
import type { LessonWorkspaceProps as Props } from "./LessonWorkspaceTypes";
import { computeReadinessGroups, computeReadinessScore, orderDashboardNodes } from "./WorkspaceDashboardLogic";
import { SmartDailyStudyPlan } from "./SmartDailyStudyPlan";
import { LocalReleasePanel } from "./LocalReleasePanel";

interface FocusAction {
  title: string;
  subtitle: string;
  label: string;
  view: "phaseStudy" | "weak" | "exam" | "dashboard";
  icon: typeof BookOpenCheck;
  tone: "indigo" | "amber" | "emerald" | "slate";
}

export function AiPassportFocusMode(props: Props) {
  const ordered = orderDashboardNodes(props.nodes, props.studyPath);
  const nextNode = ordered.find((node) => props.statuses[node.id] !== "mastered") ?? ordered[0] ?? props.selectedNode;
  const reviewNode = ordered.find((node) => props.statuses[node.id] === "need_review");
  const focusNode = reviewNode ?? nextNode;
  const readiness = Math.max(0, computeReadinessScore(props));
  const weakGroups = computeReadinessGroups(props).slice(0, 3);
  const lesson = props.lessons.find((item) => item.nodeId === focusNode.id);
  const summary = lesson ? getLessonText(lesson, "definition", props.language) : getNodeExamPoint(focusNode, props.language);
  const actions: FocusAction[] = [
    {
      title: "Tiếp tục học",
      subtitle: "Mở lesson hiện tại, đọc bản ngắn trước rồi học sâu nếu cần.",
      label: "Học node tiếp theo",
      view: "phaseStudy",
      icon: BookOpenCheck,
      tone: "indigo",
    },
    {
      title: "Ôn bài cần review",
      subtitle: reviewNode ? "Có node đang đánh dấu Need Review." : "Chưa có node cần ôn, hãy dùng sau khi làm quiz.",
      label: "Mở review list",
      view: "weak",
      icon: AlertTriangle,
      tone: "amber",
    },
    {
      title: "Làm quiz hôm nay",
      subtitle: "Kiểm tra ngay sau lesson để nhớ kiểu đề AI Passport.",
      label: "Làm mini quiz",
      view: "exam",
      icon: ClipboardList,
      tone: "emerald",
    },
    {
      title: "Xem sẵn sàng thi",
      subtitle: `Readiness hiện tại ${readiness}%. Xem nhóm yếu trước khi luyện đề.`,
      label: "Mở dashboard",
      view: "dashboard",
      icon: Target,
      tone: "slate",
    },
  ];

  return (
    <section className="space-y-4" aria-label="AI Passport focus mode">
      <section className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-glow">
        <div className="grid gap-4 p-5 lg:grid-cols-[1.3fr_.7fr] lg:p-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[.24em] text-cyan-300">Beginner Focus Mode</p>
            <h2 className="mt-2 text-3xl font-black leading-tight md:text-4xl">Hôm nay chỉ cần làm 3 bước: học → quiz → review.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              AI Passport có nhiều công cụ, nhưng người mới nên bắt đầu ở đây. Màn hình này chọn node quan trọng tiếp theo, nhắc bài cần ôn và đưa bạn tới quiz nhanh.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4">
            <p className="text-xs font-black uppercase tracking-[.18em] text-slate-300">Exam readiness</p>
            <p className="mt-2 text-5xl font-black text-cyan-300">{readiness}%</p>
            <p className="mt-2 text-xs font-bold text-slate-300">Done {props.stats.mastered}/{props.stats.total} · Need Review {props.stats.needReview}</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-cyan-300" style={{ width: `${Math.min(100, readiness)}%` }} />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => (
          <FocusActionCard key={action.title} action={action} onOpenView={() => props.onView?.(action.view)} />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.1fr_.9fr]">
        <div className="glass-panel rounded-[2rem] p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-indigo-600">Focus lesson</p>
              <h3 className="mt-2 text-2xl font-black text-slate-950">{getNodeLabel(focusNode, props.language)}</h3>
              <p className="mt-1 text-xs font-bold text-slate-500">{focusNode.labelJa} · {focusNode.labelEn}</p>
            </div>
            <span className="rounded-full bg-indigo-50 px-3 py-2 text-xs font-black text-indigo-700">{props.statuses[focusNode.id] ?? "new"}</span>
          </div>
          <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-bold leading-7 text-slate-700 shadow-sm">{summary}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            <button type="button" onClick={() => props.onSelectNode(focusNode.id)} className="rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-black text-white shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Mở lesson <ArrowRight className="ml-1 inline h-4 w-4" />
            </button>
            <button type="button" onClick={props.onMasterNext} className="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-black text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500">
              Đã hiểu · Next
            </button>
            <button type="button" onClick={props.onNeedReview} className="rounded-2xl bg-amber-500 px-4 py-3 text-sm font-black text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500">
              Cần ôn lại
            </button>
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-5">
          <p className="text-xs font-black uppercase tracking-[.2em] text-amber-600">Nhóm cần ưu tiên</p>
          <div className="mt-4 space-y-3">
            {weakGroups.map((group) => (
              <div key={group.group} className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between text-sm font-black text-slate-800">
                  <span>{group.group}</span>
                  <span>{group.score}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-amber-400" style={{ width: `${group.score}%` }} />
                </div>
                <p className="mt-2 text-xs font-bold text-slate-500">{group.done}/{group.total} done · {group.review} need review</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SmartDailyStudyPlan {...props} />

      <LocalReleasePanel courseTitle={props.courseTitle} stats={props.stats} onExportProgress={props.onExportProgress ?? (() => undefined)} onImportProgress={props.onImportProgress ?? (async () => undefined)} onResetProgress={props.onResetProgress ?? (() => undefined)} />

      <DailyQueue {...props} queueNodes={ordered.filter((node) => props.statuses[node.id] !== "mastered").slice(0, 6)} />
    </section>
  );
}

function FocusActionCard({ action, onOpenView }: { action: FocusAction; onOpenView: () => void }) {
  const Icon = action.icon;
  const toneClass =
    action.tone === "indigo"
      ? "border-indigo-100 bg-indigo-50 text-indigo-900"
      : action.tone === "amber"
        ? "border-amber-100 bg-amber-50 text-amber-950"
        : action.tone === "emerald"
          ? "border-emerald-100 bg-emerald-50 text-emerald-950"
          : "border-slate-200 bg-white text-slate-800";
  return (
    <button type="button" onClick={onOpenView} className={`rounded-[1.5rem] border p-4 text-left shadow-sm transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${toneClass}`}>
      <Icon className="h-5 w-5" />
      <h3 className="mt-3 text-base font-black">{action.title}</h3>
      <p className="mt-1 min-h-12 text-xs font-bold leading-5 opacity-75">{action.subtitle}</p>
      <span className="mt-3 inline-flex items-center text-xs font-black">{action.label} <ArrowRight className="ml-1 h-3 w-3" /></span>
    </button>
  );
}

function DailyQueue({ queueNodes, ...props }: Props & { queueNodes: KnowledgeNodeData[] }) {
  return (
    <section className="glass-panel rounded-[2rem] p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-slate-500">Daily queue</p>
          <h3 className="text-2xl font-black text-slate-950">6 node nên học tiếp</h3>
        </div>
        <CheckCircle2 className="h-6 w-6 text-emerald-500" />
      </div>
      <div className="mt-4 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
        {queueNodes.map((node, index) => (
          <button key={node.id} type="button" onClick={() => props.onSelectNode(node.id)} className="rounded-2xl border border-slate-200 bg-white p-3 text-left text-xs font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            <span className="mr-2 text-indigo-500">{index + 1}</span>
            {getNodeLabel(node, props.language)}
            <p className="mt-1 line-clamp-2 text-[11px] leading-5 text-slate-500">{getNodeExamPoint(node, props.language)}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
