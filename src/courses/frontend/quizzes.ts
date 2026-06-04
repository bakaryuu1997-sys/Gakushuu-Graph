import type { QuizQuestion } from '../../features/knowledge-graph/data/quizQuestions';
import { frontendNodes } from './nodes';

const q = (item: typeof frontendNodes[number], index: number): QuizQuestion => ({
  id:`fe-q${index + 1}`,
  domain:'technology',
  nodeId:item.id,
  difficulty: index % 3 === 0 ? 'hard' : 'basic',
  questionVi:`${item.labelVi} dùng để làm gì trong frontend roadmap?`,
  questionJa:`${item.labelEn} はFrontend roadmapでどんな役割ですか？`,
  options:['Vai trò chính trong frontend','Chỉ dùng cho database','Chỉ dùng cho server vật lý','Không liên quan web'],
  answerIndex:0,
  explanationVi:`${item.labelVi} là một phần của luồng học frontend từ nền tảng đến project thật.`,
  explanationJa:`${item.labelEn} はFrontend学習フローの一部です。`,
});

export const frontendQuizzes = frontendNodes.map(q);
