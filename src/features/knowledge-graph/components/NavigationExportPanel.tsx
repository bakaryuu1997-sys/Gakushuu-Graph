import { Download, FileUp, ImageDown, RotateCcw } from "lucide-react";

export function ExportPanel(props: {
  onExportProgress: () => void;
  onImportProgress: (file: File) => void;
  onExportGraph: () => void;
  onReset: () => void;
}) {
  return (
    <>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          aria-label="Export progress JSON"
          onClick={props.onExportProgress}
          className="rounded-2xl bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 dark:bg-slate-900 dark:text-slate-200"
        >
          <Download className="mr-1 inline h-4 w-4" /> JSON
        </button>
        <label className="cursor-pointer rounded-2xl bg-white px-3 py-2 text-center text-xs font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 dark:bg-slate-900 dark:text-slate-200">
          <FileUp className="mr-1 inline h-4 w-4" /> Import
          <input
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) props.onImportProgress(file);
              event.currentTarget.value = "";
            }}
          />
        </label>
      </div>
      <button
        type="button"
        aria-label="Export graph PNG"
        onClick={props.onExportGraph}
        className="mt-2 w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
      >
        <ImageDown className="mr-2 inline h-4 w-4" />
        Export graph PNG
      </button>
      <button
        type="button"
        aria-label="Reset progress"
        onClick={props.onReset}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
      >
        <RotateCcw className="mr-2 inline h-4 w-4" />
        Reset progress
      </button>
    </>
  );
}
