import { describe, expect, it } from 'vitest';
import { pythonCodeExercises } from '../courses/python/codeExercises';
import { pythonV80RGradedExercises, pythonV80RGradingRubrics } from '../courses/python/v80rCodeLabGrader';

describe('V80R Python graded code lab', () => {
  it('adds focused graded exercises with explicit hidden tests', () => {
    expect(pythonV80RGradedExercises).toHaveLength(5);
    expect(pythonV80RGradedExercises.every((item) => item.visibleTests.length >= 1 && item.hiddenTests.length >= 2)).toBe(true);
    expect(pythonV80RGradedExercises.map((item) => item.kind)).toEqual(expect.arrayContaining(['oop', 'data', 'algorithm', 'file', 'backend']));
  });
  it('merges V80R exercises into main Code Lab catalog', () => {
    for (const exercise of pythonV80RGradedExercises) expect(pythonCodeExercises.some((item) => item.id === exercise.id)).toBe(true);
  });
  it('keeps expected output rubric for every exercise', () => {
    expect(pythonV80RGradingRubrics).toHaveLength(pythonV80RGradedExercises.length);
    expect(pythonV80RGradingRubrics.every((rubric) => rubric.expectedOutputs.length >= 2)).toBe(true);
  });
});
