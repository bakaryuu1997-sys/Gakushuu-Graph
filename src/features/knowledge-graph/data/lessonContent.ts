export interface LessonContent {
  nodeId: string;
  shortDefinitionVi: string;
  shortDefinitionJa: string;
  whyImportantVi: string;
  whyImportantJa: string;
  examPatternsVi: string[];
  examPatternsJa: string[];
  commonMistakesVi: string[];
  commonMistakesJa: string[];
  memoryTipVi: string;
  memoryTipJa: string;
}

export const lessonContents: LessonContent[] = [
  {
    nodeId: 'it-passport',
    shortDefinitionVi: 'IT Passport là kỳ thi nền tảng để hiểu toàn cảnh IT: kinh doanh, quản lý dự án và công nghệ.',
    shortDefinitionJa: 'ITパスポートは、経営・マネジメント・テクノロジを広く確認する基礎試験です。',
    whyImportantVi: 'Đây là gốc của toàn bộ bản đồ. Nắm 3 nhóm Strategy / Management / Technology sẽ giúp bạn không học rời rạc.',
    whyImportantJa: '全体像の中心です。ストラテジ・マネジメント・テクノロジの3分野を押さえると理解しやすくなります。',
    examPatternsVi: ['Hỏi thuộc nhóm nào: Strategy / Management / Technology.', 'Hỏi ý nghĩa từ khóa tiếng Nhật trong bối cảnh công ty.', 'Hỏi ứng dụng thực tế của khái niệm IT.'],
    examPatternsJa: ['各用語がどの分野に属するか。', '企業活動の中での用語の意味。', 'IT用語の実務での使い方。'],
    commonMistakesVi: ['Chỉ học Technology mà bỏ Strategy/Management.', 'Nhớ từ khóa nhưng không hiểu ví dụ thực tế.'],
    commonMistakesJa: ['テクノロジだけを学び、ストラテジ・マネジメントを軽視する。', '用語だけ暗記して利用場面を理解しない。'],
    memoryTipVi: 'Nhớ công thức: IT Passport = Business + Management + Technology.',
    memoryTipJa: 'ITパスポート = 経営 + 管理 + 技術 と覚えます。',
  },
  {
    nodeId: 'security',
    shortDefinitionVi: 'Security là bảo vệ thông tin và hệ thống khỏi rò rỉ, sửa đổi trái phép, tấn công và gián đoạn.',
    shortDefinitionJa: 'セキュリティは、情報やシステムを漏えい・改ざん・攻撃・停止から守る考え方です。',
    whyImportantVi: 'Security là phần rất hay ra thi. Nhiều câu hỏi xoay quanh CIA, mã hóa, xác thực, malware và lỗ hổng web.',
    whyImportantJa: '頻出分野です。CIA、暗号化、認証、マルウェア、Web脆弱性がよく問われます。',
    examPatternsVi: ['Phân biệt 機密性・完全性・可用性.', 'Chọn biện pháp phòng chống phù hợp.', 'Nhận diện tấn công: phishing, SQL injection, XSS, CSRF.'],
    examPatternsJa: ['機密性・完全性・可用性の区別。', '適切な対策の選択。', 'フィッシング、SQLインジェクション、XSS、CSRFの識別。'],
    commonMistakesVi: ['Nhầm authentication với authorization.', 'Nhầm mã hóa với hash.', 'Chỉ nhớ tên tấn công nhưng không nhớ cách phòng chống.'],
    commonMistakesJa: ['認証と認可を混同する。', '暗号化とハッシュを混同する。', '攻撃名だけ覚えて対策を忘れる。'],
    memoryTipVi: 'Security học theo cặp: nguy cơ → ảnh hưởng → biện pháp.',
    memoryTipJa: 'セキュリティは「脅威 → 影響 → 対策」のセットで覚えます。',
  },
  {
    nodeId: 'cia',
    shortDefinitionVi: 'CIA là 3 yếu tố cơ bản của bảo mật: Confidentiality, Integrity, Availability.',
    shortDefinitionJa: 'CIAは情報セキュリティの三要素で、機密性・完全性・可用性を指します。',
    whyImportantVi: 'Đề thi rất hay hỏi ví dụ nào thuộc 機密性, 完全性 hoặc 可用性.',
    whyImportantJa: 'どの例が機密性・完全性・可用性に当たるかが頻出です。',
    examPatternsVi: ['機密性 = không cho người không có quyền xem.', '完全性 = dữ liệu không bị sửa sai.', '可用性 = cần là dùng được.'],
    examPatternsJa: ['機密性 = 権限のない人に見せない。', '完全性 = データが正しく保たれる。', '可用性 = 必要なときに使える。'],
    commonMistakesVi: ['Nhầm 完全性 với 可用性.', 'Thấy “backup” thì thường liên quan 可用性, nhưng cũng có thể hỗ trợ phục hồi dữ liệu.'],
    commonMistakesJa: ['完全性と可用性を混同する。', 'バックアップは主に可用性・復旧の文脈で考える。'],
    memoryTipVi: 'C = kín, I = nguyên vẹn, A = luôn dùng được.',
    memoryTipJa: 'Cは秘密、Iは正しさ、Aは使える状態。',
  },
  {
    nodeId: 'database',
    shortDefinitionVi: 'Database là nơi lưu và quản lý dữ liệu có cấu trúc để có thể tìm kiếm, cập nhật và bảo vệ dữ liệu.',
    shortDefinitionJa: 'データベースは、データを構造化して保存・検索・更新・保護する仕組みです。',
    whyImportantVi: 'Database thường ra SQL, khóa chính/ngoại, chuẩn hóa, transaction và ACID.',
    whyImportantJa: 'SQL、主キー・外部キー、正規化、トランザクション、ACIDがよく出ます。',
    examPatternsVi: ['SELECT/INSERT/UPDATE/DELETE.', '主キー định danh duy nhất.', '外部キー liên kết bảng.', 'ACID bảo đảm transaction.'],
    examPatternsJa: ['SELECT/INSERT/UPDATE/DELETEの役割。', '主キーは一意識別。', '外部キーは表の関連付け。', 'ACIDはトランザクションの性質。'],
    commonMistakesVi: ['Nhầm WHERE với GROUP BY.', 'Nhầm primary key với foreign key.', 'Quên transaction là all-or-nothing.'],
    commonMistakesJa: ['WHEREとGROUP BYを混同する。', '主キーと外部キーを混同する。', 'トランザクションのall-or-nothingを忘れる。'],
    memoryTipVi: 'Database học theo luồng: bảng → khóa → SQL → transaction.',
    memoryTipJa: 'DBは「表 → キー → SQL → トランザクション」の順で覚えます。',
  },
  {
    nodeId: 'network',
    shortDefinitionVi: 'Network là cách các máy tính kết nối và trao đổi dữ liệu bằng giao thức như TCP/IP, DNS, HTTP/HTTPS.',
    shortDefinitionJa: 'ネットワークは、TCP/IP、DNS、HTTP/HTTPSなどを使ってコンピュータ同士が通信する仕組みです。',
    whyImportantVi: 'Network hay ra câu phân biệt TCP/UDP, DNS, IP address, subnet, HTTPS, OSI/TCP-IP.',
    whyImportantJa: 'TCP/UDP、DNS、IPアドレス、サブネット、HTTPS、OSI/TCP-IPが頻出です。',
    examPatternsVi: ['DNS đổi domain thành IP.', 'TCP đáng tin cậy, UDP nhanh nhẹ.', 'HTTPS = HTTP + TLS.', 'Subnet dùng chia mạng.'],
    examPatternsJa: ['DNSはドメイン名をIPに変換。', 'TCPは信頼性、UDPは軽量。', 'HTTPS = HTTP + TLS。', 'サブネットはネットワーク分割。'],
    commonMistakesVi: ['Nhầm DNS với DHCP.', 'Nhầm HTTP với HTTPS.', 'Không phân biệt router và switch.'],
    commonMistakesJa: ['DNSとDHCPを混同する。', 'HTTPとHTTPSを混同する。', 'ルータとスイッチを区別できない。'],
    memoryTipVi: 'Network học theo chuỗi: tên miền → DNS → IP → TCP/UDP → HTTP/HTTPS.',
    memoryTipJa: 'ネットワークは「ドメイン → DNS → IP → TCP/UDP → HTTP/HTTPS」で覚えます。',
  },
  {
    nodeId: 'machine-learning',
    shortDefinitionVi: 'Machine Learning là phương pháp cho máy học quy luật từ dữ liệu để dự đoán hoặc phân loại.',
    shortDefinitionJa: '機械学習は、データから規則性を学び、予測や分類を行う方法です。',
    whyImportantVi: 'IT Passport gần đây hỏi nhiều về AI, ML, tiền xử lý, overfitting và mô hình cơ bản.',
    whyImportantJa: '近年はAI、機械学習、前処理、過学習、基本モデルがよく問われます。',
    examPatternsVi: ['AI ⊃ ML ⊃ DL.', 'Supervised learning dùng dữ liệu có nhãn.', 'Test data không dùng để training.', 'Preprocessing rất quan trọng.'],
    examPatternsJa: ['AI ⊃ 機械学習 ⊃ 深層学習。', '教師あり学習はラベル付きデータを使う。', 'テストデータを学習に使わない。', '前処理が重要。'],
    commonMistakesVi: ['Nhầm regression với classification.', 'Nhầm logistic regression với linear regression.', 'Nghĩ AI chỉ là ChatGPT.'],
    commonMistakesJa: ['回帰と分類を混同する。', 'ロジスティック回帰と線形回帰を混同する。', 'AIをChatGPTだけだと思う。'],
    memoryTipVi: 'ML = dữ liệu → học quy luật → dự đoán/phân loại.',
    memoryTipJa: '機械学習 = データ → 規則を学ぶ → 予測・分類。',
  },
  {
    nodeId: 'project-management',
    shortDefinitionVi: 'Project Management là quản lý phạm vi, thời gian, chi phí, chất lượng và rủi ro để hoàn thành dự án.',
    shortDefinitionJa: 'プロジェクトマネジメントは、範囲・時間・コスト・品質・リスクを管理して目的を達成する活動です。',
    whyImportantVi: 'Phần này hay hỏi WBS, Gantt chart, critical path, risk, stakeholder.',
    whyImportantJa: 'WBS、ガントチャート、クリティカルパス、リスク、ステークホルダが頻出です。',
    examPatternsVi: ['WBS = chia nhỏ công việc.', 'Gantt = biểu đồ lịch trình.', 'Critical path = đường quyết định thời gian dự án.', 'Risk = xác định, đánh giá, đối ứng.'],
    examPatternsJa: ['WBS = 作業分解。', 'ガントチャート = スケジュール可視化。', 'クリティカルパス = 全体期間を決める経路。', 'リスク = 識別・評価・対応。'],
    commonMistakesVi: ['Nhầm WBS với schedule.', 'Nhầm risk với issue đã xảy ra.', 'Không hiểu critical path ảnh hưởng deadline.'],
    commonMistakesJa: ['WBSとスケジュールを混同する。', 'リスクと発生済み問題を混同する。', 'クリティカルパスが納期に影響することを忘れる。'],
    memoryTipVi: 'PM học theo 5 câu: làm gì, khi nào, ai làm, rủi ro gì, xong chưa.',
    memoryTipJa: 'PMは「何を・いつ・誰が・リスク・完了確認」で覚えます。',
  },
  {
    nodeId: 'legal',
    shortDefinitionVi: 'Legal trong IT Passport gồm bản quyền, quyền sở hữu trí tuệ, bảo vệ thông tin cá nhân và luật truy cập trái phép.',
    shortDefinitionJa: '法務では、著作権、知的財産権、個人情報保護、不正アクセス禁止法などを扱います。',
    whyImportantVi: 'Đề thi hay hỏi quyền nào bảo vệ cái gì và hành vi nào là vi phạm.',
    whyImportantJa: 'どの権利が何を保護するか、どの行為が違反かがよく問われます。',
    examPatternsVi: ['著作権 bảo vệ tác phẩm được biểu hiện.', '特許権 bảo vệ phát minh kỹ thuật.', '商標権 bảo vệ dấu hiệu hàng hóa/dịch vụ.', '個人情報 cần quản lý đúng mục đích.'],
    examPatternsJa: ['著作権は表現を保護。', '特許権は技術的発明を保護。', '商標権は商品・サービスの標識を保護。', '個人情報は目的に沿って扱う。'],
    commonMistakesVi: ['Nhầm copyright với patent.', 'Nghĩ ý tưởng trừu tượng luôn được copyright bảo vệ.', 'Quên dữ liệu cá nhân cần mục đích sử dụng rõ ràng.'],
    commonMistakesJa: ['著作権と特許権を混同する。', '単なるアイデアが著作権で保護されると思う。', '個人情報の利用目的を忘れる。'],
    memoryTipVi: 'Legal học theo cặp: quyền → bảo vệ gì → ví dụ vi phạm.',
    memoryTipJa: '法務は「権利 → 保護対象 → 違反例」で覚えます。',
  },
];

export const getLessonContent = (nodeId: string): LessonContent | undefined => lessonContents.find((lesson) => lesson.nodeId === nodeId);
