import type { LessonContent } from '../../features/knowledge-graph/data/lessonContent';
import { sqlDeepLessons } from './deepLessons';
import { sqlNodes } from './nodes';

const lesson = (item: typeof sqlNodes[number]): LessonContent => ({
  nodeId:item.id,
  shortDefinitionVi:`${item.labelVi} là khái niệm/lệnh SQL dùng để làm việc với dữ liệu trong cơ sở dữ liệu quan hệ.`,
  shortDefinitionJa:`${item.labelEn} はリレーショナルデータベースで使うSQLの重要項目です。`,
  whyImportantVi:'SQL là kỹ năng nền cho backend, data analysis, BrSE và kiểm tra dữ liệu dự án.',
  whyImportantJa:'SQLはbackend、data analysis、BrSEに必要な基礎スキルです。',
  examPatternsVi:['Hỏi ý nghĩa lệnh','Hỏi thứ tự viết câu SQL','Hỏi lỗi dễ nhầm khi JOIN/GROUP BY/HAVING'],
  examPatternsJa:['命令の意味','SQLの順序','JOIN/GROUP BY/HAVINGの注意点'],
  commonMistakesVi:['Nhầm WHERE và HAVING.','JOIN thiếu điều kiện gây dữ liệu nhân lên.','UPDATE/DELETE thiếu WHERE.'],
  commonMistakesJa:['WHEREとHAVINGを混同する。','JOIN条件不足。','UPDATE/DELETEでWHEREを忘れる。'],
  memoryTipVi:'Flow học: SELECT → WHERE → JOIN → GROUP BY → HAVING → INSERT/UPDATE/DELETE → TRANSACTION.',
  memoryTipJa:'SELECT → WHERE → JOIN → GROUP BY → HAVING → DML → TRANSACTION',
});

const generatedLessons = sqlNodes.map(lesson);
const deepIds = new Set(sqlDeepLessons.map((item) => item.nodeId));
export const sqlLessons = [...sqlDeepLessons, ...generatedLessons.filter((item) => !deepIds.has(item.nodeId))];
