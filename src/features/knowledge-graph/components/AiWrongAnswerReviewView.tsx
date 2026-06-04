import { useMemo, useState } from "react";
import { AlertTriangle, BrainCircuit, CheckCircle2, Target } from "lucide-react";
import { getQuestionOptions, type QuizQuestion } from "../data/quizQuestions";

interface Props { quizzes: QuizQuestion[]; }

const buckets = [
  { id: "privacy", label: "Privacy", keys: ["privacy", "personal", "consent", "retention", "minimization"] },
  { id: "copyright", label: "Copyright", keys: ["copyright", "license", "terms"] },
  { id: "governance", label: "Governance", keys: ["governance", "audit", "accountability", "vendor", "incident", "rollback"] },
  { id: "security", label: "Security", keys: ["injection", "guardrails", "filter", "red"] },
  { id: "business", label: "Business", keys: ["roi", "kpi", "workflow", "cost", "poc"] },
];

function buildTrapInsights(quizzes: QuizQuestion[]) {
  const source = quizzes.filter((q) => q.optionExplanationsJa?.length || q.optionExplanationsVi?.length);
  const byDomain = new Map<string, { total: number; hard: number }>();
  for (const quiz of source) {
    const current = byDomain.get(quiz.domain) ?? { total: 0, hard: 0 };
    current.total += 1;
    if (quiz.difficulty === "hard") current.hard += 1;
    byDomain.set(quiz.domain, current);
  }
  const domains = [...byDomain.entries()].map(([domain, data]) => ({ domain, ...data })).sort((a, b) => b.hard - a.hard || b.total - a.total).slice(0, 5);
  const repeatedNodes = new Map<string, number>();
  for (const quiz of source) repeatedNodes.set(quiz.nodeId, (repeatedNodes.get(quiz.nodeId) ?? 0) + 1);
  const nodes = [...repeatedNodes.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  return { source, domains, nodes };
}

export function AiWrongAnswerReviewView({ quizzes }: Props) {
  const [bucket, setBucket] = useState("all");
  const insights = useMemo(() => buildTrapInsights(quizzes), [quizzes]);
  const filtered = bucket === "all" ? insights.source : insights.source.filter((q) => {
    const text = [q.nodeId, q.questionJa, q.questionVi].join(" ").toLowerCase();
    return buckets.find((b) => b.id === bucket)?.keys.some((key) => text.includes(key));
  });

  return <section className="grid gap-4">
    <div className="glass-panel rounded-[2rem] p-5">
      <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-violet-600"><BrainCircuit className="h-4 w-4" /> V55 Wrong-answer Intelligence</p>
      <h2 className="mt-1 text-3xl font-black text-slate-950">Không chỉ xem đáp án đúng: tìm pattern sai lặp lại</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">Panel này gom bẫy sai theo domain, node và từng lựa chọn. Khi làm exam simulator sai, hãy quay lại đây để học lại nguyên nhân.</p>
      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <InsightCard title="Top domain nhiều bẫy hard" items={insights.domains.map((item) => `${item.domain}: ${item.hard} hard / ${item.total} câu có giải thích lựa chọn`)} />
        <InsightCard title="Node nên ôn nếu sai nhiều" items={insights.nodes.map(([node, count]) => `${node}: ${count} câu có bẫy lựa chọn`)} />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={() => setBucket("all")} className={`rounded-xl px-3 py-2 text-xs font-black ${bucket === "all" ? "bg-slate-950 text-white" : "bg-white text-slate-600 shadow-sm"}`}>All</button>
        {buckets.map((b) => <button type="button" key={b.id} onClick={() => setBucket(b.id)} className={`rounded-xl px-3 py-2 text-xs font-black ${bucket === b.id ? "bg-violet-600 text-white" : "bg-white text-slate-600 shadow-sm"}`}>{b.label}</button>)}
      </div>
    </div>
    {filtered.slice(0, 60).map((q) => {
      const options = getQuestionOptions(q, "ja");
      const tips = q.optionExplanationsJa ?? q.optionExplanationsVi ?? [];
      return <article key={q.id} className="glass-panel rounded-[2rem] p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="max-w-4xl text-lg font-black leading-7 text-slate-950">{q.questionJa || q.questionVi}</h3>
          <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-black text-violet-700">{q.nodeId}</span>
        </div>
        <div className="mt-4 grid gap-2">
          {options.map((option, index) => <div key={option} className={`rounded-2xl border p-3 text-sm leading-6 ${index === q.answerIndex ? "border-emerald-200 bg-emerald-50 text-emerald-950" : "border-rose-100 bg-rose-50/60 text-rose-950"}`}>
            <p className="font-black">{index === q.answerIndex ? <CheckCircle2 className="mr-1 inline h-4 w-4" /> : <AlertTriangle className="mr-1 inline h-4 w-4" />} {index === q.answerIndex ? "正解" : "ひっかけ"}: {option}</p>
            <p className="mt-1 text-xs font-semibold opacity-80">{tips[index] ?? "解説はこの選択肢には未登録です。"}</p>
          </div>)}
        </div>
      </article>;
    })}
  </section>;
}

function InsightCard({ title, items }: { title: string; items: string[] }) {
  return <div className="rounded-2xl bg-white p-4 shadow-sm"><p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-slate-500"><Target className="h-4 w-4" /> {title}</p><ul className="mt-3 list-disc space-y-1 pl-5 text-xs font-bold leading-5 text-slate-600">{items.length ? items.map((item) => <li key={item}>{item}</li>) : <li>Chưa đủ dữ liệu.</li>}</ul></div>;
}
