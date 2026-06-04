import { describe, expect, it } from 'vitest';
import { fundamentalInfoExamScenarios } from '../courses/fundamental-info/examScenarios';
import { fundamentalInfoV81RMixedMockMiniSet } from '../courses/fundamental-info/v81rMixedMockMiniSet';

describe('V81R Fundamental Info mixed mock mini-set', () => {
  it('covers the intended FE mixed domains', () => {
    expect(fundamentalInfoV81RMixedMockMiniSet).toHaveLength(6);
    expect(new Set(fundamentalInfoV81RMixedMockMiniSet.map((item) => item.domain))).toEqual(new Set(['algorithm', 'database', 'network', 'security']));
  });
  it('uses trace or SQL steps where relevant', () => {
    expect(fundamentalInfoV81RMixedMockMiniSet.some((item) => item.traceSteps?.length)).toBe(true);
    expect(fundamentalInfoV81RMixedMockMiniSet.some((item) => item.sqlSteps?.length)).toBe(true);
  });
  it('is merged into scenario bank', () => {
    for (const item of fundamentalInfoV81RMixedMockMiniSet) expect(fundamentalInfoExamScenarios.some((scenario) => scenario.id === item.id)).toBe(true);
  });
});
