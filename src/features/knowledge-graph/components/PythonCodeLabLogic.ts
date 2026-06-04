import type { PythonCodeExercise } from '../../../courses/python/codeExercises';
import { writePythonExerciseRun } from './pythonCodeProgress';
import { formatFastApiValidationOutput, validateFastApiProject } from './fastApiProjectValidator';
import { writePythonProjectAttempt } from './pythonProjectProgress';

declare global {
  interface Window { loadPyodide?: (args?: { indexURL?: string }) => Promise<{ runPythonAsync: (code: string) => Promise<unknown> }>; }
}

export const isBackendExercise = (exercise: PythonCodeExercise) => exercise.kind === 'backend';
const projectIdFromExercise = (exercise: PythonCodeExercise) => exercise.id.startsWith('project-draft-') ? exercise.id.replace('project-draft-', '') : null;

const writeProjectResultIfNeeded = (exercise: PythonCodeExercise, status: 'passed' | 'failed' | 'static-reviewed', passed: number, total: number) => {
  const projectId = projectIdFromExercise(exercise);
  if (!projectId) return;
  writePythonProjectAttempt({ projectId, title: exercise.title, status, passed, total, notes: status === 'failed' ? 'retry recommended' : 'checked from Code Lab' });
};

export const validateFastApiCode = (code: string, exercise: PythonCodeExercise) => {
  const result = validateFastApiProject(code);
  const output = formatFastApiValidationOutput(result);
  const status = result.score >= 80 ? 'static-reviewed' : 'failed';
  writePythonExerciseRun({
    exerciseId: exercise.id,
    title: exercise.title,
    kind: exercise.kind,
    level: exercise.level,
    status,
    passed: result.passed,
    total: result.total,
    mistakeTags: status === 'failed' ? [...exercise.mistakeTags, 'fastapi'] : [],
  });
  writeProjectResultIfNeeded(exercise, status, result.passed, result.total);
  return `${output}\n\nVI: Backend/FastAPI được kiểm bằng design validator vì browser không chạy server trực tiếp.\nJA: backend/FastAPIはbrowser内でserver実行できないため、設計validatorで確認します。`;
};

export const runPythonExerciseTests = async (code: string, exercise: PythonCodeExercise, mode: 'visible' | 'all' = 'all') => {
  if (!window.loadPyodide) {
    return 'Pyodide chưa tải được. Offline fallback: đọc visible tests, tự so sánh output và dùng hint/solution.\nPyodideが未読込です。offline時はvisible testとhintで確認します。';
  }
  const pyodide = await window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/' });
  const tests = mode === 'visible' ? [...exercise.visibleTests] : [...exercise.visibleTests, ...exercise.hiddenTests];
  const script = `${code}\n\nresults=[]\n${tests.map((test, index) => `\ntry:\n    results.append(('test ${index + 1}', bool(${test})))\nexcept Exception as e:\n    results.append(('test ${index + 1}', False, type(e).__name__, str(e)))`).join('')}\nresults`;
  const result = await pyodide.runPythonAsync(script);
  const text = String(result);
  const passed = (text.match(/True/g) ?? []).length;
  const status = passed === tests.length ? 'passed' : 'failed';
  writePythonExerciseRun({
    exerciseId: exercise.id,
    title: exercise.title,
    kind: exercise.kind,
    level: exercise.level,
    status,
    passed,
    total: tests.length,
    mistakeTags: status === 'passed' ? [] : exercise.mistakeTags,
  });
  writeProjectResultIfNeeded(exercise, status, passed, tests.length);
  return `${status === 'passed' ? '✅ Passed' : '❌ Failed'} ${passed}/${tests.length} (${mode} tests)\n${text}\n\nVI: ${status === 'passed' ? 'Tốt. Hãy thử giải lại không nhìn solution.' : 'Chưa đúng. Đọc test fail và kiểm edge case.'}\nJA: ${status === 'passed' ? '良いです。solutionを見ずにもう一度解きます。' : '未完成です。failしたtestとedge caseを確認します。'}`;
};
