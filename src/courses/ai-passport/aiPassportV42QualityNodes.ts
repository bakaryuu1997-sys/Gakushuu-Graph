import type { KnowledgeEdgeData, KnowledgeNodeData } from '../../features/knowledge-graph/types';

const node=(id:string,label:string,category:KnowledgeNodeData['category'],parent:string):KnowledgeNodeData=>({
  id, labelJa: label, labelVi: label, labelEn: label, category, level:'topic', importance:'high',
  summaryVi:`${label}: khái niệm AI Passport quan trọng, cần hiểu định nghĩa, ví dụ thực tế và rủi ro khi dùng AI trong doanh nghiệp.`,
  summaryJa:`${label} はAIパスポートの補足重要トピックです。`,
  examPointVi:'Hay ra trong câu hỏi tình huống: chọn cách xử lý an toàn, tránh nhầm với khái niệm gần giống và kiểm soát rủi ro.',
  examPointJa:'定義、利用場面、リスク、試験のひっかけを確認します。',
  examples:[], keywords:[label,id], prerequisites:[parent], related:[],
});

const specs = [
  ['accountability-ai','説明責任 / Accountability','security','ai-governance'],
  ['ai-ethics','AI倫理 / AI Ethics','security','ai-governance'],
  ['ai-literacy','AIリテラシー / AI Literacy','business','ai-project-flow'],
  ['annotation-ai','Annotation','database','data-quality'],
  ['audit-log-ai','監査ログ / Audit Log','security','ai-governance'],
  ['change-management-ai','Change Management','business','ai-project-flow'],
  ['classification-ai','分類 / Classification','ai','machine-learning-ai'],
  ['computer-vision-ai','Computer Vision','ai','ai-passport'],
  ['consent-ai','Consent','security','ai-governance'],
  ['content-filter-ai','Content Filter','security','ai-governance'],
  ['continuous-improvement-ai','継続改善 / Continuous Improvement','business','ai-project-flow'],
  ['copyright-training-data-ai','Copyright Training Data','security','ai-governance'],
  ['cost-management-ai','Cost Management','business','ai-project-flow'],
  ['data-minimization-ai','データ最小化 / Data Minimization','security','ai-governance'],
  ['data-retention-ai','Data Retention','security','ai-governance'],
  ['datasheet-ai','Dataset Datasheet','database','data-quality'],
  ['feedback-loop-ai','Feedback Loop','business','ai-project-flow'],
  ['guardrails-ai','Guardrails / 安全制御','security','ai-governance'],
  ['high-risk-ai','High-risk AI / 高リスクAI','security','ai-governance'],
  ['human-oversight-ai','Human Oversight / 人間の監督','ai','ai-passport'],
  ['incident-response-ai','AI Incident Response / 障害対応','security','ai-governance'],
  ['label-ai','Label','database','data-quality'],
  ['model-card-ai','Model Card / モデル説明書','ai','ai-passport'],
  ['normalization-ai','Normalization','database','data-quality'],
  ['ocr-ai','OCR / 文字認識','ai','ai-passport'],
  ['outlier-ai','Outlier','database','data-quality'],
  ['privacy-by-design-ai','Privacy by Design','security','ai-governance'],
  ['red-teaming-ai','AI Red Teaming','ai','ai-passport'],
  ['regression-ai','回帰 / Regression','ai','machine-learning-ai'],
  ['rollback-ai','切り戻し / Rollback Plan','security','ai-governance'],
  ['sampling-bias','Sampling Bias / 標本バイアス','database','data-quality'],
  ['shadow-ai','Shadow AI / 未承認AI利用','security','ai-governance'],
  ['temperature-ai','Temperature','ai','prompt-engineering'],
  ['terms-of-service-ai','利用規約 / Terms of Service','security','ai-governance'],
  ['transparency-ai','Transparency','security','ai-governance'],
  ['underfitting-ai','Underfitting / 学習不足','ai','machine-learning-ai'],
  ['vendor-risk-ai','ベンダーリスク / Vendor Risk','security','ai-governance'],
  ['workflow-integration-ai','Workflow Integration / 業務統合','business','ai-project-flow'],
] as const;

export const aiPassportV42QualityNodes: KnowledgeNodeData[] = specs.map(([id,label,category,parent]) => node(id,label,category,parent));
export const aiPassportV42QualityEdges: KnowledgeEdgeData[] = specs.map(([id,, ,parent]) => ({ id:`v42-${parent}-${id}`, source:parent, target:id, relation:'related_to', labelVi:'liên quan', labelJa:'関連' }));
