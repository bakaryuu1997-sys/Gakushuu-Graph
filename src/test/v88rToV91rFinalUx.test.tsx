import { describe, expect, it } from 'vitest';
import { pythonV89RPortfolioProjects } from '../courses/python/v89rPortfolioProjects';
import { fundamentalInfoV90RMockMiniSet } from '../courses/fundamental-info/v90rMockMiniSet';
import { fundamentalInfoExamScenarios } from '../courses/fundamental-info/examScenarios';
import { v88rContentConsistencyItems } from '../courses/release/v88rContentConsistency';
import { v91rReleaseUxMilestones, v91rSevenDayRoute } from '../courses/release/v91rReleaseUx';

describe('V88R-V91R final UX polish', () => {
  it('adds a consistency audit covering the three main courses and release docs', () => {
    expect(v88rContentConsistencyItems.length).toBeGreaterThanOrEqual(5);
    expect(new Set(v88rContentConsistencyItems.map((item) => item.area))).toEqual(new Set(['python', 'fundamental-info', 'ai-passport', 'release']));
  });

  it('adds job-ready Python portfolio blueprints with tests and README checklist', () => {
    expect(pythonV89RPortfolioProjects).toHaveLength(4);
    expect(pythonV89RPortfolioProjects.map((item) => item.track)).toEqual(expect.arrayContaining(['cli', 'data', 'backend', 'testing']));
    expect(pythonV89RPortfolioProjects.every((item) => item.acceptanceTests.length >= 3 && item.readmeChecklist.length >= 5)).toBe(true);
  });

  it('adds a no-timer FE mixed mock mini-set and merges it into the scenario bank', () => {
    expect(fundamentalInfoV90RMockMiniSet).toHaveLength(5);
    expect(new Set(fundamentalInfoV90RMockMiniSet.map((item) => item.domain))).toEqual(new Set(['algorithm', 'database', 'network', 'security', 'management']));
    for (const item of fundamentalInfoV90RMockMiniSet) expect(fundamentalInfoExamScenarios.some((scenario) => scenario.id === item.id)).toBe(true);
  });

  it('adds release UX roadmap and seven-day route', () => {
    expect(v91rReleaseUxMilestones.some((item) => item.version === 'V88R-V91R')).toBe(true);
    expect(v91rSevenDayRoute).toHaveLength(7);
  });
});
