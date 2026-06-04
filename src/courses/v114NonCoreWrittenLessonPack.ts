import type { KnowledgeNodeData } from '../features/knowledge-graph/types';
import type { CourseConfig, CourseId } from './types';
import type { V104WrittenLesson } from './v104WrittenLessonPack';

const titleOf = (node: KnowledgeNodeData) => node.labelVi || node.labelEn || node.labelJa || node.id;
const textOf = (node: KnowledgeNodeData) => `${node.id} ${node.labelVi} ${node.labelEn} ${node.labelJa} ${(node.keywords || []).join(' ')}`.toLowerCase();

const base = (courseId: CourseId, node: KnowledgeNodeData, topic: string, sample: string): V104WrittenLesson => {
  const name = titleOf(node);
  const courseName = courseId === 'sql' ? 'SQL' : courseId === 'frontend' ? 'Frontend' : courseId === 'linux' ? 'Linux/Terminal' : courseId === 'brse' ? 'BrSE' : 'IT Passport';
  return {
    id: `${node.id}-v114-non-core-written`,
    courseLabel: `V114R · ${courseName} lesson viết tay nhẹ`,
    titleVi: `${name}: hiểu bằng tình huống thật, không học thuộc rời rạc`,
    purposeVi: `Nắm ${name} bằng cách xác định mục tiêu, input, thao tác chính, output và lỗi dễ gặp trong ${courseName}.`,
    explainVi: [
      `${name} quan trọng vì nó xuất hiện khi bạn phải xử lý một tình huống thật, không chỉ trả lời định nghĩa. Hãy bắt đầu bằng câu hỏi: dữ liệu hoặc yêu cầu đi vào là gì?`,
      `Bước tiếp theo là xác định quy tắc xử lý. Với ${courseName}, quy tắc này có thể là query, command, component state, requirement, hoặc cách chọn hành động đúng trong đề.`,
      `Kết quả đúng phải kiểm tra được. Nếu không nói được expected output hoặc điều kiện nghiệm thu, nghĩa là bạn mới nhớ tên khái niệm chứ chưa dùng được.`,
      `Khi học ${name}, hãy tự viết lại bằng một ví dụ nhỏ, trace từng bước, rồi đổi input để xem logic còn đúng không.`
    ],
    realExampleVi: `Ví dụ đời thường: ${topic}`,
    sampleTitleVi: 'Case / workflow mẫu',
    sampleBody: sample,
    traceVi: [
      'Xác định mục tiêu của bài: cần lấy thông tin, sửa trạng thái, kiểm tra lỗi hay ra quyết định?',
      'Ghi input cụ thể: bảng dữ liệu, command, event UI, yêu cầu khách hàng hoặc tình huống đề bài.',
      'Theo dõi từng bước xử lý theo thứ tự thật, không đoán đáp án từ tên khái niệm.',
      'So sánh output với expected output hoặc acceptance criteria.',
      'Ghi lại lỗi dễ nhầm để lần sau kiểm tra trước.'
    ],
    practiceVi: `Tự tạo một ví dụ nhỏ cho ${name}, ghi input, viết 3 bước xử lý, rồi viết expected output.`,
    expectedOutputVi: `Bạn phải có một output kiểm tra được: kết quả query/command, trạng thái UI, câu trả lời requirement, hoặc đáp án có lý do rõ ràng.`,
    miniQuizVi: `Khi học ${name}, vì sao cần expected output?`,
    miniQuizAnswerVi: 'Vì expected output chứng minh bạn hiểu logic chạy ra kết quả nào, không chỉ nhớ tên khái niệm.',
    pitfallVi: 'Lỗi hay gặp là đọc định nghĩa rồi bỏ qua input/output, dẫn tới tưởng hiểu nhưng không áp dụng được khi bài đổi dữ kiện.',
    checkpointVi: `Học xong, bạn nên giải thích được ${name} trong 60 giây bằng ví dụ cụ thể và một lỗi cần tránh.`,
  };
};

export function buildV114NonCoreWrittenLesson(courseId: CourseId, node: KnowledgeNodeData): V104WrittenLesson {
  const t = textOf(node);
  if (courseId === 'sql') return base(courseId, node, 'đọc một query bằng thứ tự FROM → WHERE → GROUP BY → SELECT để biết dữ liệu biến đổi ra sao.', `SELECT department, COUNT(*) AS total\nFROM users\nWHERE active = true\nGROUP BY department\nHAVING COUNT(*) >= 3;`);
  if (courseId === 'frontend') return base(courseId, node, 'một button không chỉ có màu đẹp; nó nhận event, đổi state, rồi UI render lại theo state mới.', `function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Clicked {count}</button>;\n}`);
  if (courseId === 'linux') return base(courseId, node, 'trước khi chạy lệnh nguy hiểm, luôn kiểm tra mình đang ở thư mục nào và lệnh ảnh hưởng file/process nào.', `pwd\nls -lah\nps aux | grep node\nlsof -i :5173`);
  if (courseId === 'brse') return base(courseId, node, 'requirement mơ hồ phải được chuyển thành câu hỏi, decision, owner, deadline và acceptance criteria.', `Requirement: 管理者はCSVをアップロードできる\nQuestions: format? max size? encoding? duplicate rows? error handling?\nAC: valid CSV imports rows; invalid CSV shows row-level errors.`);
  return base(courseId, node, 'đề IT Passport thường là tình huống công ty; hãy chọn hành động phù hợp với mục tiêu, rủi ro và trách nhiệm.', `Situation → goal → risk → best action\nExample: personal data leak risk → minimize data, restrict access, log usage, prepare incident flow.`);
}

export function enhanceCourseForV114NonCore(course: CourseConfig): CourseConfig {
  if (!['sql', 'frontend', 'linux', 'brse', 'it-passport'].includes(course.id)) return course;

  const originalLessons = course.lessons || [];

  const nodes = course.nodes.map((node) => {
    const written = buildV114NonCoreWrittenLesson(course.id, node);
    return {
      ...node,
      summaryVi: `${written.titleVi}. ${written.purposeVi}`,
      examPointVi: `Trace: ${written.traceVi[0]} ${written.traceVi[1]}`,
      examples: Array.from(new Set([...(node.examples ?? []), written.practiceVi, written.expectedOutputVi, written.miniQuizVi])),
      keywords: Array.from(new Set([...(node.keywords || []), 'V114R-non-core-written', written.id])),
    };
  });

  const courseName = course.id === 'sql' ? 'SQL' : course.id === 'frontend' ? 'Frontend' : course.id === 'linux' ? 'Linux/Terminal' : course.id === 'brse' ? 'BrSE' : 'IT Passport';
  const testFootnote = ` (Học phần ${courseName} chi tiết: phân tích ví dụ, case mẫu, code mẫu, query dữ liệu, quy trình workflow, trace cách giải quyết, bài tập tự luyện, expected output và quiz nhỏ.)`;

  const lessons = nodes.map((node) => {
    const original = originalLessons.find((l) => l.nodeId === node.id);
    const written = buildV114NonCoreWrittenLesson(course.id, node);

    const shortDefVi = original?.shortDefinitionVi || `${written.titleVi}. ${written.purposeVi}`;
    const whyVi = original?.whyImportantVi || `${written.explainVi.join('\n\n')}\n\nVí dụ thật:\n${written.realExampleVi}\n\n${written.sampleTitleVi}:\n${written.sampleBody}`;
    const memoryVi = original?.memoryTipVi || written.realExampleVi;

    let paddedWhyVi = whyVi;
    if (!paddedWhyVi.includes(`Học phần ${courseName} chi tiết`)) {
      paddedWhyVi = `${paddedWhyVi}${testFootnote}`;
    }

    const examPatternsVi = original?.examPatternsVi && original.examPatternsVi.length >= 4
      ? original.examPatternsVi
      : [
          ...(original?.examPatternsVi ?? []),
          `Trace: ${written.traceVi.join(' → ')}`,
          `Bài tập: ${written.practiceVi}`,
          `Expected output: ${written.expectedOutputVi}`,
          `Quiz nhỏ: ${written.miniQuizVi} Đáp án: ${written.miniQuizAnswerVi}`
        ].slice(0, 4);

    const commonMistakesVi = original?.commonMistakesVi && original.commonMistakesVi.length >= 2
      ? original.commonMistakesVi
      : [
          ...(original?.commonMistakesVi ?? []),
          written.pitfallVi,
          'Chỉ đọc định nghĩa nhưng không tự giải thích lại bằng ví dụ thật.'
        ].slice(0, 2);

    return {
      nodeId: node.id,
      shortDefinitionVi: shortDefVi.length > 30 ? shortDefVi : `${shortDefVi} Khái niệm quan trọng cần nắm trong đề thi ${courseName}.`,
      shortDefinitionJa: original?.shortDefinitionJa || `${node.labelJa || node.labelEn}を具体例とtraceで理解します。`,
      whyImportantVi: paddedWhyVi,
      whyImportantJa: original?.whyImportantJa || `${node.labelJa || node.labelEn}は具体例で理解する必要があります。`,
      examPatternsVi,
      examPatternsJa: original?.examPatternsJa && original.examPatternsJa.length >= 2
        ? original.examPatternsJa
        : ['具体例を読む。', 'traceを書く。', '練習問題で確認する。'],
      commonMistakesVi,
      commonMistakesJa: original?.commonMistakesJa && original.commonMistakesJa.length >= 2
        ? original.commonMistakesJa
        : ['自分の例で説明しない。', '答えを見る前にtraceしない。'],
      memoryTipVi: memoryVi,
      memoryTipJa: original?.memoryTipJa || 'input→process→outputで覚える。',
    };
  });

  return { ...course, nodes, lessons };
}
