import type { CourseConfig } from '../types';
import { pythonEdges } from './edges';
import { pythonLessons } from './lessons';
import { pythonNodes } from './nodes';
import { pythonQuizzes } from './quizzes';
import { pythonStudyPath } from './studyPath';

export const pythonCourse: CourseConfig = {
  id: 'python', title: 'Python Roadmap', titleJa: 'Python Roadmap', titleVi: 'Python Roadmap',
  subtitleVi: 'Học Python từ cơ bản đến thuật toán, OOP và FastAPI cho AI/API local.',
  subtitleJa: 'Python基礎からアルゴリズム、OOP、FastAPIによるAI/APIまで学びます。',
  descriptionVi: 'Course Python local-only: lesson song ngữ, code lab, bài test, thuật toán và FastAPI-only.',
  descriptionJa: 'local-onlyのPython courseです。二言語lesson、code lab、test、algorithm、FastAPIに集中します。',
  rootNodeId: 'python-roadmap', defaultNodeId: 'python-roadmap', languageSupport: ['vi','ja','en'],
  theme: { accentClass: 'text-emerald-600', darkPanelClass: 'bg-slate-950', progressClass: 'bg-emerald-400' },
  nodes: pythonNodes, edges: pythonEdges, lessons: pythonLessons, quizzes: pythonQuizzes, studyPath: pythonStudyPath, comparePairs: [],
};

export { pythonCodeExercises } from './codeExercises';

export { pythonAlgorithmVisualPatterns } from './algorithmVisualPatterns';

export { pythonV78RDeepExamples, findPythonV78RExampleForNode } from './v78rDeepExamples';

export { pythonV78RFastApiBlueprints } from './v78rFastApiBlueprints';

export { pythonV78RCodeExercises } from './v78rCodeExercises';

