import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { V99LessonDetailPage } from '../features/knowledge-graph/components/V99LessonDetailPage';
import { pythonCourse } from '../courses/python';
import { loadV113LessonData } from '../courses/v113LessonDataLoader';

describe('V113 manual chapter data split', () => {
  const node = pythonCourse.nodes.find((item) => item.id.includes('fastapi')) ?? pythonCourse.nodes[0];

  it('loads V104/V110 lesson data through the V113 async loader', async () => {
    const bundle = await loadV113LessonData('python', node);
    expect(bundle.v104Lesson.titleVi.length).toBeGreaterThan(20);
    expect(bundle.pythonEasyLesson?.titleVi.length).toBeGreaterThan(20);
  });

  it('shows a normal-flow lazy loading card before deep lesson data resolves', async () => {
    render(<V99LessonDetailPage courseId="python" node={node} language="vi" />);
    expect(screen.getByText(/Đang tải nội dung lesson viết tay/i)).toBeTruthy();
    await waitFor(() => expect(screen.getAllByText(/V104R|V110R|V101R/i).length).toBeGreaterThan(0));
  });
});
