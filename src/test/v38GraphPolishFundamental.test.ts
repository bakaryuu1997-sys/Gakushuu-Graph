import { describe, expect, it } from 'vitest';
import { fundamentalInfoCourse } from '../courses/fundamental-info';
import { courseSummaries, loadCourseById } from '../courses/courseLoader';
import { getMapFocusPresets } from '../components/map/mapFocus';

describe('V38 graph polish and Fundamental Information course', () => {
  it('adds 基本情報 as a separate course without replacing IT Passport', async () => {
    const fundamental = await loadCourseById('fundamental-info');
    const it = await loadCourseById('it-passport');
    expect(fundamental.id).toBe('fundamental-info');
    expect(it.id).toBe('it-passport');
    expect(courseSummaries.some((course) => course.id === 'fundamental-info')).toBe(true);
    expect(courseSummaries.some((course) => course.id === 'it-passport')).toBe(true);
  });

  it('has a useful first 基本情報 roadmap', () => {
    expect(fundamentalInfoCourse.nodes.length).toBeGreaterThanOrEqual(35);
    expect(fundamentalInfoCourse.quizzes.length).toBe(fundamentalInfoCourse.nodes.length);
    expect(fundamentalInfoCourse.studyPath.length).toBeGreaterThanOrEqual(6);
    expect(fundamentalInfoCourse.nodes.some((node) => node.id === 'algo')).toBe(true);
    expect(fundamentalInfoCourse.nodes.some((node) => node.id === 'security-fe')).toBe(true);
  });

  it('adds course-specific graph presets for 基本情報', () => {
    const presets = getMapFocusPresets('基本情報 Roadmap');
    expect(presets.some((preset) => preset.id === 'fundamental-algo')).toBe(true);
    expect(presets.some((preset) => preset.id === 'fundamental-db')).toBe(true);
  });
});
