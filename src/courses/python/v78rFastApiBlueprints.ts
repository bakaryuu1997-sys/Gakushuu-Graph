export interface PythonV78RFastApiBlueprint {
  id: string;
  title: string;
  route: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  purposeVi: string;
  requestExample: string;
  responseExample: string;
  validationChecks: string[];
  localOnlyNotes: string[];
  testPlan: string[];
}

export const pythonV78RFastApiBlueprints: PythonV78RFastApiBlueprint[] = [
  {
    id: 'health-check', title: 'Health Check', method: 'GET', route: '/health', purposeVi: 'Kiểm tra app local còn chạy trước khi gọi endpoint khác.',
    requestExample: 'GET /health', responseExample: '{"ok": true, "service": "local-study-api"}',
    validationChecks: ['Không cần body.', 'Status 200.', 'Response luôn có ok boolean.'],
    localOnlyNotes: ['Không auth.', 'Không cloud dependency.', 'Dùng để debug local server.'],
    testPlan: ['curl http://localhost:8000/health', 'Kiểm tra JSON có ok=true']
  },
  {
    id: 'grade-quiz', title: 'Grade Quiz Attempt', method: 'POST', route: '/grade', purposeVi: 'Chấm bài quiz local và trả wrong list để review.',
    requestExample: '{"answers":{"q1":"A","q2":"C"}}', responseExample: '{"score":2,"wrong":[]}',
    validationChecks: ['answers phải là object/dict.', 'Thiếu câu nào thì câu đó vào wrong.', 'Không trả đáp án đúng nếu muốn luyện lại.'],
    localOnlyNotes: ['Attempt có thể lưu localStorage hoặc file JSON.', 'Không cần login.', 'Không gửi dữ liệu ra ngoài.'],
    testPlan: ['Happy path score full.', 'Missing answer returns wrong.', 'answers as list returns 422.']
  },
  {
    id: 'todo-crud', title: 'Local Todo CRUD', method: 'POST', route: '/todos', purposeVi: 'Luyện CRUD nhỏ không database: list in-memory hoặc file JSON.',
    requestExample: '{"title":"review stack","done":false}', responseExample: '{"id":"todo-1","title":"review stack","done":false}',
    validationChecks: ['title min_length=1.', 'done default false.', 'id tạo trong service, không tin id từ client.'],
    localOnlyNotes: ['Dữ liệu reset khi refresh nếu dùng memory.', 'File JSON đủ cho học local.', 'Chưa cần auth/user.'],
    testPlan: ['Create todo.', 'Reject empty title.', 'List after create contains item.']
  },
  {
    id: 'rag-mock', title: 'RAG Mock Ask', method: 'POST', route: '/ask', purposeVi: 'Mô phỏng AI/RAG local: question → retrieve → answer + sources.',
    requestExample: '{"question":"FastAPI dùng để làm gì?"}', responseExample: '{"answer":"...","sources":["doc-1"]}',
    validationChecks: ['question không rỗng.', 'sources luôn là list.', 'Không bịa source nếu không retrieve được.'],
    localOnlyNotes: ['Dùng mock docs trong code.', 'Không gọi API bên ngoài.', 'Dễ thay bằng embedding local sau này.'],
    testPlan: ['Question empty returns 422.', 'Known keyword returns source.', 'Unknown question returns safe fallback.']
  }
];
