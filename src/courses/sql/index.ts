import type { CourseConfig } from '../types';
import { sqlEdges } from './edges';
import { sqlLessons } from './lessons';
import { sqlNodes } from './nodes';
import { sqlQuizzes } from './quizzes';
import { sqlStudyPath } from './studyPath';

export const sqlCourse: CourseConfig = {
  id:'sql',
  title:'SQL Roadmap',
  titleJa:'SQL Roadmap',
  titleVi:'SQL Roadmap',
  subtitleVi:'Học SELECT, WHERE, JOIN, GROUP BY, INSERT/UPDATE/DELETE, transaction và bảo mật SQL.',
  subtitleJa:'SELECT、WHERE、JOIN、GROUP BY、DML、transaction、SQL securityを学びます。',
  descriptionVi:'Course SQL thực tế cho BrSE, backend và data analysis.',
  descriptionJa:'BrSE、backend、data analysis向けのSQLコースです。',
  rootNodeId:'sql',
  defaultNodeId:'sql',
  languageSupport:['vi','ja','en'],
  theme: { accentClass:'text-sky-600', darkPanelClass:'bg-slate-950', progressClass:'bg-sky-400' },
  nodes: sqlNodes,
  edges: sqlEdges,
  lessons: sqlLessons,
  quizzes: sqlQuizzes,
  studyPath: sqlStudyPath,
  comparePairs: [],
};
