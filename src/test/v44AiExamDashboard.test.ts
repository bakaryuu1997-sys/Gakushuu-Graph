import { describe, expect, it } from 'vitest';
import { statusLabel } from '../features/knowledge-graph/utils/categoryMeta';
import { nextStatus } from '../features/knowledge-graph/utils/localStorage';
import type { StudyStatus } from '../features/knowledge-graph/types';

describe('V44 AI exam dashboard progress states', () => {
  it('adds Need Review between learning and mastered', () => {
    expect(nextStatus(undefined)).toBe('learning');
    expect(nextStatus('new')).toBe('learning');
    expect(nextStatus('learning')).toBe('need_review');
    expect(nextStatus('need_review')).toBe('mastered');
    expect(nextStatus('mastered')).toBe('new');
  });

  it('labels all study statuses', () => {
    const states: StudyStatus[] = ['new', 'learning', 'need_review', 'mastered'];
    states.forEach((status) => expect(statusLabel[status]).toBeTruthy());
    expect(statusLabel.need_review).toContain('ôn');
  });
});
