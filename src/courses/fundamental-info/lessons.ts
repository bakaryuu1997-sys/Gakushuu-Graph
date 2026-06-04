import type { LessonContent } from '../../features/knowledge-graph/data/lessonContent';
import { fundamentalInfoCatalog } from './catalog';

export const fundamentalInfoLessons: LessonContent[] = fundamentalInfoCatalog.map((item) => ({
  nodeId: item.id,
  shortDefinitionVi: item.definitionVi,
  shortDefinitionJa: item.definitionJa,
  whyImportantVi: item.whyImportantVi,
  whyImportantJa: item.whyImportantJa,
  examPatternsVi: item.examPatternsVi,
  examPatternsJa: item.examPatternsJa,
  commonMistakesVi: item.commonMistakesVi,
  commonMistakesJa: item.commonMistakesJa,
  memoryTipVi: item.memoryTipVi,
  memoryTipJa: item.memoryTipJa,
}));
