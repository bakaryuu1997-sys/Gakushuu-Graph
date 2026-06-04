import { describe, expect, it } from 'vitest';
import { pythonCodeExercises } from '../courses/python/codeExercises';
import { PythonPracticeTabs } from '../features/knowledge-graph/components/PythonPracticeTabs';
import { PythonTodayPlan } from '../features/knowledge-graph/components/PythonTodayPlan';
import { PythonFinalReadinessDashboard } from '../features/knowledge-graph/components/PythonFinalReadinessDashboard';
import { PythonRuntimeStatusCard } from '../features/knowledge-graph/components/PythonRuntimeStatusCard';
import { getNextRecommendedExercise } from '../features/knowledge-graph/components/pythonReviewQueueRunner';

describe('V73R Python final UX tabs and today plan', () => {
  it('keeps Python practice broad and code-focused', () => {
    expect(pythonCodeExercises.length).toBeGreaterThanOrEqual(36);
    expect(pythonCodeExercises.some((item) => item.kind === 'backend')).toBe(true);
    expect(pythonCodeExercises.some((item) => item.level === 'hard')).toBe(true);
  });

  it('has next recommendation for today plan', () => {
    const next = getNextRecommendedExercise([]).exercise;
    expect(next.id).toBeTruthy();
    expect(next.starterCode).toContain('def');
  });

  it('exports the V73R UX components', () => {
    expect(typeof PythonPracticeTabs).toBe('function');
    expect(typeof PythonTodayPlan).toBe('function');
    expect(typeof PythonFinalReadinessDashboard).toBe('function');
    expect(typeof PythonRuntimeStatusCard).toBe('function');
  });
});
