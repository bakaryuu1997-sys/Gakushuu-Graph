export interface PythonV94RAdvancedTopic {
  id: string;
  nodeId: string;
  track: 'typing' | 'dataclass' | 'pathlib' | 'logging' | 'pytest-fixture' | 'fastapi-di';
  titleVi: string;
  titleJa: string;
  goalVi: string;
  goalJa: string;
  code: string;
  traceVi: string[];
  traceJa: string[];
  pitfalls: string[];
  practicePromptVi: string;
  practicePromptJa: string;
}

export const pythonV94RAdvancedTopics: PythonV94RAdvancedTopic[] = [
  {
    id: 'v94r-typing-protocol-result',
    nodeId: 'python-typing',
    track: 'typing',
    titleVi: 'Typing: TypedDict + union result để đọc contract rõ hơn',
    titleJa: 'Typing: TypedDict と union result でcontractを明確にする',
    goalVi: 'Biết dùng type hint để người đọc hiểu shape dữ liệu và lỗi trước khi chạy code.',
    goalJa: '実行前にdata shapeとerror contractが分かるtype hintを書く。',
    code: `from typing import TypedDict, Literal\n\nclass Todo(TypedDict):\n    id: int\n    title: str\n    done: bool\n\nResult = tuple[Literal[True], Todo] | tuple[Literal[False], str]\n\ndef find_todo(items: list[Todo], todo_id: int) -> Result:\n    for item in items:\n        if item['id'] == todo_id:\n            return True, item\n    return False, 'todo not found'`,
    traceVi: ['TypedDict mô tả key bắt buộc.', 'Result nói rõ success trả Todo, fail trả message.', 'Caller phải xử lý cả hai nhánh.'],
    traceJa: ['TypedDictで必須keyを表す。', 'Resultでsuccess/failの戻り値を明示する。', 'callerは両方の分岐を扱う。'],
    pitfalls: ['type hint không tự validate runtime', 'đừng dùng Any quá sớm', 'return shape phải nhất quán'],
    practicePromptVi: 'Viết get_user(users, user_id) trả (True, user) hoặc (False, reason) với type hint rõ.',
    practicePromptJa: 'get_user(users, user_id)を、明確なtype hint付きで(True,user)/(False,reason)にする。',
  },
  {
    id: 'v94r-dataclass-invariant',
    nodeId: 'python-oop',
    track: 'dataclass',
    titleVi: 'Dataclass: model nhỏ có invariant trong __post_init__',
    titleJa: 'Dataclass: __post_init__でinvariantを守る小さなmodel',
    goalVi: 'Dùng dataclass để giảm boilerplate nhưng vẫn giữ luật dữ liệu.',
    goalJa: 'boilerplateを減らしつつdata ruleを守るdataclassを書く。',
    code: `from dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass Money:\n    amount: int\n    currency: str = 'JPY'\n\n    def __post_init__(self):\n        if self.amount < 0:\n            raise ValueError('amount must be >= 0')\n        if not self.currency:\n            raise ValueError('currency is required')`,
    traceVi: ['dataclass tự tạo __init__/repr.', 'frozen=True giảm sửa state ngoài ý muốn.', '__post_init__ kiểm luật sau khi khởi tạo.'],
    traceJa: ['dataclassが__init__/reprを生成する。', 'frozen=Trueで意図しないstate変更を防ぐ。', '__post_init__で初期化後にruleを確認する。'],
    pitfalls: ['mutable default cần default_factory', 'frozen không thay thế validation', 'không nhồi quá nhiều business logic vào model'],
    practicePromptVi: 'Tạo dataclass StudySession(minutes, topic) với minutes > 0 và topic không rỗng.',
    practicePromptJa: 'minutes > 0、topic非空のStudySession dataclassを作る。',
  },
  {
    id: 'v94r-pathlib-safe-local-files',
    nodeId: 'python-file-io',
    track: 'pathlib',
    titleVi: 'Pathlib: đọc/ghi file local an toàn, dễ test',
    titleJa: 'Pathlib: testしやすいlocal file read/write',
    goalVi: 'Biết thay string path rời rạc bằng Path object rõ ràng.',
    goalJa: '文字列pathではなく明確なPath objectでfile処理する。',
    code: `from pathlib import Path\nimport json\n\ndef save_json(path: Path, data: dict) -> None:\n    path.parent.mkdir(parents=True, exist_ok=True)\n    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')\n\ndef load_json(path: Path) -> dict:\n    if not path.exists():\n        return {}\n    return json.loads(path.read_text(encoding='utf-8'))`,
    traceVi: ['Path.parent tạo thư mục cha.', 'encoding rõ để không lỗi tiếng Việt/Nhật.', 'missing file trả {} theo contract local app.'],
    traceJa: ['Path.parentで親directoryを作る。', 'encoding指定で多言語文字化けを避ける。', 'missing fileはlocal app contractとして{}を返す。'],
    pitfalls: ['không hard-code absolute path', 'không bỏ encoding', 'phân biệt file không tồn tại và JSON hỏng'],
    practicePromptVi: 'Viết append_note(path, text) tạo thư mục nếu thiếu và append một dòng UTF-8.',
    practicePromptJa: 'append_note(path,text)を作り、directory作成とUTF-8 appendを行う。',
  },
  {
    id: 'v94r-logging-boundary',
    nodeId: 'python-exception',
    track: 'logging',
    titleVi: 'Logging: log ở boundary, không print lung tung',
    titleJa: 'Logging: boundaryでlogし、printを散らさない',
    goalVi: 'Biết ghi log có context khi xử lý lỗi input/service.',
    goalJa: 'input/service errorを扱う時にcontext付きlogを書く。',
    code: `import logging\nlogger = logging.getLogger(__name__)\n\ndef parse_score(raw: str) -> int:\n    try:\n        score = int(raw)\n    except ValueError:\n        logger.info('invalid score input', extra={'raw': raw})\n        raise\n    if not 0 <= score <= 100:\n        logger.warning('score out of range', extra={'score': score})\n        raise ValueError('score must be 0..100')\n    return score`,
    traceVi: ['logger theo module.', 'info cho input sai thông thường.', 'warning cho data bất thường nhưng kiểm soát được.'],
    traceJa: ['module単位のloggerを使う。', '普通のinput errorはinfo。', '制御可能だが異常なdataはwarning。'],
    pitfalls: ['không log password/token', 'không vừa log vừa nuốt lỗi', 'print không đủ cho app lớn'],
    practicePromptVi: 'Thêm logging cho hàm parse_csv_total khi gặp dòng sai format.',
    practicePromptJa: 'parse_csv_totalでformat不正行が来た時のloggingを追加する。',
  },
  {
    id: 'v94r-pytest-fixture-tmp-path',
    nodeId: 'python-testing',
    track: 'pytest-fixture',
    titleVi: 'Pytest fixtures: tmp_path cho file test sạch',
    titleJa: 'Pytest fixtures: tmp_pathでclean file test',
    goalVi: 'Biết test code đọc/ghi file mà không làm bẩn thư mục project.',
    goalJa: 'project directoryを汚さずfile IO codeをtestする。',
    code: `def test_save_and_load_json(tmp_path):\n    path = tmp_path / 'data' / 'state.json'\n    save_json(path, {'done': True})\n\n    assert path.exists()\n    assert load_json(path) == {'done': True}\n\ndef test_load_missing_file(tmp_path):\n    assert load_json(tmp_path / 'missing.json') == {}`,
    traceVi: ['tmp_path là thư mục tạm riêng cho test.', 'Test cả happy path và missing file.', 'Không phụ thuộc file thật trong repo.'],
    traceJa: ['tmp_pathはtest専用の一時directory。', 'happy pathとmissing fileを両方testする。', 'repo内の実fileに依存しない。'],
    pitfalls: ['test phụ thuộc thứ tự chạy', 'ghi vào current directory', 'không assert nội dung file'],
    practicePromptVi: 'Viết fixture tạo CSV sample rồi test total_by_category.',
    practicePromptJa: 'CSV sample fixtureを作り、total_by_categoryをtestする。',
  },
  {
    id: 'v94r-fastapi-dependency-injection',
    nodeId: 'python-fastapi',
    track: 'fastapi-di',
    titleVi: 'FastAPI dependency injection: route test được và dễ thay service',
    titleJa: 'FastAPI dependency injection: routeをtestしやすくservice交換可能にする',
    goalVi: 'Biết tách dependency để route không hard-code database/service.',
    goalJa: 'routeにDB/serviceをhard-codeせずdependencyとして分離する。',
    code: `from fastapi import Depends, FastAPI\n\napp = FastAPI()\n\nclass TodoService:\n    def list_todos(self):\n        return [{'title': 'FE trace', 'done': False}]\n\ndef get_todo_service() -> TodoService:\n    return TodoService()\n\n@app.get('/todos')\ndef list_todos(service: TodoService = Depends(get_todo_service)):\n    return {'items': service.list_todos()}`,
    traceVi: ['get_todo_service là dependency provider.', 'Route nhận service qua Depends.', 'Khi test có thể override dependency bằng fake service.'],
    traceJa: ['get_todo_serviceはdependency provider。', 'routeはDependsでserviceを受け取る。', 'testではfake serviceにoverrideできる。'],
    pitfalls: ['không tạo kết nối DB nặng trong mỗi request nếu không cần', 'không giấu business logic trong route', 'response contract vẫn phải ổn định'],
    practicePromptVi: 'Tạo dependency get_grader_service và endpoint POST /grade dùng service.grade(payload).',
    practicePromptJa: 'get_grader_service dependencyと、service.grade(payload)を使うPOST /gradeを作る。',
  },
];

export const pythonV94RTrackOrder = ['typing', 'dataclass', 'pathlib', 'logging', 'pytest-fixture', 'fastapi-di'] as const;
