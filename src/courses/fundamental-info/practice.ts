export type FundamentalPracticeKind = 'pseudo-code' | 'sql' | 'subnet';

export interface FundamentalPracticeTask {
  id: string;
  kind: FundamentalPracticeKind;
  titleJa: string;
  titleVi: string;
  level: 'basic' | 'standard' | 'hard';
  relatedNodeIds: string[];
  promptVi: string;
  promptJa: string;
  code?: string;
  table?: string;
  choicesVi: string[];
  choicesJa: string[];
  answerIndex: number;
  explanationVi: string;
  explanationJa: string;
  examTipVi: string;
  examTipJa: string;
}

export const fundamentalInfoPracticeTasks: FundamentalPracticeTask[] = [
  {
    id: 'fe-pseudo-sum-loop', kind: 'pseudo-code', titleJa: '合計ループのトレース', titleVi: 'Trace vòng lặp tính tổng', level: 'basic', relatedNodeIds: ['pseudo-code', 'control-flow', 'array'],
    promptVi: 'Biến sum nhận giá trị nào sau khi đoạn pseudo-code chạy xong?',
    promptJa: '次の疑似言語を実行した後、sum の値はいくつですか。',
    code: 'sum ← 0\nfor i ← 1 to 4\n  sum ← sum + i\nendfor\nprint sum',
    choicesVi: ['4', '6', '10', '15'], choicesJa: ['4', '6', '10', '15'], answerIndex: 2,
    explanationVi: 'Vòng lặp cộng 1 + 2 + 3 + 4 nên sum = 10. Với 科目B, hãy lập bảng i/sum thay vì tính trong đầu.',
    explanationJa: '1+2+3+4 を加算するため sum は 10 です。科目Bでは i と sum の表を書いて追跡します。',
    examTipVi: 'Bẫy thường là quên giá trị cuối của vòng lặp hoặc nhầm “to 4” có chạy i=4 hay không.',
    examTipJa: 'ひっかけは最終値を含むかどうかです。to 4 なら i=4 も処理します。',
  },
  {
    id: 'fe-pseudo-array-max', kind: 'pseudo-code', titleJa: '配列の最大値探索', titleVi: 'Tìm max trong mảng', level: 'standard', relatedNodeIds: ['array', 'pseudo-code', 'linear-search'],
    promptVi: 'Đoạn pseudo-code sau trả về giá trị nào?', promptJa: '次の疑似言語はどの値を返しますか。',
    code: 'A ← [3, 8, 2, 7]\nmax ← A[1]\nfor i ← 2 to 4\n  if A[i] > max then\n    max ← A[i]\n  endif\nendfor\nreturn max',
    choicesVi: ['2', '3', '7', '8'], choicesJa: ['2', '3', '7', '8'], answerIndex: 3,
    explanationVi: 'max bắt đầu là 3, gặp 8 thì cập nhật, các giá trị 2 và 7 không lớn hơn 8. Kết quả là 8.',
    explanationJa: 'max は 3 から始まり、8 で更新されます。2 と 7 は 8 より大きくないため結果は 8 です。',
    examTipVi: 'Luôn kiểm index bắt đầu từ 1 hay 0. FE pseudo-code thường có quy ước riêng trong đề.',
    examTipJa: '添字が 1 始まりか 0 始まりかを必ず確認します。',
  },
  {
    id: 'fe-pseudo-stack', kind: 'pseudo-code', titleJa: 'スタックの LIFO', titleVi: 'Stack LIFO', level: 'standard', relatedNodeIds: ['stack', 'queue'],
    promptVi: 'Sau các thao tác push/pop, giá trị được pop cuối cùng là gì?', promptJa: 'push/pop の後、最後に pop される値はどれですか。',
    code: 'push(10)\npush(20)\npush(30)\npop()\npush(40)\nx ← pop()',
    choicesVi: ['10', '20', '30', '40'], choicesJa: ['10', '20', '30', '40'], answerIndex: 3,
    explanationVi: 'Stack là Last In, First Out. Sau pop 30, push 40 nên pop tiếp sẽ lấy 40.',
    explanationJa: 'スタックは LIFO です。30 を pop した後に 40 を push するため、次の pop は 40 です。',
    examTipVi: 'Vẽ stack dạng cột. Đỉnh stack luôn là phần tử được pop trước.',
    examTipJa: 'スタックを縦に描き、上にある要素から取り出すと考えます。',
  },
  {
    id: 'fe-sql-join', kind: 'sql', titleJa: 'JOIN の読み取り', titleVi: 'Đọc JOIN', level: 'basic', relatedNodeIds: ['sql-join', 'database-fe'],
    promptVi: 'Câu SQL nào lấy tên khách hàng và tên đơn hàng bằng cách nối Customers với Orders theo customer_id?',
    promptJa: 'Customers と Orders を customer_id で結合し、顧客名と注文名を取得する SQL はどれですか。',
    table: 'Customers(id, name)\nOrders(id, customer_id, order_name)',
    choicesVi: ['SELECT name, order_name FROM Customers JOIN Orders ON Customers.id = Orders.customer_id;', 'SELECT name FROM Customers WHERE Orders.customer_id;', 'JOIN Customers SELECT Orders;', 'SELECT * FROM Orders GROUP BY customer_id;'],
    choicesJa: ['SELECT name, order_name FROM Customers JOIN Orders ON Customers.id = Orders.customer_id;', 'SELECT name FROM Customers WHERE Orders.customer_id;', 'JOIN Customers SELECT Orders;', 'SELECT * FROM Orders GROUP BY customer_id;'], answerIndex: 0,
    explanationVi: 'JOIN cần điều kiện ON để chỉ rõ khóa liên kết. Customers.id khớp với Orders.customer_id.',
    explanationJa: 'JOIN では ON で結合条件を指定します。Customers.id と Orders.customer_id を対応させます。',
    examTipVi: 'Bẫy FE là chọn câu có JOIN nhưng thiếu ON hoặc nối sai khóa.', examTipJa: 'JOIN があっても ON 条件がない/キーが違う選択肢に注意します。',
  },
  {
    id: 'fe-sql-group', kind: 'sql', titleJa: 'GROUP BY / HAVING', titleVi: 'GROUP BY / HAVING', level: 'standard', relatedNodeIds: ['sql-aggregate', 'database-fe'],
    promptVi: 'Muốn lấy customer_id có tổng amount từ 10000 trở lên, câu nào đúng?', promptJa: 'amount の合計が 10000 以上の customer_id を取得する SQL はどれですか。',
    table: 'Sales(customer_id, amount)',
    choicesVi: ['SELECT customer_id FROM Sales WHERE SUM(amount) >= 10000 GROUP BY customer_id;', 'SELECT customer_id FROM Sales GROUP BY customer_id HAVING SUM(amount) >= 10000;', 'SELECT customer_id, SUM(amount) FROM Sales WHERE amount >= 10000;', 'SELECT customer_id FROM Sales HAVING amount >= 10000;'],
    choicesJa: ['SELECT customer_id FROM Sales WHERE SUM(amount) >= 10000 GROUP BY customer_id;', 'SELECT customer_id FROM Sales GROUP BY customer_id HAVING SUM(amount) >= 10000;', 'SELECT customer_id, SUM(amount) FROM Sales WHERE amount >= 10000;', 'SELECT customer_id FROM Sales HAVING amount >= 10000;'], answerIndex: 1,
    explanationVi: 'WHERE lọc từng dòng trước nhóm; HAVING lọc kết quả sau GROUP BY. SUM(amount) là điều kiện tổng sau nhóm nên dùng HAVING.',
    explanationJa: 'WHERE はグループ化前の行を絞り込み、HAVING は GROUP BY 後の集計結果を絞り込みます。',
    examTipVi: 'Nhớ: điều kiện aggregate như SUM/COUNT/AVG thường đi với HAVING.', examTipJa: 'SUM/COUNT/AVG など集計条件は HAVING と覚えます。',
  },
  {
    id: 'fe-sql-normalization', kind: 'sql', titleJa: '正規化の判断', titleVi: 'Nhận diện normalization', level: 'standard', relatedNodeIds: ['normalization-fe', 'database-fe'],
    promptVi: 'Mục tiêu chính của chuẩn hóa CSDL là gì?', promptJa: 'データベース正規化の主な目的はどれですか。',
    choicesVi: ['Tăng trùng lặp để truy vấn nhanh hơn', 'Giảm dư thừa và tránh bất nhất khi cập nhật', 'Mã hóa toàn bộ bảng', 'Thay JOIN bằng file CSV'],
    choicesJa: ['重複を増やして検索を速くする', '冗長性を減らし更新時の不整合を防ぐ', '全テーブルを暗号化する', 'JOIN を CSV に置き換える'], answerIndex: 1,
    explanationVi: 'Chuẩn hóa tách dữ liệu theo phụ thuộc để giảm lặp và giảm anomaly khi insert/update/delete.', explanationJa: '正規化は依存関係に基づいて表を分け、冗長性と更新時の不整合を減らします。',
    examTipVi: 'Gặp từ anomaly/bất nhất/cập nhật lặp nhiều nơi → nghĩ tới normalization.', examTipJa: '不整合、更新異常、冗長性が出たら正規化を考えます。',
  },
  {
    id: 'fe-subnet-hosts', kind: 'subnet', titleJa: 'CIDR とホスト数', titleVi: 'CIDR và số host', level: 'basic', relatedNodeIds: ['ip-subnet', 'network-fe'],
    promptVi: 'Mạng IPv4 /24 có tối đa bao nhiêu địa chỉ host usable?', promptJa: 'IPv4 の /24 ネットワークで利用可能なホストアドレス数はいくつですか。',
    choicesVi: ['24', '128', '254', '256'], choicesJa: ['24', '128', '254', '256'], answerIndex: 2,
    explanationVi: '/24 còn 8 bit host: 2^8 = 256 địa chỉ, trừ network address và broadcast address nên usable = 254.',
    explanationJa: '/24 はホスト部が 8 bit なので 2^8=256。ネットワークアドレスとブロードキャストを除き 254 です。',
    examTipVi: 'Công thức host usable IPv4 truyền thống: 2^(32-prefix) - 2.', examTipJa: '利用可能ホスト数は 2^(32-prefix)-2 と覚えます。',
  },
  {
    id: 'fe-subnet-private', kind: 'subnet', titleJa: 'プライベート IP', titleVi: 'Private IP', level: 'basic', relatedNodeIds: ['ip-subnet', 'network-fe', 'security-fe'],
    promptVi: 'Địa chỉ nào là private IP?', promptJa: 'プライベート IP アドレスはどれですか。',
    choicesVi: ['8.8.8.8', '172.16.5.10', '203.0.113.1', '1.1.1.1'], choicesJa: ['8.8.8.8', '172.16.5.10', '203.0.113.1', '1.1.1.1'], answerIndex: 1,
    explanationVi: 'Dải private gồm 10.0.0.0/8, 172.16.0.0–172.31.255.255, 192.168.0.0/16. 172.16.5.10 thuộc private.',
    explanationJa: 'プライベート IP は 10/8、172.16/12、192.168/16 です。172.16.5.10 は該当します。',
    examTipVi: '172 private chỉ từ 172.16 đến 172.31, không phải toàn bộ 172.x.', examTipJa: '172 は 172.16〜172.31 だけがプライベートです。',
  },
  {
    id: 'fe-subnet-prefix', kind: 'subnet', titleJa: 'プレフィックス長', titleVi: 'Prefix length', level: 'standard', relatedNodeIds: ['ip-subnet', 'osi-tcpip'],
    promptVi: 'Subnet mask 255.255.255.192 tương ứng prefix nào?', promptJa: 'サブネットマスク 255.255.255.192 に対応するプレフィックスはどれですか。',
    choicesVi: ['/24', '/25', '/26', '/28'], choicesJa: ['/24', '/25', '/26', '/28'], answerIndex: 2,
    explanationVi: '255.255.255.192 = 24 bit đầu + 11000000 ở octet cuối = thêm 2 bit, tổng /26.',
    explanationJa: '255.255.255.192 は最初の 24 bit に加え、最後の 192 が 11000000 で 2 bit。合計 /26 です。',
    examTipVi: 'Học bảng octet cuối: 128=/25, 192=/26, 224=/27, 240=/28.', examTipJa: '最後のオクテットは 128=/25, 192=/26, 224=/27, 240=/28 と覚えます。',
  },
  {
    id: 'fe-pseudo-binary-search', kind: 'pseudo-code', titleJa: '二分探索の範囲更新', titleVi: 'Binary search cập nhật phạm vi', level: 'hard', relatedNodeIds: ['binary-search', 'array', 'trace-table'],
    promptVi: 'A=[2,5,8,12,20], target=12. Với low=1, high=5, mid=floor((low+high)/2), sau lần so sánh đầu tiên phạm vi tiếp theo là gì?',
    promptJa: 'A=[2,5,8,12,20], target=12。low=1, high=5, mid=floor((low+high)/2) のとき、最初の比較後の範囲はどれですか。',
    code: 'mid ← floor((1+5)/2) = 3\nA[3] = 8\ntarget = 12\nif A[mid] < target then low ← mid + 1',
    choicesVi: ['low=1, high=2', 'low=2, high=5', 'low=4, high=5', 'low=1, high=5'], choicesJa: ['low=1, high=2', 'low=2, high=5', 'low=4, high=5', 'low=1, high=5'], answerIndex: 2,
    explanationVi: 'A[3]=8 nhỏ hơn target 12 nên bỏ nửa trái và đặt low=mid+1=4, high giữ 5.',
    explanationJa: 'A[3]=8 は target 12 より小さいため、左側を捨てて low=mid+1=4、high は5のままです。',
    examTipVi: 'Binary search luôn cần mảng đã sort và cập nhật low/high đúng chiều.', examTipJa: '二分探索は整列済み配列で、low/high の更新方向を間違えないことが重要です。',
  },
  {
    id: 'fe-pseudo-recursion', kind: 'pseudo-code', titleJa: '再帰の戻り値', titleVi: 'Giá trị trả về của đệ quy', level: 'hard', relatedNodeIds: ['recursion', 'trace-table'],
    promptVi: 'Hàm f(n)= nếu n=0 trả 1, ngược lại trả n*f(n-1). f(4) bằng bao nhiêu?',
    promptJa: 'f(n) は n=0 なら1、そうでなければ n*f(n-1) を返します。f(4) はいくつですか。',
    code: 'function f(n)\n  if n = 0 return 1\n  return n * f(n-1)\nend',
    choicesVi: ['4', '10', '16', '24'], choicesJa: ['4', '10', '16', '24'], answerIndex: 3,
    explanationVi: 'f(4)=4*3*2*1*1=24. Điều kiện dừng n=0 giúp recursion không chạy vô hạn.',
    explanationJa: 'f(4)=4*3*2*1*1=24です。n=0 の終了条件が無限再帰を防ぎます。',
    examTipVi: 'Với recursion, viết chuỗi gọi xuống và chuỗi trả về lên.', examTipJa: '再帰は呼出しで下り、戻り値で上る流れを書きます。',
  },
  {
    id: 'fe-pseudo-queue', kind: 'pseudo-code', titleJa: 'キューの FIFO', titleVi: 'Queue FIFO', level: 'standard', relatedNodeIds: ['queue'],
    promptVi: 'enqueue A, enqueue B, dequeue, enqueue C, dequeue. Giá trị dequeue cuối là gì?',
    promptJa: 'enqueue A, enqueue B, dequeue, enqueue C, dequeue。最後に dequeue される値はどれですか。',
    code: 'enqueue(A)\nenqueue(B)\ndequeue()\nenqueue(C)\nx ← dequeue()',
    choicesVi: ['A', 'B', 'C', 'Không có dữ liệu'], choicesJa: ['A', 'B', 'C', 'データなし'], answerIndex: 1,
    explanationVi: 'Queue là FIFO. Dequeue đầu lấy A, sau đó hàng đợi còn B rồi thêm C, dequeue tiếp lấy B.',
    explanationJa: 'キューは FIFO です。最初の dequeue は A、その後 B,C の順なので次は B です。',
    examTipVi: 'Vẽ queue nằm ngang: vào sau ở cuối, ra trước ở đầu.', examTipJa: 'キューは横に描き、先頭から取り出すと考えます。',
  },
  {
    id: 'fe-sql-left-join', kind: 'sql', titleJa: 'LEFT JOIN の結果', titleVi: 'Kết quả LEFT JOIN', level: 'hard', relatedNodeIds: ['sql-join', 'relational-model'],
    promptVi: 'LEFT JOIN giữ lại dòng nào nếu bảng bên phải không có bản ghi khớp?',
    promptJa: 'LEFT JOIN で右表に一致する行がない場合、どの行が残りますか。',
    table: 'Customers LEFT JOIN Orders ON Customers.id = Orders.customer_id',
    choicesVi: ['Dòng Customers vẫn còn, cột Orders là NULL', 'Dòng Customers bị xóa', 'Chỉ giữ dòng Orders', 'JOIN báo lỗi'], choicesJa: ['Customers の行は残り Orders 側は NULL', 'Customers の行は消える', 'Orders の行だけ残る', 'JOIN はエラーになる'], answerIndex: 0,
    explanationVi: 'LEFT JOIN giữ toàn bộ bảng trái. Nếu không có match, các cột từ bảng phải là NULL.',
    explanationJa: 'LEFT JOIN は左表の行を残します。一致しない場合、右表の列は NULL になります。',
    examTipVi: 'INNER JOIN chỉ giữ dòng khớp; LEFT JOIN giữ bảng trái.', examTipJa: 'INNER JOIN は一致行のみ、LEFT JOIN は左表を保持します。',
  },
  {
    id: 'fe-sql-transaction', kind: 'sql', titleJa: 'トランザクションの rollback', titleVi: 'Transaction rollback', level: 'standard', relatedNodeIds: ['transaction-fe'],
    promptVi: 'Trong giao dịch chuyển tiền, sau khi trừ tiền tài khoản A thì lỗi xảy ra trước khi cộng tài khoản B. Nên làm gì?',
    promptJa: '振込処理でA口座から減額後、B口座への加算前にエラーが起きました。どうすべきですか。',
    choicesVi: ['Commit phần đã trừ', 'Rollback toàn bộ transaction', 'Tạo index', 'Chạy SELECT lại'], choicesJa: ['減額だけcommitする', 'トランザクション全体をrollbackする', 'インデックスを作る', 'SELECTを再実行する'], answerIndex: 1,
    explanationVi: 'ACID yêu cầu atomicity: giao dịch phải hoàn thành toàn bộ hoặc hủy toàn bộ để không mất cân bằng tiền.',
    explanationJa: 'ACID の原子性により、処理は全て成功するか全て取り消す必要があります。',
    examTipVi: 'Thấy chuyển tiền/cập nhật nhiều bảng + lỗi giữa chừng → rollback.', examTipJa: '振込や複数表更新で途中エラーなら rollback を考えます。',
  },
  {
    id: 'fe-sql-index', kind: 'sql', titleJa: 'インデックスの効果', titleVi: 'Hiệu quả index', level: 'standard', relatedNodeIds: ['index-db'],
    promptVi: 'Index thường có lợi nhất trong tình huống nào?',
    promptJa: 'インデックスが最も有効になりやすい場面はどれですか。',
    choicesVi: ['Cột thường dùng trong WHERE và có nhiều giá trị khác nhau', 'Bảng rất nhỏ chỉ vài dòng', 'Cột cập nhật liên tục mỗi giây và ít khi tìm kiếm', 'Thay thế hoàn toàn backup'], choicesJa: ['WHEREでよく使い値の種類が多い列', '数行だけの非常に小さい表', '毎秒更新され検索しない列', 'バックアップの代替'], answerIndex: 0,
    explanationVi: 'Index giúp tìm nhanh theo điều kiện lọc. Nhưng bảng nhỏ hoặc cột cập nhật nhiều có thể không lợi.',
    explanationJa: 'インデックスは検索条件に使う列で有効です。ただし小さな表や更新が多い列では効果が薄い場合があります。',
    examTipVi: 'Index tăng search, nhưng tốn storage và làm update/insert chậm hơn.', examTipJa: 'index は検索を速くしますが、容量と更新コストが増えます。',
  },
  {
    id: 'fe-subnet-network-address', kind: 'subnet', titleJa: 'ネットワークアドレス', titleVi: 'Network address', level: 'hard', relatedNodeIds: ['ip-subnet'],
    promptVi: 'IP 192.168.1.70/26 thuộc network address nào?',
    promptJa: 'IP 192.168.1.70/26 のネットワークアドレスはどれですか。',
    choicesVi: ['192.168.1.0', '192.168.1.64', '192.168.1.70', '192.168.1.128'], choicesJa: ['192.168.1.0', '192.168.1.64', '192.168.1.70', '192.168.1.128'], answerIndex: 1,
    explanationVi: '/26 có block size 64 ở octet cuối: 0-63, 64-127, 128-191, 192-255. 70 thuộc block 64-127 nên network là .64.',
    explanationJa: '/26 は最後のオクテットで64刻みです。70は64〜127の範囲なので network は 192.168.1.64 です。',
    examTipVi: 'Block size = 256 - subnet mask octet. /26 mask cuối là 192, block size 64.', examTipJa: 'ブロックサイズは 256 - mask値。/26 の最後は192なので64刻みです。',
  },
  {
    id: 'fe-subnet-broadcast', kind: 'subnet', titleJa: 'ブロードキャストアドレス', titleVi: 'Broadcast address', level: 'hard', relatedNodeIds: ['ip-subnet'],
    promptVi: 'Với network 10.0.0.0/30, broadcast address là gì?',
    promptJa: 'network 10.0.0.0/30 のブロードキャストアドレスはどれですか。',
    choicesVi: ['10.0.0.0', '10.0.0.1', '10.0.0.2', '10.0.0.3'], choicesJa: ['10.0.0.0', '10.0.0.1', '10.0.0.2', '10.0.0.3'], answerIndex: 3,
    explanationVi: '/30 còn 2 bit host, mỗi block có 4 địa chỉ: .0 network, .1-.2 usable, .3 broadcast.',
    explanationJa: '/30 はホスト部2bitで4アドレスです。.0 network、.1-.2 usable、.3 broadcastです。',
    examTipVi: '/30 thường dùng point-to-point, usable chỉ 2 host.', examTipJa: '/30 はpoint-to-pointで使われ、利用可能hostは2つです。',
  },
  {
    id: 'fe-subnet-same-network', kind: 'subnet', titleJa: '同一ネットワーク判定', titleVi: 'Kiểm tra cùng network', level: 'hard', relatedNodeIds: ['ip-subnet', 'routing'],
    promptVi: '192.168.10.20/27 và 192.168.10.31/27 có cùng subnet không?',
    promptJa: '192.168.10.20/27 と 192.168.10.31/27 は同じ subnet ですか。',
    choicesVi: ['Có, cùng block 0-31', 'Không, 31 là network khác', 'Không, /27 không có host', 'Có, vì mọi 192.168 đều cùng subnet'], choicesJa: ['はい、0-31 の同じblock', 'いいえ、31は別network', 'いいえ、/27にhostはない', 'はい、192.168は全て同じsubnet'], answerIndex: 0,
    explanationVi: '/27 block size 32: 0-31 cùng subnet, trong đó .31 là broadcast nhưng vẫn thuộc cùng network block.',
    explanationJa: '/27 は32刻みなので 0〜31 が同じblockです。.31はbroadcastですが同じnetwork blockです。',
    examTipVi: 'Cùng subnet xét theo network block; usable host lại cần loại network/broadcast.', examTipJa: '同一subnetはblockで判断し、usable hostではnetwork/broadcastを除きます。',
  },

];
