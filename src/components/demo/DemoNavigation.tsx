
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useDemo, DemoStage } from "@/contexts/DemoContext";
import { Progress } from "@/components/ui/progress";

interface DemoNavigationProps {
  showNextButton?: boolean;
  showBackButton?: boolean;
  nextLabel?: string;
  backLabel?: string;
  onNextClick?: () => void;
  onBackClick?: () => void;
}

const DemoNavigation = ({
  showNextButton = true,
  showBackButton = true,
  nextLabel = "Next",
  backLabel = "Back",
  onNextClick,
  onBackClick,
}: DemoNavigationProps) => {
  const { exitDemo, nextStage, previousStage, progressPercentage, currentStage } = useDemo();

  const handleNextClick = () => {
    if (onNextClick) {
      onNextClick();
    } else {
      nextStage();
    }
  };

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      previousStage();
    }
  };

  const getStageName = (stage: DemoStage): string => {
    switch (stage) {
      case DemoStage.WELCOME:
        return "Welcome";
      case DemoStage.ASSESSMENT_SETUP:
        return "Assessment Setup";
      case DemoStage.SURVEY:
        return "AI Survey";
      case DemoStage.ANALYSIS:
        return "AI Analysis";
      case DemoStage.RESULTS:
        return "Results";
      case DemoStage.CERTIFICATION:
        return "Certification";
      case DemoStage.DASHBOARD:
        return "Dashboard";
      case DemoStage.SHARING:
        return "Sharing";
      case DemoStage.PULSEBOT:
        return "PulseBot";
      default:
        return "";
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="container px-4 py-3">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-gray-700">
              Step: {getStageName(currentStage)}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={exitDemo}
              className="text-gray-500"
            >
              <X className="h-4 w-4 mr-1" /> Exit Demo
            </Button>
          </div>

          <Progress value={progressPercentage} className="h-1" />

          <div className="flex justify-between">
            {showBackButton ? (
              <Button
                variant="outline"
                size="sm"
                onClick={handleBackClick}
                className="text-gray-700"
              >
                <ChevronLeft className="h-4 w-4 mr-1" /> {backLabel}
              </Button>
            ) : (
              <div></div>
            )}

            {showNextButton && (
              <Button
                size="sm"
                onClick={handleNextClick}
                className="bg-pulse-blue hover:bg-pulse-blue/90"
              >
                {nextLabel} <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoNavigation;
