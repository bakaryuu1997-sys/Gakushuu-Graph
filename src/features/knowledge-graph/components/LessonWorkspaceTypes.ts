import type { ConceptComparison } from "../data/conceptComparisons";
import type { LessonContent } from "../data/lessonContent";
import type { QuizQuestion } from "../data/quizQuestions";
import type { StudyPathPhase } from "../data/studyPath";
import type { KnowledgeNodeData, Language, StudyStatus } from "../types";
import type { StudyView } from "./StudyNavigation";
import type { CourseId } from "../../../courses/types";

export interface StudyStats {
  total: number;
  mastered: number;
  learning: number;
  needReview: number;
  fresh: number;
  favorites: number;
}

export interface LessonWorkspaceProps {
  activeView: StudyView;
  nodes: KnowledgeNodeData[];
  selectedNode: KnowledgeNodeData;
  connectedNodes: KnowledgeNodeData[];
  favorites: KnowledgeNodeData[];
  recent: KnowledgeNodeData[];
  statuses: Record<string, StudyStatus>;
  stats: StudyStats;
  language: Language;
  lessons: LessonContent[];
  quizzes: QuizQuestion[];
  studyPath: StudyPathPhase[];
  comparePairs: ConceptComparison[];
  courseTitle: string;
  courseId?: CourseId;
  isFavorite: boolean;
  onSelectNode: (nodeId: string) => void;
  onToggleStatus: () => void;
  onMasterNext: () => void;
  onNeedReview: () => void;
  onSetStatus: (status: StudyStatus) => void;
  onToggleFavorite: () => void;
  onExportProgress?: () => void;
  onImportProgress?: (file: File) => Promise<void>;
  onResetProgress?: () => void;
  onView?: (view: StudyView) => void;
}
