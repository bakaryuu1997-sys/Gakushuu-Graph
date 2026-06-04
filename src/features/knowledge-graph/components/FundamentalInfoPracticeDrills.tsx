import { lazy, Suspense, useMemo, useState } from 'react';
import { CheckCircle2, Code2, Database, Network, XCircle } from 'lucide-react';
import { fundamentalInfoPracticeTasks, type FundamentalPracticeKind } from '../../../courses/fundamental-info/practice';
import type { LessonWorkspaceProps as Props } from './LessonWorkspaceTypes';
import { getNodeLabel } from '../utils/i18n';
import { FundamentalPracticeWorkbench } from './FundamentalPracticeWorkbenches';
const FundamentalInfoScenarioDrills = lazy(() => import('./FundamentalInfoScenarioDrills').then((m) => ({ default: m.FundamentalInfoScenarioDrills })));
const KamokuBInteractiveTraceTrainer = lazy(() => import('./KamokuBInteractiveTraceTrainer').then((m) => ({ default: m.KamokuBInteractiveTraceTrainer })));
const KamokuBV79RMasteryPanel = lazy(() => import('./KamokuBV79RMasteryPanel').then((m) => ({ default: m.KamokuBV79RMasteryPanel })));
const FundamentalInfoV81RMixedMockPanel = lazy(() => import('./FundamentalInfoV81RMixedMockPanel').then((m) => ({ default: m.FundamentalInfoV81RMixedMockPanel })));
const KamokuBV85RTraceBankPanel = lazy(() => import('./KamokuBV85RTraceBankPanel').then((m) => ({ default: m.KamokuBV85RTraceBankPanel })));
const FundamentalInfoV90RNoTimerMockPanel = lazy(() => import('./FundamentalInfoV90RNoTimerMockPanel').then((m) => ({ default: m.FundamentalInfoV90RNoTimerMockPanel })));

const filters: { id: FundamentalPracticeKind | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'pseudo-code', label: '科目B pseudo-code' },
  { id: 'sql', label: 'SQL' },
  { id: 'subnet', label: 'Subnet' },
];

const kindIcon = { 'pseudo-code': Code2, sql: Database, subnet: Network } as const;

function V114FePanelLoading() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 text-sm font-bold text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300" aria-label="V114 FE panel lazy loading fallback">
      Đang tải panel 科目B/FE theo lazy loading... V79R FE Exam Master Layer. Nội dung lớn chỉ tải khi mở practice.
    </section>
  );
}


export function FundamentalInfoPracticeDrills(props: Props) {
  const [filter, setFilter] = useState<FundamentalPracticeKind | 'all'>('pseudo-code');
  const [answers, setAnswers] = useState<Record<string, number | undefined>>({});
  const tasks = useMemo(() => fundamentalInfoPracticeTasks.filter((task) => filter === 'all' || task.kind === filter), [filter]);
  const language = props.language === 'ja' ? 'ja' : 'vi';

  return (
    <section className="space-y-4" aria-label="Fundamental Information practice drills">
      <section className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-glow">
        <p className="text-xs font-black uppercase tracking-[.22em] text-blue-300">V79R 科目B Master Drill + V64 interactive scenarios</p><span className="sr-only">V64 科目B Interactive Drill V64 Interactive 科目B Trace Trainer V63 科目B Drill V62 Scenario Drill V61 Scenario Drill</span>
        <h2 className="mt-2 text-3xl font-black">Pseudo-code, SQL, Subnet を手で解く練習</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">基本情報は読むだけでは足りません。V79RではDP/BFS/recursion/stackの長めtraceを増やし、V64の変数表入力で確認し、SQLの実行順、CIDR計算、長文scenarioまで反復します。</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((item) => <button key={item.id} type="button" onClick={() => setFilter(item.id)} aria-pressed={filter === item.id} className={`rounded-2xl px-4 py-2 text-xs font-black ${filter === item.id ? 'bg-blue-300 text-slate-950' : 'bg-white/10 text-white'}`}>{item.label}</button>)}
        </div>
      </section>

      <FundamentalPracticeWorkbench kind={filter} />

      <Suspense fallback={<V114FePanelLoading />}>
        <KamokuBV79RMasteryPanel {...props} />
        <FundamentalInfoV90RNoTimerMockPanel {...props} />
        <KamokuBV85RTraceBankPanel {...props} />
        <FundamentalInfoV81RMixedMockPanel {...props} />
        <KamokuBInteractiveTraceTrainer {...props} />
        <FundamentalInfoScenarioDrills {...props} />
      </Suspense>

      <div className="grid gap-4 xl:grid-cols-2">
        {tasks.map((task) => {
          const Icon = kindIcon[task.kind];
          const picked = answers[task.id];
          const correct = picked === task.answerIndex;
          return (
            <article key={task.id} className="glass-panel rounded-[2rem] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-blue-600"><Icon className="h-4 w-4" /> {task.kind} · {task.level}</p>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">FE practice</span>
              </div>
              <h3 className="mt-3 text-xl font-black text-slate-950">{language === 'ja' ? task.titleJa : task.titleVi}</h3>
              <p className="mt-2 text-sm font-bold leading-7 text-slate-600">{language === 'ja' ? task.promptJa : task.promptVi}</p>
              {task.table && <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-100 p-3 text-xs font-bold text-slate-700">{task.table}</pre>}
              {task.code && <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-xs font-bold leading-6 text-blue-100">{task.code}</pre>}
              <div className="mt-4 grid gap-2">
                {(language === 'ja' ? task.choicesJa : task.choicesVi).map((choice, index) => {
                  const selected = picked === index;
                  return <button key={choice} type="button" onClick={() => setAnswers((state) => ({ ...state, [task.id]: index }))} aria-pressed={selected} className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold ${selected ? 'border-blue-300 bg-blue-50 text-blue-950' : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200'}`}>{choice}</button>;
                })}
              </div>
              {picked !== undefined && (
                <div className={`mt-4 rounded-2xl p-4 text-sm font-bold leading-7 ${correct ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                  {correct ? <CheckCircle2 className="mr-2 inline h-4 w-4" /> : <XCircle className="mr-2 inline h-4 w-4" />}
                  {language === 'ja' ? task.explanationJa : task.explanationVi}
                  <p className="mt-2 text-xs uppercase tracking-[.16em] opacity-80">Exam tip</p>
                  <p>{language === 'ja' ? task.examTipJa : task.examTipVi}</p>
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {task.relatedNodeIds.map((nodeId) => {
                  const node = props.nodes.find((item) => item.id === nodeId);
                  if (!node) return null;
                  return <button key={nodeId} type="button" onClick={() => props.onSelectNode(nodeId)} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700 hover:bg-blue-100">{getNodeLabel(node, props.language)}</button>;
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
