import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PythonV100RDeepChapterPanel } from '../features/knowledge-graph/components/PythonV100RDeepChapterPanel';
import { pythonCourse } from '../courses/python';
import { findPythonV100DeepChapterForNode, getPythonV100CoverageSummary, pythonV100DeepChapters } from '../courses/python/v100rDeepChapterPack';

describe('V100R Python deep chapter pack', () => {
  it('covers every Python node with a deep chapter fallback', () => {
    const summary = getPythonV100CoverageSummary(pythonCourse.nodes);
    expect(summary.totalNodes).toBeGreaterThan(100);
    expect(summary.coveredNodes).toBe(summary.totalNodes);
    expect(summary.chapterCount).toBeGreaterThanOrEqual(8);
  });

  it('maps important Python nodes to specific non-generic chapters', () => {
    const nodeIds = ['python-number', 'python-dict', 'python-class', 'bfs', 'fastapi-dependency', 'mini-csv-analyzer'];
    const mapped = nodeIds.map((id) => findPythonV100DeepChapterForNode(pythonCourse.nodes.find((node) => node.id === id)!).id);
    expect(mapped).toContain('v100-foundation-values');
    expect(mapped).toContain('v100-collections');
    expect(mapped).toContain('v100-oop-state');
    expect(mapped).toContain('v100-stack-queue-recursion-dp');
    expect(mapped).toContain('v100-fastapi-service');
    expect(mapped).toContain('v100-project-portfolio');
  });

  it('renders chapter UI with concept, trace, exercise and expected output', () => {
    render(<PythonV100RDeepChapterPanel />);
    expect(screen.getByText(/V100R Python Deep Chapter Pack/i)).toBeTruthy();
    expect(screen.getAllByText(/Khi nào dùng/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Mental model/i).length).toBeGreaterThan(0);
    expect(pythonV100DeepChapters.every((chapter) => chapter.conceptVi && chapter.traceVi.length >= 5 && chapter.expectedOutput)).toBe(true);
  });
});
