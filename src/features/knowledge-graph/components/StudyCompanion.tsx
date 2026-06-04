import { useMemo, useState, type ReactNode } from 'react';
import { CalendarDays, Copy, Eye, EyeOff, Flame, History, Route, Star, Target } from 'lucide-react';
import type { KnowledgeNodeData, Language, StudyStatus } from '../types';
import { getNodeExamPoint, getNodeLabel } from '../utils/i18n';

interface StudyStats {
  total: number;
  mastered: number;
  learning: number;
  fresh: number;
  favorites: number;
}

interface StudyCompanionProps {
  nodes: KnowledgeNodeData[];
  selectedNode: KnowledgeNodeData;
  favorites: KnowledgeNodeData[];
  recent: KnowledgeNodeData[];
  stats: StudyStats;
  statuses: Record<string, StudyStatus>;
  language: Language;
  onSelectNode: (nodeId: string) => void;
}

const corePathIds = [
  'it-passport', 'technology', 'security', 'network', 'database', 'ai',
  'machine-learning', 'data-preprocessing', 'evaluation', 'strategy', 'management',
];

export function StudyCompanion({ nodes, selectedNode, favorites, recent, stats, statuses, language, onSelectNode }: StudyCompanionProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [copied, setCopied] = useState(false);

  const corePath = useMemo(
    () => corePathIds.map((id) => nodes.find((node) => node.id === id)).filter(Boolean) as KnowledgeNodeData[],
    [nodes],
  );

  const dailyNodes = useMemo(() => {
    const priority = { high: 0, medium: 1, low: 2 } as const;
    return nodes
      .filter((node) => statuses[node.id] !== 'mastered')
      .sort((a, b) => priority[a.importance] - priority[b.importance] || a.labelJa.localeCompare(b.labelJa))
      .slice(0, 10);
  }, [nodes, statuses]);

  const copyNote = async () => {
    const note = `${selectedNode.labelJa} / ${selectedNode.labelVi}\n\n${selectedNode.summaryVi}\n\nĐiểm thi: ${selectedNode.examPointVi}\nKeywords: ${selectedNode.keywords.join(', ')}`;
    await navigator.clipboard.writeText(note);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <section className="mx-auto grid w-full max-w-[1800px] gap-4 px-4 pb-6 xl:grid-cols-[1.15fr_1fr_1fr_1fr] lg:px-6">
      <div className="glass-panel rounded-[2rem] p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-indigo-600"><Route className="h-4 w-4" /> Learning Path</p>
            <h3 className="mt-1 text-lg font-black text-slate-950">Lộ trình ôn tập đề xuất</h3>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 shadow-sm">{stats.mastered}/{stats.total} mastered</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {corePath.map((node, index) => (
            <button
              key={node.id}
              type="button"
              onClick={() => onSelectNode(node.id)}
              className="focus-ring rounded-2xl border border-indigo-100 bg-white px-3 py-2 text-left text-xs font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300"
            >
              <span className="mr-2 text-indigo-500">{index + 1}</span>{getNodeLabel(node, language)}
            </button>
          ))}
        </div>
      </div>

      <div className="glass-panel rounded-[2rem] p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-600"><CalendarDays className="h-4 w-4" /> Daily 10 Nodes</p>
            <h3 className="mt-1 text-lg font-black text-slate-950">1 ngày học 10 node</h3>
          </div>
          <Target className="h-5 w-5 text-emerald-600" />
        </div>
        <div className="mt-4 grid gap-2">
          {dailyNodes.map((node, index) => (
            <button key={node.id} type="button" onClick={() => onSelectNode(node.id)} className="focus-ring flex items-center justify-between rounded-2xl border border-emerald-100 bg-white px-3 py-2 text-left text-xs font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5">
              <span><span className="mr-2 text-emerald-600">{index + 1}</span>{getNodeLabel(node, language)}</span>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] uppercase text-emerald-700">{node.importance}</span>
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs leading-5 text-slate-500">Ưu tiên node quan trọng chưa mastered. Mỗi ngày học 10 node, bấm từng node để xem bài học và làm quiz.</p>
      </div>

      <div className="glass-panel rounded-[2rem] p-5">
        <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-rose-600"><Flame className="h-4 w-4" /> Exam Drill</p>
        <h3 className="mt-1 text-lg font-black text-slate-950">Câu tự kiểm tra nhanh</h3>
        <p className="mt-3 text-sm font-semibold text-slate-700">Điểm cần nhớ của “{getNodeLabel(selectedNode, language)}” là gì?</p>
        <div className="mt-3 rounded-2xl border border-rose-100 bg-rose-50/80 p-4 text-sm leading-6 text-rose-950">
          {showAnswer ? getNodeExamPoint(selectedNode, language) : 'Hãy tự trả lời trước, sau đó bấm xem gợi ý.'}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button type="button" onClick={() => setShowAnswer((value) => !value)} className="focus-ring rounded-2xl bg-slate-950 px-3 py-2 text-xs font-bold text-white">
            {showAnswer ? <EyeOff className="mr-1 inline h-4 w-4" /> : <Eye className="mr-1 inline h-4 w-4" />}{showAnswer ? 'Ẩn đáp án' : 'Xem đáp án'}
          </button>
          <button type="button" onClick={copyNote} className="focus-ring rounded-2xl bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm">
            <Copy className="mr-1 inline h-4 w-4" />{copied ? 'Đã copy' : 'Copy note'}
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        <MiniList icon={<Star className="h-4 w-4" />} title="Favorites" items={favorites} language={language} empty="Chưa có mục yêu thích." onSelectNode={onSelectNode} />
        <MiniList icon={<History className="h-4 w-4" />} title="Recent" items={recent} language={language} empty="Chưa xem node nào." onSelectNode={onSelectNode} />
      </div>
    </section>
  );
}

interface MiniListProps {
  icon: ReactNode;
  title: string;
  items: KnowledgeNodeData[];
  language: Language;
  empty: string;
  onSelectNode: (nodeId: string) => void;
}

function MiniList({ icon, title, items, language, empty, onSelectNode }: MiniListProps) {
  return (
    <div className="glass-panel rounded-[2rem] p-4">
      <p className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-slate-600">{icon}{title}</p>
      {items.length === 0 ? <p className="text-sm text-slate-500">{empty}</p> : (
        <div className="flex flex-wrap gap-2">
          {items.slice(0, 5).map((node) => (
            <button key={node.id} type="button" onClick={() => onSelectNode(node.id)} className="focus-ring rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5">
              {getNodeLabel(node, language)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
