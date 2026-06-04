import { fundamentalInfoV81RMixedMockMiniSet } from '../../../courses/fundamental-info/v81rMixedMockMiniSet';
import type { LessonWorkspaceProps as Props } from './LessonWorkspaceTypes';
import { getNodeLabel } from '../utils/i18n';

const domainClass: Record<string, string> = { algorithm: 'bg-violet-50 text-violet-700', database: 'bg-blue-50 text-blue-700', network: 'bg-cyan-50 text-cyan-700', security: 'bg-rose-50 text-rose-700' };

export function FundamentalInfoV81RMixedMockPanel(props: Props) {
  const language = props.language === 'ja' ? 'ja' : 'vi';
  return (
    <section className="rounded-[2rem] border border-blue-200 bg-blue-50/70 p-5 shadow-sm dark:border-blue-800 dark:bg-blue-950/20">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-blue-700">V81R 基本情報 mixed mock mini-set</p>
          <h3 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">Pseudo-code + SQL + network + security を軽く混ぜる</h3>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">FE本番のように分野を切り替える練習です。重いfull mockではなく、短いmini-setで「問題文の観点を切り替える力」を鍛えます。</p>
        </div>
        <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-blue-700 shadow-sm dark:bg-slate-900">{fundamentalInfoV81RMixedMockMiniSet.length} mixed questions</span>
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        {fundamentalInfoV81RMixedMockMiniSet.map((item, index) => (
          <article key={item.id} className="rounded-3xl border border-white bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950">
            <div className="flex flex-wrap items-center justify-between gap-2"><span className="text-xs font-black uppercase tracking-[.16em] text-slate-500">Q{index + 1} · {item.kind}</span><span className={`rounded-full px-3 py-1 text-xs font-black ${domainClass[item.domain] ?? 'bg-slate-50 text-slate-700'}`}>{item.domain}</span></div>
            <h4 className="mt-2 text-lg font-black">{language === 'ja' ? item.titleJa : item.titleVi}</h4>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{language === 'ja' ? item.questionJa : item.questionVi}</p>
            {item.code && <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-950 p-3 text-xs font-bold text-blue-100">{item.code}</pre>}
            <div className="mt-3 rounded-2xl bg-amber-50 p-3 text-xs font-bold text-amber-900 dark:bg-amber-950/30 dark:text-amber-100"><b>Trap / bẫy:</b> {language === 'ja' ? item.trapJa : item.trapVi}<br/><b>Tip:</b> {language === 'ja' ? item.examTipJa : item.examTipVi}</div>
            <div className="mt-3 flex flex-wrap gap-2">{item.relatedNodeIds.map((nodeId) => { const node = props.nodes.find((entry) => entry.id === nodeId); return <button key={nodeId} type="button" onClick={() => props.onSelectNode(nodeId)} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700 hover:bg-blue-100 dark:bg-slate-900 dark:text-slate-200">{node ? getNodeLabel(node, props.language) : nodeId}</button>; })}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
