import { pythonV80RGradedExercises, pythonV80RGradingRubrics } from '../../../courses/python/v80rCodeLabGrader';

const levelBadge = { easy: 'bg-emerald-50 text-emerald-700', standard: 'bg-blue-50 text-blue-700', hard: 'bg-rose-50 text-rose-700' } as const;

export function PythonV80RGraderPanel({ onSelectNode }: { onSelectNode?: (nodeId: string) => void }) {
  const openExercise = (id: string) => {
    window.dispatchEvent(new CustomEvent('v69r-python-open-exercise', { detail: id }));
    window.dispatchEvent(new CustomEvent('v73r-python-open-tab', { detail: 'code' }));
  };
  return (
    <section className="rounded-[2rem] border border-emerald-200 bg-emerald-50/60 p-5 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/20">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-emerald-700">V80R Python Code Lab Grader</p>
          <h3 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">Expected output rõ hơn · OOP / list-dict / algorithm / file / FastAPI</h3>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">Mỗi bài V80R có visible + hidden style tests, expected output, checklist chấm điểm và edge case. Mục tiêu là biến Code Lab từ “có bài tập” thành “luyện như grader local”.</p>
        </div>
        <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-emerald-700 shadow-sm dark:bg-slate-900">{pythonV80RGradedExercises.length} new graded tasks</span>
      </div>
      <div className="mt-4 grid gap-3 xl:grid-cols-2">
        {pythonV80RGradedExercises.map((exercise) => {
          const rubric = pythonV80RGradingRubrics.find((item) => item.exerciseId === exercise.id);
          return (
            <article key={exercise.id} className="rounded-3xl border border-white bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-black uppercase tracking-[.16em] text-emerald-600">{exercise.kind}</p>
                <span className={`rounded-full px-3 py-1 text-xs font-black ${levelBadge[exercise.level]}`}>{exercise.level}</span>
              </div>
              <h4 className="mt-2 text-lg font-black">{exercise.title}</h4>
              <p className="text-sm font-bold text-slate-500">{exercise.titleJa}</p>
              <div className="mt-3 rounded-2xl bg-slate-50 p-3 text-xs dark:bg-slate-900">
                <b>Expected output / 期待出力</b>
                <ul className="mt-2 list-disc space-y-1 pl-5">{rubric?.expectedOutputs.map((line) => <li key={line}><code>{line}</code></li>)}</ul>
              </div>
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-3 text-xs dark:border-slate-700"><b>Checklist VI</b><ul className="mt-2 list-disc pl-5">{rubric?.gradingChecklistVi.map((line) => <li key={line}>{line}</li>)}</ul></div>
                <div className="rounded-2xl border border-slate-200 p-3 text-xs dark:border-slate-700"><b>Checklist JA</b><ul className="mt-2 list-disc pl-5">{rubric?.gradingChecklistJa.map((line) => <li key={line}>{line}</li>)}</ul></div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2"><button type="button" onClick={() => openExercise(exercise.id)} className="rounded-2xl bg-emerald-600 px-4 py-2 text-xs font-black text-white">Open in Code Lab</button><button type="button" onClick={() => onSelectNode?.(exercise.relatedNodeId)} className="rounded-2xl border border-slate-300 px-4 py-2 text-xs font-black dark:border-slate-700">Open lesson</button></div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
