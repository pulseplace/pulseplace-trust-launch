
import { describe, it, expect } from 'vitest';
import { generateRecommendations } from '../recommendationsGenerator';
import { SurveyQuestion } from '../../types';

describe('generateRecommendations', () => {
  it('generates recommendations based on low scores', () => {
    const mockAnswers = [4, 2, 5, 2, 3];
    const mockQuestions: SurveyQuestion[] = [
      {
        id: '1',
        question: 'Leadership Communication',
        options: [],
        category: 'trust',
        weight: 1,
        aiInsight: {
          title: 'Test Insight',
          description: 'Description',
          confidence: 80,
          source: 'Internal data'
        }
      },
      {
        id: '2',
        question: 'Team Commitments',
        options: [],
        category: 'trust',
        weight: 1,
        aiInsight: {
          title: 'Test Insight',
          description: 'Description',
          confidence: 80,
          source: 'Internal data'
        }
      }
    ];
    const categoryScores = { trust: 60, engagement: 70, wellbeing: 60 };

    const recommendations = generateRecommendations(mockAnswers, mockQuestions, categoryScores);

    expect(recommendations.length).toBeGreaterThan(0);
    expect(recommendations).toContain(expect.stringContaining("communication") || 
                                      expect.stringContaining("transparency") ||
                                      expect.stringContaining("leadership"));
  });

  it('returns default recommendations when no clear patterns', () => {
    const mockAnswers = [3, 3, 3];
    const mockQuestions: SurveyQuestion[] = [];
    const categoryScores = { trust: 60, engagement: 60, wellbeing: 60 };

    const recommendations = generateRecommendations(mockAnswers, mockQuestions, categoryScores);

    expect(recommendations.length).toBeGreaterThan(0);
  });
});
