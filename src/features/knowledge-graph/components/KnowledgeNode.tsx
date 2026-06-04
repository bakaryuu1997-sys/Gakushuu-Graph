import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { categoryMeta } from '../utils/categoryMeta';
import type { KnowledgeNodeData } from '../types';

type NodeData = KnowledgeNodeData & { isSelected?: boolean; readable?: boolean; isNext?: boolean; studyStatus?: 'new' | 'learning' | 'need_review' | 'mastered' };

export const KnowledgeNode = memo(({ data }: NodeProps) => {
  const item = data as unknown as NodeData;
  const meta = categoryMeta[item.category];
  const size = item.readable
    ? item.level === 'root' ? 'min-w-72 max-w-80 px-6 py-5' : item.level === 'major' ? 'min-w-64 max-w-72 px-5 py-4' : 'min-w-56 max-w-64 px-4 py-3.5'
    : item.level === 'root' ? 'min-w-56 px-5 py-4' : item.level === 'major' ? 'min-w-48 px-4 py-3' : 'min-w-44 px-3 py-2.5';
  const darkSurface = item.readable ? "dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" : "dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100";
  const statusStyle = item.studyStatus === 'mastered' ? 'bg-emerald-50 border-emerald-300' : item.studyStatus === 'need_review' ? 'bg-amber-50 border-amber-300' : item.studyStatus === 'learning' ? 'bg-blue-50 border-blue-300' : '';
  const selectedStyle = item.isSelected ? 'ring-4 ring-indigo-500/40 shadow-[0_24px_80px_rgba(99,102,241,0.22)] scale-[1.04]' : item.isNext ? 'ring-4 ring-emerald-400/40 shadow-[0_24px_80px_rgba(16,185,129,0.2)]' : '';

  return (
    <button className={`${size} rounded-2xl border ${statusStyle || `${meta.border} ${meta.bg}`} ${meta.color} ${darkSurface} text-left shadow-soft transition duration-200 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-glow ${selectedStyle}`}>
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={`${item.readable ? 'text-[11px]' : 'text-xs'} font-bold uppercase tracking-[0.18em] opacity-70`}>{meta.label}</p>
          <h3 className={`mt-1 font-black leading-tight text-slate-950 dark:text-white ${item.readable ? 'text-base' : 'text-sm'}`}>{item.labelJa}</h3>
          <p className={`mt-1 font-semibold text-slate-600 dark:text-slate-300 ${item.readable ? 'text-sm' : 'text-xs'}`}>{item.labelVi}</p>
          {item.readable && item.examPointVi && <p className="mt-2 line-clamp-2 text-xs font-medium leading-5 text-slate-500 dark:text-slate-400">{item.examPointVi}</p>}
          {item.reading && <p className="mt-0.5 text-[11px] font-medium text-slate-400">{item.reading}</p>}
        </div>
        <div className="flex flex-col gap-1">{item.studyStatus === 'mastered' && <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white">DONE</span>}{item.studyStatus === 'need_review' && <span className="rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-white">REVIEW</span>}{item.studyStatus === 'learning' && <span className="rounded-full bg-blue-500 px-2 py-0.5 text-[10px] font-bold text-white">LEARNING</span>}{item.isNext && <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white">NEXT</span>}{item.importance === 'high' && <span className="rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-bold text-white">HOT</span>}</div>
      </div>
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </button>
  );
});

KnowledgeNode.displayName = 'KnowledgeNode';
