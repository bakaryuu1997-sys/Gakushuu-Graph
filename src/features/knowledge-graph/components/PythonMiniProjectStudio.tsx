import { useMemo, useState } from 'react';
import { pythonMiniProjects } from '../../../courses/python/projectPortfolio';
import { saveProjectDraftForCodeLab, writePythonProjectProgress } from './pythonProjectProgress';

export function PythonMiniProjectStudio({ onSelectNode }: { onSelectNode?: (nodeId: string) => void }) {
  const [kindFilter, setKindFilter] = useState('all');
  const filteredProjects = useMemo(() => pythonMiniProjects.filter((item) => kindFilter === 'all' || item.kind === kindFilter), [kindFilter]);
  const [selectedId, setSelectedId] = useState(pythonMiniProjects[0]?.id ?? '');
  const [showSolution, setShowSolution] = useState(false);
  const project = useMemo(() => pythonMiniProjects.find((item) => item.id === selectedId) ?? filteredProjects[0] ?? pythonMiniProjects[0], [filteredProjects, selectedId]);
  if (!project) return null;
  const openInCodeLab = () => {
    writePythonProjectProgress(project.id, 'learning');
    window.dispatchEvent(new CustomEvent('v70r-python-open-project', { detail: saveProjectDraftForCodeLab(project) }));
  };
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-indigo-600">V71R Mini Project Studio</p><h3 className="text-xl font-black">Đọc yêu cầu → code → test → review</h3><p className="text-sm text-slate-600 dark:text-slate-300">VI/JA explanation, starter code, checklist và solution mẫu.</p></div>
        <select value={kindFilter} onChange={(e) => { setKindFilter(e.target.value); setShowSolution(false); }} className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"><option value="all">All projects</option><option value="cli">CLI</option><option value="data">Data</option><option value="quiz">Quiz</option><option value="fastapi">FastAPI</option><option value="ai-api">AI API</option></select><select value={project.id} onChange={(e) => { setSelectedId(e.target.value); setShowSolution(false); }} className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900">{filteredProjects.map((item) => <option key={item.id} value={item.id}>{item.title} · {item.kind} · {item.level}</option>)}</select>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
        <div className="space-y-3 text-sm">
          <div className="rounded-2xl bg-indigo-50 p-4 dark:bg-indigo-950/30"><b>{project.title}</b><p className="text-slate-500">{project.titleJa}</p><p className="mt-2 text-xs font-bold uppercase text-indigo-700">{project.kind} · {project.level} · {project.skills.join(', ')}</p></div>
          <ListCard title="Requirements VI" items={project.requirementsVi} /><ListCard title="要件 JA" items={project.requirementsJa} /><ListCard title="Checklist" items={project.checklistVi.map((item, index) => `${item} / ${project.checklistJa[index]}`)} />
          <div className="flex flex-wrap gap-2"><button type="button" onClick={openInCodeLab} className="rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-black text-white">Open in Code Lab</button><button type="button" onClick={() => writePythonProjectProgress(project.id, 'done')} className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-bold dark:border-slate-700">Mark done</button><button type="button" onClick={() => onSelectNode?.(project.relatedNodeId)} className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-bold dark:border-slate-700">Open lesson</button></div>
        </div>
        <div className="space-y-3"><ListCard title="File structure" items={project.fileStructure} /><CodeBlock title="Starter code" code={project.starterCode} /><ListCard title="Test cases" items={project.testCases} /><div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm dark:border-amber-800 dark:bg-amber-950/30"><b>Explanation VI / JA</b><p className="mt-2">{project.explanationVi}</p><p className="mt-2 text-slate-500">{project.explanationJa}</p><p className="mt-2 font-bold">Next: {project.nextStepVi}</p><p className="text-slate-500">{project.nextStepJa}</p></div><button type="button" onClick={() => setShowSolution((v) => !v)} className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-bold dark:border-slate-700">{showSolution ? 'Hide solution' : 'Show solution'}</button>{showSolution && <CodeBlock title="Solution" code={project.solution} />}</div>
      </div>
    </section>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) { return <div className="rounded-2xl border border-slate-200 p-4 text-sm dark:border-slate-700"><b>{title}</b><ul className="mt-2 list-disc space-y-1 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>; }
function CodeBlock({ title, code }: { title: string; code: string }) { return <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700"><b>{title}</b><pre className="mt-2 max-h-64 overflow-auto whitespace-pre-wrap rounded-xl bg-slate-950 p-3 text-xs text-emerald-100">{code}</pre></div>; }
