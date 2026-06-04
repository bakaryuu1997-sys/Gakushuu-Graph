export function PythonCodeLabOutputPanel({ output, running, mode }: { output: string; running: boolean; mode: 'visible' | 'all' | 'backend' }) {
  const passed = /✅|Passed \d+\/\d+/.test(output) && !/❌|False|failed/i.test(output);
  const unavailable = output.includes('Pyodide chưa tải được');
  const failed = /❌|False|failed|Traceback|Error/i.test(output) && !unavailable;
  const tone = passed ? 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100' : failed ? 'border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-100' : 'border-slate-200 bg-slate-50 text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100';
  const label = running ? 'Running / 実行中' : unavailable ? 'Runtime unavailable / 実行環境なし' : passed ? 'Passed / 合格' : failed ? 'Needs fix / 修正必要' : 'Ready / 準備OK';
  return (
    <div className={`rounded-2xl border p-3 ${tone}`}>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <b>Output / 実行結果</b>
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-black dark:bg-slate-950/50">{label} · {mode}</span>
      </div>
      <pre className="min-h-[150px] whitespace-pre-wrap rounded-2xl bg-slate-950 p-4 text-xs text-slate-100">{output}</pre>
      <div className="mt-3 rounded-xl bg-white/70 p-3 text-xs dark:bg-slate-950/40">
        <b>Why failed? / なぜ失敗？</b>
        <p className="mt-1">VI: đọc test fail, kiểm tên function, return value, edge case rỗng/1 phần tử và kiểu dữ liệu trả về.</p>
        <p className="text-slate-600 dark:text-slate-300">JA: failしたtest、function名、return値、空/1要素のedge case、戻り値の型を確認します。</p>
      </div>
    </div>
  );
}
