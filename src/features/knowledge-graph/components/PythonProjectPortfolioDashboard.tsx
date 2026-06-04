import { useEffect, useMemo, useState } from 'react';
import { pythonMiniProjects } from '../../../courses/python/projectPortfolio';
import { readPythonProjectAttempts, readPythonProjectProgress, resetPythonProjectProgress, summarizeProjectProgress, type PythonProjectAttemptRecord, type PythonProjectProgressRecord } from './pythonProjectProgress';

export function PythonProjectPortfolioDashboard() {
  const [records, setRecords] = useState<PythonProjectProgressRecord[]>(() => readPythonProjectProgress());
  const [attempts, setAttempts] = useState<PythonProjectAttemptRecord[]>(() => readPythonProjectAttempts());
  useEffect(() => {
    const refresh = () => { setRecords(readPythonProjectProgress()); setAttempts(readPythonProjectAttempts()); };
    window.addEventListener('v70r-python-project-progress-updated', refresh);
    window.addEventListener('v71r-python-project-attempt-updated', refresh);
    return () => { window.removeEventListener('v70r-python-project-progress-updated', refresh); window.removeEventListener('v71r-python-project-attempt-updated', refresh); };
  }, []);
  const summary = useMemo(() => summarizeProjectProgress(records), [records]);
  const byId = new Map(records.map((item) => [item.projectId, item]));
  const retryProject = attempts.find((item) => item.status === 'failed');
  return (
    <section className="rounded-3xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950/30">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-indigo-700">V71R Project Portfolio + Attempts</p><h3 className="text-xl font-black">Mini project progress / project進捗</h3><p className="text-sm text-slate-700 dark:text-slate-200">VI: học Python bằng project nhỏ và theo dõi attempt. JA: 小さいprojectとattempt履歴で学びます。</p></div>
        <button type="button" onClick={() => { resetPythonProjectProgress(); setRecords([]); setAttempts([]); }} className="rounded-xl border border-indigo-300 px-3 py-2 text-xs font-bold">Reset</button>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-5">
        {[[`Progress`, `${summary.percent}%`], ['Done', summary.done], ['Learning', summary.learning], ['Attempts', attempts.length], ['Next', retryProject ? `Retry: ${retryProject.title}` : summary.nextProject.title]].map(([label, value]) => <div key={label} className="rounded-2xl bg-white p-3 shadow-sm dark:bg-slate-900"><p className="text-xs text-slate-500">{label}</p><p className="text-lg font-black">{value}</p></div>)}
      </div>
      <div className="mt-4 grid gap-2 md:grid-cols-3">{pythonMiniProjects.map((project) => { const item = byId.get(project.id); return <div key={project.id} className="rounded-2xl border border-indigo-100 bg-white p-3 text-sm dark:border-slate-700 dark:bg-slate-900"><b>{item?.status === 'done' ? '✅' : item?.status === 'reviewed' ? '🧪' : item?.status === 'learning' ? '🛠️' : '📌'} {project.title}</b><p className="text-xs text-slate-500">{project.kind} · {project.level} · {item?.status ?? 'new'} · attempts {item?.attempts ?? 0}</p></div>; })}</div>
      <div className="mt-4 rounded-2xl bg-white p-4 text-sm dark:bg-slate-900">
        <b>Recent attempts / 最近のattempt</b>
        <div className="mt-2 grid gap-2 md:grid-cols-2">{attempts.slice(0, 6).map((item) => <div key={`${item.projectId}-${item.updatedAt}`} className="rounded-xl border border-slate-200 p-3 dark:border-slate-700"><b>{item.status === 'passed' ? '✅' : item.status === 'failed' ? '❌' : item.status === 'static-reviewed' ? '🧪' : '📂'} {item.title}</b><p className="text-xs text-slate-500">{item.passed}/{item.total} · {new Date(item.updatedAt).toLocaleString()}</p>{item.status === 'failed' && <p className="mt-1 text-xs text-amber-700 dark:text-amber-300">VI: hãy mở lại project này và sửa theo test fail. JA: このprojectを再度開き、failed testを修正します。</p>}</div>)}</div>
        {attempts.length === 0 && <p className="mt-2 text-slate-500">Chưa có attempt. Hãy mở một project trong Code Lab.</p>}
      </div>
    </section>
  );
}
