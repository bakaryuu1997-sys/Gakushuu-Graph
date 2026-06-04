import type { CourseConfig } from '../courses/types';
import { buildGlossaryCsv, buildLearningPackMarkdown, buildQuizReviewJson } from '../features/exporters/learningPack';
import { downloadBlob, exportProgressJson } from '../features/exporters/exportUtils';
import type { ProgressState } from '../features/knowledge-graph/types';

interface Props {
  course: CourseConfig;
  progress: ProgressState;
}

export function LearningPackExporter({ course, progress }: Props) {
  const exportMarkdown = () => downloadBlob(new Blob([buildLearningPackMarkdown(course)], { type: 'text/markdown;charset=utf-8' }), `${course.id}-learning-pack.md`);
  const exportGlossary = () => downloadBlob(new Blob([buildGlossaryCsv(course)], { type: 'text/csv;charset=utf-8' }), `${course.id}-glossary.csv`);
  const exportQuiz = () => downloadBlob(new Blob([buildQuizReviewJson(course)], { type: 'application/json' }), `${course.id}-quiz-review.json`);

  return <div className="grid gap-2 rounded-[1.5rem] border border-emerald-200 bg-white/95 p-3 shadow-soft backdrop-blur">
    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700">Export Learning Pack</p>
    <button onClick={exportMarkdown} className="rounded-xl bg-emerald-600 px-3 py-2 text-xs font-black text-white">Cheat sheet MD</button>
    <button onClick={exportGlossary} className="rounded-xl bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm">Glossary CSV</button>
    <button onClick={exportQuiz} className="rounded-xl bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm">Quiz JSON</button>
    <button onClick={() => exportProgressJson(course.id, progress)} className="rounded-xl bg-slate-950 px-3 py-2 text-xs font-black text-white">Progress JSON</button>
  </div>;
}
