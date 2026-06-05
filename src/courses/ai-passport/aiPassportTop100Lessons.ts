import type { LessonContent } from '../../features/knowledge-graph/data/lessonContent';
import type { KnowledgeNodeData } from '../../features/knowledge-graph/types';
import { aiPassportNodes } from './aiPassportGraph';
import { aiSupplementalNodes } from './aiPassportSupplemental';
import { aiExpandedNodes } from './domain/expanded';



const highPriorityIds = new Set([
  'ai-passport','ai','machine-learning-ai','deep-learning-ai','supervised-ai','unsupervised-ai','reinforcement-learning','linear-regression-ai','logistic-regression-ai','classification-ai','regression-ai','decision-tree-ai','svm-ai','neural-network-ai','cnn-ai','rnn-ai','transformer-ai','generative-ai','llm-ai','prompt-engineering-ai','hallucination-ai','rag-ai','embedding-ai','vector-database-ai','fine-tuning-ai','foundation-model-ai','multimodal-ai','deepfake-ai','data-preprocessing-ai','train-test-data-ai','validation-data-ai','overfitting-ai','underfitting-ai','bias-variance-ai','confusion-matrix-ai','precision-recall-ai','accuracy-ai','f1-score-ai','auc-ai','clustering-ai','pca-ai','feature-engineering-ai','normalization-ai','standardization-ai','missing-values-ai','data-leakage-ai','personal-information-ai','copyright-ai','privacy-ai','bias-fairness-ai','explainable-ai','human-in-the-loop-ai','ai-governance-ai','ai-risk-management-ai','ai-project-flow','ai-business-use','ai-roi','kpi-kgi-ai','model-drift-ai','monitoring-ai','prompt-injection-ai','ai-security-ai','model-stealing-ai','adversarial-example-ai','data-augmentation-ai','anonymization-ai','pseudonymization-ai','opt-in-ai','opt-out-ai','consent-ai','gdpr-ai','personal-information-protection-law-ai','trade-secret-ai','terms-of-use-ai','ai-ethics-guidelines-ai','transparency-ai','accountability-ai','fairness-ai','robustness-ai','safety-ai','reliability-ai','chatbot-ai','recommendation-ai','fraud-detection-ai','demand-forecasting-ai','ocr-ai','speech-recognition-ai','nlp-ai','computer-vision-ai','sentiment-analysis-ai','summarization-ai','translation-ai','classification-metrics-ai','regression-metrics-ai','mae-ai','rmse-ai','r-squared-ai','cloud-ai','edge-ai','api-ai','dataset-ai','label-ai','annotation-ai','sampling-ai','class-imbalance-ai','cross-validation-ai','test-data-ai','training-data-ai'
]);

const categoryGuides: Record<string, { why: string; pattern: string; mistake: string; tip: string }> = {
  ai: {
    why: 'Đây là nhóm kiến thức xuất hiện nhiều trong AI Passport vì đề thường hỏi định nghĩa, ví dụ ứng dụng, rủi ro và cách chọn phương pháp phù hợp.',
    pattern: 'Đề hay đưa một tình huống rồi hỏi khái niệm nào đúng nhất hoặc biện pháp nào phù hợp nhất.',
    mistake: 'Lỗi thường gặp là học thuộc tên tiếng Nhật nhưng không phân biệt được “dùng để làm gì” và “không nên dùng khi nào”.',
    tip: 'Luôn học theo cặp: ý nghĩa → ví dụ → rủi ro → biện pháp.'
  },
  business: {
    why: 'AI trong doanh nghiệp không chỉ là chọn model, mà còn phải gắn với mục tiêu kinh doanh, KPI, chi phí, vận hành và trách nhiệm.',
    pattern: 'Đề thường hỏi bước đầu tiên của dự án AI, cách đánh giá ROI/KPI hoặc điểm cần chú ý khi đưa AI vào nghiệp vụ.',
    mistake: 'Sai lầm lớn là bắt đầu từ công cụ/model trước khi xác định vấn đề kinh doanh và dữ liệu có thể dùng.',
    tip: 'Business AI = problem → data → model → operation → measure.'
  },
  security: {
    why: 'AI có thể tạo rủi ro bảo mật mới như rò rỉ dữ liệu, prompt injection, model stealing và deepfake.',
    pattern: 'Đề hay hỏi rủi ro nào xảy ra trong tình huống sử dụng AI và biện pháp giảm thiểu nào phù hợp.',
    mistake: 'Đừng chỉ nghĩ security là password. Với AI, dữ liệu đầu vào, output, model và quyền sử dụng đều cần kiểm soát.',
    tip: 'Security = threat → impact → control.'
  },
  technology: {
    why: 'Các khái niệm kỹ thuật là nền để hiểu vì sao AI hoạt động, vì sao lỗi xảy ra và nên chọn mô hình/đánh giá như thế nào.',
    pattern: 'Đề thường hỏi phân biệt regression/classification, supervised/unsupervised, overfitting/underfitting, metric phù hợp.',
    mistake: 'Đừng học công thức quá sâu; hãy nhớ mục đích, output và ví dụ thực tế.',
    tip: 'Kỹ thuật AI học bằng 3 câu: input là gì, output là gì, dùng khi nào.'
  },
  management: {
    why: 'AI project cần quản lý dữ liệu, chất lượng, rủi ro, vận hành và stakeholder, nên nhóm này hay liên quan business/governance.',
    pattern: 'Đề hỏi quy trình triển khai AI, kiểm soát chất lượng hoặc xử lý khi model giảm hiệu quả sau triển khai.',
    mistake: 'Nghĩ model học xong là kết thúc. Thực tế cần monitoring, cập nhật dữ liệu và đánh giá liên tục.',
    tip: 'AI operation = deploy → monitor → improve.'
  },
  strategy: {
    why: 'Chiến lược giúp chọn đúng use case AI và tránh làm AI chỉ vì xu hướng.',
    pattern: 'Đề hỏi cách đưa AI vào chiến lược kinh doanh, đánh giá hiệu quả và kiểm soát rủi ro.',
    mistake: 'Không liên kết AI với mục tiêu doanh nghiệp, khách hàng hoặc quy trình thật.',
    tip: 'Strategy AI = mục tiêu rõ + dữ liệu đúng + hiệu quả đo được.'
  },
  database: {
    why: 'AI phụ thuộc dữ liệu. Hiểu lưu trữ, chất lượng dữ liệu và truy xuất dữ liệu giúp tránh sai lệch khi học/triển khai model.',
    pattern: 'Đề hỏi dữ liệu nào nên dùng, dữ liệu cần xử lý ra sao hoặc vì sao dữ liệu kém làm model kém.',
    mistake: 'Nghĩ nhiều dữ liệu luôn tốt. Dữ liệu sai, lệch hoặc vi phạm quyền riêng tư có thể làm kết quả nguy hiểm.',
    tip: 'Data first: sạch, đúng, đủ, hợp pháp.'
  },
  software: {
    why: 'AI thường được tích hợp vào ứng dụng qua API, workflow hoặc hệ thống có sẵn, nên cần hiểu vận hành phần mềm cơ bản.',
    pattern: 'Đề hỏi cách tích hợp AI an toàn, kiểm thử, log, monitoring hoặc fallback khi AI trả lời sai.',
    mistake: 'Tin AI output tuyệt đối và không thiết kế kiểm tra/fallback.',
    tip: 'AI feature = UX + guardrail + monitoring.'
  }
};

const guideFor = (node: KnowledgeNodeData) => categoryGuides[node.category] ?? categoryGuides.ai;

const makeLesson = (node: KnowledgeNodeData): LessonContent => {
  const guide = guideFor(node);
  const examples = node.examples.length > 0 ? node.examples.slice(0, 3).join(' / ') : 'ví dụ thực tế trong doanh nghiệp, giáo dục, y tế, tài chính hoặc dịch vụ khách hàng';
  const keywords = node.keywords.length > 0 ? node.keywords.slice(0, 5).join(', ') : node.labelJa;
  return {
    nodeId: node.id,
    shortDefinitionVi: `${node.labelJa} (${node.labelVi}) là một khái niệm quan trọng trong AI Passport. Hiểu đơn giản: ${node.summaryVi} Khi học node này, hãy chú ý nó thuộc nhóm nào, dùng trong tình huống nào và dễ nhầm với khái niệm nào.`,
    shortDefinitionJa: `${node.labelJa} はAIパスポートで重要な用語です。意味だけでなく、利用場面、リスク、対策をセットで理解します。`,
    whyImportantVi: `${guide.why} Với ${node.labelVi}, điểm thi thường không yêu cầu công thức sâu mà yêu cầu chọn đúng khái niệm trong ngữ cảnh. Ví dụ nên nhớ: ${examples}.`,
    whyImportantJa: `試験では、${node.labelJa} の定義、利用例、注意点、関連リスクが問われます。用語だけでなく、具体的な場面で判断できることが大切です。`,
    examPatternsVi: [
      guide.pattern,
      `Từ khóa nên nhận ra: ${keywords}.`,
      `Câu hỏi có thể hỏi “ví dụ nào đúng”, “rủi ro nào đúng”, hoặc “biện pháp nào phù hợp” với ${node.labelVi}.`,
      `Nếu xuất hiện tình huống gần với: ${node.examPointVi}, hãy nghĩ đến node này.`
    ],
    examPatternsJa: [
      '定義を選ぶ問題。',
      '正しい利用例を選ぶ問題。',
      'リスクと対策を選ぶ問題。',
      '似た用語との違いを問う問題。'
    ],
    commonMistakesVi: [
      guide.mistake,
      `Chỉ nhớ ${node.labelJa} bằng tiếng Nhật nhưng không nhớ ví dụ thực tế.`,
      `Không phân biệt node này với các node liên quan: ${node.related.slice(0, 3).join(', ') || 'khái niệm gần nghĩa'}.`
    ],
    commonMistakesJa: [
      '用語名だけ暗記して具体例を理解しない。',
      '似た概念との違いを確認しない。',
      'リスクと対策をセットで覚えない。'
    ],
    memoryTipVi: `${guide.tip} Riêng với ${node.labelVi}, hãy nhớ: ${node.examPointVi}`,
    memoryTipJa: '目的 → 例 → リスク → 対策 の順で覚えると、試験で判断しやすくなります。'
  };
};

let cachedLessons: LessonContent[] | null = null;
export function getAiPassportTop100Lessons(): LessonContent[] {
  if (cachedLessons) return cachedLessons;
  const allAiNodes = [...aiPassportNodes, ...aiSupplementalNodes, ...aiExpandedNodes];
  cachedLessons = allAiNodes
    .filter((node) => node.importance === 'high' || highPriorityIds.has(node.id))
    .slice(0, 140)
    .map(makeLesson);
  return cachedLessons;
}
