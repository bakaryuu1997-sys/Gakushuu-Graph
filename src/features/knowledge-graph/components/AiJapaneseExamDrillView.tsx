import { useMemo, useState } from 'react';
import { getQuestionOptions, type QuizQuestion } from '../data/quizQuestions';
import type { Language } from '../types';

interface Props { quizzes: QuizQuestion[]; language: Language; }

export function AiJapaneseExamDrillView({ quizzes }: Props) {
  const questions = useMemo(() => quizzes.filter((q) => q.id.startsWith('v40-ja-') || (q.optionsJa && q.questionJa.length > 40)).slice(0, 40), [quizzes]);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const q = questions[index % Math.max(questions.length, 1)];
  if (!q) return null;
  const options = getQuestionOptions(q, 'ja');
  const optionTips = q.optionExplanationsJa;

  return <section className="glass-panel rounded-[2rem] p-5">
    <p className="text-xs font-black uppercase tracking-[.2em] text-violet-600">Japanese-only AI Passport Exam Drill</p>
    <h2 className="mt-2 text-2xl font-black leading-snug text-slate-950">{q.questionJa}</h2>
    <p className="mt-2 text-xs font-bold text-slate-500">Q{index + 1}/{questions.length} · 長文scenario · wrong-answer explanations</p>
    <div className="mt-4 grid gap-2">
      {options.map((option, idx) => <button key={option} onClick={() => setAnswer(idx)} className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold leading-6 ${answer !== null && idx === q.answerIndex ? 'border-emerald-300 bg-emerald-50 text-emerald-900' : answer === idx ? 'border-rose-300 bg-rose-50 text-rose-900' : 'border-slate-200 bg-white text-slate-700'}`}>
        {option}
      </button>)}
    </div>
    {answer !== null && <div className="mt-4 rounded-2xl bg-white p-4 text-sm leading-7 text-slate-700 shadow-sm">
      <p><b>正解:</b> {options[q.answerIndex]}</p>
      <p className="mt-2"><b>選択肢解説:</b> {optionTips?.[answer] ?? q.explanationJa}</p>
      {answer !== q.answerIndex && <p className="mt-2 rounded-xl bg-amber-50 p-3 font-bold text-amber-900">この選択肢はひっかけです。問題文のリスク・目的・制約を確認してください。</p>}
    </div>}
    <button onClick={() => { setIndex(index + 1); setAnswer(null); }} className="mt-4 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white">Next Japanese Scenario</button>
  </section>;
}
