import { pythonV78RCodeExercises } from './v78rCodeExercises';
import { pythonV80RGradedExercises } from './v80rCodeLabGrader';

export type PythonExerciseKind = 'control' | 'function' | 'data' | 'algorithm' | 'oop' | 'file' | 'backend';
export type PythonExerciseLevel = 'easy' | 'standard' | 'hard';
export type PythonMistakeTag = 'syntax' | 'wrong-return' | 'edge-case' | 'complexity' | 'off-by-one' | 'recursion' | 'state' | 'fastapi' | 'data-structure' | 'mutable-default' | 'loop' | 'empty-input' | 'duplicates' | 'dict' | 'counter' | 'string' | 'stack' | 'hash-map' | 'index' | 'window' | 'queue' | 'visited' | 'dp' | 'base-case' | 'two-pointers' | 'leftover' | 'exception' | 'comprehension' | 'oop' | 'dataclass' | 'file' | 'parse' | 'nested-loop' | 'sort' | 'validation' | 'linked-list' | 'heap' | 'memo' | 'tree' | 'bug' | 'route' | 'pydantic' | 'crud' | 'async';
export interface PythonCodeExercise { id:string; title:string; titleJa:string; kind:PythonExerciseKind; level:PythonExerciseLevel; promptVi:string; promptJa:string; starterCode:string; visibleTests:string[]; hiddenTests:string[]; hintsVi:string[]; hintsJa:string[]; solution:string; relatedNodeId:string; explanationVi:string; explanationJa:string; mistakeTags: string[]; }
const baseHintsVi = ['Đọc input/output trước khi code.', 'Viết case nhỏ nhất rồi thêm edge case.', 'Nếu fail, đọc traceback từ dòng cuối lên.'];
const baseHintsJa = ['codeを書く前にinput/outputを確認します。', '一番小さいcaseから書き、境界値を追加します。', 'failしたらtracebackを最後の行から読みます。'];
export const pythonCodeExercises: PythonCodeExercise[] = [
  {
    id: "py-ex-sum-list",
    title: "Sum list",
    titleJa: "Sum list",
    kind: "function",
    level: "easy",
    promptVi: "Viết code cho bài Sum list. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Sum listを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def sum_list(nums):\n    return 0",
    visibleTests: ["sum_list([1,2,3]) == 6", "sum_list([]) == 0"],
    hiddenTests: ["sum_list([-1,1,5]) == 5"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def sum_list(nums):\n    total = 0\n    for n in nums:\n        total += n\n    return total",
    relatedNodeId: "python-function",
    explanationVi: "Bài này luyện pattern Sum list: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Sum listでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["loop", "empty-input"],
  },
  {
    id: "py-ex-fizzbuzz",
    title: "FizzBuzz",
    titleJa: "FizzBuzz",
    kind: "control",
    level: "easy",
    promptVi: "Viết code cho bài FizzBuzz. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "FizzBuzzを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def fizzbuzz(n):\n    return []",
    visibleTests: ["fizzbuzz(5) == ['1','2','Fizz','4','Buzz']"],
    hiddenTests: ["fizzbuzz(15)[-1] == 'FizzBuzz'"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def fizzbuzz(n):\n    result=[]\n    for i in range(1,n+1):\n        if i%15==0: result.append('FizzBuzz')\n        elif i%3==0: result.append('Fizz')\n        elif i%5==0: result.append('Buzz')\n        else: result.append(str(i))\n    return result",
    relatedNodeId: "python-function",
    explanationVi: "Bài này luyện pattern FizzBuzz: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "FizzBuzzでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["branch", "modulo"],
  },
  {
    id: "py-ex-second-largest",
    title: "Second largest",
    titleJa: "Second largest",
    kind: "algorithm",
    level: "standard",
    promptVi: "Viết code cho bài Second largest. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Second largestを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def second_largest(nums):\n    return None",
    visibleTests: ["second_largest([3,1,5,2]) == 3"],
    hiddenTests: ["second_largest([5,5,4]) == 4", "second_largest([1]) is None"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def second_largest(nums):\n    unique = sorted(set(nums))\n    return unique[-2] if len(unique) >= 2 else None",
    relatedNodeId: "python-function",
    explanationVi: "Bài này luyện pattern Second largest: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Second largestでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["edge-case", "duplicates"],
  },
  {
    id: "py-ex-count-frequency",
    title: "Count frequency",
    titleJa: "Count frequency",
    kind: "data",
    level: "easy",
    promptVi: "Viết code cho bài Count frequency. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Count frequencyを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def count_frequency(items):\n    return {}",
    visibleTests: ["count_frequency(['a','b','a']) == {'a':2,'b':1}"],
    hiddenTests: ["count_frequency([]) == {}"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def count_frequency(items):\n    counts={}\n    for item in items:\n        counts[item]=counts.get(item,0)+1\n    return counts",
    relatedNodeId: "python-dict",
    explanationVi: "Bài này luyện pattern Count frequency: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Count frequencyでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["dict", "counter"],
  },
  {
    id: "py-ex-palindrome",
    title: "Palindrome string",
    titleJa: "Palindrome string",
    kind: "algorithm",
    level: "easy",
    promptVi: "Viết code cho bài Palindrome string. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Palindrome stringを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def is_palindrome(text):\n    return False",
    visibleTests: ["is_palindrome('level') == True", "is_palindrome('python') == False"],
    hiddenTests: ["is_palindrome('') == True"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def is_palindrome(text):\n    return text == text[::-1]",
    relatedNodeId: "python-string-methods",
    explanationVi: "Bài này luyện pattern Palindrome string: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Palindrome stringでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["string", "edge-case"],
  },
  {
    id: "py-ex-binary-search",
    title: "Binary search",
    titleJa: "Binary search",
    kind: "algorithm",
    level: "hard",
    promptVi: "Viết code cho bài Binary search. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Binary searchを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def binary_search(nums, target):\n    return -1",
    visibleTests: ["binary_search([1,3,5], 5) == 2"],
    hiddenTests: ["binary_search([1,3,5], 2) == -1", "binary_search([], 1) == -1"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def binary_search(nums, target):\n    left, right = 0, len(nums)-1\n    while left <= right:\n        mid = (left + right)//2\n        if nums[mid] == target: return mid\n        if nums[mid] < target: left = mid + 1\n        else: right = mid - 1\n    return -1",
    relatedNodeId: "python-binary-search",
    explanationVi: "Bài này luyện pattern Binary search: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Binary searchでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["off-by-one", "loop"],
  },
  {
    id: "py-ex-valid-parentheses",
    title: "Valid parentheses",
    titleJa: "Valid parentheses",
    kind: "algorithm",
    level: "hard",
    promptVi: "Viết code cho bài Valid parentheses. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Valid parenthesesを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def is_valid(s):\n    return False",
    visibleTests: ["is_valid('([])') == True", "is_valid('([)]') == False"],
    hiddenTests: ["is_valid('') == True"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def is_valid(s):\n    pairs={')':'(',']':'[','}':'{'}\n    stack=[]\n    for ch in s:\n        if ch in pairs.values(): stack.append(ch)\n        elif ch in pairs:\n            if not stack or stack.pop()!=pairs[ch]: return False\n    return not stack",
    relatedNodeId: "python-stack",
    explanationVi: "Bài này luyện pattern Valid parentheses: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Valid parenthesesでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["stack", "empty-input"],
  },
  {
    id: "py-ex-two-sum",
    title: "Two sum",
    titleJa: "Two sum",
    kind: "algorithm",
    level: "hard",
    promptVi: "Viết code cho bài Two sum. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Two sumを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def two_sum(nums, target):\n    return []",
    visibleTests: ["two_sum([2,7,11], 9) == [0,1]"],
    hiddenTests: ["two_sum([3,2,4], 6) == [1,2]"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def two_sum(nums, target):\n    seen={}\n    for i,n in enumerate(nums):\n        if target-n in seen: return [seen[target-n], i]\n        seen[n]=i\n    return []",
    relatedNodeId: "python-dict",
    explanationVi: "Bài này luyện pattern Two sum: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Two sumでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["hash-map", "duplicates"],
  },
  {
    id: "py-ex-prefix-sum",
    title: "Prefix sum",
    titleJa: "Prefix sum",
    kind: "algorithm",
    level: "hard",
    promptVi: "Viết code cho bài Prefix sum. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Prefix sumを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def range_sum(nums, left, right):\n    return 0",
    visibleTests: ["range_sum([2,4,6,8],1,3) == 18"],
    hiddenTests: ["range_sum([5],0,0) == 5"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def range_sum(nums, left, right):\n    prefix=[0]\n    for n in nums: prefix.append(prefix[-1]+n)\n    return prefix[right+1]-prefix[left]",
    relatedNodeId: "python-prefix-sum",
    explanationVi: "Bài này luyện pattern Prefix sum: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Prefix sumでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["index", "off-by-one"],
  },
  {
    id: "py-ex-sliding-window",
    title: "Max sum subarray",
    titleJa: "Max sum subarray",
    kind: "algorithm",
    level: "hard",
    promptVi: "Viết code cho bài Max sum subarray. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Max sum subarrayを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def max_sum_subarray(nums, k):\n    return 0",
    visibleTests: ["max_sum_subarray([1,2,3,4],2) == 7"],
    hiddenTests: ["max_sum_subarray([5],1) == 5"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def max_sum_subarray(nums, k):\n    if k <= 0 or k > len(nums): return 0\n    window=sum(nums[:k]); best=window\n    for i in range(k,len(nums)):\n        window += nums[i]-nums[i-k]\n        best=max(best,window)\n    return best",
    relatedNodeId: "python-sliding-window",
    explanationVi: "Bài này luyện pattern Max sum subarray: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Max sum subarrayでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["window", "edge-case"],
  },
  {
    id: "py-ex-bfs-distance",
    title: "BFS shortest distance",
    titleJa: "BFS shortest distance",
    kind: "algorithm",
    level: "hard",
    promptVi: "Viết code cho bài BFS shortest distance. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "BFS shortest distanceを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def shortest_distance(graph, start, goal):\n    return -1",
    visibleTests: ["shortest_distance({'A':['B'],'B':['C'],'C':[]}, 'A', 'C') == 2"],
    hiddenTests: ["shortest_distance({'A':[]}, 'A', 'A') == 0"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "from collections import deque\ndef shortest_distance(graph, start, goal):\n    q=deque([(start,0)]); seen={start}\n    while q:\n        node,dist=q.popleft()\n        if node==goal: return dist\n        for nxt in graph.get(node,[]):\n            if nxt not in seen:\n                seen.add(nxt); q.append((nxt,dist+1))\n    return -1",
    relatedNodeId: "python-bfs",
    explanationVi: "Bài này luyện pattern BFS shortest distance: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "BFS shortest distanceでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["queue", "visited"],
  },
  {
    id: "py-ex-dfs-components",
    title: "DFS components",
    titleJa: "DFS components",
    kind: "algorithm",
    level: "hard",
    promptVi: "Viết code cho bài DFS components. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "DFS componentsを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def count_components(graph):\n    return 0",
    visibleTests: ["count_components({1:[2],2:[1],3:[]}) == 2"],
    hiddenTests: ["count_components({}) == 0"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def count_components(graph):\n    seen=set()\n    def dfs(node):\n        seen.add(node)\n        for nxt in graph.get(node,[]):\n            if nxt not in seen: dfs(nxt)\n    total=0\n    for node in graph:\n        if node not in seen:\n            total+=1; dfs(node)\n    return total",
    relatedNodeId: "python-dfs",
    explanationVi: "Bài này luyện pattern DFS components: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "DFS componentsでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["recursion", "visited"],
  },
  {
    id: "py-ex-climb-stairs",
    title: "DP climb stairs",
    titleJa: "DP climb stairs",
    kind: "algorithm",
    level: "hard",
    promptVi: "Viết code cho bài DP climb stairs. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "DP climb stairsを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def climb_stairs(n):\n    return 0",
    visibleTests: ["climb_stairs(4) == 5"],
    hiddenTests: ["climb_stairs(1) == 1", "climb_stairs(2) == 2"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def climb_stairs(n):\n    if n <= 2: return n\n    a,b=1,2\n    for _ in range(3,n+1): a,b=b,a+b\n    return b",
    relatedNodeId: "python-dynamic-programming",
    explanationVi: "Bài này luyện pattern DP climb stairs: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "DP climb stairsでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["dp", "base-case"],
  },
  {
    id: "py-ex-merge-sorted",
    title: "Merge sorted lists",
    titleJa: "Merge sorted lists",
    kind: "algorithm",
    level: "standard",
    promptVi: "Viết code cho bài Merge sorted lists. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Merge sorted listsを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def merge_sorted(a, b):\n    return []",
    visibleTests: ["merge_sorted([1,3],[2,4]) == [1,2,3,4]"],
    hiddenTests: ["merge_sorted([], [1]) == [1]"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def merge_sorted(a,b):\n    i=j=0; out=[]\n    while i<len(a) and j<len(b):\n        if a[i] <= b[j]: out.append(a[i]); i+=1\n        else: out.append(b[j]); j+=1\n    return out + a[i:] + b[j:]",
    relatedNodeId: "python-two-pointers",
    explanationVi: "Bài này luyện pattern Merge sorted lists: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Merge sorted listsでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["two-pointers", "leftover"],
  },
  {
    id: "py-ex-anagram",
    title: "Anagram checker",
    titleJa: "Anagram checker",
    kind: "data",
    level: "standard",
    promptVi: "Viết code cho bài Anagram checker. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Anagram checkerを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def is_anagram(a, b):\n    return False",
    visibleTests: ["is_anagram('listen','silent') == True"],
    hiddenTests: ["is_anagram('aab','abb') == False"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def is_anagram(a,b):\n    return sorted(a) == sorted(b)",
    relatedNodeId: "python-counter",
    explanationVi: "Bài này luyện pattern Anagram checker: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Anagram checkerでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["counter", "string"],
  },
  {
    id: "py-ex-flatten",
    title: "Flatten nested list",
    titleJa: "Flatten nested list",
    kind: "data",
    level: "standard",
    promptVi: "Viết code cho bài Flatten nested list. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Flatten nested listを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def flatten(items):\n    return []",
    visibleTests: ["flatten([[1,2],[3]]) == [1,2,3]"],
    hiddenTests: ["flatten([]) == []"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def flatten(items):\n    result=[]\n    for group in items: result.extend(group)\n    return result",
    relatedNodeId: "python-list",
    explanationVi: "Bài này luyện pattern Flatten nested list: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Flatten nested listでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["list", "nested"],
  },
  {
    id: "py-ex-safe-divide",
    title: "Safe divide",
    titleJa: "Safe divide",
    kind: "function",
    level: "standard",
    promptVi: "Viết code cho bài Safe divide. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Safe divideを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def safe_divide(a, b):\n    return None",
    visibleTests: ["safe_divide(6,2) == 3"],
    hiddenTests: ["safe_divide(1,0) is None"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def safe_divide(a,b):\n    try: return a/b\n    except ZeroDivisionError: return None",
    relatedNodeId: "python-error-handling",
    explanationVi: "Bài này luyện pattern Safe divide: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Safe divideでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["exception", "edge-case"],
  },
  {
    id: "py-ex-word-lengths",
    title: "Word lengths dict",
    titleJa: "Word lengths dict",
    kind: "data",
    level: "easy",
    promptVi: "Viết code cho bài Word lengths dict. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Word lengths dictを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def word_lengths(words):\n    return {}",
    visibleTests: ["word_lengths(['ai','python']) == {'ai':2,'python':6}"],
    hiddenTests: ["word_lengths([]) == {}"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def word_lengths(words):\n    return {word: len(word) for word in words}",
    relatedNodeId: "python-dict-comprehension",
    explanationVi: "Bài này luyện pattern Word lengths dict: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Word lengths dictでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["dict", "comprehension"],
  },
  {
    id: "py-ex-bank-account",
    title: "BankAccount class",
    titleJa: "BankAccount class",
    kind: "oop",
    level: "standard",
    promptVi: "Viết code cho bài BankAccount class. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "BankAccount classを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "class BankAccount:\n    pass",
    visibleTests: ["acc=BankAccount(10); acc.deposit(5); acc.balance == 15"],
    hiddenTests: ["acc=BankAccount(0); acc.withdraw(3) == False"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "class BankAccount:\n    def __init__(self, balance=0): self.balance=balance\n    def deposit(self, amount): self.balance += amount\n    def withdraw(self, amount):\n        if amount > self.balance: return False\n        self.balance -= amount; return True",
    relatedNodeId: "python-class",
    explanationVi: "Bài này luyện pattern BankAccount class: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "BankAccount classでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["oop", "state"],
  },
  {
    id: "py-ex-dataclass-product",
    title: "Dataclass Product",
    titleJa: "Dataclass Product",
    kind: "oop",
    level: "standard",
    promptVi: "Viết code cho bài Dataclass Product. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Dataclass Productを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "class Product:\n    pass",
    visibleTests: ["p=Product('book', 3); p.total(2) == 6"],
    hiddenTests: ["p=Product('pen', 0); p.total(5) == 0"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "from dataclasses import dataclass\n@dataclass\nclass Product:\n    name: str\n    price: int\n    def total(self, qty): return self.price * qty",
    relatedNodeId: "python-dataclass",
    explanationVi: "Bài này luyện pattern Dataclass Product: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Dataclass Productでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["oop", "dataclass"],
  },
  {
    id: "py-ex-csv-total",
    title: "CSV total",
    titleJa: "CSV total",
    kind: "file",
    level: "standard",
    promptVi: "Viết code cho bài CSV total. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "CSV totalを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def total_amount(lines):\n    return 0",
    visibleTests: ["total_amount(['name,amount','a,10','b,5']) == 15"],
    hiddenTests: ["total_amount(['name,amount']) == 0"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def total_amount(lines):\n    total=0\n    for line in lines[1:]:\n        if not line: continue\n        total += int(line.split(',')[1])\n    return total",
    relatedNodeId: "python-csv-json",
    explanationVi: "Bài này luyện pattern CSV total: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "CSV totalでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["file", "parse"],
  },
  {
    id: "py-ex-filter-users",
    title: "Filter active users",
    titleJa: "Filter active users",
    kind: "data",
    level: "standard",
    promptVi: "Viết code cho bài Filter active users. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Filter active usersを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def active_names(users):\n    return []",
    visibleTests: ["active_names([{'name':'A','active':True},{'name':'B','active':False}]) == ['A']"],
    hiddenTests: ["active_names([]) == []"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def active_names(users):\n    return [u['name'] for u in users if u.get('active')]",
    relatedNodeId: "python-json",
    explanationVi: "Bài này luyện pattern Filter active users: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Filter active usersでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["list-comprehension", "dict"],
  },
  {
    id: "py-ex-matrix-transpose",
    title: "Matrix transpose",
    titleJa: "Matrix transpose",
    kind: "algorithm",
    level: "standard",
    promptVi: "Viết code cho bài Matrix transpose. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Matrix transposeを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def transpose(matrix):\n    return []",
    visibleTests: ["transpose([[1,2],[3,4]]) == [[1,3],[2,4]]"],
    hiddenTests: ["transpose([[1,2,3]]) == [[1],[2],[3]]"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def transpose(matrix):\n    if not matrix: return []\n    return [[row[c] for row in matrix] for c in range(len(matrix[0]))]",
    relatedNodeId: "python-nested-loop",
    explanationVi: "Bài này luyện pattern Matrix transpose: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Matrix transposeでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["nested-loop", "index"],
  },
  {
    id: "py-ex-rle",
    title: "Run length encoding",
    titleJa: "Run length encoding",
    kind: "algorithm",
    level: "hard",
    promptVi: "Viết code cho bài Run length encoding. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Run length encodingを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def rle(text):\n    return []",
    visibleTests: ["rle('aaabb') == [('a',3),('b',2)]"],
    hiddenTests: ["rle('') == []"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def rle(text):\n    if not text: return []\n    out=[]; cur=text[0]; count=1\n    for ch in text[1:]:\n        if ch == cur: count += 1\n        else: out.append((cur,count)); cur=ch; count=1\n    out.append((cur,count)); return out",
    relatedNodeId: "python-loop",
    explanationVi: "Bài này luyện pattern Run length encoding: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Run length encodingでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["state", "edge-case"],
  },
  {
    id: "py-ex-top-k",
    title: "Top K frequent words",
    titleJa: "Top K frequent words",
    kind: "algorithm",
    level: "hard",
    promptVi: "Viết code cho bài Top K frequent words. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Top K frequent wordsを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def top_k_words(words, k):\n    return []",
    visibleTests: ["top_k_words(['a','b','a'],1) == ['a']"],
    hiddenTests: ["top_k_words(['b','a'],2) == ['a','b']"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "from collections import Counter\ndef top_k_words(words, k):\n    counts=Counter(words)\n    return [w for w,_ in sorted(counts.items(), key=lambda x:(-x[1], x[0]))[:k]]",
    relatedNodeId: "python-heap",
    explanationVi: "Bài này luyện pattern Top K frequent words: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Top K frequent wordsでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["sort", "counter"],
  },
  {
    id: "py-ex-email",
    title: "Simple email validator",
    titleJa: "Simple email validator",
    kind: "function",
    level: "easy",
    promptVi: "Viết code cho bài Simple email validator. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Simple email validatorを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def is_email(text):\n    return False",
    visibleTests: ["is_email('a@b.com') == True"],
    hiddenTests: ["is_email('abc') == False"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def is_email(text):\n    return '@' in text and '.' in text.split('@')[-1]",
    relatedNodeId: "python-string-methods",
    explanationVi: "Bài này luyện pattern Simple email validator: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Simple email validatorでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["string", "validation"],
  },
  {
    id: "py-ex-linked-middle",
    title: "Linked list middle",
    titleJa: "Linked list middle",
    kind: "algorithm",
    level: "hard",
    promptVi: "Viết code cho bài Linked list middle. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Linked list middleを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "class Node:\n    def __init__(self, value, next=None):\n        self.value=value; self.next=next\ndef middle_value(head):\n    return None",
    visibleTests: ["a=Node(1,Node(2,Node(3))); middle_value(a) == 2"],
    hiddenTests: ["a=Node(1,Node(2,Node(3,Node(4)))); middle_value(a) == 3"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "class Node:\n    def __init__(self, value, next=None): self.value=value; self.next=next\ndef middle_value(head):\n    slow=fast=head\n    while fast and fast.next:\n        slow=slow.next; fast=fast.next.next\n    return slow.value if slow else None",
    relatedNodeId: "python-two-pointers",
    explanationVi: "Bài này luyện pattern Linked list middle: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Linked list middleでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["two-pointers", "linked-list"],
  },
  {
    id: "py-ex-heap-topk",
    title: "Heap top k largest",
    titleJa: "Heap top k largest",
    kind: "algorithm",
    level: "hard",
    promptVi: "Viết code cho bài Heap top k largest. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Heap top k largestを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def top_k_largest(nums, k):\n    return []",
    visibleTests: ["top_k_largest([3,1,5,2],2) == [5,3]"],
    hiddenTests: ["top_k_largest([],2) == []"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def top_k_largest(nums,k):\n    return sorted(nums, reverse=True)[:k]",
    relatedNodeId: "python-heap",
    explanationVi: "Bài này luyện pattern Heap top k largest: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Heap top k largestでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["heap", "sort"],
  },
  {
    id: "py-ex-memo-fib",
    title: "Memoized Fibonacci",
    titleJa: "Memoized Fibonacci",
    kind: "algorithm",
    level: "hard",
    promptVi: "Viết code cho bài Memoized Fibonacci. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Memoized Fibonacciを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def fib(n):\n    return 0",
    visibleTests: ["fib(6) == 8"],
    hiddenTests: ["fib(0) == 0", "fib(1) == 1"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def fib(n, memo=None):\n    if memo is None: memo={}\n    if n in memo: return memo[n]\n    if n <= 1: return n\n    memo[n]=fib(n-1,memo)+fib(n-2,memo)\n    return memo[n]",
    relatedNodeId: "python-memoization",
    explanationVi: "Bài này luyện pattern Memoized Fibonacci: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Memoized Fibonacciでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["recursion", "memo"],
  },
  {
    id: "py-ex-tree-inorder",
    title: "Binary tree inorder",
    titleJa: "Binary tree inorder",
    kind: "algorithm",
    level: "hard",
    promptVi: "Viết code cho bài Binary tree inorder. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Binary tree inorderを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "class TreeNode:\n    def __init__(self, value, left=None, right=None):\n        self.value=value; self.left=left; self.right=right\ndef inorder(root):\n    return []",
    visibleTests: ["root=TreeNode(2,TreeNode(1),TreeNode(3)); inorder(root) == [1,2,3]"],
    hiddenTests: ["inorder(None) == []"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "class TreeNode:\n    def __init__(self, value, left=None, right=None): self.value=value; self.left=left; self.right=right\ndef inorder(root):\n    if not root: return []\n    return inorder(root.left)+[root.value]+inorder(root.right)",
    relatedNodeId: "python-tree-traversal",
    explanationVi: "Bài này luyện pattern Binary tree inorder: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Binary tree inorderでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["tree", "recursion"],
  },
  {
    id: "py-ex-min-stack",
    title: "Min stack",
    titleJa: "Min stack",
    kind: "algorithm",
    level: "hard",
    promptVi: "Viết code cho bài Min stack. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Min stackを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "class MinStack:\n    pass",
    visibleTests: ["s=MinStack(); s.push(3); s.push(1); s.get_min() == 1"],
    hiddenTests: ["s=MinStack(); s.push(2); s.push(1); s.pop(); s.get_min() == 2"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "class MinStack:\n    def __init__(self): self.stack=[]; self.mins=[]\n    def push(self,x):\n        self.stack.append(x)\n        self.mins.append(x if not self.mins else min(x,self.mins[-1]))\n    def pop(self):\n        self.mins.pop(); return self.stack.pop()\n    def get_min(self): return self.mins[-1]",
    relatedNodeId: "python-stack",
    explanationVi: "Bài này luyện pattern Min stack: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Min stackでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["stack", "state"],
  },
  {
    id: "py-ex-mutable-default",
    title: "Mutable default bug",
    titleJa: "Mutable default bug",
    kind: "function",
    level: "hard",
    promptVi: "Viết code cho bài Mutable default bug. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "Mutable default bugを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "def append_item(item, items=[]):\n    items.append(item)\n    return items",
    visibleTests: ["append_item('a', []) == ['a']"],
    hiddenTests: ["append_item('a') == ['a'] and append_item('b') == ['b']"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "def append_item(item, items=None):\n    if items is None: items=[]\n    items.append(item)\n    return items",
    relatedNodeId: "python-mutable-copy",
    explanationVi: "Bài này luyện pattern Mutable default bug: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "Mutable default bugでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["mutable-default", "bug"],
  },
  {
    id: "py-ex-fastapi-health",
    title: "FastAPI health endpoint",
    titleJa: "FastAPI health endpoint",
    kind: "backend",
    level: "standard",
    promptVi: "Viết code cho bài FastAPI health endpoint. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "FastAPI health endpointを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "from fastapi import FastAPI\napp = FastAPI()\n",
    visibleTests: ["contains:@app.get", "contains:return"],
    hiddenTests: ["contains:FastAPI"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "from fastapi import FastAPI\napp = FastAPI()\n@app.get('/health')\ndef health():\n    return {'status':'ok'}",
    relatedNodeId: "python-fastapi-routing",
    explanationVi: "Bài này luyện pattern FastAPI health endpoint: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "FastAPI health endpointでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["fastapi", "route"],
  },
  {
    id: "py-ex-fastapi-predict",
    title: "FastAPI predict endpoint",
    titleJa: "FastAPI predict endpoint",
    kind: "backend",
    level: "hard",
    promptVi: "Viết code cho bài FastAPI predict endpoint. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "FastAPI predict endpointを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "from fastapi import FastAPI\nfrom pydantic import BaseModel\napp = FastAPI()\n",
    visibleTests: ["contains:@app.post", "contains:BaseModel"],
    hiddenTests: ["contains:/predict", "contains:confidence"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "from fastapi import FastAPI\nfrom pydantic import BaseModel\napp=FastAPI()\nclass PredictRequest(BaseModel):\n    features: list[float]\n@app.post('/predict')\ndef predict(req: PredictRequest):\n    return {'label':'ok','confidence':0.9}",
    relatedNodeId: "python-ai-model-serving",
    explanationVi: "Bài này luyện pattern FastAPI predict endpoint: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "FastAPI predict endpointでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["fastapi", "pydantic"],
  },
  {
    id: "py-ex-fastapi-todo",
    title: "FastAPI Todo CRUD skeleton",
    titleJa: "FastAPI Todo CRUD skeleton",
    kind: "backend",
    level: "hard",
    promptVi: "Viết code cho bài FastAPI Todo CRUD skeleton. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "FastAPI Todo CRUD skeletonを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "from fastapi import FastAPI, HTTPException\napp = FastAPI()\n",
    visibleTests: ["contains:/todos", "contains:HTTPException"],
    hiddenTests: ["contains:@app.post", "contains:@app.get"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "from fastapi import FastAPI, HTTPException\napp=FastAPI(); todos={}\n@app.post('/todos')\ndef create(todo: dict):\n    tid=len(todos)+1; todos[tid]=todo; return {'id':tid, **todo}\n@app.get('/todos/{todo_id}')\ndef get(todo_id:int):\n    if todo_id not in todos: raise HTTPException(status_code=404, detail='not found')\n    return todos[todo_id]",
    relatedNodeId: "python-fastapi-routing",
    explanationVi: "Bài này luyện pattern FastAPI Todo CRUD skeleton: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "FastAPI Todo CRUD skeletonでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["fastapi", "crud"],
  },
  {
    id: "py-ex-fastapi-async",
    title: "FastAPI async endpoint",
    titleJa: "FastAPI async endpoint",
    kind: "backend",
    level: "hard",
    promptVi: "Viết code cho bài FastAPI async endpoint. Hãy đọc test trước, xử lý edge case và giải thích được vì sao đúng.",
    promptJa: "FastAPI async endpointを解きます。先にtestを読み、境界値を処理し、なぜ正しいか説明します。",
    starterCode: "from fastapi import FastAPI\napp = FastAPI()\n",
    visibleTests: ["contains:async def", "contains:@app.get"],
    hiddenTests: ["contains:return"],
    hintsVi: baseHintsVi,
    hintsJa: baseHintsJa,
    solution: "from fastapi import FastAPI\napp=FastAPI()\n@app.get('/status')\nasync def status():\n    return {'ready': True}",
    relatedNodeId: "python-async-await",
    explanationVi: "Bài này luyện pattern FastAPI async endpoint: đọc input/output, viết case nhỏ, sau đó xử lý edge case.",
    explanationJa: "FastAPI async endpointでは、入力と出力を先に確認し、小さい例で動きを追跡してからedge caseを追加します。",
    mistakeTags: ["fastapi", "async"],
  },
  {
      "id": "py-ex-log-parser",
      "title": "Parse error log levels",
      "titleJa": "ログlevel集計",
      "kind": "file",
      "level": "standard",
      "promptVi": "Viết code cho bài Parse error log levels. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "ログlevel集計を解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def count_levels(lines):\n    return {}",
      "visibleTests": [
          "count_levels(['INFO start','ERROR fail','WARN slow','ERROR bad']) == {'INFO':1,'ERROR':2,'WARN':1}"
      ],
      "hiddenTests": [
          "count_levels([]) == {}",
          "count_levels(['DEBUG x','INFO y']) == {'DEBUG':1,'INFO':1}"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def count_levels(lines):\n    counts = {}\n    for line in lines:\n        if not line: continue\n        level = line.split()[0]\n        counts[level] = counts.get(level, 0) + 1\n    return counts",
      "relatedNodeId": "python-file-io",
      "explanationVi": "Vì sao quan trọng: Parse error log levels giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: ログlevel集計はPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "file",
          "parse",
          "dict"
      ]
  },
  {
      "id": "py-ex-csv-cleaning",
      "title": "Clean CSV rows",
      "titleJa": "CSV row cleaning",
      "kind": "file",
      "level": "standard",
      "promptVi": "Viết code cho bài Clean CSV rows. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "CSV row cleaningを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def clean_rows(rows):\n    return []",
      "visibleTests": [
          "clean_rows([' name,age ',' Alice, 20 ','Bob,']) == [{'name':'Alice','age':20}]"
      ],
      "hiddenTests": [
          "clean_rows([]) == []"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def clean_rows(rows):\n    if not rows: return []\n    header = [h.strip() for h in rows[0].split(',')]\n    result = []\n    for row in rows[1:]:\n        parts = [p.strip() for p in row.split(',')]\n        if len(parts) != len(header) or not all(parts):\n            continue\n        item = dict(zip(header, parts))\n        if 'age' in item: item['age'] = int(item['age'])\n        result.append(item)\n    return result",
      "relatedNodeId": "python-csv-json",
      "explanationVi": "Vì sao quan trọng: Clean CSV rows giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: CSV row cleaningはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "file",
          "parse",
          "validation"
      ]
  },
  {
      "id": "py-ex-json-transform",
      "title": "Transform API users",
      "titleJa": "API user変換",
      "kind": "data",
      "level": "standard",
      "promptVi": "Viết code cho bài Transform API users. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "API user変換を解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def active_user_names(users):\n    return []",
      "visibleTests": [
          "active_user_names([{'name':'A','active':True},{'name':'B','active':False}]) == ['A']"
      ],
      "hiddenTests": [
          "active_user_names([]) == []"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def active_user_names(users):\n    return [u['name'] for u in users if u.get('active') is True]",
      "relatedNodeId": "python-json",
      "explanationVi": "Vì sao quan trọng: Transform API users giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: API user変換はPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "dict",
          "comprehension",
          "validation"
      ]
  },
  {
      "id": "py-ex-api-response-parser",
      "title": "Parse API response safely",
      "titleJa": "API response安全parse",
      "kind": "data",
      "level": "hard",
      "promptVi": "Viết code cho bài Parse API response safely. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "API response安全parseを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def get_items(response):\n    return []",
      "visibleTests": [
          "get_items({'status':'ok','data':{'items':[1,2]}}) == [1,2]"
      ],
      "hiddenTests": [
          "get_items({'status':'error'}) == []",
          "get_items({}) == []"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def get_items(response):\n    if response.get('status') != 'ok': return []\n    return response.get('data', {}).get('items', [])",
      "relatedNodeId": "python-dict",
      "explanationVi": "Vì sao quan trọng: Parse API response safely giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: API response安全parseはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "dict",
          "edge-case",
          "validation"
      ]
  },
  {
      "id": "py-ex-retry-logic",
      "title": "Retry failed operation",
      "titleJa": "retry logic",
      "kind": "function",
      "level": "hard",
      "promptVi": "Viết code cho bài Retry failed operation. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "retry logicを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def retry_until_success(results):\n    return False",
      "visibleTests": [
          "retry_until_success([False, False, True]) == True"
      ],
      "hiddenTests": [
          "retry_until_success([False, False]) == False",
          "retry_until_success([]) == False"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def retry_until_success(results):\n    for ok in results:\n        if ok:\n            return True\n    return False",
      "relatedNodeId": "python-loop",
      "explanationVi": "Vì sao quan trọng: Retry failed operation giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: retry logicはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "loop",
          "edge-case"
      ]
  },
  {
      "id": "py-ex-config-loader",
      "title": "Load config with defaults",
      "titleJa": "config default",
      "kind": "data",
      "level": "standard",
      "promptVi": "Viết code cho bài Load config with defaults. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "config defaultを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def load_config(user_config):\n    return {}",
      "visibleTests": [
          "load_config({'debug':True}) == {'debug': True, 'port': 8000, 'host': '127.0.0.1'}"
      ],
      "hiddenTests": [
          "load_config({'port':9000,'host':'0.0.0.0'}) == {'debug': False, 'port': 9000, 'host': '0.0.0.0'}"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def load_config(user_config):\n    config = {'debug': False, 'port': 8000, 'host': '127.0.0.1'}\n    config.update(user_config)\n    return config",
      "relatedNodeId": "python-dict",
      "explanationVi": "Vì sao quan trọng: Load config with defaults giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: config defaultはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "dict",
          "state"
      ]
  },
  {
      "id": "py-ex-env-bool-parser",
      "title": "Parse boolean env value",
      "titleJa": "bool env parser",
      "kind": "function",
      "level": "standard",
      "promptVi": "Viết code cho bài Parse boolean env value. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "bool env parserを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def parse_bool(value):\n    return False",
      "visibleTests": [
          "parse_bool('true') == True",
          "parse_bool('0') == False"
      ],
      "hiddenTests": [
          "parse_bool('YES') == True",
          "parse_bool(None) == False"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def parse_bool(value):\n    if value is None: return False\n    return str(value).strip().lower() in {'1','true','yes','on'}",
      "relatedNodeId": "python-string-methods",
      "explanationVi": "Vì sao quan trọng: Parse boolean env value giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: bool env parserはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "string",
          "validation"
      ]
  },
  {
      "id": "py-ex-top-k-frequent",
      "title": "Top K frequent words",
      "titleJa": "頻出word top k",
      "kind": "algorithm",
      "level": "hard",
      "promptVi": "Viết code cho bài Top K frequent words. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "頻出word top kを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def top_k_words(words, k):\n    return []",
      "visibleTests": [
          "top_k_words(['a','b','a','c','b','a'], 2) == ['a','b']"
      ],
      "hiddenTests": [
          "top_k_words([], 3) == []"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def top_k_words(words, k):\n    counts = {}\n    for w in words: counts[w] = counts.get(w,0)+1\n    return [w for w,_ in sorted(counts.items(), key=lambda item: (-item[1], item[0]))[:k]]",
      "relatedNodeId": "python-counter",
      "explanationVi": "Vì sao quan trọng: Top K frequent words giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: 頻出word top kはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "counter",
          "sort",
          "dict"
      ]
  },
  {
      "id": "py-ex-dedupe-preserve-order",
      "title": "Dedupe keeping order",
      "titleJa": "順序保持dedupe",
      "kind": "data",
      "level": "standard",
      "promptVi": "Viết code cho bài Dedupe keeping order. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "順序保持dedupeを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def dedupe(items):\n    return []",
      "visibleTests": [
          "dedupe(['a','b','a','c']) == ['a','b','c']"
      ],
      "hiddenTests": [
          "dedupe([]) == []"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def dedupe(items):\n    seen=set(); result=[]\n    for item in items:\n        if item not in seen:\n            seen.add(item); result.append(item)\n    return result",
      "relatedNodeId": "python-set",
      "explanationVi": "Vì sao quan trọng: Dedupe keeping order giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: 順序保持dedupeはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "duplicates",
          "set",
          "state"
      ]
  },
  {
      "id": "py-ex-group-by-key",
      "title": "Group dicts by key",
      "titleJa": "keyでgroup化",
      "kind": "data",
      "level": "standard",
      "promptVi": "Viết code cho bài Group dicts by key. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "keyでgroup化を解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def group_by(items, key):\n    return {}",
      "visibleTests": [
          "group_by([{'team':'A','name':'x'},{'team':'A','name':'y'}], 'team') == {'A':[{'team':'A','name':'x'},{'team':'A','name':'y'}]}"
      ],
      "hiddenTests": [
          "group_by([], 'team') == {}"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def group_by(items, key):\n    result={}\n    for item in items:\n        result.setdefault(item.get(key), []).append(item)\n    return result",
      "relatedNodeId": "python-dict",
      "explanationVi": "Vì sao quan trọng: Group dicts by key giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: keyでgroup化はPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "dict",
          "data-structure"
      ]
  },
  {
      "id": "py-ex-flatten-dict",
      "title": "Flatten nested dict",
      "titleJa": "nested dict flatten",
      "kind": "data",
      "level": "hard",
      "promptVi": "Viết code cho bài Flatten nested dict. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "nested dict flattenを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def flatten(data, prefix=\"\"):\n    return {}",
      "visibleTests": [
          "flatten({'a':{'b':2},'c':3}) == {'a.b':2,'c':3}"
      ],
      "hiddenTests": [
          "flatten({}) == {}"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def flatten(data, prefix=''):\n    result={}\n    for key,value in data.items():\n        name = f'{prefix}.{key}' if prefix else key\n        if isinstance(value, dict): result.update(flatten(value, name))\n        else: result[name]=value\n    return result",
      "relatedNodeId": "python-recursion",
      "explanationVi": "Vì sao quan trọng: Flatten nested dict giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: nested dict flattenはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "recursion",
          "dict"
      ]
  },
  {
      "id": "py-ex-chunk-list",
      "title": "Chunk list",
      "titleJa": "list分割",
      "kind": "data",
      "level": "standard",
      "promptVi": "Viết code cho bài Chunk list. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "list分割を解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def chunk(items, size):\n    return []",
      "visibleTests": [
          "chunk([1,2,3,4,5],2) == [[1,2],[3,4],[5]]"
      ],
      "hiddenTests": [
          "chunk([],3) == []"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def chunk(items, size):\n    if size <= 0: return []\n    return [items[i:i+size] for i in range(0, len(items), size)]",
      "relatedNodeId": "python-list",
      "explanationVi": "Vì sao quan trọng: Chunk list giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: list分割はPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "list",
          "edge-case",
          "comprehension"
      ]
  },
  {
      "id": "py-ex-slugify",
      "title": "Slugify title",
      "titleJa": "title slug化",
      "kind": "data",
      "level": "standard",
      "promptVi": "Viết code cho bài Slugify title. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "title slug化を解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def slugify(text):\n    return \"\"",
      "visibleTests": [
          "slugify('Hello Python API') == 'hello-python-api'"
      ],
      "hiddenTests": [
          "slugify('  A  B  ') == 'a-b'"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def slugify(text):\n    return '-'.join(text.strip().lower().split())",
      "relatedNodeId": "python-string-methods",
      "explanationVi": "Vì sao quan trọng: Slugify title giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: title slug化はPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "string",
          "parse"
      ]
  },
  {
      "id": "py-ex-rate-limiter",
      "title": "Simple rate limit window",
      "titleJa": "rate limit window",
      "kind": "algorithm",
      "level": "hard",
      "promptVi": "Viết code cho bài Simple rate limit window. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "rate limit windowを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def allowed_events(times, window, limit):\n    return []",
      "visibleTests": [
          "allowed_events([1,2,3,10], 5, 2) == [True, True, False, True]"
      ],
      "hiddenTests": [
          "allowed_events([],5,2) == []"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def allowed_events(times, window, limit):\n    recent=[]; result=[]\n    for t in times:\n        recent=[x for x in recent if t-x < window]\n        ok=len(recent)<limit\n        result.append(ok)\n        if ok: recent.append(t)\n    return result",
      "relatedNodeId": "python-sliding-window",
      "explanationVi": "Vì sao quan trọng: Simple rate limit window giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: rate limit windowはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "window",
          "queue",
          "edge-case"
      ]
  },
  {
      "id": "py-ex-moving-average",
      "title": "Moving average",
      "titleJa": "移動平均",
      "kind": "algorithm",
      "level": "standard",
      "promptVi": "Viết code cho bài Moving average. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "移動平均を解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def moving_average(nums, k):\n    return []",
      "visibleTests": [
          "moving_average([1,2,3,4],2) == [1.5,2.5,3.5]"
      ],
      "hiddenTests": [
          "moving_average([5],1) == [5.0]"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def moving_average(nums, k):\n    if k <= 0 or k > len(nums): return []\n    window=sum(nums[:k]); result=[window/k]\n    for i in range(k, len(nums)):\n        window += nums[i]-nums[i-k]\n        result.append(window/k)\n    return result",
      "relatedNodeId": "python-sliding-window",
      "explanationVi": "Vì sao quan trọng: Moving average giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: 移動平均はPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "window",
          "off-by-one"
      ]
  },
  {
      "id": "py-ex-interval-overlap",
      "title": "Detect interval overlap",
      "titleJa": "区間overlap",
      "kind": "algorithm",
      "level": "standard",
      "promptVi": "Viết code cho bài Detect interval overlap. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "区間overlapを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def has_overlap(intervals):\n    return False",
      "visibleTests": [
          "has_overlap([(1,3),(3,5)]) == False",
          "has_overlap([(1,4),(2,5)]) == True"
      ],
      "hiddenTests": [
          "has_overlap([]) == False"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def has_overlap(intervals):\n    intervals=sorted(intervals)\n    for i in range(1, len(intervals)):\n        if intervals[i][0] < intervals[i-1][1]: return True\n    return False",
      "relatedNodeId": "python-greedy",
      "explanationVi": "Vì sao quan trọng: Detect interval overlap giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: 区間overlapはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "sort",
          "edge-case"
      ]
  },
  {
      "id": "py-ex-merge-intervals",
      "title": "Merge intervals",
      "titleJa": "区間merge",
      "kind": "algorithm",
      "level": "hard",
      "promptVi": "Viết code cho bài Merge intervals. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "区間mergeを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def merge_intervals(intervals):\n    return []",
      "visibleTests": [
          "merge_intervals([(1,3),(2,5),(8,9)]) == [(1,5),(8,9)]"
      ],
      "hiddenTests": [
          "merge_intervals([]) == []"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def merge_intervals(intervals):\n    if not intervals: return []\n    intervals=sorted(intervals); merged=[intervals[0]]\n    for start,end in intervals[1:]:\n        last_start,last_end=merged[-1]\n        if start <= last_end: merged[-1]=(last_start, max(last_end,end))\n        else: merged.append((start,end))\n    return merged",
      "relatedNodeId": "python-greedy",
      "explanationVi": "Vì sao quan trọng: Merge intervals giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: 区間mergeはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "sort",
          "edge-case"
      ]
  },
  {
      "id": "py-ex-graph-in-degree",
      "title": "Compute in-degree",
      "titleJa": "入次数計算",
      "kind": "algorithm",
      "level": "standard",
      "promptVi": "Viết code cho bài Compute in-degree. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "入次数計算を解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def indegrees(graph):\n    return {}",
      "visibleTests": [
          "indegrees({'A':['B','C'],'B':['C'],'C':[]}) == {'A':0,'B':1,'C':2}"
      ],
      "hiddenTests": [
          "indegrees({}) == {}"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def indegrees(graph):\n    result={node:0 for node in graph}\n    for node, neighbors in graph.items():\n        for nxt in neighbors:\n            result[nxt]=result.get(nxt,0)+1\n    return result",
      "relatedNodeId": "python-graph-representation",
      "explanationVi": "Vì sao quan trọng: Compute in-degree giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: 入次数計算はPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "graph",
          "dict"
      ]
  },
  {
      "id": "py-ex-topological-ready",
      "title": "Find zero indegree nodes",
      "titleJa": "入次数0 node",
      "kind": "algorithm",
      "level": "hard",
      "promptVi": "Viết code cho bài Find zero indegree nodes. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "入次数0 nodeを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def zero_indegree_nodes(graph):\n    return []",
      "visibleTests": [
          "zero_indegree_nodes({'A':['B'],'B':[],'C':['B']}) == ['A','C']"
      ],
      "hiddenTests": [
          "zero_indegree_nodes({}) == []"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def zero_indegree_nodes(graph):\n    deg={node:0 for node in graph}\n    for neighbors in graph.values():\n        for nxt in neighbors: deg[nxt]=deg.get(nxt,0)+1\n    return sorted([node for node,count in deg.items() if count==0])",
      "relatedNodeId": "python-graph-representation",
      "explanationVi": "Vì sao quan trọng: Find zero indegree nodes giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: 入次数0 nodeはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "graph",
          "dict",
          "sort"
      ]
  },
  {
      "id": "py-ex-tree-height",
      "title": "Binary tree height from tuple",
      "titleJa": "木の高さ",
      "kind": "algorithm",
      "level": "hard",
      "promptVi": "Viết code cho bài Binary tree height from tuple. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "木の高さを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def tree_height(node):\n    return 0",
      "visibleTests": [
          "tree_height(('A', ('B', None, None), ('C', None, None))) == 2"
      ],
      "hiddenTests": [
          "tree_height(None) == 0"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def tree_height(node):\n    if node is None: return 0\n    _, left, right = node\n    return 1 + max(tree_height(left), tree_height(right))",
      "relatedNodeId": "python-binary-tree",
      "explanationVi": "Vì sao quan trọng: Binary tree height from tuple giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: 木の高さはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "tree",
          "recursion",
          "base-case"
      ]
  },
  {
      "id": "py-ex-cache-decorator",
      "title": "Simple cache decorator",
      "titleJa": "簡単cache decorator",
      "kind": "function",
      "level": "hard",
      "promptVi": "Viết code cho bài Simple cache decorator. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "簡単cache decoratorを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def memoize(fn):\n    return fn",
      "visibleTests": [
          "calls=[]\ndef f(x):\n    calls.append(x); return x*2\ng=memoize(f)\ng(3)==6 and g(3)==6 and calls==[3]"
      ],
      "hiddenTests": [
          "callable(memoize(lambda x:x)) == True"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def memoize(fn):\n    cache={}\n    def wrapper(x):\n        if x not in cache: cache[x]=fn(x)\n        return cache[x]\n    return wrapper",
      "relatedNodeId": "python-decorator",
      "explanationVi": "Vì sao quan trọng: Simple cache decorator giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: 簡単cache decoratorはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "memo",
          "dict"
      ]
  },
  {
      "id": "py-ex-safe-json-get",
      "title": "Safe nested get",
      "titleJa": "安全nested get",
      "kind": "data",
      "level": "standard",
      "promptVi": "Viết code cho bài Safe nested get. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "安全nested getを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "def safe_get(data, path, default=None):\n    return default",
      "visibleTests": [
          "safe_get({'a':{'b':2}}, ['a','b']) == 2"
      ],
      "hiddenTests": [
          "safe_get({'a':{}}, ['a','x'], 0) == 0"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "def safe_get(data, path, default=None):\n    cur=data\n    for key in path:\n        if not isinstance(cur, dict) or key not in cur: return default\n        cur=cur[key]\n    return cur",
      "relatedNodeId": "python-json",
      "explanationVi": "Vì sao quan trọng: Safe nested get giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: 安全nested getはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "dict",
          "edge-case"
      ]
  },
  {
      "id": "py-ex-fastapi-dependency",
      "title": "FastAPI dependency injection",
      "titleJa": "FastAPI依存性注入",
      "kind": "backend",
      "level": "hard",
      "promptVi": "Viết code cho bài FastAPI dependency injection. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "FastAPI依存性注入を解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "from fastapi import FastAPI, Depends\napp = FastAPI()\n",
      "visibleTests": [
          "contains:Depends",
          "contains:@app.get"
      ],
      "hiddenTests": [
          "contains:def get_service",
          "contains:return"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "from fastapi import FastAPI, Depends\napp=FastAPI()\ndef get_service():\n    return {'name':'demo'}\n@app.get('/service')\ndef read_service(service=Depends(get_service)):\n    return service",
      "relatedNodeId": "python-fastapi-dependency",
      "explanationVi": "Vì sao quan trọng: FastAPI dependency injection giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: FastAPI依存性注入はPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "fastapi",
          "route"
      ]
  },
  {
      "id": "py-ex-fastapi-response-model",
      "title": "FastAPI response model",
      "titleJa": "response model",
      "kind": "backend",
      "level": "hard",
      "promptVi": "Viết code cho bài FastAPI response model. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "response modelを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "from fastapi import FastAPI\nfrom pydantic import BaseModel\napp = FastAPI()\n",
      "visibleTests": [
          "contains:response_model",
          "contains:BaseModel"
      ],
      "hiddenTests": [
          "contains:@app.get",
          "contains:return"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "from fastapi import FastAPI\nfrom pydantic import BaseModel\napp=FastAPI()\nclass ItemOut(BaseModel):\n    id:int\n    name:str\n@app.get('/items/{item_id}', response_model=ItemOut)\ndef read_item(item_id:int):\n    return {'id': item_id, 'name':'book'}",
      "relatedNodeId": "python-fastapi-response-model",
      "explanationVi": "Vì sao quan trọng: FastAPI response model giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: response modelはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "fastapi",
          "pydantic"
      ]
  },
  {
      "id": "py-ex-fastapi-http-exception",
      "title": "FastAPI HTTPException 404",
      "titleJa": "HTTPException 404",
      "kind": "backend",
      "level": "hard",
      "promptVi": "Viết code cho bài FastAPI HTTPException 404. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "HTTPException 404を解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "from fastapi import FastAPI, HTTPException\napp = FastAPI()\n",
      "visibleTests": [
          "contains:HTTPException",
          "contains:404"
      ],
      "hiddenTests": [
          "contains:@app.get",
          "contains:raise"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "from fastapi import FastAPI, HTTPException\napp=FastAPI(); items={1:'book'}\n@app.get('/items/{item_id}')\ndef read_item(item_id:int):\n    if item_id not in items:\n        raise HTTPException(status_code=404, detail='not found')\n    return {'id': item_id, 'name': items[item_id]}",
      "relatedNodeId": "python-fastapi-exception",
      "explanationVi": "Vì sao quan trọng: FastAPI HTTPException 404 giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: HTTPException 404はPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "fastapi",
          "validation"
      ]
  },
  {
      "id": "py-ex-fastapi-service-layer",
      "title": "FastAPI service layer",
      "titleJa": "service layer",
      "kind": "backend",
      "level": "hard",
      "promptVi": "Viết code cho bài FastAPI service layer. Đây là bài thực tế dùng trong backend/AI/automation; hãy đọc test, xử lý edge case và giải thích được vì sao đúng.",
      "promptJa": "service layerを解きます。backend/AI/automationで使う実践patternです。testを読み、境界値を処理し、なぜ正しいか説明します。",
      "starterCode": "from fastapi import FastAPI\napp = FastAPI()\n",
      "visibleTests": [
          "contains:def predict_label",
          "contains:@app.post"
      ],
      "hiddenTests": [
          "contains:/predict",
          "contains:return"
      ],
      "hintsVi": [
          "Viết rõ input/output mong muốn trước khi code.",
          "Chạy visible test trước, rồi tự nghĩ thêm edge case.",
          "Nếu fail, kiểm return value, input rỗng và kiểu dữ liệu."
      ],
      "hintsJa": [
          "code前に期待するinput/outputを書きます。",
          "visible testを先に確認し、自分でedge caseを追加します。",
          "failしたらreturn値、空入力、型を確認します。"
      ],
      "solution": "from fastapi import FastAPI\napp=FastAPI()\ndef predict_label(features):\n    return 'positive' if sum(features) >= 0 else 'negative'\n@app.post('/predict')\ndef predict(payload: dict):\n    label=predict_label(payload.get('features', []))\n    return {'label': label}",
      "relatedNodeId": "python-fastapi-service-layer",
      "explanationVi": "Vì sao quan trọng: FastAPI service layer giúp bạn biến kiến thức Python thành kỹ năng xử lý dữ liệu, API hoặc thuật toán thực tế. Hãy bắt đầu bằng case nhỏ, sau đó thêm input rỗng, dữ liệu thiếu và giá trị biên.",
      "explanationJa": "重要性: service layerはPythonを実務のdata処理、API、algorithmに使うためのpatternです。小さいcaseから始め、空入力・欠損data・境界値を確認します。",
      "mistakeTags": [
          "fastapi",
          "route"
      ]
  },

  {
      "id": "py-ex-readme-section-extractor",
      "title": "Extract README sections",
      "titleJa": "README section抽出",
      "kind": "file",
      "level": "standard",
      "promptVi": "Viết hàm lấy danh sách tiêu đề section từ nội dung README markdown. Bài này luyện xử lý text/file rất hay dùng khi làm tool automation.",
      "promptJa": "README markdownからsection見出しを抽出します。automation toolでよく使うtext/file処理です。",
      "starterCode": "def extract_sections(markdown):\n    return []",
      "visibleTests": [
          "extract_sections('# Title\\n## Install\\ntext\\n## Usage') == ['Title','Install','Usage']"
      ],
      "hiddenTests": [
          "extract_sections('plain text') == []"
      ],
      "hintsVi": [
          "Duyệt từng dòng bằng splitlines().",
          "Dòng heading bắt đầu bằng #.",
          "strip ký tự # và khoảng trắng trước khi append."
      ],
      "hintsJa": [
          "splitlines()で1行ずつ見ます。",
          "heading行は#で始まります。",
          "#と空白をstripしてからappendします。"
      ],
      "solution": "def extract_sections(markdown):\n    result=[]\n    for line in markdown.splitlines():\n        if line.startswith('#'):\n            result.append(line.lstrip('#').strip())\n    return result",
      "relatedNodeId": "python-file-io",
      "explanationVi": "Vì sao quan trọng: README, log, markdown notes và config đều là text file. Biết tách dòng và nhận diện pattern giúp bạn viết automation tool nhanh hơn.",
      "explanationJa": "重要性: README、log、markdown notes、configはtext fileです。行ごとのpattern認識はautomation tool作成に役立ちます。",
      "mistakeTags": [
          "file",
          "parse",
          "string"
      ]
  },
];
pythonCodeExercises.push(...pythonV78RCodeExercises);
pythonCodeExercises.push(...pythonV80RGradedExercises);
