import type { ConceptComparison } from '../features/knowledge-graph/data/conceptComparisons';
import type { LessonContent } from '../features/knowledge-graph/data/lessonContent';
import type { QuizQuestion } from '../features/knowledge-graph/data/quizQuestions';
import type { StudyPathPhase } from '../features/knowledge-graph/data/studyPath';
import type { KnowledgeEdgeData, KnowledgeNodeData, Language } from '../features/knowledge-graph/types';

export type CourseId = 'ai-passport' | 'fundamental-info' | 'python' | 'it-passport' | 'frontend' | 'sql' | 'brse' | 'linux';

export interface CourseTheme {
  accentClass: string;
  darkPanelClass: string;
  progressClass: string;
}

export interface CourseConfig {
  id: CourseId;
  title: string;
  titleJa: string;
  titleVi: string;
  subtitleVi: string;
  subtitleJa: string;
  descriptionVi: string;
  descriptionJa: string;
  rootNodeId: string;
  defaultNodeId: string;
  languageSupport: Language[];
  theme: CourseTheme;
  nodes: KnowledgeNodeData[];
  edges: KnowledgeEdgeData[];
  lessons: LessonContent[];
  quizzes: QuizQuestion[];
  studyPath: StudyPathPhase[];
  comparePairs: ConceptComparison[];
}
