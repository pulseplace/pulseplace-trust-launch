
import { SurveyQuestion } from "../types";

interface CategoryTotal {
  sum: number;
  count: number;
  weightSum: number;
}

interface CategoryTotals {
  [key: string]: CategoryTotal;
}

export const initializeCategoryTotals = (): CategoryTotals => ({
  trust: { sum: 0, count: 0, weightSum: 0 },
  engagement: { sum: 0, count: 0, weightSum: 0 },
  wellbeing: { sum: 0, count: 0, weightSum: 0 }
});

export const calculateCategoryScores = (
  validAnswers: { value: number; question: SurveyQuestion }[]
): { [key: string]: number } => {
  const categoryTotals = initializeCategoryTotals();

  validAnswers.forEach(answer => {
    const category = answer.question.category;
    const weight = answer.question.weight;
    const value = answer.value;
    
    categoryTotals[category].sum += value * weight;
    categoryTotals[category].count++;
    categoryTotals[category].weightSum += weight;
  });

  return {
    trust: categoryTotals.trust.count > 0 
      ? (categoryTotals.trust.sum / categoryTotals.trust.weightSum) * 20 
      : 0,
    engagement: categoryTotals.engagement.count > 0 
      ? (categoryTotals.engagement.sum / categoryTotals.engagement.weightSum) * 20 
      : 0,
    wellbeing: categoryTotals.wellbeing.count > 0 
      ? (categoryTotals.wellbeing.sum / categoryTotals.wellbeing.weightSum) * 20 
      : 0
  };
};
