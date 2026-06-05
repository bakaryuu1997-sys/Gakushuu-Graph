import type { LessonContent } from '../../features/knowledge-graph/data/lessonContent';
import type { KnowledgeNodeData } from '../../features/knowledge-graph/types';
import { aiPassportNodes } from './aiPassportGraph';
import { aiSupplementalNodes } from './aiPassportSupplemental';
import { aiExpandedNodes } from './domain/expanded';



const topicGuide = (node: KnowledgeNodeData) => {
  const text = `${node.id} ${node.keywords.join(' ')} ${node.labelEn}`.toLowerCase();
  if (text.includes('privacy') || text.includes('personal') || text.includes('個人情報')) return {
    vi: 'Khi gặp dữ liệu cá nhân, hãy nghĩ đến mục đích sử dụng, sự đồng ý, giới hạn chia sẻ và cách bảo vệ dữ liệu. Trong đề thi, đáp án đúng thường là phương án giảm rủi ro và tôn trọng quyền riêng tư.',
    ja: '個人情報では、利用目的、同意、共有範囲、保護方法を考えます。試験ではリスクを下げ、プライバシーを尊重する選択肢が重要です。',
    patternVi: ['Chọn cách xử lý dữ liệu cá nhân an toàn.', 'Không nhập thông tin nhạy cảm vào AI công cộng.', 'Ẩn danh hoặc giảm dữ liệu khi có thể.'],
    patternJa: ['個人情報を安全に扱う選択肢。', '公開AIに機密・個人情報を入力しない。', '匿名化・最小化を行う。'],
    mistakeVi: ['Nghĩ dữ liệu đã có trong công ty thì dùng AI thế nào cũng được.', 'Không xác định mục đích sử dụng dữ liệu.'],
    mistakeJa: ['社内データなら自由にAIへ入力できると考える。', '利用目的を確認しない。'],
    tipVi: 'Privacy = mục đích rõ + dữ liệu tối thiểu + bảo vệ + trách nhiệm.',
    tipJa: 'プライバシー = 目的明確 + 最小限 + 保護 + 責任。',
  };
  if (text.includes('copyright') || text.includes('著作権')) return {
    vi: 'Bản quyền trong AI liên quan đến dữ liệu dùng để học, prompt đầu vào và nội dung AI tạo ra. Cần kiểm tra quyền sử dụng, trích dẫn nguồn khi cần và tránh dùng output có nguy cơ xâm phạm.',
    ja: 'AIと著作権では、学習データ、入力、生成物の権利確認が重要です。利用権、出典、侵害リスクを確認します。',
    patternVi: ['Hỏi có được dùng output AI cho thương mại không.', 'Hỏi dữ liệu học có liên quan bản quyền không.', 'Hỏi cách dùng AI an toàn trong công ty.'],
    patternJa: ['生成物の商用利用可否。', '学習データと著作権。', '企業での安全な利用方法。'],
    mistakeVi: ['Nghĩ AI tạo ra thì luôn tự do dùng.', 'Không kiểm tra quyền của dữ liệu đầu vào.'],
    mistakeJa: ['AIが作れば自由に使えると思う。', '入力データの権利を確認しない。'],
    tipVi: 'Copyright = “AI tạo ra” không có nghĩa là “luôn được dùng tự do”.',
    tipJa: '著作権 = AI生成物でも自由利用とは限らない。',
  };
  if (text.includes('hallucination') || text.includes('bias') || text.includes('deepfake') || text.includes('risk')) return {
    vi: 'Đây là nhóm rủi ro AI. Khi học, hãy nhớ không chỉ định nghĩa mà cả biện pháp giảm rủi ro: kiểm chứng nguồn, human review, guideline nội bộ và giới hạn phạm vi sử dụng.',
    ja: 'これはAIリスクの分野です。定義だけでなく、出典確認、人間の確認、社内ルール、利用範囲の制限をセットで覚えます。',
    patternVi: ['Nhận diện rủi ro trong tình huống thực tế.', 'Chọn biện pháp giảm rủi ro phù hợp.', 'Phân biệt hallucination, bias, deepfake.'],
    patternJa: ['実務場面でリスクを識別する。', '適切な対策を選ぶ。', 'ハルシネーション、バイアス、ディープフェイクを区別する。'],
    mistakeVi: ['Chỉ nhớ tên rủi ro mà không nhớ cách phòng tránh.', 'Tin AI output mà không kiểm chứng.'],
    mistakeJa: ['リスク名だけ覚えて対策を忘れる。', 'AI出力を確認せず信じる。'],
    tipVi: 'AI risk = sai thông tin, thiên lệch, giả mạo, lộ dữ liệu → cần kiểm soát.',
    tipJa: 'AIリスク = 誤情報・偏り・偽造・漏えい → 管理が必要。',
  };
  if (text.includes('llm') || text.includes('prompt') || text.includes('rag') || text.includes('生成') || text.includes('generative')) return {
    vi: 'Generative AI tạo nội dung mới dựa trên dữ liệu và prompt. Phần thi thường hỏi cách dùng đúng: prompt rõ, không nhập bí mật, kiểm chứng output và dùng RAG khi cần căn cứ từ tài liệu.',
    ja: '生成AIはデータとプロンプトから新しい内容を作ります。明確な指示、機密入力の回避、出力確認、RAGの活用が問われます。',
    patternVi: ['Prompt như thế nào là tốt.', 'RAG giúp giảm hallucination thế nào.', 'Khi nào cần kiểm chứng output.'],
    patternJa: ['良いプロンプトの条件。', 'RAGがハルシネーション低減に役立つ理由。', '出力確認が必要な場面。'],
    mistakeVi: ['Nghĩ prompt càng dài càng tốt.', 'Không phân biệt LLM và toàn bộ AI.', 'Dùng AI output như sự thật tuyệt đối.'],
    mistakeJa: ['長いプロンプトなら良いと思う。', 'LLMとAI全体を混同する。', 'AI出力を絶対視する。'],
    tipVi: 'GenAI = chỉ dẫn rõ → tạo nội dung → kiểm chứng → dùng có trách nhiệm.',
    tipJa: '生成AI = 明確な指示 → 生成 → 確認 → 責任ある利用。',
  };
  if (text.includes('regression') || text.includes('classification') || text.includes('supervised') || text.includes('unsupervised') || text.includes('evaluation') || text.includes('overfitting') || text.includes('machine')) return {
    vi: 'Đây là kiến thức Machine Learning nền tảng. Hãy học theo logic: dữ liệu có nhãn hay không, mục tiêu là dự đoán số hay phân loại, đánh giá bằng chỉ số nào và có bị overfitting không.',
    ja: '機械学習の基礎です。ラベルの有無、数値予測か分類か、評価指標、過学習の有無をセットで学びます。',
    patternVi: ['Phân biệt supervised / unsupervised.', 'Phân biệt regression / classification.', 'Chọn metric phù hợp.', 'Nhận diện overfitting.'],
    patternJa: ['教師あり・教師なしの区別。', '回帰・分類の区別。', '適切な評価指標。', '過学習の識別。'],
    mistakeVi: ['Nhầm clustering với classification.', 'Dùng test data để train.', 'Chỉ nhìn accuracy khi dữ liệu mất cân bằng.'],
    mistakeJa: ['クラスタリングと分類を混同する。', 'テストデータを学習に使う。', '不均衡データでAccuracyだけを見る。'],
    tipVi: 'ML = dữ liệu → học quy luật → dự đoán/phân loại → đánh giá.',
    tipJa: 'ML = データ → 規則性学習 → 予測/分類 → 評価。',
  };
  if (text.includes('cnn') || text.includes('rnn') || text.includes('transformer') || text.includes('neural') || text.includes('deep')) return {
    vi: 'Deep Learning dùng mạng nơ-ron nhiều lớp để học đặc trưng phức tạp. Cần nhớ CNN mạnh với ảnh, RNN xử lý chuỗi, Transformer mạnh với ngôn ngữ và mô hình hiện đại.',
    ja: '深層学習は多層ニューラルネットで複雑な特徴を学びます。CNNは画像、RNNは系列、Transformerは言語や現代AIで重要です。',
    patternVi: ['CNN dùng cho ảnh.', 'RNN dùng cho chuỗi/thời gian.', 'Transformer dùng attention và rất quan trọng trong LLM.'],
    patternJa: ['CNNは画像。', 'RNNは系列データ。', 'TransformerはAttentionを用いLLMで重要。'],
    mistakeVi: ['Nhầm RNN với CNN.', 'Nghĩ Deep Learning luôn tốt hơn mọi thuật toán.', 'Không hiểu Transformer liên quan LLM.'],
    mistakeJa: ['RNNとCNNを混同する。', '深層学習が常に最適と思う。', 'TransformerとLLMの関係を理解しない。'],
    tipVi: 'CNN = nhìn ảnh, RNN = đọc chuỗi, Transformer = chú ý ngữ cảnh.',
    tipJa: 'CNN=画像、RNN=系列、Transformer=文脈への注意。',
  };
  if (text.includes('business') || text.includes('roi') || text.includes('governance') || text.includes('project') || node.category === 'business') return {
    vi: 'AI trong doanh nghiệp phải bắt đầu từ vấn đề thật, dữ liệu có sẵn, lợi ích đo được và rủi ro chấp nhận được. Đề thi thường hỏi phương án triển khai thực tế, không phải chọn thuật toán đẹp nhất.',
    ja: 'ビジネスAIは、課題、利用可能なデータ、測定可能な効果、許容リスクから考えます。試験では実務的な導入判断が問われます。',
    patternVi: ['Xác định mục tiêu trước model.', 'Đo ROI/KPI.', 'Có governance và người chịu trách nhiệm.', 'Theo dõi sau triển khai.'],
    patternJa: ['モデルより先に目的を決める。', 'ROI/KPIを測る。', 'ガバナンスと責任者を明確にする。', '導入後も監視する。'],
    mistakeVi: ['Dùng AI vì đang hot.', 'Không đo hiệu quả.', 'Không chuẩn bị vận hành sau PoC.'],
    mistakeJa: ['流行だからAIを使う。', '効果測定をしない。', 'PoC後の運用を考えない。'],
    tipVi: 'Business AI = mục tiêu + dữ liệu + hiệu quả + rủi ro + vận hành.',
    tipJa: 'ビジネスAI = 目的 + データ + 効果 + リスク + 運用。',
  };
  return {
    vi: 'Đây là một khái niệm trong AI Passport. Hãy học theo 4 điểm: nó là gì, dùng trong tình huống nào, rủi ro hoặc điểm dễ nhầm là gì, và trong đề thi thường hỏi theo dạng nào.',
    ja: 'AIパスポートの重要用語です。意味、利用場面、リスクや混同点、試験での問われ方をセットで学びます。',
    patternVi: ['Hỏi định nghĩa đúng.', 'Hỏi ví dụ sử dụng phù hợp.', 'Hỏi rủi ro hoặc điểm cần chú ý.'],
    patternJa: ['正しい定義を選ぶ。', '適切な利用例を選ぶ。', 'リスクや注意点を選ぶ。'],
    mistakeVi: ['Chỉ học thuộc tên tiếng Nhật mà không hiểu ví dụ.', 'Không liên hệ với các node gần giống.'],
    mistakeJa: ['用語名だけ暗記する。', '関連概念との違いを理解しない。'],
    tipVi: 'Học theo công thức: nghĩa → ví dụ → dễ nhầm → cách dùng trong đề.',
    tipJa: '意味 → 例 → 混同点 → 試験での使われ方。',
  };
};

let cachedLessons: LessonContent[] | null = null;
export function getAiPassportUniversalLessons(): LessonContent[] {
  if (cachedLessons) return cachedLessons;
  const allAiNodes: KnowledgeNodeData[] = [...aiPassportNodes, ...aiSupplementalNodes, ...aiExpandedNodes];
  cachedLessons = allAiNodes.map((node) => {
    const guide = topicGuide(node);
    return {
      nodeId: node.id,
      shortDefinitionVi: `${node.labelVi}: ${node.summaryVi} ${guide.vi}`,
      shortDefinitionJa: `${node.labelJa}: ${node.summaryJa} ${guide.ja}`,
      whyImportantVi: `${node.examPointVi} AI Passport thường không chỉ hỏi nghĩa từ, mà hỏi bạn chọn cách dùng đúng trong tình huống thực tế.`,
      whyImportantJa: `${node.examPointJa} AIパスポートでは、用語の意味だけでなく実務での適切な判断も問われます。`,
      examPatternsVi: guide.patternVi,
      examPatternsJa: guide.patternJa,
      commonMistakesVi: guide.mistakeVi,
      commonMistakesJa: guide.mistakeJa,
      memoryTipVi: guide.tipVi,
      memoryTipJa: guide.tipJa,
    };
  });
  return cachedLessons;
}
