import { useMemo, useState } from 'react';

const pythonLocalKeys = [
  'v69r-python-code-progress',
  'v70r-python-project-progress',
  'v71r-python-project-attempt-history',
  'v71r-python-project-code-lab-draft',
  'v72r-python-interview-history',
] as const;

type BackupShape = {
  version: 'v76r-python-local-backup';
  exportedAt: string;
  keys: Record<string, string | null>;
};

function buildBackup(): BackupShape {
  const keys: Record<string, string | null> = {};
  for (const key of pythonLocalKeys) keys[key] = window.localStorage.getItem(key);
  return { version: 'v76r-python-local-backup', exportedAt: new Date().toISOString(), keys };
}

function restoreBackup(raw: string) {
  const parsed = JSON.parse(raw) as BackupShape;
  if (parsed.version !== 'v76r-python-local-backup' || !parsed.keys) {
    throw new Error('Invalid Python backup JSON / Python backup JSONではありません');
  }
  for (const [key, value] of Object.entries(parsed.keys)) {
    if (!pythonLocalKeys.includes(key as typeof pythonLocalKeys[number])) continue;
    if (typeof value === 'string') window.localStorage.setItem(key, value);
  }
}

export function PythonLocalBackupPanel() {
  const [payload, setPayload] = useState('');
  const [message, setMessage] = useState('VI: Export để giữ tiến độ local. JA: local進捗を保存するにはexportします。');
  const keyCount = useMemo(() => pythonLocalKeys.length, []);

  const exportProgress = () => {
    const backup = buildBackup();
    const text = JSON.stringify(backup, null, 2);
    setPayload(text);
    setMessage('✅ Export ready. Copy JSON này để lưu backup. / JSONをcopyして保存できます。');
  };

  const importProgress = () => {
    try {
      restoreBackup(payload);
      setMessage('✅ Import complete. Reload app nếu cần. / import完了。必要ならreloadしてください。');
    } catch (error) {
      setMessage(`❌ Import failed: ${String(error)}`);
    }
  };

  const resetPythonProgress = () => {
    for (const key of pythonLocalKeys) window.localStorage.removeItem(key);
    setPayload('');
    setMessage('Python local progress reset. / Python local進捗をresetしました。');
  };

  return (
    <section className="rounded-3xl border border-cyan-200 bg-cyan-50 p-4 shadow-sm dark:border-cyan-800 dark:bg-cyan-950/30">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-cyan-700 dark:text-cyan-300">V76R Local backup · offline safe</p>
          <h3 className="text-xl font-black text-slate-900 dark:text-white">Python local backup / local保存</h3>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">VI: app vẫn local-only; backup chỉ là JSON bạn copy. JA: backendなし。backupはcopy用JSONです。</p>
          <p className="mt-1 text-xs font-bold text-cyan-700 dark:text-cyan-300">Tracking {keyCount} Python local progress keys.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={exportProgress} className="rounded-2xl bg-cyan-700 px-4 py-3 text-sm font-black text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500">Export progress</button>
          <button type="button" onClick={importProgress} className="rounded-2xl border border-cyan-300 bg-white px-4 py-3 text-sm font-black text-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 dark:border-cyan-700 dark:bg-slate-950 dark:text-cyan-200">Import JSON</button>
          <button type="button" onClick={resetPythonProgress} className="rounded-2xl border border-rose-300 bg-white px-4 py-3 text-sm font-black text-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-500 dark:border-rose-800 dark:bg-slate-950 dark:text-rose-200">Reset Python progress</button>
        </div>
      </div>
      <p className="mt-3 rounded-2xl bg-white/70 p-3 text-sm font-semibold text-slate-700 dark:bg-slate-950/60 dark:text-slate-300">{message}</p>
      <textarea
        value={payload}
        onChange={(e) => setPayload(e.target.value)}
        placeholder="Paste exported Python backup JSON here / backup JSONをここに貼り付け"
        className="mt-3 min-h-[150px] w-full rounded-2xl border border-cyan-200 bg-white p-3 font-mono text-xs outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-cyan-800 dark:bg-slate-950"
      />
    </section>
  );
}
