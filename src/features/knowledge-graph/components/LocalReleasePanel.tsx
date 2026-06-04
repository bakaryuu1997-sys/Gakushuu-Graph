import { useId, useRef, useState } from "react";
import { CheckCircle2, Download, HardDrive, RotateCcw, ShieldCheck, Upload } from "lucide-react";
import type { LessonWorkspaceProps as Props } from "./LessonWorkspaceTypes";

interface LocalReleasePanelProps {
  courseTitle: string;
  stats: Props["stats"];
  onExportProgress: () => void;
  onImportProgress: (file: File) => Promise<void>;
  onResetProgress: () => void;
}

const releaseChecks = [
  "LocalStorage lưu tiến độ học, favorite, recent và Beginner/Advanced mode.",
  "Không cần backend, tài khoản, API key hoặc cloud sync để học AI Passport.",
  "Có thể export/import progress JSON để tự backup trước khi đổi máy hoặc reset browser.",
  "Verify/build/test/audit được gom vào release checklist trước khi chuyển sang course tiếp theo.",
];

export function LocalReleasePanel({ courseTitle, stats, onExportProgress, onImportProgress, onResetProgress }: LocalReleasePanelProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState("Sẵn sàng backup local progress.");

  const handleFile = async (file?: File) => {
    if (!file) return;
    try {
      await onImportProgress(file);
      setMessage(`Đã import progress từ ${file.name}.`);
    } catch {
      setMessage("Không import được file này. Hãy chọn đúng file progress JSON đã export từ app.");
    } finally {
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const masteredPercent = stats.total ? Math.round((stats.mastered / stats.total) * 100) : 0;

  return (
    <section className="glass-panel rounded-[2rem] p-5" aria-label="V56 local release candidate panel">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-emerald-600 dark:text-emerald-300">
            <ShieldCheck className="h-4 w-4" /> V56 Local Release Candidate
          </p>
          <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{courseTitle} đã sẵn sàng dùng local</h2>
          <p className="mt-2 max-w-3xl text-sm font-bold leading-6 text-slate-600 dark:text-slate-300">
            Bản này cố định phạm vi local-only: học, quiz, review, thi thử và backup tiến độ đều chạy trong trình duyệt. Không cần login, backend hoặc đồng bộ cloud.
          </p>
        </div>
        <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-950 shadow-sm dark:bg-emerald-950/40 dark:text-emerald-100">
          <p className="text-xs font-black uppercase tracking-[.16em] opacity-70">Local progress</p>
          <p className="mt-2 text-4xl font-black">{masteredPercent}%</p>
          <p className="mt-1 text-xs font-bold">Done {stats.mastered}/{stats.total} · Review {stats.needReview}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {releaseChecks.map((check) => (
          <article key={check} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            <p className="mt-3 text-xs font-bold leading-5 text-slate-600 dark:text-slate-300">{check}</p>
          </article>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={() => { onExportProgress(); setMessage("Đã export progress JSON. Hãy giữ file này để backup local."); }} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 dark:bg-white dark:text-slate-950">
          <Download className="h-4 w-4" /> Export progress
        </button>
        <input ref={inputRef} id={inputId} type="file" accept="application/json,.json" className="sr-only" onChange={(event) => void handleFile(event.target.files?.[0])} />
        <label htmlFor={inputId} className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-black text-white shadow-sm focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500">
          <Upload className="h-4 w-4" /> Import backup
        </label>
        <button type="button" onClick={() => { onResetProgress(); setMessage("Đã reset tiến độ course hiện tại trong localStorage."); }} className="inline-flex items-center gap-2 rounded-2xl bg-rose-50 px-4 py-3 text-sm font-black text-rose-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 dark:bg-rose-950/40 dark:text-rose-100">
          <RotateCcw className="h-4 w-4" /> Reset local progress
        </button>
      </div>
      <p className="mt-3 flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-300"><HardDrive className="h-4 w-4" /> {message}</p>
    </section>
  );
}
