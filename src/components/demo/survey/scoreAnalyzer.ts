
import { SurveyQuestion, ScoreAnalysis } from "./types";

// Calculate weighted scores based on response values and question weights
export const calculateWeightedScore = (
  answers: (number | null)[],
  questions: SurveyQuestion[]
): ScoreAnalysis => {
  // Filter out null responses
  const validAnswers = answers.map((answer, index) => ({
    value: answer,
    question: questions[index]
  })).filter(item => item.value !== null);
  
  // Initialize category scores
  const categoryTotals: Record<string, { sum: number; count: number; weightSum: number }> = {
    trust: { sum: 0, count: 0, weightSum: 0 },
    engagement: { sum: 0, count: 0, weightSum: 0 },
    wellbeing: { sum: 0, count: 0, weightSum: 0 }
  };
  
  // Calculate weighted scores by category
  validAnswers.forEach(answer => {
    const category = answer.question.category;
    const weight = answer.question.weight;
    const value = answer.value as number;
    
    categoryTotals[category].sum += value * weight;
    categoryTotals[category].count++;
    categoryTotals[category].weightSum += weight;
  });
  
  // Calculate normalized category scores (0-100)
  const categoryScores = {
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
  
  // Calculate total score using PulsePlace formula (40% trust, 30% engagement, 30% wellbeing)
  const totalScore = Math.round(
    (categoryScores.trust * 0.4) + 
    (categoryScores.engagement * 0.3) + 
    (categoryScores.wellbeing * 0.3)
  );

  // Calculate benchmark comparison
  const benchmarkComparison = calculateBenchmarkComparison(answers, questions);
  
  // Identify strengths and opportunities
  const strengths = identifyStrengths(answers, questions);
  const opportunities = identifyOpportunities(answers, questions);
  
  // Generate recommendations
  const recommendations = generateRecommendations(answers, questions, categoryScores);
  
  return {
    totalScore,
    categoryScores: {
      trust: Math.round(categoryScores.trust),
      engagement: Math.round(categoryScores.engagement),
      wellbeing: Math.round(categoryScores.wellbeing)
    },
    strengths,
    opportunities,
    recommendations,
    benchmarkComparison
  };
};

// Calculate how the scores compare to benchmarks
const calculateBenchmarkComparison = (
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
  
  // Return percentage difference from benchmark
  return totalQuestions > 0 
    ? Math.round((totalDifference / totalQuestions) * 100 / 5) 
    : 0;
};

// Identify areas of strength (high scores)
const identifyStrengths = (
  answers: (number | null)[],
  questions: SurveyQuestion[]
): string[] => {
  const strengths: string[] = [];
  
  answers.forEach((answer, index) => {
    // Consider scores of 4 or 5 as strengths
    if (answer && answer >= 4) {
      let strength = '';
      
      // Generate different strength messages based on question category
      switch (questions[index].category) {
        case 'trust':
          strength = `Strong ${questions[index].question.toLowerCase().replace('I feel that ', '').replace('My ', '').split('.')[0]}`;
          break;
        case 'engagement':
          strength = `High level of ${questions[index].question.toLowerCase().replace('I feel ', '').replace('My ', '').split('.')[0]}`;
          break;
        case 'wellbeing':
          strength = `Excellent ${questions[index].question.toLowerCase().replace('I have ', '').replace('I experience ', '').split('.')[0]}`;
          break;
        default:
          strength = questions[index].question.split('.')[0];
      }
      
      strengths.push(strength);
    }
  });
  
  return strengths;
};

// Identify areas of opportunity (low scores)
const identifyOpportunities = (
  answers: (number | null)[],
  questions: SurveyQuestion[]
): string[] => {
  const opportunities: string[] = [];
  
  answers.forEach((answer, index) => {
    // Consider scores of 1 or 2 as opportunities
    if (answer && answer <= 2) {
      let opportunity = '';
      
      // Generate different opportunity messages based on question category
      switch (questions[index].category) {
        case 'trust':
          opportunity = `Improve ${questions[index].question.toLowerCase().replace('I feel that ', '').replace('My ', '').split('.')[0]}`;
          break;
        case 'engagement':
          opportunity = `Enhance ${questions[index].question.toLowerCase().replace('I feel ', '').replace('My ', '').split('.')[0]}`;
          break;
        case 'wellbeing':
          opportunity = `Address ${questions[index].question.toLowerCase().replace('I have ', '').replace('I experience ', '').split('.')[0]}`;
          break;
        default:
          opportunity = `Improve ${questions[index].question.split('.')[0]}`;
      }
      
      opportunities.push(opportunity);
    }
  });
  
  return opportunities;
};

// Generate tailored recommendations based on scores
const generateRecommendations = (
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
  
  // Add general recommendations based on the lowest scoring category
  switch (lowestCategory) {
    case 'trust':
      recommendations.push('Implement regular transparent communication channels from leadership');
      recommendations.push('Create clear accountability frameworks for team commitments');
      break;
    case 'engagement':
      recommendations.push('Develop structured career growth paths for all employees');
      recommendations.push('Establish forums for safe idea sharing and innovation');
      break;
    case 'wellbeing':
      recommendations.push('Review workload distribution and resource allocation');
      recommendations.push('Create explicit work-life balance policies and model them from leadership');
      break;
  }
  
  // Add specific recommendations based on individual low scores
  answers.forEach((answer, index) => {
    if (answer && answer <= 2) {
      switch (questions[index].id) {
        case 'q1': 
          recommendations.push('Consider implementing weekly leadership updates and regular town halls');
          break;
        case 'q2':
          recommendations.push('Develop a team charter that clearly defines commitment expectations and accountability');
          break;
        case 'q3':
          recommendations.push('Conduct a resource gap analysis and create a prioritized investment plan');
          break;
        case 'q4':
          recommendations.push('Train managers on creating psychological safety and implement anonymous feedback systems');
          break;
        case 'q5':
          recommendations.push('Create individual development plans with clear goals and resources for each employee');
          break;
        case 'q6':
          recommendations.push('Review after-hours work expectations and establish clear boundaries around availability');
          break;
      }
    }
  });
  
  return recommendations;
};
