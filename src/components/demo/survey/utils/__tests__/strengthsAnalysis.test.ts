
import { describe, it, expect } from 'vitest';
import { identifyStrengths, identifyOpportunities } from '../strengthsAnalysis';
import { SurveyQuestion } from '../../types';

describe('strengthsAnalysis', () => {
  it('identifies trust strengths based on high scores', () => {
    const mockAnswers = [5, 4, null];
    const mockQuestions: SurveyQuestion[] = [
      {
        id: '1',
        question: 'Leadership communicates transparently',
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

    const strengths = identifyStrengths(mockAnswers, mockQuestions);
    expect(strengths.length).toBeGreaterThan(0);
    expect(strengths).toContain(expect.stringContaining("leadership") || 
                                expect.stringContaining("transparent") ||
                                expect.stringContaining("communication"));
  });

  it('identifies engagement strengths', () => {
    const mockAnswers = [5, null, 4];
    const mockQuestions: SurveyQuestion[] = [
      null,
      null,
      {
        id: '3',
        question: 'Team collaboration is effective',
        options: [],
        category: 'engagement',
        weight: 1,
        aiInsight: {
          title: 'Test Insight',
          description: 'Description',
          confidence: 80,
          source: 'Internal data'
        }
      }
    ] as any;

    const strengths = identifyStrengths(mockAnswers, mockQuestions);
    expect(strengths).toContain(expect.stringContaining("team") || 
                                expect.stringContaining("collaboration") ||
                                expect.stringContaining("engagement"));
  });

  it('identifies wellbeing opportunities based on low scores', () => {
    const mockAnswers = [null, 2, null];
    const mockQuestions: SurveyQuestion[] = [
      null,
      {
        id: '2',
        question: 'Work-life balance is respected',
        options: [],
        category: 'wellbeing',
        weight: 1,
        aiInsight: {
          title: 'Test Insight',
          description: 'Description',
          confidence: 80,
          source: 'Internal data'
        }
      },
      null
    ] as any;

    const opportunities = identifyOpportunities(mockAnswers, mockQuestions);
    expect(opportunities).toContain(expect.stringContaining("work-life") || 
                                   expect.stringContaining("balance") ||
                                   expect.stringContaining("wellbeing"));
  });
});
