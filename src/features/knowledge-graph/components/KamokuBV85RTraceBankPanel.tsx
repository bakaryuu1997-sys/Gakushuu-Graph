import { useMemo, useState } from 'react';
import { fundamentalInfoV85RTraceBank } from '../../../courses/fundamental-info/v85rKamokuBTraceBank';
import type { LessonWorkspaceProps as Props } from './LessonWorkspaceTypes';
import { getNodeLabel } from '../utils/i18n';

const domains = ['all', 'algorithm', 'database', 'security'] as const;

export function KamokuBV85RTraceBankPanel(props: Props) {
  const language = props.language === 'ja' ? 'ja' : 'vi';
  const [domain, setDomain] = useState<typeof domains[number]>('all');
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => fundamentalInfoV85RTraceBank.filter((item) => {
    const q = query.trim().toLowerCase();
    const matchesDomain = domain === 'all' || item.domain === domain;
    const text = [item.titleJa, item.titleVi, item.questionJa, item.questionVi, item.code, item.trapJa, item.trapVi].join(' ').toLowerCase();
    return matchesDomain && (!q || text.includes(q));
  }), [domain, query]);
  return (
    <section className="rounded-[2rem] border border-indigo-200 bg-indigo-50/70 p-5 shadow-sm dark:border-indigo-800 dark:bg-indigo-950/20">
      <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-black uppercase tracking-[.22em] text-indigo-700">V85R 科目B trace bank</p><h3 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">Array / stack / queue / recursion / DP / graph / SQL / security timeline</h3><p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">Bài mới dài hơn V81R, tập trung vào trace biến, thứ tự cập nhật, queue/stack và bẫy đọc đề kiểu FE.</p></div><span className="rounded-full bg-white px-4 py-2 text-xs font-black text-indigo-700 shadow-sm dark:bg-slate-900">{filtered.length}/{fundamentalInfoV85RTraceBank.length} scenarios</span></div>
      <div className="mt-4 flex flex-wrap gap-2">{domains.map((item) => <button key={item} type="button" onClick={() => setDomain(item)} className={`rounded-full px-3 py-2 text-xs font-black ${domain === item ? 'bg-indigo-700 text-white' : 'bg-white text-indigo-700 dark:bg-slate-900'}`}>{item}</button>)}<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search trace / SQL / security" className="min-w-[240px] rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-bold outline-none focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-950" /></div>
      <div className="mt-4 grid gap-3 xl:grid-cols-2">{filtered.map((item, index) => <article key={item.id} className="rounded-3xl border border-white bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950"><div className="flex flex-wrap items-center justify-between gap-2"><p className="text-xs font-black uppercase tracking-[.16em] text-indigo-600">Q{index + 1} · {item.domain} · {item.kind}</p><span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-black text-indigo-700 dark:bg-indigo-950/40">{item.difficulty}</span></div><h4 className="mt-2 text-lg font-black">{language === 'ja' ? item.titleJa : item.titleVi}</h4><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{language === 'ja' ? item.questionJa : item.questionVi}</p>{item.code && <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-950 p-3 text-xs font-bold leading-6 text-indigo-100">{item.code}</pre>}{item.traceSteps && <ol className="mt-3 space-y-2 text-xs">{item.traceSteps.map((step) => <li key={`${item.id}-${step.step}`} className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-900"><b>{step.step}</b> · <code>{step.variables}</code><br />{language === 'ja' ? step.noteJa : step.noteVi}</li>)}</ol>}<p className="mt-3 rounded-2xl bg-rose-50 p-3 text-xs font-bold text-rose-900 dark:bg-rose-950/30 dark:text-rose-100">Trap: {language === 'ja' ? item.trapJa : item.trapVi}</p><div className="mt-3 flex flex-wrap gap-2">{item.relatedNodeIds.map((nodeId) => { const node = props.nodes.find((entry) => entry.id === nodeId); return <button key={nodeId} type="button" onClick={() => props.onSelectNode(nodeId)} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700 hover:bg-indigo-100 dark:bg-slate-900 dark:text-slate-200">{node ? getNodeLabel(node, props.language) : nodeId}</button>; })}</div></article>)}</div>
    </section>
  );
}
