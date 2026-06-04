import { describe, expect, it } from 'vitest';
import { pythonCodeExercises } from '../courses/python/codeExercises';
import { PythonWhyThisMattersPanel } from '../features/knowledge-graph/components/PythonWhyThisMattersPanel';
import { PythonRealWorldExerciseMap } from '../features/knowledge-graph/components/PythonRealWorldExerciseMap';
import { PythonPracticeTabs } from '../features/knowledge-graph/components/PythonPracticeTabs';

describe('V74R Python final content depth and real exercises', () => {
  it('expands Python practice to 60+ exercises across real-world categories', () => {
    expect(pythonCodeExercises.length).toBeGreaterThanOrEqual(60);
    expect(pythonCodeExercises.filter((exercise) => exercise.kind === 'backend').length).toBeGreaterThanOrEqual(8);
    expect(pythonCodeExercises.filter((exercise) => exercise.kind === 'file').length).toBeGreaterThanOrEqual(4);
    expect(pythonCodeExercises.filter((exercise) => exercise.kind === 'algorithm').length).toBeGreaterThanOrEqual(25);
  });

  it('keeps bilingual explanations and meaningful hidden tests', () => {
    const withJapanese = pythonCodeExercises.filter((exercise) => exercise.explanationJa.length > 20 && exercise.promptJa.length > 20);
    const withHidden = pythonCodeExercises.filter((exercise) => exercise.hiddenTests.length > 0);
    expect(withJapanese.length).toBe(pythonCodeExercises.length);
    expect(withHidden.length).toBeGreaterThanOrEqual(50);
  });

  it('exports V74R UX helpers for why-it-matters and real-world mapping', () => {
    expect(typeof PythonWhyThisMattersPanel).toBe('function');
    expect(typeof PythonRealWorldExerciseMap).toBe('function');
    expect(typeof PythonPracticeTabs).toBe('function');
  });
});
