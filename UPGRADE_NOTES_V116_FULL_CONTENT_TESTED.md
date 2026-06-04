# V116R Full Content Tested QA

## Scope
- Added an end-to-end content QA test that loads every course through the current lazy loader.
- Verified every node has a detailed lesson after enhancement.
- Verified lesson text avoids the old generic signals such as "Người mới cần học", "Đọc đoạn code có", "code reading / test case", "nội dung nháp", and TODO.
- Verified priority manual chapter packs remain broad and structured across V105/V106/V110.

## Validation
Run:

```bash
npm run audit:v116-full-content-tested
npm test
npm run build
```

The full suite can take time; for CI/low-resource machines, split tests by file batches using the same Vitest flags in `scripts/run-tests-split.sh`.
