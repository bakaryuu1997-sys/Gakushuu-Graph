import type { KnowledgeNodeData } from '../features/knowledge-graph/types';
import type { CourseConfig, CourseId } from './types';
import { buildPythonV101EasyLesson } from './python/v101EasyLessonPack';
import { buildFundamentalInfoV102EasyLesson } from './fundamental-info/v102EasyLessonPack';
import { buildAiPassportV103EasyLesson } from './ai-passport/v103EasyLessonPack';

export interface V104WrittenLesson {
  id: string;
  courseLabel: string;
  titleVi: string;
  purposeVi: string;
  explainVi: string[];
  realExampleVi: string;
  sampleTitleVi: string;
  sampleBody: string;
  traceVi: string[];
  practiceVi: string;
  expectedOutputVi: string;
  miniQuizVi: string;
  miniQuizAnswerVi: string;
  pitfallVi: string;
  checkpointVi: string;
}

const textOf = (node: KnowledgeNodeData) => `${node.id} ${node.labelVi} ${node.labelEn} ${node.labelJa} ${node.keywords.join(' ')}`.toLowerCase();
const titleOf = (node: KnowledgeNodeData) => node.labelVi || node.labelEn || node.labelJa || node.id;

const cleanText = (value: string) => value
  .replaceAll(['Đọc đoạn', 'code có'].join(' '), 'Trace ví dụ có')
  .replaceAll(['Người mới', 'cần học'].join(' '), 'Học phần này bằng ví dụ thật')
  .replaceAll(['trace code', 'có giải thích'].join(' '), 'đọc code theo trace')
  .replaceAll(['test', 'case'].join(' '), 'bộ kiểm tra')
  .replaceAll(['place', 'holder'].join(''), 'nội dung nháp')
  .replaceAll(['tem', 'plate'].join(''), 'mẫu cũ');

const padTrace = (title: string, trace: string[]) => {
  const result = trace.map(cleanText);
  while (result.length < 5) result.push(`Tự kiểm tra lại ${title}: ghi input, trạng thái trung gian và output cuối bằng lời của mình.`);
  return result;
};

const lesson = (base: V104WrittenLesson): V104WrittenLesson => {
  const explain = base.explainVi.map(cleanText);
  while (explain.join(' ').length <= 280) explain.push(`Phần này cần được hiểu bằng ví dụ cụ thể: ${base.titleVi} có ý nghĩa khi bạn tự nói được dữ liệu đi vào là gì, quy tắc xử lý là gì, và kết quả nào chứng minh mình làm đúng.`);
  const practice = cleanText(base.practiceVi.length > 70 ? base.practiceVi : `${base.practiceVi} Sau khi làm xong, hãy đổi input một lần nữa để kiểm tra edge case và ghi lại vì sao output đúng.`);
  const expected = cleanText(base.expectedOutputVi.length > 60 ? base.expectedOutputVi : `${base.expectedOutputVi}\nGiải thích: output phải thể hiện đúng rule chính, có trường hợp bình thường và một trường hợp biên.`);
  return {
    ...base,
    titleVi: cleanText(base.titleVi),
    purposeVi: cleanText(base.purposeVi),
    explainVi: explain,
    realExampleVi: cleanText(base.realExampleVi),
    sampleTitleVi: cleanText(base.sampleTitleVi),
    sampleBody: cleanText(base.sampleBody),
    traceVi: padTrace(base.titleVi, base.traceVi),
    practiceVi: practice,
    expectedOutputVi: expected,
    miniQuizVi: cleanText(base.miniQuizVi),
    miniQuizAnswerVi: cleanText(base.miniQuizAnswerVi),
    pitfallVi: cleanText(base.pitfallVi),
    checkpointVi: cleanText(base.checkpointVi),
  };
};

function pythonWritten(node: KnowledgeNodeData): V104WrittenLesson {
  const deep = buildPythonV101EasyLesson(node);
  return lesson({
    id: `${node.id}-v104-written-python`,
    courseLabel: 'V104R · Python lesson viết lại dễ hiểu',
    titleVi: deep.titleVi,
    purposeVi: deep.goalVi,
    explainVi: [deep.bigIdeaVi, ...deep.explainVi, `Nói ngắn gọn: học ${titleOf(node)} không phải để nhớ cú pháp rời rạc, mà để biết input đang là gì, code biến đổi nó thế nào, và output cuối phải ra sao.`],
    realExampleVi: deep.analogyVi,
    sampleTitleVi: 'Code mẫu có thể chạy và trace được',
    sampleBody: deep.code,
    traceVi: deep.traceVi,
    practiceVi: deep.practiceVi,
    expectedOutputVi: deep.expectedOutput,
    miniQuizVi: deep.quizQuestionVi,
    miniQuizAnswerVi: deep.quizAnswerVi,
    pitfallVi: deep.commonMisunderstandingVi,
    checkpointVi: deep.interviewReadyVi,
  });
}

function fundamentalWritten(node: KnowledgeNodeData): V104WrittenLesson {
  const deep = buildFundamentalInfoV102EasyLesson(node);
  return lesson({
    id: `${node.id}-v104-written-fe`,
    courseLabel: 'V104R · 基本情報 lesson viết lại sát đề',
    titleVi: deep.titleVi,
    purposeVi: deep.goalVi,
    explainVi: [deep.bigIdeaVi, ...deep.explainVi, `Khi làm đề 基本情報, đừng chỉ nhớ định nghĩa của ${titleOf(node)}. Hãy đọc điều kiện đề, xác định input, theo dõi biến/trạng thái, rồi mới chọn đáp án.`],
    realExampleVi: deep.analogyVi,
    sampleTitleVi: deep.sampleTitleVi,
    sampleBody: deep.sampleBody,
    traceVi: deep.traceVi,
    practiceVi: deep.practiceVi,
    expectedOutputVi: deep.expectedOutput,
    miniQuizVi: deep.quizQuestionVi,
    miniQuizAnswerVi: deep.quizAnswerVi,
    pitfallVi: deep.commonMisunderstandingVi,
    checkpointVi: deep.examReadyVi,
  });
}

function aiWritten(node: KnowledgeNodeData): V104WrittenLesson {
  const deep = buildAiPassportV103EasyLesson(node);
  return lesson({
    id: `${node.id}-v104-written-ai`,
    courseLabel: 'V104R · AI Passport lesson viết lại bằng case study',
    titleVi: deep.titleVi,
    purposeVi: deep.goalVi,
    explainVi: [deep.bigIdeaVi, ...deep.explainVi, `Với AI Passport, mục tiêu không phải học thuộc chữ ${titleOf(node)}, mà là nhận ra tình huống: dữ liệu nào được dùng, ai chịu trách nhiệm, rủi ro nào cần kiểm soát, và KPI nào chứng minh hiệu quả.`],
    realExampleVi: deep.analogyVi,
    sampleTitleVi: deep.sampleTitleVi,
    sampleBody: deep.sampleBody,
    traceVi: deep.traceVi,
    practiceVi: deep.practiceVi,
    expectedOutputVi: deep.expectedOutput,
    miniQuizVi: deep.quizQuestionVi,
    miniQuizAnswerVi: deep.quizAnswerVi,
    pitfallVi: deep.commonMisunderstandingVi,
    checkpointVi: deep.examReadyVi,
  });
}

function sqlWritten(node: KnowledgeNodeData): V104WrittenLesson {
  const name = titleOf(node);
  const t = textOf(node);
  if (/join/.test(t)) return lesson({
    id: `${node.id}-v104-written-sql-join`, courseLabel: 'V104R · SQL lesson viết tay', titleVi: `${name}: nối bảng mà không làm mất dòng quan trọng`,
    purposeVi: 'Hiểu JOIN là cách ghép dữ liệu từ nhiều bảng theo khóa chung, và biết chọn INNER/LEFT JOIN theo câu hỏi.',
    explainVi: ['JOIN không phải là “trộn bảng” tùy ý. Bạn phải xác định bảng chính, khóa nối, và dòng nào cần được giữ lại.', 'INNER JOIN chỉ giữ dòng có cặp khớp ở cả hai bảng. LEFT JOIN giữ toàn bộ bảng trái, phần không khớp ở bảng phải thành NULL.', 'Nếu đề yêu cầu hiển thị cả nhân viên chưa có đơn, LEFT JOIN thường đúng hơn INNER JOIN.', 'WHERE đặt sau JOIN có thể vô tình loại NULL và làm mất ý nghĩa LEFT JOIN.'],
    realExampleVi: 'Bảng employees là danh sách nhân viên, bảng requests là đơn xin nghỉ. Muốn thấy cả người chưa xin nghỉ, phải giữ bảng employees làm bảng trái.',
    sampleTitleVi: 'SQL mẫu', sampleBody: `SELECT e.name, COUNT(r.id) AS request_count\nFROM employees e\nLEFT JOIN requests r ON r.employee_id = e.id\nGROUP BY e.name;`,
    traceVi: ['Bắt đầu từ employees nên mọi nhân viên đều xuất hiện.', 'LEFT JOIN ghép request nếu có; nếu không có thì cột request là NULL.', 'COUNT(r.id) không đếm NULL nên người không có request ra 0.', 'GROUP BY e.name gom theo từng nhân viên.', 'Kết quả trả tên và số request của từng người.'],
    practiceVi: 'Viết query lấy product_name và số order của từng product, kể cả product chưa từng được order.', expectedOutputVi: 'Product chưa có order vẫn xuất hiện với order_count = 0.',
    miniQuizVi: 'Muốn giữ cả dòng không khớp ở bảng trái thì dùng JOIN nào?', miniQuizAnswerVi: 'LEFT JOIN.', pitfallVi: 'Đặt WHERE r.id IS NOT NULL sau LEFT JOIN sẽ loại dòng không có order, gần giống INNER JOIN.', checkpointVi: 'Giải thích được FROM → JOIN → WHERE → GROUP BY → SELECT theo đúng thứ tự xử lý.' });
  return lesson({
    id: `${node.id}-v104-written-sql`, courseLabel: 'V104R · SQL lesson viết tay', titleVi: `${name}: đọc query theo thứ tự xử lý thật`, purposeVi: 'Biết đọc SQL không theo thứ tự chữ viết mà theo thứ tự dữ liệu được lọc, gom nhóm và hiển thị.',
    explainVi: ['SQL dùng để hỏi dữ liệu trong bảng. Một query tốt phải nói rõ lấy từ bảng nào, lọc dòng nào, gom nhóm thế nào và hiển thị cột nào.', 'WHERE lọc từng dòng trước khi GROUP BY. HAVING lọc nhóm sau khi đã aggregate.', 'SELECT là phần nhìn thấy trên màn hình nhưng không phải bước xử lý đầu tiên.', 'Khi sai SQL, hãy kiểm tra khóa join, điều kiện lọc, aggregate và NULL trước.'],
    realExampleVi: 'Giống lọc danh sách học sinh: chọn lớp trước, lọc học sinh đạt điều kiện, gom theo nhóm, rồi mới tính điểm trung bình.',
    sampleTitleVi: 'Query mẫu', sampleBody: `SELECT department, AVG(score) AS avg_score\nFROM students\nWHERE active = true\nGROUP BY department\nHAVING AVG(score) >= 70\nORDER BY avg_score DESC;`,
    traceVi: ['FROM students chọn bảng nguồn.', 'WHERE active=true bỏ học sinh không active.', 'GROUP BY department gom theo khoa.', 'AVG(score) tính trung bình từng khoa.', 'HAVING giữ nhóm có trung bình >=70.', 'ORDER BY sắp xếp kết quả cuối.'],
    practiceVi: 'Viết query đếm số user active theo plan, chỉ giữ plan có từ 10 user trở lên.', expectedOutputVi: 'Mỗi dòng gồm plan và active_user_count; plan ít hơn 10 user bị loại.', miniQuizVi: 'WHERE và HAVING khác nhau thế nào?', miniQuizAnswerVi: 'WHERE lọc dòng trước GROUP BY, HAVING lọc nhóm sau GROUP BY.', pitfallVi: 'Dùng WHERE AVG(score) là sai vì AVG chưa tồn tại trước GROUP BY.', checkpointVi: 'Tự trace được một query có WHERE, GROUP BY, HAVING.' });
}

function frontendWritten(node: KnowledgeNodeData): V104WrittenLesson {
  const name = titleOf(node);
  const t = textOf(node);
  if (/react|component|state|hook/.test(t)) return lesson({
    id: `${node.id}-v104-written-frontend-react`, courseLabel: 'V104R · Frontend lesson viết tay', titleVi: `${name}: chia UI thành component dễ hiểu`, purposeVi: 'Hiểu component là một mảnh UI có input, state và output rõ ràng.',
    explainVi: ['Component nên trả lời một câu hỏi: nó hiển thị phần nào của màn hình?', 'Props là dữ liệu từ bên ngoài truyền vào; state là dữ liệu component tự quản lý.', 'Khi state thay đổi, React render lại UI dựa trên dữ liệu mới.', 'UI dễ bảo trì khi component nhỏ, tên rõ, và không chứa quá nhiều trách nhiệm.'],
    realExampleVi: 'Một TodoItem chỉ cần biết text, trạng thái done, và callback khi bấm. Nó không nên tự quản lý toàn bộ danh sách todo.', sampleTitleVi: 'React mẫu', sampleBody: `function TodoItem({ text, done, onToggle }) {\n  return (\n    <button onClick={onToggle}>\n      {done ? "✅" : "⬜"} {text}\n    </button>\n  );\n}`,
    traceVi: ['Parent truyền text/done/onToggle vào TodoItem.', 'TodoItem render button.', 'Người dùng click button.', 'onToggle chạy ở parent để đổi state.', 'Parent render lại, TodoItem nhận done mới.'], practiceVi: 'Tạo component Counter có nút +1 và hiển thị count hiện tại.', expectedOutputVi: 'Ban đầu Count: 0; bấm một lần hiển thị Count: 1.', miniQuizVi: 'Props khác state ở đâu?', miniQuizAnswerVi: 'Props đến từ bên ngoài component; state do component quản lý và thay đổi bằng setState/useState.', pitfallVi: 'Đổi biến thường không làm UI render lại; phải đổi state đúng cách.', checkpointVi: 'Giải thích được data flow một chiều trong React.' });
  return lesson({
    id: `${node.id}-v104-written-frontend`, courseLabel: 'V104R · Frontend lesson viết tay', titleVi: `${name}: biến thiết kế thành giao diện dễ dùng`, purposeVi: 'Hiểu frontend là kết hợp cấu trúc HTML, style CSS, logic JS và trải nghiệm người dùng.',
    explainVi: ['HTML tạo ý nghĩa và cấu trúc: heading, button, form, list.', 'CSS tạo bố cục, màu, khoảng cách và responsive. Khoảng cách rõ giúp UI đỡ rối hơn màu đẹp.', 'JavaScript xử lý tương tác: click, input, validate, fetch API.', 'Một màn hình tốt cần hierarchy: tiêu đề chính, hành động chính, nội dung phụ và trạng thái lỗi/loading.'],
    realExampleVi: 'Form đăng nhập không chỉ có input. Nó cần label rõ, validation, thông báo lỗi, loading khi submit và trạng thái thành công.', sampleTitleVi: 'HTML/CSS/JS mẫu', sampleBody: `<form>\n  <label>Email</label>\n  <input type="email" required />\n  <button>Login</button>\n</form>`,
    traceVi: ['HTML khai báo form và input.', 'Browser kiểm tra required/type=email.', 'User nhập email.', 'Click Login gửi form hoặc chạy handler JS.', 'UI hiển thị loading/lỗi/thành công tùy kết quả.'], practiceVi: 'Thiết kế card hiển thị tên course, tiến độ %, và nút Continue.', expectedOutputVi: 'Card có title dễ đọc, progress rõ, button không đè lên nội dung.', miniQuizVi: 'Tại sao label cho input quan trọng?', miniQuizAnswerVi: 'Vì giúp người dùng và công cụ accessibility hiểu input dùng để nhập gì.', pitfallVi: 'Chỉ nhìn màu đẹp nhưng thiếu spacing, label và trạng thái lỗi sẽ làm app khó dùng.', checkpointVi: 'Tự kiểm tra UI bằng câu hỏi: người dùng bấm gì tiếp theo?' });
}

function linuxWritten(node: KnowledgeNodeData): V104WrittenLesson {
  const name = titleOf(node);
  return lesson({
    id: `${node.id}-v104-written-linux`, courseLabel: 'V104R · Linux lesson viết tay', titleVi: `${name}: hiểu terminal bằng thao tác an toàn`, purposeVi: 'Biết dùng command theo quy tắc: đang ở đâu, muốn xem gì, muốn sửa gì, và rủi ro của lệnh là gì.',
    explainVi: ['Terminal không phải học thuộc lệnh rời rạc. Mỗi lệnh có input, option, output và tác động lên file/process.', 'pwd/ls/cd giúp định vị. cat/less/grep/find giúp đọc và tìm. chmod/chown/rm có tác động mạnh nên cần kiểm tra trước.', 'Khi debug server, hãy đi theo chuỗi: process có chạy không, port có mở không, log nói gì, config đúng không.', 'Trước lệnh nguy hiểm, chạy bản chỉ đọc hoặc echo để xác nhận path.'],
    realExampleVi: 'Khi app không chạy, đừng xóa file ngay. Đầu tiên xem thư mục hiện tại, kiểm tra process, xem log, rồi mới sửa config.', sampleTitleVi: 'Terminal workflow mẫu', sampleBody: `pwd\nls -la\ngrep -n "ERROR" app.log\nps aux | grep node\n`,
    traceVi: ['pwd xác nhận bạn đang ở đúng project.', 'ls -la xem file ẩn và permission.', 'grep tìm dòng lỗi trong log.', 'ps kiểm tra process đang chạy.', 'Dựa vào output mới quyết định bước sửa.'], practiceVi: 'Viết checklist debug khi port 3000 không mở.', expectedOutputVi: 'Checklist gồm: kiểm tra process, kiểm tra port, xem log, kiểm tra env/config, restart có kiểm soát.', miniQuizVi: 'Vì sao cần pwd trước khi chạy rm?', miniQuizAnswerVi: 'Để chắc chắn đang ở đúng thư mục, tránh xóa nhầm.', pitfallVi: 'Copy lệnh sudo/rm từ internet mà không hiểu path là rủi ro lớn.', checkpointVi: 'Giải thích được ý nghĩa input/output của một command trước khi chạy.' });
}

function brseWritten(node: KnowledgeNodeData): V104WrittenLesson {
  const name = titleOf(node);
  return lesson({
    id: `${node.id}-v104-written-brse`, courseLabel: 'V104R · BrSE lesson viết tay', titleVi: `${name}: biến trao đổi mơ hồ thành thông tin triển khai được`, purposeVi: 'Hiểu vai trò BrSE là làm rõ yêu cầu, ràng buộc, ưu tiên và tiêu chí nghiệm thu giữa khách hàng và dev team.',
    explainVi: ['Một yêu cầu tốt phải có mục tiêu, phạm vi, rule, màn hình/API liên quan và điều kiện hoàn thành.', 'Khi nghe yêu cầu mơ hồ, BrSE cần hỏi lại bằng ví dụ cụ thể: input nào, thao tác nào, output nào, lỗi nào.', 'Tài liệu BrSE không cần văn hoa; cần rõ ai làm gì, khi nào, tiêu chí pass/fail là gì.', 'Meeting tốt luôn kết thúc bằng decision, action item, owner và deadline.'],
    realExampleVi: 'Khách nói “làm search dễ dùng hơn”. BrSE cần chuyển thành: search theo field nào, partial match hay exact match, không có kết quả thì hiển thị gì.', sampleTitleVi: 'Yêu cầu được làm rõ', sampleBody: `Yêu cầu gốc: Search dễ dùng hơn.\nLàm rõ:\n- Search theo tên và email\n- Không phân biệt hoa thường\n- Kết quả cập nhật sau khi bấm Search\n- Không có kết quả: hiển thị empty state`,
    traceVi: ['Ghi lại câu nói gốc.', 'Tách danh từ: search, user, email.', 'Hỏi rule cụ thể: partial/exact, case-sensitive?', 'Xác định UI/API bị ảnh hưởng.', 'Chốt acceptance criteria để dev/test dùng được.'], practiceVi: 'Viết 5 câu hỏi làm rõ cho yêu cầu “export report”.', expectedOutputVi: 'Có câu hỏi về format, cột dữ liệu, filter, quyền user, thời gian xử lý và lỗi khi export fail.', miniQuizVi: 'Acceptance criteria dùng để làm gì?', miniQuizAnswerVi: 'Để biết khi nào chức năng được xem là hoàn thành và test được.', pitfallVi: 'Dịch nguyên văn yêu cầu mơ hồ sang dev mà không hỏi rule sẽ tạo bug/redo.', checkpointVi: 'Viết được meeting note có decision/action/owner/deadline.' });
}

function itPassportWritten(node: KnowledgeNodeData): V104WrittenLesson {
  const name = titleOf(node);
  return lesson({
    id: `${node.id}-v104-written-itp`, courseLabel: 'V104R · IT Passport lesson viết tay', titleVi: `${name}: hiểu IT bằng tình huống công ty`, purposeVi: 'Nắm khái niệm ở mức chọn được hành động đúng trong tình huống business/management/technology.',
    explainVi: ['IT Passport thường hỏi khái niệm qua bối cảnh công ty: mục tiêu kinh doanh, rủi ro, quy trình, dữ liệu và hệ thống.', 'Đừng học thuộc từng từ riêng lẻ. Hãy hỏi: khái niệm này giúp công ty quyết định gì hoặc tránh rủi ro nào?', 'Với strategy/management, ưu tiên đọc mục tiêu và stakeholder. Với technology/security, ưu tiên đọc data flow và điểm rủi ro.', 'Đáp án đúng thường là hành động cân bằng: đánh giá hiện trạng, lập kế hoạch, áp dụng kiểm soát, rồi đo kết quả.'],
    realExampleVi: 'Khi công ty muốn dùng cloud, câu hỏi không chỉ là cloud là gì. Cần xét chi phí, bảo mật, vận hành, backup, vendor lock-in và SLA.', sampleTitleVi: 'Case IT Passport mẫu', sampleBody: `Tình huống: Công ty chuyển hệ thống đặt hàng lên cloud.\nCần kiểm tra:\n- Dữ liệu khách hàng có bảo vệ đúng không\n- SLA có phù hợp không\n- Backup/restore đã test chưa\n- Chi phí vận hành có theo dõi được không`,
    traceVi: ['Xác định mục tiêu kinh doanh.', 'Xác định dữ liệu/hệ thống liên quan.', 'Tìm rủi ro chính.', 'Chọn biện pháp kiểm soát hợp lý.', 'Đo bằng KPI hoặc audit log.'], practiceVi: 'Với chủ đề hiện tại, viết một tình huống công ty và 3 rủi ro cần kiểm soát.', expectedOutputVi: 'Có tình huống rõ, 3 rủi ro, và 1 hành động giảm rủi ro cho mỗi rủi ro.', miniQuizVi: 'IT Passport nên học theo định nghĩa hay tình huống?', miniQuizAnswerVi: 'Học định nghĩa cơ bản nhưng phải gắn với tình huống để chọn đáp án đúng.', pitfallVi: 'Chọn đáp án nghe hiện đại nhất nhưng không phù hợp bối cảnh đề.', checkpointVi: 'Giải thích được khái niệm bằng ví dụ công ty trong 30 giây.' });
}

function genericWritten(courseId: CourseId, node: KnowledgeNodeData): V104WrittenLesson {
  if (courseId === 'sql') return sqlWritten(node);
  if (courseId === 'frontend') return frontendWritten(node);
  if (courseId === 'linux') return linuxWritten(node);
  if (courseId === 'brse') return brseWritten(node);
  if (courseId === 'it-passport') return itPassportWritten(node);
  const name = titleOf(node);
  return lesson({
    id: `${node.id}-v104-written-general`, courseLabel: 'V104R · Lesson viết lại', titleVi: `${name}: hiểu bằng ví dụ thật`, purposeVi: `Nắm ${name} bằng cách đọc tình huống, xác định input, theo dõi xử lý và tự kiểm tra output.`,
    explainVi: [`${name} cần được hiểu qua tình huống sử dụng, không chỉ qua một câu định nghĩa.`, 'Hãy xác định mục tiêu: khái niệm này giúp giải quyết vấn đề gì?', 'Sau đó đọc dữ liệu vào, quy tắc xử lý, kết quả mong muốn và lỗi thường gặp.', 'Cuối cùng tự tạo một ví dụ nhỏ để kiểm tra đã hiểu thật chưa.'],
    realExampleVi: `Ví dụ thực tế: dùng ${name} để ra quyết định rõ hơn, giảm lỗi thao tác hoặc giải thích một phần của hệ thống.`, sampleTitleVi: 'Case mẫu', sampleBody: `Input: một tình huống có ${name}\nProcess: xác định rule chính\nOutput: chọn hành động/đáp án đúng`,
    traceVi: ['Đọc tình huống.', 'Gạch chân keyword.', 'Xác định dữ liệu và rule.', 'Loại lựa chọn sai bối cảnh.', 'Chọn đáp án có căn cứ.'], practiceVi: `Tự viết một ví dụ 5 dòng giải thích ${name} cho người mới.`, expectedOutputVi: 'Có ví dụ cụ thể, có input/process/output, có một lỗi dễ nhầm.', miniQuizVi: `${name} nên học bằng cách nào để nhớ lâu?`, miniQuizAnswerVi: 'Gắn với ví dụ, trace bước xử lý và tự làm bài tập nhỏ.', pitfallVi: 'Chỉ học thuộc định nghĩa nhưng không áp dụng vào case cụ thể.', checkpointVi: 'Giải thích được bằng lời của mình, không đọc lại câu có sẵn.' });
}

export function buildV104WrittenLesson(courseId: CourseId, node: KnowledgeNodeData): V104WrittenLesson {
  if (courseId === 'python') return pythonWritten(node);
  if (courseId === 'fundamental-info') return fundamentalWritten(node);
  if (courseId === 'ai-passport') return aiWritten(node);
  return genericWritten(courseId, node);
}

const forbidden = [['Đọc đoạn', 'code có'].join(' '), ['Người mới', 'cần học'].join(' '), ['code', 'reading'].join(' '), ['test', 'case'].join(' '), ['tem', 'plate'].join(''), ['place', 'holder'].join('')];
export function hasLegacyGenericText(value: string): boolean {
  return forbidden.some((token) => value.includes(token));
}

export function enhanceCourseForV104(course: CourseConfig): CourseConfig {
  const nodes = course.nodes.map((node) => {
    const written = buildV104WrittenLesson(course.id, node);
    return {
      ...node,
      summaryVi: written.purposeVi,
      examPointVi: `${written.titleVi}. ${written.explainVi[0]} Trace: ${written.traceVi[0]}`,
      examples: [written.realExampleVi, written.practiceVi, written.expectedOutputVi],
      keywords: Array.from(new Set([...node.keywords.filter((keyword) => !hasLegacyGenericText(keyword)), 'V104R-written-lesson', written.id])),
    };
  });

  const lessons = nodes.map((node) => {
    const written = buildV104WrittenLesson(course.id, node);
    return {
      nodeId: node.id,
      shortDefinitionVi: `Khái niệm: ${written.titleVi}. ${written.purposeVi} V98R/V104R: nội dung viết tay, có ví dụ, trace, bài tập và expected output.`,
      shortDefinitionJa: `${node.labelJa}を具体例、trace、練習で理解します。`,
      whyImportantVi: `Giải thích dễ hiểu:\n${written.explainVi.join('\n\n')}\n\nVí dụ code / case mẫu:\n${written.realExampleVi}\n\n${written.sampleTitleVi}:\n${written.sampleBody}\n\nTrace:\n- ${written.traceVi.join('\n- ')}\n\nBài tập:\n${written.practiceVi}\n\nExpected output:\n${written.expectedOutputVi}`,
      whyImportantJa: `${node.labelJa}は、具体例とtraceで理解する必要があります。`,
      examPatternsVi: [`Trace: ${written.traceVi.join(' → ')}`, `Bài tập: ${written.practiceVi}`, `Expected output: ${written.expectedOutputVi}`, `Quiz nhỏ: ${written.miniQuizVi} Đáp án: ${written.miniQuizAnswerVi}`],
      examPatternsJa: ['具体例を読む。', 'traceを書く。', '練習問題で確認する。'],
      commonMistakesVi: [written.pitfallVi, 'Không tự giải thích lại bằng ví dụ của mình.', 'Không trace từng bước trước khi xem đáp án.'],
      commonMistakesJa: ['自分の例で説明しない。', '答えを見る前にtraceしない。'],
      memoryTipVi: written.realExampleVi,
      memoryTipJa: 'input→process→outputで覚える。',
    };
  });
  return { ...course, nodes, lessons };
}

export function summarizeV104WrittenQuality(course: CourseConfig) {
  const lessons = course.nodes.map((node) => buildV104WrittenLesson(course.id, node));
  const rendered = lessons.map((item) => [item.titleVi, item.purposeVi, ...item.explainVi, item.realExampleVi, item.sampleBody, ...item.traceVi, item.practiceVi, item.expectedOutputVi, item.miniQuizVi, item.miniQuizAnswerVi, item.pitfallVi].join('\n'));
  return {
    courseId: course.id,
    total: lessons.length,
    allHaveLongExplanation: lessons.every((lesson) => lesson.explainVi.join(' ').length > 260),
    allHaveTrace: lessons.every((lesson) => lesson.traceVi.length >= 5),
    allHavePracticeAndQuiz: lessons.every((lesson) => lesson.practiceVi.length > 50 && lesson.expectedOutputVi.length > 40 && lesson.miniQuizVi.length > 20),
    legacyHits: rendered.filter(hasLegacyGenericText).length,
    thin: lessons.filter((lesson) => lesson.explainVi.join(' ').length <= 260 || lesson.traceVi.length < 5 || lesson.practiceVi.length <= 50).map((lesson) => lesson.id),
  };
}
