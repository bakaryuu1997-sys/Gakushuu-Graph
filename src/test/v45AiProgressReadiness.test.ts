import { describe, expect, it } from 'vitest';
import { aiPassportCourse } from '../courses/ai-passport';
import { nextStatus } from '../features/knowledge-graph/utils/localStorage';

describe('V45 AI progress readiness', () => {
  it('keeps all high-importance AI Passport nodes covered by lessons', () => {
    const lessonIds = new Set(aiPassportCourse.lessons.map((lesson) => lesson.nodeId));
    const missing = aiPassportCourse.nodes.filter((node) => node.importance === 'high' && !lessonIds.has(node.id));
    expect(missing).toEqual([]);
  });

  it('keeps the full explicit status cycle', () => {
    expect(nextStatus('new')).toBe('learning');
    expect(nextStatus('learning')).toBe('need_review');
    expect(nextStatus('need_review')).toBe('mastered');
    expect(nextStatus('mastered')).toBe('new');
  });

  it('has enough content to compute readiness groups', () => {
    const textOf = (id: string) => aiPassportCourse.nodes.find((node) => node.id === id);
    expect(textOf('generative-ai')).toBeTruthy();
    expect(textOf('ai-governance')).toBeTruthy();
    expect(textOf('machine-learning-ai')).toBeTruthy();
    expect(textOf('roi-ai')).toBeTruthy();
  });
});
