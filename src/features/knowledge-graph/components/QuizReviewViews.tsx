import { FileQuestion } from "lucide-react";
import { useState } from "react";
import { getLocalizedQuestion, getOptionTips } from "../utils/i18n";
import type { LessonWorkspaceProps as Props } from "./LessonWorkspaceTypes";
import { Hero, Info, NodeButtons } from "./LessonWorkspacePrimitives";

export function QuizView(props: Props) {
  const [i, setI] = useState(0);
  const [ans, setAns] = useState<number | null>(null);
  const questions = props.quizzes.filter((q) => (props.activeView === "japanese" ? q.optionsJa : true));
  const q = questions[i % Math.max(questions.length, 1)];
  if (!q) return <Hero icon={<FileQuestion />} title="No quiz" subtitle="Chưa có câu hỏi." />;

  const lang = props.activeView === "japanese" ? "ja" : props.language;
  const localized = getLocalizedQuestion(q, lang);
  const optionTips = getOptionTips(q, lang);
  const selectedTip = ans === null ? undefined : optionTips?.[ans];

  return (
    <section className="glass-panel rounded-[2rem] p-5">
      <p className="text-xs font-black uppercase text-indigo-600">Q{i + 1}/{questions.length} · {q.domain} · {q.difficulty}</p>
      <h2 className="mt-2 text-xl font-black text-slate-950">{localized.question}</h2>
      <div className="mt-4 grid gap-2">
        {localized.options.map((option, idx) => (
          <button
            key={option}
            type="button"
            onClick={() => setAns(idx)}
            aria-pressed={ans === idx}
            className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${ans !== null && idx === q.answerIndex ? "border-emerald-300 bg-emerald-50 text-emerald-900" : ans === idx ? "border-rose-300 bg-rose-50 text-rose-900" : "border-slate-200 bg-white text-slate-700"}`}
          >
            {option}
          </button>
        ))}
      </div>
      {ans !== null && <Info title="Giải thích" text={`${localized.explanation}${selectedTip ? " / 選択肢解説: " + selectedTip : ""}`} />}
      <button
        type="button"
        onClick={() => {
          setI(i + 1);
          setAns(null);
        }}
        className="mt-4 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      >
        Next
      </button>
    </section>
  );
}

export function FavoriteNodes(props: Props) {
  return <NodeButtons title="Favorites" nodes={props.favorites} lang={props.language} onSelectNode={props.onSelectNode} />;
}

export function RecentNodes(props: Props) {
  return <NodeButtons title="Recent" nodes={props.recent} lang={props.language} onSelectNode={props.onSelectNode} />;
}
