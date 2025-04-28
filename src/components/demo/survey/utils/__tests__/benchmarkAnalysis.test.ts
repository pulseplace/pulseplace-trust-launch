
import { describe, it, expect } from 'vitest';
import { calculateBenchmarkComparison } from '../benchmarkAnalysis';
import { SurveyQuestion } from '../../types';

describe('calculateBenchmarkComparison', () => {
  it('calculates correct benchmark difference', () => {
    const mockAnswers = [4, 5, null, 3];
    const mockQuestions: SurveyQuestion[] = [
      { 
        id: '1', 
        question: 'Q1', 
        options: [], 
        category: 'trust', 
        weight: 1, 
        benchmarkScore: 3,
        aiInsight: {
          title: 'Test Insight',
          description: 'Description',
          confidence: 80,
          source: 'Internal data'
        }
      },
      { 
        id: '2', 
        question: 'Q2', 
        options: [], 
        category: 'trust', 
        weight: 1, 
        benchmarkScore: 4,
        aiInsight: {
          title: 'Test Insight',
          description: 'Description',
          confidence: 80,
          source: 'Internal data'
        }
      },
      { 
        id: '3', 
        question: 'Q3', 
        options: [], 
        category: 'trust', 
        weight: 1, 
        benchmarkScore: 3,
        aiInsight: {
          title: 'Test Insight',
          description: 'Description',
          confidence: 80,
          source: 'Internal data'
        }
      },
      { 
        id: '4', 
        question: 'Q4', 
        options: [], 
        category: 'trust', 
        weight: 1, 
        benchmarkScore: 4,
        aiInsight: {
          title: 'Test Insight',
          description: 'Description',
          confidence: 80,
          source: 'Internal data'
        }
      }
    ];

    const result = calculateBenchmarkComparison(mockAnswers, mockQuestions);
    expect(result).toBe(20); // ((1 + 1 + -1) / 3) * 100 / 5 = 20
  });

  it('returns 0 when no valid answers', () => {
    const mockAnswers = [null, null];
    const mockQuestions: SurveyQuestion[] = [
      { 
        id: '1', 
        question: 'Q1', 
        options: [], 
        category: 'trust', 
        weight: 1, 
        benchmarkScore: 3,
        aiInsight: {
          title: 'Test Insight',
          description: 'Description',
          confidence: 80,
          source: 'Internal data'
        }
      },
      { 
        id: '2', 
        question: 'Q2', 
        options: [], 
        category: 'trust', 
        weight: 1, 
        benchmarkScore: 4,
        aiInsight: {
          title: 'Test Insight',
          description: 'Description',
          confidence: 80,
          source: 'Internal data'
        }
      }
    ];

    const result = calculateBenchmarkComparison(mockAnswers, mockQuestions);
    expect(result).toBe(0);
  });
});
