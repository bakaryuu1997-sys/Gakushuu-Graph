import type { CourseConfig } from '../../courses/types';

export const buildLearningPackMarkdown = (course: CourseConfig) => {
  const topNodes = course.nodes.filter((node) => node.importance === 'high').slice(0, 60);
  const glossary = course.nodes.filter((node) => node.reading).slice(0, 60);
  const quiz = course.quizzes.slice(0, 80);
  return [`# ${course.title} Learning Pack`, '', '## High-importance nodes',
    ...topNodes.map((node, index) => `${index + 1}. ${node.labelJa} / ${node.labelVi} / ${node.labelEn}`), '',
    '## Glossary sample', ...glossary.map((node) => `- ${node.labelJa}${node.reading ? `（${node.reading}）` : ''}: ${node.labelVi} / ${node.labelEn}`), '',
    '## Quiz review', ...quiz.map((item, index) => `${index + 1}. ${item.questionVi}\n   Answer: ${item.options[item.answerIndex]}\n   Explain: ${item.explanationVi}`)].join('\n');
};

export const buildGlossaryCsv = (course: CourseConfig) => {
  const rows = [['Japanese', 'Reading', 'Vietnamese', 'English', 'Importance']];
  course.nodes.filter((node) => node.reading || node.importance === 'high').slice(0, 200).forEach((node) => {
    rows.push([node.labelJa, node.reading ?? '', node.labelVi, node.labelEn, node.importance]);
  });
  return rows.map((row) => row.map((cell) => `"${cell.replaceAll('"', '""')}"`).join(',')).join('\n');
};

export const buildQuizReviewJson = (course: CourseConfig) => JSON.stringify(course.quizzes.map((quiz) => ({
  id: quiz.id,
  domain: quiz.domain,
  difficulty: quiz.difficulty,
  questionVi: quiz.questionVi,
  answer: quiz.options[quiz.answerIndex],
  explanationVi: quiz.explanationVi,
})), null, 2);
