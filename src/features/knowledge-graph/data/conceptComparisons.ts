export interface ConceptComparison {
  id: string;
  title: string;
  leftNodeId: string;
  rightNodeId: string;
  leftLabel: string;
  rightLabel: string;
  differenceVi: string;
  differenceJa: string;
  examTipVi: string;
  examTipJa: string;
}

export const conceptComparisons: ConceptComparison[] = [
  {
    id: 'auth-vs-authz',
    title: '認証 vs 認可',
    leftNodeId: 'authentication', rightNodeId: 'authorization',
    leftLabel: '認証 = bạn là ai', rightLabel: '認可 = bạn được phép làm gì',
    differenceVi: '認証 xác minh danh tính. 認可 quyết định quyền truy cập sau khi đã xác minh.',
    differenceJa: '認証は本人確認、認可は権限の付与です。',
    examTipVi: 'Nếu đề hỏi login/MFA → 認証. Nếu hỏi quyền đọc/sửa/xóa → 認可.',
    examTipJa: 'ログインやMFAは認証、アクセス権限は認可です。',
  },
  {
    id: 'symmetric-vs-public-key',
    title: '共通鍵暗号方式 vs 公開鍵暗号方式',
    leftNodeId: 'symmetric-key-encryption', rightNodeId: 'public-key-encryption',
    leftLabel: '共通鍵 = cùng một khóa', rightLabel: '公開鍵 = public/private key',
    differenceVi: 'Common key nhanh nhưng khó phân phối khóa. Public key chậm hơn nhưng giải quyết trao đổi khóa và dùng cho chữ ký số.',
    differenceJa: '共通鍵は高速ですが鍵配送問題があります。公開鍵は低速ですが鍵配送や電子署名に使えます。',
    examTipVi: 'Nếu đề nói “高速” thường là 共通鍵. Nếu nói “公開鍵/秘密鍵/電子署名” là 公開鍵.',
    examTipJa: '高速なら共通鍵、公開鍵・秘密鍵・電子署名なら公開鍵暗号方式です。',
  },
  {
    id: 'waterfall-vs-agile',
    title: 'ウォーターフォール vs アジャイル',
    leftNodeId: 'waterfall-model', rightNodeId: 'agile-development',
    leftLabel: 'Waterfall = tuần tự', rightLabel: 'Agile = lặp ngắn',
    differenceVi: 'Waterfall đi theo giai đoạn cố định. Agile chia nhỏ, làm lặp và phản hồi nhanh.',
    differenceJa: 'ウォーターフォールは工程を順番に進め、アジャイルは短い反復で改善します。',
    examTipVi: 'Yêu cầu ổn định → Waterfall. Yêu cầu thay đổi nhiều → Agile.',
    examTipJa: '要件が安定ならウォーターフォール、変化が多いならアジャイルです。',
  },
  {
    id: 'incident-vs-problem',
    title: 'インシデント管理 vs 問題管理',
    leftNodeId: 'incident-management', rightNodeId: 'problem-management',
    leftLabel: 'Incident = khôi phục nhanh', rightLabel: 'Problem = tìm nguyên nhân gốc',
    differenceVi: 'Incident tập trung phục hồi dịch vụ. Problem tập trung phân tích nguyên nhân và phòng tái phát.',
    differenceJa: 'インシデント管理はサービス復旧、問題管理は根本原因と再発防止です。',
    examTipVi: '“早期復旧” là incident. “根本原因/再発防止” là problem.',
    examTipJa: '早期復旧はインシデント、根本原因・再発防止は問題管理です。',
  },
  {
    id: 'iaas-paas-saas',
    title: 'IaaS vs PaaS vs SaaS',
    leftNodeId: 'infrastructure-as-a-service', rightNodeId: 'software-as-a-service',
    leftLabel: 'IaaS = hạ tầng', rightLabel: 'SaaS = ứng dụng',
    differenceVi: 'IaaS cung cấp server/storage/network. PaaS cung cấp nền tảng phát triển. SaaS cung cấp ứng dụng dùng ngay.',
    differenceJa: 'IaaSはインフラ、PaaSは開発基盤、SaaSはアプリケーションを提供します。',
    examTipVi: 'Server ảo → IaaS. Môi trường phát triển → PaaS. Gmail/Jira/app dùng ngay → SaaS.',
    examTipJa: '仮想サーバはIaaS、開発環境はPaaS、アプリ利用はSaaSです。',
  },
  {
    id: 'precision-vs-recall',
    title: '適合率 vs 再現率',
    leftNodeId: 'precision', rightNodeId: 'recall',
    leftLabel: 'Precision = dự đoán đúng trong số dự đoán positive', rightLabel: 'Recall = tìm được bao nhiêu positive thật',
    differenceVi: 'Precision chú trọng “dự đoán positive có đúng không”. Recall chú trọng “positive thật có bị bỏ sót không”.',
    differenceJa: '適合率は陽性予測の正しさ、再現率は実際の陽性をどれだけ見つけたかです。',
    examTipVi: 'Chống báo nhầm → precision. Không bỏ sót bệnh/gian lận → recall.',
    examTipJa: '誤検出を減らすなら適合率、見逃しを減らすなら再現率です。',
  },
];
