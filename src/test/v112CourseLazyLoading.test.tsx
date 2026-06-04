import { describe, expect, it } from 'vitest';
import { courseSummaries, loadCourseById } from '../courses/courseLoader';

describe('V112R course data lazy loading', () => {
  it('keeps course summaries lightweight while loading full courses on demand', async () => {
    expect(courseSummaries.length).toBeGreaterThanOrEqual(8);
    expect(courseSummaries.map((course) => course.id)).toContain('python');

    const python = await loadCourseById('python');
    expect(python.id).toBe('python');
    expect(python.nodes.length).toBeGreaterThan(50);
    expect(python.lessons.length).toBeGreaterThan(50);
  });

  it('loads different course modules without requiring the full registry path', async () => {
    const ai = await loadCourseById('ai-passport');
    const fe = await loadCourseById('fundamental-info');

    expect(ai.id).toBe('ai-passport');
    expect(fe.id).toBe('fundamental-info');
    expect(ai.nodes.length).toBeGreaterThan(20);
    expect(fe.nodes.length).toBeGreaterThan(20);
  });
});
