import type { LessonContent } from '../../features/knowledge-graph/data/lessonContent';
import { linuxNodes } from './nodes';
const lesson=(item:typeof linuxNodes[number]):LessonContent=>({
  nodeId:item.id,
  shortDefinitionVi:`${item.labelVi} là lệnh/khái niệm terminal dùng trong thao tác dự án, debug, deploy hoặc quản lý file/process.`,
  shortDefinitionJa:`${item.labelEn} はproject作業、debug、deployで使うterminal知識です。`,
  whyImportantVi:'Biết terminal giúp bạn tự xử lý lỗi, đọc log, chạy app, dùng Docker/Git và làm việc trên server.',
  whyImportantJa:'terminalを理解すると、log確認、app起動、Docker/Git、server作業ができます。',
  examPatternsVi:['Hỏi lệnh dùng để làm gì','Hỏi option nguy hiểm','Hỏi cách đọc log/process/file'],
  examPatternsJa:['用途','危険なoption','log/process/file確認'],
  commonMistakesVi:['Dùng rm -rf sai thư mục.','Không biết phân biệt path tương đối/tuyệt đối.','Chạy sudo khi chưa hiểu lệnh.'],
  commonMistakesJa:['rm -rfを誤用する。','相対path/絶対pathを混同する。','意味不明でsudoする。'],
  memoryTipVi:'Flow: di chuyển → xem file → tìm kiếm → permission → process/service → docker/git.',
  memoryTipJa:'移動 → file確認 → search → permission → process/service → docker/git',
});
export const linuxLessons=linuxNodes.map(lesson);
