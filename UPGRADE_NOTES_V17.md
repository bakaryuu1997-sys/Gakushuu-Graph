# V17 upgrade notes

## New in this version
1. **Architecture-style graph view**
   - Added swimlane/group-box visual overlay for the large knowledge map.
   - Makes phases easier to scan left-to-right.

2. **Manual top 50 lessons**
   - Added a new `aiPassportV17Top50ManualLessons.ts` layer.
   - These lessons override older generic entries for 50 important nodes.

3. **Illustration diagrams**
   - Added separate architecture-diagram style cards for:
     - RAG flow
     - Transformer
     - AI project lifecycle
     - Data preprocessing pipeline
     - Prompt injection flow

4. **Mobile bottom tabs**
   - Added fixed mobile tabs: `Lesson | Map | Quiz | Glossary`.

5. **Study this phase**
   - Added CTA buttons in study-path and learning-flow areas.
   - Jumps to the first unmastered node in that phase for step-by-step learning.

## Main edited files
- `src/App.tsx`
- `src/features/knowledge-graph/components/LessonWorkspace.tsx`
- `src/courses/courseRegistry.ts`
- `src/courses/ai-passport/aiPassportV17Top50ManualLessons.ts`
