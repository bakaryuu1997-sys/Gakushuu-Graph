import { v88rContentConsistencyItems } from '../../../courses/release/v88rContentConsistency';
import { v91rReleaseUxMilestones, v91rSevenDayRoute } from '../../../courses/release/v91rReleaseUx';

export function ReleaseUxV91RPanel() {
  return (
    <section className="glass-panel rounded-[2rem] p-5" aria-label="V91R release UX roadmap">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-sky-600 dark:text-sky-300">V88R-V91R Final UX / no timer</p>
          <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">Release dashboard: version, audit, next study route</h2>
          <p className="mt-2 max-w-3xl text-sm font-bold leading-6 text-slate-600 dark:text-slate-300">Tổng hợp các bản V78R→V91R, nhấn mạnh local-only, không timer cho mock FE, và lộ trình học 7 ngày sau khi tải về.</p>
        </div>
        <span className="rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white dark:bg-white dark:text-slate-950">V91R ready</span>
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        {v91rReleaseUxMilestones.map((item) => <article key={item.version} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900"><p className="text-xs font-black uppercase tracking-[.16em] text-sky-600">{item.version} · {item.status}</p><h3 className="mt-2 font-black">{item.title}</h3><p className="mt-2 text-xs font-bold leading-5 text-slate-600 dark:text-slate-300">{item.summaryVi}</p></article>)}
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900"><h3 className="font-black">V88R consistency audit</h3><ul className="mt-3 space-y-2 text-xs font-bold leading-5 text-slate-600 dark:text-slate-300">{v88rContentConsistencyItems.map((item) => <li key={item.id}><b>{item.area}</b> — {item.label}: {item.status}. {item.evidence}</li>)}</ul></div>
        <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900"><h3 className="font-black">7-day local route</h3><ol className="mt-3 list-decimal space-y-2 pl-5 text-xs font-bold leading-5 text-slate-600 dark:text-slate-300">{v91rSevenDayRoute.map((item) => <li key={item}>{item}</li>)}</ol></div>
      </div>
    </section>
  );
}
