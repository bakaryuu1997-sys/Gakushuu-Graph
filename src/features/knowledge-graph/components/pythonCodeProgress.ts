export type PythonExerciseRunStatus = 'passed' | 'failed' | 'static-reviewed';

export interface PythonExerciseRunRecord {
  exerciseId: string;
  title: string;
  kind: string;
  level: string;
  status: PythonExerciseRunStatus;
  passed: number;
  total: number;
  mistakeTags: string[];
  updatedAt: string;
}

const STORAGE_KEY = 'v69r-python-code-progress';

const safeParse = (raw: string | null): PythonExerciseRunRecord[] => {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const readPythonExerciseProgress = (): PythonExerciseRunRecord[] => {
  if (typeof window === 'undefined') return [];
  return safeParse(window.localStorage.getItem(STORAGE_KEY));
};

export const writePythonExerciseRun = (record: Omit<PythonExerciseRunRecord, 'updatedAt'>) => {
  if (typeof window === 'undefined') return [];
  const next: PythonExerciseRunRecord = { ...record, updatedAt: new Date().toISOString() };
  const history = readPythonExerciseProgress().filter((item) => item.exerciseId !== record.exerciseId);
  const saved = [next, ...history].slice(0, 80);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  window.dispatchEvent(new CustomEvent('v69r-python-progress-updated'));
  return saved;
};

export const resetPythonExerciseProgress = () => {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('v69r-python-progress-updated'));
};

export const summarizePythonProgress = (records: PythonExerciseRunRecord[]) => {
  const attempted = records.length;
  const passed = records.filter((item) => item.status === 'passed').length;
  const backend = records.filter((item) => item.kind === 'backend').length;
  const hard = records.filter((item) => item.level === 'hard' && item.status === 'passed').length;
  const byKind = records.reduce<Record<string, { done: number; pass: number }>>((acc, item) => {
    acc[item.kind] ??= { done: 0, pass: 0 };
    acc[item.kind].done += 1;
    if (item.status === 'passed' || item.status === 'static-reviewed') acc[item.kind].pass += 1;
    return acc;
  }, {});
  return { attempted, passed, backend, hard, byKind, score: attempted ? Math.round((passed / attempted) * 100) : 0 };
};
