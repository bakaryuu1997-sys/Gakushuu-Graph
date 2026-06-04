import type { LessonContent } from '../data/lessonContent';
import type { KnowledgeNodeData, Language } from '../types';
import { getLessonMistakes, getLessonPatterns } from '../utils/i18n';

interface Props {
  node: KnowledgeNodeData;
  lesson?: LessonContent;
  language: Language;
}

const splitKeywords = (node: KnowledgeNodeData) => node.keywords.slice(0, 6);
const isDeep = (lesson?: LessonContent) => (lesson?.shortDefinitionVi.length ?? 0) > 80 && (lesson?.whyImportantVi.length ?? 0) > 80;

export function LessonDepthCard({ node, lesson, language }: Props) {
  const patterns = lesson ? getLessonPatterns(lesson, language) : [];
  const mistakes = lesson ? getLessonMistakes(lesson, language) : [];
  return <section className="mt-4 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <p className="text-xs font-black uppercase tracking-[.16em] text-slate-400">Deep study checklist</p>
      <span className={`rounded-full px-3 py-1 text-xs font-black ${isDeep(lesson) ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{isDeep(lesson) ? 'deep lesson' : 'needs review'}</span>
    </div>
    <div className="grid gap-3 md:grid-cols-3">
      <div className="rounded-2xl bg-slate-50 p-3"><p className="text-xs font-black text-slate-500">1. Định nghĩa</p><p className="mt-1 text-sm leading-6 text-slate-700">Tự giải thích được {node.labelJa} bằng tiếng Việt và ví dụ thực tế.</p></div>
      <div className="rounded-2xl bg-indigo-50 p-3"><p className="text-xs font-black text-indigo-600">2. Bẫy đề thi</p><p className="mt-1 text-sm leading-6 text-indigo-950">{mistakes[0] ?? 'So sánh với khái niệm dễ nhầm.'}</p></div>
      <div className="rounded-2xl bg-emerald-50 p-3"><p className="text-xs font-black text-emerald-600">3. Cách hỏi</p><p className="mt-1 text-sm leading-6 text-emerald-950">{patterns[0] ?? 'Áp dụng trong tình huống business.'}</p></div>
    </div>
    <div className="flex flex-wrap gap-2">{splitKeywords(node).map((keyword) => <span key={keyword} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{keyword}</span>)}</div>
  </section>;
}
