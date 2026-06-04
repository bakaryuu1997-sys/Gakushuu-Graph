import type { ConceptComparison } from "../data/conceptComparisons";
import type { LessonContent } from "../data/lessonContent";
import {
  getExplanationText,
  getQuestionOptions,
  getQuestionText,
  type QuizQuestion,
} from "../data/quizQuestions";
import type { StudyPathPhase } from "../data/studyPath";
import type { KnowledgeNodeData, Language } from "../types";
import type { CourseConfig } from "../../../courses/types";

export const getCourseTitle = (course: CourseConfig, language: Language) => {
  if (language === "ja") return course.titleJa;
  if (language === "vi") return course.titleVi;
  return course.title;
};

export const getCourseSubtitle = (course: CourseConfig, language: Language) =>
  language === "ja" ? course.subtitleJa : course.subtitleVi;

export const getCourseDescription = (course: CourseConfig, language: Language) =>
  language === "ja" ? course.descriptionJa : course.descriptionVi;

export const getNodeLabel = (node: KnowledgeNodeData, language: Language) => {
  if (language === "ja") return node.labelJa;
  if (language === "en") return node.labelEn;
  return node.labelVi;
};

export const getNodeSummary = (node: KnowledgeNodeData, language: Language) =>
  language === "ja" ? node.summaryJa : node.summaryVi;

export const getNodeExamPoint = (node: KnowledgeNodeData, language: Language) =>
  language === "ja" ? node.examPointJa : node.examPointVi;

export const getLessonText = (
  lesson: LessonContent,
  field: "definition" | "why" | "memory",
  language: Language,
) => {
  if (field === "definition") return language === "ja" ? lesson.shortDefinitionJa : lesson.shortDefinitionVi;
  if (field === "why") return language === "ja" ? lesson.whyImportantJa : lesson.whyImportantVi;
  return language === "ja" ? lesson.memoryTipJa : lesson.memoryTipVi;
};

export const getLessonPatterns = (lesson: LessonContent, language: Language) =>
  language === "ja" ? lesson.examPatternsJa : lesson.examPatternsVi;

export const getLessonMistakes = (lesson: LessonContent, language: Language) =>
  language === "ja" ? lesson.commonMistakesJa : lesson.commonMistakesVi;

export const getLocalizedQuestion = (quiz: QuizQuestion, language: Language) => ({
  question: getQuestionText(quiz, language),
  options: getQuestionOptions(quiz, language),
  explanation: getExplanationText(quiz, language),
});

export const getOptionTips = (quiz: QuizQuestion, language: Language) =>
  language === "ja" ? quiz.optionExplanationsJa : quiz.optionExplanationsVi;

export const getCompareDifference = (comparison: ConceptComparison, language: Language) =>
  language === "ja" ? comparison.differenceJa : comparison.differenceVi;

export const getCompareExamTip = (comparison: ConceptComparison, language: Language) =>
  language === "ja" ? comparison.examTipJa : comparison.examTipVi;

export const getPhaseTitle = (phase: StudyPathPhase, language: Language) =>
  language === "ja" ? phase.titleJa : phase.titleVi;

export const getPhaseGoal = (phase: StudyPathPhase, language: Language) =>
  language === "ja" ? phase.goalJa : phase.goalVi;
