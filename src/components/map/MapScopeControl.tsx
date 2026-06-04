import type { MapScope } from './mapTypes';

const scopes: Array<{ id: MapScope; label: string; hint: string }> = [
  { id: 'phase', label: 'Phase', hint: 'lộ trình' },
  { id: 'focus', label: 'Focus node', hint: 'node đang chọn' },
  { id: 'next10', label: 'Next 10', hint: 'học tiếp' },
];

export function MapScopeControl({ scope, onScope }: { scope: MapScope; onScope: (scope: MapScope) => void }) {
  return <div className="pointer-events-auto flex gap-1 rounded-2xl border border-white/70 bg-white/85 p-1 shadow-soft backdrop-blur-md">
    {scopes.map((item) => <button key={item.id} onClick={() => onScope(item.id)} className={`rounded-xl px-3 py-2 text-left text-[11px] font-black transition ${scope === item.id ? 'bg-emerald-600 text-white shadow-glow' : 'bg-white text-slate-600 hover:-translate-y-0.5'}`}>
      <span className="block">{item.label}</span><span className={`text-[10px] font-semibold ${scope === item.id ? 'text-emerald-100' : 'text-slate-400'}`}>{item.hint}</span>
    </button>)}
  </div>;
}
