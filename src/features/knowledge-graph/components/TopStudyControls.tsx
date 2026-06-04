import { Moon, Sun } from "lucide-react";
import type { GraphFilters, Language } from "../types";

interface Props {
  language: Language;
  importance: GraphFilters["importance"];
  theme: "light" | "dark";
  onLanguage: (language: Language) => void;
  onImportance: (importance: GraphFilters["importance"]) => void;
  onToggleTheme: () => void;
}

export function TopStudyControls({
  language,
  importance,
  theme,
  onLanguage,
  onImportance,
  onToggleTheme,
}: Props) {
  return (
    <div className="sticky top-3 z-30 mx-auto mb-3 flex w-full max-w-[1920px] justify-end px-3 sm:px-4 lg:px-5">
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/70 bg-white/90 p-2 shadow-soft backdrop-blur-md dark:border-slate-700 dark:bg-slate-950/90">
        <div className="flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
          <button
            type="button"
            aria-label="Show all nodes"
            onClick={() => onImportance("all")}
            className={`rounded-lg px-4 py-2 text-xs font-black ${importance === "all" ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "text-slate-600 dark:text-slate-300"}`}
          >
            All
          </button>
          <button
            type="button"
            aria-label="Show high importance nodes only"
            onClick={() => onImportance("high")}
            className={`rounded-lg px-4 py-2 text-xs font-black ${importance === "high" ? "bg-rose-600 text-white" : "text-slate-600 dark:text-slate-300"}`}
          >
            High only
          </button>
        </div>
        <div className="flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
          {(["vi", "ja", "en"] as const).map((lang) => (
            <button
              type="button"
              aria-label={`Switch language to ${lang}`}
              key={lang}
              onClick={() => onLanguage(lang)}
              className={`rounded-lg px-4 py-2 text-xs font-black uppercase ${language === lang ? "bg-cyan-600 text-white" : "text-slate-600 dark:text-slate-300"}`}
            >
              {lang}
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label="Toggle dark mode"
          onClick={onToggleTheme}
          className="rounded-xl bg-slate-950 px-3 py-2 text-xs font-black text-white shadow-sm transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
        >
          {theme === "dark" ? (
            <Sun className="mr-1 inline h-4 w-4" />
          ) : (
            <Moon className="mr-1 inline h-4 w-4" />
          )}
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </div>
  );
}
