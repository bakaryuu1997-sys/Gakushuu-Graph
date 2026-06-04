import type { StudyPathPhase } from '../../features/knowledge-graph/data/studyPath';
import { fundamentalInfoCatalog } from './catalog';

const phaseMeta: Record<string, { titleVi: string; titleJa: string; goalVi: string; goalJa: string }> = {
  overview: { titleVi: 'Overview', titleJa: '全体像', goalVi: 'Nắm cấu trúc kỳ thi và cách học local theo roadmap.', goalJa: '試験全体像と学習ロードマップを確認します。' },
  theory: { titleVi: '基礎理論 / Math', titleJa: '基礎理論・数学', goalVi: 'Binary, logic, probability, coding, compression và nền tảng tính toán.', goalJa: '2進数、論理、確率、符号化、圧縮を固めます。' },
  algorithm: { titleVi: 'Algorithm / Data Structure / 科目B', titleJa: 'アルゴリズム・データ構造・科目B', goalVi: 'Pseudo-code, trace, data structure, sort/search và debug.', goalJa: '擬似言語、トレース、データ構造、探索・整列を練習します。' },
  computer: { titleVi: 'Computer / Software', titleJa: 'コンピュータ・ソフトウェア', goalVi: 'CPU, memory, OS, cloud, programming và testing.', goalJa: 'CPU、メモリ、OS、クラウド、programmingを学びます。' },
  database: { titleVi: 'Database / SQL', titleJa: 'データベース・SQL', goalVi: 'ER, relational model, SQL, normalization, transaction và DB security.', goalJa: 'ER、関係モデル、SQL、正規化、トランザクションを学びます。' },
  'network-security': { titleVi: 'Network / Security', titleJa: 'ネットワーク・セキュリティ', goalVi: 'TCP/IP, subnet, HTTP, crypto, auth, malware, web security và incident.', goalJa: 'TCP/IP、subnet、HTTP、暗号、認証、Web securityを学びます。' },
  development: { titleVi: 'Development / Management', titleJa: '開発・マネジメント', goalVi: 'SDLC, testing, agile, PM, service, BCP và governance.', goalJa: '開発工程、testing、agile、PM、service、BCPを学びます。' },
  strategy: { titleVi: 'Strategy / Law / Accounting', titleJa: 'ストラテジ・法務・会計', goalVi: 'Strategy, KPI, accounting, law, IP và compliance.', goalJa: '戦略、KPI、会計、法務、知財、complianceを学びます。' },
};

export const fundamentalInfoStudyPath: StudyPathPhase[] = Object.entries(phaseMeta)
  .map(([phase, meta], index) => ({
    id: `fe-path-${index + 1}`,
    titleVi: meta.titleVi,
    titleJa: meta.titleJa,
    goalVi: meta.goalVi,
    goalJa: meta.goalJa,
    nodeIds: fundamentalInfoCatalog.filter((item) => item.phase === phase).map((item) => item.id),
  }))
  .filter((phase) => phase.nodeIds.length > 0);
