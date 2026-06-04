export interface V91RReleaseUxMilestone {
  version: string;
  title: string;
  status: 'complete' | 'recommended-next';
  summaryVi: string;
  summaryJa: string;
}

export const v91rReleaseUxMilestones: V91RReleaseUxMilestone[] = [
  { version: 'V78R', title: 'Python practical polish', status: 'complete', summaryVi: 'Python bớt generic bằng deep examples và FastAPI blueprint.', summaryJa: 'Pythonに具体例とFastAPI blueprintを追加。' },
  { version: 'V79R', title: '科目B mastery', status: 'complete', summaryVi: 'Thêm hard trace cho DP, BFS, recursion, stack và security log.', summaryJa: 'DP/BFS/recursion/stack/security logのhard traceを追加。' },
  { version: 'V80R-V83R', title: 'Grader + mixed FE + cleanup', status: 'complete', summaryVi: 'Python grader, FE mixed mini-set, refactor nhẹ và cleanup local release.', summaryJa: 'Python grader、FE mixed mini-set、軽いrefactor、local release cleanup。' },
  { version: 'V84R-V87R', title: 'Release candidate', status: 'complete', summaryVi: 'Python deep polish batch 2, 科目B trace bank và UI filter/search.', summaryJa: 'Python deep polish第2弾、科目B trace bank、UI filter/search。' },
  { version: 'V88R-V91R', title: 'No-timer final UX', status: 'complete', summaryVi: 'Audit consistency, Python portfolio, no-timer FE mock và release roadmap.', summaryJa: 'consistency audit、Python portfolio、timerなしFE mock、release roadmap。' },
  { version: 'V92R+', title: 'Optional polishing', status: 'recommended-next', summaryVi: 'Chỉ nên làm nếu muốn: search toàn cục, export markdown, thêm đề FE/Python nâng cao.', summaryJa: '必要ならglobal search、markdown export、FE/Python追加問題。' },
];

export const v91rSevenDayRoute = [
  'Day 1: Python Code Lab V80R — làm 2 bài visible/hidden tests.',
  'Day 2: Python Portfolio V89R — chọn CLI hoặc CSV analyzer, viết README trước.',
  'Day 3: Python FastAPI — chạy /health, validation và 404 demo.',
  'Day 4: 基本情報 科目B — làm DP/stack/queue trace không nhìn đáp án.',
  'Day 5: 基本情報 SQL/network/security — làm mixed mini-set không timer.',
  'Day 6: AI Passport — review ethics/business/legal weak nodes.',
  'Day 7: Backup local progress, đọc release dashboard, chọn task tuần sau.',
];
