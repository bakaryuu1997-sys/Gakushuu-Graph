export function MapReadabilityHint() {
  const tips = [
    "Phase = học đúng lộ trình, tránh mở quá nhiều node một lúc.",
    "Focus = chỉ xem node đang học và quan hệ gần nhất.",
    "Status = lọc New / Learning / Need Review / Done để ôn nhanh.",
  ];
  return (
    <aside className="rounded-[1.75rem] border border-indigo-100 bg-indigo-50/80 p-4 text-sm text-indigo-950 shadow-sm dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-100">
      <p className="text-xs font-black uppercase tracking-[.18em] text-indigo-600 dark:text-indigo-300">Map reading guide</p>
      <h3 className="mt-1 text-lg font-black">Cách đọc graph không bị rối</h3>
      <ul className="mt-2 space-y-2">
        {tips.map((tip) => <li key={tip} className="font-bold leading-6">• {tip}</li>)}
      </ul>
    </aside>
  );
}
