import type { CourseConfig } from './types';
import type { LessonContent } from '../features/knowledge-graph/data/lessonContent';
import type { KnowledgeNodeData } from '../features/knowledge-graph/types';

const join = (items: string[]) => items.filter(Boolean).join(' ');

function courseLabel(course: CourseConfig) {
  if (course.id === 'python') return 'Python';
  if (course.id === 'fundamental-info') return '基本情報';
  if (course.id === 'ai-passport') return 'AI Passport';
  return course.titleVi || course.title;
}

function practiceFrame(course: CourseConfig, node: KnowledgeNodeData) {
  const label = node.labelVi || node.labelEn || node.labelJa;
  if (course.id === 'python') {
    if (/fastapi|api|route|endpoint|pydantic|request|response/i.test(join([node.id, label, node.keywords.join(' ')]))) {
      return {
        concrete: `Tạo một route local nhỏ dùng ${label}: xác định input schema, response JSON, status code đúng và một case lỗi rõ ràng.`,
        trace: `Trace request → validation → service function → response. Ghi lại biến input, output và lỗi HTTP nếu có.`,
        output: `Expected output nên có JSON mẫu, ví dụ {"ok": true}, {"error": "..."} hoặc list object ngắn.`,
      };
    }
    if (/class|oop|object|inherit|method|property|dataclass/i.test(join([node.id, label, node.keywords.join(' ')]))) {
      return {
        concrete: `Viết class nhỏ cho ${label}: __init__, method chính, 2 object khác state, và một invariant không được phá.`,
        trace: `Trace object state sau từng method call. So sánh instance variable và class/shared state.`,
        output: `Expected output nên in ra state trước/sau, kèm assert cho case hợp lệ và case sai.`,
      };
    }
    if (/list|dict|set|tuple|string|array|collection|comprehension/i.test(join([node.id, label, node.keywords.join(' ')]))) {
      return {
        concrete: `Tạo dữ liệu 3-5 phần tử cho ${label}, đọc/sửa/lọc/group và thử thêm input rỗng hoặc duplicate.`,
        trace: `Trace từng vòng lặp: item hiện tại, accumulator/result hiện tại và điều kiện update.`,
        output: `Expected output nên là list/dict rõ ràng, ví dụ {"a": 2} hoặc ["passed", "failed"].`,
      };
    }
    if (/algorithm|sort|search|stack|queue|recursion|dp|graph|tree|binary|complexity/i.test(join([node.id, label, node.keywords.join(' ')]))) {
      return {
        concrete: `Giải một input nhỏ bằng ${label}, sau đó viết bảng trace: step, biến chính, điều kiện, kết quả tạm.`,
        trace: `Không chạy ngay. Dự đoán output trước, rồi đối chiếu với code và thêm edge case empty/one item.`,
        output: `Expected output nên có đáp án cuối và bảng biến trung gian để biết sai ở bước nào.`,
      };
    }
    if (/file|csv|json|path|io|logging|exception|pytest|test|debug|typing/i.test(join([node.id, label, node.keywords.join(' ')]))) {
      return {
        concrete: `Viết function local dùng ${label}, có input hợp lệ, input lỗi và test nhỏ kiểm tra hành vi.`,
        trace: `Trace boundary: dữ liệu thiếu field, file không tồn tại, type sai, và thông báo lỗi nên trả về.`,
        output: `Expected output nên có return value rõ, exception/log rõ, và test pass/fail dễ đọc.`,
      };
    }
    return {
      concrete: `Viết ví dụ code 5-10 dòng cho ${label}, chạy với 3 input: bình thường, rỗng/0 và giá trị biên.`,
      trace: `Đọc code theo thứ tự: input → biến trung gian → nhánh if/loop → output. Ghi lại trước khi chạy.`,
      output: `Expected output phải được viết ra trước khi bấm Run để tránh học kiểu đoán mò.`,
    };
  }

  if (course.id === 'fundamental-info') {
    if (/sql|database|table|join|group|where|having/i.test(join([node.id, label, node.keywords.join(' ')]))) {
      return {
        concrete: `Làm một câu SQL mini về ${label}: xác định bảng gốc, điều kiện lọc, JOIN/GROUP BY và kết quả từng bước.`,
        trace: `Trace theo thứ tự FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.`,
        output: `Expected output nên là bảng 2-4 dòng, đủ để thấy vì sao đáp án đúng.`,
      };
    }
    if (/algorithm|array|stack|queue|recursion|dp|graph|trace|pseudo/i.test(join([node.id, label, node.keywords.join(' ')]))) {
      return {
        concrete: `Luyện 科目B với ${label}: đọc pseudo-code, tạo bảng trace biến, không nhảy thẳng tới đáp án.`,
        trace: `Trace từng vòng lặp/call stack: i, value, accumulator, condition, return value.`,
        output: `Expected output nên ghi cả đáp án cuối và dòng trace gây bẫy.`,
      };
    }
    if (/security|auth|risk|log|incident|access/i.test(join([node.id, label, node.keywords.join(' ')]))) {
      return {
        concrete: `Đọc scenario security về ${label}: actor, quyền, tài sản bị ảnh hưởng, log thời gian và biện pháp đầu tiên.`,
        trace: `Trace timeline: sự kiện trước → dấu hiệu bất thường → impact → control phù hợp.`,
        output: `Expected answer phải giải thích vì sao chọn control đó, không chỉ nhớ tên thuật ngữ.`,
      };
    }
    return {
      concrete: `Tạo một câu mini FE về ${label}: định nghĩa, ví dụ thực tế, bẫy đáp án gần giống và cách loại trừ.`,
      trace: `Đọc đề theo keyword tiếng Nhật/Anh, xác định domain, rồi so sánh 2 lựa chọn dễ nhầm.`,
      output: `Expected answer nên có lý do chọn và lý do loại ít nhất một đáp án sai.`,
    };
  }

  if (course.id === 'ai-passport') {
    return {
      concrete: `Học ${label} bằng case AI thực tế: input là gì, model/process làm gì, output dùng để quyết định gì.`,
      trace: `Trace theo chuỗi data → model/logic → output → risk → control. Luôn hỏi dữ liệu cá nhân/rủi ro pháp lý ở đâu.`,
      output: `Expected answer nên nêu được ví dụ business, rủi ro và cách kiểm soát phù hợp.`,
    };
  }

  return {
    concrete: `Học ${label} bằng một ví dụ thực tế nhỏ: tình huống, bước xử lý, kết quả mong đợi và lỗi dễ gặp.`,
    trace: `Trace theo thứ tự nguyên nhân → hành động → kết quả → kiểm tra lại.`,
    output: `Expected answer nên có định nghĩa ngắn, ví dụ áp dụng và một bẫy cần tránh.`,
  };
}

function buildLesson(course: CourseConfig, node: KnowledgeNodeData, existing?: LessonContent): LessonContent {
  const frame = practiceFrame(course, node);
  const courseName = courseLabel(course);
  const baseDefinitionVi = existing?.shortDefinitionVi || node.summaryVi || `${node.labelVi} là một chủ đề trong ${courseName}.`;
  const baseDefinitionJa = existing?.shortDefinitionJa || node.summaryJa || `${node.labelJa}は${courseName}の学習テーマです。`;
  const baseWhyVi = existing?.whyImportantVi || node.examPointVi || `Chủ đề này giúp hiểu ${courseName} theo hướng thực hành.`;
  const baseWhyJa = existing?.whyImportantJa || node.examPointJa || `${courseName}を実践的に理解するために重要です。`;
  const existingPatternsVi = existing?.examPatternsVi ?? [];
  const existingPatternsJa = existing?.examPatternsJa ?? [];
  const existingMistakesVi = existing?.commonMistakesVi ?? [];
  const existingMistakesJa = existing?.commonMistakesJa ?? [];

  return {
    nodeId: node.id,
    shortDefinitionVi: `${baseDefinitionVi} V98R bổ sung nội dung thực hành: ${frame.concrete}`,
    shortDefinitionJa: `${baseDefinitionJa} V98Rでは、具体例・trace・expected outputまで確認します。`,
    whyImportantVi: `${baseWhyVi} Cách học chuẩn: ${frame.trace} ${frame.output}`,
    whyImportantJa: `${baseWhyJa} 例を読み、変数や判断理由をtraceし、期待される出力を先に書くことで定着します。`,
    examPatternsVi: [
      `Ví dụ thực chiến: ${frame.concrete}`,
      `Trace bắt buộc: ${frame.trace}`,
      `Expected output/bộ kiểm tra: ${frame.output}`,
      `Tự kiểm tra: giải thích lại ${node.labelVi || node.labelEn} trong 3 câu và tự tạo 1 câu hỏi sai-bẫy.`,
      ...existingPatternsVi,
    ].filter(Boolean).slice(0, 10),
    examPatternsJa: [
      ...existingPatternsJa,
      `実践例: ${node.labelJa}を小さいcaseで説明する。`,
      `trace: 入力・途中状態・出力を表にする。`,
      `expected outputを書いてから答え合わせする。`,
    ].filter(Boolean).slice(0, 8),
    commonMistakesVi: [
      ...existingMistakesVi,
      `Chỉ đọc tên ${node.labelVi || node.labelEn} nhưng không có ví dụ tự viết.`,
      `Không ghi expected output trước nên khó biết mình sai ở bước nào.`,
      `Bỏ qua edge case hoặc bối cảnh thực tế của câu hỏi.`,
    ].filter(Boolean).slice(0, 10),
    commonMistakesJa: [
      ...existingMistakesJa,
      `${node.labelJa}の名前だけ暗記して例を作らない。`,
      `期待される出力を書かずに答えだけ見る。`,
      `境界値や文脈を確認しない。`,
    ].filter(Boolean).slice(0, 8),
    memoryTipVi: `${existing?.memoryTipVi || node.keywords.slice(0, 4).join(' → ') || node.labelVi} | Công thức V98R: định nghĩa ngắn → ví dụ cụ thể → trace → expected output → bẫy sai.`,
    memoryTipJa: `${existing?.memoryTipJa || node.labelJa} | 覚え方: 定義 → 具体例 → trace → expected output → 落とし穴。`,
  };
}

function enhanceNode(course: CourseConfig, node: KnowledgeNodeData): KnowledgeNodeData {
  const frame = practiceFrame(course, node);
  return {
    ...node,
    summaryVi: `${node.summaryVi} V98R: có ví dụ thực hành, trace và expected output để tránh bài học rỗng.`,
    summaryJa: `${node.summaryJa} V98R: 実践例・trace・expected outputを追加しています。`,
    examPointVi: frame.concrete,
    examPointJa: `${node.labelJa}の具体例を読み、入力・途中状態・出力を説明できるようにする。`,
  };
}

export function enhanceCourseForV98(course: CourseConfig): CourseConfig {
  const lessonMap = new Map(course.lessons.map((lesson) => [lesson.nodeId, lesson]));
  const nodes = course.nodes.map((node) => enhanceNode(course, node));
  const lessons = nodes.map((node) => buildLesson(course, node, lessonMap.get(node.id)));
  return { ...course, nodes, lessons };
}

export function summarizeV98Content(course: CourseConfig) {
  return {
    courseId: course.id,
    nodes: course.nodes.length,
    lessons: course.lessons.length,
    missingLessonNodes: course.nodes.filter((node) => !course.lessons.some((lesson) => lesson.nodeId === node.id)).map((node) => node.id),
  };
}
