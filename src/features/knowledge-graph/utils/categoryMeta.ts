import type { KnowledgeCategory, StudyStatus } from '../types';

export const categoryMeta: Record<KnowledgeCategory, { label: string; labelJa: string; color: string; bg: string; border: string }> = {
  root: { label: 'Root', labelJa: '全体', color: 'text-slate-950', bg: 'bg-white', border: 'border-slate-300' },
  strategy: { label: 'Strategy', labelJa: 'ストラテジ', color: 'text-emerald-800', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  management: { label: 'Management', labelJa: 'マネジメント', color: 'text-orange-800', bg: 'bg-orange-50', border: 'border-orange-200' },
  technology: { label: 'Technology', labelJa: 'テクノロジ', color: 'text-blue-800', bg: 'bg-blue-50', border: 'border-blue-200' },
  ai: { label: 'AI', labelJa: 'AI', color: 'text-violet-800', bg: 'bg-violet-50', border: 'border-violet-200' },
  database: { label: 'Database', labelJa: 'DB', color: 'text-amber-800', bg: 'bg-amber-50', border: 'border-amber-200' },
  network: { label: 'Network', labelJa: 'ネットワーク', color: 'text-cyan-800', bg: 'bg-cyan-50', border: 'border-cyan-200' },
  security: { label: 'Security', labelJa: 'セキュリティ', color: 'text-rose-800', bg: 'bg-rose-50', border: 'border-rose-200' },
  software: { label: 'Software', labelJa: 'ソフトウェア', color: 'text-indigo-800', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  business: { label: 'Business', labelJa: 'ビジネス', color: 'text-lime-800', bg: 'bg-lime-50', border: 'border-lime-200' },
};

export const statusLabel: Record<StudyStatus, string> = {
  new: 'Chưa học',
  learning: 'Đang học',
  need_review: 'Cần ôn lại',
  mastered: 'Đã hiểu',
};
