import type { LessonWorkspaceProps as Props } from "./LessonWorkspaceTypes";
import { ExamCheatSheetView } from "./ExamCheatSheetView";
import { FrontendCheatSheetView } from "./FrontendCheatSheetView";
import { SqlCheatSheetView } from "./SqlCheatSheetView";
import { AiJapaneseExamDrillView } from "./AiJapaneseExamDrillView";
import { AiWrongAnswerReviewView } from "./AiWrongAnswerReviewView";

export function CheatSheetView(props: Props) {
  if (props.courseTitle.includes("Frontend")) return <FrontendCheatSheetView />;
  if (props.courseTitle.includes("SQL")) return <SqlCheatSheetView />;
  return <ExamCheatSheetView />;
}

export function JapaneseExamView(props: Props) {
  return <AiJapaneseExamDrillView quizzes={props.quizzes} language={props.language} />;
}

export function WrongAnswerReview(props: Props) {
  return <AiWrongAnswerReviewView quizzes={props.quizzes} />;
}
