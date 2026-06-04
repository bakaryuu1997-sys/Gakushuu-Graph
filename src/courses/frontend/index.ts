import type { CourseConfig } from '../types';
import { frontendEdges } from './edges';
import { frontendLessons } from './lessons';
import { frontendNodes } from './nodes';
import { frontendQuizzes } from './quizzes';
import { frontendStudyPath } from './studyPath';

export const frontendCourse: CourseConfig = {
  id:'frontend',
  title:'Frontend Roadmap',
  titleJa:'Frontend Roadmap',
  titleVi:'Frontend Roadmap',
  subtitleVi:'Học HTML, CSS, JavaScript, TypeScript, React, API, testing, performance và deploy theo graph.',
  subtitleJa:'HTML、CSS、JavaScript、TypeScript、React、API、Testing、Performance、Deployを学びます。',
  descriptionVi:'Course Frontend thực tế để học từ nền tảng đến React app có test và deploy.',
  descriptionJa:'基礎からReactアプリ、テスト、デプロイまで学ぶFrontendコースです。',
  rootNodeId:'frontend',
  defaultNodeId:'frontend',
  languageSupport:['vi','ja','en'],
  theme: { accentClass:'text-orange-600', darkPanelClass:'bg-slate-950', progressClass:'bg-orange-400' },
  nodes: frontendNodes,
  edges: frontendEdges,
  lessons: frontendLessons,
  quizzes: frontendQuizzes,
  studyPath: frontendStudyPath,
  comparePairs: [],
};
