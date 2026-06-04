import type { LessonContent } from '../../features/knowledge-graph/data/lessonContent';
import { pythonCatalog, type PythonCatalogItem } from './catalog';
import { findPythonV78RExampleForNode } from './v78rDeepExamples';

const codeExampleFor = (item: PythonCatalogItem) => {
  const label = item.labelEn || item.labelVi;
  if (/fastapi|api|route|pydantic|validation|http|endpoint/i.test(`${item.id} ${label}`)) {
    return 'Ví dụ code: tạo route /health trả {"ok": true}, thêm Pydantic schema, rồi test status code + JSON response.';
  }
  if (/class|oop|object|inherit|instance|method/i.test(`${item.id} ${label}`)) {
    return 'Ví dụ code: viết class User có __init__, method display_name(), tạo 2 instance và kiểm tra state không bị dùng chung.';
  }
  if (/algorithm|binary|sort|search|stack|queue|recursion|dp|graph|tree/i.test(`${item.id} ${label}`)) {
    return 'Ví dụ code: trace từng bước với input nhỏ, ghi biến trung gian, sau đó kiểm tra empty / one item / duplicate / boundary case.';
  }
  if (/list|dict|set|tuple|string|comprehension|data/i.test(`${item.id} ${label}`)) {
    return 'Ví dụ code: tạo collection nhỏ 3 phần tử, đọc/sửa/xóa, sau đó thử case rỗng và key/index không tồn tại.';
  }
  if (/test|debug|exception|error|logging|typing/i.test(`${item.id} ${label}`)) {
    return 'Ví dụ code: viết function nhỏ, thêm assert cho case đúng/sai, đọc traceback và sửa lỗi từ nguyên nhân gốc.';
  }
  if (/file|json|csv|path|io/i.test(`${item.id} ${label}`)) {
    return 'Ví dụ code: đọc dữ liệu mẫu, validate dữ liệu thiếu field, xử lý lỗi file không tồn tại và ghi output rõ ràng.';
  }
  return 'Ví dụ code: viết function 5-10 dòng, chạy với 3 input: bình thường, rỗng/0, và giá trị biên để kiểm tra hiểu thật.';
};

const pitfallFor = (item: PythonCatalogItem) => {
  const label = item.labelEn || item.labelVi;
  if (/fastapi|api|route|pydantic|validation|http|endpoint/i.test(`${item.id} ${label}`)) {
    return 'Bẫy FastAPI: nhầm query/path/body, quên response model, không test lỗi 422 và chỉ kiểm tra happy path.';
  }
  if (/class|oop|object|inherit|instance|method/i.test(`${item.id} ${label}`)) {
    return 'Bẫy OOP: dùng mutable default chung cho nhiều object, nhầm class variable với instance variable, quên self.';
  }
  if (/algorithm|binary|sort|search|stack|queue|recursion|dp|graph|tree/i.test(`${item.id} ${label}`)) {
    return 'Bẫy thuật toán: sai điều kiện dừng, lệch index, không xét duplicate, input rỗng hoặc độ phức tạp quá lớn.';
  }
  if (/dict|set/i.test(`${item.id} ${label}`)) return 'Bẫy dữ liệu: nhầm key với value, quên kiểm tra key tồn tại, và tưởng dict/set luôn giữ logic thứ tự như list.';
  if (/list|string|tuple/i.test(`${item.id} ${label}`)) return 'Bẫy sequence: lệch chỉ số 0-based, slice không bao gồm end, nhầm object mới với object bị mutate tại chỗ.';
  if (/exception|debug|test|typing/i.test(`${item.id} ${label}`)) return 'Bẫy QA: sửa cho hết lỗi trước mắt nhưng không thêm test tái hiện bug, nên lỗi quay lại ở case khác.';
  return `Bẫy thường gặp: hiểu ${label} ở mức tên gọi nhưng không tự trace output và không kiểm tra edge case.`;
};

const nextActionFor = (item: PythonCatalogItem) => {
  const label = item.labelEn || item.labelVi;
  if (item.phase === 'fastapi') return 'Bài tập tiếp theo: build 1 endpoint CRUD mini, test bằng browser/curl, rồi thêm validation lỗi.';
  if (item.phase === 'project') return 'Bài tập tiếp theo: biến kiến thức này thành 1 mini project có README, input/output và checklist hoàn thành.';
  if (item.phase === 'algorithm') return 'Bài tập tiếp theo: trace tay 1 ví dụ, viết code, đo Big-O và thêm 4 bộ kiểm tra biên.';
  return `Bài tập tiếp theo: tự viết lại ${label} không nhìn mẫu, giải thích bằng tiếng Việt/Nhật, rồi sửa 1 lỗi cố ý.`;
};

const enrich = (item: PythonCatalogItem): LessonContent => {
  const label = item.labelEn || item.labelVi;
  const example = codeExampleFor(item);
  const pitfall = pitfallFor(item);
  const nextAction = nextActionFor(item);
  const examples = item.examples.length ? `Ví dụ liên quan: ${item.examples.join(' / ')}.` : example;
  const deepExample = findPythonV78RExampleForNode(item.id);
  const deepExampleText = deepExample ? ` V78R thực chiến: ${deepExample.titleVi}. ${deepExample.scenarioVi} Trace: ${deepExample.traceVi.join(' → ')} Test nên có: ${deepExample.tests.join(' / ')}.` : '';

  return {
    nodeId: item.id,
    shortDefinitionVi: `${item.definitionVi} Nói ngắn gọn: ${label} cần được học bằng cách đọc code, tự viết code và kiểm chứng bằng test nhỏ.`,
    shortDefinitionJa: `${item.definitionJa} 要点: ${label}は、読む・書く・小さいtestで確認する流れで理解します。`,
    whyImportantVi: `${item.whyImportantVi} ${example} ${examples}${deepExampleText} ${nextAction}`,
    whyImportantJa: `${item.whyImportantJa} 小さい例で動作を予測し、edge caseをtestし、なぜその結果になるか説明できる状態を目指します。`,
    examPatternsVi: [
      ...item.examPatternsVi,
      `Code reading: nhìn ${label}, dự đoán output trước khi chạy.`,
      `Bug fixing: thêm bộ kiểm tra rỗng/biên/sai kiểu dữ liệu cho ${label}.`,
      ...(deepExample ? [`V78R trace/project: ${deepExample.scenarioVi}`] : []),
      nextAction,
    ].slice(0, 8),
    examPatternsJa: [
      ...item.examPatternsJa,
      `${label}を含む短いcodeを読み、実行前に出力を予測する。`,
      `空・境界値・型違いのcaseで${label}のbugを見つける。`,
    ].slice(0, 6),
    commonMistakesVi: [
      ...item.commonMistakesVi,
      pitfall,
      ...(deepExample ? deepExample.pitfallsVi : []),
      `Chưa đạt nếu chỉ copy được mẫu ${label}; cần tự đổi input, giải thích lỗi và viết test xác nhận.`,
    ].slice(0, 8),
    commonMistakesJa: [
      ...item.commonMistakesJa,
      `${label}のsampleをcopyするだけで、inputを変えたときの動きを確認しない。`,
      `traceせずに実行結果だけ見て理解したと思い込む。`,
    ].slice(0, 6),
    memoryTipVi: `${item.memoryTipVi} Công thức V78R: đọc → dự đoán → chạy → trace → test biên → ghi lại bẫy → đóng gói thành project nhỏ.`,
    memoryTipJa: `${item.memoryTipJa} V77Rの覚え方: 読む → 予測 → 実行 → trace → 境界test → 落とし穴を書く。`,
  };
};

export const pythonLessons: LessonContent[] = pythonCatalog.map(enrich);
