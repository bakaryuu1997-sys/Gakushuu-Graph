import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { buildFundamentalInfoV102EasyLesson } from '../courses/fundamental-info/v102EasyLessonPack';
import { buildAiPassportV103EasyLesson } from '../courses/ai-passport/v103EasyLessonPack';
import { summarizeV102V103LessonQuality, enhanceCourseForV102V103 } from '../courses/v102v103LessonQuality';
import { fundamentalInfoCourse } from '../courses/fundamental-info';
import { aiPassportCourse } from '../courses/ai-passport';
import { V99LessonDetailPage } from '../features/knowledge-graph/components/V99LessonDetailPage';

const feNode = fundamentalInfoCourse.nodes.find((node) => node.id.includes('sql') || node.keywords.join(' ').toLowerCase().includes('sql')) ?? fundamentalInfoCourse.nodes[0];
const aiNode = aiPassportCourse.nodes.find((node) => node.id.includes('machine') || node.keywords.join(' ').toLowerCase().includes('learning')) ?? aiPassportCourse.nodes[0];

describe('V102/V103 easy deep lessons', () => {
  it('builds deep FE lessons with explanation, trace, practice and expected output', () => {
    const lesson = buildFundamentalInfoV102EasyLesson(feNode);
    expect(lesson.explainVi.join(' ').length).toBeGreaterThan(240);
    expect(lesson.traceVi.length).toBeGreaterThanOrEqual(5);
    expect(lesson.practiceVi).toMatch(/Viết|Tự|Cho|Tính/);
    expect(lesson.expectedOutput.length).toBeGreaterThan(50);
  });

  it('builds deep AI Passport lessons with case study, risk explanation and quiz', () => {
    const lesson = buildAiPassportV103EasyLesson(aiNode);
    expect(lesson.bigIdeaVi.length).toBeGreaterThan(120);
    expect(lesson.sampleBody).toContain('Data');
    expect(lesson.quizAnswerVi.length).toBeGreaterThan(40);
  });

  it('enhances AI Passport and 基本情報 course lessons, then renders them in lesson detail page', () => {
    const enhancedFe = enhanceCourseForV102V103(fundamentalInfoCourse);
    const enhancedAi = enhanceCourseForV102V103(aiPassportCourse);
    expect(summarizeV102V103LessonQuality(enhancedFe).allHaveEasyExplanation).toBe(true);
    expect(summarizeV102V103LessonQuality(enhancedAi).allHaveTrace).toBe(true);

    render(<V99LessonDetailPage courseId="fundamental-info" node={feNode} language="vi" />);
    expect(screen.getByText(/V102R 基本情報/i)).toBeTruthy();
    expect(screen.getByText(/Ý chính dễ hiểu/i)).toBeTruthy();
  });
});
