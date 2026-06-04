export interface PythonV84RDeepPolishLesson {
  id: string;
  nodeId: string;
  track: 'oop' | 'file' | 'exception' | 'testing' | 'decorator' | 'fastapi' | 'algorithm';
  titleVi: string;
  titleJa: string;
  practicalExample: string;
  traceVi: string[];
  traceJa: string[];
  edgeCases: string[];
  interviewCheckpointVi: string;
  interviewCheckpointJa: string;
}

export const pythonV84RDeepPolishLessons: PythonV84RDeepPolishLesson[] = [
  {
    id: 'v84r-oop-state-invariant', nodeId: 'python-oop', track: 'oop', titleVi: 'OOP invariant: balance không bao giờ âm', titleJa: 'OOP invariant: 残高を負にしない',
    practicalExample: `class Wallet:\n    def __init__(self):\n        self.balance = 0\n    def add(self, amount):\n        if amount <= 0:\n            raise ValueError('amount must be positive')\n        self.balance += amount\n    def spend(self, amount):\n        if amount > self.balance:\n            return False\n        self.balance -= amount\n        return True`,
    traceVi: ['Khởi tạo object với state rõ ràng.', 'Mỗi method kiểm điều kiện trước khi đổi state.', 'Invariant là luật luôn đúng sau mọi method call.'],
    traceJa: ['明確なstateでobjectを作る。', 'state変更前に条件を確認する。', 'invariantは全method call後も守るルール。'],
    edgeCases: ['amount = 0', 'spend lớn hơn balance', 'nhiều call liên tiếp'], interviewCheckpointVi: 'Giải thích khác biệt giữa return value và object state.', interviewCheckpointJa: 'return値とobject stateの違いを説明できる。'
  },
  {
    id: 'v84r-file-parser-pipeline', nodeId: 'python-file-io', track: 'file', titleVi: 'File handling pipeline: read → parse → validate → summarize', titleJa: 'File処理pipeline: read → parse → validate → summarize',
    practicalExample: `def summarize_csv(text):\n    rows = []\n    for line in text.splitlines()[1:]:\n        if not line.strip():\n            continue\n        name, amount = line.split(',')\n        rows.append((name, int(amount)))\n    return sum(amount for _, amount in rows)`,
    traceVi: ['Bỏ header trước.', 'Skip dòng rỗng.', 'Tách field rồi ép kiểu.', 'Tổng hợp sau khi dữ liệu sạch.'], traceJa: ['headerを先に除く。', '空行をskipする。', 'field分割後に型変換する。', 'clean dataにしてから集計する。'],
    edgeCases: ['chỉ có header', 'dòng rỗng cuối file', 'amount = 0'], interviewCheckpointVi: 'Nêu vì sao parser không nên trộn quá nhiều logic business.', interviewCheckpointJa: 'parserにbusiness logicを詰め込みすぎない理由を説明する。'
  },
  {
    id: 'v84r-custom-exception-boundary', nodeId: 'python-custom-exception', track: 'exception', titleVi: 'Exception boundary: lỗi input khác lỗi hệ thống', titleJa: 'Exception boundary: input error と system error を分ける',
    practicalExample: `class InvalidPayload(Exception):\n    pass\n\ndef parse_age(payload):\n    try:\n        age = int(payload['age'])\n    except (KeyError, ValueError) as exc:\n        raise InvalidPayload('age is required as int') from exc\n    if age < 0:\n        raise InvalidPayload('age must be >= 0')\n    return age`,
    traceVi: ['Bắt lỗi sát nơi parse input.', 'Raise lỗi domain rõ nghĩa.', 'Không nuốt exception bằng return None.'], traceJa: ['input parse場所でerrorを扱う。', '意味のあるdomain errorをraiseする。', 'return Noneでerrorを隠さない。'],
    edgeCases: ['thiếu key age', 'age không phải số', 'age âm'], interviewCheckpointVi: 'Biết khi nào dùng ValueError, custom exception, hoặc HTTPException.', interviewCheckpointJa: 'ValueError/custom exception/HTTPExceptionの使い分け。'
  },
  {
    id: 'v84r-pytest-table-tests', nodeId: 'python-testing', track: 'testing', titleVi: 'Testing: table-driven tests cho nhiều case', titleJa: 'Testing: table-driven tests',
    practicalExample: `def is_even(n):\n    return n % 2 == 0\n\ndef test_is_even_cases():\n    cases = [(0, True), (1, False), (-2, True)]\n    for value, expected in cases:\n        assert is_even(value) is expected`,
    traceVi: ['Viết case thường + case biên.', 'Loop qua bảng input/expected.', 'Khi fail biết case nào sai.'], traceJa: ['通常caseと境界caseを書く。', 'input/expected表をloopする。', 'failしたcaseを特定する。'],
    edgeCases: ['0', 'số âm', 'số rất lớn'], interviewCheckpointVi: 'Giải thích visible test và hidden test khác nhau thế nào.', interviewCheckpointJa: 'visible testとhidden testの違いを説明する。'
  },
  {
    id: 'v84r-decorator-wrapper', nodeId: 'python-decorator', track: 'decorator', titleVi: 'Decorator: wrapper giữ input/output gốc', titleJa: 'Decorator: wrapperで元のinput/outputを保つ',
    practicalExample: `def log_call(fn):\n    def wrapper(*args, **kwargs):\n        result = fn(*args, **kwargs)\n        print(fn.__name__, '->', result)\n        return result\n    return wrapper`,
    traceVi: ['Decorator nhận function.', 'Wrapper nhận args linh hoạt.', 'Gọi function gốc và return kết quả gốc.'], traceJa: ['decoratorはfunctionを受け取る。', 'wrapperは柔軟なargsを受ける。', '元functionを呼び、結果を返す。'],
    edgeCases: ['function có kwargs', 'quên return result', 'side effect print/log'], interviewCheckpointVi: 'Decorator tốt không làm đổi contract của function gốc.', interviewCheckpointJa: '良いdecoratorは元functionのcontractを壊さない。'
  },
  {
    id: 'v84r-fastapi-service-layer', nodeId: 'python-fastapi', track: 'fastapi', titleVi: 'FastAPI service layer: route mỏng, logic tách riêng', titleJa: 'FastAPI service layer: routeを薄くする',
    practicalExample: `from fastapi import FastAPI, HTTPException\napp = FastAPI()\n\ndef find_item(items, item_id):\n    if item_id not in items:\n        raise KeyError(item_id)\n    return items[item_id]\n\n@app.get('/items/{item_id}')\ndef get_item(item_id: int):\n    try:\n        return find_item({1: {'name': 'pen'}}, item_id)\n    except KeyError:\n        raise HTTPException(status_code=404, detail='not found')`,
    traceVi: ['Route nhận request và convert parameter.', 'Service xử lý business logic.', 'Route đổi domain error thành HTTP response.'], traceJa: ['routeはrequestとparameter変換を担当。', 'serviceはbusiness logicを担当。', 'routeはdomain errorをHTTP responseに変換。'],
    edgeCases: ['item_id không tồn tại', 'kiểu param sai', 'response detail rõ'], interviewCheckpointVi: 'Biết vì sao logic nên test được không cần chạy server.', interviewCheckpointJa: 'serverなしでlogicをtestできる理由を説明する。'
  },
  {
    id: 'v84r-algorithm-complexity-check', nodeId: 'python-algorithms', track: 'algorithm', titleVi: 'Algorithm polish: đúng output trước, rồi tối ưu complexity', titleJa: 'Algorithm polish: 先に正しさ、次に計算量',
    practicalExample: `def has_pair_sum(nums, target):\n    seen = set()\n    for n in nums:\n        if target - n in seen:\n            return True\n        seen.add(n)\n    return False`,
    traceVi: ['Duyệt từng phần tử một lần.', 'Set lưu số đã thấy.', 'Kiểm complement trước khi add để tránh dùng chính nó.'], traceJa: ['各要素を1回だけ見る。', 'setに見た数を保存する。', '自分自身を使わないようadd前にcomplementを見る。'],
    edgeCases: ['list rỗng', 'duplicate numbers', 'target = 0'], interviewCheckpointVi: 'Giải thích vì sao O(n) tốt hơn nested loop O(n²).', interviewCheckpointJa: 'O(n)が二重loop O(n²)より良い理由を説明する。'
  },
  {
    id: 'v84r-fastapi-validation-contract', nodeId: 'python-fastapi', track: 'fastapi', titleVi: 'FastAPI contract: request schema và error message', titleJa: 'FastAPI contract: request schema と error message',
    practicalExample: `from pydantic import BaseModel\n\nclass TodoCreate(BaseModel):\n    title: str\n    priority: int = 1\n\ndef create_todo(payload: TodoCreate):\n    return {'title': payload.title.strip(), 'priority': payload.priority, 'done': False}`,
    traceVi: ['Schema mô tả input.', 'Default value giảm lỗi thiếu field.', 'Response giữ format ổn định cho frontend.'], traceJa: ['schemaがinputを表す。', 'default値で欠損fieldに強くする。', 'frontend用にresponse形式を安定させる。'],
    edgeCases: ['title rỗng sau strip', 'priority thiếu', 'priority sai kiểu'], interviewCheckpointVi: 'Biết phân biệt validation, business rule và response contract.', interviewCheckpointJa: 'validation/business rule/response contractを区別できる。'
  }
];

export const pythonV84RTrackOrder = ['oop', 'file', 'exception', 'testing', 'decorator', 'fastapi', 'algorithm'] as const;
