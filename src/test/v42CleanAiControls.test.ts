import { describe, expect, it } from 'vitest';
import { aiPassportCourse } from '../courses/ai-passport';
import { brseCourse } from '../courses/brse';
import { frontendCourse } from '../courses/frontend';

describe('V42 clean AI controls and course separation', () => {
  it('keeps AI Passport lessons and quizzes bound to AI Passport nodes only', () => {
    const ids = new Set(aiPassportCourse.nodes.map((node) => node.id));
    expect(aiPassportCourse.lessons.every((lesson) => ids.has(lesson.nodeId))).toBe(true);
    expect(aiPassportCourse.quizzes.every((quiz) => ids.has(quiz.nodeId))).toBe(true);
    expect(aiPassportCourse.comparePairs.every((pair) => ids.has(pair.leftNodeId) && ids.has(pair.rightNodeId))).toBe(true);
  });

  it('keeps BrSE and Frontend specific nodes outside AI Passport', () => {
    const aiIds = new Set(aiPassportCourse.nodes.map((node) => node.id));
    expect(aiIds.has('requirement-definition')).toBe(false);
    expect(aiIds.has('semantic-html')).toBe(false);
    expect(brseCourse.nodes.some((node) => node.id === 'requirement-definition')).toBe(true);
    expect(frontendCourse.nodes.some((node) => node.id === 'semantic-html')).toBe(true);
  });
});
