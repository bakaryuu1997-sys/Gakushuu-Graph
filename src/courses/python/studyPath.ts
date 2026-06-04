import type { StudyPathPhase } from '../../features/knowledge-graph/data/studyPath';

export const pythonStudyPath: StudyPathPhase[] = [
  {
    "id": "py-start",
    "titleVi": "Nền tảng Python",
    "titleJa": "Python基礎",
    "goalVi": "Biến, kiểu dữ liệu, if/loop/function để bắt đầu code.",
    "goalJa": "変数・型・条件分岐・loop・関数を学びます.",
    "nodeIds": [
      "python-roadmap",
      "python-setup",
      "python-variable",
      "python-string",
      "python-if",
      "python-for",
      "python-function"
    ]
  },
  {
    "id": "py-data",
    "titleVi": "Data structures",
    "titleJa": "データ構造",
    "goalVi": "List/dict/set/file để xử lý dữ liệu.",
    "goalJa": "list/dict/set/fileでデータ処理を学びます.",
    "nodeIds": [
      "python-list",
      "python-dict",
      "python-set",
      "python-file",
      "python-csv",
      "python-json"
    ]
  },
  {
    "id": "py-algo",
    "titleVi": "Thuật toán",
    "titleJa": "アルゴリズム",
    "goalVi": "Search, stack, recursion, DP và edge case.",
    "goalJa": "探索・stack・再帰・DP・境界値を学びます.",
    "nodeIds": [
      "algorithm-thinking",
      "big-o",
      "binary-search",
      "two-pointers",
      "sliding-window",
      "stack-algorithm",
      "recursion",
      "dynamic-programming"
    ]
  },
  {
    "id": "py-oop",
    "titleVi": "OOP",
    "titleJa": "OOP",
    "goalVi": "Class, object, service và composition.",
    "goalJa": "class/object/service/compositionを学びます.",
    "nodeIds": [
      "python-class",
      "python-object",
      "python-dataclass",
      "python-composition"
    ]
  },
  {
    "id": "py-fastapi",
    "titleVi": "FastAPI only",
    "titleJa": "FastAPI only",
    "goalVi": "Routing, Pydantic, HTTPException và AI serving.",
    "goalJa": "routing、Pydantic、HTTPException、AI servingを学びます.",
    "nodeIds": [
      "fastapi-intro",
      "fastapi-routing",
      "pydantic-model",
      "fastapi-http-exception",
      "fastapi-ai-serving"
    ]
  },
  {
    "id": "py-project",
    "titleVi": "Mini projects",
    "titleJa": "Mini Projects",
    "goalVi": "Làm CLI/API nhỏ có test và checklist.",
    "goalJa": "小さなCLI/API projectをtestとchecklistで作ります.",
    "nodeIds": [
      "mini-calculator",
      "mini-todo",
      "mini-csv-analyzer",
      "mini-fastapi-todo",
      "mini-fastapi-ai"
    ]
  }
];
