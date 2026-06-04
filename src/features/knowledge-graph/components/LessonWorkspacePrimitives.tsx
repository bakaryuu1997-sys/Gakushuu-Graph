import type { ReactNode } from "react";
import type { KnowledgeNodeData, Language, StudyStatus } from "../types";
import { getNodeExamPoint, getNodeLabel } from "../utils/i18n";

interface NodeActionProps {
  language: Language;
  statuses: Record<string, StudyStatus>;
  onSelectNode: (id: string) => void;
}

export function NodeCard({
  node,
  index,
  language,
  statuses,
  onSelectNode,
  active = false,
}: NodeActionProps & {
  node: KnowledgeNodeData;
  index: number;
  active?: boolean;
}) {
  const status = statuses[node.id] ?? "new";
  return (
    <button
      type="button"
      onClick={() => onSelectNode(node.id)}
      className={`rounded-2xl border px-3 py-3 text-left text-xs font-bold shadow-sm transition hover:-translate-y-.5 ${active ? "border-indigo-300 bg-indigo-600 text-white" : status === "mastered" ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-slate-200 bg-white text-slate-700"}`}
    >
      <span className="mr-2 text-indigo-400">{index}</span>
      {getNodeLabel(node, language)}
      <p
        className={`mt-1 line-clamp-2 text-[11px] leading-5 ${active ? "text-indigo-100" : "text-slate-500"}`}
      >
        {getNodeExamPoint(node, language)}
      </p>
    </button>
  );
}

export function NodeButtons({
  title,
  nodes,
  lang,
  onSelectNode,
}: {
  title: string;
  nodes: KnowledgeNodeData[];
  lang: Language;
  onSelectNode: (id: string) => void;
}) {
  return (
    <section className="glass-panel rounded-[2rem] p-5">
      <h3 className="font-black text-slate-950">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {nodes.length ? (
          nodes.map((node) => (
            <button
              type="button"
              key={node.id}
              onClick={() => onSelectNode(node.id)}
              className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm"
            >
              {getNodeLabel(node, lang)}
            </button>
          ))
        ) : (
          <p className="text-sm text-slate-500">Chưa có dữ liệu.</p>
        )}
      </div>
    </section>
  );
}

export function Hero({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="glass-panel rounded-[2rem] p-5">
      <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-indigo-600">
        {icon}
        {title}
      </p>
      <h2 className="mt-1 text-3xl font-black text-slate-950">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>
    </section>
  );
}

export function Info({
  title,
  text,
  dark = false,
}: {
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`mt-4 rounded-2xl p-4 text-sm leading-7 ${dark ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-700"}`}
    >
      <b>{title}:</b> {text}
    </div>
  );
}

export function Bullet({
  title,
  items,
  tone = "indigo",
}: {
  title: string;
  items: string[];
  tone?: "indigo" | "amber";
}) {
  return (
    <div
      className={`mt-4 rounded-2xl p-4 text-sm ${tone === "amber" ? "bg-amber-50 text-amber-950" : "bg-indigo-50 text-indigo-950"}`}
    >
      <b>{title}</b>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
