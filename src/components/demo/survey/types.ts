
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
}
