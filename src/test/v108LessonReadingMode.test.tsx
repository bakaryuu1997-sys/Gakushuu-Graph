import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { V99LessonDetailPage } from '../features/knowledge-graph/components/V99LessonDetailPage';
import { pythonCourse } from '../courses/python';

const node = pythonCourse.nodes[0];

describe('V108R lesson reading mode polish', () => {
  it('renders Focus, Full and Practice only reading modes without overlay layout', () => {
    render(<V99LessonDetailPage courseId="python" node={node} language="vi" />);
    expect(screen.getByText(/V108R Reading Mode/i)).toBeTruthy();
    expect(screen.getByRole('button', { name: /Focus/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /Full/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /Practice only/i })).toBeTruthy();
    expect(screen.getByText(/Không dùng overlay/i)).toBeTruthy();
  });

  it('switches to practice-only mode and shows the focused practice panel', () => {
    render(<V99LessonDetailPage courseId="python" node={node} language="vi" />);
    fireEvent.click(screen.getByRole('button', { name: /Practice only/i }));
    expect(screen.getByText(/Practice only mode/i)).toBeTruthy();
    expect(screen.getByText(/Luyện nhanh: bài tập/i)).toBeTruthy();
    expect(screen.getAllByText(/Lỗi hay gặp/i).length).toBeGreaterThan(0);
  });

  it('shows archive only in Full mode', () => {
    render(<V99LessonDetailPage courseId="python" node={node} language="vi" />);
    expect(screen.queryByText(/V99R archive/i)).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: /Full/i }));
    expect(screen.getByText(/V99R archive/i)).toBeTruthy();
  });
});
