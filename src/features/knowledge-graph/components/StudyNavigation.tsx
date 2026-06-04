import type { CourseConfig, CourseId } from "../../../courses/types";
import type { CourseSummary } from "../../../courses/courseLoader";
import type { GraphFilters, KnowledgeCategory, Language } from "../types";
import { CollapsibleViewGroup, ViewGroup } from "./NavigationGroups";
import { ExportPanel } from "./NavigationExportPanel";
import {
  CoursePanel,
  FilterPanel,
  SearchBox,
  StatsPanel,
} from "./StudyNavigationPanels";
import {
  allowedViewsForCourse,
  categoriesForCourse,
  views,
  type StudyView,
} from "./studyNavigationConfig";
import { isBeginnerStudyView, type StudyUxMode } from "./studyUxMode";

interface Props {
  course: CourseConfig;
  courses: CourseSummary[];
  selectedCourseId: CourseId;
  activeView: StudyView;
  uxMode: StudyUxMode;
  progress: number;
  totalVisible: number;
  language: Language;
  filters: GraphFilters;
  stats: {
    total: number;
    mastered: number;
    learning: number;
    needReview: number;
    fresh: number;
    favorites: number;
  };
  onCourse: (courseId: CourseId) => void;
  onView: (view: StudyView) => void;
  onUxMode: (mode: StudyUxMode) => void;
  onQuery: (query: string) => void;
  onMode: (mode: GraphFilters["mode"]) => void;
  onImportance: (importance: GraphFilters["importance"]) => void;
  onToggleCategory: (category: KnowledgeCategory) => void;
  onLanguage: (language: Language) => void;
  onReset: () => void;
  onExportProgress: () => void;
  onImportProgress: (file: File) => void;
  onExportGraph: () => void;
}

export function StudyNavigation(props: Props) {
  const allowedViews = allowedViewsForCourse(props.selectedCourseId);
  const courseCategories = categoriesForCourse(props.course);
  const visibleViews = views.filter((view) => allowedViews.has(view.id) && (props.uxMode === "advanced" || isBeginnerStudyView(view.id)));
  const groupViews = (group: "main" | "review" | "practice" | "advanced") =>
    visibleViews.filter((view) => view.group === group);

  return (
    <aside className="glass-panel max-h-none overflow-y-visible rounded-[2rem] p-4 dark:border-slate-700 dark:bg-slate-950/80 lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
      <CoursePanel
        course={props.course}
        courses={props.courses}
        selectedCourseId={props.selectedCourseId}
        language={props.language}
        progress={props.progress}
        totalVisible={props.totalVisible}
        onCourse={props.onCourse}
      />
      <UxModeSwitch mode={props.uxMode} onMode={props.onUxMode} />
      <nav className="mt-4 space-y-4" aria-label="Study navigation">
        <ViewGroup
          title="Main"
          views={groupViews("main")}
          activeView={props.activeView}
          onView={props.onView}
          large
        />
        <CollapsibleViewGroup
          title="Review tools"
          defaultOpen
          views={groupViews("review")}
          activeView={props.activeView}
          onView={props.onView}
        />
        <CollapsibleViewGroup
          title="Practice tools"
          defaultOpen={props.uxMode === "beginner"}
          views={groupViews("practice")}
          activeView={props.activeView}
          onView={props.onView}
        />
        {props.uxMode === "advanced" && (
          <CollapsibleViewGroup
            title="Advanced tools"
            defaultOpen={props.uxMode === "advanced"}
            views={groupViews("advanced")}
            activeView={props.activeView}
            onView={props.onView}
          />
        )}
      </nav>
      <StatsPanel stats={props.stats} />
      {props.uxMode === "advanced" && (
        <>
          <SearchBox value={props.filters.query} onQuery={props.onQuery} />
          <FilterPanel
            filters={props.filters}
            categories={courseCategories}
            onMode={props.onMode}
            onToggleCategory={props.onToggleCategory}
          />
          <ExportPanel
            onExportProgress={props.onExportProgress}
            onImportProgress={props.onImportProgress}
            onExportGraph={props.onExportGraph}
            onReset={props.onReset}
          />
        </>
      )}
    </aside>
  );
}

export type { StudyView };


function UxModeSwitch({ mode, onMode }: { mode: StudyUxMode; onMode: (mode: StudyUxMode) => void }) {
  return (
    <section className="mt-4 rounded-2xl border border-indigo-100 bg-indigo-50/80 p-2 dark:border-indigo-900 dark:bg-indigo-950/30" aria-label="Study UX mode">
      <p className="px-2 pb-2 text-[10px] font-black uppercase tracking-[.18em] text-indigo-700 dark:text-indigo-200">Learning mode</p>
      <div className="grid grid-cols-2 gap-2">
        {(["beginner", "advanced"] as const).map((item) => {
          const active = mode === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => onMode(item)}
              className={`rounded-xl px-3 py-2 text-xs font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${active ? "bg-slate-950 text-white shadow-sm" : "bg-white text-slate-600 hover:-translate-y-0.5 dark:bg-slate-900 dark:text-slate-200"}`}
            >
              {item === "beginner" ? "Beginner" : "Advanced"}
            </button>
          );
        })}
      </div>
      <p className="mt-2 px-2 text-[11px] font-bold leading-5 text-indigo-900/70 dark:text-indigo-100/70">
        {mode === "beginner" ? "Giữ navigation gọn: Today, Lesson, Quiz, Review." : "Mở thêm Graph, Coverage, Export và các công cụ nâng cao."}
      </p>
    </section>
  );
}
