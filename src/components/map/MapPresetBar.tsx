import { getMapFocusPresets } from './mapFocus';
import type { MapFocus } from './mapTypes';

export function MapPresetBar({ focus, courseTitle, onFocus }: { focus: MapFocus; courseTitle: string; onFocus: (focus: MapFocus) => void }) {
  const presets = getMapFocusPresets(courseTitle);
  return <div className="pointer-events-auto flex flex-wrap gap-2 rounded-2xl border border-white/70 bg-white/85 p-2 shadow-soft backdrop-blur-md">
    {presets.map((preset) => <button key={preset.id} onClick={() => onFocus(preset.id)} className={`rounded-xl px-3 py-2 text-left text-xs font-black transition ${focus === preset.id ? 'bg-slate-950 text-white shadow-glow' : 'bg-white text-slate-600 hover:-translate-y-0.5'}`}>
      <span className="block">{preset.label}</span><span className={`text-[10px] font-semibold ${focus === preset.id ? 'text-slate-300' : 'text-slate-400'}`}>{preset.hint}</span>
    </button>)}
  </div>;
}
