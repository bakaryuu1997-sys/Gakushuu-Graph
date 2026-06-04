import { Background, Controls, MiniMap, ReactFlow, type NodeTypes, type Edge, type Node } from '@xyflow/react';
import { type ReactNode } from 'react';
import { KnowledgeNode } from './KnowledgeNode';

const nodeTypes: NodeTypes = { knowledgeNode: KnowledgeNode };

interface GraphCanvasProps {
  nodes: Node[];
  edges: Edge[];
  onSelectNode: (id: string) => void;
  className?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  readable?: boolean;
  actions?: ReactNode;
  nextNodeId?: string;
}

export function GraphCanvas({ nodes, edges, onSelectNode, className = 'h-[66vh] min-h-[520px]', title = 'Interactive Knowledge Graph', subtitle = 'Zoom, pan, drag và click node để hiểu quan hệ kiến thức.', compact = false, readable = false, actions, nextNodeId }: GraphCanvasProps) {
  const fitPadding = readable ? 0.08 : 0.25;
  const displayNodes = nodes.map((node) => ({ ...node, data: { ...node.data, readable, isNext: node.id === nextNodeId } }));
  const displayEdges = edges.map((edge) => ({ ...edge, animated: edge.target === nextNodeId, style: { strokeWidth: edge.target === nextNodeId ? 4 : 2.2, stroke: edge.target === nextNodeId ? '#10b981' : edge.type === 'compare' ? '#f97316' : '#7c3aed' } }));
  return (
    <section id="knowledge-graph-export" className={`glass-panel aurora-grid relative overflow-hidden rounded-[2rem] ${className}`}>
      <div className={`absolute z-20 flex max-w-[calc(100%-2rem)] items-start justify-between gap-3 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-soft backdrop-blur-md dark:border-slate-700 dark:bg-slate-950/85 ${compact ? 'inset-x-4 top-4' : 'inset-x-4 top-4 md:inset-x-8 md:top-6'}`}>
        <div className="pointer-events-none">
          <p className="text-sm font-bold text-slate-900 dark:text-white">{title}</p>
          <p className="text-xs text-slate-600 dark:text-slate-300">{subtitle}</p>
          {readable && <p className="mt-1 text-[11px] font-bold text-indigo-600">Đang hiển thị node quan trọng để dễ đọc. Dùng preset để xem từng cụm.</p>}
        </div>
        {actions && <div className="pointer-events-auto shrink-0">{actions}</div>}
      </div>
      {nodes.length === 0 && (
        <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
          <div className="max-w-sm rounded-[2rem] border border-slate-200 bg-white/90 p-6 text-center shadow-soft backdrop-blur-md">
            <p className="text-lg font-black text-slate-950">Không tìm thấy node phù hợp</p>
            <p className="mt-2 text-sm text-slate-600">Hãy xóa bớt từ khóa tìm kiếm hoặc bỏ filter category/importance.</p>
          </div>
        </div>
      )}
      <ReactFlow
        nodes={displayNodes}
        edges={displayEdges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: fitPadding, maxZoom: readable ? 0.92 : 1.15 }}
        onNodeClick={(_, node) => onSelectNode(node.id)}
        minZoom={readable ? 0.35 : 0.15}
        maxZoom={1.8}
        defaultViewport={{ x: 0, y: 0, zoom: readable ? 0.8 : 0.65 }}
        nodesDraggable={!readable}
        proOptions={{ hideAttribution: true }}
      >
        <Background gap={28} color="#cbd5e1" />
        {!compact && !readable && <MiniMap pannable zoomable nodeStrokeWidth={3} className="!rounded-2xl !border !border-slate-200 !bg-white/80" />}
        <Controls className="!rounded-2xl !border !border-slate-200 !bg-white/90 !shadow-soft dark:!border-slate-700 dark:!bg-slate-950/90" />
      </ReactFlow>
    </section>
  );
}
