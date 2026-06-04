import type { KnowledgeNodeData, Language } from '../types';

interface Props { language: Language; onSelectNode: (nodeId: string) => void; nodes: KnowledgeNodeData[]; }

const cases = [
  { title: '仕様が曖昧なとき', answer: '質問を整理し、前提・未決事項・期限を議事録/Q&Aに残す。', nodes: ['requirement-definition','qa-management','minutes'] },
  { title: '仕様変更が来たとき', answer: '影響調査、見積もり、スケジュール影響、承認を確認する。', nodes: ['change-request','impact-analysis','estimation'] },
  { title: 'バグ報告を書くとき', answer: '再現手順、期待結果、実際結果、環境、証跡を明確にする。', nodes: ['bug-report','test-case','issue-management'] },
];

export function BrsePracticeView({ language, onSelectNode, nodes }: Props) {
  const map = new Map(nodes.map((node) => [node.id, node]));
  const label = (node: KnowledgeNodeData) => language === 'ja' ? node.labelJa : language === 'en' ? node.labelEn : node.labelVi;
  return <section className="grid gap-4"><div className="glass-panel rounded-[2rem] p-5"><p className="text-xs font-black uppercase tracking-[.2em] text-emerald-600">BrSE Practice</p><h2 className="mt-1 text-3xl font-black text-slate-950">Tình huống BrSE thực tế</h2></div>{cases.map((item)=><article key={item.title} className="glass-panel rounded-[2rem] p-5"><h3 className="text-2xl font-black text-slate-950">{item.title}</h3><p className="mt-3 rounded-2xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-950"><b>対応:</b> {item.answer}</p><div className="mt-4 flex flex-wrap gap-2">{item.nodes.map((id)=>{const node=map.get(id); return node?<button key={id} onClick={()=>onSelectNode(id)} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm">{label(node)}</button>:null;})}</div></article>)}</section>;
}
