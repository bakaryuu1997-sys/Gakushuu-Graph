import { useState } from 'react';
import { getExplanationText, getQuestionOptions, getQuestionText, type QuizQuestion } from '../data/quizQuestions';
import type { Language } from '../types';
import { getOptionTips } from '../utils/i18n';

interface Props {
  nodeId: string;
  quizzes: QuizQuestion[];
  language: Language;
}

export function MiniQuiz({ nodeId, quizzes, language }: Props) {
  const [answerIndex, setAnswerIndex] = useState<number | null>(null);
  const question = quizzes.find((item) => item.nodeId === nodeId) ?? quizzes[0];
  if (!question) return null;

  const options = getQuestionOptions(question, language);
  const optionTips = getOptionTips(question, language);

  return (
    <section className="mt-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
      <p className="text-xs font-black uppercase tracking-[.16em] text-indigo-700">Mini quiz ngay bài học</p>
      <h3 className="mt-2 text-sm font-black text-indigo-950">{getQuestionText(question, language)}</h3>
      <div className="mt-3 grid gap-2">
        {options.map((option, index) => (
          <button key={option} type="button" onClick={() => setAnswerIndex(index)} className={`rounded-xl border px-3 py-2 text-left text-xs font-bold ${answerIndex !== null && index === question.answerIndex ? 'border-emerald-300 bg-emerald-50 text-emerald-900' : answerIndex === index ? 'border-rose-300 bg-rose-50 text-rose-900' : 'border-white bg-white text-slate-700'}`}>
            {option}
          </button>
        ))}
      </div>
      {answerIndex !== null && (
        <p className="mt-3 rounded-xl bg-white p-3 text-xs leading-5 text-slate-700">
          <b>Đáp án:</b> {options[question.answerIndex]}<br />
          <b>Giải thích:</b> {getExplanationText(question, language)}{optionTips?.[answerIndex] && <><br /><b>Vì sao lựa chọn này đúng/sai:</b> {optionTips[answerIndex]}</>}
        </p>
      )}
    </section>
  );
}
