export interface PythonV89RPortfolioProject {
  id: string;
  track: 'cli' | 'data' | 'backend' | 'testing';
  titleVi: string;
  titleJa: string;
  goalVi: string;
  goalJa: string;
  deliverables: string[];
  acceptanceTests: string[];
  readmeChecklist: string[];
  relatedNodeIds: string[];
  starterSnippet: string;
}

export const pythonV89RPortfolioProjects: PythonV89RPortfolioProject[] = [
  {
    id: 'v89r-cli-study-todo',
    track: 'cli',
    titleVi: 'CLI Study Todo — argparse + JSON local',
    titleJa: 'CLI Study Todo — argparse と JSON local 保存',
    goalVi: 'Tạo tool dòng lệnh quản lý task học: add/list/done, lưu JSON, không cần backend.',
    goalJa: 'add/list/done を持つ学習task CLIを作り、JSONにlocal保存します。backend不要です。',
    deliverables: ['study_todo.py', 'data/tasks.json sample', 'README chạy lệnh add/list/done', 'pytest cho add/done edge cases'],
    acceptanceTests: ['python study_todo.py add "DP trace" tạo task mới', 'python study_todo.py list hiển thị pending trước done', 'done id không tồn tại trả lỗi rõ ràng'],
    readmeChecklist: ['Mục tiêu project', 'Cách chạy local', 'Ví dụ input/output', 'Edge cases đã xử lý', 'Điều muốn cải thiện tiếp'],
    relatedNodeIds: ['python-file-handling', 'python-exception', 'python-testing'],
    starterSnippet: 'import argparse, json\nfrom pathlib import Path\n\nDATA = Path("data/tasks.json")\n\ndef load_tasks():\n    if not DATA.exists():\n        return []\n    return json.loads(DATA.read_text(encoding="utf-8"))\n',
  },
  {
    id: 'v89r-csv-analyzer',
    track: 'data',
    titleVi: 'CSV Analyzer — parse, aggregate, report',
    titleJa: 'CSV Analyzer — parse, aggregate, report',
    goalVi: 'Đọc CSV sales nhỏ, gom nhóm theo product/month, xuất summary sạch và test được.',
    goalJa: '小さなsales CSVを読み、product/monthで集計し、test可能なsummaryを出します。',
    deliverables: ['csv_analyzer.py', 'samples/sales.csv', 'tests/test_csv_analyzer.py', 'README có bảng expected output'],
    acceptanceTests: ['Bỏ qua dòng header đúng cách', 'Dòng amount rỗng báo lỗi validation', 'Cùng product nhiều dòng được cộng đúng'],
    readmeChecklist: ['Schema CSV', 'Cách chạy với file sample', 'Expected summary', 'Validation errors', 'Complexity ngắn'],
    relatedNodeIds: ['python-data-structures', 'python-file-handling', 'python-function'],
    starterSnippet: 'import csv\nfrom collections import defaultdict\n\ndef summarize_sales(path):\n    totals = defaultdict(int)\n    with open(path, newline="", encoding="utf-8") as f:\n        for row in csv.DictReader(f):\n            totals[row["product"]] += int(row["amount"])\n    return dict(totals)\n',
  },
  {
    id: 'v89r-fastapi-mini-backend',
    track: 'backend',
    titleVi: 'FastAPI Mini Backend — todos + validation + errors',
    titleJa: 'FastAPI Mini Backend — todos + validation + errors',
    goalVi: 'Làm backend local-only có /health, CRUD todos in-memory, Pydantic schema và HTTPException rõ ràng.',
    goalJa: 'local-only backendとして /health と in-memory todo CRUD、Pydantic schema、HTTPExceptionを実装します。',
    deliverables: ['app/main.py', 'app/schemas.py', 'tests/test_api.py', 'README curl/httpie examples'],
    acceptanceTests: ['GET /health trả {"ok": true}', 'POST /todos reject title rỗng', 'GET /todos/{id} không tồn tại trả 404 JSON rõ'],
    readmeChecklist: ['Endpoint list', 'Request/response examples', 'Error examples', 'Cách chạy uvicorn', 'Test command'],
    relatedNodeIds: ['python-fastapi', 'python-exception', 'python-testing'],
    starterSnippet: 'from fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel, Field\n\napp = FastAPI()\n\nclass TodoCreate(BaseModel):\n    title: str = Field(min_length=1)\n\n@app.get("/health")\ndef health():\n    return {"ok": True}\n',
  },
  {
    id: 'v89r-test-first-katas',
    track: 'testing',
    titleVi: 'Test-first Katas — edge case notebook',
    titleJa: 'Test-first Katas — edge case notebook',
    goalVi: 'Tập viết test trước cho 5 hàm nhỏ: normalize, group, validate, parse, rank.',
    goalJa: 'normalize/group/validate/parse/rank の5関数で先にtestを書く練習です。',
    deliverables: ['katas.py', 'tests/test_katas.py', 'README ghi chiến lược test'],
    acceptanceTests: ['Có test empty input', 'Có test duplicate/tie-break', 'Có test invalid input exception'],
    readmeChecklist: ['Danh sách kata', 'Test matrix', 'Edge case quan trọng', 'Cách đọc failure', 'Refactor notes'],
    relatedNodeIds: ['python-testing', 'python-function', 'python-algorithm'],
    starterSnippet: 'def normalize_name(name: str) -> str:\n    return " ".join(name.strip().title().split())\n\ndef test_normalize_name():\n    assert normalize_name("  long   nguyen ") == "Long Nguyen"\n',
  },
];
