export type StudyUxMode = "beginner" | "advanced";

const beginnerViews = new Set([
  "start",
  "phaseStudy",
  "exam",
  "weak",
  "review",
  "answerReview",
  "japanese",
  "session",
]);

export const isBeginnerStudyView = (viewId: string): boolean => beginnerViews.has(viewId);

export const normalizeStudyUxMode = (value: string | null | undefined): StudyUxMode => (
  value === "advanced" ? "advanced" : "beginner"
);
