import { useMemo, useState } from 'react';
import { pythonMiniProjects } from '../../../courses/python/projectPortfolio';
import { validateFastApiProject, type FastApiProjectType } from './fastApiProjectValidator';

const fastApiProjects = pythonMiniProjects.filter((project) => project.kind === 'fastapi' || project.kind === 'ai-api');
const requestExamples = [
  { title: 'Todo API', route: 'POST /todos', request: '{"title":"study Python"}', response: '{"id":1,"title":"study Python","done":false}', vi: 'Route nhận JSON và trả lại todo đã tạo.', ja: 'JSONを受け取り、作成したtodoを返します。' },
  { title: 'Quiz API', route: 'POST /submit', request: '{"answers":{"q1":"A"}}', response: '{"score":1,"wrong":[]}', vi: 'Submit route chấm điểm và trả câu sai.', ja: 'submit routeは採点し、誤答を返します。' },
  { title: 'RAG mock', route: 'POST /ask', request: '{"question":"What is FastAPI?"}', response: '{"answer":"...","sources":["doc1"]}', vi: 'RAG response cần có nguồn để kiểm chứng.', ja: 'RAG responseには確認用sourcesが必要です。' },
  { title: 'Predict API', route: 'POST /predict', request: '{"features":[0.2,0.8]}', response: '{"label":"positive","confidence":0.9}', vi: 'AI API nên trả label và confidence.', ja: 'AI APIはlabelとconfidenceを返すと良いです。' },
];

export function FastApiProjectValidatorPanel() {
  const [selectedId, setSelectedId] = useState(fastApiProjects[0]?.id ?? '');
  const project = useMemo(() => fastApiProjects.find((item) => item.id === selectedId) ?? fastApiProjects[0], [selectedId]);
  const [code, setCode] = useState(project?.starterCode ?? '');
  const projectType = useMemo<FastApiProjectType>(() => {
    if (!project) return 'generic';
    if (project.id.includes('todo')) return 'todo';
    if (project.id.includes('quiz')) return 'quiz';
    if (project.id.includes('rag')) return 'rag';
    if (project.id.includes('predict')) return 'predict';
    return 'generic';
  }, [project]);
  const result = useMemo(() => validateFastApiProject(code, projectType), [code, projectType]);
  if (!project) return null;
  return (
    <section className="rounded-3xl border border-sky-200 bg-sky-50 p-4 shadow-sm dark:border-sky-800 dark:bg-sky-950/30">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-sky-700">V71R FastAPI Project Validator</p>
          <h3 className="text-xl font-black">Route → Schema → Service → Response</h3>
          <p className="text-sm text-slate-700 dark:text-slate-200">VI: dán code FastAPI và kiểm thiết kế API. JA: FastAPI codeを貼り、API設計を確認します。</p>
        </div>
        <select value={project.id} onChange={(e) => { const next = fastApiProjects.find((item) => item.id === e.target.value) ?? project; setSelectedId(next.id); setCode(next.starterCode); }} className="rounded-xl border border-sky-300 bg-white px-3 py-2 text-sm dark:border-sky-700 dark:bg-slate-900">
          {fastApiProjects.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
        </select>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_.9fr]">
        <textarea value={code} onChange={(e) => setCode(e.target.value)} spellCheck={false} className="min-h-[340px] rounded-2xl border border-sky-200 bg-slate-950 p-4 font-mono text-sm text-sky-100 outline-none focus-visible:ring-2 focus-visible:ring-sky-500" />
        <div className="space-y-3 text-sm">
          <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
            <p className="text-xs font-bold uppercase text-sky-700">Validation score</p>
            <p className="text-3xl font-black">{result.score}%</p>
            <p className="text-slate-600 dark:text-slate-300">{result.passed}/{result.total} checks · {result.projectType}</p>
            <p className="mt-2">{result.summaryVi}</p>
            <p className="text-slate-500">{result.summaryJa}</p>
          </div>
          <div className="max-h-80 overflow-auto rounded-2xl border border-sky-100 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
            {result.rows.map((item) => <div key={item.label} className="mb-3 rounded-xl border border-slate-100 p-3 dark:border-slate-800"><b>{item.ok ? '✅' : '❌'} {item.required ? 'Required' : 'Recommended'} · {item.label}</b><p className="text-slate-500">{item.labelJa}</p>{!item.ok && <p className="mt-1 text-xs text-amber-700 dark:text-amber-300">VI: {item.hintVi}<br/>JA: {item.hintJa}</p>}</div>)}
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        {requestExamples.map((item) => <div key={item.route} className="rounded-2xl bg-white p-3 text-xs shadow-sm dark:bg-slate-900"><b>{item.title}</b><p className="mt-1 font-bold text-sky-700">{item.route}</p><code className="mt-2 block rounded bg-slate-100 p-2 dark:bg-slate-800">Request: {item.request}</code><code className="mt-2 block rounded bg-slate-100 p-2 dark:bg-slate-800">Response: {item.response}</code><p className="mt-2">{item.vi}</p><p className="text-slate-500">{item.ja}</p></div>)}
      </div>
    </section>
  );
}
