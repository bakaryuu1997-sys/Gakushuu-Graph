import {
  AlertTriangle,
  BarChart3,
  BookOpen,
  CalendarDays,
  FileQuestion,
  GraduationCap,
  History,
  Layers3,
  ListChecks,
  Network,
  Search,
  Star,
  Target,
  Timer,
} from "lucide-react";
import type { StudyView, StudyViewGroup } from "./studyViewTypes";

export interface ViewItem {
  id: StudyView;
  label: string;
  icon: typeof BookOpen;
  hint: string;
  group: StudyViewGroup;
}

export const views: ViewItem[] = [
  { id: "start", label: "Start", icon: BookOpen, hint: "bắt đầu học", group: "main" },
  { id: "phaseStudy", label: "Study", icon: GraduationCap, hint: "học theo phase", group: "main" },
  { id: "japanese", label: "Exam", icon: Timer, hint: "luyện đề Nhật", group: "main" },
  { id: "review", label: "Answer Review", icon: History, hint: "xem đáp án", group: "review" },
  { id: "answerReview", label: "Wrong Answers", icon: AlertTriangle, hint: "bẫy sai", group: "review" },
  { id: "weak", label: "Need Review", icon: AlertTriangle, hint: "node chưa vững", group: "review" },
  { id: "favorites", label: "Favorites", icon: Star, hint: "đã lưu", group: "review" },
  { id: "practice", label: "Practice", icon: FileQuestion, hint: "tình huống", group: "practice" },
  { id: "flashcards", label: "Flashcards", icon: BookOpen, hint: "ôn nhanh", group: "practice" },
  { id: "compare", label: "Compare", icon: Layers3, hint: "dễ nhầm", group: "practice" },
  { id: "glossary", label: "Glossary", icon: Search, hint: "từ vựng", group: "practice" },
  { id: "projects", label: "Projects", icon: Layers3, hint: "học qua project", group: "practice" },
  { id: "phrases", label: "Phrases", icon: BookOpen, hint: "câu Nhật", group: "practice" },
  { id: "templates", label: "Templates", icon: ListChecks, hint: "mẫu tài liệu", group: "practice" },
  { id: "roleplay", label: "Role-play", icon: Target, hint: "tình huống", group: "practice" },
  { id: "glossaryQuiz", label: "Glossary Quiz", icon: FileQuestion, hint: "quiz thuật ngữ", group: "practice" },
  { id: "exam", label: "Mini Quiz", icon: FileQuestion, hint: "quiz theo node", group: "practice" },
  { id: "mistakes", label: "Mistakes", icon: AlertTriangle, hint: "bẫy đề", group: "review" },
  { id: "dashboard", label: "Dashboard", icon: BarChart3, hint: "tổng quan", group: "advanced" },
  { id: "path", label: "Study Path", icon: ListChecks, hint: "lộ trình", group: "advanced" },
  { id: "graph", label: "Graph", icon: Network, hint: "bản đồ", group: "advanced" },
  { id: "coverage", label: "Coverage", icon: BarChart3, hint: "kiểm nội dung", group: "advanced" },
  { id: "cheatsheet", label: "Cheat Sheet", icon: Target, hint: "ôn tắt", group: "advanced" },
  { id: "session", label: "Exam Simulator", icon: Timer, hint: "thi thử 30/50 câu", group: "practice" },
  { id: "today", label: "Daily 10", icon: CalendarDays, hint: "10 node/ngày", group: "advanced" },
  { id: "all", label: "All Nodes", icon: ListChecks, hint: "danh sách", group: "advanced" },
  { id: "visualMaps", label: "Diagrams", icon: Network, hint: "sơ đồ", group: "advanced" },
  { id: "plans", label: "Plans", icon: CalendarDays, hint: "3/7/14/30 ngày", group: "advanced" },
  { id: "crashCourse", label: "Crash Course", icon: Timer, hint: "3/7 ngày", group: "advanced" },
  { id: "learningFlow", label: "Flow", icon: Network, hint: "học theo flow", group: "advanced" },
];
