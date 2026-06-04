import { BarChart3, CheckCircle2, Database, Network, ShieldCheck, Sigma, Workflow } from 'lucide-react';
import type { LessonWorkspaceProps as Props } from './LessonWorkspaceTypes';

const readinessGroups = [
  { id: 'algorithm', label: 'Algorithm / 科目B', icon: Workflow, match: (id: string, category: string) => category === 'technology' && /(algorithm|array|stack|queue|tree|hash|sort|search|pseudo|recursion|complexity|debug)/.test(id) },
  { id: 'theory', label: 'Theory / Math', icon: Sigma, match: (id: string, category: string) => category === 'technology' && /(binary|logic|probability|statistics|float|complement|entropy|compression|graph)/.test(id) },
  { id: 'database', label: 'Database / SQL', icon: Database, match: (_id: string, category: string) => category === 'database' },
  { id: 'networkSecurity', label: 'Network / Security', icon: Network, match: (_id: string, category: string) => category === 'network' || category === 'security' },
  { id: 'management', label: 'Management / Dev', icon: BarChart3, match: (_id: string, category: string) => category === 'management' },
  { id: 'strategy', label: 'Strategy / Law', icon: ShieldCheck, match: (_id: string, category: string) => category === 'business' },
];

export function FundamentalInfoReadinessDashboard(props: Props) {
  const groups = readinessGroups.map((group) => {
    const nodes = props.nodes.filter((node) => node.id !== 'fundamental-info' && group.match(node.id, node.category));
    const done = nodes.filter((node) => props.statuses[node.id] === 'mastered').length;
    const review = nodes.filter((node) => props.statuses[node.id] === 'need_review').length;
    const score = nodes.length ? Math.round((done / nodes.length) * 100) : 0;
    return { ...group, total: nodes.length, done, review, score };
  });
  const overall = groups.length ? Math.round(groups.reduce((sum, group) => sum + group.score, 0) / groups.length) : 0;

  return (
    <section className="glass-panel rounded-[2rem] p-5" aria-label="Fundamental Information readiness dashboard">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-blue-600"><CheckCircle2 className="h-4 w-4" /> FE readiness</p>
          <h3 className="mt-2 text-2xl font-black text-slate-950">基本情報 readiness dashboard</h3>
          <p className="mt-1 text-sm font-bold text-slate-500">科目Aの広さと科目Bの手を動かす力を分けて確認します。</p>
        </div>
        <div className="rounded-[1.5rem] bg-blue-950 px-5 py-4 text-white">
          <p className="text-xs font-black uppercase tracking-[.18em] text-blue-200">Overall</p>
          <p className="text-4xl font-black">{overall}%</p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {groups.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-2 text-sm font-black text-slate-950"><Icon className="h-4 w-4 text-blue-600" /> {group.label}</p>
                <span className="text-sm font-black text-blue-700">{group.score}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-blue-500" style={{ width: `${group.score}%` }} /></div>
              <p className="mt-2 text-xs font-bold text-slate-500">{group.done}/{group.total} done · {group.review} need review</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
