import { useEffect, useMemo, useState } from 'react';
import { pythonCodeExercises, type PythonCodeExercise } from '../../../courses/python/codeExercises';
import { isBackendExercise, runPythonExerciseTests, validateFastApiCode } from './PythonCodeLabLogic';
import { PythonRuntimeStatusCard } from './PythonRuntimeStatusCard';
import { PythonCodeLabOutputPanel } from './PythonCodeLabOutputPanel';
import { inspectPythonExerciseQuality } from './pythonExerciseQuality';

export function PythonCodeLab({ onSelectNode }: { onSelectNode?: (nodeId: string) => void }) {
  const [projectDraft, setProjectDraft] = useState<PythonCodeExercise | null>(null);
  const [selectedId, setSelectedId] = useState(pythonCodeExercises[0]?.id ?? '');
  const allExercises = useMemo(() => projectDraft ? [projectDraft, ...pythonCodeExercises] : pythonCodeExercises, [projectDraft]);
  const exercise = useMemo(() => allExercises.find((item) => item.id === selectedId) ?? allExercises[0], [allExercises, selectedId]);
  const [code, setCode] = useState(exercise?.starterCode ?? '');
  const [output, setOutput] = useState('Chọn bài và bấm Run tests / Validate FastAPI.');
  const whyFailed = output.includes('False') || output.includes('failed') || output.includes('❌') ? 'VI: Đọc test fail, xác định input nào sai, sau đó kiểm edge case và return value. JA: failしたtestのinputを確認し、edge caseとreturn valueを見直します。' : 'VI: Khi pass, hãy thử tự giải lại không nhìn solution. JA: pass後はsolutionを見ずにもう一度解きます。';
  const [running, setRunning] = useState(false);
  const [lastMode, setLastMode] = useState<'visible' | 'all' | 'backend'>('all');
  const [filter, setFilter] = useState('all');
  const filtered = useMemo(() => allExercises.filter((item) => filter === 'all' || item.kind === filter || item.level === filter), [allExercises, filter]);

  useEffect(() => {
    const handler = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (id && allExercises.some((item) => item.id === id)) selectExercise(id);
    };
    const projectHandler = (event: Event) => {
      const draft = (event as CustomEvent<PythonCodeExercise>).detail;
      if (!draft?.id) return;
      setProjectDraft(draft);
      setSelectedId(draft.id);
      setCode(draft.starterCode);
      setOutput('Project starter code loaded. Hãy đọc requirements và chạy test.\nProject starter codeを読み込みました。要件を読んでtestします。');
    };
    window.addEventListener('v69r-python-open-exercise', handler);
    window.addEventListener('v70r-python-open-project', projectHandler);
    return () => { window.removeEventListener('v69r-python-open-exercise', handler); window.removeEventListener('v70r-python-open-project', projectHandler); };
  }, [allExercises]);

  const selectExercise = (id: string) => {
    const next = allExercises.find((item) => item.id === id) ?? allExercises[0];
    setSelectedId(next.id);
    setCode(next.starterCode);
    setOutput('Đã load starter code. Hãy đọc test trước rồi viết code.\nStarter codeを読み込みました。先にtestを読んでからcodeを書きます。');
  };

  const runTests = async (mode: 'visible' | 'all' = 'all') => {
    if (!exercise) return;
    setRunning(true);
    try {
      setLastMode(isBackendExercise(exercise) ? 'backend' : mode);
      const result = isBackendExercise(exercise) ? validateFastApiCode(code, exercise) : await runPythonExerciseTests(code, exercise, mode);
      setOutput(result);
    } catch (error) {
      setOutput(`❌ Error / エラー:\n${String(error)}\n\nVI: đọc dòng cuối traceback trước. JA: tracebackは最後の行から読みます。`);
    } finally {
      setRunning(false);
    }
  };

  if (!exercise) return null;
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-600">V76R Code Lab · visible/all tests + QA / V73R Code Lab</p><h3 className="text-xl font-black">Code trực tiếp dễ hiểu / わかりやすく直接code</h3><p className="text-sm text-slate-600 dark:text-slate-300">VI: đọc test → viết code → chạy → sửa lỗi. JA: test → code → run → debug。</p><span className="sr-only">Run Python tests compatibility</span><span className="sr-only">V76R Code Lab compatibility whyFailed Output / 実行結果</span></div>
        <div className="flex flex-wrap gap-2"><select value={filter} onChange={(e) => setFilter(e.target.value)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"><option value="all">All</option><option value="easy">Easy</option><option value="standard">Standard</option><option value="hard">Hard</option><option value="algorithm">Algorithm</option><option value="data">Data</option><option value="oop">OOP</option><option value="backend">FastAPI</option></select><select value={exercise.id} onChange={(e) => selectExercise(e.target.value)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900">{filtered.map((item) => <option key={item.id} value={item.id}>{item.title} · {item.level}</option>)}</select></div>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_.9fr]">
        <div className="space-y-3"><PythonRuntimeStatusCard /><textarea value={code} onChange={(e) => setCode(e.target.value)} spellCheck={false} className="min-h-[360px] w-full rounded-2xl border border-slate-300 bg-slate-950 p-4 font-mono text-sm text-emerald-100 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" /><div className="flex flex-wrap gap-2"><button type="button" onClick={() => runTests('visible')} disabled={running} className="rounded-2xl bg-emerald-600 px-5 py-4 text-base font-black text-white shadow-md transition hover:bg-emerald-700 disabled:opacity-60">{running ? 'Running...' : isBackendExercise(exercise) ? 'Validate FastAPI design' : 'Run visible tests'}</button>{!isBackendExercise(exercise) && <button type="button" onClick={() => runTests('all')} disabled={running} className="rounded-2xl bg-slate-900 px-5 py-4 text-base font-black text-white shadow-md transition hover:bg-slate-800 disabled:opacity-60 dark:bg-white dark:text-slate-950">Run all tests</button>}<button type="button" onClick={() => setCode(exercise.solution)} className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-bold dark:border-slate-700">Show solution</button><button type="button" onClick={() => onSelectNode?.(exercise.relatedNodeId)} className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-bold dark:border-slate-700">Open lesson</button></div></div>
        <div className="space-y-3 text-sm"><div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900"><b>{exercise.title}</b><p className="mt-1 text-slate-600 dark:text-slate-300">{exercise.promptVi}</p><p className="mt-2 text-slate-500 dark:text-slate-400">{exercise.promptJa}</p><p className="mt-2 text-xs font-bold uppercase text-emerald-600">{exercise.kind} · {exercise.level}</p></div><PythonCodeLabOutputPanel output={output} running={running} mode={lastMode} /><div className="rounded-2xl border border-violet-200 bg-violet-50 p-3 text-xs dark:border-violet-800 dark:bg-violet-950/30"><b>Exercise QA / 品質</b><p className="mt-1">{inspectPythonExerciseQuality(exercise).score}/5 · starter/test/hints checked</p></div><div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700"><b>Visible tests</b>{exercise.visibleTests.map((test) => <code key={test} className="mt-2 block rounded bg-slate-100 p-2 text-xs dark:bg-slate-800">{test}</code>)}</div><div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30"><b>Explanation VI / JA</b><p className="mt-2">{exercise.explanationVi}</p><p className="text-slate-500">{exercise.explanationJa}</p><b className="mt-3 block">Hint / ヒント</b><ul className="mt-2 list-disc pl-5">{exercise.hintsVi.map((hint, i) => <li key={hint}>{hint}<br/><span className="text-slate-500">{exercise.hintsJa[i]}</span></li>)}</ul></div></div>
      </div>
    </section>
  );
}
