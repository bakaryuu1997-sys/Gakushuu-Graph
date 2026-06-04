import type { QuizQuestion } from '../../../features/knowledge-graph/data/quizQuestions';
import { aiQualityAiQuiz } from './quiz/ai';
import { aiQualityDatabaseQuiz } from './quiz/database';
import { aiQualityManagementQuiz } from './quiz/management';
import { aiQualitySecurityQuiz } from './quiz/security';
import { aiQualityStrategyQuiz } from './quiz/strategy';
import { aiQualityTechnologyQuiz } from './quiz/technology';

export const aiPassportQualityQuiz: QuizQuestion[] = [...aiQualityAiQuiz, ...aiQualityDatabaseQuiz, ...aiQualityManagementQuiz, ...aiQualitySecurityQuiz, ...aiQualityStrategyQuiz, ...aiQualityTechnologyQuiz];
