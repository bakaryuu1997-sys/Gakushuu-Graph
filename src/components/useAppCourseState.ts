import { useMemo } from "react";
import type { CourseConfig, CourseId } from "../courses/types";
import { courseSummaries } from "../courses/courseLoader";
import type { Language, ProgressState } from "../features/knowledge-graph/types";
import type { StudyView } from "../features/knowledge-graph/components/StudyNavigation";
import { useKnowledgeGraph } from "../features/knowledge-graph/hooks/useKnowledgeGraph";
import { useProgress } from "../features/knowledge-graph/hooks/useProgress";
import { exportProgressJson } from "../features/exporters/exportUtils";
import { useGraphExport } from "./useGraphExport";
import { useNodeList } from "./useNodeList";

interface UseAppCourseStateArgs {
  activeCourse: CourseConfig;
  courseId: CourseId;
  activeView: StudyView;
  onCourseId: (courseId: CourseId) => void;
  onActiveView: (view: StudyView) => void;
}

export function useAppCourseState({
  activeCourse,
  courseId,
  activeView,
  onCourseId,
  onActiveView,
}: UseAppCourseStateArgs) {
  const graph = useKnowledgeGraph(activeCourse);
  const progress = useProgress(activeCourse.id, activeCourse.nodes);
  const favoriteNodes = useNodeList(progress.progress.favorites, graph.allNodes);
  const recentNodes = useNodeList(progress.progress.recent, graph.allNodes);
  const exportGraph = useGraphExport(activeCourse.id);
  const isGraphMode = activeView === "graph";

  const orderedNodeIds = useMemo(
    () => activeCourse.studyPath.flatMap((phase) => phase.nodeIds),
    [activeCourse.studyPath],
  );

  const statusFlowNodes = useMemo(
    () => graph.flowNodes.map((node) => ({
      ...node,
      data: {
        ...node.data,
        studyStatus: progress.progress.statuses[node.id] ?? "new",
      },
    })),
    [graph.flowNodes, progress.progress.statuses],
  );

  const nextNodeId = useMemo(
    () => orderedNodeIds
      .slice(Math.max(0, orderedNodeIds.indexOf(graph.selectedNode.id)) + 1)
      .find((id) => progress.progress.statuses[id] !== "mastered"),
    [graph.selectedNode.id, orderedNodeIds, progress.progress.statuses],
  );

  const selectNode = (nodeId: string) => {
    graph.setSelectedId(nodeId);
    progress.pushRecent(nodeId);
  };

  const markMasteredAndNext = () => {
    progress.markMastered(graph.selectedNode.id);
    const index = orderedNodeIds.indexOf(graph.selectedNode.id);
    const nextId = orderedNodeIds
      .slice(index + 1)
      .find((id) => progress.progress.statuses[id] !== "mastered") ?? orderedNodeIds[index + 1];
    if (nextId) selectNode(nextId);
  };

  const handleCourseChange = (nextCourseId: CourseId) => {
    onCourseId(nextCourseId);
    onActiveView("start");
  };

  const exportProgress = () => exportProgressJson(activeCourse.id, progress.progress);

  const importProgress = async (file: File) => {
    const parsed = JSON.parse(await file.text()) as ProgressState | { progress?: ProgressState };
    progress.importProgress("progress" in parsed && parsed.progress ? parsed.progress : (parsed as ProgressState));
  };

  return {
    activeCourse,
    activeView,
    courseId,
    courses: courseSummaries,
    graph,
    progress,
    favoriteNodes,
    recentNodes,
    isGraphMode,
    statusFlowNodes,
    nextNodeId,
    selectNode,
    markMasteredAndNext,
    handleCourseChange,
    exportProgress,
    importProgress,
    exportGraph,
  };
}

export type AppCourseState = ReturnType<typeof useAppCourseState>;
