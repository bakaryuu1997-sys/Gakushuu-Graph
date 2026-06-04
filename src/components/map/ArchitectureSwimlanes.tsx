const laneSets = {
  ai: [
    ['AI Basics', 'khái niệm nền', 'bg-violet-50 text-violet-900 border-violet-200/80'],
    ['Data / ML', 'data → model', 'bg-cyan-50 text-cyan-900 border-cyan-200/80'],
    ['Deep Learning', 'NN / Transformer', 'bg-indigo-50 text-indigo-900 border-indigo-200/80'],
    ['GenAI', 'LLM / RAG', 'bg-fuchsia-50 text-fuchsia-900 border-fuchsia-200/80'],
    ['Ethics / Law', 'privacy', 'bg-rose-50 text-rose-900 border-rose-200/80'],
    ['Business', 'ROI', 'bg-amber-50 text-amber-900 border-amber-200/80'],
  ],
  fundamental: [
    ['Algorithm', '計算量', 'bg-blue-50 text-blue-900 border-blue-200/80'],
    ['Programming', 'logic', 'bg-indigo-50 text-indigo-900 border-indigo-200/80'],
    ['Database', 'SQL', 'bg-cyan-50 text-cyan-900 border-cyan-200/80'],
    ['Network', 'TCP/IP', 'bg-sky-50 text-sky-900 border-sky-200/80'],
    ['Security', '暗号/認証', 'bg-rose-50 text-rose-900 border-rose-200/80'],
    ['System', '設計/test', 'bg-amber-50 text-amber-900 border-amber-200/80'],
  ],
  sql: [
    ['Basic', 'SELECT', 'bg-sky-50 text-sky-900 border-sky-200/80'],
    ['JOIN', 'relations', 'bg-cyan-50 text-cyan-900 border-cyan-200/80'],
    ['Aggregate', 'GROUP BY', 'bg-indigo-50 text-indigo-900 border-indigo-200/80'],
    ['DML', 'change data', 'bg-amber-50 text-amber-900 border-amber-200/80'],
    ['Transaction', 'ACID', 'bg-emerald-50 text-emerald-900 border-emerald-200/80'],
    ['Security', 'injection', 'bg-rose-50 text-rose-900 border-rose-200/80'],
  ],
  brse: [
    ['Requirement', '要件定義', 'bg-emerald-50 text-emerald-900 border-emerald-200/80'],
    ['Design', '設計', 'bg-cyan-50 text-cyan-900 border-cyan-200/80'],
    ['Review', 'レビュー', 'bg-indigo-50 text-indigo-900 border-indigo-200/80'],
    ['Test', 'テスト', 'bg-amber-50 text-amber-900 border-amber-200/80'],
    ['Change', '仕様変更', 'bg-rose-50 text-rose-900 border-rose-200/80'],
    ['PM', '進捗', 'bg-slate-50 text-slate-900 border-slate-200/80'],
  ],
  linux: [
    ['File', 'ls/cd/rm', 'bg-zinc-50 text-zinc-900 border-zinc-200/80'],
    ['Search', 'grep/find', 'bg-sky-50 text-sky-900 border-sky-200/80'],
    ['Permission', 'chmod', 'bg-amber-50 text-amber-900 border-amber-200/80'],
    ['Process', 'ps/kill', 'bg-rose-50 text-rose-900 border-rose-200/80'],
    ['Docker', 'compose', 'bg-cyan-50 text-cyan-900 border-cyan-200/80'],
    ['Git', 'workflow', 'bg-indigo-50 text-indigo-900 border-indigo-200/80'],
  ],
};

const keyOf = (courseTitle: string) => courseTitle.includes('基本情報') ? 'fundamental' : courseTitle.includes('SQL') ? 'sql' : courseTitle.includes('BrSE') ? 'brse' : courseTitle.includes('Linux') ? 'linux' : 'ai';

export function ArchitectureSwimlanes({ courseTitle, fullscreen = false }: { courseTitle: string; fullscreen?: boolean }) {
  const lanes = laneSets[keyOf(courseTitle)];
  return (
    <div className={`pointer-events-none absolute inset-x-8 ${fullscreen ? 'top-[10.3rem]' : 'top-[10.8rem]'} z-[1] hidden gap-2 xl:grid xl:grid-cols-6`}>
      {lanes.map(([title, subtitle, tone]) => (
        <div key={title} className={`rounded-2xl border ${tone} px-3 py-2 opacity-90 shadow-sm`}>
          <p className="text-[10px] font-black uppercase tracking-[0.14em]">{title}</p>
          <p className="mt-0.5 text-[10px] font-semibold opacity-70">{subtitle}</p>
        </div>
      ))}
    </div>
  );
}
