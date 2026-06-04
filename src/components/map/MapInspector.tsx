import { Layers3, Map as MapIcon, PanelRightOpen, Route } from 'lucide-react';
import { categoryMeta } from '../../features/knowledge-graph/utils/categoryMeta';
import { getNodeExamPoint, getNodeLabel, getNodeSummary } from '../../features/knowledge-graph/utils/i18n';
import type { MapSharedProps } from './mapTypes';

type Props = Omit<MapSharedProps, 'nodes' | 'edges'>;

export function MapInspector({ selectedNode, connectedNodes, language, onSelectNode }: Props) {
  const meta = categoryMeta[selectedNode.category];
  const label = getNodeLabel(selectedNode, language);
  const summary = getNodeSummary(selectedNode, language);
  const examPoint = getNodeExamPoint(selectedNode, language);

  return (
    <aside className="glass-panel flex min-h-0 flex-col rounded-[2rem] p-5">
      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-indigo-600"><PanelRightOpen className="h-4 w-4" /> Node Drawer</div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className={`rounded-full border ${meta.border} ${meta.bg} px-3 py-1 text-xs font-black ${meta.color}`}>{meta.label}</span>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-black uppercase text-slate-600 shadow-sm">{selectedNode.importance}</span>
      </div>
      <h2 className="mt-4 text-2xl font-black leading-tight text-slate-950">{selectedNode.labelJa}</h2>
      {selectedNode.reading && <p className="mt-1 text-sm font-semibold text-slate-500">{selectedNode.reading}</p>}
      <p className="mt-1 text-base font-bold text-indigo-700">{label}</p>
      <div className="mt-4 rounded-2xl bg-slate-950 p-4 text-sm leading-6 text-white shadow-glow">{summary}</div>
      <div className="mt-3 rounded-2xl border border-indigo-100 bg-indigo-50 p-4 text-sm leading-6 text-indigo-950"><b>Điểm hay ra thi:</b> {examPoint}</div>
      <RelatedNodeButtons connectedNodes={connectedNodes} language={language} onSelectNode={onSelectNode} />
      <div className="mt-5 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
        <p className="flex items-center gap-2 font-black text-slate-950"><Layers3 className="h-4 w-4" /> Cách đọc graph</p>
        <p><b>Đường tím:</b> nên học trước / quan hệ yêu cầu.</p>
        <p><b>Đường cam:</b> cặp dễ nhầm cần so sánh.</p>
        <p><b>Node HOT:</b> phần dễ xuất hiện trong câu hỏi thi.</p>
      </div>
      <button type="button" onClick={() => onSelectNode(selectedNode.id)} className="mt-4 rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5">
        <MapIcon className="mr-2 inline h-4 w-4" /> Focus node này
      </button>
    </aside>
  );
}

function RelatedNodeButtons({ connectedNodes, language, onSelectNode }: Pick<Props, 'connectedNodes' | 'language' | 'onSelectNode'>) {
  return <div className="mt-4">
    <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-slate-500"><Route className="h-4 w-4" /> Học liên quan</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {connectedNodes.length === 0 ? <span className="text-sm text-slate-500">Chưa có liên kết trực tiếp.</span> : connectedNodes.map((node) => (
        <button key={node.id} type="button" onClick={() => onSelectNode(node.id)} className="focus-ring rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-indigo-700">
          {getNodeLabel(node, language)}
        </button>
      ))}
    </div>
  </div>;
}
