export type GraphStatusFilter = 'all' | 'new' | 'learning' | 'need_review' | 'mastered';

const filters: Array<{ id: GraphStatusFilter; label: string; cls: string }> = [
  { id: 'all', label: 'All', cls: 'bg-slate-950 text-white' },
  { id: 'new', label: 'New', cls: 'bg-slate-600 text-white' },
  { id: 'learning', label: 'Learning', cls: 'bg-blue-600 text-white' },
  { id: 'need_review', label: 'Need Review', cls: 'bg-amber-500 text-white' },
  { id: 'mastered', label: 'Done', cls: 'bg-emerald-600 text-white' },
];

export function MapStatusFilter({ value, onValue }: { value: GraphStatusFilter; onValue: (value: GraphStatusFilter) => void }) {
  return <div className="pointer-events-auto flex gap-1 rounded-2xl border border-white/70 bg-white/85 p-1 shadow-soft backdrop-blur-md">
    {filters.map((item) => <button key={item.id} onClick={() => onValue(item.id)} className={`rounded-xl px-3 py-2 text-[11px] font-black transition hover:-translate-y-0.5 ${value === item.id ? item.cls : 'bg-white text-slate-600'}`}>{item.label}</button>)}
  </div>;
}
