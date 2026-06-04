import type { KnowledgeNodeData } from '../../features/knowledge-graph/types';

export interface PythonV101EasyLesson {
  id: string;
  titleVi: string;
  goalVi: string;
  bigIdeaVi: string;
  explainVi: string[];
  analogyVi: string;
  code: string;
  traceVi: string[];
  practiceVi: string;
  expectedOutput: string;
  commonMisunderstandingVi: string;
  quizQuestionVi: string;
  quizAnswerVi: string;
  interviewReadyVi: string;
}

const lower = (node: Pick<KnowledgeNodeData, 'id' | 'labelVi' | 'labelEn' | 'labelJa' | 'keywords'>) =>
  `${node.id} ${node.labelVi} ${node.labelEn} ${node.labelJa} ${node.keywords.join(' ')}`.toLowerCase();
const label = (node: Pick<KnowledgeNodeData, 'id' | 'labelVi' | 'labelEn' | 'labelJa'>) => node.labelVi || node.labelEn || node.labelJa || node.id;

function foundationLesson(node: Pick<KnowledgeNodeData, 'id' | 'labelVi' | 'labelEn' | 'labelJa' | 'keywords'>): PythonV101EasyLesson {
  const name = label(node);
  if (/number/.test(lower(node))) {
    return {
      id: `${node.id}-v101-easy`,
      titleVi: 'Number trong Python: hiểu số để tính toán đúng',
      goalVi: 'Sau bài này bạn phân biệt được int/float, biết vì sao input từ bàn phím thường phải ép kiểu trước khi tính.',
      bigIdeaVi: 'Number là dữ liệu dùng cho phép tính. Python có số nguyên như 10 và số thực như 10.5. Nếu dữ liệu đang là chuỗi "10" thì nhìn giống số nhưng Python vẫn xem là text.',
      explainVi: [
        'Khi chương trình nhận input từ form, terminal hoặc file, dữ liệu thường đi vào dưới dạng string. Muốn nhân, chia, so sánh số học thì cần đổi sang int hoặc float.',
        'int phù hợp cho số đếm, số lượng, index, điểm nguyên. float phù hợp cho tỉ lệ, giá tiền có phần lẻ, xác suất, trung bình.',
        'Bài tập Python hay sai ở chỗ cộng nhầm string: "1" + "2" tạo "12", còn 1 + 2 tạo 3. Vì vậy trước khi tính hãy tự hỏi: biến này đang là kiểu gì?'
      ],
      analogyVi: 'Hãy tưởng tượng string "1200" là tờ giấy ghi số tiền, còn int 1200 là số tiền thật trong máy tính. Ghi trên giấy thì chưa dùng để tính tổng được nếu chưa chuyển thành số.',
      code: `price_text = "1200"\nquantity_text = "3"\n\nprice = int(price_text)\nquantity = int(quantity_text)\ntotal = price * quantity\n\nprint(total)\nprint(f"Total: {total} yen")`,
      traceVi: [
        'price_text = "1200" là string, chưa phải số.',
        'int(price_text) đổi chuỗi "1200" thành số nguyên 1200.',
        'quantity cũng được đổi từ "3" thành 3.',
        'total = 1200 * 3 nên kết quả là 3600.',
        'f-string chỉ dùng để trình bày output đẹp hơn, không thay đổi phép tính.'
      ],
      practiceVi: 'Viết function calc_total(price_text, quantity_text) trả về chuỗi "Total: ... yen". Thêm kiểm tra nếu quantity là "0" thì kết quả phải là 0.',
      expectedOutput: `calc_total("980", "2") -> "Total: 1960 yen"\ncalc_total("100", "0") -> "Total: 0 yen"`,
      commonMisunderstandingVi: 'Sai phổ biến: thấy "100" giống số nên đem tính luôn. Python không tự hiểu mọi string là số; bạn phải dùng int() hoặc float() đúng lúc.',
      quizQuestionVi: 'Vì sao "2" + "3" không ra 5?',
      quizAnswerVi: 'Vì cả hai là string nên toán tử + nối chuỗi thành "23". Muốn ra 5 cần int("2") + int("3").',
      interviewReadyVi: 'Nói được khác nhau giữa int, float, str và giải thích cách validate input trước khi tính toán.'
    };
  }
  if (/string|fstring|string-method/.test(lower(node))) {
    return {
      id: `${node.id}-v101-easy`,
      titleVi: `${name}: xử lý text rõ ràng và tránh lỗi format`,
      goalVi: 'Biết string là dữ liệu văn bản, biết dùng strip/lower/split/f-string để làm sạch và trình bày dữ liệu.',
      bigIdeaVi: 'String là chuỗi ký tự. Trong app thật, tên người dùng, email, dòng CSV, JSON text, message lỗi đều là string trước khi được xử lý tiếp.',
      explainVi: [
        'String không chỉ để in chữ. Nó thường là bước đầu của pipeline: nhận text → làm sạch → tách phần cần dùng → đổi kiểu nếu cần.',
        'strip() bỏ khoảng trắng thừa ở hai đầu; lower() giúp so sánh không phân biệt hoa thường; split() tách text thành list; f-string ghép biến vào câu rõ ràng.',
        'Khi học string, hãy tự trace từng method. Method nào tạo string mới, method nào trả list, method nào chỉ kiểm tra đúng/sai.'
      ],
      analogyVi: 'String giống một dòng ghi chú. Trước khi đưa vào bảng tính, bạn cần cắt khoảng trắng, thống nhất chữ hoa/thường, rồi tách cột nếu cần.',
      code: `raw = "  Long Nguyen,python,80  "\ncleaned = raw.strip()\nname, course, score_text = cleaned.split(",")\nmessage = f"{name} studies {course.upper()} and scored {int(score_text)}"\nprint(message)`,
      traceVi: ['raw có khoảng trắng hai đầu.', 'strip() tạo text sạch hơn.', 'split(",") tách thành 3 phần.', 'int(score_text) đổi điểm từ text sang số.', 'f-string tạo câu kết quả dễ đọc.'],
      practiceVi: 'Viết function normalize_email(email) trả về email đã strip và lower.',
      expectedOutput: `normalize_email("  Test@Example.COM ") -> "test@example.com"`,
      commonMisunderstandingVi: 'Sai phổ biến: nghĩ string method sửa trực tiếp biến cũ. Thực tế string bất biến, method trả về string mới nên cần gán lại nếu muốn dùng.',
      quizQuestionVi: 'raw.strip().lower() làm gì?',
      quizAnswerVi: 'Nó bỏ khoảng trắng hai đầu trước, rồi chuyển text về chữ thường.',
      interviewReadyVi: 'Giải thích được pipeline xử lý string khi đọc dữ liệu từ user hoặc file CSV.'
    };
  }
  if (/bool|if|operator|conversion|input-output|variable|foundation|setup|repl|venv|comment|debug-print|roadmap/.test(lower(node))) {
    return {
      id: `${node.id}-v101-easy`,
      titleVi: `${name}: nền tảng đọc code Python theo dòng chảy dữ liệu`,
      goalVi: 'Hiểu biến giữ giá trị gì, kiểu dữ liệu là gì, điều kiện đúng/sai ra sao, và output cuối cùng được tạo thế nào.',
      bigIdeaVi: 'Một chương trình Python nhỏ luôn có dòng chảy: nhận dữ liệu → lưu vào biến → biến đổi dữ liệu → kiểm tra điều kiện → in hoặc trả kết quả.',
      explainVi: [
        'Biến không phải là hộp bí ẩn. Nó là một tên đang trỏ tới một giá trị cụ thể tại thời điểm cụ thể. Khi gán lại, tên đó trỏ sang giá trị mới.',
        'Boolean là kết quả đúng/sai của một điều kiện. if không chạy vì “cảm giác hợp lý”, nó chạy vì expression trả True.',
        'Debug bằng print nên in cả tên biến và type. Ví dụ print("score", score, type(score)) giúp biết score là int hay string.'
      ],
      analogyVi: 'Học foundation giống học đọc hóa đơn: mỗi dòng tạo ra một con số hoặc một quyết định. Đọc sai một dòng thì tổng cuối cùng sai.',
      code: `score_text = "75"\nscore = int(score_text)\npassed = score >= 60\n\nif passed:\n    result = "pass"\nelse:\n    result = "review"\n\nprint(result)`,
      traceVi: ['score_text là "75" dạng string.', 'int() đổi thành số 75.', 'score >= 60 trả True.', 'if True chạy nhánh pass.', 'Output là pass.'],
      practiceVi: 'Viết function judge(score_text) trả "pass" nếu score >= 60, ngược lại trả "review".',
      expectedOutput: `judge("75") -> "pass"\njudge("59") -> "review"`,
      commonMisunderstandingVi: 'Sai phổ biến: nhìn biến passed rồi đoán, nhưng không trace điều kiện score >= 60. Hãy luôn tính expression trước.',
      quizQuestionVi: 'Điều kiện trong if cần trả về kiểu gì?',
      quizAnswerVi: 'Nó cần một giá trị truthy/falsy, thường là boolean True hoặc False.',
      interviewReadyVi: 'Trace được một đoạn code 5-10 dòng và dự đoán output mà không cần chạy.'
    };
  }
  return foundationLesson({ ...node, id: 'python-foundation', labelVi: 'Python nền tảng' });
}

function controlLesson(node: Pick<KnowledgeNodeData, 'id' | 'labelVi' | 'labelEn' | 'labelJa' | 'keywords'>): PythonV101EasyLesson {
  const name = label(node);
  return {
    id: `${node.id}-v101-easy`,
    titleVi: `${name}: điều khiển chương trình bằng nhánh và vòng lặp`,
    goalVi: 'Biết đọc if/for/while bằng bảng trace: giá trị hiện tại là gì, điều kiện có đúng không, biến nào được cập nhật.',
    bigIdeaVi: 'Control flow quyết định dòng code nào chạy và chạy bao nhiêu lần. Đây là nền tảng của mọi bài xử lý list, thuật toán và trace 科目B.',
    explainVi: [
      'if dùng khi chương trình phải chọn nhánh. Câu hỏi cần hỏi là: điều kiện cụ thể đang True hay False?',
      'for dùng khi bạn muốn đi qua từng phần tử trong một collection hoặc từng số trong range. Mỗi lượt lặp nên được ghi thành một dòng trace.',
      'while dùng khi số lần lặp chưa biết trước. Vì vậy phải có biến thay đổi để vòng lặp tiến tới điểm dừng, nếu không sẽ thành loop vô hạn.',
      'break thoát hẳn vòng lặp; continue bỏ phần còn lại của lượt hiện tại và sang lượt kế tiếp.'
    ],
    analogyVi: 'Control flow giống quy trình kiểm tra vé: nếu vé hợp lệ thì cho qua, nếu không thì bỏ qua; lặp lại cho từng người trong hàng.',
    code: `scores = [45, 80, 67, 92]\npassed = []\n\nfor score in scores:\n    if score < 60:\n        continue\n    passed.append(score)\n\nprint(passed)`,
    traceVi: ['score=45, điều kiện score < 60 đúng nên continue.', 'score=80, điều kiện sai nên append 80.', 'score=67, append 67.', 'score=92, append 92.', 'Output cuối là [80, 67, 92].'],
    practiceVi: 'Viết function first_large(nums, limit) trả về số đầu tiên lớn hơn limit. Nếu không có thì trả None.',
    expectedOutput: `first_large([3, 8, 10], 7) -> 8\nfirst_large([1, 2], 5) -> None`,
    commonMisunderstandingVi: 'Sai phổ biến: nhầm continue với break. continue không kết thúc loop, chỉ bỏ qua phần còn lại của lượt hiện tại.',
    quizQuestionVi: 'Trong ví dụ trên, 45 có được append vào passed không?',
    quizAnswerVi: 'Không. Vì 45 < 60 nên continue chạy trước dòng append.',
    interviewReadyVi: 'Tự lập bảng trace cho vòng lặp có if, break, continue.'
  };
}

function collectionLesson(node: Pick<KnowledgeNodeData, 'id' | 'labelVi' | 'labelEn' | 'labelJa' | 'keywords'>): PythonV101EasyLesson {
  const text = lower(node);
  const name = label(node);
  if (/tuple/.test(text)) {
    return {
      id: `${node.id}-v101-easy`,
      titleVi: 'Tuple: dữ liệu cố định, đọc bằng index, hạn chế sửa nhầm',
      goalVi: 'Hiểu tuple giống list nhưng không nên sửa; dùng tốt cho tọa độ, cặp giá trị, record nhỏ cố định.',
      bigIdeaVi: 'Tuple lưu nhiều giá trị theo thứ tự như list, nhưng immutable. Khi dữ liệu có ý nghĩa “cố định trong một lần tạo”, tuple giúp code rõ ý hơn.',
      explainVi: ['Tuple phù hợp cho dữ liệu như point=(10,20), date=(2026,6,1), hoặc result=(ok,value).', 'Bạn vẫn đọc bằng index hoặc unpacking, nhưng không append/remove như list.', 'Trong bài đọc code, tuple thường xuất hiện khi function trả nhiều giá trị.'],
      analogyVi: 'Tuple giống phiếu ghi tọa độ đã in sẵn: đọc được từng ô, nhưng không đem bút sửa trực tiếp trên phiếu đó.',
      code: `point = (10, 20)\nx, y = point\nprint(x)\nprint(y)`,
      traceVi: ['point chứa hai giá trị theo thứ tự.', 'x nhận phần tử đầu 10.', 'y nhận phần tử thứ hai 20.', 'print lần lượt in 10 và 20.'],
      practiceVi: 'Viết function min_max(nums) trả về tuple (min_value, max_value).',
      expectedOutput: `min_max([3, 8, 1]) -> (1, 8)`,
      commonMisunderstandingVi: 'Sai phổ biến: cố gắng point.append(30). Tuple không có append vì nó immutable.',
      quizQuestionVi: 'Tuple khác list ở điểm quan trọng nào?',
      quizAnswerVi: 'Tuple immutable, không sửa trực tiếp bằng append/remove như list.',
      interviewReadyVi: 'Nói được khi nào dùng tuple thay vì list: dữ liệu cố định, trả nhiều giá trị, key phức hợp trong dict.'
    };
  }
  if (/dict|counter|defaultdict|frequency/.test(text)) {
    return {
      id: `${node.id}-v101-easy`,
      titleVi: `${name}: map key → value để đếm, nhóm và tra cứu nhanh`,
      goalVi: 'Biết dùng dict để count, lookup, grouping; hiểu vì sao get(key, default) tránh KeyError.',
      bigIdeaVi: 'Dict là bảng tra cứu. Mỗi key trỏ tới một value. Thay vì scan list nhiều lần, bạn lưu kết quả vào dict để lấy nhanh bằng key.',
      explainVi: ['Dùng dict khi câu hỏi có dạng: mỗi tên có bao nhiêu lần, mỗi user thuộc nhóm nào, mỗi id ứng với record nào.', 'counts.get(word, 0) nghĩa là nếu key chưa tồn tại thì xem count hiện tại là 0.', 'Counter/defaultdict chỉ là công cụ tiện hơn cho cùng ý tưởng count/group. Trước khi dùng thư viện, nên hiểu dict thường.'],
      analogyVi: 'Dict giống danh bạ: biết tên thì tra ra số điện thoại ngay, không cần đọc từng dòng từ đầu.',
      code: `words = ["ai", "python", "ai", "sql", "python", "ai"]\ncounts = {}\n\nfor word in words:\n    counts[word] = counts.get(word, 0) + 1\n\nprint(counts)`,
      traceVi: ['counts bắt đầu là {}.', 'Gặp ai lần 1: get trả 0, lưu ai=1.', 'Gặp python: lưu python=1.', 'Gặp ai lần 2: get trả 1, tăng thành 2.', 'Cuối cùng ai=3, python=2, sql=1.'],
      practiceVi: 'Viết function count_words(words) trả dict tần suất. Sau đó viết top_word(words) trả từ xuất hiện nhiều nhất.',
      expectedOutput: `count_words(["a", "b", "a"]) -> {"a": 2, "b": 1}\ntop_word(["ai", "py", "ai"]) -> "ai"`,
      commonMisunderstandingVi: 'Sai phổ biến: truy cập counts[word] trước khi key tồn tại sẽ gây KeyError. Dùng get hoặc kiểm tra if word not in counts.',
      quizQuestionVi: 'counts.get("ai", 0) trả gì nếu chưa có key "ai"?',
      quizAnswerVi: 'Trả 0, vì đó là default được truyền vào.',
      interviewReadyVi: 'Giải thích được frequency map và độ phức tạp O(n) cho một lần duyệt.'
    };
  }
  if (/set/.test(text)) {
    return {
      id: `${node.id}-v101-easy`,
      titleVi: 'Set: lưu giá trị duy nhất và kiểm tra trùng rất nhanh',
      goalVi: 'Biết dùng set để loại duplicate, kiểm tra membership, tìm giao/hợp giữa hai nhóm.',
      bigIdeaVi: 'Set không giữ duplicate. Khi chỉ quan tâm “đã gặp hay chưa”, set thường đúng hơn list.',
      explainVi: ['Dùng set khi cần unique values hoặc kiểm tra một giá trị có tồn tại không.', 'Lookup trong set thường nhanh hơn list vì không phải đọc từng phần tử theo thứ tự.', 'Set không dùng khi bạn cần giữ thứ tự chính xác hoặc lưu count. Count thì dùng dict/Counter.'],
      analogyVi: 'Set giống danh sách khách đã check-in: mỗi người chỉ xuất hiện một lần, hỏi đã vào chưa thì trả lời nhanh.',
      code: `seen = set()\nfor name in ["An", "Binh", "An"]:\n    if name in seen:\n        print("duplicate", name)\n    else:\n        seen.add(name)\nprint(seen)`,
      traceVi: ['seen rỗng.', 'An chưa có nên add.', 'Binh chưa có nên add.', 'An đã có nên in duplicate An.', 'seen cuối có An và Binh.'],
      practiceVi: 'Viết function has_duplicate(items) trả True nếu có phần tử lặp.',
      expectedOutput: `has_duplicate([1, 2, 1]) -> True\nhas_duplicate([1, 2, 3]) -> False`,
      commonMisunderstandingVi: 'Sai phổ biến: dùng set rồi kỳ vọng thứ tự output giống list ban đầu.',
      quizQuestionVi: 'Khi cần đếm số lần xuất hiện, set có đủ không?',
      quizAnswerVi: 'Không. Set chỉ biết có/không. Muốn đếm cần dict hoặc Counter.',
      interviewReadyVi: 'Biết nói difference giữa list, set, dict theo use case.'
    };
  }
  return {
    id: `${node.id}-v101-easy`,
    titleVi: `${name}: lưu nhiều giá trị và xử lý từng phần tử`,
    goalVi: 'Biết chọn list/tuple/dict/set đúng mục đích, đọc index, loop, filter và biến đổi dữ liệu an toàn.',
    bigIdeaVi: 'Collection là cách Python gom nhiều giá trị. Bài thực tế gần như luôn cần collection: danh sách điểm, dòng CSV, response JSON, queue BFS.',
    explainVi: ['List dùng khi cần thứ tự và có thể thêm/xóa/sửa.', 'Tuple dùng khi dữ liệu cố định.', 'Dict dùng khi cần key → value.', 'Set dùng khi cần unique hoặc kiểm tra đã gặp chưa.', 'Comprehension là cách viết ngắn cho pattern loop + append, nhưng chỉ nên dùng khi vẫn dễ đọc.'],
    analogyVi: 'Collection giống các loại hộp: list là khay có thứ tự, tuple là phiếu cố định, dict là danh bạ, set là danh sách không trùng.',
    code: `scores = [82, 45, 90, 60]\npassed = []\nfor score in scores:\n    if score >= 60:\n        passed.append(score)\nprint(passed)\nprint([min(score + 5, 100) for score in passed])`,
    traceVi: ['82 pass nên thêm.', '45 fail nên bỏ qua.', '90 pass nên thêm.', '60 pass nên thêm.', 'List comprehension cộng 5 nhưng min(...,100) tránh vượt 100.'],
    practiceVi: 'Viết function normalize_scores(scores) trả list các điểm >=60 sau khi cộng 5, không vượt quá 100.',
    expectedOutput: `normalize_scores([82, 45, 98]) -> [87, 100]`,
    commonMisunderstandingVi: 'Sai phổ biến: vừa loop qua list vừa remove trên chính list đó, khiến phần tử bị skip.',
    quizQuestionVi: 'Muốn map user_id sang user_name nên dùng collection nào?',
    quizAnswerVi: 'Dùng dict vì cần tra value theo key user_id.',
    interviewReadyVi: 'Chọn được cấu trúc dữ liệu và giải thích vì sao lựa chọn đó hợp lý.'
  };
}

function functionLesson(node: Pick<KnowledgeNodeData, 'id' | 'labelVi' | 'labelEn' | 'labelJa' | 'keywords'>): PythonV101EasyLesson {
  const name = label(node);
  return {
    id: `${node.id}-v101-easy`,
    titleVi: `${name}: viết logic thành hợp đồng input → output`,
    goalVi: 'Hiểu function không chỉ để gom code, mà để tạo một hợp đồng dễ test: nhận gì, trả gì, lỗi gì.',
    bigIdeaVi: 'Function tốt có tên rõ, parameter rõ, return rõ. Khi function không phụ thuộc global state và không chỉ print, bạn có thể test nó dễ dàng.',
    explainVi: ['Parameter là dữ liệu đi vào function. Return là kết quả đi ra để code khác dùng tiếp.', 'Scope giúp tránh biến bên trong function làm rối phần còn lại của chương trình.', 'Type hint không bắt buộc nhưng giúp người đọc biết function mong đợi kiểu dữ liệu nào.', 'Lambda/map/filter nên dùng vừa phải; nếu logic có nhiều điều kiện, def thường dễ đọc hơn.'],
    analogyVi: 'Function giống máy bán hàng: bạn đưa input rõ ràng, máy xử lý theo rule, rồi trả output. Nếu máy chỉ hét kết quả ra màn hình mà không trả lại gì thì rất khó dùng tiếp.',
    code: `def normalize_name(name: str) -> str:\n    cleaned = name.strip()\n    if not cleaned:\n        return "anonymous"\n    return cleaned.title()\n\nprint(normalize_name("  long nguyen "))\nprint(normalize_name("   "))`,
    traceVi: ['Input đầu tiên có khoảng trắng.', 'strip() tạo cleaned = "long nguyen".', 'cleaned không rỗng nên return title case.', 'Input thứ hai strip thành chuỗi rỗng.', 'Function trả anonymous cho edge case rỗng.'],
    practiceVi: 'Viết function safe_divide(a, b) trả a / b. Nếu b = 0 thì trả None thay vì crash.',
    expectedOutput: `safe_divide(10, 2) -> 5.0\nsafe_divide(10, 0) -> None`,
    commonMisunderstandingVi: 'Sai phổ biến: dùng print trong function rồi tưởng function có kết quả. Nếu không return, Python trả None.',
    quizQuestionVi: 'Return khác print thế nào?',
    quizAnswerVi: 'return đưa giá trị ra khỏi function để dùng tiếp; print chỉ hiển thị ra màn hình.',
    interviewReadyVi: 'Viết được function có contract, type hint, edge cases và bộ kiểm tras.'
  };
}

function oopLesson(node: Pick<KnowledgeNodeData, 'id' | 'labelVi' | 'labelEn' | 'labelJa' | 'keywords'>): PythonV101EasyLesson {
  const name = label(node);
  return {
    id: `${node.id}-v101-easy`,
    titleVi: `${name}: object có trạng thái riêng và rule thay đổi rõ ràng`,
    goalVi: 'Hiểu class dùng để gom dữ liệu + hành vi, mỗi object có state riêng, method nên bảo vệ rule của object.',
    bigIdeaVi: 'OOP không phải là nhét function vào class. OOP hữu ích khi dữ liệu và hành động luôn đi cùng nhau, ví dụ tài khoản có balance và các thao tác deposit/withdraw.',
    explainVi: ['Class là bản thiết kế; object/instance là bản cụ thể được tạo ra từ class.', '__init__ chạy khi tạo object để thiết lập state ban đầu.', 'Method là function thuộc object, thường đọc hoặc thay đổi state của object.', 'Dataclass giúp viết class lưu dữ liệu ngắn hơn; property giúp kiểm soát cách đọc/ghi dữ liệu.', 'Composition thường dễ bảo trì hơn inheritance nếu bạn chỉ muốn object A dùng object B.'],
    analogyVi: 'Class giống mẫu đơn đăng ký tài khoản, object là từng tài khoản thật của Alice/Bob. Cùng mẫu nhưng số dư và chủ tài khoản khác nhau.',
    code: `class BankAccount:\n    def __init__(self, owner: str, balance: int = 0):\n        if balance < 0:\n            raise ValueError("negative balance")\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount: int) -> None:\n        if amount <= 0:\n            raise ValueError("amount must be positive")\n        self.balance += amount\n\nalice = BankAccount("Alice", 100)\nbob = BankAccount("Bob", 20)\nalice.deposit(50)\nprint(alice.balance, bob.balance)`,
    traceVi: ['Tạo alice với balance 100.', 'Tạo bob với balance 20.', 'alice.deposit(50) chỉ thay đổi alice.', 'bob không bị ảnh hưởng vì là object khác.', 'Output là 150 20.'],
    practiceVi: 'Thêm method withdraw(amount). Nếu rút quá balance thì raise ValueError và không đổi balance.',
    expectedOutput: `alice.balance -> 150\nbob.balance -> 20\nwithdraw too much -> ValueError`,
    commonMisunderstandingVi: 'Sai phổ biến: dùng class variable cho dữ liệu riêng từng object, làm nhiều object vô tình dùng chung state.',
    quizQuestionVi: 'self.balance là dữ liệu của class hay của từng object?',
    quizAnswerVi: 'Nó là instance variable, thuộc từng object cụ thể như alice hoặc bob.',
    interviewReadyVi: 'Giải thích được class vs object, instance variable vs class variable, và invariant của object.'
  };
}

function fileLesson(node: Pick<KnowledgeNodeData, 'id' | 'labelVi' | 'labelEn' | 'labelJa' | 'keywords'>): PythonV101EasyLesson {
  const name = label(node);
  return {
    id: `${node.id}-v101-easy`,
    titleVi: `${name}: đọc dữ liệu thật, kiểm tra lỗi và viết test an toàn`,
    goalVi: 'Hiểu file/JSON/CSV/pathlib/exception/logging/pytest là phần boundary giúp code chịu được dữ liệu thật.',
    bigIdeaVi: 'Code trong bài ví dụ thường dùng list có sẵn. Code thực tế phải đọc file, parse text, validate field, xử lý lỗi và bộ kiểm tra hỏng.',
    explainVi: ['pathlib giúp làm việc với đường dẫn rõ ràng hơn string nối tay.', 'with open hoặc Path.read_text giúp quản lý file an toàn.', 'JSON thường dùng cho config/API; CSV thường dùng cho bảng dữ liệu.', 'Exception nên nói rõ lỗi gì xảy ra. Đừng except Exception rồi bỏ qua.', 'pytest fixture như tmp_path giúp test file mà không làm bẩn thư mục project. Logging dùng cho thông tin vận hành, print dùng tạm khi học/debug.'],
    analogyVi: 'Boundary giống cửa nhập hàng của kho. Nếu không kiểm hàng ở cửa, dữ liệu hỏng sẽ đi sâu vào hệ thống và gây lỗi khó tìm.',
    code: `from pathlib import Path\nimport json\n\ndef load_config(path: str) -> dict:\n    file_path = Path(path)\n    if not file_path.exists():\n        raise FileNotFoundError(path)\n\n    data = json.loads(file_path.read_text(encoding="utf-8"))\n    if "name" not in data:\n        raise ValueError("missing name")\n    return data`,
    traceVi: ['Nhận path dạng string.', 'Path kiểm tra file có tồn tại không.', 'read_text đọc nội dung UTF-8.', 'json.loads parse text thành dict.', 'Validate bắt buộc có key name trước khi return.'],
    practiceVi: 'Viết 3 test bằng pytest: file hợp lệ, file không tồn tại, JSON thiếu key name.',
    expectedOutput: `load_config("config.json") -> {"name": "demo"}\nmissing file -> FileNotFoundError\n{} -> ValueError("missing name")`,
    commonMisunderstandingVi: 'Sai phổ biến: chỉ test file đẹp. Khi chạy thật, file thiếu, encoding sai, field thiếu mới là nơi bug xuất hiện.',
    quizQuestionVi: 'Vì sao tmp_path hữu ích trong pytest?',
    quizAnswerVi: 'Nó tạo thư mục tạm sạch cho test file, giúp test độc lập và không phụ thuộc máy của bạn.',
    interviewReadyVi: 'Trình bày được cách thiết kế parser: read → parse → validate → return/error → test.'
  };
}

function algorithmLesson(node: Pick<KnowledgeNodeData, 'id' | 'labelVi' | 'labelEn' | 'labelJa' | 'keywords'>): PythonV101EasyLesson {
  const text = lower(node); const name = label(node);
  if (/binary/.test(text)) {
    return {
      id: `${node.id}-v101-easy`,
      titleVi: 'Binary search: loại bỏ nửa không thể chứa đáp án',
      goalVi: 'Hiểu binary search chỉ dùng khi dữ liệu đã sorted và mỗi bước thu hẹp khoảng tìm kiếm.',
      bigIdeaVi: 'Thay vì kiểm tra từng phần tử, binary search nhìn phần giữa. Nếu target nhỏ hơn mid thì bỏ nửa phải; nếu lớn hơn thì bỏ nửa trái.',
      explainVi: ['Điều kiện quan trọng nhất: list phải sorted.', 'Bạn cần quản lý left, right, mid chính xác để tránh loop vô hạn.', 'Khi không tìm thấy, function nên trả -1 hoặc None theo contract.', 'Điểm khó không nằm ở công thức mid, mà ở việc cập nhật left/right đúng để khoảng tìm kiếm luôn nhỏ lại sau mỗi vòng.'],
      analogyVi: 'Giống đoán số trong khoảng 1..100: hỏi 50 trước, rồi bỏ hẳn nửa sai.',
      code: `def binary_search(nums, target):\n    left, right = 0, len(nums) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if nums[mid] == target:\n            return mid\n        if nums[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1`,
      traceVi: ['nums=[2,4,7,9,12], target=9.', 'left=0 right=4 mid=2 nums[2]=7.', '7 < 9 nên left=3.', 'mid=(3+4)//2=3 nums[3]=9.', 'Tìm thấy, return 3.'],
      practiceVi: 'Trace binary_search([1,3,5,7], 2) và ghi left/right sau mỗi vòng.',
      expectedOutput: `binary_search([2,4,7,9,12], 9) -> 3\nbinary_search([1,3,5,7], 2) -> -1`,
      commonMisunderstandingVi: 'Sai phổ biến: dùng binary search trên list chưa sorted hoặc cập nhật left=mid thay vì mid+1 gây loop vô hạn.',
      quizQuestionVi: 'Binary search cần điều kiện gì trước tiên?',
      quizAnswerVi: 'Dữ liệu phải được sắp xếp theo thứ tự phù hợp.',
      interviewReadyVi: 'Trace được left/right/mid và giải thích O(log n).'
    };
  }
  return {
    id: `${node.id}-v101-easy`,
    titleVi: `${name}: học thuật toán bằng trace, không học thuộc tên`,
    goalVi: 'Biết đọc input, state, điều kiện update và output. Tự vẽ bảng trace cho stack/queue/recursion/DP/graph.',
    bigIdeaVi: 'Thuật toán là quy trình biến input thành output. Muốn hiểu thật, hãy ghi lại trạng thái sau từng bước thay vì chỉ đọc lời giải.',
    explainVi: ['Big-O trả lời code tăng chậm hay nhanh khi input lớn hơn.', 'Search/sort là pattern cơ bản để tìm và sắp xếp.', 'Stack dùng Last-In-First-Out, queue dùng First-In-First-Out.', 'Recursion cần base case và bước thu nhỏ problem.', 'DP lưu kết quả con để không tính lại.', 'Graph traversal như BFS/DFS cần visited để tránh lặp vô hạn.'],
    analogyVi: 'Algorithm giống công thức nấu ăn. Tên món không đủ; bạn phải biết mỗi bước thêm gì, đảo bao lâu, khi nào dừng.',
    code: `def is_valid_parentheses(text: str) -> bool:\n    stack = []\n    pairs = {")": "(", "]": "["}\n    for ch in text:\n        if ch in "([":\n            stack.append(ch)\n        elif ch in pairs:\n            if not stack or stack.pop() != pairs[ch]:\n                return False\n    return not stack`,
    traceVi: ['Input "([])".', 'Gặp ( thì push vào stack.', 'Gặp [ thì push.', 'Gặp ] thì pop [ khớp.', 'Gặp ) thì pop ( khớp, stack rỗng nên True.'],
    practiceVi: 'Trace is_valid_parentheses("([)]") và giải thích vì sao False.',
    expectedOutput: `is_valid_parentheses("([])") -> True\nis_valid_parentheses("([)]") -> False`,
    commonMisunderstandingVi: 'Sai phổ biến: quên kiểm tra stack rỗng trước khi pop, hoặc quên return not stack ở cuối.',
    quizQuestionVi: 'Vì sao bài ngoặc dùng stack?',
    quizAnswerVi: 'Vì dấu đóng phải khớp với dấu mở gần nhất, đúng tính chất Last-In-First-Out.',
    interviewReadyVi: 'Biết trình bày input → data structure → invariant → trace → complexity.'
  };
}

function fastapiLesson(node: Pick<KnowledgeNodeData, 'id' | 'labelVi' | 'labelEn' | 'labelJa' | 'keywords'>): PythonV101EasyLesson {
  const name = label(node);
  return {
    id: `${node.id}-v101-easy`,
    titleVi: `${name}: route mỏng, schema rõ, service dễ test`,
    goalVi: 'Hiểu FastAPI theo flow request → validation → service → response, không viết route dài khó test.',
    bigIdeaVi: 'FastAPI giúp tạo API bằng Python. Phần quan trọng không phải chỉ chạy server, mà là thiết kế input/output rõ ràng và tách business logic khỏi HTTP layer.',
    explainVi: ['Route nhận HTTP request và trả HTTP response.', 'Pydantic model mô tả request body/response để validate tự động.', 'HTTPException dùng khi lỗi thuộc về request như 400/404.', 'Dependency injection giúp route nhận service/config/db theo cách dễ thay thế trong test.', 'Service layer chứa logic thật, có thể test bằng pytest mà không cần server.'],
    analogyVi: 'Route giống quầy tiếp nhận hồ sơ; service là bộ phận xử lý nghiệp vụ phía sau. Nếu quầy làm hết mọi việc thì hệ thống nhanh rối.',
    code: `from fastapi import FastAPI, HTTPException, Depends\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass GradeRequest(BaseModel):\n    score: int\n\ndef get_pass_score() -> int:\n    return 70\n\ndef grade(score: int, pass_score: int) -> str:\n    if score < 0 or score > 100:\n        raise ValueError("score must be 0..100")\n    return "pass" if score >= pass_score else "review"\n\n@app.post("/grade")\ndef grade_route(req: GradeRequest, pass_score: int = Depends(get_pass_score)):\n    try:\n        return {"result": grade(req.score, pass_score)}\n    except ValueError as exc:\n        raise HTTPException(status_code=400, detail=str(exc))`,
    traceVi: ['Client gửi POST /grade với score.', 'Pydantic kiểm tra score là int.', 'Depends lấy pass_score=70.', 'Service grade xử lý rule pass/review.', 'Route đổi lỗi domain thành HTTP 400 nếu input ngoài 0..100.'],
    practiceVi: 'Thêm endpoint /todos nhận title. Nếu title rỗng trả 400; nếu hợp lệ trả created=true và title đã strip.',
    expectedOutput: `POST /grade {"score": 85} -> {"result": "pass"}\nPOST /grade {"score": -1} -> HTTP 400`,
    commonMisunderstandingVi: 'Sai phổ biến: nhồi validate, database, logic và format response vào một route dài. Code chạy được nhưng rất khó test.',
    quizQuestionVi: 'Vì sao tách grade() khỏi route?',
    quizAnswerVi: 'Để test logic grade riêng, không cần HTTP server, và route chỉ lo request/response.',
    interviewReadyVi: 'Mô tả được FastAPI architecture: schema, route, service, dependency, test client.'
  };
}

function projectLesson(node: Pick<KnowledgeNodeData, 'id' | 'labelVi' | 'labelEn' | 'labelJa' | 'keywords'>): PythonV101EasyLesson {
  const name = label(node);
  return {
    id: `${node.id}-v101-easy`,
    titleVi: `${name}: biến kiến thức thành project có README và test`,
    goalVi: 'Biết cấu trúc project nhỏ: yêu cầu rõ, file rõ, core logic dễ test, CLI/API đơn giản, README có cách chạy.',
    bigIdeaVi: 'Project portfolio không cần lớn. Quan trọng là người khác mở ra hiểu bạn giải quyết vấn đề gì, chạy thế nào, test thế nào và edge case nào đã nghĩ tới.',
    explainVi: ['Project tốt bắt đầu từ problem statement ngắn.', 'Tách core logic khỏi CLI/API để test dễ.', 'README cần có goal, setup, run command, sample input/output, test command.', 'requirements lock giúp người khác cài đúng dependency.', 'Env config dùng cho setting thay đổi theo môi trường, không hard-code secret trong code.'],
    analogyVi: 'Project giống một hộp sản phẩm nhỏ. Code là máy bên trong, README là hướng dẫn sử dụng, test là tem kiểm định.',
    code: `# csv_analyzer/src/analyzer.py\ndef total_amount(rows: list[dict[str, str]]) -> int:\n    total = 0\n    for row in rows:\n        total += int(row["amount"])\n    return total\n\n# tests/test_analyzer.py\ndef test_total_amount():\n    rows = [{"amount": "100"}, {"amount": "50"}]\n    assert total_amount(rows) == 150`,
    traceVi: ['Test tạo input nhỏ gồm 2 dòng.', 'Function duyệt từng row.', 'int(row["amount"]) đổi text thành số.', 'total cộng 100 rồi 50.', 'assert kiểm tra kết quả là 150.'],
    practiceVi: 'Viết README cho mini-csv-analyzer gồm Goal, How to run, Sample input, Expected output, Tests, Edge cases.',
    expectedOutput: `pytest -> passed\npython -m csv_analyzer data/sample.csv -> total=150`,
    commonMisunderstandingVi: 'Sai phổ biến: chỉ upload code, không có README/test/sample input nên người khác không đánh giá được năng lực.',
    quizQuestionVi: 'Một project nhỏ cần tối thiểu gì để dễ review?',
    quizAnswerVi: 'README rõ, sample input/output, test command và core logic tách riêng.',
    interviewReadyVi: 'Demo project trong 3 phút: problem, design, test, edge case, cải tiến tiếp.'
  };
}

export function buildPythonV101EasyLesson(node: Pick<KnowledgeNodeData, 'id' | 'labelVi' | 'labelEn' | 'labelJa' | 'keywords'>): PythonV101EasyLesson {
  const text = lower(node);
  if (/fastapi|api|pydantic|cors|async|request|response|router|dependency/.test(text)) return fastapiLesson(node);
  if (/project|mini-|argparse|readme|requirements|env-config|todo|calculator|quiz-app|csv-analyzer/.test(text)) return projectLesson(node);
  if (/class|object|oop|inherit|composition|dataclass|property|method|__init__/.test(text)) return oopLesson(node);
  if (/algorithm|big-o|search|pointers|window|prefix|stack|queue|recursion|sorting|heap|tree|graph|bfs|dfs|dynamic|greedy|edge-case/.test(text)) return algorithmLesson(node);
  if (/file|csv|json|pathlib|context|error|raise|exception|traceback|logging|breakpoint|pytest|test|typing|optional|iterator|generator|decorator|module/.test(text)) return fileLesson(node);
  if (/function|parameter|return|scope|lambda|map|filter/.test(text)) return functionLesson(node);
  if (/list|tuple|dict|set|comprehension|copy|counter|defaultdict|deque|string-methods/.test(text)) return collectionLesson(node);
  if (/if|for|while|break|continue|nested|range|control/.test(text)) return controlLesson(node);
  return foundationLesson(node);
}

export function buildPythonV101LessonFields<T extends { id: string; labelVi: string; labelEn: string; labelJa: string; keywords: string[]; examples?: string[] }>(item: T) {
  const lesson = buildPythonV101EasyLesson(item);
  return {
    definitionVi: `${lesson.titleVi}. ${lesson.bigIdeaVi}`,
    whyImportantVi: `${lesson.goalVi} ${lesson.explainVi.join(' ')} Ví dụ chính: ${lesson.code.replace(/\n/g, ' ')}`,
    examPatternsVi: [
      `Bài học dễ hiểu: ${lesson.goalVi}`,
      `Trace: ${lesson.traceVi[0]}`,
      `Bài tập: ${lesson.practiceVi}`,
      `Expected output: ${lesson.expectedOutput}`,
      `Quiz: ${lesson.quizQuestionVi} → ${lesson.quizAnswerVi}`,
    ],
    commonMistakesVi: [lesson.commonMisunderstandingVi, 'Chưa tự trace từng dòng code.', 'Chưa tự viết lại ví dụ bằng input khác.'],
    memoryTipVi: lesson.analogyVi,
    examples: Array.from(new Set([...(item.examples ?? []), lesson.titleVi, lesson.practiceVi, lesson.expectedOutput])),
    keywords: Array.from(new Set([...item.keywords, 'V101R-easy-lesson', lesson.id])),
  };
}

export function summarizePythonV101Coverage(nodes: Pick<KnowledgeNodeData, 'id' | 'labelVi' | 'labelEn' | 'labelJa' | 'keywords'>[]) {
  const lessons = nodes.map(buildPythonV101EasyLesson);
  return {
    total: nodes.length,
    allHaveEasyLesson: lessons.length === nodes.length && lessons.every((lesson) => lesson.explainVi.length >= 3 && lesson.code.length > 40),
    tooShort: lessons.filter((lesson) => lesson.bigIdeaVi.length < 80 || lesson.explainVi.join(' ').length < 180 || lesson.traceVi.length < 4).map((lesson) => lesson.id),
  };
}
