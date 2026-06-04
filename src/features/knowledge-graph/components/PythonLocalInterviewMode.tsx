import { useMemo, useState } from 'react';
import { openPythonExerciseInCodeLab } from './pythonReviewQueueRunner';
import { readPythonInterviewHistory, selectInterviewExercises, summarizeInterviewHistory, writePythonInterviewResult, type PythonInterviewLevel } from './pythonInterviewMode';

export function PythonLocalInterviewMode({ onSelectNode }: { onSelectNode?: (nodeId: string) => void }) {
  const [level, setLevel] = useState<PythonInterviewLevel>('standard');
  const [solved, setSolved] = useState<Record<string, boolean>>({});
  const [historyVersion, setHistoryVersion] = useState(0);
  const exercises = useMemo(() => selectInterviewExercises(level), [level, historyVersion]);
  const history = useMemo(() => readPythonInterviewHistory(), [historyVersion]);
  const summary = summarizeInterviewHistory(history);
  const solvedCount = exercises.filter((item) => solved[item.id]).length;
  const score = exercises.length ? Math.round((solvedCount / exercises.length) * 100) : 0;
  const save = () => { writePythonInterviewResult({ level, score, solved: solvedCount, total: exercises.length, exerciseIds: exercises.map((item) => item.id) }); setSolved({}); setHistoryVersion((v) => v + 1); };
  return (
    <section className="rounded-3xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950/30">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-indigo-600">V72R Local Interview Mode</p><h3 className="text-xl font-black">Interview set 10 câu / 10問</h3><p className="text-sm text-slate-700 dark:text-slate-200">VI: chọn level, tự giải, tick câu làm được rồi retry trong Code Lab. JA: levelを選び、解けた問題をcheckし、Code Labで再挑戦します。</p></div>
        <select value={level} onChange={(e) => { setLevel(e.target.value as PythonInterviewLevel); setSolved({}); }} className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"><option value="easy">Easy</option><option value="standard">Standard</option><option value="hard">Hard</option></select>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3"><div className="rounded-2xl bg-white p-3 dark:bg-slate-900"><b>Current score</b><p className="text-2xl font-black">{score}%</p></div><div className="rounded-2xl bg-white p-3 dark:bg-slate-900"><b>Best score</b><p className="text-2xl font-black">{summary.best}%</p></div><div className="rounded-2xl bg-white p-3 dark:bg-slate-900"><b>Attempts</b><p className="text-2xl font-black">{summary.count}</p></div></div>
      <div className="mt-4 grid gap-3 lg:grid-cols-2">{exercises.map((exercise, index) => <article key={exercise.id} className="rounded-2xl border border-indigo-100 bg-white p-4 dark:border-indigo-900 dark:bg-slate-950"><div className="flex items-start justify-between gap-3"><div><b>{index + 1}. {exercise.title}</b><p className="text-sm text-slate-600 dark:text-slate-300">{exercise.promptVi}</p><p className="text-xs text-slate-500">{exercise.promptJa}</p><span className="mt-2 inline-flex rounded-full bg-indigo-100 px-2 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-100">{exercise.kind} · {exercise.level}</span></div><input aria-label={`solved ${exercise.title}`} type="checkbox" checked={!!solved[exercise.id]} onChange={(e) => setSolved((prev) => ({ ...prev, [exercise.id]: e.target.checked }))} className="mt-1 h-5 w-5" /></div><div className="mt-3 flex flex-wrap gap-2"><button type="button" onClick={() => openPythonExerciseInCodeLab(exercise.id)} className="rounded-xl bg-indigo-600 px-3 py-2 text-xs font-black text-white">Retry in Code Lab</button><button type="button" onClick={() => onSelectNode?.(exercise.relatedNodeId)} className="rounded-xl border border-slate-300 px-3 py-2 text-xs font-bold dark:border-slate-700">Open lesson</button></div></article>)}</div>
      <button type="button" onClick={save} className="mt-4 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white dark:bg-white dark:text-slate-950">Save interview result</button>
    </section>
  );
}
