import type { KnowledgeNodeData } from '../features/knowledge-graph/types';

export interface EasyDeepLesson {
  id: string;
  courseLabel: string;
  titleVi: string;
  goalVi: string;
  bigIdeaVi: string;
  explainVi: string[];
  analogyVi: string;
  sampleTitleVi: string;
  sampleBody: string;
  traceVi: string[];
  practiceVi: string;
  expectedOutput: string;
  quizQuestionVi: string;
  quizAnswerVi: string;
  commonMisunderstandingVi: string;
  examReadyVi: string;
}

export const nodeText = (node: Pick<KnowledgeNodeData, 'id' | 'labelVi' | 'labelEn' | 'labelJa' | 'keywords'>) =>
  `${node.id} ${node.labelVi} ${node.labelEn} ${node.labelJa} ${node.keywords.join(' ')}`.toLowerCase();

export const nodeTitle = (node: Pick<KnowledgeNodeData, 'id' | 'labelVi' | 'labelEn' | 'labelJa'>) =>
  node.labelVi || node.labelEn || node.labelJa || node.id;
