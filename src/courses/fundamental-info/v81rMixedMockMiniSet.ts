import type { FundamentalExamScenario } from './examScenarios';

export const fundamentalInfoV81RMixedMockMiniSet: FundamentalExamScenario[] = [
  {
    id: 'v81r-mixed-pseudocode-nested-loop', kind: 'long-trace', domain: 'algorithm', difficulty: 'hard', relatedNodeIds: ['array','trace-table','nested-loop'],
    titleJa: 'V81R mixed mock: 二重loopのcount', titleVi: 'V81R mixed mock: đếm nested loop',
    passageJa: '配列Aの各要素について、右側にある小さい要素の数を数える。', passageVi: 'Với mỗi phần tử A, đếm số phần tử bên phải nhỏ hơn nó.',
    questionJa: 'A=[3,1,2] のとき count はいくつか。', questionVi: 'Với A=[3,1,2], count bằng bao nhiêu?',
    code: 'count ← 0\nfor i ← 1 to 3\n  for j ← i+1 to 3\n    if A[i] > A[j] then count ← count + 1',
    traceSteps: [{ step: 'i=1', variables: '3>1, 3>2 => +2', noteJa: '右側2つが小さい', noteVi: '2 phần tử bên phải nhỏ hơn' }, { step: 'i=2', variables: '1>2 false', noteJa: '加算なし', noteVi: 'không cộng' }],
    choices: [{ ja: '1', vi: '1', whyVi: 'Sai, quên so sánh 3 với 2.', whyJa: '3と2の比較を忘れています。' }, { ja: '2', vi: '2', whyVi: 'Đúng.', whyJa: '正解。' }, { ja: '3', vi: '3', whyVi: 'Sai, 1>2 không đúng.', whyJa: '1>2はfalseです。' }, { ja: '0', vi: '0', whyVi: 'Sai.', whyJa: '誤りです。' }], answerIndex: 1,
    trapJa: '全組合せではなく、jはiの右側だけを見る。', trapVi: 'Chỉ xét bên phải i, không phải mọi cặp hai chiều.', examTipJa: '二重loopは(i,j)の組を全部書き出す。', examTipVi: 'Nested loop: liệt kê từng cặp (i,j).'
  },
  {
    id: 'v81r-mixed-sql-where-having', kind: 'sql-step', domain: 'database', difficulty: 'standard', relatedNodeIds: ['sql-group-by','sql-having','database-fe'],
    titleJa: 'V81R mixed mock: WHERE と HAVING', titleVi: 'V81R mixed mock: WHERE và HAVING', passageJa: '売上表から商品別の合計を求め、合計が100以上の商品だけ表示する。', passageVi: 'Tính tổng sales theo product, chỉ hiển thị product có tổng >=100.',
    questionJa: '集計後の条件に使う句はどれか。', questionVi: 'Điều kiện sau GROUP BY dùng mệnh đề nào?',
    table: 'Sales(product, amount) GROUP BY product, total >= 100', sqlSteps: [{ step: '1', result: 'WHERE filters rows before GROUP BY', noteJa: '集計前', noteVi: 'lọc trước tổng hợp' }, { step: '2', result: 'HAVING filters groups after GROUP BY', noteJa: '集計後', noteVi: 'lọc sau tổng hợp' }],
    choices: [{ ja: 'WHERE SUM(amount)>=100', vi: 'WHERE SUM(amount)>=100', whyVi: 'Sai, WHERE không dùng aggregate sau GROUP BY.', whyJa: 'WHEREは集計前です。' }, { ja: 'HAVING SUM(amount)>=100', vi: 'HAVING SUM(amount)>=100', whyVi: 'Đúng.', whyJa: '正解。' }, { ja: 'ORDER BY SUM(amount)>=100', vi: 'ORDER BY SUM(amount)>=100', whyVi: 'Sai, ORDER BY để sắp xếp.', whyJa: 'ORDER BYは並べ替えです。' }, { ja: 'JOIN SUM(amount)>=100', vi: 'JOIN SUM(amount)>=100', whyVi: 'Sai.', whyJa: '誤りです。' }], answerIndex: 1,
    trapJa: 'WHEREは集計前、HAVINGは集計後。', trapVi: 'WHERE trước aggregate, HAVING sau aggregate.', examTipJa: 'GROUP BYがある条件はHAVINGを疑う。', examTipVi: 'Thấy điều kiện trên SUM/COUNT sau GROUP BY → HAVING.'
  },
  {
    id: 'v81r-mixed-network-cidr', kind: 'japanese-scenario', domain: 'network', difficulty: 'standard', relatedNodeIds: ['ip-subnet','routing'],
    titleJa: 'V81R mixed mock: /28 host数', titleVi: 'V81R mixed mock: số host /28', passageJa: 'IPv4 の /28 subnet を小規模検証環境で使う。', passageVi: 'Một môi trường test nhỏ dùng subnet IPv4 /28.', questionJa: '利用可能host数はいくつか。', questionVi: 'Số host usable là bao nhiêu?',
    choices: [{ ja: '14', vi: '14', whyVi: 'Đúng: 2^(32-28)-2=14.', whyJa: '正解。' }, { ja: '16', vi: '16', whyVi: 'Sai, chưa trừ network/broadcast.', whyJa: 'network/broadcastを除いていません。' }, { ja: '28', vi: '28', whyVi: 'Sai.', whyJa: '誤りです。' }, { ja: '30', vi: '30', whyVi: 'Đó là /27.', whyJa: '/27の場合です。' }], answerIndex: 0,
    trapJa: '全address数とusable host数を混同しない。', trapVi: 'Đừng nhầm tổng địa chỉ và host usable.', examTipJa: 'IPv4 usable = 2^(host bit)-2。', examTipVi: 'IPv4 usable = 2^(host bit)-2.'
  },
  {
    id: 'v81r-mixed-security-log', kind: 'japanese-scenario', domain: 'security', difficulty: 'hard', relatedNodeIds: ['security-log','incident-response','cia-fe'],
    titleJa: 'V81R mixed mock: login log anomaly', titleVi: 'V81R mixed mock: bất thường login log', passageJa: '短時間に多数の失敗loginが同一accountに発生し、その後海外IPから成功loginがあった。', passageVi: 'Trong thời gian ngắn có nhiều login fail cùng account, sau đó có login thành công từ IP nước ngoài.', questionJa: '最初に確認すべき対応として最も適切なものはどれか。', questionVi: 'Hành động đầu tiên phù hợp nhất là gì?',
    choices: [{ ja: '該当accountを一時停止し、利用者確認とpassword resetを行う', vi: 'Tạm khóa account, xác minh user và reset password', whyVi: 'Đúng, có dấu hiệu credential stuffing/account takeover.', whyJa: '正解。乗っ取り疑いに直接対応します。' }, { ja: 'ログを削除して容量を空ける', vi: 'Xóa log để tiết kiệm dung lượng', whyVi: 'Sai, log là bằng chứng điều tra.', whyJa: 'logは証跡です。' }, { ja: '全serverを再起動する', vi: 'Restart toàn bộ server', whyVi: 'Không trực tiếp xử lý account compromised.', whyJa: '直接的ではありません。' }, { ja: '暗号化方式をAESからRSAへ変更する', vi: 'Đổi AES sang RSA', whyVi: 'Sai kiến thức và không liên quan.', whyJa: '関係ありません。' }], answerIndex: 0,
    trapJa: '暗号・再起動など一般論ではなく、logの事象に直接対応する。', trapVi: 'Bám log cụ thể, không chọn biện pháp security chung chung.', examTipJa: '失敗多数＋成功loginは乗っ取り疑い。', examTipVi: 'Nhiều fail + một success lạ = nghi account takeover.'
  },
  {
    id: 'v81r-mixed-dp-table', kind: 'long-trace', domain: 'algorithm', difficulty: 'hard', relatedNodeIds: ['dynamic-programming','array','trace-table'],
    titleJa: 'V81R mixed mock: DP table update', titleVi: 'V81R mixed mock: cập nhật bảng DP', passageJa: 'dp[i] = max(dp[i-1], dp[i-2]+value[i]) とする。', passageVi: 'Đặt dp[i] = max(dp[i-1], dp[i-2]+value[i]).', questionJa: 'value=[2,7,9] の dp[3] はいくつか。', questionVi: 'value=[2,7,9], dp[3] bằng bao nhiêu?', code: 'dp[1]=2\ndp[2]=max(2,7)=7\ndp[3]=max(dp[2], dp[1]+9)',
    traceSteps: [{ step: 'dp3', variables: 'max(7, 11)', noteJa: '2+9を比較', noteVi: 'so sánh 7 và 2+9' }], choices: [{ ja: '9', vi: '9', whyVi: 'Sai, không dùng công thức đầy đủ.', whyJa: '式を完全に使っていません。' }, { ja: '11', vi: '11', whyVi: 'Đúng.', whyJa: '正解。' }, { ja: '16', vi: '16', whyVi: 'Sai, lấy 7+9 nhưng không được chọn kề nhau.', whyJa: '隣接を同時に選んでいます。' }, { ja: '18', vi: '18', whyVi: 'Sai.', whyJa: '誤りです。' }], answerIndex: 1,
    trapJa: 'dp[i-1]+value[i]ではなくdp[i-2]+value[i]。', trapVi: 'Cẩn thận dp[i-2]+value[i], không phải dp[i-1]+value[i].', examTipJa: 'DPはstate定義と遷移式を声に出して読む。', examTipVi: 'DP: đọc to state và công thức chuyển.'
  },
  {
    id: 'v81r-mixed-api-auth', kind: 'japanese-scenario', domain: 'security', difficulty: 'standard', relatedNodeIds: ['authentication','authorization','web-security'],
    titleJa: 'V81R mixed mock: 認証と認可', titleVi: 'V81R mixed mock: Authentication vs Authorization', passageJa: '社員Aはloginできるが、経理画面を開く権限はない。', passageVi: 'Nhân viên A đăng nhập được nhưng không có quyền mở màn hình kế toán.', questionJa: '経理画面へのアクセス制御は主に何か。', questionVi: 'Kiểm soát truy cập màn hình kế toán chủ yếu là gì?',
    choices: [{ ja: '認証', vi: 'Authentication', whyVi: 'Sai, login là authentication.', whyJa: 'login確認です。' }, { ja: '認可', vi: 'Authorization', whyVi: 'Đúng, quyền dùng chức năng sau login.', whyJa: '正解。login後の権限確認です。' }, { ja: '可用性', vi: 'Availability', whyVi: 'Sai.', whyJa: '誤りです。' }, { ja: '圧縮', vi: 'Compression', whyVi: 'Sai.', whyJa: '誤りです。' }], answerIndex: 1,
    trapJa: '認証=誰か、認可=何をしてよいか。', trapVi: 'Authentication = bạn là ai; Authorization = được làm gì.', examTipJa: 'login後の権限は認可。', examTipVi: 'Sau login mà hỏi quyền chức năng → authorization.'
  }
];
