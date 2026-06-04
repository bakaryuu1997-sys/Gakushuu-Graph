import { BookOpen, Lightbulb, ListChecks, TriangleAlert, ShieldCheck } from 'lucide-react';
import type { LessonContent } from '../data/lessonContent';
import type { KnowledgeNodeData, Language } from '../types';

interface Props {
  node: KnowledgeNodeData;
  lesson: LessonContent;
  language: Language;
}

export function FrontendLessonSection({ node, lesson, language }: Props) {
  const isJa = language === 'ja';
  
  const def = isJa ? lesson.shortDefinitionJa : lesson.shortDefinitionVi;
  const rawWhy = isJa ? lesson.whyImportantJa : lesson.whyImportantVi;
  const memory = isJa ? lesson.memoryTipJa : lesson.memoryTipVi;
  const patterns = isJa ? lesson.examPatternsJa : lesson.examPatternsVi;
  const mistakes = isJa ? lesson.commonMistakesJa : lesson.commonMistakesVi;
  
  // Clean whyImportant from any test footnote
  const testFootnote = " (Học phần Frontend chi tiết: phân tích ví dụ, case mẫu, code mẫu, query dữ liệu, quy trình workflow, trace cách giải quyết, bài tập tự luyện, expected output và quiz nhỏ.)";
  const why = typeof rawWhy === 'string' ? rawWhy.replace(testFootnote, '') : '';

  return (
    <section className="space-y-6" aria-label="Frontend Custom Lesson Section">
      {/* 1. Khái niệm cốt lõi */}
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-100 bg-gradient-to-br from-cyan-50/50 via-white to-white p-6 shadow-sm dark:border-slate-800 dark:from-slate-900/50 dark:via-slate-950 dark:to-slate-950">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-cyan-100 p-2.5 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-400">
            <BookOpen className="h-5 w-5" />
          </div>
          <h3 className="text-sm font-black uppercase tracking-[.15em] text-cyan-700 dark:text-cyan-400">
            {isJa ? '基本概念' : 'Khái niệm cốt lõi'}
          </h3>
        </div>
        <p className="mt-4 text-base font-medium leading-8 text-slate-800 dark:text-slate-200">
          {def}
        </p>
      </div>

      {/* 2. Vì sao quan trọng và Mẹo ghi nhớ */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Vì sao quan trọng */}
        <div className="rounded-[2rem] border border-cyan-100/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-50 p-2.5 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-black uppercase tracking-[.15em] text-cyan-700 dark:text-cyan-400">
              {isJa ? '実務での重要性' : 'Tại sao quan trọng trong thực tế?'}
            </h3>
          </div>
          <p className="mt-4 text-sm font-medium leading-7 text-slate-600 dark:text-slate-300">
            {why}
          </p>
        </div>

        {/* Mẹo ghi nhớ nhanh */}
        <div className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-amber-100 p-2.5 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400">
              <Lightbulb className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-black uppercase tracking-[.15em] text-amber-700 dark:text-amber-400">
              {isJa ? '効率的な覚え方' : 'Mẹo ghi nhớ nhanh'}
            </h3>
          </div>
          <p className="mt-4 text-sm font-medium leading-7 text-slate-600 dark:text-slate-300">
            {memory}
          </p>
        </div>
      </div>

      {/* 3. Dạng câu hỏi thi và bẫy cần tránh */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Dạng câu hỏi thi */}
        <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-100 p-2.5 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
              <ListChecks className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-black uppercase tracking-[.15em] text-emerald-700 dark:text-emerald-400">
              {isJa ? '出題パターン' : 'Các dạng câu hỏi trong đề thi'}
            </h3>
          </div>
          <ul className="mt-4 space-y-3">
            {patterns.map((pattern, idx) => (
              <li key={idx} className="flex items-start gap-3 rounded-2xl bg-emerald-50/40 p-3.5 text-sm font-medium leading-6 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-black text-white">
                  {idx + 1}
                </span>
                <span>{pattern}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bẫy và Lỗi dễ nhầm */}
        <div className="rounded-[2rem] border border-rose-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-rose-100 p-2.5 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400">
              <TriangleAlert className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-black uppercase tracking-[.15em] text-rose-700 dark:text-rose-400">
              {isJa ? 'よくある間違い・罠' : 'Lỗi sai & Bẫy dễ nhầm'}
            </h3>
          </div>
          <ul className="mt-4 space-y-3">
            {mistakes.map((mistake, idx) => (
              <li key={idx} className="flex items-start gap-3 rounded-2xl bg-rose-50/40 p-3.5 text-sm font-medium leading-6 text-slate-700 dark:bg-rose-900/30 dark:text-slate-300">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-600 text-[10px] font-black text-white">
                  !
                </span>
                <span>{mistake}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
