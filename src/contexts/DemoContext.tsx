
import React, { createContext, useContext, useState, ReactNode } from "react";

// Demo stages to track progress
export enum DemoStage {
  WELCOME = "welcome",
  ASSESSMENT_SETUP = "assessment_setup",
  SURVEY = "survey",
  ANALYSIS = "analysis",
  RESULTS = "results",
  CERTIFICATION = "certification",
  DASHBOARD = "dashboard",
  PULSEBOT = "pulsebot", // Positioned before SHARING
  SHARING = "sharing",
}

interface CategoryScores {
  trust: number;
  engagement: number;
  wellbeing: number;
}

interface PulseScoreDetails {
  totalScore: number;
  categoryScores: CategoryScores;
  strengths: string[];
  opportunities: string[];
  recommendations: string[];
  benchmarkComparison: number;
}

interface DemoContextType {
  isDemoActive: boolean;
  currentStage: DemoStage;
  pulseScore: number;
  pulseScoreDetails: PulseScoreDetails | null;
  organizationName: string;
  startDemo: () => void;
  exitDemo: () => void;
  nextStage: () => void;
  previousStage: () => void;
  setStage: (stage: DemoStage) => void;
  progressPercentage: number;
  setPulseScore: (score: number) => void;
  setPulseScoreDetails: (details: PulseScoreDetails) => void;
  setOrganizationName: (name: string) => void;
}

const defaultPulseScoreDetails: PulseScoreDetails = {
  totalScore: 85,
  categoryScores: {
    trust: 88, 
    engagement: 82, 
    wellbeing: 85
  },
  strengths: [
    "Strong leadership transparency",
    "High level of psychological safety",
    "Excellent work-life balance"
  ],
  opportunities: [
    "Improve resource allocation"
  ],
  recommendations: [
    "Implement regular transparent communication channels from leadership",
    "Create clear accountability frameworks for team commitments"
  ],
  benchmarkComparison: 12
};

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [currentStage, setCurrentStage] = useState<DemoStage>(DemoStage.WELCOME);
  const [pulseScore, setPulseScore] = useState(85);
  const [pulseScoreDetails, setPulseScoreDetails] = useState<PulseScoreDetails | null>(null);
  const [organizationName, setOrganizationName] = useState("Acme Inc.");

  // Define the stages in their correct order for consistent navigation
  const stages = Object.values(DemoStage);

  const startDemo = () => {
    setIsDemoActive(true);
    setCurrentStage(DemoStage.WELCOME);
    console.log("Demo started, stage set to WELCOME");
  };

  const exitDemo = () => {
    setIsDemoActive(false);
    console.log("Demo exited");
  };

  const nextStage = () => {
    const currentIndex = stages.indexOf(currentStage);
    if (currentIndex < stages.length - 1) {
      const nextStageValue = stages[currentIndex + 1];
      console.log(`Moving from ${currentStage} to next stage: ${nextStageValue}`);
      setCurrentStage(nextStageValue);
    } else {
      console.log("Already at last stage, cannot advance further");
    }
  };

  const previousStage = () => {
    const currentIndex = stages.indexOf(currentStage);
    if (currentIndex > 0) {
      const prevStageValue = stages[currentIndex - 1];
      console.log(`Moving from ${currentStage} to previous stage: ${prevStageValue}`);
      setCurrentStage(prevStageValue);
    } else {
      console.log("Already at first stage, cannot go back further");
    }
  };

  const setStage = (stage: DemoStage) => {
    console.log(`Setting stage directly to: ${stage}`);
    setCurrentStage(stage);
  };

  // Calculate progress percentage based on current stage
  const progressPercentage = ((stages.indexOf(currentStage) + 1) / stages.length) * 100;

  return (
    <DemoContext.Provider
      value={{
        isDemoActive,
        currentStage,
        pulseScore,
        pulseScoreDetails: pulseScoreDetails || defaultPulseScoreDetails,
        organizationName,
        startDemo,
        exitDemo,
        nextStage,
        previousStage,
        setStage,
        progressPercentage,
        setPulseScore,
        setPulseScoreDetails,
        setOrganizationName,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
}

export const useDemo = (): DemoContextType => {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error("useDemo must be used within a DemoProvider");
  }
  return context;
};
