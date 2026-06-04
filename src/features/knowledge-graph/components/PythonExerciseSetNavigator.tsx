import { pythonCodeExercises } from '../../../courses/python/codeExercises';
import { getNextRecommendedExercise, pythonExerciseSets } from './pythonExerciseQuality';
import { readPythonExerciseProgress } from './pythonCodeProgress';

const openExercise = (id: string) => window.dispatchEvent(new CustomEvent('v69r-python-open-exercise', { detail: id }));

export function PythonExerciseSetNavigator() {
  const next = getNextRecommendedExercise(readPythonExerciseProgress());
  return (
    <section className="rounded-3xl border border-sky-200 bg-sky-50 p-4 dark:border-sky-800 dark:bg-sky-950/30">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-sky-700">V75R Learning sets</p><h3 className="text-xl font-black">Next best exercise / 次のおすすめ</h3><p className="text-sm text-slate-700 dark:text-slate-200">VI: chọn theo mục tiêu học. JA: 学習目的に合わせて選びます。</p></div>
        {next && <button type="button" onClick={() => openExercise(next.id)} className="rounded-2xl bg-sky-600 px-4 py-3 text-sm font-black text-white">Open next: {next.title}</button>}
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {pythonExerciseSets.map((set) => {
          const items = pythonCodeExercises.filter(set.predicate).slice(0, 4);
          return <div key={set.id} className="rounded-2xl bg-white p-3 shadow-sm dark:bg-slate-900"><b>{set.title}</b><p className="text-xs text-slate-500">{set.titleJa}</p><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{set.descriptionVi}</p><p className="text-xs text-slate-500">{set.descriptionJa}</p><div className="mt-3 space-y-2">{items.map((item) => <button key={item.id} type="button" onClick={() => openExercise(item.id)} className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-left text-xs font-bold hover:bg-sky-50 dark:border-slate-700 dark:hover:bg-slate-800">{item.title} · {item.level}</button>)}</div></div>;
        })}
      </div>
    </section>
  );
}
