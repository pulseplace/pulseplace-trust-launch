
import { SurveyQuestion } from "../types";

export const generateRecommendations = (
  answers: (number | null)[],
  questions: SurveyQuestion[],
  categoryScores: {trust: number, engagement: number, wellbeing: number}
): string[] => {
  const recommendations: string[] = [];
  
  // Add category-specific recommendations based on lowest scores
  const lowestCategory = Object.entries(categoryScores).reduce(
    (lowest, [category, score]) => score < lowest.score ? {category, score} : lowest, 
    {category: 'trust', score: 100}
  ).category;
  
  recommendations.push(...getCategoryRecommendations(lowestCategory));
  recommendations.push(...getQuestionSpecificRecommendations(answers, questions));
  
  return recommendations;
};

const getCategoryRecommendations = (category: string): string[] => {
  switch (category) {
    case 'trust':
      return [
        'Implement regular transparent communication channels from leadership',
        'Create clear accountability frameworks for team commitments'
      ];
    case 'engagement':
      return [
        'Develop structured career growth paths for all employees',
        'Establish forums for safe idea sharing and innovation'
      ];
    case 'wellbeing':
      return [
        'Review workload distribution and resource allocation',
        'Create explicit work-life balance policies and model them from leadership'
      ];
    default:
      return [];
  }
};

const getQuestionSpecificRecommendations = (
  answers: (number | null)[],
  questions: SurveyQuestion[]
): string[] => {
  const recommendations: string[] = [];
  
  answers.forEach((answer, index) => {
    if (answer && answer <= 2) {
      const recommendation = getRecommendationForQuestion(questions[index].id);
      if (recommendation) recommendations.push(recommendation);
    }
  });
  
  return recommendations;
};

const getRecommendationForQuestion = (questionId: string): string | null => {
  const recommendationMap: { [key: string]: string } = {
    'q1': 'Consider implementing weekly leadership updates and regular town halls',
    'q2': 'Develop a team charter that clearly defines commitment expectations and accountability',
    'q3': 'Conduct a resource gap analysis and create a prioritized investment plan',
    'q4': 'Train managers on creating psychological safety and implement anonymous feedback systems',
    'q5': 'Create individual development plans with clear goals and resources for each employee',
    'q6': 'Review after-hours work expectations and establish clear boundaries around availability'
  };
  
  return recommendationMap[questionId] || null;
};
