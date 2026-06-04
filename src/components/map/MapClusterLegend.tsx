const tags = {
  ai: [['AI Basics','violet'], ['Data / ML','cyan'], ['GenAI','indigo'], ['Ethics','rose'], ['Business','amber']],
  fundamental: [['Algorithm','blue'], ['Programming','indigo'], ['Database','cyan'], ['Network','sky'], ['Security','rose'], ['System','amber']],
  sql: [['SELECT','sky'], ['JOIN','cyan'], ['GROUP BY','indigo'], ['DML','amber'], ['Security','rose']],
  brse: [['Requirement','emerald'], ['Design','cyan'], ['Test','amber'], ['Change','rose'], ['PM','slate']],
  linux: [['File','zinc'], ['Search','sky'], ['Permission','amber'], ['Process','rose'], ['Docker','cyan'], ['Git','indigo']],
};

const keyOf = (courseTitle: string) => courseTitle.includes('基本情報') ? 'fundamental' : courseTitle.includes('SQL') ? 'sql' : courseTitle.includes('BrSE') ? 'brse' : courseTitle.includes('Linux') ? 'linux' : 'ai';
const classNameOf = (color: string) => ({
  violet:'bg-violet-50 text-violet-700', cyan:'bg-cyan-50 text-cyan-700', indigo:'bg-indigo-50 text-indigo-700',
  rose:'bg-rose-50 text-rose-700', amber:'bg-amber-50 text-amber-700', sky:'bg-sky-50 text-sky-700',
  emerald:'bg-emerald-50 text-emerald-700', slate:'bg-slate-50 text-slate-700', zinc:'bg-zinc-50 text-zinc-700', blue:'bg-blue-50 text-blue-700',
}[color] ?? 'bg-slate-50 text-slate-700');

export function MapClusterLegend({ courseTitle }: { courseTitle: string }) {
  return <div className="pointer-events-none absolute bottom-4 left-4 z-20 hidden max-w-lg gap-1 rounded-2xl border border-white/70 bg-white/80 p-2 text-[10px] font-bold text-slate-600 shadow-soft backdrop-blur-md xl:flex">
    {tags[keyOf(courseTitle)].map(([label, color]) => <span key={label} className={`rounded-xl px-2 py-1 ${classNameOf(color)}`}>{label}</span>)}
  </div>;
}
