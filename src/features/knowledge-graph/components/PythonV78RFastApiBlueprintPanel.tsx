import { pythonV78RFastApiBlueprints } from '../../../courses/python/v78rFastApiBlueprints';

export function PythonV78RFastApiBlueprintPanel() {
  return (
    <section className="rounded-3xl border border-sky-200 bg-sky-50 p-4 shadow-sm dark:border-sky-800 dark:bg-sky-950/20">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-sky-700 dark:text-sky-200">V78R FastAPI Local Blueprint</p>
      <h3 className="mt-1 text-lg font-black">Route / schema / validation / test plan rõ hơn</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {pythonV78RFastApiBlueprints.map((item) => (
          <article key={item.id} className="rounded-2xl bg-white p-4 text-sm shadow-sm dark:bg-slate-950">
            <div className="flex items-center gap-2"><span className="rounded-lg bg-sky-600 px-2 py-1 text-xs font-black text-white">{item.method}</span><code className="font-black">{item.route}</code></div>
            <b className="mt-3 block">{item.title}</b>
            <p className="mt-1 text-slate-700 dark:text-slate-300">{item.purposeVi}</p>
            <div className="mt-3 grid gap-2 text-xs">
              <code className="rounded bg-slate-100 p-2 dark:bg-slate-900">Request: {item.requestExample}</code>
              <code className="rounded bg-slate-100 p-2 dark:bg-slate-900">Response: {item.responseExample}</code>
            </div>
            <ul className="mt-3 list-disc pl-5 text-xs text-slate-600 dark:text-slate-400">
              {item.validationChecks.slice(0, 2).map((check) => <li key={check}>{check}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
