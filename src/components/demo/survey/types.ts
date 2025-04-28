
export interface SurveyQuestion {
  id: string;
  question: string;
  options: {
    value: number;
    label: string;
  }[];
  aiInsight: {
    title: string;
    description: string;
    confidence: number;
    source: string;
    type?: "insight" | "prediction" | "recommendation";
    impact?: "high" | "medium" | "low";
    timeframe?: string;
  };
  category: "trust" | "engagement" | "wellbeing";
  weight: number;
  benchmarkScore?: number;
  contextualHelp?: string;
}

export interface SurveyResponse {
  questionId: string;
  value: number;
  category: string;
  weight: number;
}

export interface ScoreAnalysis {
  totalScore: number;
  categoryScores: {
    trust: number;
    engagement: number;
    wellbeing: number;
  };
  strengths: string[];
  opportunities: string[];
  recommendations: string[];
  benchmarkComparison: number; // Percentage above/below industry benchmark
}
