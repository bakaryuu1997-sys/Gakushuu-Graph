import { describe, expect, it } from 'vitest';
import { aiPassportCourse } from '../courses/ai-passport';
import { aiPassportGlossary } from '../courses/ai-passport/aiPassportGlossary';

describe('AI Passport content audit', () => {
  it('has enough high-quality study content', () => {
    const nodeIds = new Set(aiPassportCourse.nodes.map((node) => node.id));
    const highNodes = aiPassportCourse.nodes.filter((node) => node.importance === 'high');
    const lessonNodeIds = new Set(aiPassportCourse.lessons.map((lesson) => lesson.nodeId));
    const highMissingLesson = highNodes.filter((node) => !lessonNodeIds.has(node.id));

    expect(aiPassportCourse.nodes.length).toBeGreaterThanOrEqual(120);
    expect(aiPassportCourse.quizzes.length).toBeGreaterThan(250);
    expect(aiPassportGlossary.length).toBeGreaterThan(80);
    expect(highMissingLesson.length).toBeLessThanOrEqual(5);
    expect(aiPassportCourse.studyPath.length).toBeGreaterThanOrEqual(8);
    expect(aiPassportCourse.edges.every((edge) => nodeIds.has(edge.source) && nodeIds.has(edge.target))).toBe(true);
  });

  it('has valid explanations and answer keys for all quizzes', () => {
    const invalid = aiPassportCourse.quizzes.filter((quiz) => quiz.answerIndex < 0 || quiz.answerIndex >= quiz.options.length || !quiz.explanationVi);
    expect(invalid).toEqual([]);
  });
});
