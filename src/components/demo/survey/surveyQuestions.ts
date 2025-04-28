
import { SurveyQuestion } from "./types";

export const questions: SurveyQuestion[] = [
  {
    id: "q1",
    question: "I feel that leadership communicates transparently with all employees.",
    options: [
      { value: 1, label: "Strongly Disagree" },
      { value: 2, label: "Disagree" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Agree" },
      { value: 5, label: "Strongly Agree" },
    ],
    aiInsight: {
      title: "Communication Pattern Analysis",
      description: "Organizations with transparent leadership communication show 34% higher employee engagement and 29% better retention rates.",
      confidence: 94,
      source: "PulsePlace Culture Database",
      type: "insight",
      impact: "high",
      timeframe: "12 months"
    }
  },
  {
    id: "q2",
    question: "My colleagues consistently follow through on their commitments.",
    options: [
      { value: 1, label: "Strongly Disagree" },
      { value: 2, label: "Disagree" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Agree" },
      { value: 5, label: "Strongly Agree" },
    ],
    aiInsight: {
      title: "Trust Foundation Analysis",
      description: "Reliability among team members is the strongest predictor of long-term trust sustainability in organizations. Your industry benchmark is 3.8/5.",
      confidence: 91,
      source: "Trust Research Data",
      type: "prediction"
    }
  },
  {
    id: "q3",
    question: "I have the resources and support I need to do my job effectively.",
    options: [
      { value: 1, label: "Strongly Disagree" },
      { value: 2, label: "Disagree" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Agree" },
      { value: 5, label: "Strongly Agree" },
    ],
    aiInsight: {
      title: "Resource Optimization Analysis",
      description: "Tech companies with proper resource allocation show 27% higher innovation rates and better employee satisfaction scores.",
      confidence: 88,
      type: "prediction",
      source: "Industry Benchmarking"
    }
  }
];
