import type { LessonContent } from '../../features/knowledge-graph/data/lessonContent';

const b=(nodeId:string, shortDefinitionVi:string, whyImportantVi:string, memoryTipVi:string):LessonContent=>({
  nodeId, shortDefinitionVi, shortDefinitionJa:shortDefinitionVi, whyImportantVi, whyImportantJa:whyImportantVi,
  examPatternsVi:['Output/tài liệu cần có','Câu hỏi xác nhận với khách','Rủi ro nếu làm sai'],
  examPatternsJa:['成果物','顧客への確認質問','誤った場合のリスク'],
  commonMistakesVi:['Không xác định owner/approval','Không ghi điều kiện exception','Không liên kết requirement-design-test'],
  commonMistakesJa:['owner/承認者を決めない','例外条件を書かない','要件・設計・テストを紐づけない'],
  memoryTipVi, memoryTipJa:memoryTipVi,
});

export const brseV35QualityLessons: LessonContent[] = [
  b('basic-design','基本設計 là tài liệu thiết kế ở mức đủ để khách hàng xác nhận cách hệ thống đáp ứng yêu cầu.','Nó là cầu nối giữa requirement và implementation; thiếu rõ ở đây sẽ làm 詳細設計 và test lệch hướng.','Trace requirement → screen/API/DB → bộ kiểm tra.'),
  b('screen-design','画面設計 mô tả layout, thao tác, trạng thái, validation và message trên màn hình.','Màn hình là nơi khách hàng dễ phát hiện khác nhận thức nhất, nên BrSE phải làm rõ rule hiển thị.','Không chỉ vẽ UI; phải ghi rule, action, error, permission.'),
  b('api-design','API設計 mô tả cách các hệ thống/frontend-backend trao đổi dữ liệu.','API là hợp đồng giữa team; sai request/response sẽ làm cả hai bên block nhau.','Endpoint + method + request + response + error + auth.'),
  b('db-design','DB設計 xác định bảng, quan hệ, key, constraint và cách lưu dữ liệu nghiệp vụ.','DB sai sẽ khó sửa về sau và ảnh hưởng report, migration, performance.','Think entity, relationship, lifecycle, constraints.'),
  b('external-interface','外部IF là kết nối với hệ thống bên ngoài như payment, accounting, ERP, API đối tác.','Rủi ro cao vì phụ thuộc hệ thống ngoài, format, deadline và error handling.','Luôn xác nhận protocol, format, retry, timeout, owner.'),
  b('batch-design','バッチ設計 mô tả xử lý định kỳ/chạy nền như import/export, billing, sync data.','Batch lỗi có thể gây sai dữ liệu hàng loạt nên cần log, retry, alert và rollback.','Batch cần schedule, input, output, error, rerun rule.'),
  b('sequence-diagram','シーケンス図 mô tả thứ tự tương tác giữa actor, screen, API, DB, external system.','Giúp phát hiện thiếu bước, sai thứ tự xử lý hoặc thiếu error handling.','Sequence tốt trả lời: ai gọi ai, khi nào, data gì, lỗi thì sao.'),
  b('state-diagram','状態遷移図 mô tả các trạng thái và điều kiện chuyển trạng thái của đối tượng nghiệp vụ.','Cực quan trọng với order, approval, ticket, payment vì lỗi state gây bug nghiệp vụ.','State + event + guard + next state.'),
  b('test-planning','テスト計画 xác định phạm vi test, loại test, môi trường, dữ liệu, lịch và tiêu chí hoàn thành.','Không có test plan thì dễ test thiếu, UAT trễ hoặc không đủ evidence.','Plan = scope + approach + environment + data + schedule + exit criteria.'),
  b('uat','受入テスト là test để khách hàng xác nhận hệ thống đáp ứng yêu cầu.','BrSE cần chuẩn bị scenario, data, evidence và cách xử lý feedback.','UAT không chỉ test bug; là xác nhận nghiệp vụ.'),
  b('severity-priority','重要度/優先度 phân biệt mức ảnh hưởng của lỗi và thứ tự xử lý.','Severity cao chưa chắc priority cao nếu ít impact release; cần thống nhất với khách.','Severity = impact; priority = order to fix.'),
  b('root-cause','原因分析 tìm nguyên nhân gốc thay vì chỉ sửa triệu chứng.','Giúp phòng tái phát và tăng niềm tin sau incident/bug nghiêm trọng.','Ask why nhiều lần, phân biệt cause và trigger.'),
  b('approval-flow','承認フロー xác định ai có quyền chấp nhận thay đổi, release, estimate hoặc scope.','Không có approval rõ sẽ gây tranh cãi về trách nhiệm và chi phí.','Decision cần approver, date, evidence.'),
  b('delay-report','遅延報告 báo cáo trễ tiến độ kèm nguyên nhân, impact và phương án phục hồi.','BrSE phải báo sớm; báo trễ hơn deadline làm mất niềm tin.','Delay report = reason + impact + recovery plan + support needed.'),
  b('rollback-plan','切り戻し計画 là kế hoạch quay lại trạng thái trước nếu release lỗi.','Không có rollback plan thì release rủi ro cao và downtime kéo dài.','Rollback cần trigger, step, owner, time limit, data handling.'),
];
