import {
  BookOpen,
  Download,
  FileUp,
  ImageDown,
  RotateCcw,
  Search,
} from "lucide-react";
import { categoryMeta } from "../utils/categoryMeta";
import type { CourseId, CourseConfig } from "../../../courses/types";
import type { CourseSummary } from "../../../courses/courseLoader";
import type { GraphFilters, KnowledgeCategory, Language } from "../types";
import { getCourseDescription } from "../utils/i18n";

const courseTitle = (course: CourseSummary, language: Language) => {
  if (language === "ja") return course.titleJa;
  if (language === "vi") return course.titleVi;
  return course.title;
};

export function CoursePanel(props: {
  course: CourseConfig;
  courses: CourseSummary[];
  selectedCourseId: CourseId;
  language: Language;
  progress: number;
  totalVisible: number;
  onCourse: (courseId: CourseId) => void;
}) {
  return (
    <div className="rounded-[1.5rem] bg-slate-950 p-4 text-white shadow-glow">
      <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        <BookOpen className="h-4 w-4" /> Study Dashboard
      </p>
      <h2 className="mt-2 text-xl font-black">{props.course.title}</h2>
      <p className="mt-1 text-xs leading-5 text-slate-300">
        {getCourseDescription(props.course, props.language)}
      </p>
      <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-2">
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
          Course
        </p>
        <div className="grid gap-2">
          {props.courses.map((course) => (
            <button
              key={course.id}
              type="button"
              onClick={() => props.onCourse(course.id)}
              className={`rounded-xl px-3 py-2 text-left text-xs font-black transition ${props.selectedCourseId === course.id ? "bg-violet-500 text-white" : "bg-white/10 text-slate-200 hover:bg-white/15"}`}
            >
              {courseTitle(course, props.language)}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-cyan-400"
          style={{ width: `${props.progress}%` }}
        />
      </div>
      <p className="mt-2 text-xs font-bold text-slate-300">
        {props.progress}% mastered · {props.totalVisible} nodes visible
      </p>
    </div>
  );
}

export function SearchBox({
  value,
  onQuery,
}: {
  value: string;
  onQuery: (query: string) => void;
}) {
  return (
    <label className="mt-4 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <Search className="h-4 w-4 text-slate-400" />
      <input
        aria-label="Search nodes"
        value={value}
        onChange={(event) => onQuery(event.target.value)}
        placeholder="Search 日本語 / VI / EN"
        className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
      />
    </label>
  );
}

export function StatsPanel({
  stats,
}: {
  stats: {
    mastered: number;
    learning: number;
    fresh: number;
    favorites: number;
    needReview: number;
  };
}) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2">
      <Stat label="Đã hiểu" value={stats.mastered} tone="text-emerald-700" />
      <Stat label="Đang học" value={stats.learning} tone="text-indigo-700" />
      <Stat label="Cần ôn" value={stats.needReview} tone="text-amber-700" />
      <Stat label="Chưa học" value={stats.fresh} tone="text-slate-600" />
    </div>
  );
}
function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <p className={`text-lg font-black ${tone}`}>{value}</p>
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
        {label}
      </p>
    </div>
  );
}

export function FilterPanel(props: {
  filters: GraphFilters;
  categories: KnowledgeCategory[];
  onMode: (mode: GraphFilters["mode"]) => void;
  onToggleCategory: (category: KnowledgeCategory) => void;
}) {
  return (
    <>
      <div className="mt-4 space-y-2">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
          Graph density
        </p>
        <div className="grid grid-cols-3 gap-2">
          {(["overview", "study", "exam"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => props.onMode(mode)}
              className={`rounded-xl px-3 py-2 text-xs font-bold capitalize transition ${props.filters.mode === mode ? "bg-slate-950 text-white" : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-200"}`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
          Category
        </p>
        <div className="flex flex-wrap gap-2">
          {props.categories.map((category) => {
            const meta = categoryMeta[category];
            const active = props.filters.categories.includes(category);
            return (
              <button
                key={category}
                type="button"
                onClick={() => props.onToggleCategory(category)}
                className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${active ? `${meta.bg} ${meta.border} ${meta.color}` : "border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"}`}
              >
                {meta.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
