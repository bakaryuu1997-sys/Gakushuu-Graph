import type { StudyStatus } from '../types';

const buttons: Array<{ status: StudyStatus; label: string; cls: string }> = [
  { status: 'new', label: 'New', cls: 'bg-slate-100 text-slate-700' },
  { status: 'learning', label: 'Learning', cls: 'bg-blue-600 text-white' },
  { status: 'need_review', label: 'Need Review', cls: 'bg-amber-500 text-white' },
  { status: 'mastered', label: 'Done', cls: 'bg-emerald-600 text-white' },
];

export function NodeStatusButtons({ value, onSetStatus }: { value: StudyStatus; onSetStatus: (status: StudyStatus) => void }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
    <p className="mb-2 text-[10px] font-black uppercase tracking-[.16em] text-slate-400">Trạng thái học</p>
    <div className="grid grid-cols-2 gap-2">
      {buttons.map((item) => <button key={item.status} onClick={() => onSetStatus(item.status)} className={`rounded-xl px-3 py-2 text-xs font-black transition hover:-translate-y-0.5 ${value === item.status ? item.cls + ' shadow-glow' : 'bg-slate-50 text-slate-500'}`}>{item.label}</button>)}
    </div>
  </div>;
}
