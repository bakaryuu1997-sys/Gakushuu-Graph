import type { CourseConfig } from '../types';
import { linuxEdges } from './edges';
import { linuxLessons } from './lessons';
import { linuxNodes } from './nodes';
import { linuxQuizzes } from './quizzes';
import { linuxStudyPath } from './studyPath';

export const linuxCourse:CourseConfig={
  id:'linux',
  title:'Linux / Terminal Roadmap',
  titleJa:'Linux / Terminal Roadmap',
  titleVi:'Linux / Terminal Roadmap',
  subtitleVi:'Học pwd, ls, cd, grep, find, chmod, ps, kill, systemctl, docker, git.',
  subtitleJa:'pwd、ls、cd、grep、find、chmod、ps、kill、systemctl、docker、gitを学びます。',
  descriptionVi:'Course Linux/Terminal riêng cho dev, BrSE, deploy và debug dự án.',
  descriptionJa:'dev、BrSE、deploy、debug向けのLinux/Terminalコースです。',
  rootNodeId:'linux',
  defaultNodeId:'linux',
  languageSupport:['vi','ja','en'],
  theme:{accentClass:'text-zinc-600',darkPanelClass:'bg-slate-950',progressClass:'bg-zinc-400'},
  nodes:linuxNodes,edges:linuxEdges,lessons:linuxLessons,quizzes:linuxQuizzes,studyPath:linuxStudyPath,comparePairs:[],
};
