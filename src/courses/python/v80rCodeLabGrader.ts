import type { PythonCodeExercise } from './codeExercises';

export interface PythonV80RGradingRubric {
  exerciseId: string;
  skill: 'oop' | 'list-dict' | 'algorithm' | 'file-handling' | 'backend';
  expectedOutputs: string[];
  gradingChecklistVi: string[];
  gradingChecklistJa: string[];
}

const hintsVi = ['Đọc expected output trước khi sửa code.', 'Chạy visible test rồi tự giải thích từng assertion.', 'Khi pass visible, thêm case biên tương tự hidden test.'];
const hintsJa = ['expected outputを先に読みます。', 'visible testを実行し、各assertionを説明します。', 'visibleがpassしたらhiddenに近い境界caseを追加します。'];

export const pythonV80RGradedExercises: PythonCodeExercise[] = [
  {
    id: 'v80r-ex-bank-account-oop', title: 'Bank account state machine', titleJa: '銀行口座state OOP', kind: 'oop', level: 'hard',
    promptVi: 'Hoàn thiện class BankAccount. deposit phải cộng tiền dương, withdraw trả True/False và không cho balance âm. Đây là bài OOP state sát thực chiến.',
    promptJa: 'BankAccount classを完成させます。depositは正の金額だけ加算し、withdrawはTrue/Falseを返し、残高を負にしません。',
    starterCode: 'class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        pass\n\n    def withdraw(self, amount):\n        pass',
    visibleTests: ["acc = BankAccount('A', 100); acc.deposit(50); acc.balance == 150", "acc = BankAccount('A', 100); acc.withdraw(40) is True and acc.balance == 60"],
    hiddenTests: ["acc = BankAccount('A', 20); acc.withdraw(30) is False and acc.balance == 20", "acc = BankAccount('A'); acc.deposit(0); acc.balance == 0"],
    hintsVi, hintsJa,
    solution: 'class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        if amount > 0:\n            self.balance += amount\n        return self.balance\n\n    def withdraw(self, amount):\n        if amount <= 0 or amount > self.balance:\n            return False\n        self.balance -= amount\n        return True',
    relatedNodeId: 'python-oop-state', explanationVi: 'Grader kiểm state sau nhiều method call, không chỉ return value một dòng.', explanationJa: '1行のreturnだけでなく、複数method call後のstateを確認します。', mistakeTags: ['oop','state','edge-case']
  },
  {
    id: 'v80r-ex-group-scores-dict', title: 'Group scores by student', titleJa: '点数を学生別に集計', kind: 'data', level: 'standard',
    promptVi: 'Viết group_scores(rows) nhận list tuple (name, score), trả dict name -> list score theo thứ tự xuất hiện.', promptJa: '(name, score)のlistから name -> scores list のdictを作ります。',
    starterCode: 'def group_scores(rows):\n    return {}', visibleTests: ["group_scores([('A', 80), ('B', 70), ('A', 90)]) == {'A':[80,90], 'B':[70]}"],
    hiddenTests: ["group_scores([]) == {}", "group_scores([('A', 0), ('A', 100)]) == {'A':[0,100]}"], hintsVi, hintsJa,
    solution: 'def group_scores(rows):\n    result = {}\n    for name, score in rows:\n        if name not in result:\n            result[name] = []\n        result[name].append(score)\n    return result',
    relatedNodeId: 'python-dict', explanationVi: 'Bài này luyện dict-of-list, pattern rất hay gặp khi xử lý CSV/API response.', explanationJa: 'dict of listはCSV/API response処理でよく使うpatternです。', mistakeTags: ['dict','duplicates','data-structure']
  },
  {
    id: 'v80r-ex-top-k-words', title: 'Top K words', titleJa: 'Top K単語', kind: 'algorithm', level: 'hard',
    promptVi: 'Đếm word trong text, trả top k theo count giảm dần, nếu bằng nhau thì alphabet tăng dần.', promptJa: 'text内の単語を数え、count降順、同数ならalphabet昇順でtop kを返します。',
    starterCode: 'def top_k_words(text, k):\n    return []', visibleTests: ["top_k_words('b a b c a b', 2) == ['b','a']"],
    hiddenTests: ["top_k_words('', 3) == []", "top_k_words('dog cat dog cat', 2) == ['cat','dog']"], hintsVi, hintsJa,
    solution: 'def top_k_words(text, k):\n    counts = {}\n    for word in text.split():\n        counts[word] = counts.get(word, 0) + 1\n    ranked = sorted(counts.items(), key=lambda item: (-item[1], item[0]))\n    return [word for word, _ in ranked[:k]]',
    relatedNodeId: 'python-sort', explanationVi: 'Expected output ép bạn xử lý tie-break, không chỉ đếm đơn giản.', explanationJa: '同点時の並び順まで確認するため、単純なcountだけでは不十分です。', mistakeTags: ['counter','sort','edge-case']
  },
  {
    id: 'v80r-ex-parse-csv-total', title: 'Parse CSV totals', titleJa: 'CSV合計parse', kind: 'file', level: 'standard',
    promptVi: 'Viết total_by_category(csv_text) đọc CSV text có header category,amount và trả dict tổng amount theo category.', promptJa: 'header category,amount のCSV textを読み、categoryごとのamount合計dictを返します。',
    starterCode: 'def total_by_category(csv_text):\n    return {}', visibleTests: ["total_by_category('category,amount\\nfood,120\\nbook,80\\nfood,30') == {'food':150, 'book':80}"],
    hiddenTests: ["total_by_category('category,amount') == {}", "total_by_category('category,amount\\nfood,0') == {'food':0}"], hintsVi, hintsJa,
    solution: 'def total_by_category(csv_text):\n    result = {}\n    lines = csv_text.splitlines()\n    for line in lines[1:]:\n        if not line.strip():\n            continue\n        category, amount = line.split(",")\n        result[category] = result.get(category, 0) + int(amount)\n    return result',
    relatedNodeId: 'python-file-io', explanationVi: 'Bài file-handling kiểm header, dòng rỗng, ép kiểu int và cộng dồn.', explanationJa: 'header、空行、int変換、集計を確認するfile-handling問題です。', mistakeTags: ['file','parse','dict']
  },
  {
    id: 'v80r-ex-fastapi-error-response', title: 'FastAPI error response', titleJa: 'FastAPI error response', kind: 'backend', level: 'hard',
    promptVi: 'Thiết kế GET /items/{item_id}. Nếu không có item phải raise HTTPException 404, nếu có thì trả dict item.', promptJa: 'GET /items/{item_id}を設計します。存在しない場合HTTPException 404、存在すればitemを返します。',
    starterCode: 'from fastapi import FastAPI\n\napp = FastAPI()\nitems = {1: {"name": "pen"}}\n', visibleTests: ['contains:@app.get', 'contains:HTTPException', 'contains:404'],
    hiddenTests: ['contains:item_id', 'contains:raise', 'contains:items'], hintsVi, hintsJa,
    solution: 'from fastapi import FastAPI, HTTPException\n\napp = FastAPI()\nitems = {1: {"name": "pen"}}\n\n@app.get("/items/{item_id}")\ndef get_item(item_id: int):\n    if item_id not in items:\n        raise HTTPException(status_code=404, detail="item not found")\n    return items[item_id]',
    relatedNodeId: 'python-fastapi', explanationVi: 'Backend grader kiểm route, path param và error handling thay vì chỉ happy path.', explanationJa: 'happy pathだけでなくroute、path param、error handlingを確認します。', mistakeTags: ['fastapi','route','exception','validation']
  }
];

export const pythonV80RGradingRubrics: PythonV80RGradingRubric[] = [
  { exerciseId: 'v80r-ex-bank-account-oop', skill: 'oop', expectedOutputs: ['balance becomes 150 after deposit(50)', 'withdraw(30) on balance 20 returns False and balance stays 20'], gradingChecklistVi: ['State không âm', 'Method return rõ', 'Nhiều call vẫn đúng'], gradingChecklistJa: ['残高が負にならない', 'method returnが明確', '複数call後も正しい'] },
  { exerciseId: 'v80r-ex-group-scores-dict', skill: 'list-dict', expectedOutputs: ["{'A':[80,90], 'B':[70]}", '{} for empty input'], gradingChecklistVi: ['Giữ thứ tự score', 'Không overwrite duplicate key', 'Empty list trả {}'], gradingChecklistJa: ['score順序を保持', '重複keyを上書きしない', '空listは{}'] },
  { exerciseId: 'v80r-ex-top-k-words', skill: 'algorithm', expectedOutputs: ["['b','a']", "tie count uses alphabet order"], gradingChecklistVi: ['Count đúng', 'Sort theo 2 điều kiện', 'k lớn hơn số word không lỗi'], gradingChecklistJa: ['count正確', '2条件sort', 'kが大きくても壊れない'] },
  { exerciseId: 'v80r-ex-parse-csv-total', skill: 'file-handling', expectedOutputs: ["{'food':150, 'book':80}", '{} with header only'], gradingChecklistVi: ['Bỏ header', 'int conversion', 'Cộng dồn category'], gradingChecklistJa: ['headerを除外', 'int変換', 'categoryごとに集計'] },
  { exerciseId: 'v80r-ex-fastapi-error-response', skill: 'backend', expectedOutputs: ['GET /items/1 returns item', 'missing item raises 404'], gradingChecklistVi: ['Có path parameter', 'Có HTTPException 404', 'Không giấu lỗi bằng return None'], gradingChecklistJa: ['path parameterあり', 'HTTPException 404あり', 'Noneで隠さない'] },
];
