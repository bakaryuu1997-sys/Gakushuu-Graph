import { pythonCodeExercises, type PythonCodeExercise } from '../../../courses/python/codeExercises';
import { readPythonExerciseProgress, type PythonExerciseRunRecord } from './pythonCodeProgress';

export type PythonExerciseSetId = 'beginner' | 'data' | 'algorithm' | 'fastapi' | 'project-prep';

export const pythonExerciseSets: Array<{ id: PythonExerciseSetId; title: string; titleJa: string; descriptionVi: string; descriptionJa: string; predicate: (exercise: PythonCodeExercise) => boolean }> = [
  { id: 'beginner', title: 'Beginner set', titleJa: '初心者set', descriptionVi: 'Bắt đầu bằng control/function/list để quen vòng lặp và return.', descriptionJa: 'control/function/listでloopとreturnに慣れます。', predicate: (ex) => ex.level === 'easy' && ['control','function','data'].includes(ex.kind) },
  { id: 'data', title: 'Data set', titleJa: 'Data set', descriptionVi: 'Luyện dict/list/file/JSON — rất hay dùng khi làm automation và AI data.', descriptionJa: 'dict/list/file/JSONを練習します。automationやAI dataでよく使います。', predicate: (ex) => ['data','file'].includes(ex.kind) },
  { id: 'algorithm', title: 'Algorithm set', titleJa: 'Algorithm set', descriptionVi: 'Luyện pattern hard: search, stack, window, graph, DP.', descriptionJa: 'search、stack、window、graph、DPなどのpatternを練習します。', predicate: (ex) => ex.kind === 'algorithm' },
  { id: 'fastapi', title: 'FastAPI set', titleJa: 'FastAPI set', descriptionVi: 'Luyện route, schema, service, validation cho API/AI backend.', descriptionJa: 'API/AI backend用にroute、schema、service、validationを練習します。', predicate: (ex) => ex.kind === 'backend' },
  { id: 'project-prep', title: 'Project prep set', titleJa: 'Project準備set', descriptionVi: 'Luyện file, OOP, backend để chuẩn bị làm mini project.', descriptionJa: 'mini project前にfile、OOP、backendを練習します。', predicate: (ex) => ['file','oop','backend'].includes(ex.kind) },
];

const firstFunctionName = (code: string) => code.match(/def\s+([a-zA-Z_][\w]*)\s*\(/)?.[1] ?? '';

export const inspectPythonExerciseQuality = (exercise: PythonCodeExercise) => {
  const functionName = firstFunctionName(exercise.starterCode);
  const joinedTests = [...exercise.visibleTests, ...exercise.hiddenTests].join('\n');
  const starterHasFunction = exercise.kind === 'backend' || Boolean(functionName);
  const testsCallStarterFunction = exercise.kind === 'backend' || Boolean(functionName && joinedTests.includes(`${functionName}(`));
  const hasVisible = exercise.visibleTests.length > 0;
  const hasHidden = exercise.hiddenTests.length > 0;
  const hasBilingualHelp = exercise.explanationVi.length > 20 && exercise.explanationJa.length > 20 && exercise.hintsVi.length > 0 && exercise.hintsJa.length > 0;
  const score = [starterHasFunction, testsCallStarterFunction, hasVisible, hasHidden, hasBilingualHelp].filter(Boolean).length;
  return { exerciseId: exercise.id, title: exercise.title, functionName, starterHasFunction, testsCallStarterFunction, hasVisible, hasHidden, hasBilingualHelp, score, total: 5 };
};

export const summarizePythonExerciseQuality = () => {
  const results = pythonCodeExercises.map(inspectPythonExerciseQuality);
  return {
    total: results.length,
    passing: results.filter((item) => item.score >= 4).length,
    weak: results.filter((item) => item.score < 4),
    results,
  };
};

export const getNextRecommendedExercise = (records: PythonExerciseRunRecord[] = readPythonExerciseProgress()) => {
  const failedIds = new Set(records.filter((record) => record.status === 'failed').map((record) => record.exerciseId));
  const attemptedIds = new Set(records.map((record) => record.exerciseId));
  return pythonCodeExercises.find((exercise) => failedIds.has(exercise.id))
    ?? pythonCodeExercises.find((exercise) => exercise.level === 'easy' && !attemptedIds.has(exercise.id))
    ?? pythonCodeExercises.find((exercise) => exercise.level === 'standard' && !attemptedIds.has(exercise.id))
    ?? pythonCodeExercises.find((exercise) => !attemptedIds.has(exercise.id))
    ?? pythonCodeExercises[0];
};
