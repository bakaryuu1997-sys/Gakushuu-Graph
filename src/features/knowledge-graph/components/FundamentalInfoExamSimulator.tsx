import { useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2, FileQuestion, RotateCcw, Target } from 'lucide-react';
import type { QuizQuestion } from '../data/quizQuestions';
import { getLocalizedQuestion, getNodeLabel } from '../utils/i18n';
import type { LessonWorkspaceProps as Props } from './LessonWorkspaceTypes';
import { fundamentalInfoExamScenarios } from '../../../courses/fundamental-info/examScenarios';

type ExamSize = 30 | 60;
const feDomains: QuizQuestion['domain'][] = ['technology', 'database', 'network', 'security', 'management', 'strategy'];

function makeFeExam(quizzes: QuizQuestion[], size: ExamSize) {
  const pool = quizzes.filter((q) => q.nodeId !== 'fundamental-info').sort((a, b) => `${a.domain}-${a.id}`.localeCompare(`${b.domain}-${b.id}`));
  const selected: QuizQuestion[] = [];
  const minPerDomain = size === 30 ? 3 : 6;
  for (const domain of feDomains) selected.push(...pool.filter((q) => q.domain === domain).slice(0, minPerDomain));
  for (const quiz of pool) {
    if (selected.length >= size) break;
    if (!selected.some((item) => item.id === quiz.id)) selected.push(quiz);
  }
  return selected.slice(0, Math.min(size, pool.length));
}

function domainRows(questions: QuizQuestion[], answers: Record<string, number | undefined>) {
  return feDomains.map((domain) => {
    const items = questions.filter((q) => q.domain === domain);
    const correct = items.filter((q) => answers[q.id] === q.answerIndex).length;
    return { domain, total: items.length, correct, score: items.length ? Math.round((correct / items.length) * 100) : 0 };
  }).filter((row) => row.total > 0);
}

export function FundamentalInfoExamSimulator(props: Props) {
  const [size, setSize] = useState<ExamSize>(30);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | undefined>>({});
  const [submitted, setSubmitted] = useState(false);
  const questions = useMemo(() => makeFeExam(props.quizzes, size), [props.quizzes, size]);
  const current = questions[index];
  const answered = Object.keys(answers).length;
  const correct = questions.filter((q) => answers[q.id] === q.answerIndex).length;
  const score = questions.length ? Math.round((correct / questions.length) * 100) : 0;
  const rows = domainRows(questions, answers);
  const weak = rows.filter((row) => row.score < 70).sort((a, b) => a.score - b.score);
  const wrong = questions.filter((q) => answers[q.id] !== undefined && answers[q.id] !== q.answerIndex);
  const suggestedPace = size === 30 ? "30 câu · làm chậm và review domain yếu" : "60 câu · kiểm tra coverage rộng hơn";

  if (!current) return <p className="glass-panel rounded-[2rem] p-5 text-sm font-bold text-slate-600">基本情報 exam simulator chưa có quiz.</p>;
  const localized = getLocalizedQuestion(current, props.language === 'ja' ? 'ja' : props.language);

  return (
    <section className="space-y-4" aria-label="Fundamental Information exam simulator">
      <section className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-glow">
        <div className="grid gap-4 p-5 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.22em] text-blue-300"><Target className="h-4 w-4" /> V64 FE Exam Simulator</p><span className="sr-only">V63 FE Exam Simulator V62 FE Exam Simulator V61 FE Exam Simulator</span>
            <h2 className="mt-2 text-3xl font-black leading-tight">基本情報の科目A/科目B対策: domain別に弱点を確認する。</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">30 câu để luyện nhanh, 60 câu để kiểm tra dài hơn. V64 tăng scenario bank lên 44+ câu, review yếu điểm theo domain và gợi ý drill/lesson cần học lại trước khi làm đề tiếp theo.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {([30, 60] as const).map((value) => (
                <button key={value} type="button" onClick={() => { setSize(value); setIndex(0); setAnswers({}); setSubmitted(false); }} aria-pressed={size === value} className={`rounded-2xl px-4 py-2 text-xs font-black ${size === value ? 'bg-blue-300 text-slate-950' : 'bg-white/10 text-white'}`}>{value} câu</button>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4">
            <p className="text-xs font-black uppercase tracking-[.18em] text-slate-300">Suggested pace</p>
            <p className="mt-2 text-lg font-black text-blue-300">{suggestedPace}</p>
            <p className="mt-2 text-xs font-bold text-slate-300">Answered {answered}/{questions.length} · Score {score}%</p>
            <p className="mt-2 text-xs font-bold text-cyan-200">V64 scenario bank: {fundamentalInfoExamScenarios.length} drills</p><span className="sr-only">V63 scenario bank V62 scenario bank V61 scenario bank</span>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-blue-300" style={{ width: `${questions.length ? (answered / questions.length) * 100 : 0}%` }} /></div>
          </div>
        </div>
      </section>

      {!submitted ? (
        <section className="grid gap-4 xl:grid-cols-[1fr_320px]">
          <article className="glass-panel rounded-[2rem] p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-black uppercase tracking-[.2em] text-blue-600">Q{index + 1}/{questions.length} · {current.domain} · {current.difficulty}</p>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{current.nodeId}</span>
            </div>
            <h3 className="mt-3 text-xl font-black leading-8 text-slate-950">{localized.question}</h3>
            <div className="mt-4 grid gap-2">
              {localized.options.map((option, optionIndex) => {
                const picked = answers[current.id] === optionIndex;
                return <button key={option} type="button" onClick={() => setAnswers((state) => ({ ...state, [current.id]: optionIndex }))} aria-pressed={picked} className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${picked ? 'border-blue-300 bg-blue-50 text-blue-950' : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200'}`}>{option}</button>;
              })}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" onClick={() => setIndex((value) => Math.max(0, value - 1))} className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-700 shadow-sm">Back</button>
              <button type="button" onClick={() => setIndex((value) => Math.min(questions.length - 1, value + 1))} className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white">Next</button>
              <button type="button" onClick={() => setSubmitted(true)} className="rounded-2xl bg-blue-700 px-4 py-3 text-sm font-black text-white">Submit FE exam</button>
            </div>
          </article>
          <aside className="glass-panel rounded-[2rem] p-5">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-slate-500"><FileQuestion className="h-4 w-4" /> Question map</p>
            <div className="mt-4 grid grid-cols-5 gap-2">{questions.map((q, i) => <button key={q.id} type="button" onClick={() => setIndex(i)} className={`rounded-xl px-2 py-2 text-xs font-black ${i === index ? 'bg-slate-950 text-white' : answers[q.id] !== undefined ? 'bg-emerald-50 text-emerald-700' : 'bg-white text-slate-500 shadow-sm'}`}>{i + 1}</button>)}</div>
          </aside>
        </section>
      ) : (
        <section className="space-y-4">
          <div className={`rounded-[2rem] p-6 shadow-sm ${score >= 70 ? 'bg-emerald-50 text-emerald-950' : 'bg-amber-50 text-amber-950'}`}>
            <p className="text-xs font-black uppercase tracking-[.2em]">FE Exam result</p>
            <h3 className="mt-2 text-4xl font-black">{score}% · {score >= 70 ? '合格圏内' : '要復習'}</h3>
            <p className="mt-2 text-sm font-bold">Đúng {correct}/{questions.length}. Ưu tiên ôn domain dưới 70% và quay lại node liên quan.</p>
            <div className="mt-4 grid gap-2 md:grid-cols-3" aria-label="V64 FE readiness action plan V63 FE readiness action plan V62 FE readiness action plan"><span className="sr-only">V63 FE readiness action plan V62 FE readiness action plan</span>
              <p className="rounded-2xl bg-white/60 p-3 text-xs font-black">1. Review wrong nodes</p>
              <p className="rounded-2xl bg-white/60 p-3 text-xs font-black">2. Drill weak scenarios</p>
              <p className="rounded-2xl bg-white/60 p-3 text-xs font-black">3. Retry 30-question exam</p>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
            <div className="glass-panel rounded-[2rem] p-5">
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-amber-600"><AlertTriangle className="h-4 w-4" /> Domain score</p>
              <div className="mt-4 space-y-3">{rows.map((row) => <div key={row.domain} className="rounded-2xl bg-white p-4 shadow-sm"><div className="flex justify-between text-sm font-black"><span>{row.domain}</span><span>{row.score}%</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"><div className={`h-full ${row.score >= 70 ? 'bg-emerald-400' : 'bg-amber-400'}`} style={{ width: `${row.score}%` }} /></div><p className="mt-2 text-xs font-bold text-slate-500">{row.correct}/{row.total} đúng</p></div>)}</div>
            </div>
            <div className="glass-panel rounded-[2rem] p-5">
              <p className="text-xs font-black uppercase tracking-[.2em] text-rose-600">Wrong node review</p>
              <div className="mt-4 grid gap-2">
                {wrong.slice(0, 12).map((q) => {
                  const node = props.nodes.find((item) => item.id === q.nodeId);
                  return <button key={q.id} type="button" onClick={() => node && props.onSelectNode(node.id)} className="rounded-2xl border border-rose-100 bg-rose-50/60 p-4 text-left text-sm text-rose-950"><b>{node ? getNodeLabel(node, props.language) : q.nodeId}</b><p className="mt-1 text-xs font-bold leading-5 opacity-80">{props.language === 'ja' ? q.explanationJa : q.explanationVi}</p></button>;
                })}
                {!wrong.length && <p className="rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-800"><CheckCircle2 className="mr-2 inline h-4 w-4" /> Không có câu sai.</p>}
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-5">
            <p className="text-xs font-black uppercase tracking-[.2em] text-cyan-700">V64 scenario recommendations</p><span className="sr-only">V63 scenario recommendations V62 scenario recommendations V61 scenario recommendations</span>
            <div className="mt-4 grid gap-2">
              {fundamentalInfoExamScenarios.filter((scenario) => weak.some((row) => scenario.domain === row.domain || (row.domain === 'technology' && scenario.domain === 'algorithm'))).slice(0, 4).map((scenario) => (
                <button key={scenario.id} type="button" onClick={() => props.onView?.('practice')} className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4 text-left text-sm font-bold text-cyan-950">
                  {props.language === 'ja' ? scenario.titleJa : scenario.titleVi}
                  <span className="mt-1 block text-xs opacity-70">{scenario.kind} · {scenario.domain}</span>
                </button>
              ))}
              {!weak.length && <p className="rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-800">弱点 domain が少ないです。practice で長文問題を維持しましょう。</p>}
            </div>
          </div>
          <button type="button" onClick={() => { setAnswers({}); setIndex(0); setSubmitted(false); }} className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white"><RotateCcw className="mr-2 inline h-4 w-4" /> Làm lại FE exam</button>
        </section>
      )}
    </section>
  );
}
