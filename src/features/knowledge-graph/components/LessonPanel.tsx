import { lazy, Suspense, useState } from "react";
import { ArrowRight, BadgeCheck, CheckCircle2, Lightbulb, Star, TriangleAlert } from "lucide-react";
import type { LessonContent } from "../data/lessonContent";
import type { KnowledgeNodeData, StudyStatus } from "../types";
import {
  getLessonMistakes,
  getLessonPatterns,
  getLessonText,
  getNodeExamPoint,
  getNodeLabel,
  getNodeSummary,
} from "../utils/i18n";
import type { LessonWorkspaceProps as Props } from "./LessonWorkspaceTypes";
import { Bullet, Info, NodeButtons } from "./LessonWorkspacePrimitives";
import { LessonDepthCard } from "./LessonDepthCard";
import { LessonModeControls, type LessonDepthMode } from "./LessonModeControls";
import { MiniQuiz } from "./MiniQuiz";
import { NodeStatusButtons } from "./NodeStatusButtons";
import { FundamentalInfoLessonPolish } from "./FundamentalInfoLessonPolish";


const V99LessonDetailPage = lazy(() =>
  import("./V99LessonDetailPage").then((module) => ({ default: module.V99LessonDetailPage })),
);

const lessonOf = (lessons: LessonContent[], id: string) =>
  lessons.find((item) => item.nodeId === id);

const fallbackMistakes = [
  "Nhầm với khái niệm gần giống.",
  "Chỉ nhớ tên nhưng không hiểu ví dụ thực tế.",
];

const buildExamPatterns = (node: KnowledgeNodeData, language: Props["language"]) => [
  getNodeExamPoint(node, language),
  "Đọc keyword trong đề, xác định bối cảnh, rồi chọn biện pháp/phân loại phù hợp.",
];

export function LessonPanel({
  selectedNode,
  connectedNodes,
  language,
  lessons,
  quizzes,
  statuses,
  isFavorite,
  onSelectNode,
  onToggleStatus,
  onMasterNext,
  onNeedReview,
  onSetStatus,
  onToggleFavorite,
  courseTitle,
  courseId = courseTitle.includes("基本情報") ? "fundamental-info" : courseTitle.includes("Python") ? "python" : courseTitle.includes("AI Passport") ? "ai-passport" : "it-passport",
}: Props) {
  const [depthMode, setDepthMode] = useState<LessonDepthMode>("medium");
  const [shortFirst, setShortFirst] = useState(true);
  const lesson = lessonOf(lessons, selectedNode.id);
  const status = statuses[selectedNode.id] ?? "new";
  const definitionText = lesson
    ? getLessonText(lesson, "definition", language)
    : getNodeSummary(selectedNode, language);
  const whyText = lesson
    ? getLessonText(lesson, "why", language)
    : getNodeExamPoint(selectedNode, language);
  const memoryText = lesson
    ? getLessonText(lesson, "memory", language)
    : selectedNode.keywords.slice(0, 4).join(" → ");
  const patterns = lesson ? getLessonPatterns(lesson, language) : buildExamPatterns(selectedNode, language);
  const mistakes = lesson ? getLessonMistakes(lesson, language) : fallbackMistakes;

  return (
    <article className="glass-panel rounded-[2rem] p-5">
      <span className="sr-only">Đang tải nội dung bài học viết tay</span>
      <LessonModeControls mode={depthMode} shortFirst={shortFirst} onMode={setDepthMode} onShortFirst={setShortFirst} />
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-indigo-600">Current lesson · {status}</p>
          <h1 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">{selectedNode.labelJa}</h1>
          {selectedNode.reading && <p className="text-sm font-bold text-slate-500 dark:text-slate-400">{selectedNode.reading}</p>}
          <p className="font-bold text-indigo-700 dark:text-indigo-300">{getNodeLabel(selectedNode, language)}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{selectedNode.labelEn}</p>
          <LessonBadges importance={selectedNode.importance} />
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <NodeStatusButtons value={status as StudyStatus} onSetStatus={onSetStatus} />
          <div className="hidden">
            <button type="button" onClick={onToggleStatus} className="rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-black text-white shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" aria-label={`Cycle study status from ${status}`}>
              <CheckCircle2 className="mr-2 inline h-4 w-4" /> Cycle: {status}
            </button>
            <button type="button" onClick={onMasterNext} className="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-black text-white shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500">
              Done ✓ Next
            </button>
            <button type="button" onClick={onNeedReview} className="rounded-2xl bg-amber-500 px-4 py-3 text-sm font-black text-white shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500">
              Need Review
            </button>
          </div>
          <button type="button" onClick={onToggleFavorite} aria-pressed={isFavorite} className="w-full sm:w-auto rounded-2xl bg-white border border-slate-200 px-4 py-2 text-xs font-black text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200 dark:border-slate-800 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500">
            <Star className={`mr-1.5 inline h-4 w-4 ${isFavorite ? "fill-amber-400 text-amber-400" : ""}`} />
            {isFavorite ? "Saved" : "Save"}
          </button>
        </div>
      </div>
      <LessonExamStrip pattern={patterns[0] ?? getNodeExamPoint(selectedNode, language)} mistake={mistakes[0] ?? fallbackMistakes[0]} memory={memoryText} />
      <Suspense fallback={<LessonDetailFallback />}>
        <V99LessonDetailPage courseId={courseId} node={selectedNode} lesson={lesson} language={language} />
      </Suspense>
      {courseTitle.includes("基本情報") && depthMode === "deep" && <FundamentalInfoLessonPolish node={selectedNode} lesson={lesson} language={language} />}
      {depthMode !== "basic" && <MiniQuiz nodeId={selectedNode.id} quizzes={quizzes} language={language} />}
      <div className="mt-4 grid gap-2 sm:grid-cols-3" aria-label="Lesson next actions">
        <button type="button" onClick={onMasterNext} className="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-black text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500">
          Tôi hiểu rồi <ArrowRight className="ml-1 inline h-4 w-4" />
        </button>
        <button type="button" onClick={onNeedReview} className="rounded-2xl bg-amber-500 px-4 py-3 text-sm font-black text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500">
          Đánh dấu ôn lại
        </button>
        <button type="button" onClick={() => onSetStatus("learning")} className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          Đang học tiếp
        </button>
      </div>
      {depthMode !== "basic" && <NodeButtons title="Node liên quan" nodes={connectedNodes} lang={language} onSelectNode={onSelectNode} />}
    </article>
  );
}


function LegacyDeepNotes({ definitionText, whyText, memoryText, patterns, mistakes }: { definitionText: string; whyText: string; memoryText: string; patterns: string[]; mistakes: string[] }) {
  return (
    <details className="mt-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
      <summary className="cursor-pointer text-sm font-black text-slate-800 dark:text-slate-100">Deep notes cũ / tham khảo thêm</summary>
      <Info title="Tóm tắt" text={definitionText} />
      <Info title="Vì sao quan trọng" text={whyText} />
      <Bullet title="Dạng câu hỏi hay gặp" items={patterns} />
      <Bullet title="Lỗi dễ nhầm" items={mistakes} tone="amber" />
      <Info title="Cách nhớ nhanh" text={memoryText} />
    </details>
  );
}

function LessonTakeaway({ definition, memory, pattern }: { definition: string; memory: string; pattern: string }) {
  return (
    <section className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-100">
      <b>Chốt bài trong 3 ý</b>
      <ol className="mt-2 list-decimal space-y-1 pl-5 leading-6">
        <li>{definition}</li>
        <li>Trong đề thi, hãy chú ý: {pattern}</li>
        <li>Mẹo nhớ: {memory}</li>
      </ol>
    </section>
  );
}

function LessonBadges({ importance }: { importance: KnowledgeNodeData["importance"] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2" aria-label="Lesson quality badges">
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700"><BadgeCheck className="h-3 w-3" /> Beginner</span>
      <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-black text-indigo-700"><Lightbulb className="h-3 w-3" /> Exam point</span>
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-black text-amber-700"><TriangleAlert className="h-3 w-3" /> Common mistake</span>
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600 dark:bg-slate-800 dark:text-slate-300">{importance}</span>
    </div>
  );
}

function LessonDetailFallback() {
  return (
    <section className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-5 text-sm font-bold text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300" aria-label="V111 lesson detail lazy loading fallback">
      Đang tải lesson viết tay... Nội dung chính được tách lazy để app mở nhanh hơn.
    </section>
  );
}


function LessonExamStrip({ pattern, mistake, memory }: { pattern: string; mistake: string; memory: string }) {
  return (
    <section className="mt-4 grid gap-3 md:grid-cols-3" aria-label="Lesson exam quick cards">
      <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4 text-sm text-indigo-950 dark:bg-indigo-950/30 dark:text-indigo-100"><b>Đề hay hỏi</b><p className="mt-1 text-xs font-bold leading-5">{pattern}</p></div>
      <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm text-amber-950 dark:bg-amber-950/30 dark:text-amber-100"><b>Bẫy dễ nhầm</b><p className="mt-1 text-xs font-bold leading-5">{mistake}</p></div>
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-100"><b>Ghi nhớ nhanh</b><p className="mt-1 text-xs font-bold leading-5">{memory}</p></div>
    </section>
  );
}
