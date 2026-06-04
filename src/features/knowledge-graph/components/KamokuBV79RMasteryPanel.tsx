import type { ReactNode } from 'react';
import { BarChart3, BrainCircuit, CheckCircle2, Route, ShieldCheck } from 'lucide-react';
import { fundamentalInfoExamScenarios } from '../../../courses/fundamental-info/examScenarios';
import { fundamentalInfoV79RKamokuBMasteryScenarios } from '../../../courses/fundamental-info/v79rKamokuBMastery';
import type { LessonWorkspaceProps as Props } from './LessonWorkspaceTypes';
import { getNodeLabel } from '../utils/i18n';

const focusMap = [
  { id: 'dynamic-programming', ja: 'DP表', vi: 'bảng DP' },
  { id: 'graph-theory', ja: 'グラフ/BFS', vi: 'graph/BFS' },
  { id: 'recursion', ja: '再帰', vi: 'đệ quy' },
  { id: 'stack', ja: 'スタック', vi: 'stack' },
  { id: 'binary-search', ja: '二分探索', vi: 'binary search' },
];

export function KamokuBV79RMasteryPanel(props: Props) {
  const language = props.language === 'ja' ? 'ja' : 'vi';
  const longTraceTotal = fundamentalInfoExamScenarios.filter((item) => item.kind === 'long-trace').length;
  const v79TraceRows = fundamentalInfoV79RKamokuBMasteryScenarios.reduce((sum, item) => sum + (item.traceSteps?.length ?? item.sqlSteps?.length ?? 0), 0);
  const hardV79 = fundamentalInfoV79RKamokuBMasteryScenarios.filter((item) => item.difficulty === 'hard').length;
  const algorithmV79 = fundamentalInfoV79RKamokuBMasteryScenarios.filter((item) => item.domain === 'algorithm').length;

  return (
    <section className="space-y-4" aria-label="V79R Kamoku B exam mastery panel">
      <section className="rounded-[2rem] bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950 p-5 text-white shadow-glow">
        <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.22em] text-blue-300"><BrainCircuit className="h-4 w-4" /> V79R FE Exam Master Layer</p>
        <h2 className="mt-2 text-3xl font-black leading-tight">科目Bを「読める」から「手で解ける」へ。</h2>
        <p className="mt-3 max-w-3xl text-sm font-bold leading-7 text-slate-300">
          V79Rでは、DP・BFS・再帰・stack・binary search not-found など、FE 科目Bで落としやすい長めのtraceを追加しました。答えを見る前に変数表を埋める前提で作っています。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <Metric icon={<Route className="h-4 w-4" />} label="Total long traces" value={longTraceTotal} />
          <Metric icon={<CheckCircle2 className="h-4 w-4" />} label="V79R new cases" value={fundamentalInfoV79RKamokuBMasteryScenarios.length} />
          <Metric icon={<BarChart3 className="h-4 w-4" />} label="Trace rows" value={v79TraceRows} />
          <Metric icon={<ShieldCheck className="h-4 w-4" />} label="Hard V79R" value={hardV79} />
        </div>
      </section>

      <section className="glass-panel rounded-[2rem] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-blue-600">V79R remediation plan</p>
            <h3 className="mt-2 text-2xl font-black text-slate-950">Sai ở đâu thì quay lại đúng node đó.</h3>
          </div>
          <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-blue-700">{algorithmV79} algorithm-heavy drills</span>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {focusMap.map((item) => {
            const node = props.nodes.find((candidate) => candidate.id === item.id);
            return (
              <button key={item.id} type="button" onClick={() => props.onSelectNode(item.id)} className="rounded-[1.5rem] border border-blue-100 bg-blue-50/70 p-4 text-left text-sm font-black text-blue-950 transition hover:-translate-y-0.5 hover:bg-blue-100">
                <span className="block text-xs uppercase tracking-[.16em] text-blue-500">weak point</span>
                {language === 'ja' ? item.ja : item.vi}
                {node && <span className="mt-2 block text-xs font-bold leading-5 text-slate-600">{getNodeLabel(node, props.language)}</span>}
              </button>
            );
          })}
        </div>
      </section>

      <section className="glass-panel rounded-[2rem] p-5">
        <p className="text-xs font-black uppercase tracking-[.2em] text-indigo-600">New V79R exam-like bank</p>
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {fundamentalInfoV79RKamokuBMasteryScenarios.map((scenario) => (
            <article key={scenario.id} className="rounded-[1.5rem] border border-slate-100 bg-white p-4 shadow-sm">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-black text-indigo-700">{scenario.kind}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black text-slate-600">{scenario.domain}</span>
                <span className="rounded-full bg-rose-50 px-3 py-1 text-[11px] font-black text-rose-700">{scenario.difficulty}</span>
              </div>
              <h4 className="mt-3 text-base font-black leading-6 text-slate-950">{language === 'ja' ? scenario.titleJa : scenario.titleVi}</h4>
              <p className="mt-2 text-xs font-bold leading-5 text-slate-600">{language === 'ja' ? scenario.examTipJa : scenario.examTipVi}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

function Metric({ icon, label, value }: { icon: ReactNode; label: string; value: number | string }) {
  return <div className="rounded-2xl bg-white/10 p-4"><p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.16em] text-slate-300">{icon}{label}</p><p className="mt-2 text-3xl font-black">{value}</p></div>;
}
