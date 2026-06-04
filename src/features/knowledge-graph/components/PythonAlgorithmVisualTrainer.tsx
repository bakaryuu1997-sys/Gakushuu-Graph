import { useState } from 'react';
import { pythonAlgorithmVisualPatterns } from '../../../courses/python/algorithmVisualPatterns';

const STORAGE_KEY = 'v69r-python-algorithm-visual-progress';

const markDone = (id: string) => {
  const current = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as string[];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(new Set([...current, id]))));
};

export function PythonAlgorithmVisualTrainer({ onSelectNode }: { onSelectNode?: (nodeId: string) => void }) {
  const [selectedId, setSelectedId] = useState(pythonAlgorithmVisualPatterns[0].id);
  const selected = pythonAlgorithmVisualPatterns.find((item) => item.id === selectedId) ?? pythonAlgorithmVisualPatterns[0];
  return (
    <section className="rounded-3xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950/30">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-indigo-700">V69R Algorithm Visual Trainer</p><h3 className="text-xl font-black">Hiểu thuật toán bằng trace / traceで理解</h3><p className="text-sm text-slate-700 dark:text-slate-200">VI: nhìn biến thay đổi từng bước. JA: 変数の変化をstepごとに見ます。</p></div>
        <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)} className="rounded-xl border border-indigo-300 bg-white px-3 py-2 text-sm dark:border-indigo-700 dark:bg-slate-900">{pythonAlgorithmVisualPatterns.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
        <div className="space-y-3 rounded-2xl bg-white p-4 dark:bg-slate-900"><h4 className="font-black">{selected.title}</h4><p className="text-sm">VI: {selected.goalVi}</p><p className="text-sm text-slate-500">JA: {selected.goalJa}</p><div className="rounded-xl bg-rose-50 p-3 text-sm dark:bg-rose-950/30"><b>Common bug</b><p>{selected.commonBugVi}</p><p className="text-slate-500">{selected.commonBugJa}</p></div><div className="rounded-xl bg-amber-50 p-3 text-sm dark:bg-amber-950/30"><b>Memory tip</b><p>{selected.memoryTipVi}</p><p className="text-slate-500">{selected.memoryTipJa}</p></div></div>
        <div className="space-y-3">{selected.steps.map((step, index) => <div key={step.label} className="rounded-2xl border border-indigo-100 bg-white p-3 text-sm dark:border-slate-700 dark:bg-slate-900"><b>Step {index + 1}: {step.label}</b><code className="mt-2 block rounded-xl bg-slate-950 p-2 text-xs text-emerald-100">{step.state}</code><p className="mt-2">{step.explanationVi}</p><p className="text-slate-500">{step.explanationJa}</p></div>)}</div>
      </div>
      <div className="mt-4 rounded-2xl bg-white p-4 text-sm dark:bg-slate-900"><b>Mini check</b><p>{selected.checkQuestionVi}</p><p className="text-slate-500">{selected.checkQuestionJa}</p><details className="mt-2"><summary className="cursor-pointer font-bold">Show answer / 答え</summary><p className="mt-2">{selected.checkAnswerVi}</p><p className="text-slate-500">{selected.checkAnswerJa}</p></details><div className="mt-3 flex flex-wrap gap-2"><button type="button" onClick={() => markDone(selected.id)} className="rounded-xl bg-indigo-600 px-3 py-2 text-xs font-bold text-white">Mark understood</button><button type="button" onClick={() => onSelectNode?.(selected.relatedNodeId)} className="rounded-xl border border-indigo-300 px-3 py-2 text-xs font-bold">Open related lesson</button></div></div>
    </section>
  );
}
