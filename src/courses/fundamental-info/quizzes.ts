import type { QuizQuestion } from '../../features/knowledge-graph/data/quizQuestions';
import { fundamentalInfoCatalog } from './catalog';

const domainFor = (category: string): QuizQuestion['domain'] => {
  if (category === 'database') return 'database';
  if (category === 'network') return 'network';
  if (category === 'security') return 'security';
  if (category === 'management') return 'management';
  if (category === 'business') return 'strategy';
  return 'technology';
};

export const fundamentalInfoQuizzes: QuizQuestion[] = fundamentalInfoCatalog.map((item, index) => ({
  id: `fe-q-${item.id}`,
  domain: domainFor(item.category),
  nodeId: item.id,
  difficulty: item.importance === 'high' ? (index % 3 === 0 ? 'hard' : 'standard') : 'basic',
  questionVi: `Trong 基本情報, khi gặp chủ đề “${item.labelJa}”, cách học/giải đúng nhất là gì?`,
  questionJa: `基本情報で「${item.labelJa}」が出たとき、最も適切な考え方はどれですか。`,
  options: [
    item.examPatternsVi[0],
    'Chỉ học thuộc tên thuật ngữ tiếng Nhật, không cần ví dụ.',
    'Bỏ qua vì 基本情報 chỉ hỏi lý thuyết quản lý.',
    'Chọn đáp án dài nhất mà không cần đọc điều kiện đề.',
  ],
  optionsJa: [
    item.examPatternsJa[0],
    '用語名だけ暗記し、例や使い方は確認しない。',
    '基本情報では出ないので無視する。',
    '条件を読まずに一番長い選択肢を選ぶ。',
  ],
  answerIndex: 0,
  explanationVi: `${item.labelJa}: ${item.whyImportantVi} Bẫy thường gặp: ${item.commonMistakesVi[0]}`,
  explanationJa: `${item.labelJa}: ${item.whyImportantJa} 注意点: ${item.commonMistakesJa[0]}`,
}));
