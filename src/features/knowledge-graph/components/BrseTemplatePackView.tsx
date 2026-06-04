const templates = [
  ['議事録 sample', ['日時: 2026/xx/xx 10:00-11:00', '参加者: A社 xx様 / 開発 team', '決定事項: 検索条件にステータスを追加する', '未決事項: 権限ごとの表示条件', 'ToDo: BrSEがQ&Aに登録、期限: 金曜']],
  ['Q&A sheet sample', ['No: QA-001', '質問: ステータス未選択時は全件検索でよいか', '背景: 画面項目定義に未記載', '回答: 全件検索とする', 'Status: Closed']],
  ['Bug report sample', ['概要: 注文検索で500 error', '再現手順: 条件Aで検索', '期待結果: 検索結果表示', '実際結果: 500 error', '証跡: screenshot/log attached']],
  ['Change request sample', ['変更内容: 承認フローに部長承認を追加', '理由: 内部統制対応', '影響範囲: API/DB/画面/test', '見積もり: 3人日', '承認: PM/customer']],
  ['Status report sample', ['進捗: 予定80% / 実績70%', '遅延理由: API仕様未確定', 'リスク: UAT開始遅延', '対策: 期限付きでQ&A回答依頼', '来週予定: 結合テスト開始']],
];

export function BrseTemplatePackView() {
  return <section className="grid gap-4 xl:grid-cols-2">
    {templates.map(([title, items]) => <article key={title as string} className="glass-panel rounded-[2rem] p-5">
      <p className="text-xs font-black uppercase tracking-[.18em] text-emerald-600">BrSE Document Example</p>
      <h2 className="mt-1 text-2xl font-black text-slate-950">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
    </article>)}
  </section>;
}
