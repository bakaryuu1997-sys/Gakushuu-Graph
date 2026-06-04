# V77R — Python Final Content QA + Release Notes

## Mục tiêu

V77R là bản hoàn thiện lại sau V76R để đưa app về trạng thái **local learning suite khá hoàn chỉnh** cho 3 course chính:

- **AI Passport:** complete local.
- **基本情報:** complete local + 科目B.
- **Python:** code lab + FastAPI + project.

## Đã làm

### 1. Python Final Content QA

Toàn bộ Python lessons được làm dày lại theo cùng một chuẩn:

- Có định nghĩa ngắn nhưng rõ ý.
- Có ví dụ code hoặc tình huống thực hành.
- Có hướng kiểm tra bằng test nhỏ.
- Có bẫy/lỗi thường gặp rõ hơn.
- Có next action để người học biết nên làm gì sau lesson.
- Có nhắc edge case: input rỗng, giá trị biên, sai kiểu dữ liệu, duplicate, index lệch, mutable state.

Các nhóm được bổ sung bẫy riêng:

- FastAPI: path/query/body, response model, lỗi 422, happy path only.
- OOP: `self`, class variable vs instance variable, mutable default.
- Algorithm: điều kiện dừng, lệch index, duplicate, Big-O.
- Data structures: key/index không tồn tại, mutate tại chỗ, thứ tự collection.
- Debug/Test/Typing: sửa lỗi nhưng quên thêm regression test.

### 2. Release notes trong app

Thêm `ReleaseNotesV77R` vào dashboard để người học nhìn thấy trạng thái release ngay trong app.

### 3. Course completion dashboard

Thêm `CourseCompletionDashboard` để theo dõi:

- AI Passport readiness.
- 基本情報 readiness.
- Python readiness.
- Gợi ý course nên học tiếp dựa trên tiến độ local.

### 4. Audit mới

Thêm script:

```bash
npm run audit:v77r-python
```

Script xuất CSV:

```text
/mnt/data/python-v77r-release-notes-audit.csv
```

## Cách chạy sau khi tải về

```bash
npm install
npm run verify
npm run audit:v77r-python
npm run dev
```

## Kết luận

Sau V77R, app có thể xem là bản local learning suite hoàn chỉnh ở mức thực dụng: học bài, làm quiz, code lab, FastAPI/project path, dashboard tiến độ, release notes và backup local đều có trong app.
