import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { LocalReleasePanel } from '../features/knowledge-graph/components/LocalReleasePanel';
import { VisualQaPanel } from '../features/knowledge-graph/components/VisualQaPanel';

afterEach(() => cleanup());

describe('V56 local release candidate', () => {
  it('renders local-only backup/import/reset actions', () => {
    const onExportProgress = vi.fn();
    const onImportProgress = vi.fn(async () => undefined);
    const onResetProgress = vi.fn();
    const { container } = render(
      <LocalReleasePanel
        courseTitle="AI Passport"
        stats={{ total: 172, mastered: 86, learning: 0, needReview: 3, fresh: 83, favorites: 0 }}
        onExportProgress={onExportProgress}
        onImportProgress={onImportProgress}
        onResetProgress={onResetProgress}
      />,
    );
    const view = within(container);
    expect(view.getAllByText(/V56 Local Release Candidate/i).length).toBeGreaterThan(0);
    expect(view.getAllByText(/không cần login, backend hoặc đồng bộ cloud/i).length).toBeGreaterThan(0);
    fireEvent.click(view.getByRole('button', { name: /Export progress/i }));
    expect(onExportProgress).toHaveBeenCalledTimes(1);
    fireEvent.click(view.getByRole('button', { name: /Reset local progress/i }));
    expect(onResetProgress).toHaveBeenCalledTimes(1);
  });

  it('updates the visual QA panel for V56 local release checks', () => {
    render(<VisualQaPanel />);
    expect(screen.getByText(/V56 Visual QA/i)).toBeTruthy();
    expect(screen.getByText(/Local-only release/i)).toBeTruthy();
    expect(screen.getByText(/không cần backend hoặc tài khoản/i)).toBeTruthy();
  });
});
