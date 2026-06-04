import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { buildPythonV101EasyLesson, summarizePythonV101Coverage } from '../courses/python/v101EasyLessonPack';
import { pythonCourse } from '../courses/python';
import { courses } from '../courses/courseRegistry';
import { V99LessonDetailPage } from '../features/knowledge-graph/components/V99LessonDetailPage';

describe('V101R Python easy deep lessons', () => {
  it('builds easy explanations with code, trace, practice, expected output for every Python node', () => {
    const summary = summarizePythonV101Coverage(pythonCourse.nodes);
    expect(summary.total).toBeGreaterThan(100);
    expect(summary.allHaveEasyLesson).toBe(true);
    expect(summary.tooShort).toEqual([]);
  });

  it('removes generic lesson text from the enhanced Python course used by the app', () => {
    const enhanced = courses.find((course) => course.id === 'python');
    expect(enhanced).toBeTruthy();
    const joined = enhanced!.lessons.map((lesson) => `${lesson.shortDefinitionVi}\n${lesson.whyImportantVi}\n${lesson.examPatternsVi.join('\n')}`).join('\n');
    expect(joined).toContain('Giải thích dễ hiểu');
    expect(joined).toContain('Ví dụ code');
    expect(joined).toContain('Expected output');
    expect(joined).not.toContain('Đọc đoạn code có Number và dự đoán output');
    expect(joined).not.toContain('Người mới cần học Number bằng cách viết ví dụ ngắn');
  });

  it('renders the V101 lesson reader first with beginner-friendly blocks', () => {
    const node = pythonCourse.nodes.find((item) => item.id === 'python-number')!;
    const lesson = buildPythonV101EasyLesson(node);
    expect(lesson.titleVi).toContain('Number trong Python');
    render(<V99LessonDetailPage courseId="python" node={node} language="vi" />);
    expect(screen.getByText(/V101R Bài học dễ hiểu/i)).toBeTruthy();
    expect(screen.getByText(/Ý chính nói bằng ngôn ngữ dễ hiểu/i)).toBeTruthy();
    expect(screen.getByText(/Giải thích từng ý/i)).toBeTruthy();
    expect(screen.getByText(/Code mẫu thật để đọc/i)).toBeTruthy();
    expect(screen.getByText(/Trace từng dòng/i)).toBeTruthy();
  });
});
