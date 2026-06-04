# V35 Content Quality Review

## Review target

This review focuses on three core learning tracks before adding more courses:

- AI Passport
- SQL Roadmap
- BrSE Roadmap

## Quality standard used

A lesson is considered good enough when it has:

1. Clear definition in Vietnamese.
2. Why it matters in exam/work context.
3. Common exam/question patterns.
4. Common mistakes and traps.
5. A practical memory tip.
6. Separation from other courses, so SQL does not leak into AI Passport and BrSE does not leak into SQL.

## Findings before V35

### AI Passport
Status: broad coverage was already good, but many high-value lessons were mixed between generated and older layers.
Risk: some important concepts could still feel like keyword memorization.

Action in V35:
- Added `aiPassportV35QualityLessons.ts`.
- Put these lessons before older lesson layers so they override weaker content.
- Strengthened lessons for AI/ML/DL, supervised/unsupervised, LLM, hallucination, RAG, privacy, copyright, fairness, governance, ROI and project flow.

### SQL Roadmap
Status: node coverage was strong, but lessons were mostly generated.
Risk: generated lessons were too similar and did not explain SQL traps deeply enough.

Action in V35:
- Added `src/courses/sql/deepLessons.ts`.
- Merged deep SQL lessons before generated lessons.
- Strengthened SELECT, WHERE, JOIN, GROUP BY, HAVING, UPDATE, DELETE, transaction, index, EXPLAIN, SQL injection and parameterized query.

### BrSE Roadmap
Status: very rich node map and useful templates already existed.
Risk: many lessons were generated; important practical topics needed more human-style explanation.

Action in V35:
- Added `src/courses/brse/v35QualityLessons.ts`.
- Improved existing deep lesson merge/deduplication.
- Added deeper explanations for design, screen items, API spec, DB design, test planning, UAT, severity/priority, approval, delay report, rollback and handover-related topics.

## Verification

Added automated quality audit:

- `src/test/v35CourseQualityAudit.test.ts`

The test checks:

- Deep AI Passport lessons exist for critical exam concepts.
- Deep SQL lessons exist for practical query and safety topics.
- Deep BrSE lessons exist for documentation and project control.
- AI Passport, SQL and BrSE remain separated.

## Conclusion

V35 does not add a new course. It improves depth and consistency of the existing important content first.

Recommended next step:
- Continue improving content quality in small batches.
- Prefer 20-30 high-quality manual lessons per version over adding many shallow nodes.
