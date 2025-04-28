
import { SurveyQuestion } from "../types";

export const calculateBenchmarkComparison = (
  answers: (number | null)[],
  questions: SurveyQuestion[]
): number => {
  let totalDifference = 0;
  let totalQuestions = 0;
  
  answers.forEach((answer, index) => {
    if (answer !== null && questions[index].benchmarkScore) {
      totalDifference += (answer - questions[index].benchmarkScore);
      totalQuestions++;
    }
  });
  
  return totalQuestions > 0 
    ? Math.round((totalDifference / totalQuestions) * 100 / 5) 
    : 0;
};
