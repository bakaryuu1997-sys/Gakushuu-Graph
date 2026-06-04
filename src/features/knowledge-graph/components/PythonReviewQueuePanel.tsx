import { useMemo, useState } from 'react';
import { buildPythonReviewQueue, getNextRecommendedExercise, openPythonExerciseInCodeLab } from './pythonReviewQueueRunner';
import { readPythonExerciseProgress } from './pythonCodeProgress';

export function PythonReviewQueuePanel({ onSelectNode }: { onSelectNode?: (nodeId: string) => void }) {
  const [version, setVersion] = useState(0);
  const records = useMemo(() => readPythonExerciseProgress(), [version]);
  const queue = useMemo(() => buildPythonReviewQueue(records), [records]);
  const next = useMemo(() => getNextRecommendedExercise(records), [records]);
  return (
    <section className="rounded-3xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
      <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-amber-700">V72R Review Queue</p><h3 className="text-xl font-black">Bài cần retry / 復習queue</h3><p className="text-sm text-slate-700 dark:text-slate-200">VI: bài fail hoặc nhóm yếu sẽ tự lên đầu queue. JA: failした問題や弱い分野を優先します。</p></div><button type="button" onClick={() => setVersion((v) => v + 1)} className="rounded-xl border border-amber-300 px-3 py-2 text-sm font-bold dark:border-amber-700">Refresh</button></div>
      <div className="mt-4 rounded-2xl bg-white p-4 dark:bg-slate-950"><b>Next recommended exercise</b><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{next.title} — {next.reasonVi}<br/><span className="text-slate-500">{next.reasonJa}</span></p><button type="button" onClick={() => openPythonExerciseInCodeLab(next.exercise.id)} className="mt-3 rounded-xl bg-amber-600 px-3 py-2 text-xs font-black text-white">Open next in Code Lab</button></div>
      <div className="mt-4 grid gap-3 lg:grid-cols-2">{queue.map((item) => <article key={item.id} className="rounded-2xl border border-amber-100 bg-white p-4 dark:border-amber-900 dark:bg-slate-950"><div className="flex items-start justify-between gap-3"><div><b>{item.title}</b><p className="text-sm text-slate-600 dark:text-slate-300">{item.reasonVi}</p><p className="text-xs text-slate-500">{item.reasonJa}</p><span className="mt-2 inline-flex rounded-full bg-amber-100 px-2 py-1 text-xs font-bold text-amber-700 dark:bg-amber-900 dark:text-amber-100">priority {item.priority}</span></div></div><div className="mt-3 flex flex-wrap gap-2"><button type="button" onClick={() => openPythonExerciseInCodeLab(item.exercise.id)} className="rounded-xl bg-amber-600 px-3 py-2 text-xs font-black text-white">Retry</button><button type="button" onClick={() => onSelectNode?.(item.exercise.relatedNodeId)} className="rounded-xl border border-slate-300 px-3 py-2 text-xs font-bold dark:border-slate-700">Open lesson</button></div></article>)}</div>
    </section>
  );
}
