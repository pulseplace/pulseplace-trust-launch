
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
    weight: 2.0,
    benchmarkScore: 3.7,
    contextualHelp: "Leadership transparency is a foundational element of psychological safety and organizational trust.",
    aiInsight: {
      title: "Leadership Transparency",
      description: "Organizations with high transparency scores typically see 34% higher trust ratings overall.",
      confidence: 92,
      source: "PulsePlace Research 2024",
      type: "insight"
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
      title: "Team Reliability",
      description: "Teams with high follow-through scores show 28% higher project completion rates.",
      confidence: 87,
      source: "Harvard Business Review",
      type: "insight"
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
      title: "Resource Allocation",
      description: "Adequate resource allocation is associated with 31% higher individual productivity.",
      confidence: 85,
      source: "Workplace Efficiency Study",
      type: "insight"
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
      title: "Psychological Safety",
      description: "Teams with high psychological safety are 41% more likely to innovate successfully.",
      confidence: 94,
      source: "Google Project Aristotle",
      type: "insight"
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
      title: "Career Development",
      description: "Companies with strong growth programs have 27% higher retention rates.",
      confidence: 89,
      source: "LinkedIn Workforce Report",
      type: "insight"
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
      title: "Work-Life Balance",
      description: "Organizations with high work-life balance scores report 36% lower burnout rates.",
      confidence: 91,
      source: "Workplace Wellbeing Index",
      type: "recommendation",
      impact: "high"
    }
  }
];
