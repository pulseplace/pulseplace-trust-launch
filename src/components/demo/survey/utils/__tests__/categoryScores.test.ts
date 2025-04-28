
import { describe, it, expect } from 'vitest';
import { calculateCategoryScores } from '../categoryScores';
import { SurveyQuestion } from '../../types';

describe('calculateCategoryScores', () => {
  it('calculates scores for each category correctly', () => {
    const mockValidAnswers = [
      {
        value: 5,
        question: {
          id: '1',
          question: 'Trust Question 1',
          options: [],
          category: 'trust',
          weight: 1,
          aiInsight: {
            title: 'Test Insight',
            description: 'Description',
            confidence: 80,
            source: 'Internal data'
          }
        } as SurveyQuestion
      },
      {
        value: 4,
        question: {
          id: '2',
          question: 'Trust Question 2',
          options: [],
          category: 'trust',
          weight: 1.5,
          aiInsight: {
            title: 'Test Insight',
            description: 'Description',
            confidence: 80,
            source: 'Internal data'
          }
        } as SurveyQuestion
      },
      {
        value: 3,
        question: {
          id: '3',
          question: 'Engagement Question',
          options: [],
          category: 'engagement',
          weight: 1,
          aiInsight: {
            title: 'Test Insight',
            description: 'Description',
            confidence: 80,
            source: 'Internal data'
          }
        } as SurveyQuestion
      },
      {
        value: 2,
        question: {
          id: '4',
          question: 'Wellbeing Question',
          options: [],
          category: 'wellbeing',
          weight: 1,
          aiInsight: {
            title: 'Test Insight',
            description: 'Description',
            confidence: 80,
            source: 'Internal data'
          }
        } as SurveyQuestion
      }
    ];

    const result = calculateCategoryScores(mockValidAnswers);
    
    // Trust: ((5*1) + (4*1.5)) / (1 + 1.5) = 4.4
    expect(result.trust).toBeCloseTo(4.4);
    // Engagement: 3 (single value)
    expect(result.engagement).toBe(3);
    // Wellbeing: 2 (single value)
    expect(result.wellbeing).toBe(2);
  });

  it('handles empty or missing categories', () => {
    const mockValidAnswers = [
      {
        value: 5,
        question: {
          id: '1',
          question: 'Trust Question',
          options: [],
          category: 'trust',
          weight: 1,
          aiInsight: {
            title: 'Test Insight',
            description: 'Description',
            confidence: 80,
            source: 'Internal data'
          }
        } as SurveyQuestion
      }
    ];

    const result = calculateCategoryScores(mockValidAnswers);
    
    expect(result.trust).toBe(5);
    expect(result.engagement).toBe(0);
    expect(result.wellbeing).toBe(0);
  });
});
