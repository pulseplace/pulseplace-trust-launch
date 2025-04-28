
import { SurveyQuestion } from "../types";

export const identifyStrengths = (
  answers: (number | null)[],
  questions: SurveyQuestion[]
): string[] => {
  const strengths: string[] = [];
  
  answers.forEach((answer, index) => {
    if (answer && answer >= 4) {
      const strength = formatStrengthMessage(questions[index]);
      strengths.push(strength);
    }
  });
  
  return strengths;
};

export const identifyOpportunities = (
  answers: (number | null)[],
  questions: SurveyQuestion[]
): string[] => {
  const opportunities: string[] = [];
  
  answers.forEach((answer, index) => {
    if (answer && answer <= 2) {
      const opportunity = formatOpportunityMessage(questions[index]);
      opportunities.push(opportunity);
    }
  });
  
  return opportunities;
};

const formatStrengthMessage = (question: SurveyQuestion): string => {
  switch (question.category) {
    case 'trust':
      return `Strong ${question.question.toLowerCase().replace('I feel that ', '').replace('My ', '').split('.')[0]}`;
    case 'engagement':
      return `High level of ${question.question.toLowerCase().replace('I feel ', '').replace('My ', '').split('.')[0]}`;
    case 'wellbeing':
      return `Excellent ${question.question.toLowerCase().replace('I have ', '').replace('I experience ', '').split('.')[0]}`;
    default:
      return question.question.split('.')[0];
  }
};

const formatOpportunityMessage = (question: SurveyQuestion): string => {
  switch (question.category) {
    case 'trust':
      return `Improve ${question.question.toLowerCase().replace('I feel that ', '').replace('My ', '').split('.')[0]}`;
    case 'engagement':
      return `Enhance ${question.question.toLowerCase().replace('I feel ', '').replace('My ', '').split('.')[0]}`;
    case 'wellbeing':
      return `Address ${question.question.toLowerCase().replace('I have ', '').replace('I experience ', '').split('.')[0]}`;
    default:
      return `Improve ${question.question.split('.')[0]}`;
  }
};
