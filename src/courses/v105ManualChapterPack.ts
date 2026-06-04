import type { KnowledgeNodeData } from '../features/knowledge-graph/types';
import type { CourseId } from './types';

export type V105ChapterGroup = 'python-foundation' | 'python-oop' | 'python-algorithm' | 'fe-kamoku-b' | 'ai-case-study';

export interface V105ManualChapter {
  id: string;
  courseId: CourseId;
  group: V105ChapterGroup;
  match: string[];
  titleVi: string;
  subtitleVi: string;
  whyItMattersVi: string;
  conceptVi: string[];
  storyVi: string;
  deepExampleTitleVi: string;
  deepExampleBody: string;
  walkthroughVi: string[];
  exerciseVi: string;
  expectedOutputVi: string;
  miniQuizVi: string;
  miniQuizAnswerVi: string;
  mistakesVi: string[];
  studyChecklistVi: string[];
}

const pythonFoundationNumber: V105ManualChapter = {
  id: 'v105-python-foundation-values-types',
  courseId: 'python',
  group: 'python-foundation',
  match: ['python-number', 'number', 'variable', 'string', 'boolean', 'input', 'print', 'operator', 'type', 'foundation'],
  titleVi: 'Python Foundation: biến, kiểu dữ liệu và output không còn học vẹt',
  subtitleVi: 'Mục tiêu của chapter này là hiểu “dữ liệu đang là gì” trước khi viết logic.',
  whyItMattersVi: 'Người mới thường sai không phải vì chưa biết cú pháp, mà vì nhầm dữ liệu text với số, nhầm biến với giá trị, hoặc không dự đoán được output. Khi đi phỏng vấn fresher, chỉ cần trace sai kiểu dữ liệu là câu trả lời sẽ mất điểm ngay.',
  conceptVi: [
    'Biến trong Python giống nhãn dán lên một giá trị. Khi viết price = 1200, biến price đang trỏ tới số nguyên 1200. Khi viết price_text = "1200", biến price_text trỏ tới chuỗi ký tự gồm bốn chữ số, không phải số để tính tiền.',
    'Kiểu dữ liệu quyết định phép toán hoạt động thế nào. 1 + 2 cho ra 3 vì cả hai là số; "1" + "2" cho ra "12" vì cả hai là chuỗi và dấu + lúc này nghĩa là nối chữ.',
    'Khi nhận input từ bàn phím hoặc file CSV, dữ liệu ban đầu thường là chuỗi. Muốn cộng, trừ, nhân, chia, bạn phải chuyển bằng int() hoặc float(). Đây là lỗi rất hay gặp trong bài code lab và backend API.',
    'Output không chỉ là print cho đẹp. Output là bằng chứng chương trình chạy đúng. Trước khi bấm Run, hãy tự dự đoán output để biết mình thật sự hiểu code.'
  ],
  storyVi: 'Ví dụ đời thường: hóa đơn ghi “1200円” trên giấy là chữ để người đọc hiểu. Máy tính không tự biết đó là số tiền để cộng với “300円”. Bạn phải bóc phần chữ, đổi thành số 1200 và 300, rồi mới cộng được 1500.',
  deepExampleTitleVi: 'Ví dụ viết tay: tính tổng tiền từ dữ liệu text',
  deepExampleBody: `raw_price = "1200"
raw_tax = "300"

price = int(raw_price)
tax = int(raw_tax)
total = price + tax

message = f"Total: {total} yen"
print(message)`,
  walkthroughVi: [
    'Dòng 1 và 2: raw_price và raw_tax là string. Chúng nhìn giống số nhưng chưa dùng để cộng kiểu số được.',
    'Dòng 4 và 5: int() chuyển string hợp lệ thành integer. Sau bước này price là 1200, tax là 300.',
    'Dòng 6: total = price + tax. Vì cả hai là integer nên kết quả là 1500.',
    'Dòng 8: f-string ghép số vào câu dễ đọc. total vẫn là số trong logic, nhưng khi đưa vào chuỗi hiển thị thì được format thành text.',
    'Dòng 9: print chỉ hiển thị kết quả. Nếu logic trước đó sai kiểu dữ liệu, print sẽ phơi bày lỗi.'
  ],
  exerciseVi: 'Viết chương trình nhận raw_hours = "8" và raw_wage = "1200", đổi sang số rồi in ra salary = hours * wage.',
  expectedOutputVi: 'Salary: 9600 yen',
  miniQuizVi: 'Vì sao "8" * 3 cho ra "888" nhưng int("8") * 3 cho ra 24?',
  miniQuizAnswerVi: '"8" là chuỗi nên * 3 nghĩa là lặp chuỗi ba lần. int("8") là số nguyên nên * 3 nghĩa là nhân số học.',
  mistakesVi: [
    'Cộng hai string số và tưởng đó là cộng số học.',
    'Dùng int() với chuỗi có ký tự lạ như "1200円" mà chưa làm sạch dữ liệu.',
    'Chỉ nhìn output đúng một lần mà không thử input biên như "0", "-1", hoặc chuỗi rỗng.'
  ],
  studyChecklistVi: [
    'Tự nói được biến khác giá trị như thế nào.',
    'Phân biệt được string "1200" và integer 1200.',
    'Dự đoán được output trước khi chạy.',
    'Biết khi nào cần int(), float(), str() và f-string.'
  ]
};

const pythonCollections: V105ManualChapter = {
  id: 'v105-python-foundation-collections',
  courseId: 'python',
  group: 'python-foundation',
  match: ['list', 'tuple', 'dict', 'set', 'collection', 'array', 'python-list', 'python-dict'],
  titleVi: 'Python Foundation: list, tuple, dict, set dùng để chọn cấu trúc dữ liệu đúng',
  subtitleVi: 'Không học collection bằng định nghĩa rời rạc; hãy học bằng câu hỏi “mình cần tìm, sửa, đếm hay giữ thứ tự?”.',
  whyItMattersVi: 'Nhiều bài Python và thuật toán trở nên dễ nếu chọn đúng cấu trúc dữ liệu. Dùng list để duyệt theo thứ tự, dict để tra cứu nhanh, set để loại trùng, tuple cho dữ liệu cố định.',
  conceptVi: [
    'List là dãy có thứ tự và có thể sửa. Dùng khi bạn cần thêm, xóa, duyệt từng phần tử, ví dụ danh sách điểm hoặc danh sách task.',
    'Tuple giống list nhưng thường dùng cho dữ liệu không muốn sửa, ví dụ tọa độ (x, y), cặp key/value tạm thời, hoặc kết quả trả về gồm nhiều phần.',
    'Dictionary lưu dữ liệu theo cặp key → value. Dùng khi bạn muốn tra cứu nhanh theo tên, id, mã sản phẩm hoặc đếm tần suất.',
    'Set lưu các giá trị không trùng. Dùng khi bạn chỉ quan tâm “đã xuất hiện chưa”, không quan trọng thứ tự.'
  ],
  storyVi: 'Ví dụ đời thường: list giống hàng người xếp thứ tự; dict giống sổ danh bạ tìm theo tên; set giống danh sách khách đã check-in không cho trùng; tuple giống tọa độ ghế A-12 không nên sửa giữa chừng.',
  deepExampleTitleVi: 'Ví dụ viết tay: đếm số lần xuất hiện bằng dict',
  deepExampleBody: `names = ["An", "Binh", "An", "Chi", "Binh", "An"]
counter = {}

for name in names:
    if name not in counter:
        counter[name] = 0
    counter[name] += 1

print(counter)
print(counter["An"])`,
  walkthroughVi: [
    'names là list vì cần giữ toàn bộ dữ liệu đầu vào và duyệt lần lượt.',
    'counter là dict vì cần map từ tên sang số lần xuất hiện.',
    'Lần đầu gặp "An", chưa có key nên tạo counter["An"] = 0.',
    'Sau đó tăng counter["An"] thêm 1. Các lần gặp sau không cần tạo lại key.',
    'Output cuối cùng cho thấy mỗi tên xuất hiện bao nhiêu lần.'
  ],
  exerciseVi: 'Cho items = ["pen", "book", "pen", "eraser"]. Viết code tạo dict đếm số lượng từng item.',
  expectedOutputVi: "{'pen': 2, 'book': 1, 'eraser': 1}",
  miniQuizVi: 'Nếu chỉ muốn biết user_id đã từng xuất hiện hay chưa, nên dùng list hay set?',
  miniQuizAnswerVi: 'Nên dùng set vì kiểm tra membership nhanh và tự loại trùng.',
  mistakesVi: [
    'Dùng list để tra cứu theo id khiến code dài và chậm.',
    'Sửa tuple trực tiếp như list.',
    'Quên kiểm tra key tồn tại trước khi counter[name] += 1.'
  ],
  studyChecklistVi: [
    'Biết chọn list khi cần thứ tự.',
    'Biết chọn dict khi cần key → value.',
    'Biết chọn set khi cần loại trùng hoặc kiểm tra đã có chưa.',
    'Tự viết được frequency counter không cần copy.'
  ]
};

const pythonOopState: V105ManualChapter = {
  id: 'v105-python-oop-state-behavior',
  courseId: 'python',
  group: 'python-oop',
  match: ['class', 'object', 'oop', 'method', 'self', 'state', 'dataclass', 'property', 'bankaccount'],
  titleVi: 'Python OOP: class không phải cú pháp khó, mà là cách gom state và hành vi',
  subtitleVi: 'Học OOP bằng câu hỏi: dữ liệu nào cần đi cùng nhau, và hành động nào được phép thay đổi dữ liệu đó?',
  whyItMattersVi: 'OOP xuất hiện trong project thật, FastAPI service layer, model dữ liệu, test và phỏng vấn. Nếu chỉ nhớ class là “khuôn mẫu tạo object” thì vẫn chưa đủ để viết code tốt.',
  conceptVi: [
    'Object là một thực thể có trạng thái riêng. Ví dụ account A có balance 1000, account B có balance 500. Cùng class nhưng state khác nhau.',
    'Method là hành động thuộc về object. deposit() và withdraw() không nên là function rời nếu chúng luôn thao tác với balance của account.',
    'self là object hiện tại. Khi gọi account.deposit(300), Python truyền account vào self để method biết đang sửa balance của account nào.',
    'Invariant là luật luôn phải đúng. Ví dụ balance không được âm. Code OOP tốt không cho phép trạng thái object bị phá vỡ.'
  ],
  storyVi: 'Ví dụ đời thường: thẻ ngân hàng không chỉ là số dư. Nó có luật nạp tiền, rút tiền, kiểm tra giao dịch. Nếu ai cũng tự sửa số dư trực tiếp, hệ thống rất dễ sai.',
  deepExampleTitleVi: 'Ví dụ viết tay: BankAccount giữ invariant balance không âm',
  deepExampleBody: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("amount must be positive")
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("not enough balance")
        self.balance -= amount

account = BankAccount("Long", 1000)
account.deposit(500)
account.withdraw(300)
print(account.balance)`,
  walkthroughVi: [
    '__init__ tạo state ban đầu: owner là "Long", balance là 1000.',
    'deposit(500) kiểm tra amount > 0 rồi cộng vào balance. Balance thành 1500.',
    'withdraw(300) kiểm tra đủ tiền rồi trừ. Balance thành 1200.',
    'Nếu withdraw(9999), method ném lỗi thay vì để balance âm.',
    'Luật dữ liệu nằm trong class, nên code bên ngoài không cần tự nhớ mọi điều kiện.'
  ],
  exerciseVi: 'Thêm method transfer_to(other, amount) để chuyển tiền từ account hiện tại sang account khác. Phải đảm bảo nếu không đủ tiền thì không account nào bị đổi balance.',
  expectedOutputVi: 'Sau transfer 200 từ A(1000) sang B(300): A=800, B=500',
  miniQuizVi: 'Vì sao không nên để code bên ngoài tự viết account.balance -= amount ở mọi nơi?',
  miniQuizAnswerVi: 'Vì sẽ dễ quên kiểm tra luật, ví dụ rút quá số dư. Method giúp gom luật vào một chỗ.',
  mistakesVi: [
    'Nhầm class variable và instance variable.',
    'Quên self nên method không sửa đúng object.',
    'Cho phép sửa state trực tiếp mà không kiểm tra invariant.'
  ],
  studyChecklistVi: [
    'Giải thích được object có state riêng.',
    'Biết self là object hiện tại.',
    'Viết được method thay đổi state có kiểm tra điều kiện.',
    'Biết vì sao invariant quan trọng trong project thật.'
  ]
};

const pythonAlgorithmTrace: V105ManualChapter = {
  id: 'v105-python-algorithm-trace-patterns',
  courseId: 'python',
  group: 'python-algorithm',
  match: ['algorithm', 'complexity', 'stack', 'queue', 'bfs', 'dfs', 'recursion', 'dp', 'two-pointer', 'sliding', 'search', 'sort', 'graph'],
  titleVi: 'Python Algorithm: học bằng trace, không học bằng thuộc lời giải',
  subtitleVi: 'Mục tiêu là nhìn biến thay đổi từng bước để tự giải được bài mới.',
  whyItMattersVi: 'Thuật toán trong phỏng vấn và 科目B đều kiểm tra khả năng trace. Nếu chỉ nhớ code mẫu, gặp input khác sẽ sai. Bạn cần biết biến nào là trạng thái, vòng lặp chạy bao nhiêu lần, điều kiện dừng là gì.',
  conceptVi: [
    'Trace nghĩa là ghi lại trạng thái sau mỗi bước quan trọng: index, biến tổng, stack/queue, kết quả tạm thời.',
    'Stack dùng LIFO: phần tử vào sau ra trước. Hợp với ngoặc, undo, call stack, DFS.',
    'Queue dùng FIFO: phần tử vào trước ra trước. Hợp với BFS, xử lý hàng đợi, tìm khoảng cách theo layer.',
    'DP dùng bảng hoặc biến nhớ để tránh tính lại. Hãy hiểu công thức chuyển trạng thái trước khi viết code.'
  ],
  storyVi: 'Ví dụ đời thường: tìm đường trong mê cung bằng BFS giống mở rộng từng vòng từ điểm xuất phát. Bạn không nhảy lung tung; bạn xét tất cả điểm cách 1 bước, rồi 2 bước, rồi 3 bước.',
  deepExampleTitleVi: 'Ví dụ viết tay: BFS tìm khoảng cách ngắn nhất',
  deepExampleBody: `from collections import deque

graph = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": ["D", "E"],
    "D": ["F"],
    "E": ["F"],
    "F": [],
}

queue = deque([("A", 0)])
visited = {"A"}

while queue:
    node, dist = queue.popleft()
    if node == "F":
        print(dist)
        break

    for nxt in graph[node]:
        if nxt not in visited:
            visited.add(nxt)
            queue.append((nxt, dist + 1))`,
  walkthroughVi: [
    'Ban đầu queue có ("A", 0), nghĩa là đang ở A với khoảng cách 0.',
    'Pop A, thêm B và C vào queue với khoảng cách 1.',
    'Pop B, thêm D với khoảng cách 2.',
    'Pop C, D đã visited nên không thêm lại; thêm E với khoảng cách 2.',
    'Khi pop D, thêm F với khoảng cách 3. Lần đầu gặp F trong BFS là đường ngắn nhất.'
  ],
  exerciseVi: 'Sửa graph để thêm cạnh B -> E. Trace lại queue và cho biết khoảng cách từ A tới F có đổi không.',
  expectedOutputVi: 'Khoảng cách vẫn là 3 nếu đường A-B-E-F hoặc A-C-E-F đều dài 3 cạnh.',
  miniQuizVi: 'Vì sao BFS cần visited?',
  miniQuizAnswerVi: 'Để tránh lặp vô hạn trong graph có vòng và tránh thêm cùng node nhiều lần làm sai hoặc chậm.',
  mistakesVi: [
    'Dùng list.pop(0) thay queue khiến chậm với dữ liệu lớn.',
    'Đánh dấu visited quá muộn, làm một node bị đưa vào queue nhiều lần.',
    'Nhầm BFS với DFS khi cần đường ngắn nhất theo số cạnh.'
  ],
  studyChecklistVi: [
    'Trace được queue sau mỗi vòng lặp.',
    'Biết node nào đã visited.',
    'Giải thích được vì sao lần đầu gặp target trong BFS là ngắn nhất.',
    'Phân biệt stack/DFS và queue/BFS.'
  ]
};

const feKamokuBArray: V105ManualChapter = {
  id: 'v105-fe-kamoku-b-array-trace',
  courseId: 'fundamental-info',
  group: 'fe-kamoku-b',
  match: ['科目b', 'algorithm', 'array', 'trace', 'pseudo', 'loop', '配列', 'for', 'while', 'binary', 'dp', 'stack', 'queue'],
  titleVi: '基本情報 科目B: trace mảng và vòng lặp theo kiểu đề thật',
  subtitleVi: 'Không đoán output bằng cảm giác; phải ghi bảng i, A[i], biến tạm và kết quả.',
  whyItMattersVi: '科目B không hỏi bạn định nghĩa thuật toán. Đề thường đưa pseudo-code và yêu cầu chọn output hoặc trạng thái biến. Người làm sai thường bỏ qua chỉ số bắt đầu từ 1 hoặc cập nhật biến sai thời điểm.',
  conceptVi: [
    'Đọc pseudo-code từ trên xuống, không nhảy đến đáp án. Mỗi vòng lặp phải ghi giá trị biến trước và sau khi update.',
    'Xác định index bắt đầu từ 0 hay 1. Đề FE Nhật thường dùng mảng bắt đầu từ 1 trong pseudo-code, khác Python.',
    'Biến max/min/count/sum không có nghĩa tự động đúng. Phải xem điều kiện if nào làm nó thay đổi.',
    'Khi gặp nested loop, hãy trace vài vòng đầu và tìm pattern, không cố tính trong đầu.'
  ],
  storyVi: 'Ví dụ đời thường: kiểm tra hóa đơn nhiều dòng. Bạn không thể chỉ nhìn dòng cuối rồi đoán tổng; phải cộng từng dòng và biết lúc nào áp dụng giảm giá.',
  deepExampleTitleVi: 'Pseudo-code viết tay: tìm khoảng cách lớn nhất giữa hai phần tử kề nhau',
  deepExampleBody: `A ← [3, 8, 6, 14]
maxGap ← 0

for i ← 2 to length(A)
  gap ← abs(A[i] - A[i - 1])
  if gap > maxGap
    maxGap ← gap
  endif
endfor

print maxGap`,
  walkthroughVi: [
    'Ban đầu maxGap = 0. Mảng dùng index 1 nên A[1]=3, A[2]=8, A[3]=6, A[4]=14.',
    'i=2: gap = abs(8 - 3) = 5. 5 > 0 nên maxGap = 5.',
    'i=3: gap = abs(6 - 8) = 2. 2 > 5 sai nên maxGap vẫn 5.',
    'i=4: gap = abs(14 - 6) = 8. 8 > 5 đúng nên maxGap = 8.',
    'Output là 8. Không được lấy max(A)-min(A)=11 vì đề hỏi phần tử kề nhau.'
  ],
  exerciseVi: 'Với A = [10, 7, 1, 4], hãy trace i, gap, maxGap và tìm output.',
  expectedOutputVi: 'i=2 gap=3 maxGap=3; i=3 gap=6 maxGap=6; i=4 gap=3 maxGap=6; output=6',
  miniQuizVi: 'Bẫy lớn nhất của bài này là gì?',
  miniQuizAnswerVi: 'Nhầm “khoảng cách lớn nhất giữa phần tử kề nhau” với “max - min toàn mảng”.',
  mistakesVi: [
    'Nhầm index 1-based và 0-based.',
    'Quên cập nhật maxGap chỉ khi gap lớn hơn.',
    'Tính max-min toàn mảng thay vì adjacent gap.'
  ],
  studyChecklistVi: [
    'Luôn vẽ bảng trace.',
    'Ghi rõ index bắt đầu từ đâu.',
    'Không suy luận từ tên biến nếu chưa đọc điều kiện update.',
    'Tự giải được input mới không nhìn đáp án.'
  ]
};

const feKamokuBStackQueue: V105ManualChapter = {
  id: 'v105-fe-kamoku-b-stack-queue',
  courseId: 'fundamental-info',
  group: 'fe-kamoku-b',
  match: ['stack', 'queue', 'bfs', 'dfs', 'recursion', 'call', 'graph', 'スタック', 'キュー'],
  titleVi: '基本情報 科目B: stack, queue, recursion nhìn bằng trạng thái',
  subtitleVi: 'Học bằng bảng trạng thái để không nhầm LIFO và FIFO.',
  whyItMattersVi: 'Các câu stack/queue/recursion rất dễ mất điểm vì output thường phụ thuộc thứ tự lấy phần tử. Chỉ cần nhầm pop từ đầu hay cuối là toàn bộ trace sai.',
  conceptVi: [
    'Stack là LIFO: vào sau ra trước. Khi gặp push/pop, hãy vẽ stack theo chiều đáy → đỉnh.',
    'Queue là FIFO: vào trước ra trước. Khi gặp enqueue/dequeue, hãy vẽ front và rear.',
    'Recursion giống stack lời gọi hàm. Hàm gọi sau cùng thường trả về trước.',
    'Trong đề, đừng chỉ nhớ tên cấu trúc; hãy xem thao tác cụ thể là push/pop hay enqueue/dequeue.'
  ],
  storyVi: 'Ví dụ đời thường: stack giống chồng đĩa, đặt đĩa mới lên trên và lấy đĩa trên cùng trước. Queue giống xếp hàng mua vé, ai đến trước phục vụ trước.',
  deepExampleTitleVi: 'Pseudo-code viết tay: kiểm tra ngoặc bằng stack',
  deepExampleBody: `S ← empty stack
text ← "(()())"

for each ch in text
  if ch = "("
    push(S, ch)
  else
    if empty(S)
      print false
      stop
    endif
    pop(S)
  endif
endfor

print empty(S)`,
  walkthroughVi: [
    'Ký tự 1 "(": push, stack = [(].',
    'Ký tự 2 "(": push, stack = [(, (].',
    'Ký tự 3 ")": pop một "(", stack = [(].',
    'Ký tự 4 "(": push, stack = [(, (].',
    'Ký tự 5 ")": pop, stack = [(]. Ký tự 6 ")": pop, stack rỗng. Output true.'
  ],
  exerciseVi: 'Trace text = "())(". Kết quả true hay false? Dừng ở bước nào?',
  expectedOutputVi: 'false. Ký tự thứ 3 là ")" khi stack đã rỗng sau khi xử lý ký tự thứ 2.',
  miniQuizVi: 'Sau khi duyệt hết chuỗi, vì sao vẫn cần kiểm tra empty(S)?',
  miniQuizAnswerVi: 'Vì có thể còn "(" chưa được đóng, ví dụ "(()".',
  mistakesVi: [
    'Chỉ kiểm tra gặp ")" khi stack rỗng mà quên kiểm tra stack cuối cùng.',
    'Vẽ stack sai chiều nên pop nhầm phần tử.',
    'Nhầm stack với queue.'
  ],
  studyChecklistVi: [
    'Vẽ được stack sau từng ký tự.',
    'Biết hai điều kiện false: đóng thừa hoặc mở chưa đóng.',
    'Phân biệt push/pop với enqueue/dequeue.',
    'Giải thích được recursion dùng call stack.'
  ]
};

const aiMlCase: V105ManualChapter = {
  id: 'v105-ai-case-ml-evaluation',
  courseId: 'ai-passport',
  group: 'ai-case-study',
  match: ['machine', 'learning', 'ml', 'model', 'accuracy', 'evaluation', 'classification', 'data', 'training'],
  titleVi: 'AI Passport Case Study: ML không phải phép màu, mà là học pattern từ dữ liệu',
  subtitleVi: 'Học AI bằng case: vấn đề → dữ liệu → model → đánh giá → rủi ro.',
  whyItMattersVi: 'AI Passport thường hỏi bản chất và rủi ro khi dùng AI. Nếu chỉ nhớ “ML là máy học từ dữ liệu”, bạn sẽ khó trả lời câu hỏi tình huống về dữ liệu lệch, overfitting, privacy hoặc KPI sai.',
  conceptVi: [
    'Machine Learning dùng dữ liệu quá khứ để tìm pattern và dự đoán trường hợp mới. Model không hiểu thế giới như con người; nó học quan hệ thống kê trong dữ liệu.',
    'Dữ liệu huấn luyện quyết định model nhìn thấy gì. Nếu dữ liệu thiếu nhóm người dùng nào đó, dự đoán cho nhóm đó dễ sai.',
    'Accuracy không phải lúc nào cũng đủ. Với bài phát hiện gian lận, số case gian lận ít nên cần xem precision, recall hoặc cost của từng loại sai.',
    'Triển khai AI cần monitoring. Model có thể tốt lúc đầu nhưng giảm chất lượng khi hành vi người dùng hoặc dữ liệu thay đổi.'
  ],
  storyVi: 'Ví dụ đời thường: dạy nhân viên mới phân loại email spam bằng hàng nghìn email cũ. Nếu bộ email cũ toàn tiếng Anh, nhân viên đó có thể xử lý kém email tiếng Nhật dù quy trình nhìn có vẻ đúng.',
  deepExampleTitleVi: 'Case viết tay: phát hiện review giả cho shop online',
  deepExampleBody: `Business problem:
- Shop muốn phát hiện review giả để bảo vệ uy tín.

Data:
- review text
- user age of account
- number of reviews per day
- purchase verified or not

Model output:
- fake probability from 0.0 to 1.0

Decision:
- >= 0.9: hide temporarily and send to human review
- 0.6 - 0.9: keep visible but flag for review
- < 0.6: no action

Evaluation:
- false positive: review thật bị ẩn, khách hàng bực
- false negative: review giả còn lại, shop mất uy tín`,
  walkthroughVi: [
    'Bắt đầu từ business problem, không bắt đầu từ thuật toán. Nếu mục tiêu không rõ, model tốt cũng vô dụng.',
    'Chọn feature liên quan đến hành vi review, không dùng dữ liệu nhạy cảm nếu không cần.',
    'Output là xác suất, không phải sự thật tuyệt đối. Vì vậy quyết định cuối nên có human review cho case rủi ro cao.',
    'Đánh giá phải xem cả false positive và false negative vì mỗi loại sai gây hậu quả khác nhau.',
    'Sau khi triển khai, cần theo dõi drift: spammer có thể đổi cách viết để né model.'
  ],
  exerciseVi: 'Hãy thiết kế case ML cho bài toán dự đoán khách hàng có khả năng hủy subscription. Ghi problem, data, output, action và rủi ro.',
  expectedOutputVi: 'Một câu trả lời tốt phải có: dữ liệu hành vi dùng app, output là churn probability, action là ưu đãi/CSKH, rủi ro là dùng dữ liệu nhạy cảm hoặc làm phiền khách hàng trung thành.',
  miniQuizVi: 'Vì sao accuracy cao vẫn có thể không đủ trong bài toán fraud detection?',
  miniQuizAnswerVi: 'Vì dữ liệu mất cân bằng. Model đoán “không fraud” cho hầu hết case có thể accuracy cao nhưng bỏ sót fraud quan trọng.',
  mistakesVi: [
    'Nói “AI tự quyết định đúng” mà quên human review.',
    'Chỉ dùng accuracy cho mọi bài toán.',
    'Bỏ qua privacy và bias trong dữ liệu.'
  ],
  studyChecklistVi: [
    'Luôn nêu problem trước model.',
    'Nêu được dữ liệu đầu vào và output của model.',
    'Phân biệt false positive và false negative.',
    'Biết vì sao cần monitoring sau triển khai.'
  ]
};

const aiGenAiCase: V105ManualChapter = {
  id: 'v105-ai-case-genai-rag',
  courseId: 'ai-passport',
  group: 'ai-case-study',
  match: ['generative', 'genai', 'llm', 'prompt', 'rag', 'chatgpt', '生成ai', 'hallucination'],
  titleVi: 'AI Passport Case Study: GenAI/LLM cần context, kiểm chứng và guardrail',
  subtitleVi: 'Không học GenAI như công cụ trả lời mọi thứ; hãy học cách quản lý rủi ro hallucination.',
  whyItMattersVi: 'AI Passport rất hay hỏi điểm khác giữa AI truyền thống, ML và Generative AI, đồng thời hỏi rủi ro như thông tin sai, lộ dữ liệu cá nhân, bản quyền và trách nhiệm người dùng.',
  conceptVi: [
    'LLM sinh câu trả lời bằng cách dự đoán chuỗi token hợp lý dựa trên prompt và dữ liệu đã học. Câu trả lời nghe tự nhiên không đồng nghĩa là đúng.',
    'Prompt tốt phải nêu vai trò, mục tiêu, dữ liệu đầu vào, ràng buộc và định dạng output mong muốn.',
    'RAG giúp model trả lời dựa trên tài liệu nội bộ bằng cách retrieve đoạn liên quan rồi đưa vào context. RAG không loại bỏ hoàn toàn lỗi, nhưng giảm trả lời bịa nếu thiết kế tốt.',
    'Guardrail là các lớp kiểm soát: không gửi dữ liệu nhạy cảm, yêu cầu citation, human review, log, policy và fallback khi model không chắc.'
  ],
  storyVi: 'Ví dụ đời thường: hỏi một nhân viên mới về quy định công ty. Nếu chỉ hỏi miệng, họ có thể đoán. Nếu đưa đúng handbook và yêu cầu trích phần liên quan, câu trả lời đáng tin hơn nhưng vẫn cần người phụ trách kiểm tra.',
  deepExampleTitleVi: 'Case viết tay: chatbot hỏi đáp quy định nghỉ phép',
  deepExampleBody: `User asks:
- "Tôi còn bao nhiêu ngày phép và xin nghỉ thế nào?"

Safe GenAI design:
1. Authentication: xác định user là ai.
2. Retrieval: lấy policy nghỉ phép và số ngày phép từ HR system.
3. Prompt: chỉ trả lời dựa trên context được cung cấp.
4. Output: nêu số ngày phép, quy trình xin nghỉ, link policy.
5. Guardrail: nếu thiếu dữ liệu, nói không đủ thông tin thay vì đoán.
6. Human path: câu hỏi tranh chấp chuyển HR review.`,
  walkthroughVi: [
    'Câu hỏi có dữ liệu cá nhân nên phải xác thực user trước khi lấy số ngày phép.',
    'Không nhét toàn bộ tài liệu vào prompt; retrieve đoạn policy liên quan để giảm nhiễu.',
    'Prompt phải cấm đoán khi thiếu thông tin: “Nếu context không có, hãy nói không đủ dữ liệu”.',
    'Output cần tách rõ phần số liệu cá nhân và phần policy chung.',
    'Log và human path giúp audit khi chatbot trả lời sai hoặc user khiếu nại.'
  ],
  exerciseVi: 'Thiết kế guardrail cho chatbot hỗ trợ khách hàng ngân hàng. Liệt kê ít nhất 5 rule an toàn.',
  expectedOutputVi: 'Ví dụ: không yêu cầu mật khẩu, không hiển thị dữ liệu người khác, không tư vấn đầu tư chắc chắn, chuyển người thật khi khiếu nại, log câu trả lời rủi ro.',
  miniQuizVi: 'RAG có đảm bảo 100% không hallucination không?',
  miniQuizAnswerVi: 'Không. RAG giảm rủi ro bằng context liên quan, nhưng vẫn cần prompt, kiểm chứng, citation và guardrail.',
  mistakesVi: [
    'Tin câu trả lời vì văn phong tự tin.',
    'Đưa dữ liệu cá nhân vào prompt mà không kiểm soát.',
    'Nghĩ RAG thay thế hoàn toàn human review.'
  ],
  studyChecklistVi: [
    'Giải thích được LLM sinh text không đồng nghĩa hiểu đúng.',
    'Biết viết prompt có context và ràng buộc.',
    'Biết RAG gồm retrieve + generate.',
    'Nêu được guardrail cho case doanh nghiệp.'
  ]
};

export const v105ManualChapters: V105ManualChapter[] = [
  pythonFoundationNumber,
  pythonCollections,
  pythonOopState,
  pythonAlgorithmTrace,
  feKamokuBArray,
  feKamokuBStackQueue,
  aiMlCase,
  aiGenAiCase,
];

const textOf = (node: KnowledgeNodeData) => `${node.id} ${node.labelVi} ${node.labelEn} ${node.labelJa} ${node.keywords.join(' ')}`.toLowerCase();

export function findV105ManualChapter(courseId: CourseId, node: KnowledgeNodeData): V105ManualChapter | undefined {
  const haystack = textOf(node);
  const candidates = v105ManualChapters.filter((chapter) => chapter.courseId === courseId);
  return candidates.find((chapter) => chapter.match.some((key) => haystack.includes(key.toLowerCase()))) ?? candidates[0];
}

export function v105ChaptersForCourse(courseId: CourseId): V105ManualChapter[] {
  return v105ManualChapters.filter((chapter) => chapter.courseId === courseId);
}
