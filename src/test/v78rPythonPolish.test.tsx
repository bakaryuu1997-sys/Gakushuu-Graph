import { describe, expect, it } from 'vitest';
import { pythonCodeExercises } from '../courses/python/codeExercises';
import { pythonLessons } from '../courses/python/lessons';
import { pythonV78RCodeExercises } from '../courses/python/v78rCodeExercises';
import { pythonV78RDeepExamples } from '../courses/python/v78rDeepExamples';
import { pythonV78RFastApiBlueprints } from '../courses/python/v78rFastApiBlueprints';
import { PythonV78RDeepExamplesPanel } from '../features/knowledge-graph/components/PythonV78RDeepExamplesPanel';
import { PythonV78RFastApiBlueprintPanel } from '../features/knowledge-graph/components/PythonV78RFastApiBlueprintPanel';

describe('V78R Python polish: deeper examples, FastAPI blueprints, and exam-like code practice', () => {
  it('adds V78R deep examples for OOP, stack/queue, DP, graph, FastAPI and project work', () => {
    expect(pythonV78RDeepExamples.length).toBeGreaterThanOrEqual(6);
    expect(pythonV78RDeepExamples.some((item) => item.kind === 'fastapi')).toBe(true);
    expect(pythonV78RDeepExamples.some((item) => item.nodeId === 'python-dp')).toBe(true);
    expect(pythonV78RDeepExamples.every((item) => item.code.length > 120 && item.traceVi.length >= 3 && item.tests.length >= 3)).toBe(true);
  });

  it('extends the code lab with V78R exercises for trace-heavy topics', () => {
    expect(pythonV78RCodeExercises.length).toBeGreaterThanOrEqual(4);
    expect(pythonCodeExercises.some((item) => item.id === 'v78r-ex-bfs-distance')).toBe(true);
    expect(pythonCodeExercises.some((item) => item.id === 'v78r-ex-fastapi-grade-design')).toBe(true);
  });

  it('documents FastAPI local-only request/response and validation plans', () => {
    expect(pythonV78RFastApiBlueprints.length).toBeGreaterThanOrEqual(4);
    expect(pythonV78RFastApiBlueprints.every((item) => item.validationChecks.length >= 3 && item.testPlan.length >= 2)).toBe(true);
  });

  it('injects V78R practical trace guidance into lessons', () => {
    const joined = pythonLessons.map((lesson) => `${lesson.whyImportantVi} ${lesson.memoryTipVi}`).join('\n');
    expect(joined).toMatch(/V78R thực chiến|Công thức V78R/);
    expect(joined).toMatch(/FastAPI|Stack|BFS|DP|Portfolio/);
  });

  it('exports V78R UI panels', () => {
    expect(typeof PythonV78RDeepExamplesPanel).toBe('function');
    expect(typeof PythonV78RFastApiBlueprintPanel).toBe('function');
  });
});
