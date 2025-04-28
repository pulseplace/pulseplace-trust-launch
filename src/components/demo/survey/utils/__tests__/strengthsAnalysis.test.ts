
import { describe, it, expect } from 'vitest';
import { identifyStrengths, identifyOpportunities } from '../strengthsAnalysis';
import { SurveyQuestion } from '../../types';

describe('strengthsAnalysis', () => {
  const mockQuestions: SurveyQuestion[] = [
    {
      id: '1',
      question: 'I feel that leadership communicates well',
      options: [],
      category: 'trust',
      weight: 1
    },
    {
      id: '2',
      question: 'I feel engaged with my work',
      options: [],
      category: 'engagement',
      weight: 1
    },
    {
      id: '3',
      question: 'I have good work-life balance',
      options: [],
      category: 'wellbeing',
      weight: 1
    }
  ];

  describe('identifyStrengths', () => {
    it('identifies strengths correctly from high scores', () => {
      const mockAnswers = [4, 5, 3];
      const strengths = identifyStrengths(mockAnswers, mockQuestions);
      
      expect(strengths).toHaveLength(2);
      expect(strengths[0]).toContain('Strong leadership communicates well');
      expect(strengths[1]).toContain('High level of engaged with my work');
    });

    it('returns empty array when no strengths found', () => {
      const mockAnswers = [3, 3, 3];
      const strengths = identifyStrengths(mockAnswers, mockQuestions);
      expect(strengths).toHaveLength(0);
    });
  });

  describe('identifyOpportunities', () => {
    it('identifies opportunities correctly from low scores', () => {
      const mockAnswers = [2, 1, 3];
      const opportunities = identifyOpportunities(mockAnswers, mockQuestions);
      
      expect(opportunities).toHaveLength(2);
      expect(opportunities[0]).toContain('Improve leadership communicates well');
      expect(opportunities[1]).toContain('Enhance engaged with my work');
    });

    it('returns empty array when no opportunities found', () => {
      const mockAnswers = [3, 3, 3];
      const opportunities = identifyOpportunities(mockAnswers, mockQuestions);
      expect(opportunities).toHaveLength(0);
    });
  });
});

