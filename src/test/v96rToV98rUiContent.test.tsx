import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { courses } from '../courses/courseRegistry';
import { GlobalQuickSearchPanel } from '../features/knowledge-graph/components/GlobalQuickSearchPanel';

describe('V96R-V98R dashboard/search/content improvements', () => {
  it('guarantees every course node has an enriched lesson', () => {
    for (const course of courses) {
      expect(course.lessons.length).toBe(course.nodes.length);
      for (const node of course.nodes) {
        const lesson = course.lessons.find((item) => item.nodeId === node.id);
        expect(lesson, `${course.id}:${node.id}`).toBeTruthy();
        expect(lesson?.shortDefinitionVi).toContain('V98R');
        expect(lesson?.examPatternsVi.join(' ')).toContain('Expected output');
        expect(node.examPointVi.length).toBeGreaterThan(30);
      }
    }
  });

  it('renders polished global search with scope filters and compact labels', () => {
    const python = courses.find((course) => course.id === 'python')!;
    render(<GlobalQuickSearchPanel nodes={python.nodes} lessons={python.lessons} quizzes={python.quizzes} courseTitle={python.title} onSelectNode={() => undefined} />);
    expect(screen.getByText(/V97R Global Search UX/i)).toBeTruthy();
    expect(screen.getAllByText('current').length).toBeGreaterThan(0);
    expect(screen.getByText('python')).toBeTruthy();
    expect(screen.getByText('基本情報')).toBeTruthy();
    expect(screen.getAllByText(/Lesson/i).length).toBeGreaterThan(0);
  });

  it('keeps Python and 基本情報 content practical after enrichment', () => {
    const python = courses.find((course) => course.id === 'python')!;
    const fe = courses.find((course) => course.id === 'fundamental-info')!;
    expect(python.lessons.some((lesson) => lesson.whyImportantVi.includes('test') || lesson.whyImportantVi.includes('Trace'))).toBe(true);
    expect(fe.lessons.some((lesson) => lesson.whyImportantVi.includes('Trace') || lesson.whyImportantVi.includes('pseudo-code'))).toBe(true);
  });
});
