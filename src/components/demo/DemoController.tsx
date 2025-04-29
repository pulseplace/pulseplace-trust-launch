
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
import { FloatingPulseBotButton } from "./pulsebot/FloatingPulseBotButton";
import { toast } from "@/components/ui/use-toast";

const DemoController = () => {
  const { isDemoActive, currentStage, setStage } = useDemo();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isDemoActive) {
      navigate("/");
    }
  }, [isDemoActive, navigate]);

  useEffect(() => {
    if (isDemoActive && currentStage === DemoStage.WELCOME) {
      toast({
        title: "Demo Mode Active",
        description: "Navigate through our interactive demo or click the PulseBot button for assistance.",
        duration: 5000,
      });
    }
  }, [isDemoActive]);

  // Debug logging
  useEffect(() => {
    console.log("Demo Stage Changed:", currentStage);
  }, [currentStage]);

  if (!isDemoActive) return null;

  // Only show PulseBot button when not already on the PulseBot stage
  const showPulseBotButton = currentStage !== DemoStage.PULSEBOT;

  const handlePulseBotClick = () => {
    setStage(DemoStage.PULSEBOT);
  };

  const getBackgroundClass = () => {
    switch (currentStage) {
      case DemoStage.WELCOME:
        return "bg-gradient-to-b from-white via-pulse-blue/5 to-white";
      case DemoStage.CERTIFICATION:
        return "bg-gradient-to-b from-white via-pulse-coral/5 to-white";
      case DemoStage.PULSEBOT:
        return "bg-gradient-to-b from-white via-pulse-navy/5 to-white";
      default:
        return "bg-gray-50";
    }
  };

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
      case DemoStage.RESULTS:
        return <DemoResults />;
      case DemoStage.CERTIFICATION:
        return <DemoCertification />;
      case DemoStage.DASHBOARD:
        return <DemoDashboard />;
      case DemoStage.SHARING:
        return <DemoSharing />;
      case DemoStage.PULSEBOT:
        return <DemoPulseBot />;
      default:
        return <DemoWelcome />;
    }
  };

  return (
    <div className={`min-h-screen pb-20 ${getBackgroundClass()} bg-pattern`}>
      {renderStageContent()}
      {showPulseBotButton && <FloatingPulseBotButton onClick={handlePulseBotClick} />}
    </div>
  );
};

export default DemoController;
