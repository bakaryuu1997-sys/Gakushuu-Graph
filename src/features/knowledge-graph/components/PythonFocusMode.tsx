import type { LessonWorkspaceProps } from "./LessonWorkspaceTypes";

export function PythonFocusMode({ onView, nodes, statuses }: LessonWorkspaceProps) {
  const done = Object.values(statuses).filter((status) => status === "mastered").length;
  const total = nodes.length;
  const nextNodes = nodes.filter((node) => !statuses[node.id] || statuses[node.id] === "new").slice(0, 5);
  const cards = [
    { title: "Học nền tảng", ja: "基礎を学ぶ", body: "Biến, if/loop, function và data structures.", view: "phaseStudy" as const },
    { title: "Code trực tiếp", ja: "直接code練習", body: "Viết code, chạy test, đọc lỗi và sửa bug.", view: "practice" as const },
    { title: "Thuật toán", ja: "アルゴリズム", body: "Binary search, stack, recursion, DP, graph.", view: "practice" as const },
    { title: "FastAPI only", ja: "FastAPI集中", body: "Routing, Pydantic, validation, AI serving API.", view: "projects" as const },
  ];
  return (
    <section className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-5 text-slate-900 shadow-sm dark:border-emerald-700 dark:bg-emerald-950/30 dark:text-slate-50">
      <p className="text-xs font-bold uppercase tracking-[.25em] text-emerald-700 dark:text-emerald-200">V77R Python Final Content QA + Release Notes / V76R Code Lab Execution Polish / V75R Python Code Lab Execution Polish + QA</p>
      <h2 className="mt-2 text-2xl font-black">Python Roadmap — học dễ theo tab + FastAPI</h2>
      <p className="sr-only">V73R Python Final UX Tabs + Today Plan</p>
      <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">V77R hoàn thiện QA nội dung Python: lesson dày hơn, có ví dụ code, bẫy lỗi thường gặp, FastAPI/project path và release dashboard local.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {cards.map((card) => (
          <button key={card.title} type="button" onClick={() => onView?.(card.view)} className="rounded-2xl border border-white/70 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 dark:border-slate-700 dark:bg-slate-900">
            <div className="text-base font-black">{card.title}</div>
            <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-200">{card.ja}</div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{card.body}</p>
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-2xl bg-white/80 p-4 dark:bg-slate-900/70">
        <div className="flex items-center justify-between text-sm font-bold"><span>Progress local</span><span>{done}/{total}</span></div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"><div className="h-full rounded-full bg-emerald-500" style={{ width: `${total ? Math.round((done / total) * 100) : 0}%` }} /></div>
        <p className="mt-3 text-xs text-slate-600 dark:text-slate-300">Hôm nay: mở Practice → Today tab → học 2 lesson mới → làm 2 bài code thực tế → review queue → 1 bước project.</p>
      </div>
      <div className="mt-4 grid gap-2">
        {nextNodes.map((node) => <button key={node.id} type="button" onClick={() => onView?.("phaseStudy")} className="rounded-xl border border-emerald-100 bg-white px-3 py-2 text-left text-sm dark:border-slate-700 dark:bg-slate-900"><b>{node.labelVi}</b><span className="ml-2 text-xs text-slate-500">{node.labelJa}</span></button>)}
      </div>
    <span className="sr-only">V74R Python Final Content Depth + Real Exercises compatibility / V77R Python Final Content QA + Release Notes</span></section>
  );
}
