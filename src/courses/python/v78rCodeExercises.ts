import type { PythonCodeExercise } from './codeExercises';

const hintsVi = ['Viết trace tay trước khi code.', 'Thêm test rỗng/1 phần tử/duplicate.', 'Giữ logic trong function để dễ test.'];
const hintsJa = ['code前に手でtraceします。', '空・1要素・重複caseを追加します。', 'testしやすいようlogicをfunctionに分けます。'];

export const pythonV78RCodeExercises: PythonCodeExercise[] = [
  {
    id: 'v78r-ex-stack-parentheses', title: 'Trace stack parentheses', titleJa: 'Stack括弧trace', kind: 'algorithm', level: 'standard',
    promptVi: 'Viết is_valid_parentheses(text) bằng stack. Phải xử lý ngoặc lồng nhau, sai thứ tự và stack còn dư.', promptJa: 'stackで括弧validationを書きます。入れ子、順序誤り、残りstackを処理します。',
    starterCode: 'def is_valid_parentheses(text):\n    return False', visibleTests: ['is_valid_parentheses("([])") is True', 'is_valid_parentheses("([)]") is False'], hiddenTests: ['is_valid_parentheses("") is True', 'is_valid_parentheses("(") is False', 'is_valid_parentheses("]") is False'],
    hintsVi, hintsJa, solution: "def is_valid_parentheses(text):\n    pairs = {')':'(', ']':'[', '}':'{'}\n    stack = []\n    for ch in text:\n        if ch in pairs.values():\n            stack.append(ch)\n        elif ch in pairs:\n            if not stack or stack.pop() != pairs[ch]:\n                return False\n    return not stack",
    relatedNodeId: 'python-stack-queue', explanationVi: 'Bài này sát trace trainer: mỗi ký tự làm stack thay đổi nên phải ghi được stack trước/sau.', explanationJa: '各文字でstackが変わるため、前後の状態をtraceできる必要があります。', mistakeTags: ['stack','empty-input','edge-case']
  },
  {
    id: 'v78r-ex-bfs-distance', title: 'BFS shortest distance', titleJa: 'BFS最短距離', kind: 'algorithm', level: 'hard',
    promptVi: 'Viết shortest_edges(graph,start,goal) trả số cạnh ngắn nhất hoặc None nếu không tới được.', promptJa: '重みなしgraphで最短辺数を返し、到達不能ならNoneを返します。',
    starterCode: 'def shortest_edges(graph, start, goal):\n    return None', visibleTests: ["shortest_edges({'A':['B'],'B':['C']}, 'A', 'C') == 2"], hiddenTests: ["shortest_edges({'A':['B'],'B':[]}, 'A', 'D') is None", "shortest_edges({'A':['B','C'],'B':['D'],'C':['D']}, 'A', 'D') == 2"],
    hintsVi, hintsJa, solution: "from collections import deque\n\ndef shortest_edges(graph, start, goal):\n    queue = deque([(start, 0)])\n    visited = {start}\n    while queue:\n        node, dist = queue.popleft()\n        if node == goal:\n            return dist\n        for nxt in graph.get(node, []):\n            if nxt not in visited:\n                visited.add(nxt)\n                queue.append((nxt, dist + 1))\n    return None",
    relatedNodeId: 'python-graph', explanationVi: 'BFS dùng queue nên lần đầu gặp goal là đường ít cạnh nhất.', explanationJa: 'BFSはqueueを使うため、最初にgoalへ到達した距離が最短です。', mistakeTags: ['queue','visited','graph']
  },
  {
    id: 'v78r-ex-dp-climb', title: 'DP climb stairs', titleJa: 'DP階段', kind: 'algorithm', level: 'standard',
    promptVi: 'Viết climb_stairs(n) với bước 1 hoặc 2. Tối ưu memory O(1).', promptJa: '1歩/2歩でn段へ行く方法数をO(1) memoryで求めます。',
    starterCode: 'def climb_stairs(n):\n    return 0', visibleTests: ['climb_stairs(3) == 3', 'climb_stairs(5) == 8'], hiddenTests: ['climb_stairs(0) == 1', 'climb_stairs(1) == 1'],
    hintsVi, hintsJa, solution: 'def climb_stairs(n):\n    if n <= 1:\n        return 1\n    a, b = 1, 1\n    for _ in range(2, n + 1):\n        a, b = b, a + b\n    return b',
    relatedNodeId: 'python-dp', explanationVi: 'DP cần định nghĩa state và base case rõ trước khi code.', explanationJa: 'DPはcode前にstateとbase caseを明確にします。', mistakeTags: ['dp','base-case','edge-case']
  },
  {
    id: 'v78r-ex-fastapi-grade-design', title: 'FastAPI grade endpoint design', titleJa: 'FastAPI採点endpoint設計', kind: 'backend', level: 'hard',
    promptVi: 'Thiết kế endpoint POST /grade có BaseModel, response_model, service grade_answers và wrong list.', promptJa: 'POST /grade、BaseModel、response_model、grade_answers service、wrong listを設計します。',
    starterCode: 'from fastapi import FastAPI\n\napp = FastAPI()\n', visibleTests: ["contains:@app.post('/grade')", 'contains:BaseModel', 'contains:response_model'], hiddenTests: ['contains:grade_answers', 'contains:wrong', 'contains:answers'],
    hintsVi, hintsJa, solution: "from fastapi import FastAPI\nfrom pydantic import BaseModel, Field\n\napp = FastAPI()\n\nclass GradeRequest(BaseModel):\n    answers: dict[str, str] = Field(default_factory=dict)\n\nclass GradeResponse(BaseModel):\n    score: int\n    wrong: list[str]\n\ndef grade_answers(answers):\n    key = {'q1': 'A'}\n    wrong = [qid for qid, correct in key.items() if answers.get(qid) != correct]\n    return {'score': len(key) - len(wrong), 'wrong': wrong}\n\n@app.post('/grade', response_model=GradeResponse)\ndef grade(req: GradeRequest):\n    return grade_answers(req.answers)",
    relatedNodeId: 'python-fastapi', explanationVi: 'Bài này không cần backend thật nhưng kiểm được thiết kế local-only đúng route/schema/service.', explanationJa: '実backendなしでもroute/schema/service設計を静的に確認できます。', mistakeTags: ['fastapi','pydantic','route','validation']
  }
];
