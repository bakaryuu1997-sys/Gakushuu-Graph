import { describe, expect, it } from 'vitest';
import { courses, defaultCourseId, getCourseById } from '../courses/courseRegistry';

describe('course registry', () => {
  it('keeps AI Passport as the default course', () => {
    expect(defaultCourseId).toBe('ai-passport');
    expect(getCourseById(defaultCourseId).id).toBe('ai-passport');
  });

  it('keeps every course internally connected', () => {
    courses.forEach((course) => {
      const nodeIds = new Set(course.nodes.map((node) => node.id));
      expect(nodeIds.has(course.rootNodeId)).toBe(true);
      expect(nodeIds.has(course.defaultNodeId)).toBe(true);

      course.edges.forEach((edge) => {
        expect(nodeIds.has(edge.source), `${course.id}: missing edge source ${edge.source}`).toBe(true);
        expect(nodeIds.has(edge.target), `${course.id}: missing edge target ${edge.target}`).toBe(true);
      });
    });
  });

  it('keeps study paths valid and ordered', () => {
    courses.forEach((course) => {
      const nodeIds = new Set(course.nodes.map((node) => node.id));
      expect(course.studyPath.length).toBeGreaterThan(0);
      course.studyPath.forEach((phase) => {
        expect(phase.nodeIds.length).toBeGreaterThan(0);
        phase.nodeIds.forEach((nodeId) => {
          expect(nodeIds.has(nodeId), `${course.id}: missing study path node ${nodeId}`).toBe(true);
        });
      });
    });
  });
});
