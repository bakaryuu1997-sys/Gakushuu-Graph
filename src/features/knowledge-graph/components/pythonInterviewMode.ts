import { pythonCodeExercises, type PythonCodeExercise } from '../../../courses/python/codeExercises';
import { readPythonExerciseProgress, type PythonExerciseRunRecord } from './pythonCodeProgress';

export type PythonInterviewLevel = 'easy' | 'standard' | 'hard';
export interface PythonInterviewSessionResult { level: PythonInterviewLevel; score: number; solved: number; total: number; exerciseIds: string[]; updatedAt: string; }
const HISTORY_KEY = 'v72r-python-interview-history';
const levelRank: Record<PythonInterviewLevel, number> = { easy: 1, standard: 2, hard: 3 };

const safeJson = <T,>(raw: string | null, fallback: T): T => {
  if (!raw) return fallback;
  try { return JSON.parse(raw) as T; } catch { return fallback; }
};

export const readPythonInterviewHistory = (): PythonInterviewSessionResult[] => {
  if (typeof window === 'undefined') return [];
  return safeJson(window.localStorage.getItem(HISTORY_KEY), []);
};

export const writePythonInterviewResult = (result: Omit<PythonInterviewSessionResult, 'updatedAt'>) => {
  if (typeof window === 'undefined') return [];
  const next = { ...result, updatedAt: new Date().toISOString() };
  const saved = [next, ...readPythonInterviewHistory()].slice(0, 20);
  window.localStorage.setItem(HISTORY_KEY, JSON.stringify(saved));
  window.dispatchEvent(new CustomEvent('v72r-python-interview-updated'));
  return saved;
};

export const resetPythonInterviewHistory = () => {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(HISTORY_KEY);
  window.dispatchEvent(new CustomEvent('v72r-python-interview-updated'));
};

export const selectInterviewExercises = (level: PythonInterviewLevel, records: PythonExerciseRunRecord[] = readPythonExerciseProgress(), size = 10): PythonCodeExercise[] => {
  const failedIds = new Set(records.filter((item) => item.status === 'failed').map((item) => item.exerciseId));
  const attemptedIds = new Set(records.map((item) => item.exerciseId));
  const desired = levelRank[level];
  const scored = pythonCodeExercises.map((exercise) => {
    const exact = exercise.level === level ? 30 : 0;
    const hardBoost = level === 'hard' && exercise.level === 'hard' ? 20 : 0;
    const standardBoost = level === 'standard' && exercise.level !== 'easy' ? 10 : 0;
    const failedBoost = failedIds.has(exercise.id) ? 18 : 0;
    const freshBoost = attemptedIds.has(exercise.id) ? 0 : 14;
    const kindBoost = ['algorithm', 'oop', 'backend', 'data'].includes(exercise.kind) ? 8 : 0;
    const rankDistance = Math.abs((exercise.level === 'easy' ? 1 : exercise.level === 'standard' ? 2 : 3) - desired);
    return { exercise, score: exact + hardBoost + standardBoost + failedBoost + freshBoost + kindBoost - rankDistance * 4 };
  });
  return scored.sort((a, b) => b.score - a.score || a.exercise.id.localeCompare(b.exercise.id)).slice(0, size).map((item) => item.exercise);
};

export const summarizeInterviewHistory = (history: PythonInterviewSessionResult[]) => {
  const latest = history[0];
  const best = history.reduce((max, item) => Math.max(max, item.score), 0);
  const average = history.length ? Math.round(history.reduce((sum, item) => sum + item.score, 0) / history.length) : 0;
  return { latest, best, average, count: history.length };
};
