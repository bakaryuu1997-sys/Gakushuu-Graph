import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GlobalQuickSearchPanel } from '../features/knowledge-graph/components/GlobalQuickSearchPanel';
import { PythonV94RAdvancedPanel } from '../features/knowledge-graph/components/PythonV94RAdvancedPanel';
import { pythonCourse } from '../courses/python';
import { pythonV94RAdvancedTopics } from '../courses/python/v94rAdvancedPython';

describe('V92R global search and V94R Python advanced', () => {
  it('indexes quick search categories requested by the user', () => {
    render(<GlobalQuickSearchPanel nodes={pythonCourse.nodes} lessons={pythonCourse.lessons} quizzes={pythonCourse.quizzes} courseTitle={pythonCourse.title} onSelectNode={() => undefined} />);
    expect(screen.getByText(/V92R Global Quick Search/i)).toBeTruthy();
    expect(screen.getAllByText(/Lesson/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Exercise/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Python Project/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/科目B Trace/i).length).toBeGreaterThan(0);
  });

  it('covers all advanced Python tracks', () => {
    expect(new Set(pythonV94RAdvancedTopics.map((topic) => topic.track))).toEqual(new Set(['typing', 'dataclass', 'pathlib', 'logging', 'pytest-fixture', 'fastapi-di']));
  });

  it('renders advanced Python code examples and practice prompts', () => {
    render(<PythonV94RAdvancedPanel />);
    expect(screen.getByText(/V94R Python Advanced Batch/i)).toBeTruthy();
    expect(screen.getAllByText(/FastAPI dependency injection/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Practice:/i).length).toBeGreaterThan(0);
  });
});
