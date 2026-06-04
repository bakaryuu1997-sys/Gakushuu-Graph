import { pythonCodeExercises, type PythonCodeExercise } from '../../../courses/python/codeExercises';
import { readPythonExerciseProgress, summarizePythonProgress, type PythonExerciseRunRecord } from './pythonCodeProgress';
import { readPythonProjectAttempts } from './pythonProjectProgress';

export interface PythonReviewQueueItem { id: string; title: string; reasonVi: string; reasonJa: string; exercise: PythonCodeExercise; priority: number; }

const byId = new Map(pythonCodeExercises.map((item) => [item.id, item]));
const kindPriority: Record<string, number> = { algorithm: 18, backend: 15, data: 12, oop: 10, function: 8, control: 6, file: 7 };

const itemFromExercise = (exercise: PythonCodeExercise, reasonVi: string, reasonJa: string, priority: number): PythonReviewQueueItem => ({
  id: exercise.id, title: exercise.title, reasonVi, reasonJa, exercise, priority,
});

export const openPythonExerciseInCodeLab = (exerciseId: string) => {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('v69r-python-open-exercise', { detail: exerciseId }));
};

export const buildPythonReviewQueue = (records: PythonExerciseRunRecord[] = readPythonExerciseProgress()): PythonReviewQueueItem[] => {
  const failed = records.filter((item) => item.status === 'failed').map((record) => {
    const exercise = byId.get(record.exerciseId);
    return exercise ? itemFromExercise(exercise, 'Bài này từng fail. Hãy retry và đọc mistake tag trước.', 'この問題は以前failしました。mistake tagを確認して再挑戦します。', 80 + (kindPriority[exercise.kind] ?? 0)) : null;
  }).filter(Boolean) as PythonReviewQueueItem[];
  const summary = summarizePythonProgress(records);
  const weakKind = Object.entries(summary.byKind).sort((a, b) => (a[1].pass / Math.max(1, a[1].done)) - (b[1].pass / Math.max(1, b[1].done)))[0]?.[0];
  const weak = weakKind ? pythonCodeExercises.filter((item) => item.kind === weakKind && !records.some((record) => record.exerciseId === item.id && record.status === 'passed')).slice(0, 4).map((exercise) => itemFromExercise(exercise, `Nhóm ${weakKind} còn yếu hoặc chưa đủ pass.`, `${weakKind}分野はまだ弱い/未完了です。`, 55 + (kindPriority[exercise.kind] ?? 0))) : [];
  const projects = readPythonProjectAttempts().filter((item) => item.status === 'failed').slice(0, 3).map((attempt) => {
    const exercise = pythonCodeExercises.find((item) => item.kind === 'backend') ?? pythonCodeExercises[0];
    return itemFromExercise(exercise, `Project ${attempt.title} cần retry/checklist.`, `Project ${attempt.title}を再確認します。`, 52);
  });
  const fresh = pythonCodeExercises.filter((item) => !records.some((record) => record.exerciseId === item.id)).slice(0, 5).map((exercise) => itemFromExercise(exercise, 'Bài mới được gợi ý để mở rộng kỹ năng.', '新しい練習問題でskillを広げます。', 35 + (kindPriority[exercise.kind] ?? 0)));
  const merged = [...failed, ...weak, ...projects, ...fresh];
  const unique = new Map<string, PythonReviewQueueItem>();
  for (const item of merged.sort((a, b) => b.priority - a.priority)) {
    if (!unique.has(item.id)) unique.set(item.id, item);
  }
  return Array.from(unique.values()).slice(0, 12);
};

export const getNextRecommendedExercise = (records: PythonExerciseRunRecord[] = readPythonExerciseProgress()) => buildPythonReviewQueue(records)[0] ?? itemFromExercise(pythonCodeExercises[0], 'Bắt đầu với bài nền tảng.', '基礎問題から始めます。', 1);
