import { pythonCodeExercises } from '../../../courses/python/codeExercises';

const groups = [
  { key: 'file', label: 'Data / file', ja: 'data・file', why: 'CSV, JSON, log parser, config loader' },
  { key: 'backend', label: 'FastAPI', ja: 'API設計', why: 'route, schema, service, error response' },
  { key: 'algorithm', label: 'Algorithm', ja: 'algorithm', why: 'search, graph, DP, window, heap' },
  { key: 'oop', label: 'OOP', ja: 'OOP', why: 'class, state, service object' },
] as const;

export function PythonRealWorldExerciseMap() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-600">V74R Exercise map</p>
      <h3 className="mt-1 text-xl font-black">Chọn bài theo mục tiêu thực tế / 実務目的で選ぶ</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        {groups.map((group) => {
          const count = pythonCodeExercises.filter((exercise) => exercise.kind === group.key).length;
          return (
            <article key={group.key} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
              <div className="text-2xl font-black text-emerald-600">{count}</div>
              <div className="font-black">{group.label}</div>
              <div className="text-xs font-bold text-slate-500">{group.ja}</div>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">{group.why}</p>
            </article>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">VI: nếu chưa biết chọn bài nào, bắt đầu từ Data/file để học xử lý dữ liệu, rồi sang Algorithm, sau đó FastAPI. JA: 迷ったらData/fileから始め、Algorithm、FastAPIへ進みます。</p>
    </section>
  );
}
