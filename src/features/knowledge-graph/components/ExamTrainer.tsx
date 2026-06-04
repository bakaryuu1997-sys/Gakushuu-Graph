import { useMemo, useState } from 'react';
import { BrainCircuit, CheckCircle2, GitCompare, Layers3, RotateCcw, XCircle } from 'lucide-react';
import { conceptComparisons } from '../data/conceptComparisons';
import { getExplanationText, getQuestionText, quizQuestions } from '../data/quizQuestions';
import type { KnowledgeNodeData, Language } from '../types';
import { getCompareDifference, getCompareExamTip, getNodeExamPoint, getNodeLabel, getNodeSummary } from '../utils/i18n';

interface ExamTrainerProps {
  nodes: KnowledgeNodeData[];
  selectedNode: KnowledgeNodeData;
  language: Language;
  onSelectNode: (nodeId: string) => void;
}

type TrainerTab = 'quiz' | 'flashcard' | 'compare';

export function ExamTrainer({ nodes, selectedNode, language, onSelectNode }: ExamTrainerProps) {
  const [tab, setTab] = useState<TrainerTab>('quiz');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showCardAnswer, setShowCardAnswer] = useState(false);
  const [comparisonIndex, setComparisonIndex] = useState(0);

  const highNodes = useMemo(() => nodes.filter((node) => node.importance === 'high'), [nodes]);
  const question = quizQuestions[questionIndex % quizQuestions.length];
  const comparison = conceptComparisons[comparisonIndex % conceptComparisons.length];
  const flashcardNode = highNodes[questionIndex % Math.max(highNodes.length, 1)] ?? selectedNode;
  const correct = selectedAnswer === question.answerIndex;

  const nextQuestion = () => {
    setQuestionIndex((value) => value + 1);
    setSelectedAnswer(null);
    setShowCardAnswer(false);
  };

  return (
    <section className="mx-auto w-full max-w-[1800px] px-4 pb-8 lg:px-6">
      <div className="glass-panel overflow-hidden rounded-[2rem]">
        <div className="flex flex-col gap-3 border-b border-slate-200/80 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-rose-600">Exam Preparation</p>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-950">Chế độ luyện thi IT Passport</h2>
            <p className="mt-1 text-sm text-slate-600">Quiz sát keyword thi, flashcard nhớ nhanh và so sánh khái niệm dễ nhầm.</p>
          </div>
          <div className="grid grid-cols-3 gap-2 rounded-2xl bg-white p-1 shadow-sm">
            {(['quiz', 'flashcard', 'compare'] as const).map((item) => (
              <button key={item} type="button" onClick={() => setTab(item)} className={`rounded-xl px-3 py-2 text-xs font-black capitalize transition ${tab === item ? 'bg-slate-950 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>{item}</button>
            ))}
          </div>
        </div>

        {tab === 'quiz' && (
          <div className="grid gap-5 p-5 lg:grid-cols-[1fr_360px]">
            <div className="rounded-[1.5rem] border border-rose-100 bg-white/85 p-5 shadow-sm">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-black text-rose-700">{question.domain}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{question.difficulty}</span>
              </div>
              <h3 className="mt-4 text-lg font-black text-slate-950">{getQuestionText(question, language)}</h3>
              <div className="mt-4 grid gap-2">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === question.answerIndex;
                  const tone = selectedAnswer === null
                    ? 'border-slate-200 bg-white hover:border-indigo-300'
                    : isCorrect
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                      : isSelected
                        ? 'border-rose-300 bg-rose-50 text-rose-900'
                        : 'border-slate-200 bg-white text-slate-500';
                  return (
                    <button key={option} type="button" onClick={() => setSelectedAnswer(index)} className={`focus-ring flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${tone}`}>
                      <span>{option}</span>
                      {selectedAnswer !== null && isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-600" />}
                      {selectedAnswer !== null && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-rose-600" />}
                    </button>
                  );
                })}
              </div>
              {selectedAnswer !== null && (
                <div className={`mt-4 rounded-2xl p-4 text-sm leading-6 ${correct ? 'bg-emerald-50 text-emerald-950' : 'bg-rose-50 text-rose-950'}`}>
                  <p className="font-black">{correct ? 'Đúng' : 'Chưa đúng'} · Giải thích</p>
                  <p className="mt-1">{getExplanationText(question, language)}</p>
                </div>
              )}
            </div>
            <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white shadow-glow">
              <BrainCircuit className="h-8 w-8 text-cyan-300" />
              <h3 className="mt-3 text-xl font-black">Quiz không thể đảm bảo 100%</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">Bộ câu hỏi này được thiết kế sát keyword IT Passport thường gặp, nhưng chưa thể đảm bảo giống đề thật 100%. Hãy dùng để hiểu khái niệm và luyện phản xạ.</p>
              <button type="button" onClick={nextQuestion} className="mt-4 w-full rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5"><RotateCcw className="mr-2 inline h-4 w-4" />Câu tiếp theo</button>
            </div>
          </div>
        )}

        {tab === 'flashcard' && (
          <div className="grid gap-5 p-5 lg:grid-cols-[420px_1fr]">
            <div className="rounded-[1.5rem] border border-indigo-100 bg-white p-6 shadow-sm">
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-indigo-600"><Layers3 className="h-4 w-4" /> Flashcard</p>
              <h3 className="mt-3 text-3xl font-black text-slate-950">{flashcardNode.labelJa}</h3>
              <p className="mt-1 font-bold text-indigo-700">{getNodeLabel(flashcardNode, language)}</p>
              {flashcardNode.reading && <p className="text-sm text-slate-500">{flashcardNode.reading}</p>}
              <button type="button" onClick={() => setShowCardAnswer((value) => !value)} className="mt-5 rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-black text-white shadow-glow">{showCardAnswer ? 'Ẩn giải thích' : 'Xem giải thích'}</button>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white/85 p-6 shadow-sm">
              {showCardAnswer ? (
                <div className="space-y-4">
                  <div><p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Meaning</p><p className="mt-1 text-sm leading-6 text-slate-700">{getNodeSummary(flashcardNode, language)}</p></div>
                  <div><p className="text-xs font-black uppercase tracking-[0.18em] text-rose-500">Exam Point</p><p className="mt-1 text-sm leading-6 text-slate-700">{getNodeExamPoint(flashcardNode, language)}</p></div>
                  <div className="flex flex-wrap gap-2">{flashcardNode.keywords.map((keyword) => <span key={keyword} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{keyword}</span>)}</div>
                </div>
              ) : <p className="text-sm font-semibold text-slate-500">Hãy tự giải thích trước khi bấm “Xem giải thích”.</p>}
              <button type="button" onClick={nextQuestion} className="mt-5 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white">Flashcard tiếp theo</button>
            </div>
          </div>
        )}

        {tab === 'compare' && (
          <div className="grid gap-5 p-5 lg:grid-cols-[1fr_260px]">
            <div className="rounded-[1.5rem] border border-cyan-100 bg-white/85 p-6 shadow-sm">
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-700"><GitCompare className="h-4 w-4" /> Compare Mode</p>
              <h3 className="mt-2 text-2xl font-black text-slate-950">{comparison.title}</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <button type="button" onClick={() => onSelectNode(comparison.leftNodeId)} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left font-black text-slate-900 transition hover:-translate-y-0.5">{comparison.leftLabel}</button>
                <button type="button" onClick={() => onSelectNode(comparison.rightNodeId)} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left font-black text-slate-900 transition hover:-translate-y-0.5">{comparison.rightLabel}</button>
              </div>
              <div className="mt-5 rounded-2xl bg-cyan-50 p-4 text-sm leading-6 text-cyan-950">{getCompareDifference(comparison, language)}</div>
              <div className="mt-3 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-950"><b>Exam tip:</b> {getCompareExamTip(comparison, language)}</div>
            </div>
            <button type="button" onClick={() => setComparisonIndex((value) => value + 1)} className="rounded-[1.5rem] bg-slate-950 p-5 text-left text-white shadow-glow transition hover:-translate-y-0.5">
              <GitCompare className="h-7 w-7 text-cyan-300" />
              <p className="mt-3 text-lg font-black">So sánh tiếp theo</p>
              <p className="mt-2 text-sm text-slate-300">Luyện các cặp dễ nhầm trong đề thi.</p>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
