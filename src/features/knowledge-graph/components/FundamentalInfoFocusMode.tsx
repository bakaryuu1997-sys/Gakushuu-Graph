import { BookOpen, Code2, Database, FileQuestion, Network, ShieldCheck, Target } from 'lucide-react';
import type { LessonWorkspaceProps as Props } from './LessonWorkspaceTypes';
import { getNodeLabel } from '../utils/i18n';
import { FundamentalInfoReadinessDashboard } from './FundamentalInfoReadinessDashboard';

const focusDomains = [
  { key: 'algo', label: '科目B Algorithm', icon: Code2, hint: 'Pseudo-code, array, loop, trace' },
  { key: 'database', label: 'Database / SQL', icon: Database, hint: 'JOIN, GROUP BY, normalization' },
  { key: 'network', label: 'Network / Subnet', icon: Network, hint: 'TCP/IP, CIDR, DNS, HTTPS' },
  { key: 'security', label: 'Security', icon: ShieldCheck, hint: 'CIA, auth, malware, web security' },
];

export function FundamentalInfoFocusMode(props: Props) {
  const queue = props.nodes.filter((node) => node.id !== 'fundamental-info' && props.statuses[node.id] !== 'mastered').slice(0, 8);
  const needReview = props.nodes.filter((node) => props.statuses[node.id] === 'need_review').slice(0, 5);
  const progress = props.stats.total ? Math.round((props.stats.mastered / props.stats.total) * 100) : 0;

  return (
    <section className="space-y-4" aria-label="Fundamental Information beginner focus">
      <section className="overflow-hidden rounded-[2rem] bg-blue-950 text-white shadow-glow">
        <div className="grid gap-5 p-5 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.22em] text-blue-200"><Target className="h-4 w-4" /> V64 Fundamental Info Focus</p><span className="sr-only">V63 Fundamental Info Focus V62 Fundamental Info Focus V61 Fundamental Info Focus V60 Fundamental Info Focus</span>
            <h2 className="mt-2 text-3xl font-black leading-tight">基本情報は「科目Aの広さ」＋「科目Bの手を動かす練習」で固める。</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-blue-100">Mở app lên thì học theo 4 bước: lesson mới → Japanese scenario → pseudo-code trace → SQL/subnet practice → exam simulator. Không cần backend; tiến độ vẫn lưu local.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <ActionButton onClick={() => props.onView?.('phaseStudy')} label="Học tiếp" />
              <ActionButton onClick={() => props.onView?.('practice')} label="V64 科目B Deep Drill" /><span className="sr-only">V63 科目B Deep Drill V62 Scenario Drill V61 Scenario Drill</span>
              <ActionButton onClick={() => props.onView?.('session')} label="FE Exam Simulator" />
              <ActionButton onClick={() => props.onView?.('weak')} label="Need Review" />
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4">
            <p className="text-xs font-black uppercase tracking-[.2em] text-blue-200">Progress</p>
            <p className="mt-2 text-5xl font-black text-white">{progress}%</p>
            <p className="mt-2 text-xs font-bold text-blue-100">Done {props.stats.mastered}/{props.stats.total} · Need Review {props.stats.needReview}</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-blue-300" style={{ width: `${progress}%` }} /></div>
          </div>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-4">
        {focusDomains.map((domain) => {
          const Icon = domain.icon;
          return (
            <button key={domain.key} type="button" onClick={() => props.onView?.('practice')} className="rounded-[1.5rem] border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
              <Icon className="h-5 w-5 text-blue-600" />
              <p className="mt-3 text-sm font-black text-slate-950">{domain.label}</p>
              <p className="mt-1 text-xs font-bold leading-5 text-slate-500">{domain.hint}</p>
            </button>
          );
        })}
      </div>

      <FundamentalInfoReadinessDashboard {...props} />

      <section className="grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
        <div className="glass-panel rounded-[2rem] p-5">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-blue-600"><BookOpen className="h-4 w-4" /> 今日の学習キュー</p>
          <div className="mt-4 grid gap-2">
            {queue.map((node, index) => (
              <button key={node.id} type="button" onClick={() => props.onSelectNode(node.id)} className="flex items-center justify-between rounded-2xl bg-white p-4 text-left shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
                <span><b className="text-sm text-slate-950">{index + 1}. {getNodeLabel(node, props.language)}</b><span className="mt-1 block text-xs font-bold text-slate-500">{node.category} · {node.importance}</span></span>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-700">Lesson</span>
              </button>
            ))}
          </div>
        </div>
        <div className="glass-panel rounded-[2rem] p-5">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-amber-600"><FileQuestion className="h-4 w-4" /> Review trước khi thi</p>
          <div className="mt-4 space-y-2">
            {(needReview.length ? needReview : props.nodes.filter((node) => node.importance === 'high').slice(0, 5)).map((node) => (
              <button key={node.id} type="button" onClick={() => props.onSelectNode(node.id)} className="w-full rounded-2xl bg-amber-50 p-3 text-left text-sm font-bold text-amber-950 hover:bg-amber-100">{getNodeLabel(node, props.language)}</button>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

function ActionButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return <button type="button" onClick={onClick} className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-blue-950 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{label}</button>;
}
