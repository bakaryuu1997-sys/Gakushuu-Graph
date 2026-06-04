import type { QuizQuestion } from '../../features/knowledge-graph/data/quizQuestions';
import { pythonCatalog } from './catalog';

const domainFor = (phase: string): QuizQuestion['domain'] => {
  if (phase === 'fastapi') return 'business';
  if (phase === 'algorithm') return 'technology';
  return 'technology';
};

export const pythonQuizzes: QuizQuestion[] = pythonCatalog.map((item, index) => ({
  id: `py-q-${item.id}`, domain: domainFor(item.phase), nodeId: item.id,
  difficulty: item.importance === 'high' ? (index % 4 === 0 ? 'hard' : 'standard') : 'basic',
  questionVi: `Khi học “${item.labelVi}”, cách học nào đúng nhất?`,
  questionJa: `「${item.labelJa}」を学ぶとき、最も適切な方法はどれですか。`,
  options: [item.examPatternsVi[0], 'Chỉ đọc lý thuyết, không cần viết code.', 'Chỉ copy solution, không chạy test.', 'Bỏ qua edge case vì ít gặp.'],
  optionsJa: [item.examPatternsJa[0], '理論だけ読み、codeを書かない。', '解答だけcopyし、testしない。', '境界値はほとんど出ないので無視する。'],
  answerIndex: 0,
  explanationVi: `${item.labelVi}: ${item.whyImportantVi} Lỗi hay gặp: ${item.commonMistakesVi[0]}`,
  explanationJa: `${item.labelJa}: ${item.whyImportantJa} 注意: ${item.commonMistakesJa[0]}`,
}));
