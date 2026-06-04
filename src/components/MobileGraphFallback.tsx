export function MobileGraphFallback({
  onOpen,
  onStudy,
}: {
  onOpen: () => void;
  onStudy: () => void;
}) {
  return (
    <section className="glass-panel rounded-[2rem] p-6">
      <p className="text-xs font-black uppercase tracking-[.2em] text-cyan-600">
        Mobile map
      </p>
      <h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">
        Graph lớn đã được tắt trên mobile
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        Để tránh kéo nhầm với cuộn trang và giảm lag, mobile ưu tiên Roadmap +
        Lesson. Graph chỉ nên dùng như advanced view khi bạn cần nhìn quan hệ giữa
        các chủ đề AI Passport.
      </p>
      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <button
          type="button"
          onClick={onStudy}
          aria-label="Open study roadmap first on mobile"
          className="rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-black text-white shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Study Roadmap
        </button>
        <button
          type="button"
          onClick={onOpen}
          aria-label="Open fullscreen map on mobile"
          className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:bg-white dark:text-slate-950"
        >
          Open fullscreen map
        </button>
      </div>
    </section>
  );
}

export function LoadingPanel({ label }: { label: string }) {
  return (
    <div className="glass-panel rounded-[2rem] p-6 text-sm font-black text-slate-600">
      {label}
    </div>
  );
}
