const qaItems = [
  { title: 'Today tab', vi: 'Học theo 2 lesson + 2 code + review + project step.', ja: '2 lesson + 2 code + review + project stepで学習します。' },
  { title: 'Code Lab', vi: 'Run visible/all tests rõ ràng, output có Why failed.', ja: 'visible/all testsと失敗理由が分かります。' },
  { title: 'Algorithm', vi: 'Visual trace giúp hiểu binary search, stack, recursion.', ja: 'visual traceでalgorithmを理解します。' },
  { title: 'FastAPI', vi: 'Validator kiểm route, schema, service, response.', ja: 'route/schema/service/responseを検査します。' },
  { title: 'Project', vi: 'Mini project có starter, test, checklist, solution.', ja: 'starter/test/checklist/solutionがあります。' },
  { title: 'Mobile', vi: 'Tab gọn, card ngắn, output có thể đọc theo từng khối.', ja: 'tabとcardを短くし、mobileで読みやすくします。' },
];

export function PythonFinalQaPanel() {
  return (
    <section className="rounded-3xl border border-indigo-200 bg-white p-4 shadow-sm dark:border-indigo-800 dark:bg-slate-950">
      <p className="text-xs font-black uppercase tracking-[.2em] text-indigo-600">V76R Final QA · Python release candidate</p>
      <h3 className="mt-1 text-xl font-black">Final QA checklist / 最終確認</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {qaItems.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-700 dark:bg-slate-900">
            <b>{item.title}</b>
            <p className="mt-1 text-slate-600 dark:text-slate-300">VI: {item.vi}</p>
            <p className="mt-1 text-slate-500 dark:text-slate-400">JA: {item.ja}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
