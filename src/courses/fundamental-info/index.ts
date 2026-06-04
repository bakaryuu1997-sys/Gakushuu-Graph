import type { CourseConfig } from '../types';
import { fundamentalInfoEdges } from './edges';
import { fundamentalInfoLessons } from './lessons';
import { fundamentalInfoNodes } from './nodes';
import { fundamentalInfoQuizzes } from './quizzes';
import { fundamentalInfoStudyPath } from './studyPath';

export const fundamentalInfoCourse:CourseConfig={
  id:'fundamental-info',
  title:'基本情報 Roadmap',
  titleJa:'基本情報技術者',
  titleVi:'基本情報',
  subtitleVi:'Course riêng cho 基本情報: algorithm, programming, DB, network, security, system development.',
  subtitleJa:'基本情報向け：アルゴリズム、programming、DB、network、security、system development。',
  descriptionVi:'Không thay IT Passport. 基本情報 là level khác nên được tách thành course riêng để học sâu hơn.',
  descriptionJa:'ITパスポートとは別コースとして、より深く学習します。',
  rootNodeId:'fundamental-info',
  defaultNodeId:'fundamental-info',
  languageSupport:['vi','ja','en'],
  theme:{accentClass:'text-blue-600',darkPanelClass:'bg-slate-950',progressClass:'bg-blue-400'},
  nodes:fundamentalInfoNodes,edges:fundamentalInfoEdges,lessons:fundamentalInfoLessons,quizzes:fundamentalInfoQuizzes,studyPath:fundamentalInfoStudyPath,comparePairs:[],
};
