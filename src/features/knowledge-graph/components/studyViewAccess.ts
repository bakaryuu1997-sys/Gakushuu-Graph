import type { CourseConfig, CourseId } from "../../../courses/types";
import type { KnowledgeCategory } from "../types";
import { studyCategories, type StudyView } from "./studyViewTypes";

const baseViews: StudyView[] = [
  "start",
  "dashboard",
  "coverage",
  "practice",
  "cheatsheet",
  "today",
  "path",
  "phaseStudy",
  "crashCourse",
  "learningFlow",
  "visualMaps",
  "plans",
  "weak",
  "all",
  "exam",
  "review",
  "japanese",
  "glossary",
  "glossaryQuiz",
  "session",
  "compare",
  "flashcards",
  "mistakes",
  "answerReview",
  "favorites",
  "recent",
  "graph",
];

const withoutAiSpecific = (view: StudyView) =>
  !["japanese", "glossary", "glossaryQuiz", "flashcards", "compare"].includes(view);

export const allowedViewsForCourse = (courseId: CourseId): Set<StudyView> => {
  if (courseId === "brse") return new Set([...baseViews, "phrases", "templates", "roleplay"]);
  if (courseId === "frontend") return new Set([...baseViews, "projects"]);
  if (courseId === "sql" || courseId === "linux" || courseId === "python") return new Set(baseViews.filter(withoutAiSpecific));
  if (courseId === "ai-passport") return new Set(baseViews.filter((view) => view !== "projects"));
  return new Set(baseViews);
};

export const categoriesForCourse = (course: CourseConfig): KnowledgeCategory[] => {
  const used = new Set(course.nodes.map((node) => node.category));
  return studyCategories.filter((category) => used.has(category));
};
