import type { KnowledgeNodeData } from '../../features/knowledge-graph/types';

export type PythonV100Track =
  | 'foundation'
  | 'collections'
  | 'functions'
  | 'oop'
  | 'files'
  | 'errors-testing'
  | 'algorithms'
  | 'fastapi'
  | 'projects';

export interface PythonV100DeepChapter {
  id: string;
  track: PythonV100Track;
  titleVi: string;
  titleJa: string;
  nodeMatchers: string[];
  conceptVi: string;
  conceptJa: string;
  whenUseVi: string;
  mentalModelVi: string;
  code: string;
  traceVi: string[];
  exerciseVi: string;
  expectedOutput: string;
  miniQuiz: {
    questionVi: string;
    choicesVi: string[];
    answerIndex: number;
    explanationVi: string;
  };
  commonMistakesVi: string[];
  interviewCheckpointVi: string;
  nextPracticeNodeIds: string[];
}

export const pythonV100DeepChapters: PythonV100DeepChapter[] = [
  {
    id: 'v100-foundation-values',
    track: 'foundation',
    titleVi: 'Python foundation: biến, number, string, bool, input/output',
    titleJa: 'Python基礎: 変数・数値・文字列・bool・入出力',
    nodeMatchers: ['python-roadmap','python-foundation','python-setup','python-repl','python-venv','python-variable','python-number','python-string','python-bool','python-input-output','python-operator','python-type-conversion','python-fstring','python-comment','python-debug-print','typing-basics','optional-union'],
    conceptVi: 'Nền tảng Python không phải là học thuộc cú pháp rời rạc. Mục tiêu là hiểu dữ liệu đi vào chương trình, biến giữ giá trị gì, kiểu dữ liệu quyết định phép toán nào hợp lệ, và output cuối cùng là gì.',
    conceptJa: 'Python基礎は文法暗記ではなく、入力・値・型・出力の流れを追う練習です。',
    whenUseVi: 'Dùng khi bạn cần đọc một đoạn code ngắn, dự đoán output, chuyển input text thành number, format kết quả, hoặc debug giá trị sai.',
    mentalModelVi: 'Hãy đọc theo chuỗi: input → type conversion → biến trung gian → phép tính/string method → output.',
    code: `price_text = "1200"\nquantity_text = "3"\n\nprice = int(price_text)\nquantity = int(quantity_text)\ntotal = price * quantity\nmessage = f"Total: {total} yen"\n\nprint(message)`,
    traceVi: [
      'price_text là string "1200", chưa thể nhân theo nghĩa số học nếu không đổi kiểu.',
      'int(price_text) tạo số nguyên 1200.',
      'quantity = 3 nên total = 1200 * 3 = 3600.',
      'f-string ghép giá trị total vào text.',
      'print hiển thị đúng một dòng: Total: 3600 yen.'
    ],
    exerciseVi: 'Viết function calc_total(price_text, quantity_text) trả về chuỗi "Total: ... yen". Thử input "980", "2".',
    expectedOutput: `calc_total("980", "2") -> "Total: 1960 yen"\ncalc_total("100", "0") -> "Total: 0 yen"`,
    miniQuiz: {
      questionVi: 'Vì sao phải dùng int(price_text)?',
      choicesVi: ['Để xóa biến price_text', 'Để chuyển string thành số trước khi tính toán', 'Để print nhanh hơn', 'Để tạo list'],
      answerIndex: 1,
      explanationVi: 'Input thường là text. Muốn cộng/nhân số học thì cần chuyển sang int hoặc float.'
    },
    commonMistakesVi: ['Cộng string "1" + "2" rồi tưởng ra 3.', 'Quên xử lý input rỗng hoặc chữ không đổi được sang int.', 'Dùng print để debug nhưng không biết biến hiện có kiểu gì.'],
    interviewCheckpointVi: 'Giải thích được khác nhau giữa "123" và 123, và khi nào dùng int(), str(), f-string.',
    nextPracticeNodeIds: ['python-type-conversion','python-fstring','python-debug-print']
  },
  {
    id: 'v100-control-flow',
    track: 'foundation',
    titleVi: 'Control flow: if, for, while, break/continue',
    titleJa: '制御フロー: if・for・while・break/continue',
    nodeMatchers: ['python-control','python-if','python-for','python-while','python-break-continue','python-nested-loop','python-range'],
    conceptVi: 'Control flow là cách chương trình quyết định đi nhánh nào và lặp bao nhiêu lần. Khi đọc code, đừng chỉ nhìn tên vòng lặp; hãy theo dõi biến nào đổi sau mỗi lượt.',
    conceptJa: '制御フローは分岐と反復です。各ループで変数がどう変わるかを追います。',
    whenUseVi: 'Dùng để lọc dữ liệu, tính tổng, tìm phần tử đầu tiên thỏa điều kiện, hoặc dừng vòng lặp khi đã đủ kết quả.',
    mentalModelVi: 'Mỗi vòng lặp là một bảng trace nhỏ: i/current value → điều kiện → update biến → có break/continue không.',
    code: `scores = [45, 80, 67, 92]\npassed = []\n\nfor score in scores:\n    if score < 60:\n        continue\n    passed.append(score)\n\nprint(passed)`,
    traceVi: ['45 < 60 nên continue, không append.', '80 hợp lệ, append 80.', '67 hợp lệ, append 67.', '92 hợp lệ, append 92.', 'Kết quả cuối là [80, 67, 92].'],
    exerciseVi: 'Viết function first_large(nums, limit) trả về số đầu tiên lớn hơn limit. Nếu không có thì trả None.',
    expectedOutput: `first_large([3, 8, 10], 7) -> 8\nfirst_large([1, 2], 5) -> None`,
    miniQuiz: { questionVi: 'continue khác break ở điểm nào?', choicesVi: ['continue dừng toàn bộ loop', 'continue bỏ phần còn lại của lượt hiện tại, break thoát loop', 'Hai cái giống nhau', 'break chỉ dùng cho if'], answerIndex: 1, explanationVi: 'continue nhảy sang lượt kế tiếp; break kết thúc vòng lặp ngay.' },
    commonMistakesVi: ['Đặt append trước điều kiện lọc.', 'Quên cập nhật biến trong while gây loop vô hạn.', 'Nhầm range(5) chạy 1..5 thay vì 0..4.'],
    interviewCheckpointVi: 'Trace được một vòng for có continue/break bằng bảng từng bước.',
    nextPracticeNodeIds: ['python-for','python-while','python-break-continue']
  },
  {
    id: 'v100-functions-contract',
    track: 'functions',
    titleVi: 'Function contract: parameter, return, scope, lambda',
    titleJa: '関数contract: 引数・return・scope・lambda',
    nodeMatchers: ['python-functions','python-function','python-parameter','python-return','python-scope','python-lambda','python-map-filter','iterator','generator','decorator','module-package'],
    conceptVi: 'Function là một hợp đồng nhỏ: nhận input gì, trả output gì, và không nên phụ thuộc quá nhiều vào biến bên ngoài. Học function tốt giúp code dễ test và dễ chia nhỏ.',
    conceptJa: '関数は入力と出力のcontractです。外部状態に依存しすぎないほどtestしやすいです。',
    whenUseVi: 'Dùng khi một logic lặp lại, cần test riêng, hoặc muốn tách bước xử lý thành tên có nghĩa.',
    mentalModelVi: 'Đọc function theo 4 câu hỏi: input là gì, output là gì, side effect có không, edge case là gì.',
    code: `def normalize_name(name: str) -> str:\n    cleaned = name.strip()\n    if not cleaned:\n        return "anonymous"\n    return cleaned.title()\n\nprint(normalize_name("  long nguyen "))\nprint(normalize_name("   "))`,
    traceVi: ['Input đầu có khoảng trắng hai bên.', 'strip() thành "long nguyen".', 'cleaned không rỗng nên return title case.', 'Input thứ hai strip thành chuỗi rỗng.', 'Function trả "anonymous".'],
    exerciseVi: 'Viết function safe_divide(a, b) trả a / b, nhưng nếu b = 0 thì trả None.',
    expectedOutput: `safe_divide(10, 2) -> 5.0\nsafe_divide(10, 0) -> None`,
    miniQuiz: { questionVi: 'Return khác print thế nào?', choicesVi: ['return đưa giá trị ra khỏi function để code khác dùng tiếp', 'print luôn tốt hơn return', 'return chỉ dùng trong class', 'print tạo test dễ hơn'], answerIndex: 0, explanationVi: 'print chỉ hiển thị; return là kết quả thật của function.' },
    commonMistakesVi: ['Quên return nên function trả None.', 'Dùng biến global khiến test khó đoán.', 'Parameter mặc định là list/dict mutable gây bug.'],
    interviewCheckpointVi: 'Viết được function có type hint, edge case và bộ kiểm tra rõ ràng.',
    nextPracticeNodeIds: ['python-function','python-return','python-scope']
  },
  {
    id: 'v100-collections',
    track: 'collections',
    titleVi: 'Collections: list, tuple, dict, set, comprehension',
    titleJa: 'コレクション: list・tuple・dict・set・内包表記',
    nodeMatchers: ['python-data-structures','python-list','python-tuple','python-dict','python-set','python-comprehension','python-string-methods','python-copy-mutable','python-counter','python-defaultdict','python-deque'],
    conceptVi: 'Collection là cách lưu nhiều giá trị. List giữ thứ tự và sửa được; tuple phù hợp dữ liệu cố định; dict map key → value; set dùng để kiểm tra trùng/duy nhất.',
    conceptJa: 'listは順序付き可変、tupleは固定、dictはkey-value、setは重複なしの集合です。',
    whenUseVi: 'Dùng khi cần gom dữ liệu, đếm tần suất, lọc trùng, nhóm theo key, hoặc xử lý input nhiều dòng.',
    mentalModelVi: 'Chọn cấu trúc theo câu hỏi: cần thứ tự? cần sửa? cần tra nhanh theo key? cần unique?',
    code: `names = ["An", "Binh", "An", "Long"]\ncounts: dict[str, int] = {}\n\nfor name in names:\n    counts[name] = counts.get(name, 0) + 1\n\nprint(counts)\nprint(sorted(counts.items()))`,
    traceVi: ['counts ban đầu rỗng.', 'An chưa có nên get trả 0, lưu An:1.', 'Binh thành 1.', 'Gặp An lần hai, get trả 1 rồi tăng thành 2.', 'sorted(counts.items()) giúp output ổn định khi test.'],
    exerciseVi: 'Viết function count_words(words) trả dict đếm số lần xuất hiện của từng word.',
    expectedOutput: `count_words(["a", "b", "a"]) -> {"a": 2, "b": 1}\ncount_words([]) -> {}`,
    miniQuiz: { questionVi: 'Khi nào nên dùng dict?', choicesVi: ['Khi cần map key sang value và tra nhanh', 'Khi chỉ cần một số nguyên', 'Khi không có dữ liệu', 'Khi muốn loop vô hạn'], answerIndex: 0, explanationVi: 'Dict phù hợp cho lookup, count, grouping theo key.' },
    commonMistakesVi: ['Sửa list trong lúc đang loop làm bỏ sót phần tử.', 'Dùng list để tìm key nhiều lần gây chậm.', 'Copy list lồng nhau bằng shallow copy rồi bị shared inner list.'],
    interviewCheckpointVi: 'Giải thích được vì sao frequency counter thường dùng dict/Counter.',
    nextPracticeNodeIds: ['python-list','python-dict','frequency-counter']
  },
  {
    id: 'v100-oop-state',
    track: 'oop',
    titleVi: 'OOP thật sự: class, object, state, dataclass, property',
    titleJa: 'OOP実践: class・object・state・dataclass・property',
    nodeMatchers: ['python-oop','python-class','python-object','python-init','python-method','python-inheritance','python-composition','python-dataclass','python-property'],
    conceptVi: 'OOP không phải chỉ là đặt function vào class. OOP tốt là object có state riêng, method bảo vệ rule của state, và code bên ngoài không sửa bừa dữ liệu nội bộ.',
    conceptJa: 'OOPは関数をclassに入れるだけではなく、状態とruleをobjectで守る設計です。',
    whenUseVi: 'Dùng khi dữ liệu và hành vi đi cùng nhau: account có balance, todo có status, user có role, service có dependency.',
    mentalModelVi: 'Object = dữ liệu hiện tại + method hợp lệ để thay đổi dữ liệu đó + invariant không được phá.',
    code: `from dataclasses import dataclass\n\n@dataclass\nclass Todo:\n    title: str\n    done: bool = False\n\n    def __post_init__(self):\n        if not self.title.strip():\n            raise ValueError("title is required")\n\n    def complete(self) -> None:\n        self.done = True\n\ntodo = Todo("read Python")\ntodo.complete()\nprint(todo.done)`,
    traceVi: ['Tạo Todo("read Python") gọi __post_init__.', 'title không rỗng nên object hợp lệ.', 'done mặc định False.', 'complete() đổi done thành True.', 'print(todo.done) là True.'],
    exerciseVi: 'Tạo class BankAccount(owner, balance). Không cho balance âm, deposit phải > 0, withdraw không được vượt balance.',
    expectedOutput: `acc = BankAccount("Long", 100)\nacc.deposit(50) -> balance = 150\nacc.withdraw(30) -> balance = 120\nacc.withdraw(999) -> ValueError`,
    miniQuiz: { questionVi: 'Invariant trong OOP là gì?', choicesVi: ['Rule luôn phải đúng với state của object', 'Tên file Python', 'Một loại vòng lặp', 'Một package FastAPI'], answerIndex: 0, explanationVi: 'Ví dụ balance không âm là invariant của BankAccount.' },
    commonMistakesVi: ['Cho code ngoài sửa trực tiếp state làm phá rule.', 'Dùng inheritance khi composition đơn giản hơn.', 'Dataclass chỉ để giảm boilerplate, không thay thế tư duy invariant.'],
    interviewCheckpointVi: 'Thiết kế được class nhỏ có state, method, invariant và bộ kiểm tra.',
    nextPracticeNodeIds: ['python-class','python-dataclass','python-property']
  },
  {
    id: 'v100-files-errors-tests',
    track: 'files',
    titleVi: 'File handling: pathlib, JSON, CSV, context manager',
    titleJa: 'ファイル処理: pathlib・JSON・CSV・context manager',
    nodeMatchers: ['python-file','python-csv','python-json','python-pathlib','python-context-manager','env-config','requirements-lock','readme-writing'],
    conceptVi: 'File handling là đọc dữ liệu từ ngoài chương trình. Code tốt phải rõ path, encoding, format, lỗi khi file thiếu, và test bằng file tạm thay vì phụ thuộc máy thật.',
    conceptJa: 'ファイル処理ではpath・encoding・format・missing file・temporary testを意識します。',
    whenUseVi: 'Dùng cho CSV analyzer, config JSON, export report, lưu progress local, hoặc đọc dataset nhỏ.',
    mentalModelVi: 'File pipeline: path → open/read → parse → validate → transform → return data.',
    code: `from pathlib import Path\nimport json\n\n\ndef load_settings(path: Path) -> dict:\n    if not path.exists():\n        return {"theme": "light"}\n    data = json.loads(path.read_text(encoding="utf-8"))\n    return {"theme": data.get("theme", "light")}\n\nprint(load_settings(Path("missing.json")))`,
    traceVi: ['Path object giúp thao tác đường dẫn rõ hơn string.', 'Nếu file chưa có, function trả default.', 'Nếu có file, read_text đọc nội dung UTF-8.', 'json.loads parse thành dict.', 'data.get lấy theme hoặc fallback light.'],
    exerciseVi: 'Viết function total_csv(path) đọc CSV có cột amount và trả tổng amount.',
    expectedOutput: `CSV:\namount\n100\n250\n\ntotal_csv(path) -> 350`,
    miniQuiz: { questionVi: 'Vì sao nên truyền path vào function thay vì hard-code file name?', choicesVi: ['Để test dễ hơn với file tạm', 'Để code dài hơn', 'Để không đọc được file', 'Để xóa encoding'], answerIndex: 0, explanationVi: 'Test có thể tạo tmp_path và truyền vào function.' },
    commonMistakesVi: ['Hard-code path tuyệt đối trên máy cá nhân.', 'Quên encoding khi đọc tiếng Việt/Nhật.', 'Parse JSON/CSV nhưng không validate key thiếu.'],
    interviewCheckpointVi: 'Viết được file parser có fallback và test bằng tmp_path.',
    nextPracticeNodeIds: ['python-pathlib','python-json','pytest-basics']
  },
  {
    id: 'v100-errors-testing',
    track: 'errors-testing',
    titleVi: 'Error handling + testing: raise, custom exception, traceback, logging, pytest',
    titleJa: 'エラー処理とテスト: raise・例外・traceback・logging・pytest',
    nodeMatchers: ['python-error','python-raise','python-custom-exception','python-traceback','python-logging','python-breakpoint','pytest-basics','pytest-parametrize'],
    conceptVi: 'Error handling không phải che giấu lỗi. Mục tiêu là báo lỗi đúng tầng, giữ message rõ, log đủ context, và viết test để lỗi không quay lại.',
    conceptJa: 'エラー処理は隠すことではなく、正しい層で明確に扱い、testで再発を防ぐことです。',
    whenUseVi: 'Dùng khi input không hợp lệ, file thiếu, API trả lỗi, hoặc logic có nhiều edge case.',
    mentalModelVi: 'Boundary thì validate và đổi lỗi thành message hữu ích; core logic thì raise lỗi rõ để test bắt được.',
    code: `import logging\n\nlogger = logging.getLogger(__name__)\n\nclass InvalidScoreError(ValueError):\n    pass\n\n\ndef grade(score: int) -> str:\n    if score < 0 or score > 100:\n        raise InvalidScoreError("score must be 0..100")\n    return "pass" if score >= 70 else "review"\n\ntry:\n    print(grade(120))\nexcept InvalidScoreError as exc:\n    logger.warning("invalid grade input: %s", exc)`,
    traceVi: ['grade(120) kiểm tra boundary.', '120 ngoài 0..100 nên raise InvalidScoreError.', 'except bắt đúng loại lỗi.', 'logger.warning ghi context cho debug.', 'Core function vẫn test được riêng bằng pytest.raises.'],
    exerciseVi: 'Viết pytest cho grade: 70 pass, 69 review, -1 raise InvalidScoreError.',
    expectedOutput: `grade(70) -> "pass"\ngrade(69) -> "review"\ngrade(-1) -> raises InvalidScoreError`,
    miniQuiz: { questionVi: 'Khi nào nên raise exception?', choicesVi: ['Khi input làm function không thể trả kết quả hợp lệ', 'Khi muốn bỏ qua mọi lỗi', 'Khi muốn print đẹp hơn', 'Khi import package'], answerIndex: 0, explanationVi: 'Exception biểu diễn tình huống không thể xử lý như output bình thường.' },
    commonMistakesVi: ['except Exception rồi pass làm mất lỗi.', 'Log dữ liệu nhạy cảm.', 'Không test nhánh lỗi nên production mới phát hiện.'],
    interviewCheckpointVi: 'Viết được test pytest cho cả happy path và error path.',
    nextPracticeNodeIds: ['python-raise','python-logging','pytest-parametrize']
  },
  {
    id: 'v100-algorithm-patterns',
    track: 'algorithms',
    titleVi: 'Algorithm patterns: Big-O, search, two pointers, sliding window, prefix sum',
    titleJa: 'アルゴリズムpattern: Big-O・探索・two pointers・sliding window・prefix sum',
    nodeMatchers: ['python-algorithms','algorithm-thinking','big-o','linear-search','binary-search','two-pointers','sliding-window','prefix-sum','edge-case','sorting','greedy'],
    conceptVi: 'Thuật toán là cách giảm bài toán thành pattern có thể trace. Đừng học thuộc tên; hãy hiểu input nào, biến nào di chuyển, điều kiện dừng nào, và độ phức tạp ra sao.',
    conceptJa: 'アルゴリズムはpatternをtraceする力です。入力・変数移動・停止条件・計算量を見ます。',
    whenUseVi: 'Dùng khi cần tìm kiếm nhanh, tối ưu vòng lặp lồng nhau, xử lý mảng/string dài hoặc dự đoán output trong đề.',
    mentalModelVi: 'Trace bằng bảng: left/right hoặc start/end, current sum/count, best answer.',
    code: `def has_pair_sum(nums: list[int], target: int) -> bool:\n    nums = sorted(nums)\n    left, right = 0, len(nums) - 1\n    while left < right:\n        total = nums[left] + nums[right]\n        if total == target:\n            return True\n        if total < target:\n            left += 1\n        else:\n            right -= 1\n    return False\n\nprint(has_pair_sum([4, 1, 7, 2], 9))`,
    traceVi: ['Sort thành [1,2,4,7].', 'left=0 right=3 total=1+7=8 < 9 nên tăng left.', 'left=1 right=3 total=2+7=9.', 'Trả True ngay.', 'Độ phức tạp chính là sort O(n log n), scan O(n).'],
    exerciseVi: 'Viết function max_adjacent_gap(nums) trả gap lớn nhất giữa hai phần tử kề nhau.',
    expectedOutput: `max_adjacent_gap([3, 8, 6, 14]) -> 8\nmax_adjacent_gap([5]) -> 0`,
    miniQuiz: { questionVi: 'Two pointers phù hợp nhất khi nào?', choicesVi: ['Khi cần di chuyển hai chỉ số có quy luật trên list/string', 'Khi chỉ in hello', 'Khi không có dữ liệu', 'Khi muốn đọc file'], answerIndex: 0, explanationVi: 'Two pointers giảm nhiều bài O(n²) thành O(n) sau khi có cấu trúc phù hợp.' },
    commonMistakesVi: ['Quên sort trước khi dùng two pointers dạng sum.', 'Sai điều kiện while left < right.', 'Không xử lý list rỗng/1 phần tử.'],
    interviewCheckpointVi: 'Giải thích được tại sao pointer nào tăng/giảm trong từng bước.',
    nextPracticeNodeIds: ['two-pointers','sliding-window','prefix-sum']
  },
  {
    id: 'v100-stack-queue-recursion-dp',
    track: 'algorithms',
    titleVi: 'Trace khó: stack, queue, recursion, tree/graph, DP',
    titleJa: '難しめtrace: stack・queue・recursion・graph・DP',
    nodeMatchers: ['stack-algorithm','queue-algorithm','recursion','heap','tree-traversal','graph-basics','bfs','dfs','dynamic-programming'],
    conceptVi: 'Các pattern stack/queue/recursion/DP thường khó vì state không nằm ở một biến duy nhất. Cần vẽ cấu trúc trung gian: stack hiện có gì, queue đang chờ gì, call stack ở tầng nào, DP table đã cập nhật đâu.',
    conceptJa: 'stack/queue/recursion/DPは中間状態を図や表で追うことが重要です。',
    whenUseVi: 'Dùng cho kiểm tra ngoặc, BFS shortest path, recursion tree, DP counting/min-cost.',
    mentalModelVi: 'Mỗi bước hãy ghi snapshot: stack/queue/call/DP trước và sau update.',
    code: `from collections import deque\n\ndef bfs_order(graph: dict[str, list[str]], start: str) -> list[str]:\n    seen = {start}\n    q = deque([start])\n    order = []\n    while q:\n        node = q.popleft()\n        order.append(node)\n        for nxt in graph[node]:\n            if nxt not in seen:\n                seen.add(nxt)\n                q.append(nxt)\n    return order\n\ngraph = {"A": ["B", "C"], "B": ["D"], "C": [], "D": []}\nprint(bfs_order(graph, "A"))`,
    traceVi: ['Queue đầu: [A], seen={A}.', 'Pop A, order=[A], thêm B,C vào queue.', 'Pop B, order=[A,B], thêm D.', 'Pop C, không thêm gì.', 'Pop D, kết quả [A,B,C,D].'],
    exerciseVi: 'Trace BFS distance từ A đến D với graph A-B, A-C, B-D. Viết distance dict.',
    expectedOutput: `distance = {"A": 0, "B": 1, "C": 1, "D": 2}`,
    miniQuiz: { questionVi: 'BFS dùng cấu trúc dữ liệu nào?', choicesVi: ['Queue', 'Stack cho mọi trường hợp', 'Chỉ tuple', 'Không cần lưu trạng thái'], answerIndex: 0, explanationVi: 'BFS xử lý theo từng lớp nên dùng queue FIFO.' },
    commonMistakesVi: ['Mark seen quá muộn làm node bị thêm nhiều lần.', 'Nhầm DFS stack với BFS queue.', 'DP update sai thứ tự nên dùng giá trị chưa sẵn sàng.'],
    interviewCheckpointVi: 'Trace được queue hoặc DP table bằng tay trước khi code.',
    nextPracticeNodeIds: ['queue-algorithm','bfs','dynamic-programming']
  },
  {
    id: 'v100-fastapi-service',
    track: 'fastapi',
    titleVi: 'FastAPI job-ready: schema, HTTPException, dependency, router, testing, service layer',
    titleJa: 'FastAPI実践: schema・HTTPException・dependency・router・test・service layer',
    nodeMatchers: ['python-fastapi','fastapi-intro','fastapi-routing','fastapi-path-query','fastapi-request-body','pydantic-model','fastapi-response-model','fastapi-http-exception','fastapi-dependency','fastapi-router','fastapi-testing','fastapi-cors','fastapi-service-layer','fastapi-ai-serving','fastapi-async','fastapi-project'],
    conceptVi: 'FastAPI tốt không phải là nhét mọi thứ vào route. Route nhận request, Pydantic validate schema, dependency cung cấp service, service xử lý business logic, response model giữ output ổn định.',
    conceptJa: 'FastAPIではroute・schema・dependency・service・responseを分けるとtestしやすくなります。',
    whenUseVi: 'Dùng khi xây local API cho todo, grader, AI serving, dashboard hoặc backend nhỏ cho portfolio.',
    mentalModelVi: 'HTTP boundary mỏng, core logic thuần Python, test route và service riêng.',
    code: `from fastapi import Depends, FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass TodoIn(BaseModel):\n    title: str\n\nclass TodoOut(BaseModel):\n    id: int\n    title: str\n    done: bool\n\nclass TodoService:\n    def __init__(self):\n        self.items: list[TodoOut] = []\n\n    def create(self, title: str) -> TodoOut:\n        if not title.strip():\n            raise ValueError("title is required")\n        todo = TodoOut(id=len(self.items) + 1, title=title.strip(), done=False)\n        self.items.append(todo)\n        return todo\n\nservice = TodoService()\n\ndef get_service() -> TodoService:\n    return service\n\n@app.post("/todos", response_model=TodoOut)\ndef create_todo(payload: TodoIn, svc: TodoService = Depends(get_service)):\n    try:\n        return svc.create(payload.title)\n    except ValueError as exc:\n        raise HTTPException(status_code=400, detail=str(exc))`,
    traceVi: ['Client POST /todos với JSON title.', 'TodoIn validate title là string.', 'Depends inject TodoService.', 'Service kiểm tra title rỗng và tạo TodoOut.', 'Route trả response_model ổn định hoặc HTTP 400.'],
    exerciseVi: 'Thêm endpoint GET /todos trả list TodoOut. Viết test tạo 1 todo rồi GET thấy length = 1.',
    expectedOutput: `POST /todos {"title": "learn"} -> {"id":1,"title":"learn","done":false}\nPOST /todos {"title": ""} -> HTTP 400\nGET /todos -> [{"id":1,"title":"learn","done":false}]`,
    miniQuiz: { questionVi: 'Dependency injection trong FastAPI giúp gì?', choicesVi: ['Tách route khỏi cách tạo service để dễ test/thay thế', 'Làm API không cần schema', 'Tự tạo database thật', 'Bỏ HTTPException'], answerIndex: 0, explanationVi: 'Depends cho phép thay service trong test hoặc cấu hình khác mà route không đổi nhiều.' },
    commonMistakesVi: ['Route quá dài, vừa validate vừa xử lý business vừa format response.', 'Không dùng response_model nên output thay đổi khó kiểm soát.', 'Không test error response 400/404.'],
    interviewCheckpointVi: 'Giải thích được route layer, service layer, schema layer và cách test từng phần.',
    nextPracticeNodeIds: ['fastapi-dependency','fastapi-service-layer','fastapi-testing']
  },
  {
    id: 'v100-project-portfolio',
    track: 'projects',
    titleVi: 'Project portfolio: CLI, CSV analyzer, quiz app, FastAPI todo/AI',
    titleJa: 'Project portfolio: CLI・CSV分析・quiz app・FastAPI',
    nodeMatchers: ['python-projects','project-structure','argparse-cli','mini-calculator','mini-todo','mini-csv-analyzer','mini-quiz-app','mini-fastapi-todo','mini-fastapi-ai'],
    conceptVi: 'Project không phải chỉ là code chạy được. Một project portfolio cần README rõ, cách chạy, bộ kiểm tra, cấu trúc file, input/output, lỗi đã xử lý, và phần “tôi học được gì”.',
    conceptJa: 'portfolio projectは動くだけでなく、README・実行方法・test・構成・入出力・学びを示します。',
    whenUseVi: 'Dùng để luyện thực chiến, chuẩn bị phỏng vấn, hoặc chứng minh bạn biết biến kiến thức nhỏ thành sản phẩm nhỏ.',
    mentalModelVi: 'Project = yêu cầu → thiết kế file → core logic → interface CLI/API → tests → README.',
    code: `# project structure\ncsv_analyzer/\n  README.md\n  src/analyzer.py\n  tests/test_analyzer.py\n  data/sample.csv\n\n# analyzer.py\ndef total_amount(rows: list[dict[str, str]]) -> int:\n    return sum(int(row["amount"]) for row in rows)`,
    traceVi: ['README nói project làm gì và cách chạy.', 'src chứa logic chính.', 'tests chứng minh edge case.', 'data/sample.csv cho demo nhỏ.', 'Function core nhận dữ liệu đã parse để test dễ hơn.'],
    exerciseVi: 'Tạo README cho mini-csv-analyzer gồm: mục tiêu, cách chạy, input mẫu, expected output, test command.',
    expectedOutput: `README sections:\n- Goal\n- How to run\n- Sample input\n- Expected output\n- Tests\n- Known edge cases`,
    miniQuiz: { questionVi: 'Một project portfolio thiếu gì thì khó đánh giá?', choicesVi: ['README và bộ kiểm tra', 'Tên thư mục dài', 'Màu terminal', 'Emoji'], answerIndex: 0, explanationVi: 'Người xem cần biết chạy thế nào và code có được kiểm thử không.' },
    commonMistakesVi: ['Chỉ upload code không có README.', 'Không có sample input/output.', 'Không tách core logic khỏi CLI/API nên test khó.'],
    interviewCheckpointVi: 'Có thể demo project trong 3 phút: problem, design, test, edge case, cải tiến tiếp theo.',
    nextPracticeNodeIds: ['project-structure','mini-csv-analyzer','mini-fastapi-todo']
  }
];

const normalize = (value: string) => value.toLowerCase();

export function findPythonV100DeepChapterForNode(node: KnowledgeNodeData): PythonV100DeepChapter {
  const text = normalize(`${node.id} ${node.labelVi} ${node.labelEn} ${node.labelJa} ${node.keywords.join(' ')}`);
  return pythonV100DeepChapters.find((chapter) =>
    chapter.nodeMatchers.some((matcher) => text.includes(normalize(matcher)) || normalize(matcher).includes(node.id)),
  ) ?? pythonV100DeepChapters[0];
}

export function getPythonV100CoverageSummary(nodes: KnowledgeNodeData[]) {
  const covered = nodes.map((node) => ({ nodeId: node.id, chapterId: findPythonV100DeepChapterForNode(node).id }));
  const chapters = new Set(covered.map((item) => item.chapterId));
  return { totalNodes: nodes.length, coveredNodes: covered.length, chapterCount: chapters.size, covered };
}
