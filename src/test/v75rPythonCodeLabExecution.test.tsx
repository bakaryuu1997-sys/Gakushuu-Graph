import { describe, expect, it } from 'vitest';
import { pythonCodeExercises } from '../courses/python/codeExercises';
import { PythonCodeLabOutputPanel } from '../features/knowledge-graph/components/PythonCodeLabOutputPanel';
import { PythonExerciseSetNavigator } from '../features/knowledge-graph/components/PythonExerciseSetNavigator';
import { PythonExerciseQualityPanel } from '../features/knowledge-graph/components/PythonExerciseQualityPanel';
import { pythonExerciseSets, summarizePythonExerciseQuality } from '../features/knowledge-graph/components/pythonExerciseQuality';

describe('V75R Python Code Lab execution polish and exercise QA', () => {
  it('keeps a broad Python practice bank with hidden tests', () => {
    expect(pythonCodeExercises.length).toBeGreaterThanOrEqual(60);
    expect(pythonCodeExercises.filter((exercise) => exercise.hiddenTests.length > 0).length).toBeGreaterThanOrEqual(50);
  });

  it('provides learning sets and quality summary', () => {
    expect(pythonExerciseSets.map((set) => set.id)).toEqual(['beginner', 'data', 'algorithm', 'fastapi', 'project-prep']);
    const quality = summarizePythonExerciseQuality();
    expect(quality.total).toBe(pythonCodeExercises.length);
    expect(quality.passing).toBeGreaterThanOrEqual(55);
  });

  it('exports V75R UI helpers for output, sets and QA', () => {
    expect(typeof PythonCodeLabOutputPanel).toBe('function');
    expect(typeof PythonExerciseSetNavigator).toBe('function');
    expect(typeof PythonExerciseQualityPanel).toBe('function');
  });
});
