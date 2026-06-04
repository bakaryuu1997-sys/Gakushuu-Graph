import type { LessonContent } from '../../features/knowledge-graph/data/lessonContent';
import { brseDeepLessons } from './deepLessons';
import { brseV35QualityLessons } from './v35QualityLessons';
import { brseNodes } from './nodes';

const lesson = (item: typeof brseNodes[number]): LessonContent => ({
  nodeId:item.id,
  shortDefinitionVi:`${item.labelVi} là kỹ năng BrSE dùng để làm rõ yêu cầu, truyền đạt chính xác và giảm nhận thức sai giữa khách hàng Nhật và team.`,
  shortDefinitionJa:`${item.labelJa} はBrSEが要件・仕様・進捗を正確に橋渡しするためのスキルです。`,
  whyImportantVi:'BrSE không chỉ dịch ngôn ngữ mà còn dịch nghiệp vụ, rủi ro, ưu tiên và quyết định.',
  whyImportantJa:'BrSEは言語だけでなく、業務・リスク・優先度・意思決定を橋渡しします。',
  examPatternsVi:['Hỏi output cần tạo','Hỏi cách xử lý khi yêu cầu mơ hồ','Hỏi cách báo cáo/rủi ro/仕様変更'],
  examPatternsJa:['成果物','曖昧な要件への対応','報告・リスク・仕様変更'],
  commonMistakesVi:['Dịch từng chữ nhưng không xác nhận ý nghĩa.','Không ghi lại quyết định trong議事録.','Không phân tích impact khi仕様変更.'],
  commonMistakesJa:['直訳だけで意味確認しない。','決定事項を議事録に残さない。','仕様変更時に影響調査しない。'],
  memoryTipVi:'BrSE flow: nghe hiểu → hỏi rõ → ghi lại → xác nhận → truyền đạt → theo dõi.',
  memoryTipJa:'理解 → 質問 → 記録 → 確認 → 共有 → フォロー',
});

const generatedLessons = brseNodes.map(lesson);
const uniqueDeepLessons = Array.from(new Map([...brseV35QualityLessons, ...brseDeepLessons].map((item) => [item.nodeId, item])).values());
const deepIds = new Set(uniqueDeepLessons.map((item) => item.nodeId));
export const brseLessons = [...uniqueDeepLessons, ...generatedLessons.filter((item) => !deepIds.has(item.nodeId))];
