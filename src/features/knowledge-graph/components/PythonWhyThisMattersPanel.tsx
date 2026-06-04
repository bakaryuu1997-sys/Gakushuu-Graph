const cards = [
  {
    title: 'AI / data work',
    ja: 'AI・data実務',
    bodyVi: 'Log parser, JSON transform, API response parser và config loader là kỹ năng dùng khi xử lý dữ liệu trước khi đưa vào model AI.',
    bodyJa: 'log parser、JSON変換、API response parser、config loaderはAI modelにdataを渡す前の前処理で使います。',
  },
  {
    title: 'Backend / FastAPI',
    ja: 'Backend・FastAPI',
    bodyVi: 'Route, schema, HTTPException, response model và service layer giúp API dễ test, dễ sửa và rõ trách nhiệm.',
    bodyJa: 'route、schema、HTTPException、response model、service layerでAPIの責務が明確になり、testしやすくなります。',
  },
  {
    title: 'Automation / 仕事',
    ja: '自動化・仕事',
    bodyVi: 'CSV cleaning, expense tracker, markdown notes, retry logic và config loader là các bài gần công việc thực tế.',
    bodyJa: 'CSV cleaning、expense tracker、markdown notes、retry logic、config loaderは実務に近い練習です。',
  },
  {
    title: 'Algorithm thinking',
    ja: 'Algorithm思考',
    bodyVi: 'Sliding window, heap, graph, recursion và interval giúp bạn học cách giảm brute force và đọc edge case tốt hơn.',
    bodyJa: 'sliding window、heap、graph、recursion、intervalによりbrute forceを避け、edge caseを読む力が上がります。',
  },
];

export function PythonWhyThisMattersPanel() {
  return (
    <section className="rounded-3xl border border-indigo-200 bg-indigo-50 p-4 shadow-sm dark:border-indigo-800 dark:bg-indigo-950/30">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-indigo-700 dark:text-indigo-200">V74R Why this matters</p>
      <h3 className="mt-1 text-xl font-black">Bài tập thực tế để học Python không bị rời rạc</h3>
      <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">VI: mỗi nhóm bài đều gắn với AI, backend, automation hoặc thuật toán. JA: 各練習はAI、backend、自動化、algorithmに接続します。</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {cards.map((card) => (
          <article key={card.title} className="rounded-2xl border border-white/70 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
            <div className="text-base font-black">{card.title}</div>
            <div className="text-xs font-bold text-indigo-700 dark:text-indigo-200">{card.ja}</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{card.bodyVi}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{card.bodyJa}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
