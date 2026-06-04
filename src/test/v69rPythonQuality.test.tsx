import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { pythonAlgorithmVisualPatterns } from '../courses/python/algorithmVisualPatterns';
import { pythonCodeExercises } from '../courses/python/codeExercises';
import { PythonPracticeSuite } from '../features/knowledge-graph/components/PythonPracticeSuite';

describe('V69R Python quality recovery', () => {
  it('expands code exercises with diverse kinds and hidden tests', () => {
    expect(pythonCodeExercises.length).toBeGreaterThanOrEqual(35);
    expect(pythonCodeExercises.filter((item) => item.kind === 'algorithm').length).toBeGreaterThanOrEqual(15);
    expect(pythonCodeExercises.filter((item) => item.kind === 'backend').length).toBeGreaterThanOrEqual(4);
    expect(pythonCodeExercises.every((item) => item.explanationVi && item.explanationJa)).toBe(true);
    expect(pythonCodeExercises.filter((item) => item.hiddenTests.length > 0).length).toBeGreaterThanOrEqual(30);
  });

  it('adds visual algorithm patterns with VI/JA explanations', () => {
    expect(pythonAlgorithmVisualPatterns.length).toBeGreaterThanOrEqual(6);
    expect(pythonAlgorithmVisualPatterns.some((item) => item.id.includes('binary'))).toBe(true);
    expect(pythonAlgorithmVisualPatterns.every((item) => item.goalVi && item.goalJa && item.steps.length >= 3)).toBe(true);
  });

  it('renders practice suite with progress, visual trainer, mistake review, and code lab', () => {
    render(<PythonPracticeSuite />);
    expect(screen.getByText(/V69R Python Practice/i)).toBeTruthy();
    expect(screen.getByText(/Python readiness local/i)).toBeTruthy();
    expect(screen.getByText(/Algorithm Visual Trainer/i)).toBeTruthy();
    expect(screen.getByText(/Mistake Review/i)).toBeTruthy();
    expect(screen.getAllByText(/Code trực tiếp/i).length).toBeGreaterThan(0);
  });
});
