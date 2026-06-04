import type { QuizQuestion } from '../../features/knowledge-graph/data/quizQuestions';
import { brseNodes } from './nodes';

const q = (item: typeof brseNodes[number], index: number): QuizQuestion => ({
  id:`brse-q${index + 1}`,
  domain:'management',
  nodeId:item.id,
  difficulty: index % 4 === 0 ? 'hard' : 'basic',
  questionVi:`Trong công việc BrSE, ${item.labelVi} quan trọng nhất ở điểm nào?`,
  questionJa:`BrSE業務で${item.labelJa}が重要な理由は何ですか？`,
  options:['Làm rõ thông tin và giảm nhận thức sai','Chỉ để trang trí tài liệu','Chỉ dành cho lập trình viên backend','Không liên quan giao tiếp dự án'],
  answerIndex:0,
  explanationVi:`${item.labelVi} giúp BrSE kết nối yêu cầu, thiết kế, tiến độ và rủi ro giữa các bên.`,
  explanationJa:`${item.labelJa} は関係者間の認識齟齬を減らすために重要です。`,
});

export const brseQuizzes = brseNodes.map(q);
