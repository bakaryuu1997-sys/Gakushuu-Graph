import { useMemo, useState } from 'react';
import { fundamentalInfoV90RMockMiniSet } from '../../../courses/fundamental-info/v90rMockMiniSet';
import type { LessonWorkspaceProps as Props } from './LessonWorkspaceTypes';

export function FundamentalInfoV90RNoTimerMockPanel(props: Props) {
  const language = props.language === 'ja' ? 'ja' : 'vi';
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const score = useMemo(() => fundamentalInfoV90RMockMiniSet.filter((item) => answers[item.id] === item.answerIndex).length, [answers]);
  return (
    <section className="rounded-[2rem] border border-fuchsia-200 bg-fuchsia-50/70 p-5 shadow-sm dark:border-fuchsia-800 dark:bg-fuchsia-950/20">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-fuchsia-700">V90R 基本情報 no-timer mixed mock</p>
          <h3 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">Không dùng timer: làm chậm, review kỹ, phân loại weak domain</h3>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">Theo yêu cầu, mock mode này không có đồng hồ đếm giờ. Mục tiêu là luyện pseudo-code, SQL, network, security, management theo kiểu FE nhưng ưu tiên hiểu bẫy và lý do sai.</p>
        </div>
        <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-fuchsia-700 shadow-sm dark:bg-slate-900">Score {score}/{fundamentalInfoV90RMockMiniSet.length}</span>
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        {fundamentalInfoV90RMockMiniSet.map((item, index) => {
          const picked = answers[item.id];
          const hasAnswer = picked !== undefined;
          const choice = hasAnswer ? item.choices[picked] : undefined;
          return <article key={item.id} className="rounded-3xl border border-white bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950">
            <div className="flex flex-wrap items-center justify-between gap-2"><span className="text-xs font-black uppercase tracking-[.16em] text-slate-500">Q{index + 1} · {item.domain} · {item.kind}</span><span className="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-black text-fuchsia-700 dark:bg-fuchsia-950/40">no timer</span></div>
            <h4 className="mt-2 text-lg font-black">{language === 'ja' ? item.titleJa : item.titleVi}</h4>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{language === 'ja' ? item.questionJa : item.questionVi}</p>
            {item.code && <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-950 p-3 text-xs font-bold leading-6 text-fuchsia-100">{item.code}</pre>}
            <div className="mt-3 grid gap-2">{item.choices.map((option, optionIndex) => <button key={`${item.id}-${optionIndex}`} type="button" onClick={() => setAnswers((state) => ({ ...state, [item.id]: optionIndex }))} className={`rounded-2xl border px-3 py-2 text-left text-xs font-bold ${picked === optionIndex ? 'border-fuchsia-300 bg-fuchsia-50 text-fuchsia-950' : 'border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'}`}>{language === 'ja' ? option.ja : option.vi}</button>)}</div>
            {hasAnswer && choice && <div className={`mt-3 rounded-2xl p-3 text-xs font-bold leading-6 ${picked === item.answerIndex ? 'bg-emerald-50 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100' : 'bg-rose-50 text-rose-900 dark:bg-rose-950/30 dark:text-rose-100'}`}><b>{picked === item.answerIndex ? 'Correct' : 'Review'}:</b> {language === 'ja' ? choice.whyJa : choice.whyVi}<br/><b>Trap:</b> {language === 'ja' ? item.trapJa : item.trapVi}<br/><b>Tip:</b> {language === 'ja' ? item.examTipJa : item.examTipVi}</div>}
          </article>;
        })}
      </div>
    </section>
  );
}
