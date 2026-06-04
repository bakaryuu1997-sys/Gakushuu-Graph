export type PythonProjectLevel = 'beginner' | 'standard' | 'hard';
export type PythonProjectKind = 'cli' | 'data' | 'quiz' | 'fastapi' | 'ai-api';
export interface PythonMiniProject {
  id: string;
  title: string;
  titleJa: string;
  level: PythonProjectLevel;
  kind: PythonProjectKind;
  skills: string[];
  requirementsVi: string[];
  requirementsJa: string[];
  fileStructure: string[];
  starterCode: string;
  testCases: string[];
  checklistVi: string[];
  checklistJa: string[];
  solution: string;
  explanationVi: string;
  explanationJa: string;
  nextStepVi: string;
  nextStepJa: string;
  relatedNodeId: string;
}

const baseChecklistVi = ['Đọc yêu cầu trước khi code.', 'Chạy test nhỏ trước.', 'Xử lý input rỗng/lỗi.', 'Giải thích được vì sao đúng.'];
const baseChecklistJa = ['code前に要件を読みます。', '小さいtestから確認します。', '空input/errorを処理します。', 'なぜ正しいか説明します。'];

export const pythonMiniProjects: PythonMiniProject[] = [
  {
    id: 'project-calculator-cli', title: 'Calculator CLI', titleJa: '電卓CLI', level: 'beginner', kind: 'cli', skills: ['function', 'if/else', 'exception'],
    requirementsVi: ['Tạo hàm calculate(a, op, b).', 'Hỗ trợ +, -, *, /.', 'Chia cho 0 trả về "error" thay vì crash.'],
    requirementsJa: ['calculate(a, op, b)を作ります。', '+, -, *, / を対応します。', '0除算はcrashではなく"error"を返します。'],
    fileStructure: ['calculator.py', 'tests.py'],
    starterCode: "def calculate(a, op, b):\n    return None",
    testCases: ["calculate(2, '+', 3) == 5", "calculate(8, '/', 2) == 4", "calculate(8, '/', 0) == 'error'"],
    checklistVi: baseChecklistVi, checklistJa: baseChecklistJa,
    solution: "def calculate(a, op, b):\n    if op == '+': return a + b\n    if op == '-': return a - b\n    if op == '*': return a * b\n    if op == '/': return 'error' if b == 0 else a / b\n    return 'error'",
    explanationVi: 'Project này luyện cách tách logic vào function và xử lý lỗi cơ bản. Người mới hay quên case chia cho 0.',
    explanationJa: 'このprojectではlogicをfunctionに分け、基本的なerror処理を練習します。初心者は0除算を忘れやすいです。',
    nextStepVi: 'Thêm input từ terminal bằng input() hoặc argparse.', nextStepJa: 'input()やargparseでterminal入力を追加します。', relatedNodeId: 'python-function',
  },
  {
    id: 'project-todo-cli', title: 'Todo Manager CLI', titleJa: 'Todo管理CLI', level: 'standard', kind: 'cli', skills: ['list', 'dict', 'state'],
    requirementsVi: ['Tạo add_task(tasks, title).', 'Tạo complete_task(tasks, task_id).', 'Task có id, title, done.'],
    requirementsJa: ['add_task(tasks, title)を作ります。', 'complete_task(tasks, task_id)を作ります。', 'Taskはid, title, doneを持ちます。'],
    fileStructure: ['todo.py', 'tests.py'],
    starterCode: "def add_task(tasks, title):\n    return tasks\n\ndef complete_task(tasks, task_id):\n    return tasks",
    testCases: ["tasks = add_task([], 'study'); tasks[0]['title'] == 'study'", "tasks = complete_task([{'id':1,'title':'study','done':False}], 1); tasks[0]['done'] == True"],
    checklistVi: baseChecklistVi, checklistJa: baseChecklistJa,
    solution: "def add_task(tasks, title):\n    next_id = max([t['id'] for t in tasks], default=0) + 1\n    return tasks + [{'id': next_id, 'title': title, 'done': False}]\n\ndef complete_task(tasks, task_id):\n    return [{**t, 'done': True} if t['id'] == task_id else t for t in tasks]",
    explanationVi: 'Todo giúp hiểu list of dict và state. Hãy chú ý không sửa nhầm tất cả task.',
    explanationJa: 'Todoはlist of dictとstateの練習です。全taskを誤って変更しないよう注意します。',
    nextStepVi: 'Lưu todo ra JSON file.', nextStepJa: 'todoをJSON fileに保存します。', relatedNodeId: 'python-list',
  },
  {
    id: 'project-csv-analyzer', title: 'CSV Analyzer', titleJa: 'CSV分析', level: 'standard', kind: 'data', skills: ['file', 'csv', 'aggregation'],
    requirementsVi: ['Nhận danh sách dòng CSV dạng string.', 'Tính tổng amount.', 'Bỏ qua dòng header.'],
    requirementsJa: ['CSV行のlistを受け取ります。', 'amount合計を計算します。', 'header行を除外します。'],
    fileStructure: ['csv_analyzer.py', 'sample.csv'],
    starterCode: "def total_amount(lines):\n    return 0",
    testCases: ["total_amount(['name,amount','a,100','b,50']) == 150", "total_amount(['name,amount']) == 0"],
    checklistVi: baseChecklistVi, checklistJa: baseChecklistJa,
    solution: "def total_amount(lines):\n    total = 0\n    for line in lines[1:]:\n        if not line.strip():\n            continue\n        _, amount = line.split(',')\n        total += int(amount)\n    return total",
    explanationVi: 'CSV project luyện parse dữ liệu thực tế. Bẫy chính là header, dòng rỗng và chuyển string sang int.',
    explanationJa: 'CSV projectは実データparseの練習です。header、空行、stringからintへの変換が罠です。',
    nextStepVi: 'Thêm average/min/max theo cột.', nextStepJa: '列ごとのaverage/min/maxを追加します。', relatedNodeId: 'python-file-io',
  },
  {
    id: 'project-quiz-engine', title: 'Quiz App Engine', titleJa: 'QuizアプリEngine', level: 'standard', kind: 'quiz', skills: ['dict', 'loop', 'review'],
    requirementsVi: ['Tạo grade_quiz(questions, answers).', 'Trả về score và wrong list.', 'Mỗi question có id và correct.'],
    requirementsJa: ['grade_quiz(questions, answers)を作ります。', 'scoreとwrong listを返します。', 'questionはidとcorrectを持ちます。'],
    fileStructure: ['quiz_engine.py', 'questions.json'],
    starterCode: "def grade_quiz(questions, answers):\n    return {'score': 0, 'wrong': []}",
    testCases: ["grade_quiz([{'id':'q1','correct':'A'}], {'q1':'A'})['score'] == 1", "grade_quiz([{'id':'q1','correct':'A'}], {'q1':'B'})['wrong'] == ['q1']"],
    checklistVi: baseChecklistVi, checklistJa: baseChecklistJa,
    solution: "def grade_quiz(questions, answers):\n    score = 0\n    wrong = []\n    for q in questions:\n        if answers.get(q['id']) == q['correct']:\n            score += 1\n        else:\n            wrong.append(q['id'])\n    return {'score': score, 'wrong': wrong}",
    explanationVi: 'Quiz engine luyện mapping bằng dict và tạo review câu sai. Đây là nền cho app học của bạn.',
    explanationJa: 'Quiz engineはdict mappingと誤答reviewの練習です。この学習appの基礎になります。',
    nextStepVi: 'Thêm explanation cho từng câu sai.', nextStepJa: '各誤答にexplanationを追加します。', relatedNodeId: 'python-dict',
  },
  {
    id: 'project-fastapi-todo', title: 'FastAPI Todo API', titleJa: 'FastAPI Todo API', level: 'hard', kind: 'fastapi', skills: ['FastAPI', 'Pydantic', 'CRUD'],
    requirementsVi: ['Tạo app = FastAPI().', 'Có GET /todos và POST /todos.', 'Dùng Pydantic BaseModel cho input.'],
    requirementsJa: ['app = FastAPI()を作ります。', 'GET /todos と POST /todosを作ります。', 'inputにPydantic BaseModelを使います。'],
    fileStructure: ['main.py', 'schemas.py', 'services.py'],
    starterCode: "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass TodoCreate(BaseModel):\n    title: str\n\n@app.get('/todos')\ndef list_todos():\n    return {'todos': []}",
    testCases: ["contains:FastAPI()", "contains:@app.get('/todos')", "contains:BaseModel", "contains:@app.post('/todos')"],
    checklistVi: ['Có route GET/POST.', 'Có schema input.', 'Response là JSON rõ ràng.', 'Có xử lý id/not found nếu mở rộng.'],
    checklistJa: ['GET/POST routeがあります。', 'input schemaがあります。', 'responseは明確なJSONです。', '拡張時はid/not foundを処理します。'],
    solution: "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\ntodos = []\n\nclass TodoCreate(BaseModel):\n    title: str\n\n@app.get('/todos')\ndef list_todos():\n    return {'todos': todos}\n\n@app.post('/todos')\ndef create_todo(todo: TodoCreate):\n    item = {'id': len(todos)+1, 'title': todo.title, 'done': False}\n    todos.append(item)\n    return item",
    explanationVi: 'FastAPI Todo API luyện route + schema + JSON response. Đây là project backend đầu tiên nên giữ đơn giản.',
    explanationJa: 'FastAPI Todo APIはroute、schema、JSON responseの練習です。最初のbackend projectなので単純に保ちます。',
    nextStepVi: 'Thêm PATCH /todos/{id} và HTTPException 404.', nextStepJa: 'PATCH /todos/{id} と HTTPException 404を追加します。', relatedNodeId: 'python-fastapi-routing',
  },
  {
    id: 'project-fastapi-ai-predict', title: 'FastAPI AI Prediction Mock', titleJa: 'FastAPI AI予測Mock', level: 'hard', kind: 'ai-api', skills: ['FastAPI', 'Pydantic', 'AI API'],
    requirementsVi: ['Tạo POST /predict.', 'Input có features list.', 'Response có label và confidence.', 'Tách hàm predict_label().'],
    requirementsJa: ['POST /predictを作ります。', 'inputはfeatures listを持ちます。', 'responseはlabelとconfidenceを持ちます。', 'predict_label()にlogicを分けます。'],
    fileStructure: ['main.py', 'model_service.py', 'schemas.py'],
    starterCode: "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass PredictRequest(BaseModel):\n    features: list[float]\n\ndef predict_label(features):\n    return 'ok'\n\n@app.post('/predict')\ndef predict(request: PredictRequest):\n    return {'label': predict_label(request.features), 'confidence': 0.9}",
    testCases: ["contains:@app.post('/predict')", "contains:BaseModel", "contains:features", "contains:confidence", "contains:predict_label"],
    checklistVi: ['Input được validate bằng Pydantic.', 'Logic dự đoán tách khỏi route.', 'Response có label/confidence.', 'Không đặt model logic trực tiếp trong decorator.'],
    checklistJa: ['inputはPydanticでvalidateします。', '予測logicはrouteから分離します。', 'responseはlabel/confidenceを持ちます。', 'model logicをdecorator内に直書きしません。'],
    solution: "from fastapi import FastAPI\nfrom pydantic import BaseModel, Field\n\napp = FastAPI()\n\nclass PredictRequest(BaseModel):\n    features: list[float] = Field(min_length=1)\n\ndef predict_label(features):\n    score = sum(features) / len(features)\n    return 'positive' if score >= 0.5 else 'negative'\n\n@app.post('/predict')\ndef predict(request: PredictRequest):\n    return {'label': predict_label(request.features), 'confidence': 0.9}",
    explanationVi: 'AI prediction mock giúp hiểu cách đóng gói model thành API: request → validate → service → response.',
    explanationJa: 'AI prediction mockはmodelをAPI化する流れ、request→validate→service→responseを理解します。',
    nextStepVi: 'Thay predict_label bằng model thật hoặc mock RAG.', nextStepJa: 'predict_labelを実modelまたはRAG mockに置き換えます。', relatedNodeId: 'python-ai-serving',
  },

  {
    id: 'project-password-strength', title: 'Password Strength Checker', titleJa: 'Password強度Checker', level: 'beginner', kind: 'cli', skills: ['string', 'condition', 'security'],
    requirementsVi: ['Tạo hàm password_strength(password).', 'Trả về weak/medium/strong.', 'Kiểm tra độ dài, chữ số và ký tự đặc biệt.'],
    requirementsJa: ['password_strength(password)を作ります。', 'weak/medium/strongを返します。', '長さ、数字、記号を確認します。'],
    fileStructure: ['password_strength.py', 'tests.py'],
    starterCode: "def password_strength(password):\n    return 'weak'",
    testCases: ["password_strength('abc') == 'weak'", "password_strength('abcdef12') == 'medium'", "password_strength('abcdef12!') == 'strong'"],
    checklistVi: baseChecklistVi, checklistJa: baseChecklistJa,
    solution: "def password_strength(password):\n    has_digit = any(ch.isdigit() for ch in password)\n    has_symbol = any(not ch.isalnum() for ch in password)\n    if len(password) >= 8 and has_digit and has_symbol:\n        return 'strong'\n    if len(password) >= 8 and has_digit:\n        return 'medium'\n    return 'weak'",
    explanationVi: 'Project này luyện string scanning và điều kiện bảo mật cơ bản. Bẫy là chỉ kiểm độ dài mà quên digit/symbol.',
    explanationJa: '文字列走査と基本的なsecurity条件を練習します。長さだけ確認してdigit/symbolを忘れやすいです。',
    nextStepVi: 'Thêm điểm số 0-100 và gợi ý cải thiện password.', nextStepJa: '0-100 scoreと改善hintを追加します。', relatedNodeId: 'python-string-methods',
  },
  {
    id: 'project-expense-tracker', title: 'Expense Tracker', titleJa: '支出Tracker', level: 'standard', kind: 'data', skills: ['dict', 'aggregation', 'date'],
    requirementsVi: ['Tạo summarize_expenses(items).', 'Tính tổng theo category.', 'Bỏ qua amount âm hoặc thiếu category.'],
    requirementsJa: ['summarize_expenses(items)を作ります。', 'categoryごとに合計します。', '負のamountやcategory不足を除外します。'],
    fileStructure: ['expense_tracker.py', 'tests.py'],
    starterCode: "def summarize_expenses(items):\n    return {}",
    testCases: ["summarize_expenses([{'category':'food','amount':100},{'category':'food','amount':50}]) == {'food':150}", "summarize_expenses([]) == {}"],
    checklistVi: baseChecklistVi, checklistJa: baseChecklistJa,
    solution: "def summarize_expenses(items):\n    result = {}\n    for item in items:\n        category = item.get('category')\n        amount = item.get('amount', 0)\n        if not category or amount < 0:\n            continue\n        result[category] = result.get(category, 0) + amount\n    return result",
    explanationVi: 'Expense tracker luyện aggregation bằng dict. Đây là kỹ năng rất hay dùng khi xử lý dữ liệu nhỏ.',
    explanationJa: 'dictで集計する練習です。小規模data処理でよく使うskillです。',
    nextStepVi: 'Đọc dữ liệu từ CSV và xuất báo cáo JSON.', nextStepJa: 'CSVから読み、JSON reportを出力します。', relatedNodeId: 'python-dict',
  },
  {
    id: 'project-markdown-notes', title: 'Markdown Notes CLI', titleJa: 'Markdown Notes CLI', level: 'standard', kind: 'cli', skills: ['file', 'string', 'search'],
    requirementsVi: ['Tạo extract_titles(markdown).', 'Trả về các dòng bắt đầu bằng #.', 'Loại bỏ ký tự # và khoảng trắng.'],
    requirementsJa: ['extract_titles(markdown)を作ります。', '#で始まる行を返します。', '#とspaceを除去します。'],
    fileStructure: ['notes.py', 'README.md'],
    starterCode: "def extract_titles(markdown):\n    return []",
    testCases: ["extract_titles('# A\\ntext\\n## B') == ['A','B']", "extract_titles('no title') == []"],
    checklistVi: baseChecklistVi, checklistJa: baseChecklistJa,
    solution: "def extract_titles(markdown):\n    titles = []\n    for line in markdown.splitlines():\n        if line.startswith('#'):\n            titles.append(line.lstrip('#').strip())\n    return titles",
    explanationVi: 'Markdown notes luyện splitlines, startswith và làm sạch string. Bẫy là giữ lại dấu # trong kết quả.',
    explanationJa: 'splitlines、startswith、文字列cleaningの練習です。結果に#を残しやすいです。',
    nextStepVi: 'Thêm search keyword trong note.', nextStepJa: 'note内keyword検索を追加します。', relatedNodeId: 'python-file-io',
  },
  {
    id: 'project-fastapi-quiz-api', title: 'FastAPI Quiz API', titleJa: 'FastAPI Quiz API', level: 'hard', kind: 'fastapi', skills: ['FastAPI', 'Pydantic', 'grading'],
    requirementsVi: ['Có GET /questions.', 'Có POST /submit.', 'Response có score và wrong list.', 'Dùng Pydantic cho answers.'],
    requirementsJa: ['GET /questionsがあります。', 'POST /submitがあります。', 'responseはscoreとwrong listを持ちます。', 'answersにPydanticを使います。'],
    fileStructure: ['main.py', 'schemas.py', 'quiz_service.py'],
    starterCode: "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass SubmitRequest(BaseModel):\n    answers: dict[str, str]\n\n@app.get('/questions')\ndef questions():\n    return {'questions': []}",
    testCases: ["contains:FastAPI()", "contains:@app.get('/questions')", "contains:@app.post('/submit')", "contains:score", "contains:wrong"],
    checklistVi: ['Có endpoint lấy câu hỏi.', 'Có endpoint submit.', 'Chấm điểm trong service/function.', 'Trả score/wrong rõ ràng.'],
    checklistJa: ['問題取得endpointがあります。', 'submit endpointがあります。', '採点はservice/functionに分けます。', 'score/wrongを明確に返します。'],
    solution: "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\nQUESTIONS = [{'id':'q1','text':'2+2?','correct':'4'}]\n\nclass SubmitRequest(BaseModel):\n    answers: dict[str, str]\n\n@app.get('/questions')\ndef questions():\n    return {'questions': [{'id': q['id'], 'text': q['text']} for q in QUESTIONS]}\n\n@app.post('/submit')\ndef submit(req: SubmitRequest):\n    wrong=[]; score=0\n    for q in QUESTIONS:\n        if req.answers.get(q['id']) == q['correct']: score += 1\n        else: wrong.append(q['id'])\n    return {'score': score, 'wrong': wrong}",
    explanationVi: 'Quiz API giúp bạn hiểu backend cho app học: lấy câu hỏi, nộp đáp án, nhận score và wrong review.',
    explanationJa: '学習app backendの基本、問題取得、回答提出、scoreと誤答reviewを理解します。',
    nextStepVi: 'Thêm explanation cho từng câu sai và lưu attempt.', nextStepJa: '各誤答のexplanationとattempt保存を追加します。', relatedNodeId: 'python-fastapi-routing',
  },
  {
    id: 'project-fastapi-rag-mock', title: 'FastAPI RAG Mock Endpoint', titleJa: 'FastAPI RAG Mock Endpoint', level: 'hard', kind: 'ai-api', skills: ['FastAPI', 'RAG', 'sources'],
    requirementsVi: ['Có POST /ask.', 'Input có question.', 'Response có answer và sources.', 'Tách retrieve_documents().'],
    requirementsJa: ['POST /askがあります。', 'inputはquestionを持ちます。', 'responseはanswerとsourcesを持ちます。', 'retrieve_documents()に分けます。'],
    fileStructure: ['main.py', 'schemas.py', 'retriever.py'],
    starterCode: "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass AskRequest(BaseModel):\n    question: str\n\n@app.post('/ask')\ndef ask(req: AskRequest):\n    return {'answer': 'mock', 'sources': []}",
    testCases: ["contains:@app.post('/ask')", "contains:question", "contains:answer", "contains:sources", "contains:retrieve"],
    checklistVi: ['Có route /ask.', 'Có schema question.', 'Có sources để kiểm chứng.', 'Retrieval tách khỏi route.'],
    checklistJa: ['/ask routeがあります。', 'question schemaがあります。', '確認用sourcesがあります。', 'retrievalをrouteから分離します。'],
    solution: "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\nDOCS = [{'id':'doc1','text':'FastAPI is useful for AI APIs.'}]\n\nclass AskRequest(BaseModel):\n    question: str\n\ndef retrieve_documents(question):\n    return DOCS[:1]\n\n@app.post('/ask')\ndef ask(req: AskRequest):\n    docs = retrieve_documents(req.question)\n    return {'answer': docs[0]['text'], 'sources': [d['id'] for d in docs]}",
    explanationVi: 'RAG mock giúp hiểu luồng hỏi đáp AI: question → retrieve → answer → sources.',
    explanationJa: 'RAG mockでAI QAの流れ、question→retrieve→answer→sourcesを理解します。',
    nextStepVi: 'Thêm ranking score và nhiều tài liệu hơn.', nextStepJa: 'ranking scoreと複数documentを追加します。', relatedNodeId: 'python-ai-serving',
  },
];
