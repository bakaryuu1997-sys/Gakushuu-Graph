import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { aiPassportCourse } from '../courses/ai-passport';
import { AiExamSimulator } from '../features/knowledge-graph/components/AiExamSimulator';
import { SmartDailyStudyPlan, buildSmartDailyPlan } from '../features/knowledge-graph/components/SmartDailyStudyPlan';
import { AiWrongAnswerReviewView } from '../features/knowledge-graph/components/AiWrongAnswerReviewView';
import { isBeginnerStudyView } from '../features/knowledge-graph/components/studyUxMode';
import { views } from '../features/knowledge-graph/components/studyViewItems';
import type { LessonWorkspaceProps } from '../features/knowledge-graph/components/LessonWorkspaceTypes';

afterEach(() => cleanup());

const selectedNode = aiPassportCourse.nodes[0];
const props: LessonWorkspaceProps = {
  activeView: 'session',
  nodes: aiPassportCourse.nodes,
  selectedNode,
  connectedNodes: aiPassportCourse.nodes.slice(1, 4),
  favorites: [],
  recent: [],
  statuses: {},
  stats: { total: aiPassportCourse.nodes.length, mastered: 0, learning: 0, needReview: 0, fresh: aiPassportCourse.nodes.length, favorites: 0 },
  language: 'vi',
  lessons: aiPassportCourse.lessons,
  quizzes: aiPassportCourse.quizzes,
  studyPath: aiPassportCourse.studyPath,
  comparePairs: aiPassportCourse.comparePairs,
  courseTitle: aiPassportCourse.title,
  isFavorite: false,
  onSelectNode: vi.fn(),
  onToggleStatus: vi.fn(),
  onMasterNext: vi.fn(),
  onNeedReview: vi.fn(),
  onSetStatus: vi.fn(),
  onToggleFavorite: vi.fn(),
  onView: vi.fn(),
};

describe('V55 exam practice and final polish', () => {
  it('exposes Exam Simulator in beginner mode without changing compact main views', () => {
    expect(isBeginnerStudyView('session')).toBe(true);
    expect(views.find((view) => view.id === 'session')?.label).toBe('Exam Simulator');
    expect(views.find((view) => view.id === 'session')?.group).toBe('practice');
    expect(views.filter((view) => view.group === 'main').map((view) => view.id)).toEqual(['start', 'phaseStudy', 'japanese']);
  });

  it('builds a smart daily plan with new lessons, reviews, quiz and mini exam', () => {
    const plan = buildSmartDailyPlan({ ...props, statuses: { [aiPassportCourse.nodes[1].id]: 'need_review' } });
    expect(plan.newNodes.length).toBeGreaterThan(0);
    expect(plan.reviewNodes.length).toBeGreaterThan(0);
    expect(plan.quizCount).toBeGreaterThanOrEqual(5);
    expect(plan.miniExamCount).toBeGreaterThanOrEqual(10);
    render(<SmartDailyStudyPlan {...props} />);
    expect(screen.getByText(/V55 Smart Daily Plan/i)).toBeTruthy();
    expect(screen.getAllByText(/1 mini exam/i).length).toBeGreaterThan(0);
  });

  it('renders the 30/50 question Exam Simulator and can submit', () => {
    render(<AiExamSimulator {...props} />);
    expect(screen.getByText(/V55 Exam Simulator/i)).toBeTruthy();
    expect(screen.getByRole('button', { name: '30 câu' })).toBeTruthy();
    expect(screen.getByRole('button', { name: '50 câu' })).toBeTruthy();
    fireEvent.click(screen.getAllByRole('button').find((button) => button.textContent?.includes('Submit exam'))!);
    expect(screen.getByText(/Exam result/i)).toBeTruthy();
    expect(screen.getByText(/Wrong answer intelligence/i)).toBeTruthy();
  });

  it('renders wrong-answer intelligence summaries', () => {
    render(<AiWrongAnswerReviewView quizzes={aiPassportCourse.quizzes} />);
    expect(screen.getByText(/V55 Wrong-answer Intelligence/i)).toBeTruthy();
    expect(screen.getByText(/Top domain/i)).toBeTruthy();
    expect(screen.getByText(/Node nên ôn/i)).toBeTruthy();
  });
});
