import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, FileQuestion, RotateCcw, Target, XCircle } from "lucide-react";
import type { QuizQuestion } from "../data/quizQuestions";
import type { KnowledgeNodeData, Language } from "../types";
import { getLocalizedQuestion, getNodeLabel } from "../utils/i18n";
import type { LessonWorkspaceProps as Props } from "./LessonWorkspaceTypes";

const domains = ["ai", "business", "strategy", "management", "technology", "security", "database", "network"];

type ExamSize = 30 | 50;

function makeExam(quizzes: QuizQuestion[], size: ExamSize) {
  const pool = [...quizzes].sort((a, b) => `${a.domain}-${a.id}`.localeCompare(`${b.domain}-${b.id}`));
  const selected: QuizQuestion[] = [];
  for (const domain of domains) {
    selected.push(...pool.filter((q) => q.domain === domain).slice(0, Math.max(2, Math.floor(size / domains.length))));
  }
  for (const quiz of pool) {
    if (selected.length >= size) break;
    if (!selected.some((item) => item.id === quiz.id)) selected.push(quiz);
  }
  return selected.slice(0, size);
}

function domainSummary(questions: QuizQuestion[], answers: Record<string, number | undefined>) {
  return domains.map((domain) => {
    const items = questions.filter((q) => q.domain === domain);
    const correct = items.filter((q) => answers[q.id] === q.answerIndex).length;
    return { domain, total: items.length, correct, score: items.length ? Math.round((correct / items.length) * 100) : 0 };
  }).filter((item) => item.total > 0);
}

function relatedNode(nodeId: string, nodes: KnowledgeNodeData[]) {
  return nodes.find((node) => node.id === nodeId);
}

export function AiExamSimulator(props: Props) {
  const [size, setSize] = useState<ExamSize>(30);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | undefined>>({});
  const [submitted, setSubmitted] = useState(false);
  const questions = useMemo(() => makeExam(props.quizzes, size), [props.quizzes, size]);
  const current = questions[index];
  const answered = Object.keys(answers).length;
  const correct = questions.filter((q) => answers[q.id] === q.answerIndex).length;
  const score = questions.length ? Math.round((correct / questions.length) * 100) : 0;
  const suggestedPace = size === 30 ? "30 câu · ôn kỹ từng domain" : "50 câu · review toàn diện";
  const weakDomains = domainSummary(questions, answers).filter((item) => item.score < 70).sort((a, b) => a.score - b.score).slice(0, 4);
  const wrongQuestions = questions.filter((q) => answers[q.id] !== undefined && answers[q.id] !== q.answerIndex);

  if (!current) return <p className="glass-panel rounded-[2rem] p-5 text-sm font-bold text-slate-600">Chưa có câu hỏi cho exam simulator.</p>;
  const localized = getLocalizedQuestion(current, props.language === "ja" ? "ja" : props.language);

  return (
    <section className="space-y-4" aria-label="AI Passport exam simulator">
      <section className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-glow">
        <div className="grid gap-4 p-5 lg:grid-cols-[1fr_340px]">
          <div>
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.22em] text-cyan-300"><Target className="h-4 w-4" /> V55 Exam Simulator</p>
            <h2 className="mt-2 text-3xl font-black leading-tight">Thi thử AI Passport: chọn đáp án, xem điểm, tìm domain yếu.</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">Dùng chế độ này sau daily plan. Khi sai, xem node liên quan rồi đưa vào Need Review để học lại đúng trọng tâm.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {([30, 50] as const).map((value) => (
                <button key={value} type="button" onClick={() => { setSize(value); setIndex(0); setAnswers({}); setSubmitted(false); }} aria-pressed={size === value} className={`rounded-2xl px-4 py-2 text-xs font-black ${size === value ? "bg-cyan-300 text-slate-950" : "bg-white/10 text-white"}`}>{value} câu</button>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4">
            <p className="text-xs font-black uppercase tracking-[.18em] text-slate-300">Suggested pace</p>
            <p className="mt-2 text-lg font-black text-cyan-300">{suggestedPace}</p>
            <p className="mt-2 text-xs font-bold text-slate-300">Answered {answered}/{questions.length} · Score {score}%</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-cyan-300" style={{ width: `${questions.length ? (answered / questions.length) * 100 : 0}%` }} /></div>
          </div>
        </div>
      </section>

      {!submitted ? (
        <section className="grid gap-4 xl:grid-cols-[1fr_320px]">
          <article className="glass-panel rounded-[2rem] p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-black uppercase tracking-[.2em] text-indigo-600">Q{index + 1}/{questions.length} · {current.domain} · {current.difficulty}</p>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-black text-indigo-700">{current.nodeId}</span>
            </div>
            <h3 className="mt-3 text-xl font-black leading-8 text-slate-950">{localized.question}</h3>
            <div className="mt-4 grid gap-2">
              {localized.options.map((option, optionIndex) => {
                const picked = answers[current.id] === optionIndex;
                return <button key={option} type="button" onClick={() => setAnswers((state) => ({ ...state, [current.id]: optionIndex }))} aria-pressed={picked} className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${picked ? "border-indigo-300 bg-indigo-50 text-indigo-950" : "border-slate-200 bg-white text-slate-700 hover:border-indigo-200"}`}>{option}</button>;
              })}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" onClick={() => setIndex((value) => Math.max(0, value - 1))} className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-700 shadow-sm">Back</button>
              <button type="button" onClick={() => setIndex((value) => Math.min(questions.length - 1, value + 1))} className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white">Next</button>
              <button type="button" onClick={() => setSubmitted(true)} className="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-black text-white">Submit exam</button>
            </div>
          </article>
          <QuestionNavigator questions={questions} answers={answers} index={index} onJump={setIndex} />
        </section>
      ) : (
        <ExamResult score={score} questions={questions} answers={answers} weakDomains={weakDomains} wrongQuestions={wrongQuestions} nodes={props.nodes} language={props.language} onSelectNode={props.onSelectNode} onReset={() => { setAnswers({}); setIndex(0); setSubmitted(false); }} />
      )}
    </section>
  );
}

function QuestionNavigator({ questions, answers, index, onJump }: { questions: QuizQuestion[]; answers: Record<string, number | undefined>; index: number; onJump: (index: number) => void }) {
  return (
    <aside className="glass-panel rounded-[2rem] p-5">
      <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-slate-500"><FileQuestion className="h-4 w-4" /> Question map</p>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {questions.map((q, i) => <button key={q.id} type="button" onClick={() => onJump(i)} className={`rounded-xl px-2 py-2 text-xs font-black ${i === index ? "bg-slate-950 text-white" : answers[q.id] !== undefined ? "bg-emerald-50 text-emerald-700" : "bg-white text-slate-500 shadow-sm"}`}>{i + 1}</button>)}
      </div>
    </aside>
  );
}

function ExamResult({ score, questions, answers, weakDomains, wrongQuestions, nodes, language, onSelectNode, onReset }: { score: number; questions: QuizQuestion[]; answers: Record<string, number | undefined>; weakDomains: ReturnType<typeof domainSummary>; wrongQuestions: QuizQuestion[]; nodes: KnowledgeNodeData[]; language: Language; onSelectNode: (id: string) => void; onReset: () => void }) {
  return (
    <section className="space-y-4">
      <div className={`rounded-[2rem] p-6 shadow-sm ${score >= 70 ? "bg-emerald-50 text-emerald-950" : "bg-amber-50 text-amber-950"}`}>
        <p className="text-xs font-black uppercase tracking-[.2em]">Exam result</p>
        <h3 className="mt-2 text-4xl font-black">{score}% · {score >= 70 ? "Ổn" : "Cần ôn thêm"}</h3>
        <p className="mt-2 text-sm font-bold">Đúng {questions.filter((q) => answers[q.id] === q.answerIndex).length}/{questions.length}. Hãy mở node liên quan của câu sai trước khi thi thật.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
        <div className="glass-panel rounded-[2rem] p-5">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-amber-600"><AlertTriangle className="h-4 w-4" /> Weak domains</p>
          <div className="mt-4 space-y-3">
            {weakDomains.map((item) => <div key={item.domain} className="rounded-2xl bg-white p-4 shadow-sm"><div className="flex justify-between text-sm font-black"><span>{item.domain}</span><span>{item.score}%</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full bg-amber-400" style={{ width: `${item.score}%` }} /></div><p className="mt-2 text-xs font-bold text-slate-500">{item.correct}/{item.total} đúng</p></div>)}
            {!weakDomains.length && <p className="text-sm font-bold text-slate-500">Không có domain yếu dưới 70%.</p>}
          </div>
        </div>
        <div className="glass-panel rounded-[2rem] p-5">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-rose-600"><XCircle className="h-4 w-4" /> Wrong answer intelligence</p>
          <div className="mt-4 grid gap-2">
            {wrongQuestions.slice(0, 10).map((q) => {
              const node = relatedNode(q.nodeId, nodes);
              return <button key={q.id} type="button" onClick={() => node && onSelectNode(node.id)} className="rounded-2xl border border-rose-100 bg-rose-50/60 p-4 text-left text-sm text-rose-950"><b>{node ? getNodeLabel(node, language) : q.nodeId}</b><p className="mt-1 text-xs font-bold leading-5 opacity-80">{q.explanationVi}</p></button>;
            })}
            {!wrongQuestions.length && <p className="rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-800"><CheckCircle2 className="mr-2 inline h-4 w-4" /> Không có câu sai trong bài này.</p>}
          </div>
        </div>
      </div>
      <button type="button" onClick={onReset} className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white"><RotateCcw className="mr-2 inline h-4 w-4" /> Làm lại exam</button>
    </section>
  );
}
