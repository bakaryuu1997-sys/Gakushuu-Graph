export interface PythonVisualStep { label: string; state: string; explanationVi: string; explanationJa: string; }
export interface PythonAlgorithmVisualPattern {
  id: string;
  title: string;
  titleJa: string;
  relatedNodeId: string;
  goalVi: string;
  goalJa: string;
  commonBugVi: string;
  commonBugJa: string;
  memoryTipVi: string;
  memoryTipJa: string;
  steps: PythonVisualStep[];
  checkQuestionVi: string;
  checkAnswerVi: string;
  checkQuestionJa: string;
  checkAnswerJa: string;
}

export const pythonAlgorithmVisualPatterns: PythonAlgorithmVisualPattern[] = [
  {
    id: 'visual-binary-search', title: 'Binary search trace', titleJa: '二分探索のtrace', relatedNodeId: 'python-binary-search',
    goalVi: 'Tìm target trong mảng đã sort bằng cách liên tục thu hẹp left/right.',
    goalJa: 'sort済み配列でleft/rightを狭めながらtargetを探します。',
    commonBugVi: 'Sai điều kiện while hoặc quên +1/-1 làm vòng lặp không dừng.', commonBugJa: 'while条件や+1/-1を間違えると無限loopになります。',
    memoryTipVi: 'So sánh nums[mid] với target, rồi bỏ nửa chắc chắn không chứa target.', memoryTipJa: 'nums[mid]とtargetを比較し、不要な半分を捨てます。',
    steps: [
      { label: 'start', state: 'nums=[1,3,5,7,9], target=7, left=0, right=4', explanationVi: 'Bắt đầu với toàn bộ mảng.', explanationJa: '配列全体から開始します。' },
      { label: 'mid 1', state: 'mid=2, nums[mid]=5 < 7 → left=3', explanationVi: 'Target lớn hơn 5 nên bỏ nửa trái.', explanationJa: 'targetは5より大きいので左半分を捨てます。' },
      { label: 'mid 2', state: 'mid=3, nums[mid]=7 → found index 3', explanationVi: 'Tìm thấy target.', explanationJa: 'targetを見つけました。' },
    ],
    checkQuestionVi: 'Vì sao phải dùng left = mid + 1?', checkAnswerVi: 'Vì mid đã kiểm tra rồi; nếu giữ mid thì có thể lặp vô hạn.', checkQuestionJa: 'なぜleft = mid + 1にする？', checkAnswerJa: 'midは確認済みなので、残すと無限loopになる可能性があります。'
  },
  {
    id: 'visual-two-pointers', title: 'Two pointers', titleJa: 'two pointers', relatedNodeId: 'python-two-pointers',
    goalVi: 'Dùng hai chỉ số để quét dữ liệu mà không cần nested loop.', goalJa: '2つのindexで走査し、二重loopを避けます。',
    commonBugVi: 'Di chuyển sai pointer hoặc quên điều kiện dừng.', commonBugJa: 'pointerの動かし方や停止条件を間違えやすいです。',
    memoryTipVi: 'Mỗi bước chỉ di chuyển pointer giúp tiến gần đáp án.', memoryTipJa: '各stepで答えに近づくpointerだけ動かします。',
    steps: [
      { label: 'start', state: 'nums=[1,2,4,7], target=6, l=0, r=3', explanationVi: 'Tổng 1+7=8 quá lớn.', explanationJa: '1+7=8は大きすぎます。' },
      { label: 'move r', state: 'r=2, sum=1+4=5', explanationVi: 'Tổng nhỏ hơn target nên tăng left.', explanationJa: 'targetより小さいのでleftを増やします。' },
      { label: 'found', state: 'l=1, r=2, sum=2+4=6', explanationVi: 'Tìm được cặp.', explanationJa: 'ペアを見つけました。' },
    ],
    checkQuestionVi: 'Khi tổng quá lớn thì pointer nào nên di chuyển?', checkAnswerVi: 'Di chuyển right sang trái để giảm tổng.', checkQuestionJa: 'sumが大きすぎる時、どちらを動かす？', checkAnswerJa: 'rightを左へ動かしてsumを小さくします。'
  },
  {
    id: 'visual-sliding-window', title: 'Sliding window', titleJa: 'sliding window', relatedNodeId: 'python-sliding-window',
    goalVi: 'Tính nhanh đoạn con liên tiếp bằng cách thêm phần tử mới và bỏ phần tử cũ.', goalJa: '新しい要素を足し、古い要素を引いて連続区間を高速に計算します。',
    commonBugVi: 'Sai chỉ số phần tử bị bỏ khỏi window.', commonBugJa: 'windowから外す要素のindexを間違えやすいです。',
    memoryTipVi: 'Window trượt: cộng bên phải, trừ bên trái.', memoryTipJa: 'windowは右を足し、左を引きます。',
    steps: [
      { label: 'first', state: 'nums=[2,1,5,1], k=2, window=3', explanationVi: 'Tổng 2 phần tử đầu.', explanationJa: '最初の2要素の合計です。' },
      { label: 'slide', state: 'add 5, remove 2 → window=6', explanationVi: 'Cửa sổ [1,5] tốt hơn.', explanationJa: '[1,5]のwindowがより良いです。' },
      { label: 'last', state: 'add 1, remove 1 → window=6', explanationVi: 'Best vẫn là 6.', explanationJa: 'bestは6のままです。' },
    ],
    checkQuestionVi: 'Công thức update window là gì?', checkAnswerVi: 'window += nums[i] - nums[i-k].', checkQuestionJa: 'window更新式は？', checkAnswerJa: 'window += nums[i] - nums[i-k]です。'
  },
  {
    id: 'visual-stack', title: 'Stack parentheses', titleJa: 'stack括弧check', relatedNodeId: 'python-stack',
    goalVi: 'Dùng stack để kiểm tra dấu mở/đóng theo thứ tự LIFO.', goalJa: 'LIFOのstackで開き括弧と閉じ括弧を確認します。',
    commonBugVi: 'Gặp dấu đóng khi stack rỗng nhưng vẫn pop.', commonBugJa: 'stackが空なのにpopしてしまうbugがあります。',
    memoryTipVi: 'Mở thì push, đóng thì pop và so khớp.', memoryTipJa: '開きはpush、閉じはpopして対応を確認します。',
    steps: [
      { label: '(', state: 'push ( → stack=[(]', explanationVi: 'Dấu mở đưa vào stack.', explanationJa: '開き括弧をstackへ入れます。' },
      { label: '[', state: 'push [ → stack=[(,[]', explanationVi: 'Tiếp tục push.', explanationJa: 'さらにpushします。' },
      { label: ']', state: 'pop [ → ok', explanationVi: 'Dấu đóng khớp top.', explanationJa: '閉じ括弧がtopと対応します。' },
    ],
    checkQuestionVi: 'Kết thúc chuỗi, stack phải thế nào?', checkAnswerVi: 'Phải rỗng, vì mọi dấu mở đã được đóng.', checkQuestionJa: '最後にstackはどうなるべき？', checkAnswerJa: '全て閉じられたので空であるべきです。'
  },
  {
    id: 'visual-recursion', title: 'Recursion call stack', titleJa: '再帰call stack', relatedNodeId: 'python-recursion',
    goalVi: 'Hiểu recursion qua base case và lời gọi nhỏ hơn.', goalJa: 'base caseとより小さい問題への呼び出しで再帰を理解します。',
    commonBugVi: 'Thiếu base case hoặc không làm input nhỏ hơn.', commonBugJa: 'base caseがない、または入力が小さくならないbugです。',
    memoryTipVi: 'Recursion = điểm dừng + bài toán nhỏ hơn.', memoryTipJa: '再帰 = 停止条件 + 小さい問題です。',
    steps: [
      { label: 'call', state: 'fib(4) → fib(3)+fib(2)', explanationVi: 'Chia thành bài toán nhỏ hơn.', explanationJa: '小さい問題へ分けます。' },
      { label: 'base', state: 'fib(1)=1, fib(0)=0', explanationVi: 'Base case dừng recursion.', explanationJa: 'base caseで停止します。' },
      { label: 'return', state: 'fib(4)=3', explanationVi: 'Ghép kết quả quay ngược lại.', explanationJa: '戻りながら結果を合成します。' },
    ],
    checkQuestionVi: 'Hai phần bắt buộc của recursion là gì?', checkAnswerVi: 'Base case và recursive call tiến về base case.', checkQuestionJa: '再帰に必須の2つは？', checkAnswerJa: 'base caseとbase caseへ近づくrecursive callです。'
  },
  {
    id: 'visual-sort', title: 'Sorting step-by-step', titleJa: 'sort step-by-step', relatedNodeId: 'python-sorting',
    goalVi: 'Theo dõi mảng thay đổi qua từng pass để tránh nhầm thuật toán sort.', goalJa: '各passで配列がどう変わるか追跡し、sortの混同を防ぎます。',
    commonBugVi: 'Nhầm “sau mỗi pass” với “sau mỗi swap”.', commonBugJa: '各pass後と各swap後を混同しやすいです。',
    memoryTipVi: 'Ghi trạng thái mảng sau từng pass.', memoryTipJa: '各pass後の配列状態を書きます。',
    steps: [
      { label: 'start', state: '[4,1,3,2]', explanationVi: 'Mảng ban đầu.', explanationJa: '初期配列です。' },
      { label: 'pass 1', state: '[1,4,3,2]', explanationVi: 'Insertion đưa 1 về đầu.', explanationJa: 'insertionで1を先頭へ移動します。' },
      { label: 'pass 3', state: '[1,2,3,4]', explanationVi: 'Mảng đã sort.', explanationJa: 'sort済みです。' },
    ],
    checkQuestionVi: 'Khi trace sort nên ghi gì?', checkAnswerVi: 'Ghi mảng sau mỗi pass hoặc sau mỗi swap theo yêu cầu đề.', checkQuestionJa: 'sort traceでは何を書く？', checkAnswerJa: '問題の指定に従い、pass後またはswap後の配列を書きます。'
  },
];
