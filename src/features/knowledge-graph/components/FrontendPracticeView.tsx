import type { KnowledgeNodeData, Language } from '../types';

interface Props { language: Language; onSelectNode: (nodeId: string) => void; nodes: KnowledgeNodeData[]; }

const practices = [
  { title: 'Responsive Card', task: 'Chọn node cần học để build card responsive.', nodes: ['semantic-html','box-model','flexbox','responsive'] },
  { title: 'API Search UI', task: 'Tạo search app có loading/error/empty state.', nodes: ['fetch-api','async-await','api','loading-error-ui'] },
  { title: 'React Form', task: 'Tạo form controlled có validate.', nodes: ['component','state','controlled-form','form-validation'] },
];

export function FrontendPracticeView({ language, onSelectNode, nodes }: Props) {
  const map = new Map(nodes.map((node) => [node.id, node]));
  const label = (node: KnowledgeNodeData) => language === 'ja' ? node.labelJa : language === 'en' ? node.labelEn : node.labelVi;
  return <section className="grid gap-4"><div className="glass-panel rounded-[2rem] p-5"><p className="text-xs font-black uppercase tracking-[.2em] text-orange-600">Frontend Practice</p><h2 className="mt-1 text-3xl font-black text-slate-950">Luyện theo task nhỏ</h2></div>{practices.map((item)=><article key={item.title} className="glass-panel rounded-[2rem] p-5"><h3 className="text-2xl font-black text-slate-950">{item.title}</h3><p className="mt-2 text-sm text-slate-600">{item.task}</p><div className="mt-4 flex flex-wrap gap-2">{item.nodes.map((id)=>{const node=map.get(id); return node?<button key={id} onClick={()=>onSelectNode(id)} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm">{label(node)}</button>:null;})}</div></article>)}</section>;
}
