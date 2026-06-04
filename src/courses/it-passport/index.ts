import type { CourseConfig } from '../types';
import { conceptComparisons } from '../../features/knowledge-graph/data/conceptComparisons';
import { knowledgeEdges, knowledgeNodes } from '../../features/knowledge-graph/data/itPassportGraph';
import { lessonContents } from '../../features/knowledge-graph/data/lessonContent';
import { quizQuestions } from '../../features/knowledge-graph/data/quizQuestions';
import { studyPathPhases } from '../../features/knowledge-graph/data/studyPath';

const sanitizeCourse = (course: CourseConfig): CourseConfig => {
  const nodeIds = new Set(course.nodes.map((node) => node.id));
  return {
    ...course,
    edges: course.edges.filter((edge) => nodeIds.has(edge.source) && nodeIds.has(edge.target)),
    quizzes: course.quizzes.filter((quiz) => nodeIds.has(quiz.nodeId)),
    studyPath: course.studyPath.map((phase) => ({ ...phase, nodeIds: phase.nodeIds.filter((nodeId) => nodeIds.has(nodeId)) })),
  };
};

export const itPassportCourse: CourseConfig = sanitizeCourse({
  id: 'it-passport',
  title: 'IT Passport',
  titleJa: 'ITパスポート',
  titleVi: 'IT Passport',
  subtitleVi: 'Course cũ: Strategy, Management, Technology và kiến thức IT nền tảng.',
  subtitleJa: '既存コース：ストラテジ、マネジメント、テクノロジの基礎です。',
  descriptionVi: 'Ôn IT Passport bằng graph study-first, phù hợp để nắm toàn cảnh kiến thức IT.',
  descriptionJa: 'ITパスポートの全体像を学ぶためのStudy-firstグラフです。',
  rootNodeId: 'it-passport',
  defaultNodeId: 'it-passport',
  languageSupport: ['vi', 'ja', 'en'],
  theme: { accentClass: 'text-indigo-600', darkPanelClass: 'bg-slate-950', progressClass: 'bg-cyan-400' },
  nodes: knowledgeNodes,
  edges: knowledgeEdges,
  lessons: lessonContents,
  quizzes: quizQuestions,
  studyPath: studyPathPhases,
  comparePairs: conceptComparisons,
});
