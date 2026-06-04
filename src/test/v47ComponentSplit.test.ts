import { describe, expect, it } from "vitest";
import { aiPassportCourse } from "../courses/ai-passport";
import { getNodeLabel } from "../features/knowledge-graph/utils/i18n";
import {
  allowedViewsForCourse,
  views,
} from "../features/knowledge-graph/components/studyNavigationConfig";

describe("V47 component split and i18n helpers", () => {
  it("uses centralized node label helpers", () => {
    const node = aiPassportCourse.nodes[0];
    expect(getNodeLabel(node, "ja")).toBe(node.labelJa);
    expect(getNodeLabel(node, "en")).toBe(node.labelEn);
    expect(getNodeLabel(node, "vi")).toBe(node.labelVi);
  });

  it("keeps navigation grouped and course-scoped", () => {
    expect(views.some((view) => view.group === "main")).toBe(true);
    expect(views.some((view) => view.group === "advanced")).toBe(true);
    expect(allowedViewsForCourse("ai-passport").has("projects")).toBe(false);
  });
});
