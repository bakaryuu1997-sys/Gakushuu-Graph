export interface StudyPathPhase {
  id: string;
  titleVi: string;
  titleJa: string;
  goalVi: string;
  goalJa: string;
  nodeIds: string[];
}

export const studyPathPhases: StudyPathPhase[] = [
  {
    id: 'foundation',
    titleVi: 'Nền tảng tổng quan',
    titleJa: '全体像の基礎',
    goalVi: 'Hiểu IT Passport gồm Strategy, Management và Technology để không học rời rạc.',
    goalJa: 'ストラテジ・マネジメント・テクノロジの全体像を理解します。',
    nodeIds: ['it-passport', 'strategy', 'management', 'technology', 'software', 'hardware', 'algorithm'],
  },
  {
    id: 'security-network',
    titleVi: 'Bảo mật & mạng',
    titleJa: 'セキュリティ・ネットワーク',
    goalVi: 'Nắm nhóm thường ra thi: CIA, mã hóa, xác thực, DNS, TCP/IP và HTTPS.',
    goalJa: 'CIA、暗号化、認証、DNS、TCP/IP、HTTPSを押さえます。',
    nodeIds: ['security', 'cia', 'encryption', 'authentication', 'malware', 'network', 'tcp-ip', 'dns', 'http'],
  },
  {
    id: 'database-cloud',
    titleVi: 'Database, cloud & hệ thống',
    titleJa: 'DB・クラウド・システム',
    goalVi: 'Hiểu dữ liệu, SQL, transaction, cloud và các thành phần hệ thống.',
    goalJa: 'データ、SQL、トランザクション、クラウド、システム構成を学びます。',
    nodeIds: ['database', 'sql', 'transaction', 'cloud'],
  },
  {
    id: 'ai-data',
    titleVi: 'AI, dữ liệu & machine learning',
    titleJa: 'AI・データ・機械学習',
    goalVi: 'Hiểu AI hiện đại, học máy, tiền xử lý, đánh giá và các mô hình hay gặp.',
    goalJa: 'AI、機械学習、前処理、評価、代表的なモデルを理解します。',
    nodeIds: ['ai', 'machine-learning', 'supervised-learning', 'unsupervised-learning', 'linear-regression', 'logistic-regression', 'svm', 'decision-tree', 'deep-learning', 'neural-network', 'cnn', 'rnn', 'transformer', 'data-preprocessing', 'evaluation'],
  },
  {
    id: 'management-strategy',
    titleVi: 'Quản lý dự án & kinh doanh',
    titleJa: 'マネジメント・ストラテジ',
    goalVi: 'Ôn WBS, SLA, BCP, KPI/KGI, SWOT, pháp luật và chiến lược doanh nghiệp.',
    goalJa: 'WBS、SLA、BCP、KPI/KGI、SWOT、法務、経営戦略を確認します。',
    nodeIds: ['project-management', 'service-management', 'system-development', 'business-strategy', 'system-strategy', 'legal'],
  },
];
