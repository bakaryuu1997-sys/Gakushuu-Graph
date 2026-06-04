import { useMemo, useState } from 'react';
import { CheckCircle2, Eye, Keyboard, Lightbulb, RotateCcw, XCircle } from 'lucide-react';
import { fundamentalInfoExamScenarios, type FundamentalExamScenario } from '../../../courses/fundamental-info/examScenarios';
import type { LessonWorkspaceProps as Props } from './LessonWorkspaceTypes';
import { getNodeLabel } from '../utils/i18n';

type LevelFilter = 'all' | 'standard' | 'hard';

type TraceScenario = FundamentalExamScenario & { kind: 'long-trace'; traceSteps: NonNullable<FundamentalExamScenario['traceSteps']> };

const normalize = (value: string) => value.toLowerCase().replace(/\s+/g, '').replace(/[，、]/g, ',');
const isClose = (input: string, expected: string) => normalize(input) === normalize(expected);

export function KamokuBInteractiveTraceTrainer(props: Props) {
  const [level, setLevel] = useState<LevelFilter>('hard');
  const [scenarioId, setScenarioId] = useState('');
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState<Record<string, boolean>>({});
  const language = props.language === 'ja' ? 'ja' : 'vi';
  const traceScenarios = useMemo(() => fundamentalInfoExamScenarios.filter((item): item is TraceScenario => item.kind === 'long-trace' && !!item.traceSteps?.length), []);
  const visible = traceScenarios.filter((item) => level === 'all' || item.difficulty === level);
  const scenario = visible.find((item) => item.id === scenarioId) ?? visible[0] ?? traceScenarios[0];
  const steps = scenario?.traceSteps ?? [];
  const correctCount = checked ? steps.filter((step) => isClose(inputs[step.step] ?? '', step.variables)).length : 0;
  const readiness = steps.length ? Math.round((correctCount / steps.length) * 100) : 0;

  if (!scenario) return null;

  const reset = () => {
    setInputs({});
    setChecked(false);
    setShowHint({});
  };

  return (
    <section className="space-y-4" aria-label="V64 Kamoku B interactive trace trainer">
      <section className="rounded-[2rem] bg-gradient-to-br from-indigo-950 via-slate-950 to-cyan-950 p-5 text-white shadow-glow">
        <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.22em] text-cyan-300"><Keyboard className="h-4 w-4" /> V64 Interactive 科目B Trace Trainer</p>
        <h2 className="mt-2 text-3xl font-black leading-tight">答えを見る前に、自分で変数表を埋める練習。</h2>
        <p className="mt-3 max-w-3xl text-sm font-bold leading-7 text-slate-300">V63まではtrace表を読む練習が中心でした。V64では各stepの変数を自分で入力し、hint → check → review の順で科目B readinessを上げます。</p>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <Metric label="Trace bank" value={traceScenarios.length} />
          <Metric label="Hard traces" value={traceScenarios.filter((item) => item.difficulty === 'hard').length} />
          <Metric label="Current score" value={`${readiness}%`} />
          <Metric label="Correct rows" value={`${correctCount}/${steps.length}`} />
        </div>
      </section>

      <section className="glass-panel rounded-[2rem] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-indigo-600">difficulty / 問題選択</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(['all', 'standard', 'hard'] as const).map((item) => <button key={item} type="button" onClick={() => { setLevel(item); reset(); setScenarioId(''); }} aria-pressed={level === item} className={`rounded-2xl px-4 py-2 text-xs font-black ${level === item ? 'bg-indigo-700 text-white' : 'bg-white text-slate-600 shadow-sm'}`}>{item}</button>)}
            </div>
          </div>
          <label className="min-w-[260px] text-xs font-black uppercase tracking-[.18em] text-slate-500">
            Drill
            <select value={scenario.id} onChange={(event) => { setScenarioId(event.target.value); reset(); }} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-black normal-case tracking-normal text-slate-950">
              {visible.map((item) => <option key={item.id} value={item.id}>{language === 'ja' ? item.titleJa : item.titleVi}</option>)}
            </select>
          </label>
        </div>

        <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_360px]">
          <article className="rounded-[1.75rem] bg-slate-50 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-black text-indigo-700">{scenario.difficulty}</span>
              <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-700">{scenario.domain}</span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-700">Exam-like trace</span>
            </div>
            <h3 className="mt-3 text-2xl font-black leading-8 text-slate-950">{language === 'ja' ? scenario.titleJa : scenario.titleVi}</h3>
            <p className="mt-3 text-sm font-bold leading-7 text-slate-700">{language === 'ja' ? scenario.passageJa : scenario.passageVi}</p>
            {scenario.code && <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-xs font-bold leading-6 text-cyan-100">{scenario.code}</pre>}
            <p className="mt-4 text-sm font-black text-slate-950">{language === 'ja' ? scenario.questionJa : scenario.questionVi}</p>
          </article>

          <aside className="rounded-[1.75rem] border border-indigo-100 bg-indigo-50 p-4 text-sm font-bold leading-7 text-indigo-950">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.18em]"><Lightbulb className="h-4 w-4" /> How to solve</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>行ごとに i, left/right, stack など変化する変数だけを書く。</li>
              <li>境界値、終了条件、更新順を必ず確認する。</li>
              <li>入力後に Check rows を押して、間違えたstepだけ見直す。</li>
            </ol>
            <p className="mt-3 rounded-2xl bg-white/70 p-3 text-xs">{language === 'ja' ? scenario.examTipJa : scenario.examTipVi}</p>
          </aside>
        </div>
      </section>

      <section className="glass-panel rounded-[2rem] p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-black uppercase tracking-[.2em] text-slate-500">Fill trace variables</p>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => setChecked(true)} className="rounded-2xl bg-indigo-700 px-4 py-2 text-xs font-black text-white">Check rows</button>
            <button type="button" onClick={reset} className="rounded-2xl bg-white px-4 py-2 text-xs font-black text-slate-700 shadow-sm"><RotateCcw className="mr-1 inline h-4 w-4" />Reset</button>
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs font-bold">
            <thead className="bg-slate-100 text-slate-500"><tr><th className="p-3">step</th><th className="p-3">your variables</th><th className="p-3">hint / result</th></tr></thead>
            <tbody>
              {steps.map((step) => {
                const value = inputs[step.step] ?? '';
                const ok = isClose(value, step.variables);
                const hint = showHint[step.step];
                return (
                  <tr key={step.step} className="border-t border-slate-100 align-top">
                    <td className="p-3 font-black text-slate-950">{step.step}</td>
                    <td className="p-3"><input value={value} onChange={(event) => { setInputs((state) => ({ ...state, [step.step]: event.target.value })); setChecked(false); }} placeholder="例: i=2, sum=5" className="w-full rounded-xl border border-slate-200 px-3 py-2 font-mono text-xs text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500" /></td>
                    <td className="p-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <button type="button" onClick={() => setShowHint((state) => ({ ...state, [step.step]: !state[step.step] }))} className="rounded-xl bg-slate-100 px-3 py-2 text-[11px] font-black text-slate-700"><Eye className="mr-1 inline h-3 w-3" />Hint</button>
                        {checked && (ok ? <span className="rounded-xl bg-emerald-50 px-3 py-2 text-emerald-700"><CheckCircle2 className="mr-1 inline h-3 w-3" />OK</span> : <span className="rounded-xl bg-rose-50 px-3 py-2 text-rose-700"><XCircle className="mr-1 inline h-3 w-3" />Expected: {step.variables}</span>)}
                      </div>
                      {hint && <p className="mt-2 rounded-xl bg-cyan-50 p-2 text-cyan-900">{language === 'ja' ? step.noteJa : step.noteVi}</p>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {checked && <div className={`mt-4 rounded-2xl p-4 text-sm font-black ${readiness >= 80 ? 'bg-emerald-50 text-emerald-900' : readiness >= 50 ? 'bg-amber-50 text-amber-900' : 'bg-rose-50 text-rose-900'}`}>科目B readiness: {readiness}% · {readiness >= 80 ? '次はExam-likeへ進めます。' : '間違えた行だけ再入力してから次の問題へ進みましょう。'}</div>}

        <div className="mt-4 flex flex-wrap gap-2">
          {scenario.relatedNodeIds.map((nodeId) => {
            const node = props.nodes.find((item) => item.id === nodeId);
            if (!node) return null;
            return <button key={nodeId} type="button" onClick={() => props.onSelectNode(nodeId)} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700 hover:bg-indigo-100">{getNodeLabel(node, props.language)}</button>;
          })}
        </div>
      </section>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: number | string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/10 p-3"><p className="text-[10px] font-black uppercase tracking-[.16em] text-slate-300">{label}</p><p className="mt-1 text-2xl font-black text-cyan-200">{value}</p></div>;
}
