
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
  SHARING = "sharing",
}

interface DemoContextType {
  isDemoActive: boolean;
  currentStage: DemoStage;
  pulseScore: number;
  organizationName: string;
  startDemo: () => void;
  exitDemo: () => void;
  nextStage: () => void;
  previousStage: () => void;
  setStage: (stage: DemoStage) => void;
  progressPercentage: number;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [currentStage, setCurrentStage] = useState<DemoStage>(DemoStage.WELCOME);
  const [pulseScore, setPulseScore] = useState(85);
  const [organizationName, setOrganizationName] = useState("Acme Inc.");

  const stages = Object.values(DemoStage);

  const startDemo = () => {
    setIsDemoActive(true);
    setCurrentStage(DemoStage.WELCOME);
  };

  const exitDemo = () => {
    setIsDemoActive(false);
  };

  const nextStage = () => {
    const currentIndex = stages.indexOf(currentStage);
    if (currentIndex < stages.length - 1) {
      setCurrentStage(stages[currentIndex + 1]);
    }
  };

  const previousStage = () => {
    const currentIndex = stages.indexOf(currentStage);
    if (currentIndex > 0) {
      setCurrentStage(stages[currentIndex - 1]);
    }
  };

  const setStage = (stage: DemoStage) => {
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
        organizationName,
        startDemo,
        exitDemo,
        nextStage,
        previousStage,
        setStage,
        progressPercentage,
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
