import { useMemo, useState } from 'react';
import { pythonV94RAdvancedTopics, pythonV94RTrackOrder, type PythonV94RAdvancedTopic } from '../../../courses/python/v94rAdvancedPython';

const trackLabels: Record<PythonV94RAdvancedTopic['track'], string> = {
  typing: 'typing',
  dataclass: 'dataclass',
  pathlib: 'pathlib',
  logging: 'logging',
  'pytest-fixture': 'pytest fixtures',
  'fastapi-di': 'FastAPI DI',
};

export function PythonV94RAdvancedPanel({ onSelectNode }: { onSelectNode?: (nodeId: string) => void }) {
  const [track, setTrack] = useState<'all' | PythonV94RAdvancedTopic['track']>('all');
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return pythonV94RAdvancedTopics.filter((topic) => {
      const matchesTrack = track === 'all' || topic.track === track;
      const haystack = [topic.titleVi, topic.titleJa, topic.goalVi, topic.goalJa, topic.code, topic.practicePromptVi, topic.practicePromptJa, topic.pitfalls.join(' ')].join(' ').toLowerCase();
      return matchesTrack && (!q || haystack.includes(q));
    });
  }, [query, track]);

  return (
    <section className="rounded-3xl border border-sky-100 bg-white/95 p-5 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-500">V94R Python Advanced Batch</p>
          <h2 className="mt-1 text-xl font-bold text-slate-900">Typing / dataclass / pathlib / logging / pytest fixtures / FastAPI dependency injection</h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">Nội dung nâng cao nhưng vẫn local-first: mỗi topic có contract, trace, pitfall và bài luyện nhỏ để đưa vào portfolio hoặc interview.</p>
        </div>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search advanced Python..." className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm md:w-72" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={() => setTrack('all')} className={`rounded-full px-3 py-1 text-xs font-semibold ${track === 'all' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'}`}>All</button>
        {pythonV94RTrackOrder.map((item) => <button key={item} onClick={() => setTrack(item)} className={`rounded-full px-3 py-1 text-xs font-semibold ${track === item ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'}`}>{trackLabels[item]}</button>)}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {filtered.map((topic) => (
          <article key={topic.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-sky-100 px-2 py-1 text-[11px] font-bold uppercase text-sky-700">{trackLabels[topic.track]}</span>
              <button onClick={() => onSelectNode?.(topic.nodeId)} className="rounded-full bg-white px-2 py-1 text-[11px] font-semibold text-slate-600 underline decoration-slate-300">jump: {topic.nodeId}</button>
            </div>
            <h3 className="mt-3 text-base font-bold text-slate-900">{topic.titleVi}</h3>
            <p className="mt-1 text-sm text-slate-600">{topic.goalVi}</p>
            <pre className="mt-3 max-h-56 overflow-auto rounded-2xl bg-slate-950 p-3 text-xs leading-5 text-slate-100"><code>{topic.code}</code></pre>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase text-slate-500">Trace</p>
                <ul className="mt-1 list-disc space-y-1 pl-4 text-xs text-slate-600">
                  {topic.traceVi.map((step) => <li key={step}>{step}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-slate-500">Pitfalls</p>
                <ul className="mt-1 list-disc space-y-1 pl-4 text-xs text-slate-600">
                  {topic.pitfalls.map((pitfall) => <li key={pitfall}>{pitfall}</li>)}
                </ul>
              </div>
            </div>
            <div className="mt-3 rounded-2xl bg-white p-3 text-xs text-slate-700"><span className="font-bold">Practice:</span> {topic.practicePromptVi}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
