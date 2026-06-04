import { pythonV78RDeepExamples } from '../../../courses/python/v78rDeepExamples';

export function PythonV78RDeepExamplesPanel({ onSelectNode }: { onSelectNode?: (nodeId: string) => void }) {
  const featured = pythonV78RDeepExamples.slice(0, 4);
  return (
    <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/20">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-700 dark:text-emerald-200">V78R Python Deep Examples</p>
      <h3 className="mt-1 text-lg font-black">Không còn chỉ template: trace code thật + test + bẫy lỗi</h3>
      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Mỗi case nối lesson với thực chiến: OOP state, stack/queue, DP, graph, FastAPI validation và portfolio README.</p>
      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        {featured.map((item) => (
          <article key={item.id} className="rounded-2xl border border-white/70 bg-white p-4 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-start justify-between gap-3">
              <div><b>{item.titleVi}</b><p className="mt-1 text-xs text-slate-500">{item.titleJa} · {item.kind}</p></div>
              <button type="button" onClick={() => onSelectNode?.(item.nodeId)} className="rounded-xl border border-emerald-200 px-3 py-2 text-xs font-black text-emerald-700 dark:border-emerald-800 dark:text-emerald-200">Lesson</button>
            </div>
            <p className="mt-3 text-slate-700 dark:text-slate-300">{item.scenarioVi}</p>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-xs text-slate-600 dark:text-slate-400">
              {item.traceVi.map((step) => <li key={step}>{step}</li>)}
            </ol>
            <code className="mt-3 block overflow-x-auto rounded-xl bg-slate-950 p-3 text-xs text-emerald-100">{item.tests[0]}</code>
          </article>
        ))}
      </div>
    </section>
  );
}
