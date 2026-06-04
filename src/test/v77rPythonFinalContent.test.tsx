import { describe, expect, it } from 'vitest';
import { pythonLessons } from '../courses/python/lessons';
import { pythonCatalog } from '../courses/python/catalog';
import { CourseCompletionDashboard } from '../features/knowledge-graph/components/CourseCompletionDashboard';
import { ReleaseNotesV77R } from '../features/knowledge-graph/components/ReleaseNotesV77R';

describe('V77R Python final content QA and release dashboard', () => {
  it('keeps full Python lesson coverage with richer QA text', () => {
    expect(pythonLessons).toHaveLength(pythonCatalog.length);
    expect(pythonLessons.length).toBeGreaterThanOrEqual(100);
    for (const lesson of pythonLessons) {
      expect(lesson.shortDefinitionVi.length).toBeGreaterThan(110);
      expect(lesson.whyImportantVi.length).toBeGreaterThan(220);
      expect(lesson.examPatternsVi.length).toBeGreaterThanOrEqual(5);
      expect(lesson.commonMistakesVi.length).toBeGreaterThanOrEqual(5);
      expect(`${lesson.whyImportantVi} ${lesson.memoryTipVi}`).toMatch(/test|code|trace|biên|edge/i);
    }
  });

  it('exports V77R release notes and course completion dashboard components', () => {
    expect(typeof ReleaseNotesV77R).toBe('function');
    expect(typeof CourseCompletionDashboard).toBe('function');
  });
});
