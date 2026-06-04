export type LessonDepthMode = 'basic' | 'medium' | 'deep' | 'exam';

const modes: Array<{ id: LessonDepthMode; label: string; hint: string }> = [
  { id: 'basic', label: 'Basic', hint: 'bản ngắn' },
  { id: 'medium', label: 'Medium', hint: 'đủ học' },
  { id: 'deep', label: 'Deep', hint: 'chuyên sâu' },
  { id: 'exam', label: 'Exam only', hint: 'ôn thi' },
];

export function LessonModeControls({ mode, shortFirst, onMode, onShortFirst }: { mode: LessonDepthMode; shortFirst: boolean; onMode: (mode: LessonDepthMode) => void; onShortFirst: (value: boolean) => void }) {
  return <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <p className="text-xs font-black uppercase tracking-[.16em] text-slate-400">Lesson depth</p>
      <button onClick={() => onShortFirst(!shortFirst)} className={`rounded-xl px-3 py-2 text-xs font-black ${shortFirst ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>Học bản ngắn trước</button>
    </div>
    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
      {modes.map((item) => <button key={item.id} onClick={() => onMode(item.id)} className={`rounded-xl px-3 py-2 text-left text-xs font-black ${mode === item.id ? 'bg-indigo-600 text-white shadow-glow' : 'bg-slate-100 text-slate-600'}`}>
        <span className="block">{item.label}</span><span className={`text-[10px] ${mode === item.id ? 'text-indigo-100' : 'text-slate-400'}`}>{item.hint}</span>
      </button>)}
    </div>
  </div>;
}
