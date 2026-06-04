import type { StudyPathPhase } from '../../features/knowledge-graph/data/studyPath';

export function PhaseNavigator({ phases, activePhase, onPhase }: { phases: StudyPathPhase[]; activePhase?: string; onPhase: (phaseId?: string) => void }) {
  if (phases.length === 0) return null;
  return <div className="pointer-events-auto flex max-w-4xl gap-2 overflow-x-auto rounded-2xl border border-white/70 bg-white/85 p-2 shadow-soft backdrop-blur-md">
    <button onClick={() => onPhase(undefined)} className={`shrink-0 rounded-xl px-3 py-2 text-xs font-black ${!activePhase ? 'bg-slate-950 text-white' : 'bg-white text-slate-600 shadow-sm'}`}>All phases</button>
    {phases.map((phase, index) => <button key={phase.id} onClick={() => onPhase(phase.id)} className={`shrink-0 rounded-xl px-3 py-2 text-left text-xs font-black ${activePhase === phase.id ? 'bg-indigo-600 text-white shadow-glow' : 'bg-white text-slate-600 shadow-sm'}`}>
      <span className="block">Phase {index + 1}</span>
      <span className={`text-[10px] ${activePhase === phase.id ? 'text-indigo-100' : 'text-slate-400'}`}>{phase.titleVi}</span>
    </button>)}
  </div>;
}
