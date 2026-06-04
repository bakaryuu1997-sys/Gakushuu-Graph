import type { CourseConfig } from '../types';
import type { LessonContent } from '../../features/knowledge-graph/data/lessonContent';
import type { KnowledgeNodeData } from '../../features/knowledge-graph/types';
import { aiExpandedEdges, aiExpandedNodes } from './domain/expanded';
import { aiPassportComparisons } from './aiPassportComparisons';
import { aiPassportDomainDrillQuiz } from './aiPassportDomainDrillQuiz';
import { aiPassportDeepLessons } from './aiPassportDeepLessons';
import { aiPassportEdges, aiPassportNodes } from './aiPassportGraph';
import { aiPassportGlossary } from './aiPassportGlossary';
import { aiPassportHardScenarioQuiz } from './aiPassportHardScenarioQuiz';
import { aiPassportJapaneseExamQuiz } from './aiPassportJapaneseExamQuiz';
import { aiPassportLessons } from './aiPassportLessons';
import { aiPassportQualityQuiz } from './domain/qualityQuiz';
import { aiPassportDomainLessons } from './domain/lessons';
import { aiPassportQuizQuestions } from './aiPassportQuiz';
import { aiPassportStudyPath } from './aiPassportStudyPath';
import { aiSupplementalQuizQuestions } from './aiPassportSupplementalQuiz';
import { aiPassportTop100Lessons } from './aiPassportTop100Lessons';
import { aiPassportUniversalLessons } from './aiPassportUniversalLessons';
import { aiPassportV35QualityLessons } from './aiPassportV35QualityLessons';
import { aiPassportV39DeepLessons } from './aiPassportV39DeepLessons';
import { aiPassportV40ManualLessons } from './aiPassportV40ManualLessons';
import { aiPassportV41EthicsBusinessLessons } from './aiPassportV41EthicsBusinessLessons';
import { aiPassportV39ScenarioQuiz } from './aiPassportV39ScenarioQuiz';
import { aiPassportV40JapaneseExamQuiz } from './aiPassportV40JapaneseExamQuiz';
import { aiPassportV41JapaneseScenarios } from './aiPassportV41JapaneseScenarios';
import { aiPassportV42QualityEdges, aiPassportV42QualityNodes } from './aiPassportV42QualityNodes';
import { aiPassportV46RealLessons } from './aiPassportV46RealLessons';
import { aiPassportV52BeginnerLessons } from './aiPassportV52BeginnerLessons';
import { aiPassportV12DeepLessons, aiPassportV12JapaneseScenarios } from './aiPassportV12Content';
import { aiPassportV13JapaneseScenarios } from './aiPassportV13Content';
import { aiPassportExpertLessons } from './aiPassportExpertLessons';
import { aiSupplementalEdges, aiSupplementalNodes } from './aiPassportSupplemental';
import { aiSupplementalLessons } from './aiPassportSupplementalLessons';

const aiReadingMap = new Map(aiPassportGlossary.filter((term) => term.reading).map((term) => [term.termJa, term.reading as string]));

const enrichAiNodesWithReadings = (nodes: KnowledgeNodeData[]): KnowledgeNodeData[] => nodes.map((node) => ({
  ...node,
  reading: node.reading ?? aiReadingMap.get(node.labelJa),
}));

const aiCourseNodes = enrichAiNodesWithReadings([...aiPassportNodes, ...aiSupplementalNodes, ...aiExpandedNodes, ...aiPassportV42QualityNodes]);

const placeholderSignals = ['Khái niệm quan trọng trong AI Passport', 'Hãy học theo 4 phần', 'nội dung nháp', 'TODO'];

const isThin = (text: string, min = 24) => text.trim().length < min || placeholderSignals.some((signal) => text.includes(signal));

const cleanOr = (text: string, fallback: string, min = 24) => isThin(text, min) ? fallback : text;

const ensureStudyList = (items: string[], fallback: string[]): string[] => {
  const useful = items.filter((item) => !isThin(item, 8));
  return [...useful, ...fallback].slice(0, Math.max(2, useful.length));
};

const enrichLessonsWithStudyDetails = (lessons: LessonContent[], nodes: KnowledgeNodeData[]): LessonContent[] => {
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));
  return lessons.map((lesson) => {
    const node = nodeMap.get(lesson.nodeId);
    if (!node) return lesson;
    const topicVi = node.labelVi || node.labelEn || node.labelJa;
    const topicJa = node.labelJa;
    const definitionVi = `${topicVi} là khái niệm AI Passport cần hiểu theo bối cảnh: ${node.summaryVi}`;
    const definitionJa = `${topicJa}はAIパスポートで理解すべき用語です。${node.summaryJa}`;
    const whyVi = `Trong đề AI Passport, ${topicVi} thường được hỏi qua tình huống nghiệp vụ, rủi ro, dữ liệu hoặc cách chọn biện pháp phù hợp.`;
    const whyJa = `AIパスポートでは、${topicJa}は業務活用、リスク、データ、適切な対策の文脈で問われます。`;
    const memoryVi = `Cách nhớ: đọc keyword “${topicVi}”, xác định mục tiêu → dữ liệu/rủi ro → chọn đáp án an toàn và có kiểm chứng.`;
    const memoryJa = `覚え方：「${topicJa}」を見たら、目的・データ・リスク・確認方法をセットで考えます。`;
    return {
      ...lesson,
      shortDefinitionVi: cleanOr(lesson.shortDefinitionVi, definitionVi),
      shortDefinitionJa: cleanOr(lesson.shortDefinitionJa, definitionJa),
      whyImportantVi: cleanOr(lesson.whyImportantVi, whyVi),
      whyImportantJa: cleanOr(lesson.whyImportantJa, whyJa),
      memoryTipVi: cleanOr(lesson.memoryTipVi, memoryVi),
      memoryTipJa: cleanOr(lesson.memoryTipJa, memoryJa),
      examPatternsVi: ensureStudyList(lesson.examPatternsVi, [
        `Hỏi định nghĩa hoặc vai trò của ${topicVi} trong một tình huống AI thực tế.`,
        `Hỏi biện pháp đúng khi ${topicVi} liên quan đến dữ liệu, mô hình, pháp luật hoặc vận hành.`,
      ]),
      examPatternsJa: ensureStudyList(lesson.examPatternsJa, [
        `${topicJa}の定義や役割を、実務シナリオの中で選ばせる問題。`,
        `${topicJa}に関するデータ、モデル、法務、運用上の適切な対応を選ぶ問題。`,
      ]),
      commonMistakesVi: ensureStudyList(lesson.commonMistakesVi, [
        `Chỉ nhớ tên ${topicVi} nhưng không gắn với ví dụ trong đề.`,
        `Chọn đáp án “AI tự động làm hết” mà quên kiểm chứng, quyền riêng tư và trách nhiệm con người.`,
      ]),
      commonMistakesJa: ensureStudyList(lesson.commonMistakesJa, [
        `${topicJa}の名前だけを暗記し、出題シナリオに結び付けない。`,
        `AIに任せればよいと考え、人間の確認、プライバシー、責任を忘れる。`,
      ]),
    };
  });
};


const uniqueByNode = <T extends { nodeId: string }>(items: T[], nodeIds: Set<string>): T[] => {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (!nodeIds.has(item.nodeId) || seen.has(item.nodeId)) return false;
    seen.add(item.nodeId);
    return true;
  });
};

const sanitizeCourse = (course: CourseConfig): CourseConfig => {
  const nodeIds = new Set(course.nodes.map((node) => node.id));
  return {
    ...course,
    edges: course.edges.filter((edge) => nodeIds.has(edge.source) && nodeIds.has(edge.target)),
    lessons: uniqueByNode(course.lessons, nodeIds),
    quizzes: course.quizzes.filter((quiz) => nodeIds.has(quiz.nodeId)),
    comparePairs: course.comparePairs.filter((pair) => nodeIds.has(pair.leftNodeId) && nodeIds.has(pair.rightNodeId)),
    studyPath: course.studyPath.map((phase) => ({ ...phase, nodeIds: phase.nodeIds.filter((nodeId) => nodeIds.has(nodeId)) })),
  };
};

export const aiPassportCourse: CourseConfig = sanitizeCourse({
  id: 'ai-passport',
  title: 'AI Passport',
  titleJa: 'AIパスポート',
  titleVi: 'AI Passport',
  subtitleVi: 'Trang chính: học AI, ML, Generative AI, đạo đức, pháp luật và business bằng graph.',
  subtitleJa: 'メインコース：AI、ML、生成AI、倫理、法務、ビジネスをグラフで学習します。',
  descriptionVi: 'Tập trung ôn AI Passport theo hướng dễ hiểu: bài học ở giữa, graph quan hệ bên phải, lộ trình và Daily 10 bên trái.',
  descriptionJa: 'AIパスポート対策を、中央のレッスン、右側の関係グラフ、左側の学習ナビで進めます。',
  rootNodeId: 'ai-passport',
  defaultNodeId: 'ai-passport',
  languageSupport: ['vi', 'ja', 'en'],
  theme: { accentClass: 'text-violet-600', darkPanelClass: 'bg-slate-950', progressClass: 'bg-violet-400' },
  nodes: aiCourseNodes,
  edges: [...aiPassportEdges, ...aiSupplementalEdges, ...aiExpandedEdges, ...aiPassportV42QualityEdges],
  lessons: enrichLessonsWithStudyDetails([...aiPassportV52BeginnerLessons, ...aiPassportV46RealLessons, ...aiPassportV41EthicsBusinessLessons, ...aiPassportV40ManualLessons, ...aiPassportV39DeepLessons, ...aiPassportV35QualityLessons, ...aiPassportDomainLessons, ...aiPassportV12DeepLessons, ...aiPassportTop100Lessons, ...aiPassportExpertLessons, ...aiPassportDeepLessons, ...aiPassportLessons, ...aiSupplementalLessons, ...aiPassportUniversalLessons], aiCourseNodes),
  quizzes: [...aiPassportV41JapaneseScenarios, ...aiPassportV40JapaneseExamQuiz, ...aiPassportV39ScenarioQuiz, ...aiPassportDomainDrillQuiz, ...aiPassportV13JapaneseScenarios, ...aiPassportV12JapaneseScenarios, ...aiPassportHardScenarioQuiz, ...aiPassportJapaneseExamQuiz, ...aiPassportQualityQuiz, ...aiPassportQuizQuestions, ...aiSupplementalQuizQuestions],
  studyPath: aiPassportStudyPath,
  comparePairs: aiPassportComparisons,
});
