import type { Node } from '@xyflow/react';
import type { KnowledgeNodeData, Language } from '../../features/knowledge-graph/types';
import { getNodeLabel } from '../../features/knowledge-graph/utils/i18n';

export function MapNodeSearch({ nodes, language, onSelectNode }: { nodes: Node[]; language: Language; onSelectNode: (id: string) => void }) {
  return <div className="pointer-events-auto max-h-52 w-72 overflow-y-auto rounded-2xl border border-white/70 bg-white/90 p-2 shadow-soft backdrop-blur-md">
    <p className="px-2 pb-1 text-[10px] font-black uppercase tracking-[.16em] text-slate-400">Visible nodes</p>
    {nodes.slice(0, 24).map((node) => {
      const data = node.data as unknown as KnowledgeNodeData;
      return <button key={node.id} type="button" onClick={() => onSelectNode(node.id)} className="block w-full rounded-xl px-3 py-2 text-left text-xs font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">{getNodeLabel(data, language)}</button>;
    })}
  </div>;
}
