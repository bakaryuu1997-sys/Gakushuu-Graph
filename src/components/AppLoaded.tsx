import { useState } from "react";
import { AppHeader } from "./AppHeader";
import { AppOverlays } from "./AppOverlays";
import type { CourseConfig, CourseId } from "../courses/types";
import { TopStudyControls } from "../features/knowledge-graph/components/TopStudyControls";
import type { Language } from "../features/knowledge-graph/types";
import type { StudyView } from "../features/knowledge-graph/components/StudyNavigation";
import type { StudyUxMode } from "../features/knowledge-graph/components/studyUxMode";
import { MainStudyContent } from "./MainStudyContent";
import { useAppCourseState } from "./useAppCourseState";
import { useAppTheme } from "./useAppTheme";
import { useIsMobile } from "./useIsMobile";

interface AppLoadedProps {
  activeCourse: CourseConfig;
  courseId: CourseId;
  language: Language;
  activeView: StudyView;
  studyUxMode: StudyUxMode;
  onCourseId: (courseId: CourseId) => void;
  onLanguage: (language: Language) => void;
  onActiveView: (view: StudyView) => void;
  onStudyUxMode: (mode: StudyUxMode) => void;
}

export function AppLoaded(props: AppLoadedProps) {
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useAppTheme();
  const state = useAppCourseState(props);
  const { activeCourse, graph, progress } = state;

  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <AppHeader course={activeCourse} language={props.language} />
      <TopStudyControls
        language={props.language}
        importance={graph.filters.importance}
        theme={theme}
        onLanguage={props.onLanguage}
        onImportance={graph.setImportance}
        onToggleTheme={toggleTheme}
      />
      <MainStudyContent
        state={state}
        language={props.language}
        isMobile={isMobile}
        studyUxMode={props.studyUxMode}
        onLanguage={props.onLanguage}
        onActiveView={props.onActiveView}
        onStudyUxMode={props.onStudyUxMode}
        onOpenMap={() => setIsMapFullscreen(true)}
      />
      <AppOverlays
        activeView={props.activeView}
        course={activeCourse}
        progress={progress.progress}
        isMapFullscreen={isMapFullscreen}
        nodes={state.statusFlowNodes}
        edges={graph.flowEdges}
        selectedNode={graph.selectedNode}
        connectedNodes={graph.connectedNodes}
        language={props.language}
        nextNodeId={state.nextNodeId}
        onView={props.onActiveView}
        onCloseMap={() => setIsMapFullscreen(false)}
        onSelectNode={state.selectNode}
        onExportImage={state.exportGraph}
      />
    </main>
  );
}
