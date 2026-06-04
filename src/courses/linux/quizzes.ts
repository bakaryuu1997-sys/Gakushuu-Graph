import type { QuizQuestion } from '../../features/knowledge-graph/data/quizQuestions';
import { linuxNodes } from './nodes';
const q=(item:typeof linuxNodes[number],index:number):QuizQuestion=>({
  id:`linux-q${index+1}`,domain:'technology',nodeId:item.id,difficulty:index%4===0?'hard':'basic',
  questionVi:`${item.labelVi} thường dùng để làm gì trong terminal?`,questionJa:`${item.labelEn} はterminalで何に使いますか？`,
  options:['Thao tác/kiểm tra trong môi trường Linux','Chỉ để thiết kế UI','Chỉ dành cho SQL JOIN','Không liên quan dự án'],
  answerIndex:0,explanationVi:`${item.labelVi} là một phần của workflow terminal khi làm dự án thật.`,explanationJa:`${item.labelEn} はterminal workflowの一部です。`,
});
export const linuxQuizzes=linuxNodes.map(q);
