import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { aiPassportCourse } from '../courses/ai-passport';
import { courseSummaries } from '../courses/courseLoader';
import { StudyNavigation } from '../features/knowledge-graph/components/StudyNavigation';
import { isBeginnerStudyView } from '../features/knowledge-graph/components/studyUxMode';
import { VisualQaPanel } from '../features/knowledge-graph/components/VisualQaPanel';

const stats = { total: 172, mastered: 0, learning: 0, needReview: 0, fresh: 172, favorites: 0 };
const filters = { query: '', mode: 'overview' as const, categories: [], importance: 'all' as const };
const noop = vi.fn();

afterEach(() => cleanup());

const renderNavigation = (uxMode: 'beginner' | 'advanced' = 'beginner') => render(
  <StudyNavigation
    course={aiPassportCourse}
    courses={courseSummaries}
    selectedCourseId="ai-passport"
    activeView="start"
    uxMode={uxMode}
    progress={0}
    totalVisible={172}
    language="vi"
    filters={filters}
    stats={stats}
    onCourse={noop}
    onView={noop}
    onUxMode={noop}
    onQuery={noop}
    onMode={noop}
    onImportance={noop}
    onToggleCategory={noop}
    onLanguage={noop}
    onReset={noop}
    onExportProgress={noop}
    onImportProgress={noop}
    onExportGraph={noop}
  />,
);

describe('V54 UX mode and visual QA polish', () => {
  it('keeps beginner navigation focused and hides advanced graph controls', () => {
    renderNavigation('beginner');
    expect(screen.getByText('Beginner')).toBeTruthy();
    expect(screen.getByTestId('view-start')).toBeTruthy();
    expect(screen.getByTestId('view-phaseStudy')).toBeTruthy();
    expect(screen.getByTestId('view-exam')).toBeTruthy();
    expect(screen.queryByTestId('view-graph')).toBeNull();
    expect(screen.queryByText('Advanced tools')).toBeNull();
    expect(screen.queryByText(/Export/i)).toBeNull();
  });

  it('opens advanced navigation when the persisted mode is advanced', () => {
    renderNavigation('advanced');
    expect(screen.getByTestId('view-graph')).toBeTruthy();
    expect(screen.getByText('Advanced tools')).toBeTruthy();
    expect(screen.getByText(/Mở thêm Graph/i)).toBeTruthy();
  });

  it('calls the UX mode setter from the navigation toggle', () => {
    renderNavigation('beginner');
    fireEvent.click(screen.getByRole('button', { name: 'Advanced' }));
    expect(noop).toHaveBeenCalledWith('advanced');
  });

  it('documents which views are beginner-safe', () => {
    expect(isBeginnerStudyView('start')).toBe(true);
    expect(isBeginnerStudyView('phaseStudy')).toBe(true);
    expect(isBeginnerStudyView('exam')).toBe(true);
    expect(isBeginnerStudyView('review')).toBe(true);
    expect(isBeginnerStudyView('graph')).toBe(false);
    expect(isBeginnerStudyView('coverage')).toBe(false);
  });

  it('renders the V54 visual QA panel for dashboard review', () => {
    render(<VisualQaPanel />);
    expect(screen.getByText(/V54 Visual QA/i)).toBeTruthy();
    expect(screen.getByText(/Beginner route/i)).toBeTruthy();
    expect(screen.getByText(/Navigation density/i)).toBeTruthy();
    expect(screen.getByText(/Mobile priority/i)).toBeTruthy();
  });
});
