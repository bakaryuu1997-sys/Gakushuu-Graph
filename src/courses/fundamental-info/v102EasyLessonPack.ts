import type { KnowledgeNodeData } from '../../features/knowledge-graph/types';
import type { EasyDeepLesson } from '../v102v103EasyLessonTypes';
import { nodeText, nodeTitle } from '../v102v103EasyLessonTypes';

const includes = (text: string, ...words: string[]) => words.some((word) => text.includes(word));

function algorithmLesson(node: KnowledgeNodeData): EasyDeepLesson {
  const name = nodeTitle(node);
  return {
    id: `${node.id}-v102-fe-easy`,
    courseLabel: 'V102R 基本情報 · 科目B easy deep lesson',
    titleVi: `${name}: đọc thuật toán bằng bảng trace, không đoán output`,
    goalVi: 'Sau bài này bạn biết cách đọc pseudo-code theo từng dòng: biến nào thay đổi, vòng lặp chạy mấy lần, điều kiện nào làm nhánh rẽ.',
    bigIdeaVi: '科目B không kiểm tra bạn thuộc lòng code, mà kiểm tra bạn có theo được trạng thái của chương trình hay không. Trạng thái gồm biến, mảng, stack/queue, vị trí vòng lặp và output tạm thời.',
    explainVi: [
      'Bước 1 là xác định input. Ví dụ A = [3, 8, 6, 14] thì mỗi phần tử có vị trí và giá trị riêng; đừng chỉ nhìn số lớn nhất rồi đoán đáp án.',
      'Bước 2 là lập bảng trace. Mỗi lượt lặp viết i, giá trị đang xét, biến trước update và biến sau update. Làm chậm nhưng rất chắc.',
      'Bước 3 là đọc điều kiện update. Nhiều câu bẫy nằm ở dấu <, <=, >, >= hoặc vị trí update trước/sau khi kiểm tra.',
      'Với stack/queue/recursion/DP, hãy ghi cấu trúc dữ liệu sau mỗi thao tác. Nếu không ghi, bạn rất dễ nhầm thứ tự lấy phần tử.'
    ],
    analogyVi: 'Giống kiểm kê kho: bạn không thể chỉ nhìn tổng quan rồi kết luận. Bạn phải ghi từng lần nhập/xuất để biết cuối cùng còn gì trong kho.',
    sampleTitleVi: 'Pseudo-code mẫu',
    sampleBody: `A = [3, 8, 6, 14]\nmaxGap ← 0\nfor i ← 2 to length(A)\n  gap ← abs(A[i] - A[i-1])\n  if gap > maxGap then\n    maxGap ← gap\n  endif\nendfor\nprint maxGap`,
    traceVi: [
      'Ban đầu maxGap = 0. Mục tiêu không phải tìm max-min toàn mảng, mà tìm chênh lệch giữa hai phần tử kề nhau.',
      'i=2: so A[2]=8 với A[1]=3, gap=5. Vì 5 > 0 nên maxGap thành 5.',
      'i=3: so 6 với 8, gap=2. Vì 2 không lớn hơn 5 nên maxGap vẫn là 5.',
      'i=4: so 14 với 6, gap=8. Vì 8 > 5 nên maxGap thành 8.',
      'Output cuối là 8. Bẫy là lấy 14-3=11, nhưng đề đang xét phần tử kề nhau.'
    ],
    practiceVi: 'Tự trace A=[10, 7, 2, 9]. Ghi bảng i, gap, maxGap sau mỗi lượt. Sau đó đổi dấu > thành >= và tự hỏi output có đổi không.',
    expectedOutput: `A=[10,7,2,9]\ni=2 gap=3 maxGap=3\ni=3 gap=5 maxGap=5\ni=4 gap=7 maxGap=7\nOutput: 7`,
    quizQuestionVi: 'Vì sao không được lấy max(A)-min(A) trong ví dụ trên?',
    quizAnswerVi: 'Vì pseudo-code chỉ so hai phần tử kề nhau A[i] và A[i-1], không so mọi cặp trong mảng.',
    commonMisunderstandingVi: 'Sai phổ biến là nhìn tên biến rồi đoán ý định, không đọc dòng code thật. Trong 科目B, tên biến chỉ là gợi ý; điều kiện update mới là sự thật.',
    examReadyVi: 'Làm được bài này nghĩa là bạn có thể tự tạo trace table cho array, stack, queue, recursion hoặc DP trước khi xem đáp án.'
  };
}

function sqlLesson(node: KnowledgeNodeData): EasyDeepLesson {
  const name = nodeTitle(node);
  return {
    id: `${node.id}-v102-fe-easy`,
    courseLabel: 'V102R 基本情報 · SQL easy deep lesson',
    titleVi: `${name}: đọc SQL theo thứ tự xử lý, không đọc từ SELECT trước`,
    goalVi: 'Hiểu câu SQL bằng thứ tự FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.',
    bigIdeaVi: 'SQL nhìn như bắt đầu bằng SELECT, nhưng khi suy luận kết quả, bạn nên đọc từ bảng nguồn trước. Nếu đọc sai thứ tự, bạn sẽ nhầm WHERE với HAVING hoặc INNER JOIN với LEFT JOIN.',
    explainVi: [
      'FROM/JOIN quyết định những dòng nào có mặt ban đầu. INNER JOIN loại dòng không khớp; LEFT JOIN giữ bảng trái kể cả khi bên phải không có dữ liệu.',
      'WHERE lọc từng dòng trước khi gom nhóm. Nếu bạn lọc request.id IS NOT NULL sau LEFT JOIN, các dòng không có request sẽ bị loại mất.',
      'GROUP BY gom nhiều dòng thành một nhóm. Các hàm COUNT, SUM, AVG chạy trên từng nhóm, không chạy trên toàn bảng nếu có GROUP BY.',
      'HAVING lọc sau khi đã gom nhóm, nên dùng cho điều kiện liên quan COUNT/SUM/AVG.'
    ],
    analogyVi: 'SQL giống lọc danh sách học sinh: trước tiên lấy danh sách lớp, ghép bảng điểm, lọc học sinh, gom theo lớp, rồi mới tính trung bình.',
    sampleTitleVi: 'SQL mẫu',
    sampleBody: `SELECT e.name, COUNT(r.id) AS request_count\nFROM employee e\nLEFT JOIN request r ON e.id = r.employee_id\nGROUP BY e.id, e.name\nHAVING COUNT(r.id) >= 0\nORDER BY request_count DESC;`,
    traceVi: [
      'FROM employee e: bắt đầu với tất cả nhân viên.',
      'LEFT JOIN request r: nhân viên không có request vẫn còn, cột request sẽ là NULL.',
      'GROUP BY e.id, e.name: gom các dòng theo từng nhân viên.',
      'COUNT(r.id): chỉ đếm id không NULL, nên nhân viên không có request được count là 0.',
      'ORDER BY request_count DESC: sắp xếp kết quả cuối, không làm thay đổi số lượng request.'
    ],
    practiceVi: 'Cho bảng employee có Long, Hana; bảng request chỉ có 2 request của Long. Hãy viết kết quả của query LEFT JOIN + COUNT(r.id).',
    expectedOutput: `employee table: Long, Hana\nrequest table: Long has 2 requests, Hana has none\nResult after LEFT JOIN + GROUP BY:\nLong | request_count=2\nHana | request_count=0`,
    quizQuestionVi: 'Muốn hiển thị cả nhân viên có 0 request thì dùng INNER JOIN hay LEFT JOIN?',
    quizAnswerVi: 'Dùng LEFT JOIN, vì INNER JOIN sẽ loại nhân viên không có dòng khớp ở bảng request.',
    commonMisunderstandingVi: 'Sai phổ biến là đặt WHERE r.id IS NOT NULL sau LEFT JOIN. Điều đó làm mất các dòng NULL và biến kết quả giống INNER JOIN.',
    examReadyVi: 'Khi gặp SQL trong FE, hãy viết thứ tự xử lý ra giấy trước khi chọn đáp án.'
  };
}

function networkLesson(node: KnowledgeNodeData): EasyDeepLesson {
  const name = nodeTitle(node);
  return {
    id: `${node.id}-v102-fe-easy`,
    courseLabel: 'V102R 基本情報 · Network easy deep lesson',
    titleVi: `${name}: hiểu mạng bằng đường đi của một request`,
    goalVi: 'Biết giải thích DNS, IP, subnet, TCP/UDP, HTTP/HTTPS bằng một luồng request từ browser tới server.',
    bigIdeaVi: 'Network không phải danh sách thuật ngữ rời rạc. Hãy tưởng tượng người dùng mở một website: tên miền được đổi thành IP, máy chọn đường đi, kết nối được tạo, dữ liệu được gửi và bảo vệ bằng TLS nếu là HTTPS.',
    explainVi: [
      'DNS giống danh bạ: đổi tên miền dễ nhớ thành IP address để máy tính biết gửi gói tin tới đâu.',
      'Subnet chia một mạng lớn thành các mạng nhỏ. Với CIDR /27, số bit host là 5 nên có 2^5 = 32 địa chỉ, usable thường là 30.',
      'TCP ưu tiên tin cậy: có kiểm soát thứ tự, mất gói thì gửi lại. UDP nhẹ hơn, dùng khi tốc độ quan trọng hơn việc gửi lại từng gói.',
      'HTTPS = HTTP chạy trên TLS. Nó giúp mã hóa dữ liệu trên đường truyền và xác thực server qua certificate.'
    ],
    analogyVi: 'Gửi request giống gửi bưu kiện: DNS tìm địa chỉ, IP là địa chỉ nhà, TCP là dịch vụ giao có xác nhận, TLS là niêm phong bưu kiện.',
    sampleTitleVi: 'Luồng request mẫu',
    sampleBody: `User nhập https://example.com\n1. Browser hỏi DNS: example.com có IP nào?\n2. Browser mở kết nối TCP tới IP đó.\n3. TLS handshake kiểm tra certificate và tạo khóa phiên.\n4. Browser gửi HTTP request bên trong kênh TLS.\n5. Server trả HTTP response đã được bảo vệ trên đường truyền.`,
    traceVi: [
      'Nếu DNS sai, browser không biết IP đích nên không đi tiếp được.',
      'Nếu TCP bị chặn, kết nối tới server không được thiết lập.',
      'Nếu certificate TLS không hợp lệ, browser cảnh báo vì không tin server.',
      'Nếu HTTP status là 404, network có thể vẫn ổn; lỗi nằm ở tài nguyên không tồn tại.',
      'Vì vậy khi debug network phải xác định lỗi ở DNS, kết nối, TLS hay application response.'
    ],
    practiceVi: 'Tính usable hosts của /28 và giải thích vì sao phải trừ 2 địa chỉ.',
    expectedOutput: `/28 => 32-28 = 4 host bits\n2^4 = 16 addresses\nUsable hosts = 16 - 2 = 14\nTrừ network address và broadcast address.`,
    quizQuestionVi: 'HTTPS khác HTTP ở điểm chính nào?',
    quizAnswerVi: 'HTTPS dùng TLS để mã hóa và xác thực server, giúp dữ liệu trên đường truyền khó bị đọc/sửa trái phép.',
    commonMisunderstandingVi: 'Sai phổ biến là thấy không vào được web thì kết luận server chết. Thực tế có thể lỗi DNS, firewall, TLS, route hoặc ứng dụng.',
    examReadyVi: 'Với câu network, hãy đặt câu hỏi: lỗi ở tên miền, địa chỉ, kết nối, mã hóa hay tầng ứng dụng?'
  };
}

function securityLesson(node: KnowledgeNodeData): EasyDeepLesson {
  const name = nodeTitle(node);
  return {
    id: `${node.id}-v102-fe-easy`,
    courseLabel: 'V102R 基本情報 · Security easy deep lesson',
    titleVi: `${name}: đọc bảo mật theo threat → impact → countermeasure`,
    goalVi: 'Biết phân tích một tình huống bảo mật bằng 4 câu hỏi: ai làm, tài sản nào bị ảnh hưởng, rủi ro gì, biện pháp nào phù hợp.',
    bigIdeaVi: 'Security trong FE hiếm khi chỉ hỏi định nghĩa. Đề thường đưa log, hành vi người dùng, cấu hình hoặc sự cố rồi yêu cầu chọn biện pháp giảm rủi ro hợp lý nhất.',
    explainVi: [
      'Authentication là xác nhận bạn là ai. Authorization là bạn được phép làm gì. Đây là cặp rất hay bị nhầm.',
      'CIA giúp phân loại impact: confidentiality là lộ dữ liệu, integrity là dữ liệu bị sửa sai, availability là hệ thống không dùng được.',
      'Log cần đọc theo timeline. Một chuỗi 403 rồi sau đó admin action thành công có thể gợi ý token/session bị lạm dụng hoặc privilege escalation.',
      'Countermeasure phải khớp threat. Phishing cần training + MFA + kiểm tra link; SQL injection cần prepared statement; rò rỉ quyền cần least privilege và audit.'
    ],
    analogyVi: 'Security giống bảo vệ tòa nhà: kiểm tra danh tính ở cổng, phân quyền từng phòng, ghi camera, và khóa lại lối vào nguy hiểm.',
    sampleTitleVi: 'Security scenario mẫu',
    sampleBody: `09:00 userA login success\n09:03 userA calls /admin/users -> 403\n09:04 userA calls /admin/config -> 403\n09:08 admin token changes payment setting -> 200\nQuestion: kiểm tra đầu tiên gì?`,
    traceVi: [
      '403 nghĩa là userA đã được nhận diện nhưng không có quyền với admin API.',
      'Nhiều request admin thất bại liên tiếp là dấu hiệu thử quyền hoặc thăm dò endpoint.',
      'Sau đó có thay đổi bằng admin token, nên cần nối timeline giữa user/session/token.',
      'Việc đầu tiên không phải đổi UI hay benchmark CPU, mà là kiểm tra lịch sử token/session, IP, thiết bị và quyền.',
      'Sau khi xác nhận scope mới khóa token, reset credential, audit thay đổi và vá nguyên nhân.'
    ],
    practiceVi: 'Cho log có 5 lần login fail rồi 1 lần success từ quốc gia lạ. Viết 3 hành động kiểm tra đầu tiên.',
    expectedOutput: `1. Kiểm tra account, IP, device, thời gian.\n2. Xác minh với người dùng hoặc buộc reset/MFA nếu nghi ngờ.\n3. Xem hành động sau login success để đánh giá impact.`,
    quizQuestionVi: 'Authentication và authorization khác nhau thế nào?',
    quizAnswerVi: 'Authentication xác nhận danh tính; authorization quyết định quyền được làm gì sau khi đã xác thực.',
    commonMisunderstandingVi: 'Sai phổ biến là chọn biện pháp chung chung như “tăng bảo mật” nhưng không khớp threat cụ thể trong đề.',
    examReadyVi: 'Khi gặp câu security, hãy viết threat, impact, evidence trong log, countermeasure tương ứng.'
  };
}

function managementLesson(node: KnowledgeNodeData): EasyDeepLesson {
  const name = nodeTitle(node);
  return {
    id: `${node.id}-v102-fe-easy`,
    courseLabel: 'V102R 基本情報 · Management easy deep lesson',
    titleVi: `${name}: xử lý bài quản lý bằng mục tiêu, rủi ro và bằng chứng`,
    goalVi: 'Biết chọn hành động quản lý phù hợp: nắm tình hình, phân tích impact, lập kế hoạch, truyền đạt với stakeholder, rồi theo dõi kết quả.',
    bigIdeaVi: 'Management không phải học thuộc tên biểu đồ. Cốt lõi là quản lý công việc để đạt mục tiêu trong phạm vi, thời gian, chi phí, chất lượng và rủi ro cho phép.',
    explainVi: [
      'WBS chia nhỏ phạm vi công việc. Nó trả lời “cần làm những việc gì”, chưa phải lịch chi tiết.',
      'Gantt chart cho biết việc nào diễn ra khi nào. Critical path cho biết chuỗi công việc quyết định deadline toàn dự án.',
      'Risk là điều có thể xảy ra trong tương lai; issue là vấn đề đã xảy ra. Risk cần được đánh giá trước khi thành issue.',
      'Khi có thay đổi yêu cầu hoặc API ngoài đổi spec, bước đầu thường là phân tích impact và lập kế hoạch, không phản ứng cực đoan ngay.'
    ],
    analogyVi: 'Quản lý dự án giống tổ chức chuyến đi: biết cần làm gì, ai làm, khi nào xong, nếu mưa thì phương án B là gì.',
    sampleTitleVi: 'Scenario quản lý mẫu',
    sampleBody: `Một API ngoài mà hệ thống đang phụ thuộc thông báo sẽ đổi spec sau 2 tháng.\nA. Không làm gì\nB. Dừng toàn bộ service ngay\nC. Khảo sát ảnh hưởng và lập kế hoạch sửa\nD. Chỉ đổi màu UI`,
    traceVi: [
      'Đây là risk đã biết vì sự kiện chưa xảy ra nhưng có khả năng ảnh hưởng hệ thống.',
      'Không làm gì là bỏ qua risk.',
      'Dừng toàn bộ service ngay là quá cực đoan nếu chưa phân tích impact.',
      'Đổi UI không xử lý dependency API.',
      'Hành động đúng là khảo sát phạm vi ảnh hưởng, estimate, lập kế hoạch và truyền đạt stakeholder.'
    ],
    practiceVi: 'Viết checklist 4 bước khi phát hiện requirement thay đổi giữa dự án.',
    expectedOutput: `1. Ghi rõ thay đổi là gì.\n2. Phân tích impact tới scope/time/cost/quality.\n3. Đề xuất phương án và xin quyết định.\n4. Cập nhật kế hoạch, task, test và thông báo đội liên quan.`,
    quizQuestionVi: 'Risk khác issue thế nào?',
    quizAnswerVi: 'Risk là khả năng có thể xảy ra; issue là vấn đề đã xảy ra và cần xử lý ngay.',
    commonMisunderstandingVi: 'Sai phổ biến là chọn hành động “làm ngay” trước khi phân tích impact. Trong quản lý, bước đầu thường là nắm tình hình và đánh giá.',
    examReadyVi: 'Với câu management, hãy hỏi: mục tiêu là gì, ràng buộc nào bị ảnh hưởng, bằng chứng nào cần xác nhận?'
  };
}

function computerLesson(node: KnowledgeNodeData): EasyDeepLesson {
  const name = nodeTitle(node);
  return {
    id: `${node.id}-v102-fe-easy`,
    courseLabel: 'V102R 基本情報 · Computer/System easy deep lesson',
    titleVi: `${name}: hiểu hệ thống bằng input → xử lý → lưu trữ → lỗi`,
    goalVi: 'Biết nối phần cứng, OS, memory, process, file, cloud và system design vào một luồng xử lý thực tế.',
    bigIdeaVi: 'Máy tính không chỉ là CPU/RAM rời rạc. Một request chạy qua CPU, memory, storage, OS scheduling, network và có thể gặp bottleneck ở bất kỳ điểm nào.',
    explainVi: [
      'CPU thực thi lệnh; memory giữ dữ liệu đang dùng; storage lưu lâu dài. Cache giúp truy cập nhanh hơn nhưng cần hiểu dữ liệu có thể cũ.',
      'OS quản lý process, thread, file, memory và device. Khi app chậm, có thể do CPU, I/O, memory hoặc lock chứ không chỉ do code.',
      'System design trong FE thường hỏi tính sẵn sàng, backup, redundancy, scaling và trade-off giữa cost/performance/reliability.',
      'Khi đọc câu hệ thống, hãy tìm bottleneck: xử lý, mạng, DB, storage, quyền truy cập hay vận hành.'
    ],
    analogyVi: 'Hệ thống giống nhà hàng: CPU là đầu bếp, RAM là bàn bếp, storage là kho, OS là quản lý phân việc, network là shipper.',
    sampleTitleVi: 'Scenario hệ thống mẫu',
    sampleBody: `Web app chậm khi nhiều người upload file.\nCPU: 30%\nMemory: 70%\nDisk I/O: 95%\nNetwork: 40%\nQuestion: bottleneck gần nhất là gì?`,
    traceVi: [
      'CPU không cao nên chưa phải bottleneck chính.',
      'Memory 70% cần theo dõi nhưng chưa chạm ngưỡng nguy hiểm.',
      'Disk I/O 95% rất cao và trùng với hành động upload file.',
      'Network 40% không phải dấu hiệu nghẽn chính.',
      'Kết luận hợp lý: bottleneck gần nhất là storage/disk I/O.'
    ],
    practiceVi: 'Cho CPU 95%, Disk 20%, Network 30%, response chậm khi tính report. Hãy chọn bottleneck và đề xuất 2 hướng xử lý.',
    expectedOutput: `Bottleneck: CPU.\nHướng xử lý: tối ưu thuật toán/query tính toán, cache kết quả, background job, scale worker nếu cần.`,
    quizQuestionVi: 'Backup chủ yếu hỗ trợ yếu tố nào của CIA?',
    quizAnswerVi: 'Thường hỗ trợ Availability và phục hồi dữ liệu khi có lỗi hoặc sự cố.',
    commonMisunderstandingVi: 'Sai phổ biến là thấy app chậm thì đoán network. Cần đọc metric và bối cảnh hành động gây chậm.',
    examReadyVi: 'Với câu system, hãy tìm dấu hiệu đo lường và nối với bottleneck tương ứng.'
  };
}

export function buildFundamentalInfoV102EasyLesson(node: KnowledgeNodeData): EasyDeepLesson {
  const text = nodeText(node);
  if (includes(text, 'sql', 'database', 'db', 'join', 'group', 'transaction', 'normal')) return sqlLesson(node);
  if (includes(text, 'network', 'subnet', 'cidr', 'tcp', 'udp', 'dns', 'http', 'https', 'ip')) return networkLesson(node);
  if (includes(text, 'security', 'auth', '暗号', 'cipher', 'hash', 'log', 'malware', 'access', 'risk')) return securityLesson(node);
  if (includes(text, 'management', 'project', 'wbs', 'gantt', 'risk', 'quality', 'development', 'test', 'agile')) return managementLesson(node);
  if (includes(text, 'computer', 'software', 'os', 'cpu', 'memory', 'cache', 'cloud', 'system', 'availability')) return computerLesson(node);
  return algorithmLesson(node);
}
