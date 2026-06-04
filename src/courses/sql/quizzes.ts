import type { QuizQuestion } from '../../features/knowledge-graph/data/quizQuestions';
import { sqlNodes } from './nodes';

const q = (item: typeof sqlNodes[number], index: number): QuizQuestion => ({
  id:`sql-q${index + 1}`,
  domain:'database',
  nodeId:item.id,
  difficulty: index % 3 === 0 ? 'hard' : 'basic',
  questionVi:`${item.labelVi} dùng để làm gì trong SQL?`,
  questionJa:`${item.labelEn} はSQLでどんな役割ですか？`,
  options:['Làm việc với dữ liệu quan hệ','Chỉ đổi màu UI','Chỉ deploy frontend','Không liên quan database'],
  answerIndex:0,
  explanationVi:`${item.labelVi} thuộc nhóm kiến thức SQL dùng để truy vấn, thiết kế hoặc bảo vệ dữ liệu.`,
  explanationJa:`${item.labelEn} はSQLでデータを扱うための概念です。`,
});

export const sqlQuizzes = sqlNodes.map(q);
