import { describe, expect, it } from 'vitest';
import { courses } from '../courses/courseRegistry';

describe('lesson coverage', () => {
  it('covers high-importance AI Passport nodes with lesson content', () => {
    const aiCourse = courses.find((course) => course.id === 'ai-passport');
    expect(aiCourse).toBeTruthy();
    if (!aiCourse) return;

    const lessonNodeIds = new Set(aiCourse.lessons.map((lesson) => lesson.nodeId));
    const highNodes = aiCourse.nodes.filter((node) => node.importance === 'high');
    const coveredHighNodes = highNodes.filter((node) => lessonNodeIds.has(node.id));

    expect(lessonNodeIds.size).toBeGreaterThanOrEqual(150);
    expect(coveredHighNodes.length).toBeGreaterThanOrEqual(Math.min(120, highNodes.length));
  });

  it('has complete manual lesson fields', () => {
    courses.forEach((course) => {
      course.lessons.forEach((lesson) => {
        expect(lesson.shortDefinitionVi.trim().length).toBeGreaterThan(10);
        expect(lesson.whyImportantVi.trim().length).toBeGreaterThan(10);
        expect(lesson.examPatternsVi.length).toBeGreaterThanOrEqual(2);
        expect(lesson.commonMistakesVi.length).toBeGreaterThanOrEqual(1);
        expect(lesson.memoryTipVi.trim().length).toBeGreaterThan(5);
      });
    });
  });
});
