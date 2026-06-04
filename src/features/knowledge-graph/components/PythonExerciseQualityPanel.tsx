import { summarizePythonExerciseQuality } from './pythonExerciseQuality';

export function PythonExerciseQualityPanel() {
  const summary = summarizePythonExerciseQuality();
  const score = Math.round((summary.passing / Math.max(summary.total, 1)) * 100);
  return (
    <section className="rounded-3xl border border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-950/30">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-700">V75R Exercise quality QA</p>
      <h3 className="text-xl font-black">Starter/test quality check / 品質確認</h3>
      <p className="text-sm text-slate-700 dark:text-slate-200">VI: kiểm function name, visible/hidden tests, bilingual hints. JA: function名、visible/hidden test、日越hintを確認します。</p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-3 dark:bg-slate-900"><p className="text-xs text-slate-500">Quality score</p><p className="text-2xl font-black">{score}%</p></div>
        <div className="rounded-2xl bg-white p-3 dark:bg-slate-900"><p className="text-xs text-slate-500">Exercises checked</p><p className="text-2xl font-black">{summary.total}</p></div>
        <div className="rounded-2xl bg-white p-3 dark:bg-slate-900"><p className="text-xs text-slate-500">Weak items</p><p className="text-2xl font-black">{summary.weak.length}</p></div>
      </div>
      {summary.weak.length > 0 && <div className="mt-3 rounded-2xl bg-white p-3 text-sm dark:bg-slate-900"><b>Needs review</b>{summary.weak.slice(0, 5).map((item) => <p key={item.exerciseId} className="text-xs text-slate-500">{item.title}: {item.score}/{item.total}</p>)}</div>}
    </section>
  );
}
