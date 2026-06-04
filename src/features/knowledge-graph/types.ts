export type Language = 'vi' | 'ja' | 'en';

export type KnowledgeCategory =
  | 'root'
  | 'strategy'
  | 'management'
  | 'technology'
  | 'ai'
  | 'database'
  | 'network'
  | 'security'
  | 'software'
  | 'business';

export type NodeLevel = 'root' | 'major' | 'topic' | 'detail';
export type Importance = 'high' | 'medium' | 'low';
export type StudyStatus = 'new' | 'learning' | 'need_review' | 'mastered';

export type EdgeRelation =
  | 'belongs_to'
  | 'requires'
  | 'related_to'
  | 'compare_with'
  | 'example_of'
  | 'used_in';

export interface KnowledgeNodeData {
  id: string;
  labelJa: string;
  labelVi: string;
  labelEn: string;
  reading?: string;
  category: KnowledgeCategory;
  level: NodeLevel;
  importance: Importance;
  summaryVi: string;
  summaryJa: string;
  examPointVi: string;
  examPointJa: string;
  examples: string[];
  keywords: string[];
  prerequisites: string[];
  related: string[];
}

export interface KnowledgeEdgeData {
  id: string;
  source: string;
  target: string;
  relation: EdgeRelation;
  labelVi: string;
  labelJa: string;
}

export interface ProgressState {
  statuses: Record<string, StudyStatus>;
  favorites: string[];
  recent: string[];
}

export interface GraphFilters {
  query: string;
  categories: KnowledgeCategory[];
  importance: Importance | 'all';
  mode: 'overview' | 'study' | 'exam';
}
