import { useState } from 'react';
import type { KnowledgeNodeData, Language } from '../types';

interface Props { language: Language; onSelectNode: (nodeId: string) => void; nodes: KnowledgeNodeData[]; }

const roleplays = [
  { title: '仕様が曖昧', scenario: '「この画面をもっと使いやすくしてください」', good: '対象ユーザー、不満点、受入基準を確認しQ&Aに残す。', bad: '「わかりました」とだけ返して実装開始する。', whyBad: '曖昧なまま進めると認識齟齬と手戻りが起こる。', nodes: ['ambiguity-control','requirement-analysis','acceptance-criteria'] },
  { title: '仕様変更 gấp', scenario: '「明日までにこの仕様を追加できますか」', good: '影響範囲、見積もり、優先度、release影響を確認して回答する。', bad: 'すぐ「できます」と約束する。', whyBad: 'impact未確認の約束はschedule/cost/qualityリスクになる。', nodes: ['change-request','impact-analysis','estimation'] },
  { title: 'Production bug', scenario: '「本番でエラーが出ています。至急確認してください」', good: '影響範囲、暫定対応、次回報告時刻、原因調査を分けて報告する。', bad: '原因が分かるまで何も報告しない。', whyBad: '本番障害では途中経過と影響範囲の共有が重要。', nodes: ['production-incident','incident-report','postmortem'] },
];

export function BrseRoleplayView({ language, onSelectNode, nodes }: Props) {
  const [open, setOpen] = useState(roleplays[0].title);
  const map = new Map(nodes.map((node) => [node.id, node]));
  const label = (node: KnowledgeNodeData) => language === 'ja' ? node.labelJa : language === 'en' ? node.labelEn : node.labelVi;
  return <section className="grid gap-4"><div className="glass-panel rounded-[2rem] p-5"><p className="text-xs font-black uppercase tracking-[.2em] text-emerald-600">BrSE Role-play Grading</p><h2 className="mt-1 text-3xl font-black text-slate-950">Good response / Wrong response</h2></div>{roleplays.map((item) => <article key={item.title} className="glass-panel rounded-[2rem] p-5"><button onClick={()=>setOpen(open===item.title?'':item.title)} className="w-full text-left"><h3 className="text-2xl font-black text-slate-950">{item.title}</h3><p className="mt-3 rounded-2xl bg-slate-950 p-4 text-sm leading-6 text-white">{item.scenario}</p></button>{open===item.title && <div className="mt-4 grid gap-3"><p className="rounded-2xl bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-950">✅ {item.good}</p><p className="rounded-2xl bg-rose-50 p-4 text-sm font-bold leading-6 text-rose-950">❌ {item.bad}<br />理由: {item.whyBad}</p><div className="flex flex-wrap gap-2">{item.nodes.map((id)=>{const node=map.get(id); return node?<button key={id} onClick={()=>onSelectNode(id)} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm">{label(node)}</button>:null;})}</div></div>}</article>)}</section>;
}
