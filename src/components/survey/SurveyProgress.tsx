
import React from "react";
import { Progress } from "@/components/ui/progress";

interface SurveyProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

const SurveyProgress: React.FC<SurveyProgressProps> = ({
  currentQuestion,
  totalQuestions,
}) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <div>Question {currentQuestion} of {totalQuestions}</div>
        <div>{Math.round(progressPercentage)}% complete</div>
      </div>
      <Progress value={progressPercentage} className="h-2" />
    </div>
  );
};

export default SurveyProgress;
