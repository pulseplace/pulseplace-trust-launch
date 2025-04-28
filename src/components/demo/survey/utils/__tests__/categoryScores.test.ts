
import { describe, it, expect } from 'vitest';
import { calculateCategoryScores, initializeCategoryTotals } from '../categoryScores';
import { SurveyQuestion } from '../../types';

describe('categoryScores', () => {
  describe('initializeCategoryTotals', () => {
    it('initializes category totals with correct structure', () => {
      const result = initializeCategoryTotals();
      expect(result).toEqual({
        trust: { sum: 0, count: 0, weightSum: 0 },
        engagement: { sum: 0, count: 0, weightSum: 0 },
        wellbeing: { sum: 0, count: 0, weightSum: 0 }
      });
    });
  });

  describe('calculateCategoryScores', () => {
    it('calculates weighted scores correctly for each category', () => {
      const mockAnswers = [
        {
          value: 4,
          question: {
            id: '1',
            question: 'Q1',
            options: [],
            category: 'trust',
            weight: 2
          }
        },
        {
          value: 5,
          question: {
            id: '2',
            question: 'Q2',
            options: [],
            category: 'engagement',
            weight: 1
          }
        }
      ];

      const result = calculateCategoryScores(mockAnswers);
      expect(result.trust).toBe(80); // (4 * 2 / 2) * 20 = 80
      expect(result.engagement).toBe(100); // (5 * 1 / 1) * 20 = 100
      expect(result.wellbeing).toBe(0); // No wellbeing answers
    });

    it('returns 0 for categories with no answers', () => {
      const mockAnswers: { value: number; question: SurveyQuestion }[] = [];
      const result = calculateCategoryScores(mockAnswers);
      
      expect(result.trust).toBe(0);
      expect(result.engagement).toBe(0);
      expect(result.wellbeing).toBe(0);
    });
  });
});

