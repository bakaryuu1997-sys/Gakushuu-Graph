import { describe, expect, it } from 'vitest';
import { pythonCatalog } from '../courses/python/catalog';
import { pythonV84RDeepPolishLessons } from '../courses/python/v84rLessonDeepPolish';
import { fundamentalInfoExamScenarios } from '../courses/fundamental-info/examScenarios';
import { fundamentalInfoV85RTraceBank } from '../courses/fundamental-info/v85rKamokuBTraceBank';

describe('V84R-V87R release candidate content', () => {
  it('adds deep Python polish lessons with practical examples and edge cases', () => {
    expect(pythonV84RDeepPolishLessons.length).toBeGreaterThanOrEqual(8);
    expect(pythonV84RDeepPolishLessons.map((item) => item.track)).toEqual(expect.arrayContaining(['oop', 'file', 'exception', 'testing', 'decorator', 'fastapi', 'algorithm']));
    expect(pythonV84RDeepPolishLessons.every((item) => item.practicalExample.includes('\n') && item.edgeCases.length >= 3)).toBe(true);
  });
  it('enriches the Python catalog with V84R concrete examples', () => {
    const oop = pythonCatalog.find((item) => item.id === 'python-oop');
    const fastapi = pythonCatalog.find((item) => item.id === 'python-fastapi');
    expect(oop?.keywords).toContain('V84R-oop');
    expect(fastapi?.keywords).toContain('V84R-fastapi');
    expect(fastapi?.examples.some((example) => example.includes('@app.get') || example.includes('BaseModel'))).toBe(true);
  });
  it('adds V85R FE trace scenarios into the main scenario bank', () => {
    expect(fundamentalInfoV85RTraceBank).toHaveLength(8);
    expect(fundamentalInfoV85RTraceBank.map((item) => item.id)).toEqual(expect.arrayContaining(['v85r-stack-parentheses-trace', 'v85r-queue-bfs-layer', 'v85r-security-log-timeline']));
    for (const scenario of fundamentalInfoV85RTraceBank) expect(fundamentalInfoExamScenarios.some((item) => item.id === scenario.id)).toBe(true);
  });
});
