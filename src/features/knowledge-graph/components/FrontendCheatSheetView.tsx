export function FrontendCheatSheetView() {
  const sections = [
    ['HTML', ['semantic tags: header/main/nav/section/article/footer', 'form: label + input + validation message', 'img phải có alt khi có ý nghĩa']],
    ['CSS Layout', ['Box Model = content + padding + border + margin', 'Flexbox cho 1 chiều, Grid cho 2 chiều', 'Responsive = fluid layout + media query']],
    ['JavaScript', ['DOM = cây node của HTML trong browser', 'fetch trả về Promise', 'async/await giúp đọc async code dễ hơn']],
    ['React', ['Component = UI block tái sử dụng', 'Props từ cha xuống con', 'State thay đổi làm UI render lại', 'useEffect xử lý side effect']],
    ['API / Deploy', ['loading/error/empty state là bắt buộc', 'env vars không hardcode secret', 'CI/CD tự động test/build/deploy']],
  ];
  return <section className="grid gap-4 xl:grid-cols-2">
    {sections.map(([title, items]) => <article key={title as string} className="glass-panel rounded-[2rem] p-5">
      <p className="text-xs font-black uppercase tracking-[.18em] text-orange-600">Frontend Cheat Sheet</p>
      <h2 className="mt-1 text-2xl font-black text-slate-950">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
    </article>)}
  </section>;
}
