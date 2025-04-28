import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDemo, DemoStage } from "@/contexts/DemoContext";
import DemoWelcome from "./stages/DemoWelcome";
import DemoAssessmentSetup from "./stages/DemoAssessmentSetup";
import DemoSurvey from "./stages/DemoSurvey";
import DemoAnalysis from "./stages/DemoAnalysis";
import DemoResults from "./stages/DemoResults";
import DemoCertification from "./stages/DemoCertification";
import DemoDashboard from "./stages/DemoDashboard";
import DemoSharing from "./stages/DemoSharing";
import DemoPulseBot from "./stages/DemoPulseBot";

const DemoController = () => {
  const { isDemoActive, currentStage } = useDemo();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isDemoActive) {
      navigate("/");
    }
  }, [isDemoActive, navigate]);

  if (!isDemoActive) return null;

  const renderStageContent = () => {
    switch (currentStage) {
      case DemoStage.WELCOME:
        return <DemoWelcome />;
      case DemoStage.ASSESSMENT_SETUP:
        return <DemoAssessmentSetup />;
      case DemoStage.SURVEY:
        return <DemoSurvey />;
      case DemoStage.ANALYSIS:
        return <DemoAnalysis />;
      case DemoStage.PULSEBOT:
        return <DemoPulseBot />;
      case DemoStage.RESULTS:
        return <DemoResults />;
      case DemoStage.CERTIFICATION:
        return <DemoCertification />;
      case DemoStage.DASHBOARD:
        return <DemoDashboard />;
      case DemoStage.SHARING:
        return <DemoSharing />;
      default:
        return <DemoWelcome />;
    }
  };

  return <div className="min-h-screen bg-gray-50 pb-20">{renderStageContent()}</div>;
};

export default DemoController;
