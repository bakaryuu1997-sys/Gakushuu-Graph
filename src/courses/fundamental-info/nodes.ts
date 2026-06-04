import type { KnowledgeNodeData } from '../../features/knowledge-graph/types';
import { fundamentalInfoCatalog } from './catalog';

export const fundamentalInfoNodes: KnowledgeNodeData[] = fundamentalInfoCatalog.map((item) => ({
  id: item.id,
  labelJa: item.labelJa,
  labelVi: item.labelVi,
  labelEn: item.labelEn,
  category: item.category,
  level: item.level,
  importance: item.importance,
  summaryVi: item.definitionVi,
  summaryJa: item.definitionJa,
  examPointVi: item.examPatternsVi[0] ?? item.whyImportantVi,
  examPointJa: item.examPatternsJa[0] ?? item.whyImportantJa,
  examples: item.examples,
  keywords: item.keywords,
  prerequisites: item.prerequisites,
  related: [],
}));
