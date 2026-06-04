import type { CourseId } from './types';
import type { KnowledgeNodeData } from '../features/knowledge-graph/types';

export interface V99LessonBlueprint {
  conceptVi: string;
  conceptJa: string;
  exampleTitle: string;
  exampleCode: string;
  exampleExplanationVi: string;
  traceSteps: string[];
  exerciseVi: string;
  expectedOutput: string;
  miniQuizQuestionVi: string;
  miniQuizChoicesVi: string[];
  miniQuizAnswerIndex: number;
  antiPatternVi: string;
}

const textOf = (node: KnowledgeNodeData) =>
  `${node.id} ${node.labelVi} ${node.labelEn} ${node.labelJa} ${node.keywords.join(' ')}`.toLowerCase();

const safeLabel = (node: KnowledgeNodeData) => node.labelVi || node.labelEn || node.labelJa || node.id;

function pythonBlueprint(node: KnowledgeNodeData): V99LessonBlueprint {
  const text = textOf(node);
  const label = safeLabel(node);

  if (/fastapi|api|endpoint|route|pydantic|depends|dependency|request|response/.test(text)) {
    return {
      conceptVi: `${label} trong Python backend nghĩa là tách rõ request đi vào, validate dữ liệu, gọi service xử lý, rồi trả response JSON có status code đúng. Học phần này không phải để nhớ tên FastAPI, mà để biết route nên mỏng, logic nên nằm trong function/service dễ test.`,
      conceptJa: `${node.labelJa}は、入力検証・service処理・JSON応答を分けて考えるbackendの練習です。`,
      exampleTitle: 'FastAPI route mỏng + service dễ test',
      exampleCode: `from fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass GradeRequest(BaseModel):\n    score: int\n\ndef grade(score: int) -> str:\n    if score < 0 or score > 100:\n        raise ValueError('score must be 0..100')\n    return 'pass' if score >= 70 else 'review'\n\n@app.post('/grade')\ndef grade_route(req: GradeRequest):\n    try:\n        return {'result': grade(req.score)}\n    except ValueError as exc:\n        raise HTTPException(status_code=400, detail=str(exc))`,
      exampleExplanationVi: 'Route chỉ nhận request và chuyển lỗi HTTP. Hàm grade có thể test riêng bằng pytest mà không cần chạy server.',
      traceSteps: ['Request {"score": 85} đi vào /grade.', 'Pydantic kiểm tra score là int.', 'grade(85) trả "pass".', 'Route trả {"result": "pass"}.', 'Với score=-1, service raise ValueError và route đổi thành HTTP 400.'],
      exerciseVi: 'Thêm endpoint /todos nhận title. Nếu title rỗng thì trả 400, nếu hợp lệ thì trả {"created": true, "title": "..."}',
      expectedOutput: `POST /grade {"score": 85} -> {"result": "pass"}\nPOST /grade {"score": 50} -> {"result": "review"}\nPOST /grade {"score": -1} -> HTTP 400 {"detail": "score must be 0..100"}`,
      miniQuizQuestionVi: 'Vì sao nên tách logic grade() ra khỏi route?',
      miniQuizChoicesVi: ['Để route khó test hơn', 'Để service test riêng được và route chỉ lo HTTP', 'Để bỏ validation', 'Để mọi lỗi thành 200 OK'],
      miniQuizAnswerIndex: 1,
      antiPatternVi: 'Nhồi toàn bộ logic, database, validate và format response vào một route dài làm code khó test và khó sửa.',
    };
  }

  if (/dataclass|class|oop|object|inherit|method|property|encapsulation/.test(text)) {
    return {
      conceptVi: `${label} trong OOP là cách gom dữ liệu và hành vi vào cùng một object. Điểm cần hiểu là mỗi object có state riêng; method thay đổi state đó theo rule, không phải chỉ là “function nằm trong class”.`,
      conceptJa: `${node.labelJa}は、状態と振る舞いをobjectにまとめ、ruleを守って変更する考え方です。`,
      exampleTitle: 'Object có state riêng và invariant',
      exampleCode: `class BankAccount:\n    minimum_balance = 0\n\n    def __init__(self, owner: str, balance: int = 0):\n        if balance < self.minimum_balance:\n            raise ValueError('negative balance')\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount: int) -> None:\n        if amount <= 0:\n            raise ValueError('amount must be positive')\n        self.balance += amount\n\n    def withdraw(self, amount: int) -> None:\n        if self.balance - amount < self.minimum_balance:\n            raise ValueError('not enough money')\n        self.balance -= amount\n\nalice = BankAccount('Alice', 100)\nbob = BankAccount('Bob', 20)\nalice.deposit(50)\nbob.withdraw(5)\nprint(alice.balance, bob.balance)`,
      exampleExplanationVi: 'alice và bob dùng cùng class nhưng balance khác nhau. minimum_balance là rule chung; balance là state riêng của từng instance.',
      traceSteps: ['Tạo alice: owner="Alice", balance=100.', 'Tạo bob: owner="Bob", balance=20.', 'alice.deposit(50) chỉ tăng balance của alice lên 150.', 'bob.withdraw(5) chỉ giảm balance của bob xuống 15.', 'print in ra hai state độc lập: 150 15.'],
      exerciseVi: 'Thêm method transfer_to(other, amount) để chuyển tiền giữa hai account. Nếu thiếu tiền thì không account nào bị đổi.',
      expectedOutput: `150 15\n# transfer_to đúng: Alice giảm, Bob tăng\n# transfer_to lỗi: cả hai balance giữ nguyên`,
      miniQuizQuestionVi: 'Biến nào nên là instance variable trong ví dụ BankAccount?',
      miniQuizChoicesVi: ['balance vì mỗi tài khoản khác nhau', 'minimum_balance vì luôn khác nhau', 'Tên class', 'Tất cả biến đều global'],
      miniQuizAnswerIndex: 0,
      antiPatternVi: 'Dùng class chỉ như namespace chứa function, hoặc dùng class variable cho dữ liệu riêng từng object.',
    };
  }

  if (/dict|map|frequency|group|counter/.test(text)) {
    return {
      conceptVi: `${label} thường dùng để ánh xạ key → value. Khi làm bài tập Python, dict rất mạnh cho đếm tần suất, group dữ liệu, tra cứu nhanh và gom kết quả theo category.`,
      conceptJa: `${node.labelJa}はkeyとvalueの対応を使い、頻度計算・group化・高速検索に使います。`,
      exampleTitle: 'Frequency map bằng dict',
      exampleCode: `words = ['ai', 'python', 'ai', 'sql', 'python', 'ai']\ncounts = {}\nfor word in words:\n    counts[word] = counts.get(word, 0) + 1\nprint(counts)\nprint(max(counts, key=counts.get))`,
      exampleExplanationVi: 'counts.get(word, 0) giúp xử lý key mới. Mỗi vòng lặp tăng số lần xuất hiện của word hiện tại.',
      traceSteps: ['Start counts={}.', 'word="ai" → counts={"ai": 1}.', 'word="python" → thêm key mới.', 'word="ai" lần 2 → tăng thành 2.', 'Cuối cùng ai có count lớn nhất.'],
      exerciseVi: 'Viết function top_word(words) trả về từ xuất hiện nhiều nhất. Nếu list rỗng trả None.',
      expectedOutput: `{'ai': 3, 'python': 2, 'sql': 1}\nai`,
      miniQuizQuestionVi: 'Vì sao dùng counts.get(word, 0)?',
      miniQuizChoicesVi: ['Để sort list', 'Để key mới bắt đầu từ 0 thay vì lỗi KeyError', 'Để xóa word', 'Để biến dict thành tuple'],
      miniQuizAnswerIndex: 1,
      antiPatternVi: 'Dùng list lồng nhau để đếm thủ công làm code dài, chậm và dễ sai khi gặp key mới.',
    };
  }

  if (/list|array|tuple|set|string|slice|collection|comprehension/.test(text)) {
    return {
      conceptVi: `${label} là nền tảng xử lý dữ liệu trong Python. Điều quan trọng là hiểu index, vòng lặp, điều kiện lọc và kết quả sau từng bước, thay vì chỉ nhớ cú pháp.`,
      conceptJa: `${node.labelJa}は、index・loop・filter・結果の変化を追う練習です。`,
      exampleTitle: 'Lọc và biến đổi collection',
      exampleCode: `scores = [82, 45, 90, 60]\npassed = []\nfor score in scores:\n    if score >= 60:\n        passed.append(score)\nprint(passed)\nprint([s + 5 for s in passed])`,
      exampleExplanationVi: 'Vòng lặp đọc từng score. Điều kiện score >= 60 quyết định phần tử có được thêm vào passed hay không.',
      traceSteps: ['score=82 → thêm vào passed: [82].', 'score=45 → bỏ qua.', 'score=90 → [82, 90].', 'score=60 → [82, 90, 60].', 'List comprehension cộng 5 cho từng điểm đã pass.'],
      exerciseVi: 'Viết function normalize(scores) trả về list điểm +5 nhưng không vượt quá 100.',
      expectedOutput: `[82, 90, 60]\n[87, 95, 65]`,
      miniQuizQuestionVi: 'Index đầu tiên của list Python là gì?',
      miniQuizChoicesVi: ['0', '1', '-0', 'Tùy list'],
      miniQuizAnswerIndex: 0,
      antiPatternVi: 'Vừa duyệt list vừa remove phần tử trong cùng list có thể làm bỏ sót phần tử.',
    };
  }

  if (/file|csv|json|pathlib|io|logging|exception|pytest|fixture|test|typing|type/.test(text)) {
    return {
      conceptVi: `${label} nằm ở boundary của chương trình: đọc file, validate dữ liệu, ghi log, bắt lỗi và test. Đây là phần giúp code từ “chạy được trong ví dụ” thành “chịu được dữ liệu thật”.`,
      conceptJa: `${node.labelJa}は、file・error・testなど実務で壊れにくいcodeにするためのboundaryです。`,
      exampleTitle: 'Đọc JSON an toàn bằng pathlib + exception',
      exampleCode: `from pathlib import Path\nimport json\n\ndef load_config(path: str) -> dict:\n    file_path = Path(path)\n    if not file_path.exists():\n        raise FileNotFoundError(path)\n    data = json.loads(file_path.read_text(encoding='utf-8'))\n    if 'name' not in data:\n        raise ValueError('missing name')\n    return data\n\n# pytest idea:\n# tmp_path / 'config.json' -> write_text('{\"name\":\"demo\"}')`,
      exampleExplanationVi: 'Boundary rõ: file không tồn tại → FileNotFoundError; JSON thiếu field → ValueError; data hợp lệ → return dict.',
      traceSteps: ['Nhận path string.', 'Path(path).exists() kiểm tra file.', 'read_text đọc nội dung UTF-8.', 'json.loads đổi text thành dict.', 'Validate key bắt buộc trước khi return.'],
      exerciseVi: 'Viết test bằng tmp_path cho 3 case: file hợp lệ, file không tồn tại, JSON thiếu name.',
      expectedOutput: `load_config('config.json') -> {'name': 'demo'}\nmissing file -> FileNotFoundError\n{} -> ValueError('missing name')`,
      miniQuizQuestionVi: 'tmp_path trong pytest hữu ích vì sao?',
      miniQuizChoicesVi: ['Tạo thư mục tạm sạch cho test file', 'Tự deploy server', 'Tự sửa JSON sai', 'Bỏ qua exception'],
      miniQuizAnswerIndex: 0,
      antiPatternVi: 'Bắt mọi lỗi bằng except Exception rồi im lặng khiến bug thật bị che mất.',
    };
  }

  if (/algorithm|sort|search|stack|queue|recursion|dp|graph|tree|binary|complexity|loop/.test(text)) {
    return {
      conceptVi: `${label} là bài luyện tư duy thuật toán: phải theo dõi input, biến trung gian, điều kiện dừng và output. Cách học đúng là trace bằng bảng trước khi chạy code.`,
      conceptJa: `${node.labelJa}は、入力・途中状態・終了条件・出力を表で追うalgorithm練習です。`,
      exampleTitle: 'Trace thuật toán tìm max',
      exampleCode: `nums = [3, 8, 2, 10]\nbest = nums[0]\nfor n in nums[1:]:\n    if n > best:\n        best = n\nprint(best)`,
      exampleExplanationVi: 'best giữ giá trị lớn nhất đã thấy. Mỗi vòng lặp chỉ update khi n lớn hơn best hiện tại.',
      traceSteps: ['Start best=3.', 'n=8 > 3 → best=8.', 'n=2 > 8 sai → best giữ 8.', 'n=10 > 8 → best=10.', 'Output cuối là 10.'],
      exerciseVi: 'Sửa code để trả về cả max và vị trí index của max. Test với [3, 8, 2, 10].',
      expectedOutput: `10\n# max_with_index([3, 8, 2, 10]) -> (10, 3)`,
      miniQuizQuestionVi: 'Biến best đại diện cho gì?',
      miniQuizChoicesVi: ['Giá trị lớn nhất đã thấy tới thời điểm hiện tại', 'Phần tử cuối list', 'Số vòng lặp', 'Index hiện tại'],
      miniQuizAnswerIndex: 0,
      antiPatternVi: 'Nhìn output rồi đoán, không trace biến best qua từng vòng lặp.',
    };
  }

  return {
    conceptVi: `${label} là một khái niệm Python cần học bằng ví dụ nhỏ, input rõ, output rõ và một lỗi dễ gặp. Khi đọc bài, hãy luôn tự hỏi: dữ liệu vào là gì, code biến đổi ra sao, kết quả mong đợi là gì.`,
    conceptJa: `${node.labelJa}は、入力・処理・出力・よくあるミスで理解するPythonのテーマです。`,
    exampleTitle: 'Ví dụ input → xử lý → output',
    exampleCode: `def describe(value):\n    if value:\n        return f'Value: {value}'\n    return 'Empty value'\n\nprint(describe('Python'))\nprint(describe(''))`,
    exampleExplanationVi: 'Ví dụ này luyện cách đọc function: input vào, nhánh if chạy, return value nào được chọn.',
    traceSteps: ['describe("Python") nhận chuỗi không rỗng.', 'if value là True nên return "Value: Python".', 'describe("") nhận chuỗi rỗng.', 'if value là False nên return "Empty value".'],
    exerciseVi: `Tự viết ví dụ 5 dòng dùng ${label}, có ít nhất 2 input và 2 expected output.`,
    expectedOutput: `Value: Python\nEmpty value`,
    miniQuizQuestionVi: 'Khi học một syntax mới, bước nào quan trọng nhất?',
    miniQuizChoicesVi: ['Viết input và expected output trước', 'Chỉ đọc tên syntax', 'Bỏ qua edge case', 'Copy code nhưng không chạy'],
    miniQuizAnswerIndex: 0,
    antiPatternVi: 'Học thuộc tên nhưng không tự tạo ví dụ chạy được.',
  };
}

function fundamentalInfoBlueprint(node: KnowledgeNodeData): V99LessonBlueprint {
  const text = textOf(node);
  const label = safeLabel(node);

  if (/sql|database|join|where|having|group|table|relational/.test(text)) {
    return {
      conceptVi: `${label} trong 基本情報 thường kiểm tra khả năng đọc bảng và thứ tự xử lý SQL. Không học bằng cách nhớ câu lệnh rời rạc; hãy trace từng bước từ FROM/JOIN tới SELECT.`,
      conceptJa: `${node.labelJa}はSQLの処理順序と表の変化を追う問題でよく出ます。`,
      exampleTitle: 'SQL trace: WHERE trước GROUP BY',
      exampleCode: `sales\n+--------+-------+\n| region | amount|\n+--------+-------+\n| A      | 100   |\n| A      |  50   |\n| B      |  20   |\n\nSELECT region, SUM(amount)\nFROM sales\nWHERE amount >= 50\nGROUP BY region;`,
      exampleExplanationVi: 'WHERE loại row B trước khi GROUP BY. Sau đó SUM chỉ tính các row còn lại.',
      traceSteps: ['FROM sales: có 3 row.', 'WHERE amount >= 50: giữ A-100 và A-50, loại B-20.', 'GROUP BY region: chỉ còn group A.', 'SELECT region, SUM(amount): A = 150.'],
      exerciseVi: 'Thêm row B-70. Hãy trace lại kết quả cuối.',
      expectedOutput: `region | SUM(amount)\nA      | 150\n# nếu thêm B-70 thì có thêm: B | 70`,
      miniQuizQuestionVi: 'WHERE chạy trước hay sau GROUP BY?',
      miniQuizChoicesVi: ['Trước GROUP BY', 'Sau SELECT', 'Sau ORDER BY', 'Không liên quan'],
      miniQuizAnswerIndex: 0,
      antiPatternVi: 'Nhầm WHERE với HAVING: WHERE lọc row trước khi group, HAVING lọc group sau khi tổng hợp.',
    };
  }

  if (/algorithm|array|stack|queue|recursion|dp|graph|trace|pseudo|loop|sort|search/.test(text)) {
    return {
      conceptVi: `${label} trong 科目B là bài đọc pseudo-code. Mục tiêu không phải nhớ thuật toán tên gì, mà là trace biến, mảng, stack/queue hoặc return value theo từng bước.`,
      conceptJa: `${node.labelJa}は科目Bで変数・配列・stack/queue・return値を追う練習です。`,
      exampleTitle: 'Pseudo-code trace: maxGap',
      exampleCode: `A = [3, 8, 6, 14]\nmaxGap ← 0\nfor i ← 2 to length(A)\n  gap ← abs(A[i] - A[i-1])\n  if gap > maxGap then\n    maxGap ← gap\n  endif\nendfor\nprint maxGap`,
      exampleExplanationVi: 'Bẫy là không lấy max(A)-min(A). Code chỉ xét chênh lệch giữa hai phần tử kề nhau.',
      traceSteps: ['i=2: gap=|8-3|=5 → maxGap=5.', 'i=3: gap=|6-8|=2 → maxGap giữ 5.', 'i=4: gap=|14-6|=8 → maxGap=8.', 'Output cuối là 8.'],
      exerciseVi: 'Trace với A=[10, 7, 12, 11]. Ghi gap mỗi vòng và maxGap cuối.',
      expectedOutput: `gap sequence: 5, 2, 8\nmaxGap: 8`,
      miniQuizQuestionVi: 'maxGap trong code này đo điều gì?',
      miniQuizChoicesVi: ['Chênh lệch lớn nhất giữa hai phần tử kề nhau', 'max(A)-min(A)', 'Tổng các phần tử', 'Số phần tử của A'],
      miniQuizAnswerIndex: 0,
      antiPatternVi: 'Đọc tên biến rồi đoán ý nghĩa, không nhìn dòng update thật sự.',
    };
  }

  if (/network|cidr|subnet|tcp|ip|routing|dns|http/.test(text)) {
    return {
      conceptVi: `${label} trong 基本情報 thường hỏi vai trò giao thức hoặc tính subnet. Hãy đổi câu hỏi thành: thiết bị/giao thức này nằm ở tầng nào, input là gì, output/địa chỉ nào được quyết định.`,
      conceptJa: `${node.labelJa}は、役割・layer・address計算を具体例で確認します。`,
      exampleTitle: 'Subnet /27: usable host',
      exampleCode: `/27 means 32 - 27 = 5 host bits\naddress count = 2^5 = 32\nusable hosts = 32 - 2 = 30`,
      exampleExplanationVi: 'Trừ 2 vì một địa chỉ là network address, một địa chỉ là broadcast address.',
      traceSteps: ['Prefix /27 để lại 5 bit host.', '2^5 = 32 địa chỉ trong subnet.', 'Network address không gán cho host.', 'Broadcast address không gán cho host.', 'Usable host = 30.'],
      exerciseVi: 'Tính usable host cho /28 và /26.',
      expectedOutput: `/28 -> 2^(4)-2 = 14\n/26 -> 2^(6)-2 = 62`,
      miniQuizQuestionVi: 'Vì sao số host usable thường phải trừ 2?',
      miniQuizChoicesVi: ['Trừ network và broadcast', 'Trừ DNS và HTTP', 'Trừ router và switch luôn cố định', 'Không cần trừ'],
      miniQuizAnswerIndex: 0,
      antiPatternVi: 'Lấy 2^hostBits rồi quên trừ network/broadcast.',
    };
  }

  if (/security|auth|risk|log|incident|access|encryption|hash|malware/.test(text)) {
    return {
      conceptVi: `${label} trong đề FE cần đọc theo actor → asset → threat → control. Đừng chỉ nhớ tên biện pháp; phải biết biện pháp đó giảm rủi ro nào.`,
      conceptJa: `${node.labelJa}は、actor・asset・threat・controlの流れで読むsecurity問題です。`,
      exampleTitle: 'Security log timeline',
      exampleCode: `09:00 userA login success\n09:02 userA GET /admin -> 403\n09:03 userA GET /admin/users -> 403\n09:05 adminToken changes role(userA=admin)`,
      exampleExplanationVi: 'Dấu hiệu chính là user thường thử admin API bị 403, sau đó có thay đổi quyền bằng admin token. Cần kiểm tra session/token và quyền.',
      traceSteps: ['Xác định actor: userA và adminToken.', '403 cho thấy userA chưa có quyền admin.', 'Sau đó role bị đổi: có khả năng token/admin bị lạm dụng.', 'Control đầu tiên: kiểm tra token/session history và thu hồi token nghi ngờ.'],
      exerciseVi: 'Viết 3 câu hỏi điều tra đầu tiên cho incident này.',
      expectedOutput: `1. Token adminToken được tạo/đăng nhập từ đâu?\n2. userA có hành vi bất thường trước 09:05 không?\n3. Có thay đổi role nào khác trong cùng thời điểm không?`,
      miniQuizQuestionVi: 'Trong security log, thứ tự đọc nào tốt nhất?',
      miniQuizChoicesVi: ['Actor → thời gian → quyền → impact → control', 'Chỉ nhìn dòng cuối', 'Chỉ nhìn status code', 'Bỏ qua thời gian'],
      miniQuizAnswerIndex: 0,
      antiPatternVi: 'Chọn ngay “đổi password” cho mọi incident mà chưa xác định token/session/quyền bị ảnh hưởng.',
    };
  }

  return {
    conceptVi: `${label} trong 基本情報 nên học bằng một scenario nhỏ: định nghĩa, ví dụ trong hệ thống, bẫy đáp án và cách loại trừ. Mục tiêu là hiểu vai trò của khái niệm trong đề, không chỉ dịch thuật ngữ.`,
    conceptJa: `${node.labelJa}は定義・例・ひっかけ・選択肢の消去法で理解します。`,
    exampleTitle: 'Scenario FE mini',
    exampleCode: `Situation: A company introduces ${label}.\nQuestion: What problem does it solve?\nCheck: purpose -> input -> process -> result -> risk`,
    exampleExplanationVi: `Với ${label}, hãy gắn nó vào một tình huống công ty: ai dùng, để giải quyết vấn đề gì, kết quả nào được tạo ra.`,
    traceSteps: ['Đọc keyword chính trong câu hỏi.', 'Xác định domain: management / technology / security / database.', 'Tìm mục đích của khái niệm.', 'Loại đáp án chỉ giống từ khóa nhưng sai mục đích.'],
    exerciseVi: `Tự tạo một câu trắc nghiệm 4 đáp án về ${label}; viết lý do vì sao 3 đáp án sai.`,
    expectedOutput: `Correct answer: chọn đáp án mô tả đúng mục đích của ${label}\nWrong answer notes: loại đáp án sai domain hoặc sai tác dụng`,
    miniQuizQuestionVi: 'Khi gặp thuật ngữ lạ trong FE, nên làm gì trước?',
    miniQuizChoicesVi: ['Xác định domain và mục đích', 'Chọn đáp án dài nhất', 'Bỏ qua bối cảnh', 'Chỉ dịch từng chữ'],
    miniQuizAnswerIndex: 0,
    antiPatternVi: 'Học bản dịch từ Nhật sang Việt nhưng không biết ví dụ áp dụng.',
  };
}

function aiPassportBlueprint(node: KnowledgeNodeData): V99LessonBlueprint {
  const text = textOf(node);
  const label = safeLabel(node);

  if (/machine|learning|model|data|training|supervised|classification|regression|deep|neural/.test(text)) {
    return {
      conceptVi: `${label} trong AI Passport cần hiểu theo chuỗi data → model → prediction → evaluation. Không cần chứng minh toán sâu, nhưng phải biết dữ liệu nào vào, model học gì và output dùng để quyết định gì.`,
      conceptJa: `${node.labelJa}はdata・model・予測・評価の流れで理解します。`,
      exampleTitle: 'ML case: dự đoán churn khách hàng',
      exampleCode: `Input data: age, plan, usage_count, support_tickets\nLabel: churned = yes/no\nModel learns: patterns linked to churn\nOutput: churn_probability = 0.82\nAction: customer success team contacts high-risk users`,
      exampleExplanationVi: 'Model không “hiểu khách hàng” như người. Nó học pattern từ dữ liệu lịch sử và trả xác suất để con người ra quyết định.',
      traceSteps: ['Thu thập dữ liệu khách hàng.', 'Tách feature và label.', 'Train model trên dữ liệu cũ.', 'Predict xác suất churn cho khách mới.', 'Đánh giá bằng accuracy/precision/recall tùy mục tiêu.'],
      exerciseVi: 'Nêu 3 rủi ro nếu dữ liệu training bị lệch.',
      expectedOutput: `Possible risks:\n- dự đoán sai cho nhóm ít dữ liệu\n- bias trong quyết định chăm sóc\n- metric đẹp nhưng thực tế kém`,
      miniQuizQuestionVi: 'Output của model classification thường là gì?',
      miniQuizChoicesVi: ['Nhãn/xác suất dự đoán', 'File backup', 'Mật khẩu admin', 'Địa chỉ IP router'],
      miniQuizAnswerIndex: 0,
      antiPatternVi: 'Nghĩ model luôn đúng nếu accuracy cao, bỏ qua dữ liệu lệch và mục tiêu business.',
    };
  }

  if (/generative|llm|prompt|rag|embedding|transformer|chatbot|生成/.test(text)) {
    return {
      conceptVi: `${label} liên quan AI tạo sinh: model nhận prompt/context, sinh output dạng text/image/code, rồi cần kiểm tra factuality, bản quyền, privacy và hallucination.`,
      conceptJa: `${node.labelJa}はprompt/contextから生成し、fact・著作権・privacyを確認する必要があります。`,
      exampleTitle: 'RAG mini flow',
      exampleCode: `User question: "Chính sách nghỉ phép là gì?"\n1. Search internal documents\n2. Retrieve top passages\n3. Put passages into prompt\n4. LLM answers with cited context\n5. Human checks policy version`,
      exampleExplanationVi: 'RAG không làm model “biết mọi thứ”. Nó đưa tài liệu liên quan vào context để giảm hallucination và giúp kiểm chứng.',
      traceSteps: ['User đặt câu hỏi.', 'Hệ thống tìm tài liệu liên quan.', 'Đoạn tài liệu được đưa vào prompt.', 'LLM tạo câu trả lời dựa trên context.', 'Người dùng kiểm tra nguồn và phiên bản.'],
      exerciseVi: 'Viết prompt yêu cầu LLM trả lời chỉ dựa trên tài liệu được cung cấp và nói “không đủ thông tin” nếu thiếu nguồn.',
      expectedOutput: `A safe answer should include:\n- câu trả lời ngắn\n- nguồn/context đã dùng\n- cảnh báo nếu tài liệu không đủ`,
      miniQuizQuestionVi: 'RAG giúp giảm rủi ro nào rõ nhất?',
      miniQuizChoicesVi: ['Hallucination do thiếu context', 'Mất điện server', 'Tăng broadcast IP', 'Xóa mọi bias chắc chắn'],
      miniQuizAnswerIndex: 0,
      antiPatternVi: 'Đưa dữ liệu cá nhân hoặc tài liệu mật vào prompt mà không kiểm soát quyền truy cập.',
    };
  }

  if (/privacy|ethic|law|risk|governance|bias|security|personal|個人/.test(text)) {
    return {
      conceptVi: `${label} trong AI Passport là phần rủi ro và quản trị: AI có thể tạo giá trị nhưng cũng gây vấn đề về dữ liệu cá nhân, bias, giải thích quyết định, bảo mật và trách nhiệm pháp lý.`,
      conceptJa: `${node.labelJa}はAI利用時のprivacy・bias・説明責任・securityを扱います。`,
      exampleTitle: 'AI risk checklist',
      exampleCode: `Use case: AI screens job applications\nCheck:\n- personal data? yes\n- automated decision? yes\n- bias risk? high\n- human review needed? yes\n- logging/audit? required`,
      exampleExplanationVi: 'Case tuyển dụng có rủi ro cao vì ảnh hưởng trực tiếp đến con người. Cần human review, audit log, dữ liệu hợp pháp và kiểm tra bias.',
      traceSteps: ['Xác định dữ liệu cá nhân.', 'Xác định ai bị ảnh hưởng bởi quyết định.', 'Kiểm tra bias trong data/model.', 'Thêm human-in-the-loop.', 'Lưu audit log và policy.'],
      exerciseVi: 'Với chatbot chăm sóc khách hàng, hãy liệt kê 3 control để giảm rủi ro privacy.',
      expectedOutput: `Controls:\n- mask personal data\n- limit retention\n- access control and audit log`,
      miniQuizQuestionVi: 'AI governance tập trung vào điều gì?',
      miniQuizChoicesVi: ['Dùng AI an toàn, minh bạch, có trách nhiệm', 'Chỉ tăng số GPU', 'Chỉ viết prompt dài', 'Bỏ human review'],
      miniQuizAnswerIndex: 0,
      antiPatternVi: 'Xem AI như hộp đen tự quyết định mà không có kiểm soát, log hoặc trách nhiệm.',
    };
  }

  return {
    conceptVi: `${label} trong AI Passport nên học bằng case: input dữ liệu là gì, AI xử lý ra sao, output ảnh hưởng đến quyết định nào, và rủi ro cần kiểm soát ở đâu.`,
    conceptJa: `${node.labelJa}はinput・AI処理・output・risk controlの流れで理解します。`,
    exampleTitle: 'AI business case mini',
    exampleCode: `Business goal: reduce support workload\nInput: customer questions\nAI process: classify intent and draft answer\nOutput: suggested reply\nControl: human review for sensitive cases`,
    exampleExplanationVi: 'Cùng một khái niệm AI luôn nên gắn với mục tiêu business và control. Không chỉ hỏi “AI là gì” mà hỏi “AI giúp quyết định gì và rủi ro gì”.',
    traceSteps: ['Xác định business goal.', 'Xác định input data.', 'Xác định AI task.', 'Xác định output.', 'Xác định risk/control.'],
    exerciseVi: `Tạo một ví dụ business dùng ${label}, ghi rõ input, output và rủi ro.`,
    expectedOutput: `Input -> AI process -> Output -> Human/business decision -> Risk/control`,
    miniQuizQuestionVi: 'Khi đánh giá use case AI, câu hỏi nào quan trọng nhất?',
    miniQuizChoicesVi: ['Output dùng để quyết định gì và rủi ro ở đâu?', 'Model tên nghe có mới không?', 'Có càng nhiều buzzword càng tốt?', 'Có bỏ qua dữ liệu không?'],
    miniQuizAnswerIndex: 0,
    antiPatternVi: 'Chỉ nhớ thuật ngữ AI nhưng không nói được input/output/risk trong ví dụ thật.',
  };
}

function defaultBlueprint(courseId: CourseId, node: KnowledgeNodeData): V99LessonBlueprint {
  const label = safeLabel(node);
  return {
    conceptVi: `${label} cần học bằng một tình huống thực tế, một ví dụ nhỏ và một cách kiểm tra kết quả. Mục tiêu là hiểu dùng nó để làm gì, không chỉ đọc định nghĩa.`,
    conceptJa: `${node.labelJa}は、定義だけでなく具体例と確認方法で理解します。`,
    exampleTitle: 'Tình huống thực tế',
    exampleCode: `Goal: understand ${label}\nInput: small realistic case\nSteps: identify rule -> apply rule -> check result\nOutput: explain the result in your own words`,
    exampleExplanationVi: `Hãy biến ${label} thành một hành động cụ thể: nhận input nào, xử lý bằng rule nào, kết quả đúng/sai được kiểm tra ra sao.`,
    traceSteps: ['Xác định mục tiêu.', 'Xác định input.', 'Áp dụng rule.', 'Kiểm tra output.', 'Nêu lỗi dễ nhầm.'],
    exerciseVi: `Viết lại ${label} bằng 3 câu: định nghĩa, ví dụ, lỗi dễ nhầm.`,
    expectedOutput: `Definition + example + common mistake for ${label}`,
    miniQuizQuestionVi: 'Một lesson tốt tối thiểu cần gì?',
    miniQuizChoicesVi: ['Khái niệm, ví dụ, trace, bài tập, expected output', 'Chỉ tên bài', 'Chỉ icon đẹp', 'Chỉ nút Next'],
    miniQuizAnswerIndex: 0,
    antiPatternVi: 'Đọc card ngắn rồi bấm Done khi chưa tự giải thích được bằng ví dụ.',
  };
}

export function buildV99LessonBlueprint(courseId: CourseId, node: KnowledgeNodeData): V99LessonBlueprint {
  if (courseId === 'python') return pythonBlueprint(node);
  if (courseId === 'fundamental-info') return fundamentalInfoBlueprint(node);
  if (courseId === 'ai-passport') return aiPassportBlueprint(node);
  return defaultBlueprint(courseId, node);
}

export function detectV99LessonQuality(lessonText: string) {
  const required = ['Khái niệm', 'Ví dụ', 'Trace', 'Bài tập', 'Expected output'];
  return required.every((token) => lessonText.includes(token));
}
