import { lazy, Suspense } from "react";
import { StudySidePanel } from "./StudySidePanel";
import { MobileGraphFallback, LoadingPanel } from "./MobileGraphFallback";
import { StudyNavigation } from "../features/knowledge-graph/components/StudyNavigation";
import type { Language } from "../features/knowledge-graph/types";
import type { StudyView } from "../features/knowledge-graph/components/StudyNavigation";
import type { StudyUxMode } from "../features/knowledge-graph/components/studyUxMode";
import type { AppCourseState } from "./useAppCourseState";

const LessonWorkspace = lazy(() =>
  import("../features/knowledge-graph/components/LessonWorkspace").then((module) => ({ default: module.LessonWorkspace })),
);
const GraphMapPage = lazy(() =>
  import("./map/GraphMapPage").then((module) => ({ default: module.GraphMapPage })),
);

interface MainStudyContentProps {
  state: AppCourseState;
  language: Language;
  isMobile: boolean;
  studyUxMode: StudyUxMode;
  onLanguage: (language: Language) => void;
  onActiveView: (view: StudyView) => void;
  onStudyUxMode: (mode: StudyUxMode) => void;
  onOpenMap: () => void;
}

export function MainStudyContent({ state, language, isMobile, studyUxMode, onLanguage, onActiveView, onStudyUxMode, onOpenMap }: MainStudyContentProps) {
  const { activeCourse, activeView, courseId, graph, progress } = state;
  return (
    <section className="mx-auto grid w-full max-w-[1920px] gap-4 px-3 pb-8 sm:px-4 lg:grid-cols-[290px_minmax(0,1fr)] lg:px-5 2xl:grid-cols-[300px_minmax(0,1fr)_430px]">
      <StudyNavigation
        activeView={activeView}
        filters={graph.filters}
        language={language}
        progress={progress.percentage}
        stats={progress.stats}
        totalVisible={graph.visibleNodes.length}
        course={activeCourse}
        courses={state.courses}
        selectedCourseId={courseId}
        uxMode={studyUxMode}
        onCourse={state.handleCourseChange}
        onView={onActiveView}
        onUxMode={onStudyUxMode}
        onQuery={graph.setQuery}
        onMode={graph.setMode}
        onImportance={graph.setImportance}
        onToggleCategory={graph.toggleCategory}
        onLanguage={onLanguage}
        onReset={progress.resetProgress}
        onExportProgress={state.exportProgress}
        onImportProgress={state.importProgress}
        onExportGraph={state.exportGraph}
      />

      <div className={state.isGraphMode ? "2xl:col-span-2" : ""}>
        <Suspense fallback={<LoadingPanel label="Đang tải view học tập..." />}>
          {state.isGraphMode ? <GraphArea state={state} language={language} isMobile={isMobile} onOpenMap={onOpenMap} onActiveView={onActiveView} /> : <WorkspaceArea state={state} language={language} onActiveView={onActiveView} />}
        </Suspense>
      </div>

      {!state.isGraphMode && (
        <StudySidePanel
          nodes={state.statusFlowNodes}
          edges={graph.flowEdges}
          selectedNode={graph.selectedNode}
          connectedNodes={graph.connectedNodes}
          language={language}
          onSelectNode={state.selectNode}
          onFullscreen={onOpenMap}
        />
      )}
    </section>
  );
}

function GraphArea({ state, language, isMobile, onOpenMap, onActiveView }: Pick<MainStudyContentProps, "state" | "language" | "isMobile" | "onOpenMap" | "onActiveView">) {
  const { activeCourse, graph } = state;
  if (isMobile) return <MobileGraphFallback onOpen={onOpenMap} onStudy={() => onActiveView("phaseStudy")} />;
  return (
    <GraphMapPage
      nodes={state.statusFlowNodes}
      edges={graph.flowEdges}
      selectedNode={graph.selectedNode}
      connectedNodes={graph.connectedNodes}
      language={language}
      courseTitle={activeCourse.title}
      studyPath={activeCourse.studyPath}
      onSelectNode={state.selectNode}
      nextNodeId={state.nextNodeId}
      onFullscreen={onOpenMap}
    />
  );
}

function WorkspaceArea({ state, language, onActiveView }: { state: AppCourseState; language: Language; onActiveView: (view: StudyView) => void }) {
  const { activeCourse, activeView, graph, progress } = state;
  return (
    <LessonWorkspace
      activeView={activeView}
      nodes={graph.allNodes}
      selectedNode={graph.selectedNode}
      connectedNodes={graph.connectedNodes}
      favorites={state.favoriteNodes}
      recent={state.recentNodes}
      stats={progress.stats}
      statuses={progress.progress.statuses}
      language={language}
      lessons={activeCourse.lessons}
      quizzes={activeCourse.quizzes}
      studyPath={activeCourse.studyPath}
      comparePairs={activeCourse.comparePairs}
      courseTitle={activeCourse.title}
      courseId={activeCourse.id}
      isFavorite={progress.progress.favorites.includes(graph.selectedNode.id)}
      onSelectNode={state.selectNode}
      onToggleStatus={() => progress.setNodeStatus(graph.selectedNode.id)}
      onMasterNext={state.markMasteredAndNext}
      onNeedReview={() => progress.markNeedReview(graph.selectedNode.id)}
      onSetStatus={(status) => progress.setStatus(graph.selectedNode.id, status)}
      onToggleFavorite={() => progress.toggleFavorite(graph.selectedNode.id)}
      onExportProgress={state.exportProgress}
      onImportProgress={state.importProgress}
      onResetProgress={progress.resetProgress}
      onView={onActiveView}
    />
  );
}
