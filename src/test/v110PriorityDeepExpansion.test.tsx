import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { v110PriorityChaptersForCourse, v110ManualChapters } from '../courses/v110ManualChapterPack';
import { V109ContentCoverageDashboard } from '../features/knowledge-graph/components/V109ContentCoverageDashboard';
import { pythonCourse } from '../courses/python';

describe('V110R priority deep expansion', () => {
  it('adds priority manual chapters across requested domains', () => {
    expect(v110PriorityChaptersForCourse('python').length).toBeGreaterThanOrEqual(4);
    expect(v110PriorityChaptersForCourse('fundamental-info').length).toBeGreaterThanOrEqual(3);
    expect(v110PriorityChaptersForCourse('ai-passport').length).toBeGreaterThanOrEqual(3);
    expect(v110PriorityChaptersForCourse('sql').length).toBeGreaterThanOrEqual(1);
    expect(v110PriorityChaptersForCourse('frontend').length).toBeGreaterThanOrEqual(1);
    expect(v110PriorityChaptersForCourse('linux').length).toBeGreaterThanOrEqual(1);
    expect(v110PriorityChaptersForCourse('brse').length).toBeGreaterThanOrEqual(1);
  });

  it('keeps chapter content written and structured', () => {
    const asyncChapter = v110ManualChapters.find((chapter) => chapter.id === 'v110-python-async-await-local-api');
    expect(asyncChapter).toBeTruthy();
    expect(asyncChapter?.conceptVi.length).toBeGreaterThanOrEqual(4);
    expect(asyncChapter?.walkthroughVi.length).toBeGreaterThanOrEqual(5);
    expect(asyncChapter?.deepExampleBody).toContain('async def');
    expect(asyncChapter?.mistakesVi.length).toBeGreaterThanOrEqual(4);
  });

  it('renders the V109 coverage dashboard used to guide V110', () => {
    render(
      <V109ContentCoverageDashboard
        activeView="coverage"
        nodes={pythonCourse.nodes}
        lessons={pythonCourse.lessons}
        quizzes={pythonCourse.quizzes}
        selectedNode={pythonCourse.nodes[0]}
        connectedNodes={[]}
        favorites={[]}
        recent={[]}
        stats={{ total: 1, mastered: 0, learning: 0, needReview: 0, fresh: 1, favorites: 0 }}
        statuses={{}}
        language="vi"
        studyPath={pythonCourse.studyPath}
        comparePairs={pythonCourse.comparePairs}
        courseTitle={pythonCourse.title}
        isFavorite={false}
        onSelectNode={() => undefined}
        onToggleStatus={() => undefined}
        onMasterNext={() => undefined}
        onNeedReview={() => undefined}
        onSetStatus={() => undefined}
        onToggleFavorite={() => undefined}
        onExportProgress={() => undefined}
        onImportProgress={async () => undefined}
        onResetProgress={() => undefined}
        onView={() => undefined}
      />
    );
    expect(screen.getByText(/V109R Content Coverage QA/i)).toBeTruthy();
    expect(screen.getAllByText(/V110R priority expansion map/i).length).toBeGreaterThan(0);
  });
});
