
import { describe, it, expect } from 'vitest';
import { generateRecommendations } from '../recommendationsGenerator';
import { SurveyQuestion } from '../../types';

describe('recommendationsGenerator', () => {
  const mockQuestions: SurveyQuestion[] = [
    { id: 'q1', question: 'Leadership Question', options: [], category: 'trust', weight: 1 },
    { id: 'q2', question: 'Team Question', options: [], category: 'trust', weight: 1 }
  ];

  it('generates category-specific recommendations for lowest scoring category', () => {
    const mockAnswers = [4, 3];
    const mockCategoryScores = {
      trust: 70,
      engagement: 50,
      wellbeing: 80
    };

    const recommendations = generateRecommendations(mockAnswers, mockQuestions, mockCategoryScores);
    
    expect(recommendations).toContain('Develop structured career growth paths for all employees');
    expect(recommendations).toContain('Establish forums for safe idea sharing and innovation');
  });

  it('generates question-specific recommendations for low scores', () => {
    const mockAnswers = [2, 4];
    const mockCategoryScores = {
      trust: 80,
      engagement: 70,
      wellbeing: 90
    };

    const recommendations = generateRecommendations(mockAnswers, mockQuestions, mockCategoryScores);
    expect(recommendations).toContain('Consider implementing weekly leadership updates and regular town halls');
  });
});

