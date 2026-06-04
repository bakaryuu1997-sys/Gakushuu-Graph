export type PythonV78RExampleKind = 'oop' | 'algorithm' | 'data' | 'fastapi' | 'project';

export interface PythonV78RDeepExample {
  id: string;
  nodeId: string;
  kind: PythonV78RExampleKind;
  titleVi: string;
  titleJa: string;
  scenarioVi: string;
  scenarioJa: string;
  code: string;
  traceVi: string[];
  tests: string[];
  pitfallsVi: string[];
  nextStepVi: string;
}

export const pythonV78RDeepExamples: PythonV78RDeepExample[] = [
  {
    id: 'v78r-oop-bank-account', nodeId: 'python-oop', kind: 'oop', titleVi: 'OOP: BankAccount không dùng state chung', titleJa: 'OOP: 共有stateを避けるBankAccount',
    scenarioVi: 'Mô phỏng tài khoản local: mỗi object có balance riêng, method validate số tiền, không dùng mutable class variable.',
    scenarioJa: 'local accountを模擬し、各objectが独自balanceを持ち、金額validationをmethodに分けます。',
    code: "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        if amount <= 0:\n            raise ValueError('amount must be positive')\n        self.balance += amount\n        return self.balance\n\n    def withdraw(self, amount):\n        if amount > self.balance:\n            return False\n        self.balance -= amount\n        return True",
    traceVi: ['Tạo a=BankAccount("A",100), b=BankAccount("B",0).', 'a.deposit(50) chỉ đổi a.balance thành 150.', 'b.balance vẫn là 0 nên chứng minh state không bị dùng chung.'],
    tests: ['BankAccount("A", 10).deposit(5) == 15', 'withdraw quá balance trả False', 'deposit(0) raise ValueError'],
    pitfallsVi: ['Đặt transactions=[] ở class level làm mọi account dùng chung list.', 'Quên self nên method không đọc được state object.', 'Không validate amount âm làm balance sai.'],
    nextStepVi: 'Thêm dataclass Transaction và export lịch sử giao dịch ra JSON.'
  },
  {
    id: 'v78r-stack-parentheses', nodeId: 'python-stack-queue', kind: 'algorithm', titleVi: 'Stack: kiểm tra ngoặc hợp lệ', titleJa: 'Stack: 括弧validation',
    scenarioVi: 'Dạng trace rất hay gặp: dùng stack để nhớ ngoặc mở, gặp ngoặc đóng thì pop và so sánh.', scenarioJa: '開き括弧をstackに積み、閉じ括弧でpopして比較します。',
    code: "def is_valid_parentheses(text):\n    pairs = {')': '(', ']': '[', '}': '{'}\n    stack = []\n    for ch in text:\n        if ch in pairs.values():\n            stack.append(ch)\n        elif ch in pairs:\n            if not stack or stack.pop() != pairs[ch]:\n                return False\n    return not stack",
    traceVi: ['Input "([{}])": push (, push [, push {.', 'Gặp } pop { đúng; gặp ] pop [ đúng; gặp ) pop ( đúng.', 'Stack rỗng cuối cùng nên True.'],
    tests: ['is_valid_parentheses("([{}])") is True', 'is_valid_parentheses("([)]") is False', 'is_valid_parentheses("(") is False'],
    pitfallsVi: ['Quên kiểm stack rỗng trước pop.', 'Chỉ đếm số lượng ngoặc mà không kiểm thứ tự.', 'Không kiểm stack còn dư cuối vòng lặp.'], nextStepVi: 'Viết trace table gồm i, ch, stack_before, action, stack_after.'
  },
  {
    id: 'v78r-queue-bfs', nodeId: 'python-graph', kind: 'algorithm', titleVi: 'Graph BFS bằng queue', titleJa: 'QueueでGraph BFS',
    scenarioVi: 'Tìm đường đi ngắn nhất theo số cạnh trong graph không trọng số.', scenarioJa: '重みなしgraphで辺数が最短のpathを探します。',
    code: "from collections import deque\n\ndef shortest_edges(graph, start, goal):\n    queue = deque([(start, 0)])\n    visited = {start}\n    while queue:\n        node, dist = queue.popleft()\n        if node == goal:\n            return dist\n        for nxt in graph.get(node, []):\n            if nxt not in visited:\n                visited.add(nxt)\n                queue.append((nxt, dist + 1))\n    return None",
    traceVi: ['Queue bắt đầu [(A,0)].', 'Pop A, thêm neighbor chưa visited với distance 1.', 'Lần đầu pop goal chính là số cạnh ngắn nhất.'],
    tests: ['shortest_edges({"A":["B"],"B":["C"]}, "A", "C") == 2', 'goal không tới được trả None', 'start trùng goal trả 0'],
    pitfallsVi: ['Đánh dấu visited quá muộn làm duplicate queue.', 'Dùng list pop(0) nhiều lần gây chậm.', 'Nhầm BFS với DFS nên không còn đảm bảo shortest edge count.'], nextStepVi: 'Mở rộng trả path thật bằng parent map.'
  },
  {
    id: 'v78r-dp-climb-stairs', nodeId: 'python-dp', kind: 'algorithm', titleVi: 'DP: Climb stairs', titleJa: 'DP: 階段問題',
    scenarioVi: 'Mẫu DP cơ bản: trạng thái f[i] là số cách tới bậc i.', scenarioJa: '基本DP: f[i]はi段目に到達する方法数です。',
    code: "def climb_stairs(n):\n    if n <= 1:\n        return 1\n    prev2, prev1 = 1, 1\n    for _ in range(2, n + 1):\n        prev2, prev1 = prev1, prev1 + prev2\n    return prev1",
    traceVi: ['n=4: f0=1, f1=1.', 'i=2 => 2, i=3 => 3, i=4 => 5.', 'Chỉ cần giữ 2 trạng thái gần nhất.'],
    tests: ['climb_stairs(0) == 1', 'climb_stairs(3) == 3', 'climb_stairs(5) == 8'],
    pitfallsVi: ['Sai base case n=0.', 'Tạo list dài không cần thiết khi chỉ cần 2 biến.', 'Nhầm range làm thiếu bậc cuối.'], nextStepVi: 'Viết bản memo recursion rồi so sánh với bottom-up.'
  },
  {
    id: 'v78r-fastapi-validation', nodeId: 'python-fastapi', kind: 'fastapi', titleVi: 'FastAPI: request/response validation local-only', titleJa: 'FastAPI: local-only validation',
    scenarioVi: 'Thiết kế endpoint rõ schema, service tách riêng và lỗi 422 có chủ đích.', scenarioJa: 'schema、service分離、意図した422 validationを確認します。',
    code: "from fastapi import FastAPI\nfrom pydantic import BaseModel, Field\n\napp = FastAPI(title='Local Study API')\n\nclass GradeRequest(BaseModel):\n    answers: dict[str, str] = Field(default_factory=dict)\n\nclass GradeResponse(BaseModel):\n    score: int\n    wrong: list[str]\n\nANSWER_KEY = {'q1': 'A', 'q2': 'C'}\n\ndef grade_answers(answers):\n    wrong = [qid for qid, correct in ANSWER_KEY.items() if answers.get(qid) != correct]\n    return GradeResponse(score=len(ANSWER_KEY) - len(wrong), wrong=wrong)\n\n@app.post('/grade', response_model=GradeResponse)\ndef grade(req: GradeRequest):\n    return grade_answers(req.answers)",
    traceVi: ['Request vào GradeRequest trước, sai kiểu sẽ bị 422.', 'Route chỉ gọi service grade_answers.', 'Response ép theo GradeResponse nên field rõ ràng.'],
    tests: ['POST /grade với answers object trả score + wrong', 'answers thiếu q2 thì wrong có q2', 'answers là list phải bị validation lỗi'],
    pitfallsVi: ['Đặt logic chấm điểm trực tiếp trong route làm khó test.', 'Không dùng response_model nên response dễ lệch schema.', 'Không test payload sai kiểu.'], nextStepVi: 'Thêm TestClient tests và lưu attempt vào file local JSON.'
  },
  {
    id: 'v78r-project-portfolio-readme', nodeId: 'python-projects', kind: 'project', titleVi: 'Portfolio README thực chiến', titleJa: '実戦Portfolio README',
    scenarioVi: 'Mỗi project cần mô tả problem, input/output, cách chạy, test và giới hạn local-only.', scenarioJa: 'problem、input/output、実行方法、test、local-only制限を書きます。',
    code: "# README checklist\n# 1. Problem: app giải quyết việc gì?\n# 2. Run: python main.py hoặc uvicorn main:app --reload\n# 3. Tests: pytest / manual cases\n# 4. Edge cases: empty input, invalid type, duplicate\n# 5. Local-only: không login, không cloud, không API key",
    traceVi: ['Người xem đọc README trước code.', 'Có bộ kiểm tras giúp chứng minh project chạy thật.', 'Có local-only scope tránh over-engineering.'],
    tests: ['README có Run section', 'README có Test section', 'README có Edge cases'],
    pitfallsVi: ['Chỉ nộp code không có cách chạy.', 'Không ghi edge cases đã xử lý.', 'Project nhỏ nhưng thêm login/backend không cần thiết.'], nextStepVi: 'Tạo template README.md dùng lại cho toàn bộ mini project.'
  }
];

export const findPythonV78RExampleForNode = (nodeId: string) =>
  pythonV78RDeepExamples.find((example) => example.nodeId === nodeId) ??
  pythonV78RDeepExamples.find((example) => nodeId.includes(example.nodeId.replace('python-', '')));
