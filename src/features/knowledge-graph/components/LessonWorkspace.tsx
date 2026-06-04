import { lazy, Suspense, type ReactNode } from "react";
import type { LessonWorkspaceProps as Props } from "./LessonWorkspaceTypes";
import type { StudyView } from "./StudyNavigation";
import { AiPassportFocusMode } from "./AiPassportFocusMode";
import { FundamentalInfoFocusMode } from "./FundamentalInfoFocusMode";
import { FundamentalInfoExamSimulator } from "./FundamentalInfoExamSimulator";
import { FundamentalInfoPracticeDrills } from "./FundamentalInfoPracticeDrills";
import { PythonFocusMode } from "./PythonFocusMode";
import { PythonPracticeSuite } from "./PythonPracticeSuite";
import { LessonPanel } from "./LessonPanel";
import { Dashboard } from "./WorkspaceDashboard";
import { CrashCourse, PhaseStudy, StudyPathView } from "./WorkspaceStudyViews";
import { NodeIndex } from "./WorkspaceNodeIndex";
import { CheatSheetView, JapaneseExamView, WrongAnswerReview } from "./ExamViews";
import { AiExamSimulator } from "./AiExamSimulator";
import { BrsePhraseView, BrseRoleplay, BrseTemplateView, PracticeView, ProjectView } from "./PracticeViews";
import { FavoriteNodes, QuizView, RecentNodes } from "./QuizReviewViews";
import { CompareView, DiagramView, GlossaryView } from "./GlossaryCompareViews";
import { GlobalQuickSearchPanel } from "./GlobalQuickSearchPanel";


const ContentCoverage = lazy(() =>
  import("./ContentCoverageView").then((module) => ({ default: module.ContentCoverage })),
);

function LazyView({ children }: { children: ReactNode }) {
  return <Suspense fallback={<div className="glass-panel rounded-[2rem] p-5 text-sm font-bold text-slate-600 dark:text-slate-300">Đang tải công cụ nặng...</div>}>{children}</Suspense>;
}

const lessonViews: StudyView[] = [
  "start",
  "dashboard",
  "coverage",
  "projects",
  "practice",
  "phrases",
  "templates",
  "roleplay",
  "today",
  "path",
  "phaseStudy",
  "crashCourse",
  "learningFlow",
  "visualMaps",
  "plans",
  "weak",
  "all",
];

export function LessonWorkspace(props: Props) {
  if (lessonViews.includes(props.activeView)) {
    return (
      <TwoPane props={props}>
        <StudyRouter {...props} />
      </TwoPane>
    );
  }
  return (
    <section className="space-y-4">
      <GlobalQuickSearchPanel nodes={props.nodes} lessons={props.lessons} quizzes={props.quizzes} courseTitle={props.courseTitle} onSelectNode={props.onSelectNode} onView={props.onView} />
      <LessonPanel {...props} />
      <ToolRouter {...props} />
    </section>
  );
}

function TwoPane({ props, children }: { props: Props; children: ReactNode }) {
  return (
    <section className="grid items-start gap-4 xl:grid-cols-[minmax(320px,.82fr)_minmax(440px,1.18fr)]">
      <div className="min-w-0 space-y-4"><GlobalQuickSearchPanel nodes={props.nodes} lessons={props.lessons} quizzes={props.quizzes} courseTitle={props.courseTitle} onSelectNode={props.onSelectNode} onView={props.onView} />{children}</div>
      <div className="min-w-0 xl:sticky xl:top-4 xl:max-h-[calc(100vh-2rem)] xl:overflow-y-auto">
        <LessonPanel {...props} />
      </div>
    </section>
  );
}

function StudyRouter(props: Props) {
  const { activeView } = props;
  if (activeView === "start" && props.courseTitle.includes("AI Passport")) return <AiPassportFocusMode {...props} />;
  if (activeView === "start" && props.courseTitle.includes("基本情報")) return <FundamentalInfoFocusMode {...props} />;
  if (activeView === "start" && props.courseTitle.includes("Python")) return <PythonFocusMode {...props} />;
  if (activeView === "coverage") return <LazyView><ContentCoverage {...props} /></LazyView>;
  if (activeView === "projects") return <ProjectView {...props} />;
  if (activeView === "practice" && props.courseTitle.includes("基本情報")) return <FundamentalInfoPracticeDrills {...props} />;
  if (activeView === "practice" && props.courseTitle.includes("Python")) return <PythonPracticeSuite onSelectNode={props.onSelectNode} />;
  if (activeView === "practice") return <PracticeView {...props} />;
  if (activeView === "phrases") return <BrsePhraseView />;
  if (activeView === "templates") return <BrseTemplateView />;
  if (activeView === "roleplay") return <BrseRoleplay {...props} />;
  if (activeView === "phaseStudy") return <PhaseStudy {...props} />;
  if (activeView === "crashCourse") return <CrashCourse {...props} />;
  if (["path", "learningFlow", "plans"].includes(activeView)) return <StudyPathView {...props} />;
  if (activeView === "visualMaps") return <DiagramView />;
  if (activeView === "all" || activeView === "weak") return <NodeIndex {...props} />;
  return <Dashboard {...props} />;
}

function ToolRouter(props: Props) {
  const { activeView } = props;
  if (activeView === "japanese" && props.courseTitle.includes("AI Passport")) return <JapaneseExamView {...props} />;
  if (activeView === "answerReview" && props.courseTitle.includes("AI Passport")) return <WrongAnswerReview {...props} />;
  if (activeView === "cheatsheet") return <CheatSheetView {...props} />;
  if (activeView === "session" && props.courseTitle.includes("AI Passport")) return <AiExamSimulator {...props} />;
  if (activeView === "session" && props.courseTitle.includes("基本情報")) return <FundamentalInfoExamSimulator {...props} />;
  if (["exam", "practice", "review", "japanese", "mistakes"].includes(activeView)) return <QuizView {...props} />;
  if (activeView === "glossary" || activeView === "glossaryQuiz") return <GlossaryView onSelectNode={props.onSelectNode} />;
  if (activeView === "compare") return <CompareView {...props} />;
  if (activeView === "flashcards") return <NodeIndex {...props} />;
  if (activeView === "favorites") return <FavoriteNodes {...props} />;
  if (activeView === "recent") return <RecentNodes {...props} />;
  return <DiagramView />;
}
