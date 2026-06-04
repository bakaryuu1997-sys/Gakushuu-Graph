import type { Importance, KnowledgeCategory, NodeLevel } from '../../features/knowledge-graph/types';
import { pythonV84RDeepPolishLessons } from './v84rLessonDeepPolish';
import { buildPythonV101LessonFields } from './v101EasyLessonPack';

export interface PythonCatalogItem { id:string; labelJa:string; labelVi:string; labelEn:string; category:KnowledgeCategory; level:NodeLevel; importance:Importance; phase:string; prerequisites:string[]; definitionVi:string; definitionJa:string; whyImportantVi:string; whyImportantJa:string; examPatternsVi:string[]; examPatternsJa:string[]; commonMistakesVi:string[]; commonMistakesJa:string[]; memoryTipVi:string; memoryTipJa:string; examples:string[]; keywords:string[]; }

const pythonCatalogBase: PythonCatalogItem[] = [
  {
    "id": "python-roadmap",
    "labelJa": "Python Roadmap",
    "labelVi": "Python Roadmap",
    "labelEn": "Python Roadmap",
    "phase": "overview",
    "category": "software",
    "level": "root",
    "importance": "high",
    "prerequisites": [],
    "definitionVi": "Python Roadmap là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "Python RoadmapはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Python Roadmap bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はPython Roadmapを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Python Roadmap và giải thích output.",
      "Tìm bug/edge case liên quan Python Roadmap.",
      "Viết function nhỏ dùng Python Roadmap."
    ],
    "examPatternsJa": [
      "Python Roadmapを含むコードの出力を予測する。",
      "Python Roadmapに関するbugや境界値を見つける。",
      "Python Roadmapを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Python Roadmap mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "Python Roadmapを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Python Roadmap: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "Python Roadmapは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Python Roadmap",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "Python Roadmap",
      "Python Roadmap",
      "overview"
    ]
  },
  {
    "id": "python-projects",
    "labelJa": "Mini Projects",
    "labelVi": "Mini Projects",
    "labelEn": "Mini Projects",
    "phase": "project",
    "category": "software",
    "level": "major",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "Mini Projects giúp bạn ghép kiến thức Python thành sản phẩm nhỏ có yêu cầu, test và checklist rõ ràng.",
    "definitionJa": "Mini ProjectsはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Mini Projects bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はMini Projectsを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Mini Projects và giải thích output.",
      "Tìm bug/edge case liên quan Mini Projects.",
      "Viết function nhỏ dùng Mini Projects."
    ],
    "examPatternsJa": [
      "Mini Projectsを含むコードの出力を予測する。",
      "Mini Projectsに関するbugや境界値を見つける。",
      "Mini Projectsを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Mini Projects mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "Mini Projectsを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Mini Projects: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "Mini Projectsは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Mini Projects",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "Mini Projects",
      "Mini Projects",
      "project"
    ]
  },
  {
    "id": "python-fastapi",
    "labelJa": "FastAPI",
    "labelVi": "FastAPI",
    "labelEn": "FastAPI",
    "phase": "fastapi",
    "category": "software",
    "level": "major",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "FastAPI giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "FastAPIはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học FastAPI bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はFastAPIを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về FastAPI và giải thích output.",
      "Tìm bug/edge case liên quan FastAPI.",
      "Viết function nhỏ dùng FastAPI."
    ],
    "examPatternsJa": [
      "FastAPIを含むコードの出力を予測する。",
      "FastAPIに関するbugや境界値を見つける。",
      "FastAPIを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết FastAPI mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "FastAPIを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học FastAPI: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "FastAPIは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "FastAPI",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "FastAPI",
      "FastAPI",
      "fastapi"
    ]
  },
  {
    "id": "python-oop",
    "labelJa": "OOP",
    "labelVi": "OOP",
    "labelEn": "OOP",
    "phase": "oop",
    "category": "software",
    "level": "major",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "OOP là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "OOPはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học OOP bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はOOPを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về OOP và giải thích output.",
      "Tìm bug/edge case liên quan OOP.",
      "Viết function nhỏ dùng OOP."
    ],
    "examPatternsJa": [
      "OOPを含むコードの出力を予測する。",
      "OOPに関するbugや境界値を見つける。",
      "OOPを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết OOP mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "OOPを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học OOP: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "OOPは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "OOP",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "OOP",
      "OOP",
      "oop"
    ]
  },
  {
    "id": "python-algorithms",
    "labelJa": "アルゴリズム",
    "labelVi": "Algorithms",
    "labelEn": "Algorithms",
    "phase": "algorithm",
    "category": "technology",
    "level": "major",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "Algorithms giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "アルゴリズムはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Algorithms bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はアルゴリズムを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Algorithms và giải thích output.",
      "Tìm bug/edge case liên quan Algorithms.",
      "Viết function nhỏ dùng Algorithms."
    ],
    "examPatternsJa": [
      "アルゴリズムを含むコードの出力を予測する。",
      "アルゴリズムに関するbugや境界値を見つける。",
      "アルゴリズムを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Algorithms mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "アルゴリズムを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Algorithms: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "アルゴリズムは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Algorithms",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "アルゴリズム",
      "Algorithms",
      "algorithm"
    ]
  },
  {
    "id": "python-data-structures",
    "labelJa": "データ構造",
    "labelVi": "Data structures",
    "labelEn": "Data structures",
    "phase": "data",
    "category": "software",
    "level": "major",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "Data structures là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "データ構造はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Data structures bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はデータ構造を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Data structures và giải thích output.",
      "Tìm bug/edge case liên quan Data structures.",
      "Viết function nhỏ dùng Data structures."
    ],
    "examPatternsJa": [
      "データ構造を含むコードの出力を予測する。",
      "データ構造に関するbugや境界値を見つける。",
      "データ構造を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Data structures mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "データ構造を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Data structures: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "データ構造は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Data structures",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "データ構造",
      "Data structures",
      "data"
    ]
  },
  {
    "id": "python-functions",
    "labelJa": "関数設計",
    "labelVi": "Function design",
    "labelEn": "Function design",
    "phase": "function",
    "category": "software",
    "level": "major",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "Function design là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "関数設計はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Function design bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は関数設計を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Function design và giải thích output.",
      "Tìm bug/edge case liên quan Function design.",
      "Viết function nhỏ dùng Function design."
    ],
    "examPatternsJa": [
      "関数設計を含むコードの出力を予測する。",
      "関数設計に関するbugや境界値を見つける。",
      "関数設計を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Function design mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "関数設計を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Function design: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "関数設計は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Function design",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "関数設計",
      "Function design",
      "function"
    ]
  },
  {
    "id": "python-control",
    "labelJa": "制御構文",
    "labelVi": "Control flow",
    "labelEn": "Control flow",
    "phase": "control",
    "category": "software",
    "level": "major",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "Control flow là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "制御構文はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Control flow bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は制御構文を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Control flow và giải thích output.",
      "Tìm bug/edge case liên quan Control flow.",
      "Viết function nhỏ dùng Control flow."
    ],
    "examPatternsJa": [
      "制御構文を含むコードの出力を予測する。",
      "制御構文に関するbugや境界値を見つける。",
      "制御構文を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Control flow mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "制御構文を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Control flow: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "制御構文は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Control flow",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "制御構文",
      "Control flow",
      "control"
    ]
  },
  {
    "id": "python-foundation",
    "labelJa": "Python基礎",
    "labelVi": "Python nền tảng",
    "labelEn": "Python nền tảng",
    "phase": "foundation",
    "category": "software",
    "level": "major",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "Python nền tảng là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "Python基礎はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Python nền tảng bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はPython基礎を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Python nền tảng và giải thích output.",
      "Tìm bug/edge case liên quan Python nền tảng.",
      "Viết function nhỏ dùng Python nền tảng."
    ],
    "examPatternsJa": [
      "Python基礎を含むコードの出力を予測する。",
      "Python基礎に関するbugや境界値を見つける。",
      "Python基礎を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Python nền tảng mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "Python基礎を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Python nền tảng: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "Python基礎は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Python nền tảng",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "Python基礎",
      "Python nền tảng",
      "foundation"
    ]
  },
  {
    "id": "python-setup",
    "labelJa": "Python環境構築",
    "labelVi": "Cài đặt Python và môi trường",
    "labelEn": "Cài đặt Python và môi trường",
    "phase": "setup",
    "category": "software",
    "level": "major",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "Cài đặt Python và môi trường là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "Python環境構築はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Cài đặt Python và môi trường bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はPython環境構築を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Cài đặt Python và môi trường và giải thích output.",
      "Tìm bug/edge case liên quan Cài đặt Python và môi trường.",
      "Viết function nhỏ dùng Cài đặt Python và môi trường."
    ],
    "examPatternsJa": [
      "Python環境構築を含むコードの出力を予測する。",
      "Python環境構築に関するbugや境界値を見つける。",
      "Python環境構築を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Cài đặt Python và môi trường mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "Python環境構築を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Cài đặt Python và môi trường: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "Python環境構築は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Cài đặt Python và môi trường",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "Python環境構築",
      "Cài đặt Python và môi trường",
      "setup"
    ]
  },
  {
    "id": "python-repl",
    "labelJa": "REPLと実行方法",
    "labelVi": "REPL và cách chạy file .py",
    "labelEn": "REPL và cách chạy file .py",
    "phase": "setup",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-setup"
    ],
    "definitionVi": "REPL và cách chạy file .py là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "REPLと実行方法はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học REPL và cách chạy file .py bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はREPLと実行方法を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về REPL và cách chạy file .py và giải thích output.",
      "Tìm bug/edge case liên quan REPL và cách chạy file .py.",
      "Viết function nhỏ dùng REPL và cách chạy file .py."
    ],
    "examPatternsJa": [
      "REPLと実行方法を含むコードの出力を予測する。",
      "REPLと実行方法に関するbugや境界値を見つける。",
      "REPLと実行方法を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết REPL và cách chạy file .py mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "REPLと実行方法を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học REPL và cách chạy file .py: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "REPLと実行方法は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "REPL và cách chạy file .py",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "REPLと実行方法",
      "REPL và cách chạy file .py",
      "setup"
    ]
  },
  {
    "id": "python-venv",
    "labelJa": "venvとpip",
    "labelVi": "venv và pip",
    "labelEn": "venv và pip",
    "phase": "setup",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-setup"
    ],
    "definitionVi": "venv và pip là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "venvとpipはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học venv và pip bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はvenvとpipを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về venv và pip và giải thích output.",
      "Tìm bug/edge case liên quan venv và pip.",
      "Viết function nhỏ dùng venv và pip."
    ],
    "examPatternsJa": [
      "venvとpipを含むコードの出力を予測する。",
      "venvとpipに関するbugや境界値を見つける。",
      "venvとpipを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết venv và pip mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "venvとpipを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học venv và pip: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "venvとpipは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "venv và pip",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "venvとpip",
      "venv và pip",
      "setup"
    ]
  },
  {
    "id": "python-variable",
    "labelJa": "変数",
    "labelVi": "Biến",
    "labelEn": "Biến",
    "phase": "foundation",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "Biến là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "変数はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Biến bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は変数を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Biến và giải thích output.",
      "Tìm bug/edge case liên quan Biến.",
      "Viết function nhỏ dùng Biến."
    ],
    "examPatternsJa": [
      "変数を含むコードの出力を予測する。",
      "変数に関するbugや境界値を見つける。",
      "変数を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Biến mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "変数を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Biến: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "変数は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Biến",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "変数",
      "Biến",
      "foundation"
    ]
  },
  {
    "id": "python-number",
    "labelJa": "数値型",
    "labelVi": "Number",
    "labelEn": "Number",
    "phase": "foundation",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "Number là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "数値型はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Number bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は数値型を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Number và giải thích output.",
      "Tìm bug/edge case liên quan Number.",
      "Viết function nhỏ dùng Number."
    ],
    "examPatternsJa": [
      "数値型を含むコードの出力を予測する。",
      "数値型に関するbugや境界値を見つける。",
      "数値型を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Number mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "数値型を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Number: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "数値型は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Number",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "数値型",
      "Number",
      "foundation"
    ]
  },
  {
    "id": "python-string",
    "labelJa": "文字列",
    "labelVi": "String",
    "labelEn": "String",
    "phase": "foundation",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "String là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "文字列はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học String bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は文字列を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về String và giải thích output.",
      "Tìm bug/edge case liên quan String.",
      "Viết function nhỏ dùng String."
    ],
    "examPatternsJa": [
      "文字列を含むコードの出力を予測する。",
      "文字列に関するbugや境界値を見つける。",
      "文字列を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết String mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "文字列を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học String: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "文字列は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "String",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "文字列",
      "String",
      "foundation"
    ]
  },
  {
    "id": "python-bool",
    "labelJa": "真偽値",
    "labelVi": "Boolean",
    "labelEn": "Boolean",
    "phase": "foundation",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "Boolean là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "真偽値はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Boolean bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は真偽値を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Boolean và giải thích output.",
      "Tìm bug/edge case liên quan Boolean.",
      "Viết function nhỏ dùng Boolean."
    ],
    "examPatternsJa": [
      "真偽値を含むコードの出力を予測する。",
      "真偽値に関するbugや境界値を見つける。",
      "真偽値を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Boolean mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "真偽値を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Boolean: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "真偽値は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Boolean",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "真偽値",
      "Boolean",
      "foundation"
    ]
  },
  {
    "id": "python-input-output",
    "labelJa": "入出力",
    "labelVi": "Input / Output",
    "labelEn": "Input / Output",
    "phase": "foundation",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "Input / Output là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "入出力はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Input / Output bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は入出力を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Input / Output và giải thích output.",
      "Tìm bug/edge case liên quan Input / Output.",
      "Viết function nhỏ dùng Input / Output."
    ],
    "examPatternsJa": [
      "入出力を含むコードの出力を予測する。",
      "入出力に関するbugや境界値を見つける。",
      "入出力を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Input / Output mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "入出力を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Input / Output: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "入出力は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Input / Output",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "入出力",
      "Input / Output",
      "foundation"
    ]
  },
  {
    "id": "python-operator",
    "labelJa": "演算子",
    "labelVi": "Toán tử",
    "labelEn": "Toán tử",
    "phase": "foundation",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "Toán tử là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "演算子はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Toán tử bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は演算子を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Toán tử và giải thích output.",
      "Tìm bug/edge case liên quan Toán tử.",
      "Viết function nhỏ dùng Toán tử."
    ],
    "examPatternsJa": [
      "演算子を含むコードの出力を予測する。",
      "演算子に関するbugや境界値を見つける。",
      "演算子を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Toán tử mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "演算子を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Toán tử: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "演算子は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Toán tử",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "演算子",
      "Toán tử",
      "foundation"
    ]
  },
  {
    "id": "python-type-conversion",
    "labelJa": "型変換",
    "labelVi": "Ép kiểu",
    "labelEn": "Ép kiểu",
    "phase": "foundation",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "Ép kiểu là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "型変換はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Ép kiểu bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は型変換を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Ép kiểu và giải thích output.",
      "Tìm bug/edge case liên quan Ép kiểu.",
      "Viết function nhỏ dùng Ép kiểu."
    ],
    "examPatternsJa": [
      "型変換を含むコードの出力を予測する。",
      "型変換に関するbugや境界値を見つける。",
      "型変換を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Ép kiểu mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "型変換を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Ép kiểu: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "型変換は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Ép kiểu",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "型変換",
      "Ép kiểu",
      "foundation"
    ]
  },
  {
    "id": "python-fstring",
    "labelJa": "f-string",
    "labelVi": "f-string",
    "labelEn": "f-string",
    "phase": "foundation",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "f-string là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "f-stringはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học f-string bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はf-stringを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về f-string và giải thích output.",
      "Tìm bug/edge case liên quan f-string.",
      "Viết function nhỏ dùng f-string."
    ],
    "examPatternsJa": [
      "f-stringを含むコードの出力を予測する。",
      "f-stringに関するbugや境界値を見つける。",
      "f-stringを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết f-string mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "f-stringを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học f-string: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "f-stringは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "f-string",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "f-string",
      "f-string",
      "foundation"
    ]
  },
  {
    "id": "python-comment",
    "labelJa": "コメント",
    "labelVi": "Comment",
    "labelEn": "Comment",
    "phase": "foundation",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "Comment là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "コメントはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Comment bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はコメントを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Comment và giải thích output.",
      "Tìm bug/edge case liên quan Comment.",
      "Viết function nhỏ dùng Comment."
    ],
    "examPatternsJa": [
      "コメントを含むコードの出力を予測する。",
      "コメントに関するbugや境界値を見つける。",
      "コメントを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Comment mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "コメントを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Comment: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "コメントは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Comment",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "コメント",
      "Comment",
      "foundation"
    ]
  },
  {
    "id": "python-debug-print",
    "labelJa": "print debug",
    "labelVi": "Debug bằng print",
    "labelEn": "Debug bằng print",
    "phase": "foundation",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-roadmap"
    ],
    "definitionVi": "Debug bằng print là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "print debugはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Debug bằng print bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はprint debugを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Debug bằng print và giải thích output.",
      "Tìm bug/edge case liên quan Debug bằng print.",
      "Viết function nhỏ dùng Debug bằng print."
    ],
    "examPatternsJa": [
      "print debugを含むコードの出力を予測する。",
      "print debugに関するbugや境界値を見つける。",
      "print debugを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Debug bằng print mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "print debugを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Debug bằng print: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "print debugは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Debug bằng print",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "print debug",
      "Debug bằng print",
      "foundation"
    ]
  },
  {
    "id": "python-if",
    "labelJa": "if / elif / else",
    "labelVi": "if / elif / else",
    "labelEn": "if / elif / else",
    "phase": "control",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-variable"
    ],
    "definitionVi": "if / elif / else là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "if / elif / elseはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học if / elif / else bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はif / elif / elseを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về if / elif / else và giải thích output.",
      "Tìm bug/edge case liên quan if / elif / else.",
      "Viết function nhỏ dùng if / elif / else."
    ],
    "examPatternsJa": [
      "if / elif / elseを含むコードの出力を予測する。",
      "if / elif / elseに関するbugや境界値を見つける。",
      "if / elif / elseを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết if / elif / else mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "if / elif / elseを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học if / elif / else: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "if / elif / elseは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "if / elif / else",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "if / elif / else",
      "if / elif / else",
      "control"
    ]
  },
  {
    "id": "python-for",
    "labelJa": "for loop",
    "labelVi": "Vòng lặp for",
    "labelEn": "Vòng lặp for",
    "phase": "control",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-variable"
    ],
    "definitionVi": "Vòng lặp for là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "for loopはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Vòng lặp for bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はfor loopを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Vòng lặp for và giải thích output.",
      "Tìm bug/edge case liên quan Vòng lặp for.",
      "Viết function nhỏ dùng Vòng lặp for."
    ],
    "examPatternsJa": [
      "for loopを含むコードの出力を予測する。",
      "for loopに関するbugや境界値を見つける。",
      "for loopを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Vòng lặp for mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "for loopを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Vòng lặp for: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "for loopは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Vòng lặp for",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "for loop",
      "Vòng lặp for",
      "control"
    ]
  },
  {
    "id": "python-while",
    "labelJa": "while loop",
    "labelVi": "Vòng lặp while",
    "labelEn": "Vòng lặp while",
    "phase": "control",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-variable"
    ],
    "definitionVi": "Vòng lặp while là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "while loopはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Vòng lặp while bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はwhile loopを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Vòng lặp while và giải thích output.",
      "Tìm bug/edge case liên quan Vòng lặp while.",
      "Viết function nhỏ dùng Vòng lặp while."
    ],
    "examPatternsJa": [
      "while loopを含むコードの出力を予測する。",
      "while loopに関するbugや境界値を見つける。",
      "while loopを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Vòng lặp while mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "while loopを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Vòng lặp while: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "while loopは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Vòng lặp while",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "while loop",
      "Vòng lặp while",
      "control"
    ]
  },
  {
    "id": "python-break-continue",
    "labelJa": "break / continue",
    "labelVi": "break / continue",
    "labelEn": "break / continue",
    "phase": "control",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-variable"
    ],
    "definitionVi": "break / continue là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "break / continueはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học break / continue bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はbreak / continueを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về break / continue và giải thích output.",
      "Tìm bug/edge case liên quan break / continue.",
      "Viết function nhỏ dùng break / continue."
    ],
    "examPatternsJa": [
      "break / continueを含むコードの出力を予測する。",
      "break / continueに関するbugや境界値を見つける。",
      "break / continueを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết break / continue mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "break / continueを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học break / continue: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "break / continueは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "break / continue",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "break / continue",
      "break / continue",
      "control"
    ]
  },
  {
    "id": "python-nested-loop",
    "labelJa": "ネストループ",
    "labelVi": "Nested loop",
    "labelEn": "Nested loop",
    "phase": "control",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-variable"
    ],
    "definitionVi": "Nested loop là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "ネストループはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Nested loop bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はネストループを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Nested loop và giải thích output.",
      "Tìm bug/edge case liên quan Nested loop.",
      "Viết function nhỏ dùng Nested loop."
    ],
    "examPatternsJa": [
      "ネストループを含むコードの出力を予測する。",
      "ネストループに関するbugや境界値を見つける。",
      "ネストループを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Nested loop mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "ネストループを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Nested loop: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "ネストループは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Nested loop",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "ネストループ",
      "Nested loop",
      "control"
    ]
  },
  {
    "id": "python-range",
    "labelJa": "range",
    "labelVi": "range",
    "labelEn": "range",
    "phase": "control",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-variable"
    ],
    "definitionVi": "range là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "rangeはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học range bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はrangeを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về range và giải thích output.",
      "Tìm bug/edge case liên quan range.",
      "Viết function nhỏ dùng range."
    ],
    "examPatternsJa": [
      "rangeを含むコードの出力を予測する。",
      "rangeに関するbugや境界値を見つける。",
      "rangeを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết range mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "rangeを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học range: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "rangeは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "range",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "range",
      "range",
      "control"
    ]
  },
  {
    "id": "python-function",
    "labelJa": "関数 def",
    "labelVi": "Function def",
    "labelEn": "Function def",
    "phase": "function",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-if"
    ],
    "definitionVi": "Function def là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "関数 defはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Function def bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は関数 defを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Function def và giải thích output.",
      "Tìm bug/edge case liên quan Function def.",
      "Viết function nhỏ dùng Function def."
    ],
    "examPatternsJa": [
      "関数 defを含むコードの出力を予測する。",
      "関数 defに関するbugや境界値を見つける。",
      "関数 defを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Function def mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "関数 defを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Function def: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "関数 defは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Function def",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "関数 def",
      "Function def",
      "function"
    ]
  },
  {
    "id": "python-parameter",
    "labelJa": "引数",
    "labelVi": "Parameter",
    "labelEn": "Parameter",
    "phase": "function",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-if"
    ],
    "definitionVi": "Parameter là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "引数はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Parameter bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は引数を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Parameter và giải thích output.",
      "Tìm bug/edge case liên quan Parameter.",
      "Viết function nhỏ dùng Parameter."
    ],
    "examPatternsJa": [
      "引数を含むコードの出力を予測する。",
      "引数に関するbugや境界値を見つける。",
      "引数を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Parameter mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "引数を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Parameter: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "引数は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Parameter",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "引数",
      "Parameter",
      "function"
    ]
  },
  {
    "id": "python-return",
    "labelJa": "戻り値",
    "labelVi": "Return",
    "labelEn": "Return",
    "phase": "function",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-if"
    ],
    "definitionVi": "Return là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "戻り値はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Return bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は戻り値を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Return và giải thích output.",
      "Tìm bug/edge case liên quan Return.",
      "Viết function nhỏ dùng Return."
    ],
    "examPatternsJa": [
      "戻り値を含むコードの出力を予測する。",
      "戻り値に関するbugや境界値を見つける。",
      "戻り値を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Return mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "戻り値を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Return: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "戻り値は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Return",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "戻り値",
      "Return",
      "function"
    ]
  },
  {
    "id": "python-scope",
    "labelJa": "スコープ",
    "labelVi": "Scope",
    "labelEn": "Scope",
    "phase": "function",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-if"
    ],
    "definitionVi": "Scope là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "スコープはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Scope bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はスコープを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Scope và giải thích output.",
      "Tìm bug/edge case liên quan Scope.",
      "Viết function nhỏ dùng Scope."
    ],
    "examPatternsJa": [
      "スコープを含むコードの出力を予測する。",
      "スコープに関するbugや境界値を見つける。",
      "スコープを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Scope mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "スコープを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Scope: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "スコープは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Scope",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "スコープ",
      "Scope",
      "function"
    ]
  },
  {
    "id": "python-lambda",
    "labelJa": "lambda",
    "labelVi": "Lambda",
    "labelEn": "Lambda",
    "phase": "function",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-if"
    ],
    "definitionVi": "Lambda là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "lambdaはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Lambda bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はlambdaを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Lambda và giải thích output.",
      "Tìm bug/edge case liên quan Lambda.",
      "Viết function nhỏ dùng Lambda."
    ],
    "examPatternsJa": [
      "lambdaを含むコードの出力を予測する。",
      "lambdaに関するbugや境界値を見つける。",
      "lambdaを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Lambda mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "lambdaを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Lambda: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "lambdaは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Lambda",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "lambda",
      "Lambda",
      "function"
    ]
  },
  {
    "id": "python-map-filter",
    "labelJa": "map / filter",
    "labelVi": "map / filter",
    "labelEn": "map / filter",
    "phase": "function",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-if"
    ],
    "definitionVi": "map / filter là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "map / filterはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học map / filter bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はmap / filterを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về map / filter và giải thích output.",
      "Tìm bug/edge case liên quan map / filter.",
      "Viết function nhỏ dùng map / filter."
    ],
    "examPatternsJa": [
      "map / filterを含むコードの出力を予測する。",
      "map / filterに関するbugや境界値を見つける。",
      "map / filterを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết map / filter mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "map / filterを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học map / filter: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "map / filterは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "map / filter",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "map / filter",
      "map / filter",
      "function"
    ]
  },
  {
    "id": "python-list",
    "labelJa": "list",
    "labelVi": "List",
    "labelEn": "List",
    "phase": "data",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "List là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "listはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học List bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はlistを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về List và giải thích output.",
      "Tìm bug/edge case liên quan List.",
      "Viết function nhỏ dùng List."
    ],
    "examPatternsJa": [
      "listを含むコードの出力を予測する。",
      "listに関するbugや境界値を見つける。",
      "listを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết List mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "listを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học List: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "listは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "List",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "list",
      "List",
      "data"
    ]
  },
  {
    "id": "python-tuple",
    "labelJa": "tuple",
    "labelVi": "Tuple",
    "labelEn": "Tuple",
    "phase": "data",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Tuple là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "tupleはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Tuple bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はtupleを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Tuple và giải thích output.",
      "Tìm bug/edge case liên quan Tuple.",
      "Viết function nhỏ dùng Tuple."
    ],
    "examPatternsJa": [
      "tupleを含むコードの出力を予測する。",
      "tupleに関するbugや境界値を見つける。",
      "tupleを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Tuple mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "tupleを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Tuple: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "tupleは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Tuple",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "tuple",
      "Tuple",
      "data"
    ]
  },
  {
    "id": "python-dict",
    "labelJa": "dict",
    "labelVi": "Dict",
    "labelEn": "Dict",
    "phase": "data",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Dict là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "dictはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Dict bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はdictを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Dict và giải thích output.",
      "Tìm bug/edge case liên quan Dict.",
      "Viết function nhỏ dùng Dict."
    ],
    "examPatternsJa": [
      "dictを含むコードの出力を予測する。",
      "dictに関するbugや境界値を見つける。",
      "dictを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Dict mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "dictを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Dict: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "dictは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Dict",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "dict",
      "Dict",
      "data"
    ]
  },
  {
    "id": "python-set",
    "labelJa": "set",
    "labelVi": "Set",
    "labelEn": "Set",
    "phase": "data",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Set là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "setはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Set bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はsetを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Set và giải thích output.",
      "Tìm bug/edge case liên quan Set.",
      "Viết function nhỏ dùng Set."
    ],
    "examPatternsJa": [
      "setを含むコードの出力を予測する。",
      "setに関するbugや境界値を見つける。",
      "setを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Set mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "setを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Set: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "setは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Set",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "set",
      "Set",
      "data"
    ]
  },
  {
    "id": "python-comprehension",
    "labelJa": "内包表記",
    "labelVi": "Comprehension",
    "labelEn": "Comprehension",
    "phase": "data",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Comprehension là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "内包表記はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Comprehension bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は内包表記を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Comprehension và giải thích output.",
      "Tìm bug/edge case liên quan Comprehension.",
      "Viết function nhỏ dùng Comprehension."
    ],
    "examPatternsJa": [
      "内包表記を含むコードの出力を予測する。",
      "内包表記に関するbugや境界値を見つける。",
      "内包表記を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Comprehension mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "内包表記を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Comprehension: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "内包表記は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Comprehension",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "内包表記",
      "Comprehension",
      "data"
    ]
  },
  {
    "id": "python-string-methods",
    "labelJa": "文字列メソッド",
    "labelVi": "String methods",
    "labelEn": "String methods",
    "phase": "data",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "String methods là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "文字列メソッドはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học String methods bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は文字列メソッドを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về String methods và giải thích output.",
      "Tìm bug/edge case liên quan String methods.",
      "Viết function nhỏ dùng String methods."
    ],
    "examPatternsJa": [
      "文字列メソッドを含むコードの出力を予測する。",
      "文字列メソッドに関するbugや境界値を見つける。",
      "文字列メソッドを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết String methods mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "文字列メソッドを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học String methods: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "文字列メソッドは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "String methods",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "文字列メソッド",
      "String methods",
      "data"
    ]
  },
  {
    "id": "python-copy-mutable",
    "labelJa": "mutable copy",
    "labelVi": "Mutable copy",
    "labelEn": "Mutable copy",
    "phase": "data",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Mutable copy là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "mutable copyはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Mutable copy bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はmutable copyを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Mutable copy và giải thích output.",
      "Tìm bug/edge case liên quan Mutable copy.",
      "Viết function nhỏ dùng Mutable copy."
    ],
    "examPatternsJa": [
      "mutable copyを含むコードの出力を予測する。",
      "mutable copyに関するbugや境界値を見つける。",
      "mutable copyを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Mutable copy mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "mutable copyを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Mutable copy: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "mutable copyは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Mutable copy",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "mutable copy",
      "Mutable copy",
      "data"
    ]
  },
  {
    "id": "python-counter",
    "labelJa": "Counter",
    "labelVi": "Counter",
    "labelEn": "Counter",
    "phase": "data",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Counter là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "CounterはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Counter bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はCounterを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Counter và giải thích output.",
      "Tìm bug/edge case liên quan Counter.",
      "Viết function nhỏ dùng Counter."
    ],
    "examPatternsJa": [
      "Counterを含むコードの出力を予測する。",
      "Counterに関するbugや境界値を見つける。",
      "Counterを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Counter mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "Counterを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Counter: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "Counterは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Counter",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "Counter",
      "Counter",
      "data"
    ]
  },
  {
    "id": "python-defaultdict",
    "labelJa": "defaultdict",
    "labelVi": "defaultdict",
    "labelEn": "defaultdict",
    "phase": "data",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "defaultdict là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "defaultdictはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học defaultdict bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はdefaultdictを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về defaultdict và giải thích output.",
      "Tìm bug/edge case liên quan defaultdict.",
      "Viết function nhỏ dùng defaultdict."
    ],
    "examPatternsJa": [
      "defaultdictを含むコードの出力を予測する。",
      "defaultdictに関するbugや境界値を見つける。",
      "defaultdictを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết defaultdict mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "defaultdictを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học defaultdict: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "defaultdictは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "defaultdict",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "defaultdict",
      "defaultdict",
      "data"
    ]
  },
  {
    "id": "python-deque",
    "labelJa": "deque",
    "labelVi": "deque",
    "labelEn": "deque",
    "phase": "data",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "deque là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "dequeはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học deque bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はdequeを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về deque và giải thích output.",
      "Tìm bug/edge case liên quan deque.",
      "Viết function nhỏ dùng deque."
    ],
    "examPatternsJa": [
      "dequeを含むコードの出力を予測する。",
      "dequeに関するbugや境界値を見つける。",
      "dequeを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết deque mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "dequeを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học deque: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "dequeは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "deque",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "deque",
      "deque",
      "data"
    ]
  },
  {
    "id": "python-file",
    "labelJa": "ファイル操作",
    "labelVi": "File I/O",
    "labelEn": "File I/O",
    "phase": "file",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "File I/O là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "ファイル操作はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học File I/O bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はファイル操作を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về File I/O và giải thích output.",
      "Tìm bug/edge case liên quan File I/O.",
      "Viết function nhỏ dùng File I/O."
    ],
    "examPatternsJa": [
      "ファイル操作を含むコードの出力を予測する。",
      "ファイル操作に関するbugや境界値を見つける。",
      "ファイル操作を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết File I/O mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "ファイル操作を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học File I/O: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "ファイル操作は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "File I/O",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "ファイル操作",
      "File I/O",
      "file"
    ]
  },
  {
    "id": "python-csv",
    "labelJa": "CSV処理",
    "labelVi": "CSV processing",
    "labelEn": "CSV processing",
    "phase": "file",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "CSV processing là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "CSV処理はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học CSV processing bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はCSV処理を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về CSV processing và giải thích output.",
      "Tìm bug/edge case liên quan CSV processing.",
      "Viết function nhỏ dùng CSV processing."
    ],
    "examPatternsJa": [
      "CSV処理を含むコードの出力を予測する。",
      "CSV処理に関するbugや境界値を見つける。",
      "CSV処理を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết CSV processing mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "CSV処理を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học CSV processing: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "CSV処理は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "CSV processing",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "CSV処理",
      "CSV processing",
      "file"
    ]
  },
  {
    "id": "python-json",
    "labelJa": "JSON処理",
    "labelVi": "JSON processing",
    "labelEn": "JSON processing",
    "phase": "file",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "JSON processing là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "JSON処理はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học JSON processing bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はJSON処理を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về JSON processing và giải thích output.",
      "Tìm bug/edge case liên quan JSON processing.",
      "Viết function nhỏ dùng JSON processing."
    ],
    "examPatternsJa": [
      "JSON処理を含むコードの出力を予測する。",
      "JSON処理に関するbugや境界値を見つける。",
      "JSON処理を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết JSON processing mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "JSON処理を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học JSON processing: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "JSON処理は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "JSON processing",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "JSON処理",
      "JSON processing",
      "file"
    ]
  },
  {
    "id": "python-pathlib",
    "labelJa": "pathlib",
    "labelVi": "pathlib",
    "labelEn": "pathlib",
    "phase": "file",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "pathlib là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "pathlibはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học pathlib bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はpathlibを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về pathlib và giải thích output.",
      "Tìm bug/edge case liên quan pathlib.",
      "Viết function nhỏ dùng pathlib."
    ],
    "examPatternsJa": [
      "pathlibを含むコードの出力を予測する。",
      "pathlibに関するbugや境界値を見つける。",
      "pathlibを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết pathlib mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "pathlibを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học pathlib: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "pathlibは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "pathlib",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "pathlib",
      "pathlib",
      "file"
    ]
  },
  {
    "id": "python-context-manager",
    "labelJa": "with文",
    "labelVi": "Context manager",
    "labelEn": "Context manager",
    "phase": "file",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Context manager là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "with文はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Context manager bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はwith文を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Context manager và giải thích output.",
      "Tìm bug/edge case liên quan Context manager.",
      "Viết function nhỏ dùng Context manager."
    ],
    "examPatternsJa": [
      "with文を含むコードの出力を予測する。",
      "with文に関するbugや境界値を見つける。",
      "with文を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Context manager mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "with文を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Context manager: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "with文は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Context manager",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "with文",
      "Context manager",
      "file"
    ]
  },
  {
    "id": "python-error",
    "labelJa": "例外処理",
    "labelVi": "Error handling",
    "labelEn": "Error handling",
    "phase": "debug",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Error handling là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "例外処理はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Error handling bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は例外処理を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Error handling và giải thích output.",
      "Tìm bug/edge case liên quan Error handling.",
      "Viết function nhỏ dùng Error handling."
    ],
    "examPatternsJa": [
      "例外処理を含むコードの出力を予測する。",
      "例外処理に関するbugや境界値を見つける。",
      "例外処理を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Error handling mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "例外処理を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Error handling: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "例外処理は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Error handling",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "例外処理",
      "Error handling",
      "debug"
    ]
  },
  {
    "id": "python-raise",
    "labelJa": "raise",
    "labelVi": "raise",
    "labelEn": "raise",
    "phase": "debug",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "raise là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "raiseはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học raise bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はraiseを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về raise và giải thích output.",
      "Tìm bug/edge case liên quan raise.",
      "Viết function nhỏ dùng raise."
    ],
    "examPatternsJa": [
      "raiseを含むコードの出力を予測する。",
      "raiseに関するbugや境界値を見つける。",
      "raiseを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết raise mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "raiseを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học raise: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "raiseは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "raise",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "raise",
      "raise",
      "debug"
    ]
  },
  {
    "id": "python-custom-exception",
    "labelJa": "独自例外",
    "labelVi": "Custom exception",
    "labelEn": "Custom exception",
    "phase": "debug",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Custom exception là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "独自例外はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Custom exception bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は独自例外を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Custom exception và giải thích output.",
      "Tìm bug/edge case liên quan Custom exception.",
      "Viết function nhỏ dùng Custom exception."
    ],
    "examPatternsJa": [
      "独自例外を含むコードの出力を予測する。",
      "独自例外に関するbugや境界値を見つける。",
      "独自例外を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Custom exception mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "独自例外を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Custom exception: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "独自例外は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Custom exception",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "独自例外",
      "Custom exception",
      "debug"
    ]
  },
  {
    "id": "python-traceback",
    "labelJa": "traceback読解",
    "labelVi": "Đọc traceback",
    "labelEn": "Đọc traceback",
    "phase": "debug",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Đọc traceback là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "traceback読解はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Đọc traceback bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はtraceback読解を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Đọc traceback và giải thích output.",
      "Tìm bug/edge case liên quan Đọc traceback.",
      "Viết function nhỏ dùng Đọc traceback."
    ],
    "examPatternsJa": [
      "traceback読解を含むコードの出力を予測する。",
      "traceback読解に関するbugや境界値を見つける。",
      "traceback読解を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Đọc traceback mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "traceback読解を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Đọc traceback: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "traceback読解は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Đọc traceback",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "traceback読解",
      "Đọc traceback",
      "debug"
    ]
  },
  {
    "id": "python-logging",
    "labelJa": "logging",
    "labelVi": "Logging",
    "labelEn": "Logging",
    "phase": "debug",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Logging là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "loggingはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Logging bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はloggingを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Logging và giải thích output.",
      "Tìm bug/edge case liên quan Logging.",
      "Viết function nhỏ dùng Logging."
    ],
    "examPatternsJa": [
      "loggingを含むコードの出力を予測する。",
      "loggingに関するbugや境界値を見つける。",
      "loggingを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Logging mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "loggingを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Logging: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "loggingは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Logging",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "logging",
      "Logging",
      "debug"
    ]
  },
  {
    "id": "python-breakpoint",
    "labelJa": "breakpoint",
    "labelVi": "Debugger / breakpoint",
    "labelEn": "Debugger / breakpoint",
    "phase": "debug",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Debugger / breakpoint là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "breakpointはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Debugger / breakpoint bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はbreakpointを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Debugger / breakpoint và giải thích output.",
      "Tìm bug/edge case liên quan Debugger / breakpoint.",
      "Viết function nhỏ dùng Debugger / breakpoint."
    ],
    "examPatternsJa": [
      "breakpointを含むコードの出力を予測する。",
      "breakpointに関するbugや境界値を見つける。",
      "breakpointを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Debugger / breakpoint mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "breakpointを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Debugger / breakpoint: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "breakpointは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Debugger / breakpoint",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "breakpoint",
      "Debugger / breakpoint",
      "debug"
    ]
  },
  {
    "id": "python-class",
    "labelJa": "class",
    "labelVi": "Class",
    "labelEn": "Class",
    "phase": "oop",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Class là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "classはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Class bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はclassを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Class và giải thích output.",
      "Tìm bug/edge case liên quan Class.",
      "Viết function nhỏ dùng Class."
    ],
    "examPatternsJa": [
      "classを含むコードの出力を予測する。",
      "classに関するbugや境界値を見つける。",
      "classを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Class mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "classを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Class: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "classは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Class",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "class",
      "Class",
      "oop"
    ]
  },
  {
    "id": "python-object",
    "labelJa": "object",
    "labelVi": "Object",
    "labelEn": "Object",
    "phase": "oop",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Object là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "objectはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Object bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はobjectを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Object và giải thích output.",
      "Tìm bug/edge case liên quan Object.",
      "Viết function nhỏ dùng Object."
    ],
    "examPatternsJa": [
      "objectを含むコードの出力を予測する。",
      "objectに関するbugや境界値を見つける。",
      "objectを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Object mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "objectを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Object: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "objectは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Object",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "object",
      "Object",
      "oop"
    ]
  },
  {
    "id": "python-init",
    "labelJa": "__init__",
    "labelVi": "__init__",
    "labelEn": "__init__",
    "phase": "oop",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "__init__ là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "__init__はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học __init__ bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は__init__を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về __init__ và giải thích output.",
      "Tìm bug/edge case liên quan __init__.",
      "Viết function nhỏ dùng __init__."
    ],
    "examPatternsJa": [
      "__init__を含むコードの出力を予測する。",
      "__init__に関するbugや境界値を見つける。",
      "__init__を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết __init__ mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "__init__を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học __init__: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "__init__は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "__init__",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "__init__",
      "__init__",
      "oop"
    ]
  },
  {
    "id": "python-method",
    "labelJa": "method",
    "labelVi": "Method",
    "labelEn": "Method",
    "phase": "oop",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Method là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "methodはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Method bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はmethodを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Method và giải thích output.",
      "Tìm bug/edge case liên quan Method.",
      "Viết function nhỏ dùng Method."
    ],
    "examPatternsJa": [
      "methodを含むコードの出力を予測する。",
      "methodに関するbugや境界値を見つける。",
      "methodを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Method mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "methodを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Method: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "methodは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Method",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "method",
      "Method",
      "oop"
    ]
  },
  {
    "id": "python-inheritance",
    "labelJa": "継承",
    "labelVi": "Inheritance",
    "labelEn": "Inheritance",
    "phase": "oop",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Inheritance là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "継承はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Inheritance bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は継承を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Inheritance và giải thích output.",
      "Tìm bug/edge case liên quan Inheritance.",
      "Viết function nhỏ dùng Inheritance."
    ],
    "examPatternsJa": [
      "継承を含むコードの出力を予測する。",
      "継承に関するbugや境界値を見つける。",
      "継承を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Inheritance mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "継承を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Inheritance: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "継承は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Inheritance",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "継承",
      "Inheritance",
      "oop"
    ]
  },
  {
    "id": "python-composition",
    "labelJa": "composition",
    "labelVi": "Composition",
    "labelEn": "Composition",
    "phase": "oop",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Composition là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "compositionはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Composition bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はcompositionを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Composition và giải thích output.",
      "Tìm bug/edge case liên quan Composition.",
      "Viết function nhỏ dùng Composition."
    ],
    "examPatternsJa": [
      "compositionを含むコードの出力を予測する。",
      "compositionに関するbugや境界値を見つける。",
      "compositionを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Composition mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "compositionを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Composition: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "compositionは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Composition",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "composition",
      "Composition",
      "oop"
    ]
  },
  {
    "id": "python-dataclass",
    "labelJa": "dataclass",
    "labelVi": "Dataclass",
    "labelEn": "Dataclass",
    "phase": "oop",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Dataclass là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "dataclassはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Dataclass bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はdataclassを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Dataclass và giải thích output.",
      "Tìm bug/edge case liên quan Dataclass.",
      "Viết function nhỏ dùng Dataclass."
    ],
    "examPatternsJa": [
      "dataclassを含むコードの出力を予測する。",
      "dataclassに関するbugや境界値を見つける。",
      "dataclassを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Dataclass mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "dataclassを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Dataclass: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "dataclassは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Dataclass",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "dataclass",
      "Dataclass",
      "oop"
    ]
  },
  {
    "id": "python-property",
    "labelJa": "@property",
    "labelVi": "@property",
    "labelEn": "@property",
    "phase": "oop",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "@property là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "@propertyはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học @property bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は@propertyを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về @property và giải thích output.",
      "Tìm bug/edge case liên quan @property.",
      "Viết function nhỏ dùng @property."
    ],
    "examPatternsJa": [
      "@propertyを含むコードの出力を予測する。",
      "@propertyに関するbugや境界値を見つける。",
      "@propertyを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết @property mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "@propertyを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học @property: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "@propertyは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "@property",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "@property",
      "@property",
      "oop"
    ]
  },
  {
    "id": "algorithm-thinking",
    "labelJa": "アルゴリズム思考",
    "labelVi": "Tư duy thuật toán",
    "labelEn": "Tư duy thuật toán",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Tư duy thuật toán giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "アルゴリズム思考はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Tư duy thuật toán bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はアルゴリズム思考を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Tư duy thuật toán và giải thích output.",
      "Tìm bug/edge case liên quan Tư duy thuật toán.",
      "Viết function nhỏ dùng Tư duy thuật toán."
    ],
    "examPatternsJa": [
      "アルゴリズム思考を含むコードの出力を予測する。",
      "アルゴリズム思考に関するbugや境界値を見つける。",
      "アルゴリズム思考を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Tư duy thuật toán mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "アルゴリズム思考を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Tư duy thuật toán: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "アルゴリズム思考は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Tư duy thuật toán",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "アルゴリズム思考",
      "Tư duy thuật toán",
      "algorithm"
    ]
  },
  {
    "id": "big-o",
    "labelJa": "計算量 Big-O",
    "labelVi": "Big-O",
    "labelEn": "Big-O",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Big-O giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "計算量 Big-OはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Big-O bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は計算量 Big-Oを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Big-O và giải thích output.",
      "Tìm bug/edge case liên quan Big-O.",
      "Viết function nhỏ dùng Big-O."
    ],
    "examPatternsJa": [
      "計算量 Big-Oを含むコードの出力を予測する。",
      "計算量 Big-Oに関するbugや境界値を見つける。",
      "計算量 Big-Oを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Big-O mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "計算量 Big-Oを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Big-O: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "計算量 Big-Oは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Big-O",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "計算量 Big-O",
      "Big-O",
      "algorithm"
    ]
  },
  {
    "id": "linear-search",
    "labelJa": "線形探索",
    "labelVi": "Linear search",
    "labelEn": "Linear search",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Linear search giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "線形探索はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Linear search bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は線形探索を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Linear search và giải thích output.",
      "Tìm bug/edge case liên quan Linear search.",
      "Viết function nhỏ dùng Linear search."
    ],
    "examPatternsJa": [
      "線形探索を含むコードの出力を予測する。",
      "線形探索に関するbugや境界値を見つける。",
      "線形探索を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Linear search mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "線形探索を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Linear search: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "線形探索は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Linear search",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "線形探索",
      "Linear search",
      "algorithm"
    ]
  },
  {
    "id": "binary-search",
    "labelJa": "二分探索",
    "labelVi": "Binary search",
    "labelEn": "Binary search",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Binary search giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "二分探索はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Binary search bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は二分探索を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Binary search và giải thích output.",
      "Tìm bug/edge case liên quan Binary search.",
      "Viết function nhỏ dùng Binary search."
    ],
    "examPatternsJa": [
      "二分探索を含むコードの出力を予測する。",
      "二分探索に関するbugや境界値を見つける。",
      "二分探索を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Binary search mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "二分探索を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Binary search: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "二分探索は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Binary search",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "二分探索",
      "Binary search",
      "algorithm"
    ]
  },
  {
    "id": "two-pointers",
    "labelJa": "two pointers",
    "labelVi": "Two pointers",
    "labelEn": "Two pointers",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Two pointers giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "two pointersはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Two pointers bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はtwo pointersを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Two pointers và giải thích output.",
      "Tìm bug/edge case liên quan Two pointers.",
      "Viết function nhỏ dùng Two pointers."
    ],
    "examPatternsJa": [
      "two pointersを含むコードの出力を予測する。",
      "two pointersに関するbugや境界値を見つける。",
      "two pointersを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Two pointers mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "two pointersを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Two pointers: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "two pointersは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Two pointers",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "two pointers",
      "Two pointers",
      "algorithm"
    ]
  },
  {
    "id": "sliding-window",
    "labelJa": "sliding window",
    "labelVi": "Sliding window",
    "labelEn": "Sliding window",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Sliding window giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "sliding windowはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Sliding window bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はsliding windowを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Sliding window và giải thích output.",
      "Tìm bug/edge case liên quan Sliding window.",
      "Viết function nhỏ dùng Sliding window."
    ],
    "examPatternsJa": [
      "sliding windowを含むコードの出力を予測する。",
      "sliding windowに関するbugや境界値を見つける。",
      "sliding windowを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Sliding window mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "sliding windowを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Sliding window: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "sliding windowは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Sliding window",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "sliding window",
      "Sliding window",
      "algorithm"
    ]
  },
  {
    "id": "prefix-sum",
    "labelJa": "prefix sum",
    "labelVi": "Prefix sum",
    "labelEn": "Prefix sum",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Prefix sum giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "prefix sumはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Prefix sum bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はprefix sumを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Prefix sum và giải thích output.",
      "Tìm bug/edge case liên quan Prefix sum.",
      "Viết function nhỏ dùng Prefix sum."
    ],
    "examPatternsJa": [
      "prefix sumを含むコードの出力を予測する。",
      "prefix sumに関するbugや境界値を見つける。",
      "prefix sumを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Prefix sum mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "prefix sumを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Prefix sum: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "prefix sumは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Prefix sum",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "prefix sum",
      "Prefix sum",
      "algorithm"
    ]
  },
  {
    "id": "frequency-counter",
    "labelJa": "frequency counter",
    "labelVi": "Frequency counter",
    "labelEn": "Frequency counter",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Frequency counter giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "frequency counterはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Frequency counter bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はfrequency counterを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Frequency counter và giải thích output.",
      "Tìm bug/edge case liên quan Frequency counter.",
      "Viết function nhỏ dùng Frequency counter."
    ],
    "examPatternsJa": [
      "frequency counterを含むコードの出力を予測する。",
      "frequency counterに関するbugや境界値を見つける。",
      "frequency counterを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Frequency counter mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "frequency counterを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Frequency counter: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "frequency counterは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Frequency counter",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "frequency counter",
      "Frequency counter",
      "algorithm"
    ]
  },
  {
    "id": "stack-algorithm",
    "labelJa": "stack",
    "labelVi": "Stack",
    "labelEn": "Stack",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Stack giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "stackはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Stack bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はstackを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Stack và giải thích output.",
      "Tìm bug/edge case liên quan Stack.",
      "Viết function nhỏ dùng Stack."
    ],
    "examPatternsJa": [
      "stackを含むコードの出力を予測する。",
      "stackに関するbugや境界値を見つける。",
      "stackを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Stack mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "stackを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Stack: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "stackは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Stack",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "stack",
      "Stack",
      "algorithm"
    ]
  },
  {
    "id": "queue-algorithm",
    "labelJa": "queue",
    "labelVi": "Queue",
    "labelEn": "Queue",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Queue giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "queueはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Queue bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はqueueを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Queue và giải thích output.",
      "Tìm bug/edge case liên quan Queue.",
      "Viết function nhỏ dùng Queue."
    ],
    "examPatternsJa": [
      "queueを含むコードの出力を予測する。",
      "queueに関するbugや境界値を見つける。",
      "queueを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Queue mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "queueを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Queue: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "queueは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Queue",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "queue",
      "Queue",
      "algorithm"
    ]
  },
  {
    "id": "recursion",
    "labelJa": "再帰",
    "labelVi": "Recursion",
    "labelEn": "Recursion",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Recursion giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "再帰はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Recursion bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は再帰を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Recursion và giải thích output.",
      "Tìm bug/edge case liên quan Recursion.",
      "Viết function nhỏ dùng Recursion."
    ],
    "examPatternsJa": [
      "再帰を含むコードの出力を予測する。",
      "再帰に関するbugや境界値を見つける。",
      "再帰を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Recursion mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "再帰を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Recursion: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "再帰は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Recursion",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "再帰",
      "Recursion",
      "algorithm"
    ]
  },
  {
    "id": "sorting",
    "labelJa": "ソート",
    "labelVi": "Sorting",
    "labelEn": "Sorting",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Sorting giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "ソートはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Sorting bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はソートを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Sorting và giải thích output.",
      "Tìm bug/edge case liên quan Sorting.",
      "Viết function nhỏ dùng Sorting."
    ],
    "examPatternsJa": [
      "ソートを含むコードの出力を予測する。",
      "ソートに関するbugや境界値を見つける。",
      "ソートを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Sorting mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "ソートを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Sorting: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "ソートは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Sorting",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "ソート",
      "Sorting",
      "algorithm"
    ]
  },
  {
    "id": "heap",
    "labelJa": "heap",
    "labelVi": "Heap",
    "labelEn": "Heap",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Heap giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "heapはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Heap bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はheapを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Heap và giải thích output.",
      "Tìm bug/edge case liên quan Heap.",
      "Viết function nhỏ dùng Heap."
    ],
    "examPatternsJa": [
      "heapを含むコードの出力を予測する。",
      "heapに関するbugや境界値を見つける。",
      "heapを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Heap mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "heapを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Heap: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "heapは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Heap",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "heap",
      "Heap",
      "algorithm"
    ]
  },
  {
    "id": "tree-traversal",
    "labelJa": "木の走査",
    "labelVi": "Tree traversal",
    "labelEn": "Tree traversal",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Tree traversal giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "木の走査はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Tree traversal bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は木の走査を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Tree traversal và giải thích output.",
      "Tìm bug/edge case liên quan Tree traversal.",
      "Viết function nhỏ dùng Tree traversal."
    ],
    "examPatternsJa": [
      "木の走査を含むコードの出力を予測する。",
      "木の走査に関するbugや境界値を見つける。",
      "木の走査を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Tree traversal mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "木の走査を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Tree traversal: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "木の走査は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Tree traversal",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "木の走査",
      "Tree traversal",
      "algorithm"
    ]
  },
  {
    "id": "graph-basics",
    "labelJa": "グラフ基礎",
    "labelVi": "Graph basics",
    "labelEn": "Graph basics",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Graph basics giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "グラフ基礎はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Graph basics bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はグラフ基礎を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Graph basics và giải thích output.",
      "Tìm bug/edge case liên quan Graph basics.",
      "Viết function nhỏ dùng Graph basics."
    ],
    "examPatternsJa": [
      "グラフ基礎を含むコードの出力を予測する。",
      "グラフ基礎に関するbugや境界値を見つける。",
      "グラフ基礎を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Graph basics mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "グラフ基礎を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Graph basics: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "グラフ基礎は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Graph basics",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "グラフ基礎",
      "Graph basics",
      "algorithm"
    ]
  },
  {
    "id": "bfs",
    "labelJa": "BFS",
    "labelVi": "BFS",
    "labelEn": "BFS",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "BFS giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "BFSはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học BFS bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はBFSを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về BFS và giải thích output.",
      "Tìm bug/edge case liên quan BFS.",
      "Viết function nhỏ dùng BFS."
    ],
    "examPatternsJa": [
      "BFSを含むコードの出力を予測する。",
      "BFSに関するbugや境界値を見つける。",
      "BFSを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết BFS mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "BFSを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học BFS: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "BFSは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "BFS",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "BFS",
      "BFS",
      "algorithm"
    ]
  },
  {
    "id": "dfs",
    "labelJa": "DFS",
    "labelVi": "DFS",
    "labelEn": "DFS",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "DFS giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "DFSはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học DFS bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はDFSを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về DFS và giải thích output.",
      "Tìm bug/edge case liên quan DFS.",
      "Viết function nhỏ dùng DFS."
    ],
    "examPatternsJa": [
      "DFSを含むコードの出力を予測する。",
      "DFSに関するbugや境界値を見つける。",
      "DFSを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết DFS mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "DFSを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học DFS: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "DFSは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "DFS",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "DFS",
      "DFS",
      "algorithm"
    ]
  },
  {
    "id": "dynamic-programming",
    "labelJa": "動的計画法",
    "labelVi": "Dynamic Programming",
    "labelEn": "Dynamic Programming",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Dynamic Programming giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "動的計画法はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Dynamic Programming bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は動的計画法を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Dynamic Programming và giải thích output.",
      "Tìm bug/edge case liên quan Dynamic Programming.",
      "Viết function nhỏ dùng Dynamic Programming."
    ],
    "examPatternsJa": [
      "動的計画法を含むコードの出力を予測する。",
      "動的計画法に関するbugや境界値を見つける。",
      "動的計画法を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Dynamic Programming mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "動的計画法を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Dynamic Programming: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "動的計画法は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Dynamic Programming",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "動的計画法",
      "Dynamic Programming",
      "algorithm"
    ]
  },
  {
    "id": "greedy",
    "labelJa": "貪欲法",
    "labelVi": "Greedy",
    "labelEn": "Greedy",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Greedy giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "貪欲法はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Greedy bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は貪欲法を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Greedy và giải thích output.",
      "Tìm bug/edge case liên quan Greedy.",
      "Viết function nhỏ dùng Greedy."
    ],
    "examPatternsJa": [
      "貪欲法を含むコードの出力を予測する。",
      "貪欲法に関するbugや境界値を見つける。",
      "貪欲法を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Greedy mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "貪欲法を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Greedy: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "貪欲法は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Greedy",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "貪欲法",
      "Greedy",
      "algorithm"
    ]
  },
  {
    "id": "edge-case",
    "labelJa": "境界値",
    "labelVi": "Edge cases",
    "labelEn": "Edge cases",
    "phase": "algorithm",
    "category": "technology",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-list"
    ],
    "definitionVi": "Edge cases giúp bạn hiểu thuật toán, dự đoán từng bước chạy và tối ưu độ phức tạp khi luyện code.",
    "definitionJa": "境界値はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Edge cases bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は境界値を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Edge cases và giải thích output.",
      "Tìm bug/edge case liên quan Edge cases.",
      "Viết function nhỏ dùng Edge cases."
    ],
    "examPatternsJa": [
      "境界値を含むコードの出力を予測する。",
      "境界値に関するbugや境界値を見つける。",
      "境界値を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Edge cases mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "境界値を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Edge cases: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "境界値は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Edge cases",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "境界値",
      "Edge cases",
      "algorithm"
    ]
  },
  {
    "id": "typing-basics",
    "labelJa": "型ヒント",
    "labelVi": "Typing basics",
    "labelEn": "Typing basics",
    "phase": "advanced-python",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Typing basics là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "型ヒントはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Typing basics bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者は型ヒントを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Typing basics và giải thích output.",
      "Tìm bug/edge case liên quan Typing basics.",
      "Viết function nhỏ dùng Typing basics."
    ],
    "examPatternsJa": [
      "型ヒントを含むコードの出力を予測する。",
      "型ヒントに関するbugや境界値を見つける。",
      "型ヒントを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Typing basics mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "型ヒントを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Typing basics: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "型ヒントは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Typing basics",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "型ヒント",
      "Typing basics",
      "advanced-python"
    ]
  },
  {
    "id": "optional-union",
    "labelJa": "Optional / Union",
    "labelVi": "Optional / Union",
    "labelEn": "Optional / Union",
    "phase": "advanced-python",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Optional / Union là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "Optional / UnionはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Optional / Union bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はOptional / Unionを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Optional / Union và giải thích output.",
      "Tìm bug/edge case liên quan Optional / Union.",
      "Viết function nhỏ dùng Optional / Union."
    ],
    "examPatternsJa": [
      "Optional / Unionを含むコードの出力を予測する。",
      "Optional / Unionに関するbugや境界値を見つける。",
      "Optional / Unionを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Optional / Union mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "Optional / Unionを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Optional / Union: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "Optional / Unionは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Optional / Union",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "Optional / Union",
      "Optional / Union",
      "advanced-python"
    ]
  },
  {
    "id": "iterator",
    "labelJa": "iterator",
    "labelVi": "Iterator",
    "labelEn": "Iterator",
    "phase": "advanced-python",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Iterator là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "iteratorはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Iterator bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はiteratorを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Iterator và giải thích output.",
      "Tìm bug/edge case liên quan Iterator.",
      "Viết function nhỏ dùng Iterator."
    ],
    "examPatternsJa": [
      "iteratorを含むコードの出力を予測する。",
      "iteratorに関するbugや境界値を見つける。",
      "iteratorを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Iterator mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "iteratorを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Iterator: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "iteratorは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Iterator",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "iterator",
      "Iterator",
      "advanced-python"
    ]
  },
  {
    "id": "generator",
    "labelJa": "generator",
    "labelVi": "Generator",
    "labelEn": "Generator",
    "phase": "advanced-python",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Generator là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "generatorはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Generator bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はgeneratorを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Generator và giải thích output.",
      "Tìm bug/edge case liên quan Generator.",
      "Viết function nhỏ dùng Generator."
    ],
    "examPatternsJa": [
      "generatorを含むコードの出力を予測する。",
      "generatorに関するbugや境界値を見つける。",
      "generatorを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Generator mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "generatorを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Generator: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "generatorは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Generator",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "generator",
      "Generator",
      "advanced-python"
    ]
  },
  {
    "id": "decorator",
    "labelJa": "decorator",
    "labelVi": "Decorator",
    "labelEn": "Decorator",
    "phase": "advanced-python",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Decorator là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "decoratorはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Decorator bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はdecoratorを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Decorator và giải thích output.",
      "Tìm bug/edge case liên quan Decorator.",
      "Viết function nhỏ dùng Decorator."
    ],
    "examPatternsJa": [
      "decoratorを含むコードの出力を予測する。",
      "decoratorに関するbugや境界値を見つける。",
      "decoratorを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Decorator mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "decoratorを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Decorator: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "decoratorは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Decorator",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "decorator",
      "Decorator",
      "advanced-python"
    ]
  },
  {
    "id": "module-package",
    "labelJa": "module/package",
    "labelVi": "Module / package",
    "labelEn": "Module / package",
    "phase": "advanced-python",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Module / package là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "module/packageはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Module / package bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はmodule/packageを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Module / package và giải thích output.",
      "Tìm bug/edge case liên quan Module / package.",
      "Viết function nhỏ dùng Module / package."
    ],
    "examPatternsJa": [
      "module/packageを含むコードの出力を予測する。",
      "module/packageに関するbugや境界値を見つける。",
      "module/packageを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Module / package mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "module/packageを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Module / package: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "module/packageは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Module / package",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "module/package",
      "Module / package",
      "advanced-python"
    ]
  },
  {
    "id": "pytest-basics",
    "labelJa": "pytest基礎",
    "labelVi": "pytest basics",
    "labelEn": "pytest basics",
    "phase": "advanced-python",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "pytest basics là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "pytest基礎はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học pytest basics bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はpytest基礎を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về pytest basics và giải thích output.",
      "Tìm bug/edge case liên quan pytest basics.",
      "Viết function nhỏ dùng pytest basics."
    ],
    "examPatternsJa": [
      "pytest基礎を含むコードの出力を予測する。",
      "pytest基礎に関するbugや境界値を見つける。",
      "pytest基礎を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết pytest basics mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "pytest基礎を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học pytest basics: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "pytest基礎は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "pytest basics",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "pytest基礎",
      "pytest basics",
      "advanced-python"
    ]
  },
  {
    "id": "pytest-parametrize",
    "labelJa": "pytest parametrize",
    "labelVi": "pytest parametrize",
    "labelEn": "pytest parametrize",
    "phase": "advanced-python",
    "category": "software",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "pytest parametrize là phần quan trọng trong Python để đọc code, viết code đúng và sửa lỗi khi làm bài thực hành.",
    "definitionJa": "pytest parametrizeはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học pytest parametrize bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はpytest parametrizeを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về pytest parametrize và giải thích output.",
      "Tìm bug/edge case liên quan pytest parametrize.",
      "Viết function nhỏ dùng pytest parametrize."
    ],
    "examPatternsJa": [
      "pytest parametrizeを含むコードの出力を予測する。",
      "pytest parametrizeに関するbugや境界値を見つける。",
      "pytest parametrizeを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết pytest parametrize mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "pytest parametrizeを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học pytest parametrize: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "pytest parametrizeは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "pytest parametrize",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "pytest parametrize",
      "pytest parametrize",
      "advanced-python"
    ]
  },
  {
    "id": "fastapi-intro",
    "labelJa": "FastAPI概要",
    "labelVi": "FastAPI overview",
    "labelEn": "FastAPI overview",
    "phase": "fastapi",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "FastAPI overview giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "FastAPI概要はPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học FastAPI overview bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はFastAPI概要を短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về FastAPI overview và giải thích output.",
      "Tìm bug/edge case liên quan FastAPI overview.",
      "Viết function nhỏ dùng FastAPI overview."
    ],
    "examPatternsJa": [
      "FastAPI概要を含むコードの出力を予測する。",
      "FastAPI概要に関するbugや境界値を見つける。",
      "FastAPI概要を使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết FastAPI overview mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "FastAPI概要を読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học FastAPI overview: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "FastAPI概要は、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "FastAPI overview",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "FastAPI概要",
      "FastAPI overview",
      "fastapi"
    ]
  },
  {
    "id": "fastapi-routing",
    "labelJa": "FastAPI routing",
    "labelVi": "FastAPI routing",
    "labelEn": "FastAPI routing",
    "phase": "fastapi",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "FastAPI routing giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "FastAPI routingはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học FastAPI routing bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はFastAPI routingを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về FastAPI routing và giải thích output.",
      "Tìm bug/edge case liên quan FastAPI routing.",
      "Viết function nhỏ dùng FastAPI routing."
    ],
    "examPatternsJa": [
      "FastAPI routingを含むコードの出力を予測する。",
      "FastAPI routingに関するbugや境界値を見つける。",
      "FastAPI routingを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết FastAPI routing mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "FastAPI routingを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học FastAPI routing: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "FastAPI routingは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "FastAPI routing",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "FastAPI routing",
      "FastAPI routing",
      "fastapi"
    ]
  },
  {
    "id": "fastapi-path-query",
    "labelJa": "path/query parameter",
    "labelVi": "Path / query parameter",
    "labelEn": "Path / query parameter",
    "phase": "fastapi",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Path / query parameter giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "path/query parameterはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Path / query parameter bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はpath/query parameterを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Path / query parameter và giải thích output.",
      "Tìm bug/edge case liên quan Path / query parameter.",
      "Viết function nhỏ dùng Path / query parameter."
    ],
    "examPatternsJa": [
      "path/query parameterを含むコードの出力を予測する。",
      "path/query parameterに関するbugや境界値を見つける。",
      "path/query parameterを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Path / query parameter mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "path/query parameterを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Path / query parameter: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "path/query parameterは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Path / query parameter",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "path/query parameter",
      "Path / query parameter",
      "fastapi"
    ]
  },
  {
    "id": "fastapi-request-body",
    "labelJa": "request body",
    "labelVi": "Request body",
    "labelEn": "Request body",
    "phase": "fastapi",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Request body giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "request bodyはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Request body bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はrequest bodyを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Request body và giải thích output.",
      "Tìm bug/edge case liên quan Request body.",
      "Viết function nhỏ dùng Request body."
    ],
    "examPatternsJa": [
      "request bodyを含むコードの出力を予測する。",
      "request bodyに関するbugや境界値を見つける。",
      "request bodyを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Request body mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "request bodyを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Request body: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "request bodyは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Request body",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "request body",
      "Request body",
      "fastapi"
    ]
  },
  {
    "id": "pydantic-model",
    "labelJa": "Pydantic model",
    "labelVi": "Pydantic model",
    "labelEn": "Pydantic model",
    "phase": "fastapi",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Pydantic model giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "Pydantic modelはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Pydantic model bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はPydantic modelを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Pydantic model và giải thích output.",
      "Tìm bug/edge case liên quan Pydantic model.",
      "Viết function nhỏ dùng Pydantic model."
    ],
    "examPatternsJa": [
      "Pydantic modelを含むコードの出力を予測する。",
      "Pydantic modelに関するbugや境界値を見つける。",
      "Pydantic modelを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Pydantic model mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "Pydantic modelを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Pydantic model: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "Pydantic modelは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Pydantic model",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "Pydantic model",
      "Pydantic model",
      "fastapi"
    ]
  },
  {
    "id": "fastapi-response-model",
    "labelJa": "response model",
    "labelVi": "Response model",
    "labelEn": "Response model",
    "phase": "fastapi",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Response model giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "response modelはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Response model bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はresponse modelを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Response model và giải thích output.",
      "Tìm bug/edge case liên quan Response model.",
      "Viết function nhỏ dùng Response model."
    ],
    "examPatternsJa": [
      "response modelを含むコードの出力を予測する。",
      "response modelに関するbugや境界値を見つける。",
      "response modelを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Response model mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "response modelを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Response model: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "response modelは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Response model",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "response model",
      "Response model",
      "fastapi"
    ]
  },
  {
    "id": "fastapi-http-exception",
    "labelJa": "HTTPException",
    "labelVi": "HTTPException",
    "labelEn": "HTTPException",
    "phase": "fastapi",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "HTTPException giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "HTTPExceptionはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học HTTPException bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はHTTPExceptionを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về HTTPException và giải thích output.",
      "Tìm bug/edge case liên quan HTTPException.",
      "Viết function nhỏ dùng HTTPException."
    ],
    "examPatternsJa": [
      "HTTPExceptionを含むコードの出力を予測する。",
      "HTTPExceptionに関するbugや境界値を見つける。",
      "HTTPExceptionを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết HTTPException mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "HTTPExceptionを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học HTTPException: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "HTTPExceptionは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "HTTPException",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "HTTPException",
      "HTTPException",
      "fastapi"
    ]
  },
  {
    "id": "fastapi-dependency",
    "labelJa": "dependency injection",
    "labelVi": "Dependency injection",
    "labelEn": "Dependency injection",
    "phase": "fastapi",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Dependency injection giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "dependency injectionはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Dependency injection bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はdependency injectionを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Dependency injection và giải thích output.",
      "Tìm bug/edge case liên quan Dependency injection.",
      "Viết function nhỏ dùng Dependency injection."
    ],
    "examPatternsJa": [
      "dependency injectionを含むコードの出力を予測する。",
      "dependency injectionに関するbugや境界値を見つける。",
      "dependency injectionを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Dependency injection mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "dependency injectionを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Dependency injection: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "dependency injectionは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Dependency injection",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "dependency injection",
      "Dependency injection",
      "fastapi"
    ]
  },
  {
    "id": "fastapi-router",
    "labelJa": "APIRouter",
    "labelVi": "APIRouter",
    "labelEn": "APIRouter",
    "phase": "fastapi",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "APIRouter giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "APIRouterはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học APIRouter bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はAPIRouterを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về APIRouter và giải thích output.",
      "Tìm bug/edge case liên quan APIRouter.",
      "Viết function nhỏ dùng APIRouter."
    ],
    "examPatternsJa": [
      "APIRouterを含むコードの出力を予測する。",
      "APIRouterに関するbugや境界値を見つける。",
      "APIRouterを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết APIRouter mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "APIRouterを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học APIRouter: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "APIRouterは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "APIRouter",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "APIRouter",
      "APIRouter",
      "fastapi"
    ]
  },
  {
    "id": "fastapi-testing",
    "labelJa": "FastAPI testing",
    "labelVi": "FastAPI testing",
    "labelEn": "FastAPI testing",
    "phase": "fastapi",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "FastAPI testing giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "FastAPI testingはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học FastAPI testing bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はFastAPI testingを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về FastAPI testing và giải thích output.",
      "Tìm bug/edge case liên quan FastAPI testing.",
      "Viết function nhỏ dùng FastAPI testing."
    ],
    "examPatternsJa": [
      "FastAPI testingを含むコードの出力を予測する。",
      "FastAPI testingに関するbugや境界値を見つける。",
      "FastAPI testingを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết FastAPI testing mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "FastAPI testingを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học FastAPI testing: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "FastAPI testingは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "FastAPI testing",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "FastAPI testing",
      "FastAPI testing",
      "fastapi"
    ]
  },
  {
    "id": "fastapi-cors",
    "labelJa": "CORS",
    "labelVi": "CORS",
    "labelEn": "CORS",
    "phase": "fastapi",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "CORS giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "CORSはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học CORS bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はCORSを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về CORS và giải thích output.",
      "Tìm bug/edge case liên quan CORS.",
      "Viết function nhỏ dùng CORS."
    ],
    "examPatternsJa": [
      "CORSを含むコードの出力を予測する。",
      "CORSに関するbugや境界値を見つける。",
      "CORSを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết CORS mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "CORSを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học CORS: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "CORSは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "CORS",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "CORS",
      "CORS",
      "fastapi"
    ]
  },
  {
    "id": "fastapi-service-layer",
    "labelJa": "service layer",
    "labelVi": "Service layer",
    "labelEn": "Service layer",
    "phase": "fastapi",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Service layer giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "service layerはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Service layer bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はservice layerを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Service layer và giải thích output.",
      "Tìm bug/edge case liên quan Service layer.",
      "Viết function nhỏ dùng Service layer."
    ],
    "examPatternsJa": [
      "service layerを含むコードの出力を予測する。",
      "service layerに関するbugや境界値を見つける。",
      "service layerを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Service layer mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "service layerを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Service layer: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "service layerは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Service layer",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "service layer",
      "Service layer",
      "fastapi"
    ]
  },
  {
    "id": "fastapi-ai-serving",
    "labelJa": "AI model serving",
    "labelVi": "AI model serving",
    "labelEn": "AI model serving",
    "phase": "fastapi",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "AI model serving giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "AI model servingはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học AI model serving bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はAI model servingを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về AI model serving và giải thích output.",
      "Tìm bug/edge case liên quan AI model serving.",
      "Viết function nhỏ dùng AI model serving."
    ],
    "examPatternsJa": [
      "AI model servingを含むコードの出力を予測する。",
      "AI model servingに関するbugや境界値を見つける。",
      "AI model servingを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết AI model serving mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "AI model servingを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học AI model serving: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "AI model servingは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "AI model serving",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "AI model serving",
      "AI model serving",
      "fastapi"
    ]
  },
  {
    "id": "fastapi-async",
    "labelJa": "async endpoint",
    "labelVi": "async endpoint",
    "labelEn": "async endpoint",
    "phase": "fastapi",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "async endpoint giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "async endpointはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học async endpoint bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はasync endpointを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về async endpoint và giải thích output.",
      "Tìm bug/edge case liên quan async endpoint.",
      "Viết function nhỏ dùng async endpoint."
    ],
    "examPatternsJa": [
      "async endpointを含むコードの出力を予測する。",
      "async endpointに関するbugや境界値を見つける。",
      "async endpointを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết async endpoint mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "async endpointを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học async endpoint: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "async endpointは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "async endpoint",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "async endpoint",
      "async endpoint",
      "fastapi"
    ]
  },
  {
    "id": "fastapi-project",
    "labelJa": "FastAPI mini project",
    "labelVi": "FastAPI mini project",
    "labelEn": "FastAPI mini project",
    "phase": "fastapi",
    "category": "software",
    "level": "topic",
    "importance": "high",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "FastAPI mini project giúp bạn xây API bằng FastAPI để phục vụ ứng dụng AI/local app theo hướng rõ route, schema và response.",
    "definitionJa": "FastAPI mini projectはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học FastAPI mini project bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はFastAPI mini projectを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về FastAPI mini project và giải thích output.",
      "Tìm bug/edge case liên quan FastAPI mini project.",
      "Viết function nhỏ dùng FastAPI mini project."
    ],
    "examPatternsJa": [
      "FastAPI mini projectを含むコードの出力を予測する。",
      "FastAPI mini projectに関するbugや境界値を見つける。",
      "FastAPI mini projectを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết FastAPI mini project mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "FastAPI mini projectを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học FastAPI mini project: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "FastAPI mini projectは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "FastAPI mini project",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "FastAPI mini project",
      "FastAPI mini project",
      "fastapi"
    ]
  },
  {
    "id": "project-structure",
    "labelJa": "project structure",
    "labelVi": "Project structure",
    "labelEn": "Project structure",
    "phase": "project",
    "category": "business",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Project structure giúp bạn ghép kiến thức Python thành sản phẩm nhỏ có yêu cầu, test và checklist rõ ràng.",
    "definitionJa": "project structureはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Project structure bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はproject structureを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Project structure và giải thích output.",
      "Tìm bug/edge case liên quan Project structure.",
      "Viết function nhỏ dùng Project structure."
    ],
    "examPatternsJa": [
      "project structureを含むコードの出力を予測する。",
      "project structureに関するbugや境界値を見つける。",
      "project structureを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Project structure mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "project structureを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Project structure: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "project structureは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Project structure",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "project structure",
      "Project structure",
      "project"
    ]
  },
  {
    "id": "argparse-cli",
    "labelJa": "argparse CLI",
    "labelVi": "argparse CLI",
    "labelEn": "argparse CLI",
    "phase": "project",
    "category": "business",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "argparse CLI giúp bạn ghép kiến thức Python thành sản phẩm nhỏ có yêu cầu, test và checklist rõ ràng.",
    "definitionJa": "argparse CLIはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học argparse CLI bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はargparse CLIを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về argparse CLI và giải thích output.",
      "Tìm bug/edge case liên quan argparse CLI.",
      "Viết function nhỏ dùng argparse CLI."
    ],
    "examPatternsJa": [
      "argparse CLIを含むコードの出力を予測する。",
      "argparse CLIに関するbugや境界値を見つける。",
      "argparse CLIを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết argparse CLI mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "argparse CLIを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học argparse CLI: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "argparse CLIは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "argparse CLI",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "argparse CLI",
      "argparse CLI",
      "project"
    ]
  },
  {
    "id": "env-config",
    "labelJa": "env config",
    "labelVi": "Env config",
    "labelEn": "Env config",
    "phase": "project",
    "category": "business",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Env config giúp bạn ghép kiến thức Python thành sản phẩm nhỏ có yêu cầu, test và checklist rõ ràng.",
    "definitionJa": "env configはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Env config bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はenv configを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Env config và giải thích output.",
      "Tìm bug/edge case liên quan Env config.",
      "Viết function nhỏ dùng Env config."
    ],
    "examPatternsJa": [
      "env configを含むコードの出力を予測する。",
      "env configに関するbugや境界値を見つける。",
      "env configを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Env config mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "env configを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Env config: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "env configは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Env config",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "env config",
      "Env config",
      "project"
    ]
  },
  {
    "id": "requirements-lock",
    "labelJa": "requirements.txt",
    "labelVi": "requirements / dependency lock",
    "labelEn": "requirements / dependency lock",
    "phase": "project",
    "category": "business",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "requirements / dependency lock giúp bạn ghép kiến thức Python thành sản phẩm nhỏ có yêu cầu, test và checklist rõ ràng.",
    "definitionJa": "requirements.txtはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học requirements / dependency lock bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はrequirements.txtを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về requirements / dependency lock và giải thích output.",
      "Tìm bug/edge case liên quan requirements / dependency lock.",
      "Viết function nhỏ dùng requirements / dependency lock."
    ],
    "examPatternsJa": [
      "requirements.txtを含むコードの出力を予測する。",
      "requirements.txtに関するbugや境界値を見つける。",
      "requirements.txtを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết requirements / dependency lock mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "requirements.txtを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học requirements / dependency lock: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "requirements.txtは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "requirements / dependency lock",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "requirements.txt",
      "requirements / dependency lock",
      "project"
    ]
  },
  {
    "id": "readme-writing",
    "labelJa": "README",
    "labelVi": "README writing",
    "labelEn": "README writing",
    "phase": "project",
    "category": "business",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "README writing giúp bạn ghép kiến thức Python thành sản phẩm nhỏ có yêu cầu, test và checklist rõ ràng.",
    "definitionJa": "READMEはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học README writing bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はREADMEを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về README writing và giải thích output.",
      "Tìm bug/edge case liên quan README writing.",
      "Viết function nhỏ dùng README writing."
    ],
    "examPatternsJa": [
      "READMEを含むコードの出力を予測する。",
      "READMEに関するbugや境界値を見つける。",
      "READMEを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết README writing mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "READMEを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học README writing: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "READMEは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "README writing",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "README",
      "README writing",
      "project"
    ]
  },
  {
    "id": "mini-calculator",
    "labelJa": "calculator CLI",
    "labelVi": "Calculator CLI",
    "labelEn": "Calculator CLI",
    "phase": "project",
    "category": "business",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Calculator CLI giúp bạn ghép kiến thức Python thành sản phẩm nhỏ có yêu cầu, test và checklist rõ ràng.",
    "definitionJa": "calculator CLIはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Calculator CLI bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はcalculator CLIを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Calculator CLI và giải thích output.",
      "Tìm bug/edge case liên quan Calculator CLI.",
      "Viết function nhỏ dùng Calculator CLI."
    ],
    "examPatternsJa": [
      "calculator CLIを含むコードの出力を予測する。",
      "calculator CLIに関するbugや境界値を見つける。",
      "calculator CLIを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Calculator CLI mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "calculator CLIを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Calculator CLI: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "calculator CLIは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Calculator CLI",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "calculator CLI",
      "Calculator CLI",
      "project"
    ]
  },
  {
    "id": "mini-todo",
    "labelJa": "todo CLI",
    "labelVi": "Todo CLI",
    "labelEn": "Todo CLI",
    "phase": "project",
    "category": "business",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Todo CLI giúp bạn ghép kiến thức Python thành sản phẩm nhỏ có yêu cầu, test và checklist rõ ràng.",
    "definitionJa": "todo CLIはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Todo CLI bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はtodo CLIを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Todo CLI và giải thích output.",
      "Tìm bug/edge case liên quan Todo CLI.",
      "Viết function nhỏ dùng Todo CLI."
    ],
    "examPatternsJa": [
      "todo CLIを含むコードの出力を予測する。",
      "todo CLIに関するbugや境界値を見つける。",
      "todo CLIを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Todo CLI mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "todo CLIを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Todo CLI: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "todo CLIは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Todo CLI",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "todo CLI",
      "Todo CLI",
      "project"
    ]
  },
  {
    "id": "mini-csv-analyzer",
    "labelJa": "CSV analyzer",
    "labelVi": "CSV analyzer",
    "labelEn": "CSV analyzer",
    "phase": "project",
    "category": "business",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "CSV analyzer giúp bạn ghép kiến thức Python thành sản phẩm nhỏ có yêu cầu, test và checklist rõ ràng.",
    "definitionJa": "CSV analyzerはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học CSV analyzer bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はCSV analyzerを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về CSV analyzer và giải thích output.",
      "Tìm bug/edge case liên quan CSV analyzer.",
      "Viết function nhỏ dùng CSV analyzer."
    ],
    "examPatternsJa": [
      "CSV analyzerを含むコードの出力を予測する。",
      "CSV analyzerに関するbugや境界値を見つける。",
      "CSV analyzerを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết CSV analyzer mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "CSV analyzerを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học CSV analyzer: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "CSV analyzerは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "CSV analyzer",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "CSV analyzer",
      "CSV analyzer",
      "project"
    ]
  },
  {
    "id": "mini-quiz-app",
    "labelJa": "quiz app",
    "labelVi": "Quiz app",
    "labelEn": "Quiz app",
    "phase": "project",
    "category": "business",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "Quiz app giúp bạn ghép kiến thức Python thành sản phẩm nhỏ có yêu cầu, test và checklist rõ ràng.",
    "definitionJa": "quiz appはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học Quiz app bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はquiz appを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về Quiz app và giải thích output.",
      "Tìm bug/edge case liên quan Quiz app.",
      "Viết function nhỏ dùng Quiz app."
    ],
    "examPatternsJa": [
      "quiz appを含むコードの出力を予測する。",
      "quiz appに関するbugや境界値を見つける。",
      "quiz appを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết Quiz app mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "quiz appを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học Quiz app: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "quiz appは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "Quiz app",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "quiz app",
      "Quiz app",
      "project"
    ]
  },
  {
    "id": "mini-fastapi-todo",
    "labelJa": "FastAPI Todo API",
    "labelVi": "FastAPI Todo API",
    "labelEn": "FastAPI Todo API",
    "phase": "project",
    "category": "business",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "FastAPI Todo API giúp bạn ghép kiến thức Python thành sản phẩm nhỏ có yêu cầu, test và checklist rõ ràng.",
    "definitionJa": "FastAPI Todo APIはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học FastAPI Todo API bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はFastAPI Todo APIを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về FastAPI Todo API và giải thích output.",
      "Tìm bug/edge case liên quan FastAPI Todo API.",
      "Viết function nhỏ dùng FastAPI Todo API."
    ],
    "examPatternsJa": [
      "FastAPI Todo APIを含むコードの出力を予測する。",
      "FastAPI Todo APIに関するbugや境界値を見つける。",
      "FastAPI Todo APIを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết FastAPI Todo API mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "FastAPI Todo APIを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học FastAPI Todo API: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "FastAPI Todo APIは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "FastAPI Todo API",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "FastAPI Todo API",
      "FastAPI Todo API",
      "project"
    ]
  },
  {
    "id": "mini-fastapi-ai",
    "labelJa": "FastAPI AI mock",
    "labelVi": "FastAPI AI prediction mock",
    "labelEn": "FastAPI AI prediction mock",
    "phase": "project",
    "category": "business",
    "level": "topic",
    "importance": "medium",
    "prerequisites": [
      "python-function"
    ],
    "definitionVi": "FastAPI AI prediction mock giúp bạn ghép kiến thức Python thành sản phẩm nhỏ có yêu cầu, test và checklist rõ ràng.",
    "definitionJa": "FastAPI AI mockはPython学習で重要なテーマです。コードを読み、書き、debugするために使います。",
    "whyImportantVi": "Học FastAPI AI prediction mock bằng cách đọc mục tiêu, xem ví dụ thật, trace từng bước, tự làm bài tập nhỏ và kiểm tra output.",
    "whyImportantJa": "初心者はFastAPI AI mockを短い例、出力予想、テスト、debugの順で学ぶと理解しやすいです。",
    "examPatternsVi": [
      "Trace ví dụ thực tế về FastAPI AI prediction mock và giải thích output.",
      "Tìm bug/edge case liên quan FastAPI AI prediction mock.",
      "Viết function nhỏ dùng FastAPI AI prediction mock."
    ],
    "examPatternsJa": [
      "FastAPI AI mockを含むコードの出力を予測する。",
      "FastAPI AI mockに関するbugや境界値を見つける。",
      "FastAPI AI mockを使う短い関数を書く。"
    ],
    "commonMistakesVi": [
      "Chỉ đọc lý thuyết FastAPI AI prediction mock mà không tự code.",
      "Không test input rỗng, 1 phần tử hoặc giá trị biên.",
      "Nhìn code chạy được một case rồi tưởng đã đúng."
    ],
    "commonMistakesJa": [
      "FastAPI AI mockを読むだけで、自分でcodeを書かない。",
      "空・1要素・境界値をtestしない。",
      "1ケースだけ通って正しいと思い込む。"
    ],
    "memoryTipVi": "Học FastAPI AI prediction mock: định nghĩa → ví dụ 5 dòng → test → sửa lỗi → ghi pattern.",
    "memoryTipJa": "FastAPI AI mockは、定義 → 5行例 → test → debug → pattern化で覚えます。",
    "examples": [
      "FastAPI AI prediction mock",
      "trace code có giải thích",
      "bộ kiểm tra"
    ],
    "keywords": [
      "FastAPI AI mock",
      "FastAPI AI prediction mock",
      "project"
    ]
  }
];

export const pythonCatalog: PythonCatalogItem[] = pythonCatalogBase.map((item) => ({
  ...item,
  ...buildPythonV101LessonFields(item),
  definitionJa: item.definitionJa,
  whyImportantJa: item.whyImportantJa,
  examPatternsJa: item.examPatternsJa,
  commonMistakesJa: item.commonMistakesJa,
  memoryTipJa: item.memoryTipJa,
}));

for (const polish of pythonV84RDeepPolishLessons) {
  const item = pythonCatalog.find((entry) => entry.id === polish.nodeId);
  if (item) {
    item.examples = Array.from(new Set([...item.examples, polish.practicalExample, ...polish.edgeCases]));
    item.examPatternsVi = Array.from(new Set([...item.examPatternsVi, polish.interviewCheckpointVi]));
    item.examPatternsJa = Array.from(new Set([...item.examPatternsJa, polish.interviewCheckpointJa]));
    item.commonMistakesVi = Array.from(new Set([...item.commonMistakesVi, ...polish.edgeCases.map((edge) => `Bỏ qua edge case: ${edge}`)]));
    item.keywords = Array.from(new Set([...item.keywords, `V84R-${polish.track}`, polish.id]));
  }
}
