import { useMemo, useState } from 'react';
import { readPythonExerciseProgress } from './pythonCodeProgress';
import { readPythonProjectAttempts } from './pythonProjectProgress';
import { readPythonInterviewHistory } from './pythonInterviewMode';

export function PythonAchievementPanel() {
  const [version, setVersion] = useState(0);
  const achievements = useMemo(() => {
    const records = readPythonExerciseProgress();
    const attempts = readPythonProjectAttempts();
    const interviews = readPythonInterviewHistory();
    const algorithmPass = records.filter((item) => item.kind === 'algorithm' && item.status === 'passed').length;
    const hardPass = records.filter((item) => item.level === 'hard' && item.status === 'passed').length;
    const fastApiReviewed = records.filter((item) => item.kind === 'backend' && item.status === 'static-reviewed').length + attempts.filter((item) => item.status === 'static-reviewed').length;
    const bestInterview = interviews.reduce((max, item) => Math.max(max, item.score), 0);
    return [
      { label: 'Pass 5 algorithm exercises', labelJa: 'algorithmを5問pass', ok: algorithmPass >= 5, detail: `${algorithmPass}/5` },
      { label: 'Review 3 FastAPI tasks', labelJa: 'FastAPI taskを3つreview', ok: fastApiReviewed >= 3, detail: `${fastApiReviewed}/3` },
      { label: 'Pass 3 hard problems', labelJa: 'hard問題を3問pass', ok: hardPass >= 3, detail: `${hardPass}/3` },
      { label: 'Reach 70% interview score', labelJa: 'interviewで70%以上', ok: bestInterview >= 70, detail: `${bestInterview}%` },
    ];
  }, [version]);
  return (
    <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
      <div className="flex items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-700">V72R Local Achievements</p><h3 className="text-xl font-black">Thành tựu học Python / 達成状況</h3></div><button type="button" onClick={() => setVersion((v) => v + 1)} className="rounded-xl border border-emerald-300 px-3 py-2 text-sm font-bold dark:border-emerald-700">Refresh</button></div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">{achievements.map((item) => <div key={item.label} className="rounded-2xl bg-white p-4 dark:bg-slate-950"><p className="text-2xl">{item.ok ? '🏆' : '⬜'}</p><b>{item.label}</b><p className="text-xs text-slate-500">{item.labelJa}</p><p className="mt-2 text-sm font-black text-emerald-700 dark:text-emerald-200">{item.detail}</p></div>)}</div>
    </section>
  );
}
