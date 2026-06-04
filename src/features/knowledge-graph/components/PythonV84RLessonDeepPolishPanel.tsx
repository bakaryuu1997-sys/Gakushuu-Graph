import { useMemo, useState } from 'react';
import { pythonV84RDeepPolishLessons, pythonV84RTrackOrder } from '../../../courses/python/v84rLessonDeepPolish';

export function PythonV84RLessonDeepPolishPanel({ onSelectNode }: { onSelectNode?: (nodeId: string) => void }) {
  const [track, setTrack] = useState<'all' | typeof pythonV84RTrackOrder[number]>('all');
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => pythonV84RDeepPolishLessons.filter((lesson) => {
    const matchesTrack = track === 'all' || lesson.track === track;
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || [lesson.titleVi, lesson.titleJa, lesson.track, lesson.practicalExample].join(' ').toLowerCase().includes(q);
    return matchesTrack && matchesQuery;
  }), [track, query]);
  return (
    <section className="rounded-[2rem] border border-purple-200 bg-purple-50/70 p-5 shadow-sm dark:border-purple-800 dark:bg-purple-950/20">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-purple-700">V84R Python lesson deep polish</p>
          <h3 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">OOP · file · exception · testing · decorator · FastAPI service layer</h3>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">Batch này bổ sung ví dụ code dài hơn, trace từng bước, edge case và checkpoint phỏng vấn để giảm cảm giác lesson generic trong Python catalog.</p>
        </div>
        <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-purple-700 shadow-sm dark:bg-slate-900">{filtered.length}/{pythonV84RDeepPolishLessons.length} lessons</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {(['all', ...pythonV84RTrackOrder] as const).map((item) => <button key={item} type="button" onClick={() => setTrack(item)} className={`rounded-full px-3 py-2 text-xs font-black ${track === item ? 'bg-purple-700 text-white' : 'bg-white text-purple-700 dark:bg-slate-900'}`}>{item}</button>)}
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search code / keyword" className="min-w-[220px] rounded-full border border-purple-100 bg-white px-4 py-2 text-xs font-bold outline-none focus:border-purple-400 dark:border-slate-700 dark:bg-slate-950" />
      </div>
      <div className="mt-4 grid gap-3 xl:grid-cols-2">
        {filtered.map((lesson) => <article key={lesson.id} className="rounded-3xl border border-white bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950">
          <div className="flex flex-wrap items-center justify-between gap-2"><p className="text-xs font-black uppercase tracking-[.16em] text-purple-600">{lesson.track}</p><button type="button" onClick={() => onSelectNode?.(lesson.nodeId)} className="rounded-full bg-purple-100 px-3 py-1 text-xs font-black text-purple-700 dark:bg-purple-950/40">Open lesson</button></div>
          <h4 className="mt-2 text-lg font-black">{lesson.titleVi}</h4><p className="text-sm font-bold text-slate-500">{lesson.titleJa}</p>
          <pre className="mt-3 max-h-64 overflow-auto rounded-2xl bg-slate-950 p-3 text-xs font-bold leading-6 text-purple-100">{lesson.practicalExample}</pre>
          <div className="mt-3 grid gap-2 md:grid-cols-2"><div className="rounded-2xl bg-slate-50 p-3 text-xs dark:bg-slate-900"><b>Trace VI</b><ul className="mt-2 list-disc pl-5">{lesson.traceVi.map((line) => <li key={line}>{line}</li>)}</ul></div><div className="rounded-2xl bg-slate-50 p-3 text-xs dark:bg-slate-900"><b>Trace JA</b><ul className="mt-2 list-disc pl-5">{lesson.traceJa.map((line) => <li key={line}>{line}</li>)}</ul></div></div>
          <p className="mt-3 rounded-2xl bg-amber-50 p-3 text-xs font-bold text-amber-900 dark:bg-amber-950/30 dark:text-amber-100">Edge cases: {lesson.edgeCases.join(' · ')}</p>
        </article>)}
      </div>
    </section>
  );
}
