export function SqlCheatSheetView() {
  const sections = [
    ['SELECT template', ['SELECT columns FROM table', 'WHERE lọc dòng trước GROUP BY', 'ORDER BY sắp xếp kết quả cuối']],
    ['JOIN template', ['INNER JOIN chỉ lấy dòng khớp', 'LEFT JOIN giữ toàn bộ bảng trái', 'Luôn kiểm tra ON condition']],
    ['GROUP BY / HAVING', ['GROUP BY gom nhóm', 'Aggregate: COUNT/SUM/AVG/MIN/MAX', 'HAVING lọc sau khi group']],
    ['DML warning', ['UPDATE thiếu WHERE rất nguy hiểm', 'DELETE thiếu WHERE xóa nhiều dòng', 'Dùng transaction khi thao tác quan trọng']],
    ['Security', ['Không nối chuỗi SQL từ input', 'Dùng parameterized query', 'Áp dụng least privilege']],
  ];
  return <section className="grid gap-4 xl:grid-cols-2">
    {sections.map(([title, items]) => <article key={title as string} className="glass-panel rounded-[2rem] p-5">
      <p className="text-xs font-black uppercase tracking-[.18em] text-sky-600">SQL Cheat Sheet</p>
      <h2 className="mt-1 text-2xl font-black text-slate-950">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
    </article>)}
  </section>;
}
