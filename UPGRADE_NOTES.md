# Upgrade Notes

## Version: exam-focused graph upgrade

This build focuses on making the app more useful for IT Passport study and review.

### Added

- Expanded graph data from 41 nodes to 177 knowledge nodes.
- Added 190 graph relationships/edges.
- Added a true Exam Preparation section:
  - multiple-choice quiz questions
  - flashcard mode
  - compare mode for confusing concepts
- Added export/import progress as JSON.
- Added export graph as PNG.
- Improved graph layout by category instead of a simple circular layout.
- Added more categories to filter: Software and Business.
- Improved Exam Mode so it focuses on high-importance nodes.

### Important note

The quiz content is designed around frequent IT Passport keywords and common concept traps, but it cannot guarantee 100% match with the official exam. Use it as a study/review tool and continue adding real past-question patterns over time.

### Build verification

`npm run build` completed successfully.

### Future improvements

- Add 100+ more high-quality quiz questions.
- Add dedicated past-question style mode.
- Add mistake review history.
- Add spaced repetition scheduling.
- Add better code splitting to reduce bundle warning.
