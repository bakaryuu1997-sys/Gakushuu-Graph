import { describe, expect, it } from 'vitest';
import { pythonCodeExercises } from '../courses/python/codeExercises';
import { selectInterviewExercises, summarizeInterviewHistory } from '../features/knowledge-graph/components/pythonInterviewMode';
import { buildPythonReviewQueue, getNextRecommendedExercise } from '../features/knowledge-graph/components/pythonReviewQueueRunner';
import type { PythonExerciseRunRecord } from '../features/knowledge-graph/components/pythonCodeProgress';

describe('V72R Python interview and review queue', () => {
  it('builds interview sets for easy standard and hard levels', () => {
    expect(selectInterviewExercises('easy', [], 10)).toHaveLength(10);
    expect(selectInterviewExercises('standard', [], 10)).toHaveLength(10);
    const hard = selectInterviewExercises('hard', [], 10);
    expect(hard).toHaveLength(10);
    expect(hard.some((item) => item.level === 'hard')).toBe(true);
  });

  it('prioritizes failed exercises in the review queue', () => {
    const failed = pythonCodeExercises.find((item) => item.level === 'hard') ?? pythonCodeExercises[0];
    const records: PythonExerciseRunRecord[] = [{
      exerciseId: failed.id,
      title: failed.title,
      kind: failed.kind,
      level: failed.level,
      status: 'failed',
      passed: 1,
      total: 3,
      mistakeTags: failed.mistakeTags,
      updatedAt: new Date().toISOString(),
    }];
    const queue = buildPythonReviewQueue(records);
    expect(queue[0].id).toBe(failed.id);
    expect(queue[0].reasonVi).toContain('fail');
  });

  it('returns next recommended exercise and summarizes interview history', () => {
    expect(getNextRecommendedExercise([]).exercise.id).toBeTruthy();
    const summary = summarizeInterviewHistory([
      { level: 'easy', score: 50, solved: 5, total: 10, exerciseIds: [], updatedAt: 'a' },
      { level: 'hard', score: 80, solved: 8, total: 10, exerciseIds: [], updatedAt: 'b' },
    ]);
    expect(summary.best).toBe(80);
    expect(summary.average).toBe(65);
  });
});
