import type { MapDensity } from './mapTypes';

const densities: Array<{ id: MapDensity; label: string; hint: string }> = [
  { id: 'simple', label: 'Simple', hint: 'ít node' },
  { id: 'standard', label: 'Standard', hint: 'học tốt' },
  { id: 'detailed', label: 'Detailed', hint: 'nhiều node' },
];

export function MapDensityControl({ density, onDensity }: { density: MapDensity; onDensity: (density: MapDensity) => void }) {
  return <div className="pointer-events-auto flex gap-1 rounded-2xl border border-white/70 bg-white/85 p-1 shadow-soft backdrop-blur-md">
    {densities.map((item) => <button key={item.id} onClick={() => onDensity(item.id)} className={`rounded-xl px-3 py-2 text-left text-[11px] font-black transition ${density === item.id ? 'bg-indigo-600 text-white shadow-glow' : 'bg-white text-slate-600 hover:-translate-y-0.5'}`}>
      <span className="block">{item.label}</span><span className={`text-[10px] font-semibold ${density === item.id ? 'text-indigo-100' : 'text-slate-400'}`}>{item.hint}</span>
    </button>)}
  </div>;
}
