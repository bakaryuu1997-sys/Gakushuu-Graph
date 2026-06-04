import { CheckCircle2, Gauge, PackageCheck, ShieldCheck } from 'lucide-react';
import { v116FinalStabilityItems, v116NextRisks, v116ReleaseChecklist } from '../../../courses/v116ReleaseStabilityQa';

export function V116FinalStabilityPanel() {
  const pass = v116FinalStabilityItems.filter((item) => item.status === 'pass').length;
  const watch = v116FinalStabilityItems.filter((item) => item.status === 'watch').length;
  return (
    <section className="rounded-[2rem] border border-emerald-200 bg-emerald-50/70 p-5 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/20" aria-label="V116 final release stability QA">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-emerald-700 dark:text-emerald-200"><ShieldCheck className="h-4 w-4" /> V116R Final Release Stability QA</p>
          <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">Theme · layout · lesson content · no-timer · lazy loading · clean zip</h2>
          <p className="mt-2 max-w-4xl text-sm font-bold leading-7 text-slate-600 dark:text-slate-300">
            Dashboard này là chốt kiểm tra trước khi bàn giao local zip. Nó không thêm overlay mới; chỉ tóm tắt trạng thái release và các điểm cần để ý khi mở app thật.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="rounded-2xl bg-white px-4 py-3 shadow-sm dark:bg-slate-950"><p className="text-3xl font-black text-emerald-700 dark:text-emerald-300">{pass}</p><p className="text-[11px] font-black uppercase text-slate-500">pass</p></div>
          <div className="rounded-2xl bg-white px-4 py-3 shadow-sm dark:bg-slate-950"><p className="text-3xl font-black text-amber-600 dark:text-amber-300">{watch}</p><p className="text-[11px] font-black uppercase text-slate-500">watch</p></div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {v116FinalStabilityItems.map((item) => (
          <article key={item.id} className="rounded-3xl border border-white bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-black uppercase tracking-[.16em] text-slate-500 dark:text-slate-400">{item.area}</p>
              <span className={`rounded-full px-3 py-1 text-[11px] font-black ${item.status === 'pass' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-200' : 'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-200'}`}>{item.status}</span>
            </div>
            <h3 className="mt-2 text-base font-black text-slate-950 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-xs font-bold leading-5 text-slate-600 dark:text-slate-300">{item.evidence}</p>
            <p className="mt-3 rounded-2xl bg-slate-50 p-3 text-xs font-bold leading-5 text-slate-600 dark:bg-slate-900 dark:text-slate-300">Next: {item.action}</p>
          </article>
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <section className="rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-950">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-emerald-700 dark:text-emerald-300"><PackageCheck className="h-4 w-4" /> Before handoff checklist</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm font-bold leading-6 text-slate-700 dark:text-slate-300">
            {v116ReleaseChecklist.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </section>
        <section className="rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-950">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-amber-700 dark:text-amber-300"><Gauge className="h-4 w-4" /> Watch items</p>
          <ul className="mt-3 space-y-2 text-sm font-bold leading-6 text-slate-700 dark:text-slate-300">
            {v116NextRisks.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-500" /> <span>{item}</span></li>)}
          </ul>
        </section>
      </div>
    </section>
  );
}
