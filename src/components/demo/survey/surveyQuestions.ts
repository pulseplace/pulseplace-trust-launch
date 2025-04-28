
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
    category: "trust",
    weight: 2.0, // High importance for trust score
    benchmarkScore: 3.7,
    contextualHelp: "Leadership transparency is a foundational element of psychological safety and organizational trust.",
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
    category: "trust", 
    weight: 1.5,
    benchmarkScore: 3.8,
    contextualHelp: "Peer reliability directly impacts team cohesion and collaboration effectiveness.",
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
    category: "wellbeing",
    weight: 1.8,
    benchmarkScore: 3.5,
    contextualHelp: "Resource availability correlates strongly with employee satisfaction and productivity levels.",
    aiInsight: {
      title: "Resource Optimization Analysis",
      description: "Tech companies with proper resource allocation show 27% higher innovation rates and better employee satisfaction scores.",
      confidence: 88,
      type: "prediction",
      source: "Industry Benchmarking"
    }
  },
  {
    id: "q4",
    question: "I feel empowered to share my ideas and opinions without fear of negative consequences.",
    options: [
      { value: 1, label: "Strongly Disagree" },
      { value: 2, label: "Disagree" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Agree" },
      { value: 5, label: "Strongly Agree" },
    ],
    category: "engagement",
    weight: 2.0,
    benchmarkScore: 3.4,
    contextualHelp: "Psychological safety is the #1 predictor of team innovation and problem-solving capability.",
    aiInsight: {
      title: "Psychological Safety Analysis",
      description: "Teams with high psychological safety are 23% more likely to bring innovative ideas forward and report 31% higher job satisfaction.",
      confidence: 95,
      source: "Workplace Culture Studies",
      type: "insight",
      impact: "high"
    }
  },
  {
    id: "q5",
    question: "My organization actively supports my professional growth and development.",
    options: [
      { value: 1, label: "Strongly Disagree" },
      { value: 2, label: "Disagree" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Agree" },
      { value: 5, label: "Strongly Agree" },
    ],
    category: "engagement",
    weight: 1.7,
    benchmarkScore: 3.3,
    contextualHelp: "Growth opportunities are consistently ranked in the top 3 factors for employee retention.",
    aiInsight: {
      title: "Development Impact Analysis",
      description: "Organizations with strong professional development programs see 34% higher retention and 29% better performance metrics compared to industry averages.",
      confidence: 89,
      source: "Talent Development Benchmark",
      type: "prediction",
      impact: "medium"
    }
  },
  {
    id: "q6",
    question: "I experience a healthy work-life balance in my current role.",
    options: [
      { value: 1, label: "Strongly Disagree" },
      { value: 2, label: "Disagree" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Agree" },
      { value: 5, label: "Strongly Agree" },
    ],
    category: "wellbeing",
    weight: 1.9,
    benchmarkScore: 3.2,
    contextualHelp: "Work-life balance is directly connected to burnout prevention and long-term employee wellbeing.",
    aiInsight: {
      title: "Wellbeing Trend Analysis",
      description: "Companies supporting healthy boundaries see 42% lower burnout rates and 18% higher productivity over time compared to those with poor work-life balance policies.",
      confidence: 92,
      source: "Workplace Wellbeing Studies",
      type: "recommendation",
      impact: "high"
    }
  }
];
