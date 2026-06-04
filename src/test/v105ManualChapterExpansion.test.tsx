import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { v105ManualChapters, findV105ManualChapter } from '../courses/v105ManualChapterPack';
import { V99LessonDetailPage } from '../features/knowledge-graph/components/V99LessonDetailPage';
import type { KnowledgeNodeData } from '../features/knowledge-graph/types';

const node = (id: string, labelVi: string, keywords: string[] = []): KnowledgeNodeData => ({
  id,
  labelJa: labelVi,
  labelEn: labelVi,
  labelVi,
  category: 'software',
  level: 'topic',
  importance: 'high',
  reading: '',
  examples: [],
  keywords,
  prerequisites: [],
  related: [],
  summaryJa: labelVi,
  summaryVi: labelVi,
  examPointJa: labelVi,
  examPointVi: labelVi,
});

describe('V105R manual chapter expansion', () => {
  it('adds long hand-written chapters for the requested priority groups', () => {
    const groups = new Set(v105ManualChapters.map((chapter) => chapter.group));
    expect(groups.has('python-foundation')).toBe(true);
    expect(groups.has('python-oop')).toBe(true);
    expect(groups.has('python-algorithm')).toBe(true);
    expect(groups.has('fe-kamoku-b')).toBe(true);
    expect(groups.has('ai-case-study')).toBe(true);

    for (const chapter of v105ManualChapters) {
      expect(chapter.conceptVi.join(' ').length).toBeGreaterThan(300);
      expect(chapter.walkthroughVi.length).toBeGreaterThanOrEqual(5);
      expect(chapter.mistakesVi.length).toBeGreaterThanOrEqual(3);
      expect(chapter.studyChecklistVi.length).toBeGreaterThanOrEqual(4);
    }
  });

  it('maps representative nodes to the right manual chapters', () => {
    expect(findV105ManualChapter('python', node('python-class', 'Class và OOP', ['oop']))?.group).toBe('python-oop');
    expect(findV105ManualChapter('python', node('bfs', 'BFS queue graph', ['queue', 'algorithm']))?.group).toBe('python-algorithm');
    expect(findV105ManualChapter('fundamental-info', node('stack', 'Stack queue 科目B', ['stack']))?.group).toBe('fe-kamoku-b');
    expect(findV105ManualChapter('ai-passport', node('rag', 'GenAI RAG prompt', ['rag']))?.group).toBe('ai-case-study');
  });

  it('renders the V105 chapter inside lesson detail page', () => {
    render(<V99LessonDetailPage courseId="python" node={node('python-class', 'Class và OOP', ['oop'])} language="vi" />);
    expect(screen.getByText(/V105R Manual Chapter/i)).toBeTruthy();
    expect(screen.getByText(/Python OOP: class không phải cú pháp khó/i)).toBeTruthy();
    expect(screen.getByText(/Vì sao bài này quan trọng/i)).toBeTruthy();
    expect(screen.getByText(/Trace \/ walkthrough từng bước/i)).toBeTruthy();
  });
});
