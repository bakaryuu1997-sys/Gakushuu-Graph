import type { KnowledgeNodeData } from '../../features/knowledge-graph/types';
import type { EasyDeepLesson } from '../v102v103EasyLessonTypes';
import { nodeText, nodeTitle } from '../v102v103EasyLessonTypes';

const includes = (text: string, ...words: string[]) => words.some((word) => text.includes(word));

function mlLesson(node: KnowledgeNodeData): EasyDeepLesson {
  const name = nodeTitle(node);
  return {
    id: `${node.id}-v103-ai-easy`,
    courseLabel: 'V103R AI Passport · ML easy deep lesson',
    titleVi: `${name}: hiểu machine learning bằng data → model → prediction → evaluation`,
    goalVi: 'Hiểu ML không phải “máy tự thông minh”, mà là học quy luật từ dữ liệu quá khứ để dự đoán hoặc phân loại dữ liệu mới.',
    bigIdeaVi: 'Một bài ML luôn có 4 phần: dữ liệu đầu vào, mô hình học quy luật, kết quả dự đoán, và cách đánh giá dự đoán có tốt không. Nếu thiếu dữ liệu tốt hoặc đánh giá đúng, mô hình dễ cho kết quả sai.',
    explainVi: [
      'Training data là dữ liệu dùng để mô hình học. Test data là dữ liệu giữ lại để kiểm tra mô hình trên tình huống chưa thấy.',
      'Classification trả nhãn như spam/không spam, lỗi/không lỗi. Regression trả số như giá nhà, doanh thu, nhiệt độ.',
      'Overfitting là khi mô hình học quá sát dữ liệu cũ nên điểm training cao nhưng gặp dữ liệu mới thì kém.',
      'Preprocessing như làm sạch dữ liệu, xử lý thiếu, chuẩn hóa giá trị thường quyết định chất lượng model nhiều hơn việc chọn thuật toán đẹp.'
    ],
    analogyVi: 'ML giống học dự đoán điểm thi từ bài luyện cũ. Nếu chỉ học thuộc đáp án bài cũ, gặp đề mới sẽ sai — đó là overfitting.',
    sampleTitleVi: 'Case study ML mẫu',
    sampleBody: `Mục tiêu: dự đoán khách hàng có hủy dịch vụ hay không.\nData: số lần đăng nhập, số ticket hỗ trợ, gói đang dùng, thời gian sử dụng.\nModel: classification.\nOutput: churn=true/false hoặc xác suất hủy.\nEvaluation: precision, recall, confusion matrix.`,
    traceVi: [
      'Đầu tiên xác định target: khách hủy hay không hủy. Đây là bài classification vì output là nhãn.',
      'Tách train/test để tránh tự chấm trên dữ liệu đã học.',
      'Làm sạch dữ liệu thiếu, ví dụ ticket_count bị null thì xử lý trước khi train.',
      'Train model trên dữ liệu quá khứ.',
      'Đánh giá trên test data, nếu recall thấp thì nhiều khách sắp hủy bị bỏ sót.'
    ],
    practiceVi: 'Cho bài toán dự đoán doanh thu tháng sau là 1 con số. Hãy xác định đó là classification hay regression và nêu dữ liệu cần thu thập.',
    expectedOutput: `Loại bài toán: regression.\nCần dữ liệu: doanh thu tháng trước, số khách, chiến dịch marketing, mùa vụ, giá sản phẩm, ngày nghỉ.`,
    quizQuestionVi: 'Vì sao không nên dùng test data để training?',
    quizAnswerVi: 'Vì test data dùng để kiểm tra khả năng tổng quát hóa. Nếu dùng để training, điểm đánh giá sẽ bị ảo.',
    commonMisunderstandingVi: 'Sai phổ biến là nghĩ model điểm cao nghĩa là chắc chắn tốt. Phải xem dữ liệu test, metric phù hợp và bias/rủi ro trong dữ liệu.',
    examReadyVi: 'Gặp câu AI Passport về ML, hãy tìm target, loại output, dữ liệu train/test, metric và rủi ro overfitting.'
  };
}

function genAiLesson(node: KnowledgeNodeData): EasyDeepLesson {
  const name = nodeTitle(node);
  return {
    id: `${node.id}-v103-ai-easy`,
    courseLabel: 'V103R AI Passport · Generative AI easy deep lesson',
    titleVi: `${name}: hiểu GenAI/LLM bằng prompt → context → output → kiểm chứng`,
    goalVi: 'Biết dùng và đánh giá GenAI một cách an toàn: đặt câu hỏi rõ, cung cấp ngữ cảnh, kiểm tra nguồn và không đưa dữ liệu nhạy cảm bừa bãi.',
    bigIdeaVi: 'LLM sinh câu trả lời dựa trên xác suất ngôn ngữ và ngữ cảnh bạn cung cấp. Nó có thể hữu ích để tóm tắt, soạn thảo, phân loại, giải thích, nhưng cũng có thể hallucinate nên cần kiểm chứng.',
    explainVi: [
      'Prompt tốt nói rõ vai trò, mục tiêu, dữ liệu đầu vào, định dạng output và tiêu chí đúng/sai.',
      'RAG là cách đưa tài liệu liên quan vào context để model trả lời dựa trên nguồn nội bộ thay vì chỉ dựa vào kiến thức chung.',
      'Hallucination là khi model trả lời nghe có vẻ hợp lý nhưng không có căn cứ hoặc sai nguồn.',
      'Trong doanh nghiệp, cần quy định dữ liệu nào được nhập vào GenAI, ai chịu trách nhiệm kiểm tra, và log/audit ra sao.'
    ],
    analogyVi: 'GenAI giống một trợ lý viết rất nhanh. Trợ lý đó cần brief rõ ràng và người quản lý phải kiểm tra lại trước khi gửi ra ngoài.',
    sampleTitleVi: 'Prompt mẫu',
    sampleBody: `Vai trò: Bạn là trợ lý CSKH.\nMục tiêu: tóm tắt khiếu nại khách hàng trong 5 dòng.\nDữ liệu: nội dung ticket đã ẩn thông tin cá nhân.\nOutput: vấn đề chính, mức độ khẩn cấp, hành động tiếp theo.\nRàng buộc: không tự bịa chính sách hoàn tiền.`,
    traceVi: [
      'Vai trò giúp model chọn giọng và phạm vi trả lời.',
      'Mục tiêu giới hạn việc cần làm: tóm tắt ticket, không giải quyết toàn bộ vụ việc.',
      'Dữ liệu đã ẩn thông tin cá nhân giúp giảm rủi ro privacy.',
      'Output format giúp kết quả dễ dùng trong workflow.',
      'Ràng buộc “không tự bịa” nhắc người dùng phải kiểm tra chính sách thật.'
    ],
    practiceVi: 'Viết prompt cho tình huống tóm tắt biên bản họp dự án, yêu cầu output gồm quyết định, việc cần làm, người phụ trách, deadline.',
    expectedOutput: `Prompt cần có:\n- Vai trò và mục tiêu\n- Input là biên bản họp\n- Output 4 nhóm: quyết định / task / owner / deadline\n- Ràng buộc: không thêm task nếu biên bản không nói`,
    quizQuestionVi: 'RAG giúp giảm hallucination bằng cách nào?',
    quizAnswerVi: 'RAG đưa tài liệu liên quan vào context để model dựa vào nguồn cụ thể hơn, nhưng vẫn cần kiểm chứng output.',
    commonMisunderstandingVi: 'Sai phổ biến là xem GenAI như nguồn sự thật tuyệt đối. Nó là công cụ hỗ trợ, không thay thế kiểm chứng và trách nhiệm con người.',
    examReadyVi: 'Gặp câu GenAI, hãy chọn đáp án có kiểm chứng, bảo vệ dữ liệu, human review và mục đích sử dụng rõ ràng.'
  };
}

function ethicsLesson(node: KnowledgeNodeData): EasyDeepLesson {
  const name = nodeTitle(node);
  return {
    id: `${node.id}-v103-ai-easy`,
    courseLabel: 'V103R AI Passport · Ethics/Law easy deep lesson',
    titleVi: `${name}: học đạo đức AI bằng quyền riêng tư, công bằng và trách nhiệm`,
    goalVi: 'Biết nhận diện rủi ro đạo đức/pháp lý khi dùng AI: dữ liệu cá nhân, bias, minh bạch, trách nhiệm và giám sát con người.',
    bigIdeaVi: 'AI không chỉ là kỹ thuật. Khi AI ảnh hưởng tới con người, doanh nghiệp phải giải thích được dữ liệu lấy từ đâu, quyết định có công bằng không, ai kiểm tra và ai chịu trách nhiệm.',
    explainVi: [
      'Privacy nghĩa là dữ liệu cá nhân phải được thu thập đúng mục đích, dùng đúng phạm vi và bảo vệ khỏi rò rỉ.',
      'Bias xảy ra khi dữ liệu hoặc quy trình làm model đối xử bất công với một nhóm người.',
      'Transparency không nhất thiết phải mở toàn bộ code, nhưng cần giải thích mục đích, dữ liệu chính và cách khiếu nại/kiểm tra.',
      'Human oversight rất quan trọng trong quyết định có tác động lớn như tuyển dụng, tín dụng, y tế hoặc kỷ luật nhân sự.'
    ],
    analogyVi: 'Dùng AI giống giao một phần quyết định cho trợ lý. Nếu trợ lý ảnh hưởng tới quyền lợi con người, bạn phải biết trợ lý dựa vào đâu và kiểm tra được khi sai.',
    sampleTitleVi: 'Case đạo đức mẫu',
    sampleBody: `Công ty muốn dùng AI để lọc CV.\nDữ liệu: CV cũ và kết quả tuyển dụng quá khứ.\nRủi ro: bias theo giới tính/tuổi/trường học.\nBiện pháp: kiểm tra bias, bỏ thuộc tính nhạy cảm không cần thiết, human review, giải thích tiêu chí.`,
    traceVi: [
      'Mục tiêu là hỗ trợ lọc CV, nhưng kết quả ảnh hưởng trực tiếp tới cơ hội việc làm.',
      'Dữ liệu quá khứ có thể chứa bias tuyển dụng cũ.',
      'Nếu model học từ bias đó, nó có thể tiếp tục loại ứng viên không công bằng.',
      'Biện pháp đúng là kiểm tra bias và để con người review quyết định quan trọng.',
      'Không nên chọn đáp án “AI tự quyết định hoàn toàn vì nhanh hơn”.'
    ],
    practiceVi: 'Phân tích rủi ro khi dùng AI chấm điểm cuộc gọi CSKH. Nêu 3 biện pháp giảm rủi ro.',
    expectedOutput: `Rủi ro: ghi âm có dữ liệu cá nhân, bias theo giọng nói/ngôn ngữ, đánh giá sai nhân viên.\nBiện pháp: thông báo mục đích, ẩn dữ liệu nhạy cảm, kiểm tra bias, human review, quy trình khiếu nại.`,
    quizQuestionVi: 'Vì sao quyết định tuyển dụng không nên giao hoàn toàn cho AI?',
    quizAnswerVi: 'Vì có tác động lớn tới con người, dễ có bias và cần trách nhiệm/human review.',
    commonMisunderstandingVi: 'Sai phổ biến là nghĩ ẩn tên là đủ hết rủi ro. Các thuộc tính khác như trường học, địa chỉ, lịch sử cũng có thể tạo bias gián tiếp.',
    examReadyVi: 'Gặp câu ethics/law, hãy ưu tiên đáp án có mục đích rõ, tối thiểu hóa dữ liệu, kiểm tra bias, minh bạch và con người chịu trách nhiệm.'
  };
}

function businessLesson(node: KnowledgeNodeData): EasyDeepLesson {
  const name = nodeTitle(node);
  return {
    id: `${node.id}-v103-ai-easy`,
    courseLabel: 'V103R AI Passport · Business easy deep lesson',
    titleVi: `${name}: chọn use case AI bằng vấn đề kinh doanh, dữ liệu và hiệu quả`,
    goalVi: 'Biết đánh giá AI use case: giải quyết vấn đề gì, có dữ liệu không, đo hiệu quả thế nào, rủi ro vận hành là gì.',
    bigIdeaVi: 'AI trong business không bắt đầu từ “dùng model gì”, mà bắt đầu từ vấn đề cần cải thiện. Nếu không có mục tiêu đo được, AI dễ trở thành demo đẹp nhưng không tạo giá trị.',
    explainVi: [
      'Use case tốt có pain point rõ: giảm thời gian xử lý, tăng chất lượng, phát hiện lỗi sớm, cá nhân hóa đề xuất hoặc hỗ trợ ra quyết định.',
      'Cần dữ liệu đủ liên quan và đủ chất lượng. Không có dữ liệu hoặc dữ liệu sai thì model tốt cũng không cứu được.',
      'KPI phải đo được trước/sau: thời gian xử lý, tỉ lệ lỗi, chi phí, doanh thu, mức hài lòng khách hàng.',
      'Cần pilot nhỏ trước khi triển khai rộng để kiểm tra hiệu quả, rủi ro và phản ứng người dùng.'
    ],
    analogyVi: 'Áp dụng AI giống mua máy móc cho xưởng: phải biết máy giải quyết công đoạn nào, năng suất tăng bao nhiêu, ai vận hành và bảo trì ra sao.',
    sampleTitleVi: 'Use case mẫu',
    sampleBody: `Vấn đề: CSKH mất nhiều thời gian phân loại ticket.\nAI use case: tự gợi ý category và mức độ ưu tiên.\nData: ticket cũ đã gắn category, thời gian xử lý, kết quả.\nKPI: giảm 30% thời gian phân loại, không tăng tỉ lệ phân loại sai.\nRisk: sai category làm ticket khẩn bị chậm.`,
    traceVi: [
      'Bắt đầu từ vấn đề: phân loại ticket tốn thời gian.',
      'Output AI là gợi ý category/priority, không nhất thiết tự xử lý toàn bộ ticket.',
      'Dữ liệu train cần ticket cũ có label đáng tin.',
      'KPI đo thời gian và lỗi, không chỉ đo “AI chạy được”.',
      'Risk được giảm bằng human review cho ticket có độ tự tin thấp hoặc mức khẩn cấp cao.'
    ],
    practiceVi: 'Đề xuất AI use case cho cửa hàng online: chọn 1 vấn đề, input data, output, KPI, risk.',
    expectedOutput: `Ví dụ: gợi ý sản phẩm.\nInput: lịch sử mua/xem hàng, danh mục, tồn kho.\nOutput: top 5 sản phẩm đề xuất.\nKPI: CTR, conversion, doanh thu/order.\nRisk: đề xuất thiên lệch, privacy, spam recommendation.`,
    quizQuestionVi: 'Vì sao không nên bắt đầu dự án AI bằng câu “hãy dùng deep learning”?',
    quizAnswerVi: 'Vì phải bắt đầu từ vấn đề kinh doanh, dữ liệu và KPI; thuật toán chỉ là phương tiện.',
    commonMisunderstandingVi: 'Sai phổ biến là chọn AI cho mọi việc. Có bài toán chỉ cần rule, dashboard hoặc cải tiến quy trình là đủ.',
    examReadyVi: 'Gặp câu business AI, hãy chọn đáp án có mục tiêu rõ, dữ liệu phù hợp, KPI đo được, pilot và quản trị rủi ro.'
  };
}

function governanceLesson(node: KnowledgeNodeData): EasyDeepLesson {
  const name = nodeTitle(node);
  return {
    id: `${node.id}-v103-ai-easy`,
    courseLabel: 'V103R AI Passport · Governance easy deep lesson',
    titleVi: `${name}: vận hành AI an toàn bằng rule, log, review và cải tiến`,
    goalVi: 'Hiểu AI governance là cách tổ chức kiểm soát việc dùng AI: chính sách, phân quyền, đánh giá rủi ro, log, giám sát và cải tiến liên tục.',
    bigIdeaVi: 'Khi AI đi vào vận hành thật, rủi ro không dừng ở lúc train model. Output có thể sai, dữ liệu có thể drift, người dùng có thể nhập thông tin nhạy cảm, nên cần quy trình kiểm soát.',
    explainVi: [
      'Policy quy định được dùng AI vào việc gì, dữ liệu nào được nhập, ai được phê duyệt và trường hợp nào cấm dùng.',
      'Logging/audit giúp truy vết input, output, version model và người dùng khi có sự cố.',
      'Monitoring theo dõi chất lượng output sau triển khai, vì dữ liệu thực tế có thể thay đổi theo thời gian.',
      'Incident response xác định cách xử lý khi AI trả kết quả nguy hiểm, rò rỉ dữ liệu hoặc gây quyết định sai.'
    ],
    analogyVi: 'Governance giống luật giao thông cho AI: không phải cấm xe chạy, mà đặt biển báo, giới hạn tốc độ, camera và quy trình xử lý tai nạn.',
    sampleTitleVi: 'Governance checklist mẫu',
    sampleBody: `Trước khi triển khai chatbot nội bộ:\n- Có danh sách dữ liệu cấm nhập không?\n- Có human review cho câu trả lời rủi ro cao không?\n- Có log prompt/output không?\n- Có cách report hallucination không?\n- Có owner chịu trách nhiệm không?`,
    traceVi: [
      'Dữ liệu cấm nhập giảm rủi ro privacy và secret leakage.',
      'Human review cần cho output ảnh hưởng tới pháp lý, khách hàng hoặc tài chính.',
      'Log giúp điều tra khi có câu trả lời sai.',
      'Report mechanism giúp cải tiến prompt/RAG/model.',
      'Owner rõ ràng tránh tình trạng không ai chịu trách nhiệm khi xảy ra sự cố.'
    ],
    practiceVi: 'Viết 5 rule sử dụng GenAI an toàn cho team dev hoặc BrSE.',
    expectedOutput: `1. Không nhập secret/API key/thông tin cá nhân.\n2. Kiểm tra output trước khi gửi khách hàng.\n3. Ghi nguồn nếu dùng tài liệu nội bộ.\n4. Human review với quyết định quan trọng.\n5. Báo cáo hallucination hoặc output nguy hiểm.`,
    quizQuestionVi: 'Vì sao cần log prompt/output trong hệ thống AI doanh nghiệp?',
    quizAnswerVi: 'Để audit, điều tra lỗi, cải tiến chất lượng và xác định trách nhiệm khi có sự cố.',
    commonMisunderstandingVi: 'Sai phổ biến là nghĩ deploy xong model là xong. AI cần monitoring và governance trong suốt vòng đời vận hành.',
    examReadyVi: 'Gặp câu governance, hãy chọn đáp án có policy, human oversight, audit log, monitoring và incident response.'
  };
}

export function buildAiPassportV103EasyLesson(node: KnowledgeNodeData): EasyDeepLesson {
  const text = nodeText(node);
  if (includes(text, 'machine', 'learning', 'ml', 'model', 'training', 'test', 'classification', 'regression', 'overfitting', 'data')) return mlLesson(node);
  if (includes(text, 'generative', 'genai', 'llm', 'prompt', 'rag', 'chatgpt', 'language model', '生成')) return genAiLesson(node);
  if (includes(text, 'ethic', 'law', 'privacy', 'personal', 'bias', 'fair', 'copyright', 'governance', 'human oversight', '透明', '個人')) return ethicsLesson(node);
  if (includes(text, 'security', 'risk', 'audit', 'incident', 'policy', 'compliance', 'governance')) return governanceLesson(node);
  if (includes(text, 'business', 'strategy', 'roi', 'kpi', 'customer', 'marketing', 'workflow', 'dx', 'management')) return businessLesson(node);
  return mlLesson(node);
}
