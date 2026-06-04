import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { courses } from '../courses/courseRegistry';
import { buildV104WrittenLesson, summarizeV104WrittenQuality } from '../courses/v104WrittenLessonPack';
import { V99LessonDetailPage } from '../features/knowledge-graph/components/V99LessonDetailPage';

const courseIds = ['python', 'fundamental-info', 'ai-passport', 'sql', 'frontend', 'linux', 'brse', 'it-passport'] as const;
const forbidden = ['Đọc đoạn code có', 'Người mới cần học', 'trace code có giải thích', 'nội dung nháp'];

describe('V104 written lessons', () => {
  it('builds deep lesson content for every course family', () => {
    for (const id of courseIds) {
      const course = courses.find((item) => item.id === id)!;
      const sample = buildV104WrittenLesson(course.id, course.nodes[0]);
      expect(sample.explainVi.join(' ').length).toBeGreaterThan(260);
      expect(sample.traceVi.length).toBeGreaterThanOrEqual(5);
      expect(sample.practiceVi.length).toBeGreaterThan(50);
      expect(sample.expectedOutputVi.length).toBeGreaterThan(40);
    }
  });

  it('enhances all loaded lessons away from generic nội dung nháp text', () => {
    for (const id of courseIds) {
      const course = courses.find((item) => item.id === id)!;
      const summary = summarizeV104WrittenQuality(course);
      expect(summary.total).toBe(course.nodes.length);
      expect(summary.allHaveLongExplanation).toBe(true);
      expect(summary.allHaveTrace).toBe(true);
      expect(summary.allHavePracticeAndQuiz).toBe(true);
      expect(summary.legacyHits).toBe(0);
      const joinedLessons = course.lessons.map((lesson) => [lesson.shortDefinitionVi, lesson.whyImportantVi, lesson.examPatternsVi.join(' '), lesson.commonMistakesVi.join(' ')].join(' ')).join('\n');
      for (const token of forbidden) expect(joinedLessons).not.toContain(token);
    }
  });

  it('renders the V104 main lesson before older archive content', () => {
    const course = courses.find((item) => item.id === 'python')!;
    render(<V99LessonDetailPage courseId="python" node={course.nodes[0]} language="vi" />);
    expect(screen.getByText(/V104R/i)).toBeTruthy();
    expect(screen.getByText(/Giải thích dễ hiểu/i)).toBeTruthy();
    expect(screen.getAllByText(/Bài tập tự làm/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/main lesson/i)).toBeTruthy();
  });
});
