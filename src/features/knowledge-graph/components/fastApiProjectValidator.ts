export type FastApiProjectType = 'generic' | 'todo' | 'quiz' | 'rag' | 'predict';

export interface FastApiValidationRow {
  label: string;
  labelJa: string;
  ok: boolean;
  required: boolean;
  hintVi: string;
  hintJa: string;
}

export interface FastApiValidationResult {
  projectType: FastApiProjectType;
  score: number;
  passed: number;
  total: number;
  rows: FastApiValidationRow[];
  summaryVi: string;
  summaryJa: string;
}

const has = (code: string, pattern: RegExp | string) =>
  typeof pattern === 'string' ? code.includes(pattern) : pattern.test(code);

const row = (
  code: string,
  label: string,
  labelJa: string,
  pattern: RegExp | string,
  required: boolean,
  hintVi: string,
  hintJa: string,
): FastApiValidationRow => ({
  label,
  labelJa,
  ok: has(code, pattern),
  required,
  hintVi,
  hintJa,
});

export const detectFastApiProjectType = (code: string): FastApiProjectType => {
  const normalized = code.toLowerCase();
  if (normalized.includes('/ask') || normalized.includes('sources') || normalized.includes('rag')) return 'rag';
  if (normalized.includes('/submit') || normalized.includes('/questions') || normalized.includes('score')) return 'quiz';
  if (normalized.includes('/predict') || normalized.includes('features') || normalized.includes('confidence')) return 'predict';
  if (normalized.includes('/todos') || normalized.includes('todo')) return 'todo';
  return 'generic';
};

const projectSpecificRows = (code: string, projectType: FastApiProjectType) => {
  if (projectType === 'todo') {
    return [
      row(code, 'Todo list route /todos', 'Todo一覧route /todos', /['"]\/todos['"]/, true, 'Cần route danh sách todo.', 'todo一覧routeが必要です。'),
      row(code, 'Create todo with POST', 'POSTでtodo作成', /@app\.post\s*\(\s*['"]\/todos/, true, 'Cần POST /todos để tạo item.', 'POST /todosでitemを作成します。'),
      row(code, 'Todo id handling', 'todo id処理', /todo_id|\{id\}|\{todo_id\}|id:/, false, 'Nên xử lý id cho get/update/delete.', 'get/update/delete用のid処理が望ましいです。'),
    ];
  }
  if (projectType === 'quiz') {
    return [
      row(code, 'Question route', '問題route', /\/questions/, true, 'Quiz API cần endpoint lấy câu hỏi.', 'Quiz APIには問題取得endpointが必要です。'),
      row(code, 'Submit route', '提出route', /\/submit/, true, 'Cần endpoint chấm câu trả lời.', '回答を採点するendpointが必要です。'),
      row(code, 'Score and wrong list', 'scoreとwrong list', /score["']?\s*:|wrong/, true, 'Response nên có score và danh sách sai.', 'responseはscoreと誤答listを持つべきです。'),
    ];
  }
  if (projectType === 'rag') {
    return [
      row(code, 'Ask route /ask', '質問route /ask', /\/ask/, true, 'RAG mock cần POST /ask.', 'RAG mockにはPOST /askが必要です。'),
      row(code, 'Answer field', 'answer field', /answer/, true, 'Response cần answer.', 'responseにはanswerが必要です。'),
      row(code, 'Sources field', 'sources field', /sources/, true, 'Response cần sources để kiểm chứng.', '確認用にsourcesが必要です。'),
      row(code, 'Retrieve/search function', '検索関数', /retrieve|search|documents|docs/, false, 'Nên tách retrieval khỏi route.', 'retrievalをrouteから分離すると良いです。'),
    ];
  }
  if (projectType === 'predict') {
    return [
      row(code, 'Predict route /predict', '予測route /predict', /\/predict/, true, 'AI API cần POST /predict.', 'AI APIにはPOST /predictが必要です。'),
      row(code, 'Features input', 'features input', /features/, true, 'Input nên có features.', 'inputはfeaturesを持つべきです。'),
      row(code, 'Label/confidence response', 'label/confidence response', /label|confidence/, true, 'Response nên có label và confidence.', 'responseはlabelとconfidenceを持つべきです。'),
      row(code, 'Service function', 'service関数', /predict_label|predict_service|service|model/, false, 'Nên tách model logic khỏi route.', 'model logicをrouteから分離すると良いです。'),
    ];
  }
  return [];
};

export const validateFastApiProject = (code: string, forcedType?: FastApiProjectType): FastApiValidationResult => {
  const projectType = forcedType ?? detectFastApiProjectType(code);
  const rows = [
    row(code, 'FastAPI app instance', 'FastAPI app instance', /FastAPI\s*\(/, true, 'Tạo app = FastAPI().', 'app = FastAPI()を作ります。'),
    row(code, 'At least one route', '少なくとも1つのroute', /@app\.(get|post|patch|put|delete)\s*\(/, true, 'Dùng decorator @app.get hoặc @app.post.', '@app.get または @app.postを使います。'),
    row(code, 'POST route for input', 'input用POST route', /@app\.post\s*\(/, false, 'API nhận dữ liệu thường dùng POST.', 'dataを受け取るAPIはPOSTを使うことが多いです。'),
    row(code, 'Pydantic BaseModel', 'Pydantic BaseModel', /BaseModel/, true, 'Dùng BaseModel để validate request body.', 'request bodyのvalidateにBaseModelを使います。'),
    row(code, 'JSON response shape', 'JSON response shape', /return\s+\{|return\s+\[/, true, 'Response nên là dict/list rõ ràng.', 'responseは明確なdict/listにします。'),
    row(code, 'HTTPException for errors', 'error用HTTPException', /HTTPException/, false, 'Dùng HTTPException cho 400/404.', '400/404にはHTTPExceptionを使います。'),
    row(code, 'Service/function separation', 'service/function分離', /def\s+(create_|get_|predict_|grade_|retrieve|service)/, false, 'Tách logic ra function/service.', 'logicをfunction/serviceに分けます。'),
    ...projectSpecificRows(code, projectType),
  ];
  const total = rows.length;
  const passed = rows.filter((item) => item.ok).length;
  const score = Math.round((passed / total) * 100);
  return {
    projectType,
    score,
    passed,
    total,
    rows,
    summaryVi: score >= 80 ? 'Thiết kế API khá ổn. Tiếp theo hãy test request/response.' : 'API còn thiếu vài phần quan trọng. Hãy sửa các mục Required trước.',
    summaryJa: score >= 80 ? 'API設計は良いです。次にrequest/responseを確認します。' : '重要な部分が不足しています。Required項目から修正しましょう。',
  };
};

export const formatFastApiValidationOutput = (result: FastApiValidationResult) => {
  const lines = result.rows.map((item) => `${item.ok ? '✅' : '❌'} ${item.required ? '[Required]' : '[Recommended]'} ${item.label} / ${item.labelJa}`);
  return [`FastAPI validator: ${result.score}% (${result.passed}/${result.total})`, `Project type: ${result.projectType}`, ...lines, '', `VI: ${result.summaryVi}`, `JA: ${result.summaryJa}`].join('\n');
};
