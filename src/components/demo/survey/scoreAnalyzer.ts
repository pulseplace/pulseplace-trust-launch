
import { SurveyQuestion, ScoreAnalysis } from "./types";
import { calculateCategoryScores } from "./utils/categoryScores";
import { calculateBenchmarkComparison } from "./utils/benchmarkAnalysis";
import { identifyStrengths, identifyOpportunities } from "./utils/strengthsAnalysis";
import { generateRecommendations } from "./utils/recommendationsGenerator";

export const calculateWeightedScore = (
  answers: (number | null)[],
  questions: SurveyQuestion[]
): ScoreAnalysis => {
  // Filter out null responses
  const validAnswers = answers.map((answer, index) => ({
    value: answer,
    question: questions[index]
  })).filter(item => item.value !== null);
  
  // Calculate category scores
  const rawCategoryScores = calculateCategoryScores(validAnswers);
  
  // Ensure proper typing of category scores
  const categoryScores = {
    trust: Math.round(rawCategoryScores.trust),
    engagement: Math.round(rawCategoryScores.engagement),
    wellbeing: Math.round(rawCategoryScores.wellbeing)
  };
  
  // Calculate total score using PulsePlace formula (40% trust, 30% engagement, 30% wellbeing)
  const totalScore = Math.round(
    (categoryScores.trust * 0.4) + 
    (categoryScores.engagement * 0.3) + 
    (categoryScores.wellbeing * 0.3)
  );

  return {
    totalScore,
    categoryScores,
    strengths: identifyStrengths(answers, questions),
    opportunities: identifyOpportunities(answers, questions),
    recommendations: generateRecommendations(answers, questions, categoryScores),
    benchmarkComparison: calculateBenchmarkComparison(answers, questions)
  };
};

