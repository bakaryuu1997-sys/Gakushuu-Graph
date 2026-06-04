import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Gauge, GraduationCap } from "lucide-react";
import { courseSummaries } from "../../../courses/courseLoader";
import type { CourseId } from "../../../courses/types";
import type { StudyStatus } from "../types";

type StoredProgress = { statuses?: Record<string, StudyStatus> };

const coreCourseMeta: Array<{ id: CourseId; total: number }> = [
  { id: "ai-passport", total: 172 },
  { id: "fundamental-info", total: 153 },
  { id: "python", total: 117 },
];

const readStatuses = (courseId: CourseId): Record<string, StudyStatus> => {
  try {
    const raw = window.localStorage.getItem(`study-atlas-progress:${courseId}:v1`);
    if (!raw) return {};
    return ((JSON.parse(raw) as StoredProgress).statuses ?? {}) as Record<string, StudyStatus>;
  } catch {
    return {};
  }
};

const readinessLabel = (score: number) => {
  if (score >= 90) return "Ready / gần hoàn hảo";
  if (score >= 70) return "Ổn, nên luyện thêm";
  if (score >= 40) return "Đang học";
  return "Cần bắt đầu/ôn nền";
};

const nextCourseAdvice = (scores: Record<CourseId, number>) => {
  if ((scores["ai-passport"] ?? 0) < 85) return "Nên học tiếp: AI Passport để chắc nền AI, pháp luật, đạo đức và business use case.";
  if ((scores["fundamental-info"] ?? 0) < 80) return "Nên học tiếp: 基本情報, ưu tiên algorithm + 科目B trace trainer.";
  if ((scores.python ?? 0) < 80) return "Nên học tiếp: Python, ưu tiên code lab → FastAPI → mini project.";
  return "Ba course chính đã rất ổn. Bước tiếp theo: chọn SQL, Linux hoặc Frontend để mở rộng kỹ năng thực hành.";
};

export function CourseCompletionDashboard({ activeCourseId }: { activeCourseId?: CourseId }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const onStorage = () => setTick((value) => value + 1);
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const rows = useMemo(() => coreCourseMeta.map((meta) => {
    const course = courseSummaries.find((item) => item.id === meta.id)!;
    const statuses = Object.values(readStatuses(meta.id));
    const done = statuses.filter((status) => status === "mastered").length;
    const learning = statuses.filter((status) => status === "learning").length;
    const review = statuses.filter((status) => status === "need_review").length;
    const score = meta.total ? Math.max(0, Math.min(100, Math.round(((done + learning * 0.45 - review * 0.25) / meta.total) * 100))) : 0;
    return { id: meta.id, title: course.titleVi, subtitle: course.subtitleVi, total: meta.total, done, learning, review, score };
  }), [tick]);

  const scoreMap = Object.fromEntries(rows.map((row) => [row.id, row.score])) as Record<CourseId, number>;
  const advice = nextCourseAdvice(scoreMap);

  return (
    <section className="glass-panel rounded-[2rem] p-5" aria-label="Course completion dashboard">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-emerald-600 dark:text-emerald-300">
            <Gauge className="h-4 w-4" /> Course Completion Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">Readiness ba course chính</h2>
          <p className="mt-2 max-w-3xl text-sm font-bold leading-6 text-slate-600 dark:text-slate-300">
            Theo dõi AI Passport readiness, 基本情報 readiness, Python readiness và gợi ý course nên học tiếp. Điểm được tính từ tiến độ local trên trình duyệt này.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white dark:bg-white dark:text-slate-950">
          <GraduationCap className="h-4 w-4" /> Local only
        </span>
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        {rows.map((row) => {
          const active = activeCourseId === row.id;
          return (
            <article key={row.id} className={`rounded-2xl border p-4 shadow-sm ${active ? "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/30" : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-black text-slate-950 dark:text-white">{row.title}</h3>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-500 dark:text-slate-300">{row.subtitle}</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-emerald-700 shadow-sm dark:bg-slate-950 dark:text-emerald-200">{row.score}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div className="h-full rounded-full bg-emerald-500" style={{ width: `${row.score}%` }} />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-black">
                <span className="rounded-xl bg-emerald-50 px-2 py-2 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-200">Done {row.done}/{row.total}</span>
                <span className="rounded-xl bg-indigo-50 px-2 py-2 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-200">Learning {row.learning}</span>
                <span className="rounded-xl bg-amber-50 px-2 py-2 text-amber-700 dark:bg-amber-950/40 dark:text-amber-200">Review {row.review}</span>
              </div>
              <p className="mt-3 text-xs font-black text-slate-600 dark:text-slate-300">{readinessLabel(row.score)}</p>
            </article>
          );
        })}
      </div>
      <p className="mt-4 flex items-start gap-2 rounded-2xl bg-indigo-50 p-4 text-sm font-bold leading-6 text-indigo-950 dark:bg-indigo-950/30 dark:text-indigo-100">
        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" /> {advice}
      </p>
    </section>
  );
}
