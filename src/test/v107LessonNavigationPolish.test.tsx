import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { V99LessonDetailPage } from '../features/knowledge-graph/components/V99LessonDetailPage';
import type { KnowledgeNodeData } from '../features/knowledge-graph/types';

function node(id: string, label: string, keywords: string[]): KnowledgeNodeData {
  return {
    id,
    labelJa: label,
    labelVi: label,
    labelEn: label,
    category: 'technology',
    importance: 'high',
    keywords,
    description: label,
    examPoint: label,
  } as unknown as KnowledgeNodeData;
}

describe('V107 lesson navigation polish', () => {
  it('renders a normal-flow lesson table of contents with core anchors', () => {
    render(<V99LessonDetailPage courseId="python" node={node('fastapi-dependency', 'FastAPI dependency injection', ['fastapi', 'dependency'])} language="vi" />);

    expect(screen.getByLabelText('V107 lesson section navigation')).toBeTruthy();
    expect(screen.getByText(/Mục lục bài học/i)).toBeTruthy();
    expect(screen.getByText(/no overlay · normal flow/i)).toBeTruthy();
    expect(screen.getByRole('link', { name: /Giải thích/i }).getAttribute('href')).toBe('#v106-explain');
    expect(screen.getByRole('link', { name: /Code/i }).getAttribute('href')).toBe('#v106-code');
    expect(screen.getByRole('link', { name: /Trace/i }).getAttribute('href')).toBe('#v106-trace');
    expect(screen.getByRole('link', { name: /Bài tập/i }).getAttribute('href')).toBe('#v106-practice');
    expect(screen.getByRole('link', { name: /Quiz/i }).getAttribute('href')).toBe('#v106-quiz');
    expect(screen.getByRole('link', { name: /Lỗi hay gặp/i }).getAttribute('href')).toBe('#v106-mistakes');
  });

  it('keeps V104 fallback anchors when no V106 chapter exists', () => {
    render(<V99LessonDetailPage courseId="frontend" node={node('css-box-model', 'CSS box model', ['css'])} language="vi" />);
    expect(screen.getByRole('link', { name: /Giải thích/i }).getAttribute('href')).toBe('#v104-explain');
    expect(screen.getByRole('link', { name: /Code/i }).getAttribute('href')).toBe('#v104-code');
  });
});
