import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Code2, GraduationCap, Search, Target, TriangleAlert } from 'lucide-react';
import type { PythonV100DeepChapter, PythonV100Track } from '../../../courses/python/v100rDeepChapterPack';

const trackLabels: Record<PythonV100Track | 'all', string> = {
  all: 'All',
  foundation: 'Foundation',
  collections: 'Collections',
  functions: 'Functions',
  oop: 'OOP',
  files: 'Files',
  'errors-testing': 'Errors/Test',
  algorithms: 'Algorithms',
  fastapi: 'FastAPI',
  projects: 'Projects',
};

const trackOrder: (PythonV100Track | 'all')[] = ['all', 'foundation', 'collections', 'functions', 'oop', 'algorithms', 'files', 'errors-testing', 'fastapi', 'projects'];

function V114ChapterDataLoading() {
  return (
    <section className="rounded-[2rem] border border-emerald-200 bg-white p-5 text-sm font-bold text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300" aria-label="V114 V100 chapter data lazy loading">
      V100R Python Deep Chapter Pack · Khi nào dùng · Mental model · Đang tải V100R Python deep chapters theo lazy data split...
    </section>
  );
}

export function PythonV100RDeepChapterPanel({ onSelectNode }: { onSelectNode?: (nodeId: string) => void }) {
  const [track, setTrack] = useState<PythonV100Track | 'all'>('all');
  const [query, setQuery] = useState('');
  const [allChapters, setAllChapters] = useState<PythonV100DeepChapter[]>([]);
  const normalizedQuery = query.trim().toLowerCase();

  useEffect(() => {
    let active = true;
    import('../../../courses/python/v100rDeepChapterPack').then((module) => {
      if (active) setAllChapters(module.pythonV100DeepChapters);
    });
    return () => { active = false; };
  }, []);

  const chapters = useMemo(() => allChapters.filter((chapter) => {
    const trackMatch = track === 'all' || chapter.track === track;
    const queryMatch = !normalizedQuery || `${chapter.titleVi} ${chapter.conceptVi} ${chapter.code} ${chapter.exerciseVi} ${chapter.commonMistakesVi.join(' ')}`.toLowerCase().includes(normalizedQuery);
    return trackMatch && queryMatch;
  }), [allChapters, normalizedQuery, track]);

  if (!allChapters.length) return <V114ChapterDataLoading />;

  return (
    <section className="rounded-[2rem] border border-emerald-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950" aria-label="V100R Python deep chapter pack">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.22em] text-emerald-600 dark:text-emerald-300"><GraduationCap className="h-4 w-4" /> V100R Python Deep Chapter Pack</p>
          <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">Bài học Python thật: khái niệm → code → trace → bài tập → expected output → quiz</h2>
          <p className="mt-2 text-sm font-bold leading-6 text-slate-600 dark:text-slate-300">V114R tách data chapter này bằng dynamic import bên trong panel, nên chỉ tải khi người học thật sự mở tab Python.</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-200">{chapters.length}/{allChapters.length} chapters</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {trackOrder.map((item) => <button key={item} type="button" onClick={() => setTrack(item)} className={`rounded-full px-3 py-2 text-xs font-black ${track === item ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700 dark:bg-slate-900 dark:text-emerald-200'}`}>{trackLabels[item]}</button>)}
        <label className="flex min-w-[240px] flex-1 items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 text-xs font-bold dark:border-slate-700 dark:bg-slate-900"><Search className="h-4 w-4" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search chapter / code / mistake" className="w-full bg-transparent outline-none" /></label>
      </div>
      <div className="mt-5 grid gap-4 xl:grid-cols-2">
        {chapters.map((chapter) => <article key={chapter.id} className="rounded-3xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900"><div className="flex flex-wrap items-center justify-between gap-2"><p className="text-xs font-black uppercase tracking-[.16em] text-emerald-600 dark:text-emerald-300">{chapter.track}</p><button type="button" onClick={() => onSelectNode?.(chapter.nodeMatchers[0])} className="rounded-full bg-white px-3 py-1 text-xs font-black text-emerald-700 shadow-sm dark:bg-slate-950">Open node</button></div><h3 className="mt-2 text-lg font-black text-slate-950 dark:text-white">{chapter.titleVi}</h3><p className="mt-2 text-sm font-bold leading-6 text-slate-600 dark:text-slate-300">{chapter.conceptVi}</p><CodeBlock title="Code mẫu" code={chapter.code} /><InfoCard icon={<Target className="h-4 w-4" />} title="Trace" items={chapter.traceVi} /><InfoCard icon={<TriangleAlert className="h-4 w-4" />} title="Lỗi hay gặp" items={chapter.commonMistakesVi} /><p className="mt-3 rounded-2xl bg-white p-3 text-xs font-bold text-slate-700 dark:bg-slate-950 dark:text-slate-200">Bài tập: {chapter.exerciseVi}<br />Expected: {chapter.expectedOutput}</p></article>)}
      </div>
    </section>
  );
}

function CodeBlock({ title, code }: { title: string; code: string }) {
  return <div className="mt-3"><p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.16em] text-slate-500"><Code2 className="h-4 w-4" /> {title}</p><pre className="mt-2 max-h-60 overflow-auto whitespace-pre-wrap rounded-2xl bg-slate-950 p-3 text-xs leading-6 text-emerald-100">{code}</pre></div>;
}

function InfoCard({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) {
  return <div className="mt-3 rounded-2xl bg-white p-3 text-xs font-bold text-slate-600 dark:bg-slate-950 dark:text-slate-300"><p className="flex items-center gap-2 font-black text-slate-900 dark:text-white">{icon}{title}</p><ul className="mt-2 list-disc space-y-1 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}
