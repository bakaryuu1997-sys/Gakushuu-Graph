import { useEffect, useMemo, useState } from 'react';
import { readPythonExerciseProgress, resetPythonExerciseProgress, summarizePythonProgress, type PythonExerciseRunRecord } from './pythonCodeProgress';

export function PythonExerciseProgressDashboard() {
  const [records, setRecords] = useState<PythonExerciseRunRecord[]>(() => readPythonExerciseProgress());
  useEffect(() => {
    const refresh = () => setRecords(readPythonExerciseProgress());
    window.addEventListener('v69r-python-progress-updated', refresh);
    return () => window.removeEventListener('v69r-python-progress-updated', refresh);
  }, []);
  const summary = useMemo(() => summarizePythonProgress(records), [records]);
  const weakKind = Object.entries(summary.byKind).sort((a, b) => (a[1].pass / Math.max(a[1].done, 1)) - (b[1].pass / Math.max(b[1].done, 1)))[0]?.[0] ?? 'algorithm';
  return (
    <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-700">V69R Progress</p><h3 className="text-xl font-black">Python readiness local</h3><p className="text-sm text-slate-700 dark:text-slate-200">VI: chạy test để lưu tiến độ. JA: test実行で進捗を保存します。</p></div>
        <button type="button" onClick={() => { resetPythonExerciseProgress(); setRecords([]); }} className="rounded-xl border border-emerald-300 px-3 py-2 text-xs font-bold">Reset</button>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        {[['Score', `${summary.score}%`], ['Attempted', summary.attempted], ['Passed', summary.passed], ['Weak kind', weakKind]].map(([label, value]) => <div key={label} className="rounded-2xl bg-white p-3 shadow-sm dark:bg-slate-900"><p className="text-xs text-slate-500">{label}</p><p className="text-lg font-black">{value}</p></div>)}
      </div>
      <div className="mt-4 grid gap-2 md:grid-cols-2">{records.slice(0, 6).map((item) => <div key={`${item.exerciseId}-${item.updatedAt}`} className="rounded-2xl border border-emerald-100 bg-white p-3 text-sm dark:border-slate-700 dark:bg-slate-900"><b>{item.status === 'passed' ? '✅' : item.status === 'static-reviewed' ? '🧩' : '🔁'} {item.title}</b><p className="text-xs text-slate-500">{item.kind} · {item.passed}/{item.total} · {item.mistakeTags.join(', ') || 'ok'}</p></div>)}</div>
    </section>
  );
}
