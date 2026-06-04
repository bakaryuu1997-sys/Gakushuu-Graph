import { Download, FileUp, ImageDown, Search, RotateCcw } from 'lucide-react';
import { categoryMeta } from '../utils/categoryMeta';
import type { GraphFilters, KnowledgeCategory, Language } from '../types';

const categories: KnowledgeCategory[] = ['strategy', 'management', 'technology', 'software', 'business', 'ai', 'database', 'network', 'security'];

interface StudyStats {
  total: number;
  mastered: number;
  learning: number;
  fresh: number;
  favorites: number;
}

interface ControlPanelProps {
  filters: GraphFilters;
  language: Language;
  progress: number;
  stats: StudyStats;
  totalVisible: number;
  onQuery: (query: string) => void;
  onToggleCategory: (category: KnowledgeCategory) => void;
  onMode: (mode: GraphFilters['mode']) => void;
  onImportance: (importance: GraphFilters['importance']) => void;
  onLanguage: (language: Language) => void;
  onReset: () => void;
  onExportProgress: () => void;
  onImportProgress: (file: File) => void;
  onExportGraph: () => void;
}

export function ControlPanel(props: ControlPanelProps) {
  return (
    <aside className="glass-panel rounded-[2rem] p-5">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-500">Study Control</p>
        <h2 className="mt-1 text-xl font-black text-slate-950">Bộ lọc học tập</h2>
        <p className="mt-1 text-sm text-slate-600">{props.totalVisible} node đang hiển thị · {props.progress}% đã hiểu</p>
        <p className="mt-2 rounded-2xl bg-indigo-50 px-3 py-2 text-xs font-semibold leading-5 text-indigo-800">Overview để nhìn toàn cảnh. Study chỉ bung vùng liên quan node đang chọn. Exam chỉ giữ phần quan trọng.</p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <Stat label="Đã hiểu" value={props.stats.mastered} tone="text-emerald-700" />
        <Stat label="Đang học" value={props.stats.learning} tone="text-indigo-700" />
        <Stat label="Chưa học" value={props.stats.fresh} tone="text-slate-600" />
        <Stat label="Yêu thích" value={props.stats.favorites} tone="text-amber-700" />
      </div>

      <label className="mt-5 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <Search className="h-4 w-4 text-slate-400" />
        <input
          value={props.filters.query}
          onChange={(event) => props.onQuery(event.target.value)}
          placeholder="Search 日本語 / Vietnamese / English"
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
        />
      </label>

      <div className="mt-5 space-y-2">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Mode</p>
        <div className="grid grid-cols-3 gap-2">
          {(['overview', 'study', 'exam'] as const).map((mode) => (
            <button key={mode} onClick={() => props.onMode(mode)} className={`rounded-xl px-3 py-2 text-xs font-bold capitalize transition ${props.filters.mode === mode ? 'bg-slate-950 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>{mode}</button>
          ))}
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Category</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const meta = categoryMeta[category];
            const active = props.filters.categories.includes(category);
            return <button key={category} onClick={() => props.onToggleCategory(category)} className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${active ? `${meta.bg} ${meta.border} ${meta.color}` : 'border-slate-200 bg-white text-slate-600'}`}>{meta.label}</button>;
          })}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <button onClick={() => props.onImportance('all')} className={`rounded-xl px-3 py-2 text-xs font-bold ${props.filters.importance === 'all' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600'}`}>All</button>
        <button onClick={() => props.onImportance('high')} className={`rounded-xl px-3 py-2 text-xs font-bold ${props.filters.importance === 'high' ? 'bg-rose-600 text-white' : 'bg-white text-slate-600'}`}>High only</button>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {(['vi', 'ja', 'en'] as const).map((lang) => (
          <button key={lang} onClick={() => props.onLanguage(lang)} className={`rounded-xl px-3 py-2 text-xs font-bold uppercase ${props.language === lang ? 'bg-cyan-600 text-white' : 'bg-white text-slate-600'}`}>{lang}</button>
        ))}
      </div>


      <div className="mt-5 grid grid-cols-2 gap-2">
        <button onClick={props.onExportProgress} className="rounded-2xl bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5">
          <Download className="mr-1 inline h-4 w-4" /> Export JSON
        </button>
        <label className="cursor-pointer rounded-2xl bg-white px-3 py-2 text-center text-xs font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5">
          <FileUp className="mr-1 inline h-4 w-4" /> Import
          <input type="file" accept="application/json" className="hidden" onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) props.onImportProgress(file);
            event.currentTarget.value = '';
          }} />
        </label>
      </div>

      <button onClick={props.onExportGraph} className="mt-3 w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">
        <ImageDown className="mr-2 inline h-4 w-4" /> Export graph PNG
      </button>

      <button onClick={props.onReset} className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5">
        <RotateCcw className="mr-2 inline h-4 w-4" /> Reset progress
      </button>
    </aside>
  );
}

function Stat({ label, value, tone }: { label: string; value: number; tone: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <p className={`text-lg font-black ${tone}`}>{value}</p>
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">{label}</p>
    </div>
  );
}
