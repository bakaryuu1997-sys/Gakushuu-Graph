import { BrainCircuit, Sparkles } from 'lucide-react';
import type { CourseConfig } from '../courses/courseRegistry';
import type { Language } from '../features/knowledge-graph/types';
import { getCourseSubtitle, getCourseTitle } from '../features/knowledge-graph/utils/i18n';

interface Props {
  course: CourseConfig;
  language: Language;
}

export function AppHeader({ course, language }: Props) {
  const title = getCourseTitle(course, language);
  const subtitle = getCourseSubtitle(course, language);

  return (
    <header className="mx-auto flex w-full max-w-[1800px] flex-col gap-5 px-4 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-6">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-glow">
          <BrainCircuit className="h-7 w-7" />
        </div>
        <div>
          <p className={`flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] ${course.theme.accentClass}`}><Sparkles className="h-3.5 w-3.5" /> Vibe Study Atlas</p>
          <h1 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white md:text-4xl">{title}</h1>
          <p className="mt-1 max-w-3xl text-sm text-slate-600 dark:text-slate-300 md:text-base">{subtitle}</p>
        </div>
      </div>
      <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm font-bold text-slate-700 shadow-soft backdrop-blur-md dark:border-slate-700 dark:bg-slate-950/75 dark:text-slate-200">
        Multi-course · React Flow · Local progress
      </div>
    </header>
  );
}
