import { Layers3 } from "lucide-react";
import { aiPassportGlossary } from "../../../courses/ai-passport/aiPassportGlossary";
import { getCompareDifference, getCompareExamTip } from "../utils/i18n";
import type { LessonWorkspaceProps as Props } from "./LessonWorkspaceTypes";
import { Hero } from "./LessonWorkspacePrimitives";

export function GlossaryView({ onSelectNode }: { onSelectNode: (id: string) => void }) {
  return (
    <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {aiPassportGlossary.slice(0, 160).map((g) => (
        <button
          key={g.termJa}
          type="button"
          onClick={() => onSelectNode(g.id)}
          className="rounded-2xl bg-white p-4 text-left shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <p className="font-black text-slate-950">{g.termJa}</p>
          <p className="text-xs text-slate-500">{g.reading} · {g.termEn}</p>
          <p className="mt-1 text-sm text-indigo-700">{g.termVi}</p>
        </button>
      ))}
    </section>
  );
}

export function CompareView(props: Props) {
  return (
    <section className="grid gap-4">
      {props.comparePairs.map((comparison) => (
        <article key={comparison.id} className="glass-panel rounded-[2rem] p-5">
          <h3 className="text-xl font-black text-slate-950">{comparison.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{getCompareDifference(comparison, props.language)}</p>
          <p className="mt-3 rounded-2xl bg-amber-50 p-3 text-sm text-amber-950"><b>Exam tip:</b> {getCompareExamTip(comparison, props.language)}</p>
        </article>
      ))}
    </section>
  );
}

export function DiagramView() {
  const names = [
    "RAG flow",
    "Transformer",
    "AI project lifecycle",
    "Data preprocessing",
    "Prompt injection",
    "Bias / Fairness",
    "AI Governance",
    "Copyright",
    "Privacy by Design",
  ];
  return (
    <section className="grid gap-4 sm:grid-cols-2">
      <Hero icon={<Layers3 />} title="Visual Diagrams" subtitle="Sơ đồ minh họa giúp nhớ flow và bẫy đề thi." />
      {names.map((name) => (
        <article key={name} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
          <h3 className="text-xl font-black text-slate-950">{name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Input → xử lý chính → kiểm soát rủi ro → output an toàn.</p>
        </article>
      ))}
    </section>
  );
}
