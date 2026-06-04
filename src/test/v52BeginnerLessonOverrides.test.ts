import { describe, expect, it } from 'vitest';
import { aiPassportCourse } from '../courses/ai-passport';

const upgradedNodeIds = [
  'license-ai', 'ai-project-flow', 'ai-stakeholder', 'classification-ai', 'cnn-ai',
  'computer-vision-ai', 'customer-churn-ai', 'data-preprocessing-ai', 'education-ai',
  'few-shot-ai', 'finance-ai', 'human-in-the-loop', 'manufacturing-ai', 'marketing-ai',
  'medical-ai', 'ocr-ai', 'public-sector-ai', 'regression-ai', 'semantic-search-ai',
  'supervised-ai', 'underfitting-ai', 'unsupervised-ai', 'ai-audit-log',
  'ai-energy-consumption', 'ai-environmental-impact', 'cloud-gpu-ai', 'edge-device-ai',
  'gpu-ai', 'on-device-ai',
];

describe('V52 AI Passport beginner lesson upgrade', () => {
  it('keeps AI Passport at 172 complete lessons', () => {
    const nodeIds = new Set(aiPassportCourse.nodes.map((node) => node.id));
    const lessonIds = new Set(aiPassportCourse.lessons.map((lesson) => lesson.nodeId));
    expect(aiPassportCourse.nodes).toHaveLength(172);
    expect(aiPassportCourse.lessons).toHaveLength(172);
    expect([...nodeIds].filter((id) => !lessonIds.has(id))).toEqual([]);
  });

  it('turns all V51 weak lessons into detailed beginner lessons', () => {
    const lessonMap = new Map(aiPassportCourse.lessons.map((lesson) => [lesson.nodeId, lesson]));
    for (const nodeId of upgradedNodeIds) {
      const lesson = lessonMap.get(nodeId);
      expect(lesson, `${nodeId} should exist`).toBeDefined();
      if (!lesson) continue;
      const allText = [
        lesson.shortDefinitionVi,
        lesson.shortDefinitionJa,
        lesson.whyImportantVi,
        lesson.whyImportantJa,
        lesson.memoryTipVi,
        lesson.memoryTipJa,
        ...lesson.examPatternsVi,
        ...lesson.examPatternsJa,
        ...lesson.commonMistakesVi,
        ...lesson.commonMistakesJa,
      ].join(' ');
      expect(allText.length, `${nodeId} should be detailed`).toBeGreaterThan(900);
      expect(lesson.examPatternsVi.length, `${nodeId} should have Vietnamese exam patterns`).toBeGreaterThanOrEqual(3);
      expect(lesson.examPatternsJa.length, `${nodeId} should have Japanese exam patterns`).toBeGreaterThanOrEqual(3);
      expect(lesson.commonMistakesVi.length, `${nodeId} should have Vietnamese mistakes`).toBeGreaterThanOrEqual(3);
      expect(lesson.commonMistakesJa.length, `${nodeId} should have Japanese mistakes`).toBeGreaterThanOrEqual(3);
      expect(allText).not.toMatch(/Khái niệm AI Passport cần hiểu|Hãy học theo 4 phần|nội dung nháp|TODO/i);
    }
  });
});
