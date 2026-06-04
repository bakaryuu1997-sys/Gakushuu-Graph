import { Expand } from 'lucide-react';
import type { Edge, Node } from '@xyflow/react';
import { GraphCanvas } from '../features/knowledge-graph/components/GraphCanvas';
import { categoryMeta } from '../features/knowledge-graph/utils/categoryMeta';
import type { KnowledgeNodeData, Language } from '../features/knowledge-graph/types';
import { getNodeExamPoint, getNodeLabel } from '../features/knowledge-graph/utils/i18n';

interface Props {
  nodes: Node[];
  edges: Edge[];
  selectedNode: KnowledgeNodeData;
  connectedNodes: KnowledgeNodeData[];
  language: Language;
  onSelectNode: (id: string) => void;
  onFullscreen: () => void;
}

export function StudySidePanel({ nodes, edges, selectedNode, connectedNodes, language, onSelectNode, onFullscreen }: Props) {
  return <aside className="space-y-4 lg:col-span-2 2xl:col-span-1 2xl:sticky 2xl:top-4 2xl:max-h-[calc(100vh-2rem)] 2xl:overflow-y-auto">
    <GraphCanvas
      nodes={nodes}
      edges={edges}
      onSelectNode={onSelectNode}
      className="h-[330px] min-h-[330px] md:h-[390px] md:min-h-[390px]"
      title="Focused Relation Graph"
      subtitle="Graph phụ trợ: chỉ xem quan hệ quanh bài đang học. Bấm Full Map để xem toàn màn hình."
      compact
      actions={<button type="button" onClick={onFullscreen} className="pointer-events-auto rounded-xl bg-slate-950 px-3 py-2 text-xs font-black text-white shadow-sm transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:bg-white dark:text-slate-950"><Expand className="mr-1 inline h-3.5 w-3.5" /> Full Map</button>}
    />
    <SelectedNodeCard selectedNode={selectedNode} language={language} />
    <RelatedNodesCard connectedNodes={connectedNodes} language={language} onSelectNode={onSelectNode} />
  </aside>;
}

function SelectedNodeCard({ selectedNode, language }: { selectedNode: KnowledgeNodeData; language: Language }) {
  const selectedMeta = categoryMeta[selectedNode.category];
  const label = getNodeLabel(selectedNode, language);
  const examPoint = getNodeExamPoint(selectedNode, language);

  return <section className="glass-panel rounded-[2rem] p-5">
    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Selected Node</p>
    <div className="mt-3 flex items-start gap-3">
      <span className={`rounded-full border ${selectedMeta.border} ${selectedMeta.bg} px-3 py-1 text-xs font-black ${selectedMeta.color}`}>{selectedMeta.label}</span>
      <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-slate-600 shadow-sm dark:bg-slate-900 dark:text-slate-300">{selectedNode.importance}</span>
    </div>
    <h3 className="mt-3 text-xl font-black text-slate-950 dark:text-white">{selectedNode.labelJa}</h3>
    {selectedNode.reading && <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{selectedNode.reading}</p>}
    <p className="font-bold text-indigo-700 dark:text-indigo-300">{label}</p>
    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{examPoint}</p>
  </section>;
}

function RelatedNodesCard({ connectedNodes, language, onSelectNode }: { connectedNodes: KnowledgeNodeData[]; language: Language; onSelectNode: (id: string) => void }) {
  return <section className="glass-panel rounded-[2rem] p-5">
    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Related nodes</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {connectedNodes.map((node) => (
        <button key={node.id} type="button" onClick={() => onSelectNode(node.id)} className="focus-ring rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 dark:bg-slate-900 dark:text-slate-200">
          {getNodeLabel(node, language)}
        </button>
      ))}
    </div>
  </section>;
}
