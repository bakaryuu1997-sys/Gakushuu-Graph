import { useEffect, useMemo, useState } from 'react';
import { readPythonExerciseProgress, summarizePythonProgress, type PythonExerciseRunRecord } from './pythonCodeProgress';
import { readPythonProjectProgress } from './pythonProjectProgress';

const groups = [
  { key: 'foundation', label: 'Foundation', ja: '基礎', kinds: ['control', 'function'] },
  { key: 'data', label: 'Data Structure', ja: 'データ構造', kinds: ['data', 'file'] },
  { key: 'algorithm', label: 'Algorithm', ja: 'アルゴリズム', kinds: ['algorithm'] },
  { key: 'oop', label: 'OOP', ja: 'オブジェクト指向', kinds: ['oop'] },
  { key: 'fastapi', label: 'FastAPI', ja: 'API設計', kinds: ['backend'] },
  { key: 'project', label: 'Project', ja: 'Project', kinds: [] },
];

const scoreFor = (records: PythonExerciseRunRecord[], kinds: string[]) => {
  const scoped = records.filter((item) => kinds.includes(item.kind));
  if (!scoped.length) return 0;
  const good = scoped.filter((item) => item.status === 'passed' || item.status === 'static-reviewed').length;
  return Math.round((good / scoped.length) * 100);
};

export function PythonFinalReadinessDashboard() {
  const [records, setRecords] = useState(() => readPythonExerciseProgress());
  const [projectRecords, setProjectRecords] = useState(() => readPythonProjectProgress());
  useEffect(() => {
    const refresh = () => { setRecords(readPythonExerciseProgress()); setProjectRecords(readPythonProjectProgress()); };
    window.addEventListener('v69r-python-progress-updated', refresh);
    window.addEventListener('v70r-python-project-progress-updated', refresh);
    return () => { window.removeEventListener('v69r-python-progress-updated', refresh); window.removeEventListener('v70r-python-project-progress-updated', refresh); };
  }, []);
  const summary = useMemo(() => summarizePythonProgress(records), [records]);
  const projectDone = projectRecords.filter((item) => item.status === 'done').length;
  const projectScore = projectRecords.length ? Math.round((projectDone / projectRecords.length) * 100) : 0;
  const cards = groups.map((group) => ({ ...group, score: group.key === 'project' ? projectScore : scoreFor(records, group.kinds) }));
  const weak = cards.slice().sort((a, b) => a.score - b.score)[0];
  return (
    <section className="rounded-3xl border border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-950/30">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-700 dark:text-violet-200">V73R Final Python Readiness</p>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><h3 className="text-xl font-black">Python readiness cuối / 最終ready度</h3><p className="text-sm text-slate-700 dark:text-slate-200">VI: xem nhóm nào nên luyện tiếp. JA: どの分野を次に復習すべきか確認します。</p></div>
        <div className="rounded-2xl bg-white px-4 py-3 text-center shadow-sm dark:bg-slate-900"><p className="text-xs text-slate-500">Code score</p><p className="text-2xl font-black">{summary.score}%</p></div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.key} className="rounded-2xl border border-violet-100 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center justify-between gap-2"><b>{card.label}</b><span className="text-xs text-slate-500">{card.ja}</span></div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"><div className="h-full rounded-full bg-violet-500" style={{ width: `${card.score}%` }} /></div>
            <p className="mt-2 text-sm font-black">{card.score}%</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl bg-white p-4 text-sm dark:bg-slate-900">
        <b>Next focus / 次の集中:</b> {weak?.label}
        <p className="mt-1 text-slate-600 dark:text-slate-300">VI: nếu dưới 70%, hãy mở tab tương ứng và làm 2 bài nhỏ trước khi học bài mới. JA: 70%未満なら、そのtabで小さい問題を2問解いてから新lessonへ進みます。</p>
      </div>
    </section>
  );
}
