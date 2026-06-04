import { lazy, Suspense } from "react";
import type { Edge, Node } from "@xyflow/react";
import type { CourseConfig } from "../courses/types";
import type {
  KnowledgeNodeData,
  Language,
  ProgressState,
} from "../features/knowledge-graph/types";
import { LearningPackExporter } from "./LearningPackExporter";
import { MobileBottomTabs } from "./MobileBottomTabs";
import { LoadingPanel } from "./MobileGraphFallback";
import type { StudyView } from "../features/knowledge-graph/components/StudyNavigation";

const FullscreenMap = lazy(() =>
  import("./map/FullscreenMap").then((module) => ({
    default: module.FullscreenMap,
  })),
);

interface Props {
  activeView: StudyView;
  course: CourseConfig;
  progress: ProgressState;
  isMapFullscreen: boolean;
  nodes: Node[];
  edges: Edge[];
  selectedNode: KnowledgeNodeData;
  connectedNodes: KnowledgeNodeData[];
  language: Language;
  nextNodeId?: string;
  onView: (view: StudyView) => void;
  onCloseMap: () => void;
  onSelectNode: (nodeId: string) => void;
  onExportImage: () => void;
}

export function AppOverlays(props: Props) {
  return (
    <>
      <div className="fixed bottom-24 right-4 z-40 hidden md:block">
        <LearningPackExporter course={props.course} progress={props.progress} />
      </div>
      <MobileBottomTabs activeView={props.activeView} onView={props.onView} />
      {props.isMapFullscreen && (
        <Suspense
          fallback={<LoadingPanel label="Đang tải fullscreen map..." />}
        >
          <FullscreenMap
            nodes={props.nodes}
            edges={props.edges}
            selectedNode={props.selectedNode}
            connectedNodes={props.connectedNodes}
            language={props.language}
            courseTitle={props.course.title}
            studyPath={props.course.studyPath}
            nextNodeId={props.nextNodeId}
            onExportImage={props.onExportImage}
            onClose={props.onCloseMap}
            onSelectNode={props.onSelectNode}
          />
        </Suspense>
      )}
    </>
  );
}
