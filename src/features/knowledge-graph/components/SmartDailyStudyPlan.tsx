import { CalendarCheck2, CheckCircle2, FileQuestion, RefreshCcw } from "lucide-react";
import type { KnowledgeNodeData } from "../types";
import { getNodeExamPoint, getNodeLabel } from "../utils/i18n";
import type { LessonWorkspaceProps as Props } from "./LessonWorkspaceTypes";
import { orderDashboardNodes } from "./WorkspaceDashboardLogic";

const take = <T,>(items: T[], count: number) => items.slice(0, count);

export function buildSmartDailyPlan(props: Props) {
  const ordered = orderDashboardNodes(props.nodes, props.studyPath);
  const reviewNodes = ordered.filter((node) => props.statuses[node.id] === "need_review");
  const newNodes = ordered.filter((node) => !props.statuses[node.id] || props.statuses[node.id] === "new");
  const learningNodes = ordered.filter((node) => props.statuses[node.id] === "learning");
  const fallback = ordered.filter((node) => props.statuses[node.id] !== "mastered");
  return {
    newNodes: take(newNodes.length ? newNodes : fallback, 3),
    reviewNodes: take(reviewNodes.length ? reviewNodes : learningNodes, 3),
    quizCount: Math.min(10, Math.max(5, props.quizzes.length)),
    miniExamCount: Math.min(30, Math.max(10, props.quizzes.length)),
  };
}

export function SmartDailyStudyPlan(props: Props) {
  const plan = buildSmartDailyPlan(props);
  const totalSteps = plan.newNodes.length + plan.reviewNodes.length + 2;

  return (
    <section className="glass-panel rounded-[2rem] p-5" aria-label="Smart daily study plan">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-emerald-600">
            <CalendarCheck2 className="h-4 w-4" /> V55 Smart Daily Plan
          </p>
          <h3 className="mt-1 text-2xl font-black text-slate-950">Checklist hôm nay: 3 lesson mới → 3 review → 10 quiz → 1 mini exam</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Kế hoạch này ưu tiên node chưa học và node Need Review để người mới không bị lạc giữa nhiều công cụ.
          </p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700">{totalSteps} bước nhỏ</span>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <PlanColumn title="1. Học 3 lesson mới" nodes={plan.newNodes} props={props} tone="indigo" />
        <PlanColumn title="2. Ôn 3 bài Need Review" nodes={plan.reviewNodes} props={props} tone="amber" empty="Chưa có Need Review. Hãy làm quiz để tạo danh sách ôn." />
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <button type="button" onClick={() => props.onView?.("exam")} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-left text-sm font-black text-emerald-950 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500">
          <FileQuestion className="mb-2 h-5 w-5" /> 3. Làm {plan.quizCount} câu quiz nhanh
          <p className="mt-1 text-xs font-bold leading-5 opacity-75">Kiểm tra ngay sau lesson để khóa kiến thức vào trí nhớ.</p>
        </button>
        <button type="button" onClick={() => props.onView?.("session")} className="rounded-2xl border border-slate-200 bg-white p-4 text-left text-sm font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900">
          <RefreshCcw className="mb-2 h-5 w-5" /> 4. Làm 1 mini exam {plan.miniExamCount} câu
          <p className="mt-1 text-xs font-bold leading-5 text-slate-500">Cuối ngày xem sai domain nào để đưa vào Need Review.</p>
        </button>
      </div>
    </section>
  );
}

function PlanColumn({ title, nodes, props, tone, empty }: { title: string; nodes: KnowledgeNodeData[]; props: Props; tone: "indigo" | "amber"; empty?: string }) {
  const chip = tone === "indigo" ? "text-indigo-600" : "text-amber-600";
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <h4 className={`flex items-center gap-2 text-sm font-black ${chip}`}><CheckCircle2 className="h-4 w-4" /> {title}</h4>
      <div className="mt-3 grid gap-2">
        {nodes.length ? nodes.map((node, index) => (
          <button key={node.id} type="button" onClick={() => props.onSelectNode(node.id)} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-left text-xs font-bold text-slate-700 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            <span className={chip}>{index + 1}.</span> {getNodeLabel(node, props.language)}
            <p className="mt-1 line-clamp-2 text-[11px] leading-5 text-slate-500">{getNodeExamPoint(node, props.language)}</p>
          </button>
        )) : <p className="text-xs font-bold text-slate-500">{empty ?? "Không có node phù hợp."}</p>}
      </div>
    </div>
  );
}
