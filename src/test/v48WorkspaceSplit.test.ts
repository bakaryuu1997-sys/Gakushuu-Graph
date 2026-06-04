import { describe, expect, it } from "vitest";
import { computeReadinessScore } from "../features/knowledge-graph/components/WorkspaceDashboardLogic";
import { allowedViewsForCourse } from "../features/knowledge-graph/components/studyNavigationConfig";
import { aiPassportCourse } from "../courses/ai-passport";

describe("V48 workspace split", () => {
  it("keeps dashboard logic extracted and usable", () => {
    const props = {
      nodes: aiPassportCourse.nodes,
      studyPath: aiPassportCourse.studyPath,
      statuses: {},
      stats: {
        total: 10,
        mastered: 4,
        learning: 2,
        needReview: 1,
        fresh: 3,
        favorites: 0,
      },
    } as any;
    expect(computeReadinessScore(props)).toBeGreaterThan(0);
  });

  it("keeps course-specific navigation rules", () => {
    expect(allowedViewsForCourse("ai-passport").has("projects")).toBe(false);
    expect(allowedViewsForCourse("frontend").has("projects")).toBe(true);
  });
});
