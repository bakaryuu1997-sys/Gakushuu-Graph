const mistakes = [
  ['Syntax error', 'Dấu ngoặc, dấu hai chấm, indent hoặc tên biến bị sai.', '括弧、コロン、indent、変数名のミスです。'],
  ['Wrong return', 'Function tính đúng nhưng không return đúng giá trị hoặc return quá sớm.', '計算は近いがreturn値やreturn位置が間違っています。'],
  ['Edge case', 'Quên input rỗng, 1 phần tử, trùng lặp, số âm hoặc k không hợp lệ.', '空、1要素、重複、負数、不正なkを忘れています。'],
  ['Off-by-one', 'Sai +1/-1 ở index, đặc biệt binary search và prefix sum.', 'indexの+1/-1ミスです。binary searchやprefix sumで多いです。'],
  ['Complexity', 'Dùng nested loop khi có thể dùng dict, set, two pointers hoặc sliding window.', 'dict/set/two pointersで解けるのに二重loopを使っています。'],
  ['Mutable data bug', 'Dùng list/dict làm default argument hoặc sửa object chung ngoài ý muốn.', 'default引数にlist/dictを使う、共有objectを意図せず変更するbugです。'],
];

export function PythonMistakeReviewPanel() {
  return (
    <section className="rounded-3xl border border-rose-200 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950/30">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-rose-700">V69R Mistake Review</p>
      <h3 className="text-xl font-black">Sai ở đâu? / どこで間違えた？</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-2">{mistakes.map(([title, vi, ja]) => <div key={title} className="rounded-2xl bg-white p-3 text-sm shadow-sm dark:bg-slate-900"><b>{title}</b><p className="mt-1">VI: {vi}</p><p className="text-slate-500">JA: {ja}</p></div>)}</div>
    </section>
  );
}
