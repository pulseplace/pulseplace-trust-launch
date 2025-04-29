
export interface SurveyQuestion {
  id: string;
  question: string;
  options: { value: number; label: string }[];
}

export interface SurveyState {
  currentQuestion: number;
  answers: (number | null)[];
  organizationName: string;
  organizationSize: string;
  email: string;
}
