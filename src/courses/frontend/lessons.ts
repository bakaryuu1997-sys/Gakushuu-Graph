import type { LessonContent } from '../../features/knowledge-graph/data/lessonContent';
import { frontendNodes } from './nodes';

const lesson = (item: typeof frontendNodes[number]): LessonContent => ({
  nodeId:item.id,
  shortDefinitionVi:`${item.labelVi} là phần quan trọng trong Frontend roadmap; cần hiểu khái niệm, vai trò, ví dụ và lỗi thường gặp khi build UI.`,
  shortDefinitionJa:`${item.labelEn} はFrontend roadmapの重要項目です。`,
  whyImportantVi:'Đây là kiến thức nền để build app web thật bằng React/TypeScript.',
  whyImportantJa:'React/TypeScriptで実務アプリを作るための土台です。',
  examPatternsVi:['Hỏi vai trò','Hỏi ví dụ đúng','Hỏi lỗi dễ nhầm'],
  examPatternsJa:['役割','正しい例','注意点'],
  commonMistakesVi:['Chỉ nhớ tên nhưng không hiểu dùng lúc nào.','Nhảy vào framework khi chưa chắc nền tảng.'],
  commonMistakesJa:['名前だけ覚える','基礎なしでframeworkへ進む'],
  memoryTipVi:'Học bằng project nhỏ: UI tĩnh → tương tác → API → test → deploy.',
  memoryTipJa:'UI → interaction → API → test → deploy の順で覚えます。',
});

export const frontendLessons = frontendNodes.map(lesson);
