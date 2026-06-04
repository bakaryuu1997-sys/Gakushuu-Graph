import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { V116FinalStabilityPanel } from '../features/knowledge-graph/components/V116FinalStabilityPanel';
import { v116FinalStabilityItems, v116ReleaseChecklist } from '../courses/v116ReleaseStabilityQa';

describe('V116 final release stability QA', () => {
  it('renders a clear final stability dashboard without relying on overlays', () => {
    render(<V116FinalStabilityPanel />);
    expect(screen.getByText(/V116R Final Release Stability QA/i)).toBeTruthy();
    expect(screen.getByText(/Theme · layout · lesson content · no-timer/i)).toBeTruthy();
    expect(screen.getByText(/Before handoff checklist/i)).toBeTruthy();
  });

  it('covers the required final release areas', () => {
    const areas = new Set(v116FinalStabilityItems.map((item) => item.area));
    expect(areas).toEqual(new Set(['Theme', 'Layout', 'Content', 'Practice UX', 'Performance', 'Release']));
    expect(v116FinalStabilityItems.some((item) => item.title.includes('No countdown timer'))).toBe(true);
    expect(v116ReleaseChecklist.length).toBeGreaterThanOrEqual(7);
  });
});
