export function PythonRuntimeStatusCard() {
  const hasPyodide = typeof window !== 'undefined' && Boolean(window.loadPyodide);
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-slate-700 dark:bg-slate-900">
      <b>{hasPyodide ? '✅ Pyodide ready' : '🟡 Offline/static mode'}</b>
      <p className="mt-1 text-slate-600 dark:text-slate-300">VI: nếu Pyodide chưa tải, bạn vẫn học bằng visible tests, hint và solution. Khi có internet, bấm Run Python tests để chạy thật trong browser.</p>
      <p className="mt-1 text-slate-500">JA: Pyodide未読込でも、visible test・hint・solutionで学習できます。online時はbrowser内でPython testを実行します。</p>
    </div>
  );
}
