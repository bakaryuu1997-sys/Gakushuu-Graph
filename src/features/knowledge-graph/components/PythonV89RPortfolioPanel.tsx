import { useMemo, useState } from 'react';
import { pythonV89RPortfolioProjects } from '../../../courses/python/v89rPortfolioProjects';

const tracks = ['all', 'cli', 'data', 'backend', 'testing'] as const;

export function PythonV89RPortfolioPanel({ onSelectNode }: { onSelectNode?: (nodeId: string) => void }) {
  const [track, setTrack] = useState<typeof tracks[number]>('all');
  const projects = useMemo(() => pythonV89RPortfolioProjects.filter((project) => track === 'all' || project.track === track), [track]);
  return (
    <section className="rounded-[2rem] border border-orange-200 bg-orange-50/70 p-5 shadow-sm dark:border-orange-800 dark:bg-orange-950/20">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-orange-700">V89R Python portfolio/job-ready polish</p>
          <h3 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">CLI · CSV analyzer · FastAPI mini backend · test-first katas</h3>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">Mỗi project có deliverables, acceptance tests và README checklist để chuyển Python từ “học được” sang “có thể đưa vào portfolio local”.</p>
        </div>
        <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-orange-700 shadow-sm dark:bg-slate-900">{projects.length}/{pythonV89RPortfolioProjects.length} projects</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tracks.map((item) => <button key={item} type="button" onClick={() => setTrack(item)} className={`rounded-full px-3 py-2 text-xs font-black ${track === item ? 'bg-orange-700 text-white' : 'bg-white text-orange-700 dark:bg-slate-900'}`}>{item}</button>)}
      </div>
      <div className="mt-4 grid gap-3 xl:grid-cols-2">
        {projects.map((project) => <article key={project.id} className="rounded-3xl border border-white bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950">
          <div className="flex flex-wrap items-center justify-between gap-2"><p className="text-xs font-black uppercase tracking-[.16em] text-orange-600">{project.track}</p><span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-orange-700 dark:bg-orange-950/40">portfolio-ready</span></div>
          <h4 className="mt-2 text-lg font-black">{project.titleVi}</h4><p className="text-sm font-bold text-slate-500">{project.titleJa}</p>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.goalVi}</p>
          <pre className="mt-3 max-h-44 overflow-auto rounded-2xl bg-slate-950 p-3 text-xs font-bold leading-6 text-orange-100">{project.starterSnippet}</pre>
          <div className="mt-3 grid gap-2 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-3 text-xs dark:bg-slate-900"><b>Deliverables</b><ul className="mt-2 list-disc pl-5">{project.deliverables.map((line) => <li key={line}>{line}</li>)}</ul></div>
            <div className="rounded-2xl bg-slate-50 p-3 text-xs dark:bg-slate-900"><b>Acceptance tests</b><ul className="mt-2 list-disc pl-5">{project.acceptanceTests.map((line) => <li key={line}>{line}</li>)}</ul></div>
            <div className="rounded-2xl bg-slate-50 p-3 text-xs dark:bg-slate-900"><b>README</b><ul className="mt-2 list-disc pl-5">{project.readmeChecklist.map((line) => <li key={line}>{line}</li>)}</ul></div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">{project.relatedNodeIds.map((nodeId) => <button key={nodeId} type="button" onClick={() => onSelectNode?.(nodeId)} className="rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-orange-700 dark:bg-orange-950/40">{nodeId}</button>)}</div>
        </article>)}
      </div>
    </section>
  );
}
