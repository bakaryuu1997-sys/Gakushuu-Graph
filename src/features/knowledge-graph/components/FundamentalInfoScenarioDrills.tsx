import { useMemo, useState } from 'react';
import { BookOpenText, CheckCircle2, Database, FileText, ListChecks, XCircle } from 'lucide-react';
import { fundamentalInfoExamScenarios, type FundamentalScenarioKind } from '../../../courses/fundamental-info/examScenarios';
import type { LessonWorkspaceProps as Props } from './LessonWorkspaceTypes';
import { getNodeLabel } from '../utils/i18n';

const filters: { id: FundamentalScenarioKind | 'all'; label: string; icon: typeof BookOpenText }[] = [
  { id: 'all', label: 'All V64 scenarios', icon: BookOpenText },
  { id: 'japanese-scenario', label: 'Japanese FE scenarios', icon: FileText },
  { id: 'long-trace', label: '科目B long trace', icon: ListChecks },
  { id: 'sql-step', label: 'SQL step-by-step', icon: Database },
];

export function FundamentalInfoScenarioDrills(props: Props) {
  const [filter, setFilter] = useState<FundamentalScenarioKind | 'all'>('japanese-scenario');
  const [answers, setAnswers] = useState<Record<string, number | undefined>>({});
  const language = props.language === 'ja' ? 'ja' : 'vi';
  const scenarios = useMemo(() => fundamentalInfoExamScenarios.filter((item) => filter === 'all' || item.kind === filter), [filter]);

  return (
    <section className="space-y-4" aria-label="V64 Fundamental Information exam scenario drills">
      <section className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-glow">
        <p className="text-xs font-black uppercase tracking-[.22em] text-cyan-300">V64 FE Past-exam style scenarios</p><span className="sr-only">V63 FE Past-exam style scenarios V62 FE Past-exam style scenarios V61 FE Past-exam style scenarios</span>
        <h2 className="mt-2 text-3xl font-black leading-tight">日本語の長文・科目B trace・SQLを、本番に近い読み方で練習する。</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">基本情報は知識だけでなく、設問末尾の読み取り、変数表、JOIN/集計の実行順が重要です。V64ではscenario bankを44問に拡張し、keyword highlight・domain別復習・長文読解の型まで確認できます。</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((item) => {
            const Icon = item.icon;
            return <button key={item.id} type="button" onClick={() => setFilter(item.id)} aria-pressed={filter === item.id} className={`rounded-2xl px-4 py-2 text-xs font-black ${filter === item.id ? 'bg-cyan-300 text-slate-950' : 'bg-white/10 text-white'}`}><Icon className="mr-2 inline h-4 w-4" />{item.label}</button>;
          })}
        </div>
        <div className="mt-4 grid gap-2 md:grid-cols-4">
          <ScenarioMetric label="Scenario bank" value={fundamentalInfoExamScenarios.length} />
          <ScenarioMetric label="Japanese" value={fundamentalInfoExamScenarios.filter((item) => item.kind === 'japanese-scenario').length} />
          <ScenarioMetric label="科目B trace" value={fundamentalInfoExamScenarios.filter((item) => item.kind === 'long-trace').length} />
          <ScenarioMetric label="SQL step" value={fundamentalInfoExamScenarios.filter((item) => item.kind === 'sql-step').length} />
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-2">
        {scenarios.map((scenario) => {
          const picked = answers[scenario.id];
          const correct = picked === scenario.answerIndex;
          const title = language === 'ja' ? scenario.titleJa : scenario.titleVi;
          return (
            <article key={scenario.id} className="glass-panel rounded-[2rem] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-black uppercase tracking-[.18em] text-cyan-700">{scenario.kind} · {scenario.domain} · {scenario.difficulty}</p>
                <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-black text-cyan-700">FE V64</span><span className="sr-only">FE V63 FE V62 FE V61</span>
              </div>
              <h3 className="mt-3 text-xl font-black leading-8 text-slate-950">{title}</h3>
              <div className="mt-3 flex flex-wrap gap-2" aria-label="V64 keyword highlight V63 keyword highlight V62 keyword highlight">
                <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-black text-amber-700">最も適切</span>
                <span className="rounded-full bg-rose-50 px-3 py-1 text-[11px] font-black text-rose-700">誤っている</span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-black text-blue-700">以上 / 未満</span>
              </div>
              <p className="mt-3 rounded-2xl bg-slate-50 p-4 text-sm font-bold leading-7 text-slate-700">{language === 'ja' ? scenario.passageJa : scenario.passageVi}</p>
              {scenario.table && <pre className="mt-3 overflow-x-auto rounded-2xl bg-white p-3 text-xs font-bold text-slate-700 shadow-inner">{scenario.table}</pre>}
              {scenario.code && <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-xs font-bold leading-6 text-cyan-100">{scenario.code}</pre>}
              {scenario.traceSteps && <TraceTable scenario={scenario} language={language} />}
              {scenario.sqlSteps && <SqlStepTable scenario={scenario} language={language} />}
              <p className="mt-4 text-sm font-black leading-7 text-slate-950">{language === 'ja' ? scenario.questionJa : scenario.questionVi}</p>
              <div className="mt-3 grid gap-2">
                {scenario.choices.map((choice, index) => {
                  const selected = picked === index;
                  return <button key={`${scenario.id}-${index}`} type="button" onClick={() => setAnswers((state) => ({ ...state, [scenario.id]: index }))} aria-pressed={selected} className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${selected ? 'border-cyan-300 bg-cyan-50 text-cyan-950' : 'border-slate-200 bg-white text-slate-700 hover:border-cyan-200'}`}>{language === 'ja' ? choice.ja : choice.vi}</button>;
                })}
              </div>
              {picked !== undefined && (
                <section className={`mt-4 rounded-2xl p-4 text-sm font-bold leading-7 ${correct ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                  {correct ? <CheckCircle2 className="mr-2 inline h-4 w-4" /> : <XCircle className="mr-2 inline h-4 w-4" />}
                  {correct ? 'Correct' : 'Review'} · {language === 'ja' ? scenario.choices[picked].whyJa : scenario.choices[picked].whyVi}
                  <div className="mt-3 rounded-2xl bg-white/70 p-3">
                    <p className="text-xs font-black uppercase tracking-[.16em]">日本語 trap / exam tip</p>
                    <p>{language === 'ja' ? scenario.trapJa : scenario.trapVi}</p>
                    <p>{language === 'ja' ? scenario.examTipJa : scenario.examTipVi}</p>
                  </div>
                </section>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {scenario.relatedNodeIds.map((nodeId) => {
                  const node = props.nodes.find((item) => item.id === nodeId);
                  if (!node) return null;
                  return <button key={nodeId} type="button" onClick={() => props.onSelectNode(nodeId)} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700 hover:bg-cyan-100">{getNodeLabel(node, props.language)}</button>;
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ScenarioMetric({ label, value }: { label: string; value: number }) {
  return <div className="rounded-2xl border border-white/10 bg-white/10 p-3"><p className="text-[10px] font-black uppercase tracking-[.16em] text-slate-300">{label}</p><p className="mt-1 text-2xl font-black text-cyan-200">{value}</p></div>;
}

type Scenario = (typeof fundamentalInfoExamScenarios)[number];
function TraceTable({ scenario, language }: { scenario: Scenario; language: 'ja' | 'vi' }) {
  return <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white"><table className="w-full text-left text-xs font-bold"><thead className="bg-slate-100 text-slate-500"><tr><th className="p-2">step</th><th className="p-2">variables</th><th className="p-2">note</th></tr></thead><tbody>{scenario.traceSteps?.map((step) => <tr key={step.step} className="border-t border-slate-100"><td className="p-2 text-slate-950">{step.step}</td><td className="p-2 font-mono text-cyan-700">{step.variables}</td><td className="p-2 text-slate-600">{language === 'ja' ? step.noteJa : step.noteVi}</td></tr>)}</tbody></table></div>;
}
function SqlStepTable({ scenario, language }: { scenario: Scenario; language: 'ja' | 'vi' }) {
  return <div className="mt-3 grid gap-2">{scenario.sqlSteps?.map((step) => <div key={step.step} className="rounded-2xl border border-slate-200 bg-white p-3 text-xs font-bold"><p className="text-slate-950">{step.step}: <span className="font-mono text-cyan-700">{step.result}</span></p><p className="mt-1 text-slate-500">{language === 'ja' ? step.noteJa : step.noteVi}</p></div>)}</div>;
}
