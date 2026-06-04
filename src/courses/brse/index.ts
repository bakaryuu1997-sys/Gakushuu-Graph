import type { CourseConfig } from '../types';
import { brseEdges } from './edges';
import { brseLessons } from './lessons';
import { brseNodes } from './nodes';
import { brseQuizzes } from './quizzes';
import { brseStudyPath } from './studyPath';

export const brseCourse: CourseConfig = {
  id:'brse',
  title:'BrSE Roadmap',
  titleJa:'BrSE Roadmap',
  titleVi:'BrSE Roadmap',
  subtitleVi:'Học 要件定義, 基本設計, 詳細設計, テスト, 議事録, 仕様変更 và 進捗管理.',
  subtitleJa:'要件定義、基本設計、詳細設計、テスト、議事録、仕様変更、進捗管理を学びます。',
  descriptionVi:'Course BrSE riêng để học kỹ năng cầu nối Nhật-Việt trong dự án phần mềm.',
  descriptionJa:'日本側と開発チームを橋渡しするBrSE向けコースです。',
  rootNodeId:'brse',
  defaultNodeId:'brse',
  languageSupport:['vi','ja','en'],
  theme: { accentClass:'text-emerald-600', darkPanelClass:'bg-slate-950', progressClass:'bg-emerald-400' },
  nodes: brseNodes,
  edges: brseEdges,
  lessons: brseLessons,
  quizzes: brseQuizzes,
  studyPath: brseStudyPath,
  comparePairs: [],
};
