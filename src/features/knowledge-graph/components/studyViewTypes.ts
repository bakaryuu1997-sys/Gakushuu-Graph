import type { KnowledgeCategory } from "../types";

export type StudyView =
  | "start"
  | "dashboard"
  | "coverage"
  | "projects"
  | "practice"
  | "phrases"
  | "templates"
  | "roleplay"
  | "today"
  | "path"
  | "phaseStudy"
  | "crashCourse"
  | "learningFlow"
  | "visualMaps"
  | "cheatsheet"
  | "plans"
  | "weak"
  | "all"
  | "exam"
  | "review"
  | "japanese"
  | "glossary"
  | "glossaryQuiz"
  | "session"
  | "compare"
  | "flashcards"
  | "mistakes"
  | "answerReview"
  | "favorites"
  | "recent"
  | "graph";

export type StudyViewGroup = "main" | "review" | "practice" | "advanced";

export const studyCategories: KnowledgeCategory[] = [
  "strategy",
  "management",
  "technology",
  "software",
  "business",
  "ai",
  "database",
  "network",
  "security",
];
