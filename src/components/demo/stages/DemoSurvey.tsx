
import React, { useState } from "react";
import { useDemo } from "@/contexts/DemoContext";
import DemoNavigation from "@/components/demo/DemoNavigation";
import { useSurveyLogic } from "@/components/demo/survey/hooks/useSurveyLogic";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import SurveyExplanation from "@/components/demo/survey/SurveyExplanation";
import LivePulseScore from "@/components/demo/survey/LivePulseScore";
import ResponseFeedback from "@/components/demo/survey/ResponseFeedback";
import ProcessingOverlay from "@/components/demo/survey/ProcessingOverlay";
import SurveyQuestion from "@/components/survey/SurveyQuestion";
import { questions } from "@/components/demo/survey/surveyQuestions";

interface DemoSurveyProps {
  onNext: () => void;
}

const DemoSurvey = ({ onNext }: DemoSurveyProps) => {
  const { previousStage } = useDemo();
  const [showExplanation, setShowExplanation] = useState(true);
  const [processing, setProcessing] = useState(false);
  
  const {
    currentQuestion,
    answers,
    handleAnswerChange,
    handleNextQuestion,
    handlePreviousQuestion,
    progressPercentage,
  } = useSurveyLogic();

  const startDemo = () => {
    setShowExplanation(false);
  };

  const finishSurvey = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      onNext();
    }, 3000);
  };

  if (showExplanation) {
    return (
      <SurveyExplanation 
        onStartClick={startDemo} 
        onBackClick={previousStage} 
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {processing ? (
          <ProcessingOverlay />
        ) : (
          <Card className="bg-white p-6 shadow-lg rounded-xl">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-pulse-blue">
                Pulse Certified™ Assessment
              </h2>
              <LivePulseScore value={progressPercentage} />
            </div>

            <div className="mb-6">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-pulse-blue transition-all duration-300"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>

            <SurveyQuestion
              id={questions[currentQuestion].id}
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              value={answers[currentQuestion] || 0}
              onChange={(value) => handleAnswerChange(currentQuestion, value)}
            />

            {answers[currentQuestion] !== null && (
              <ResponseFeedback value={answers[currentQuestion] || 0} />
            )}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {currentQuestion < questions.length - 1 ? (
                <Button
                  onClick={handleNextQuestion}
                  disabled={answers[currentQuestion] === null}
                  className="flex items-center bg-pulse-blue hover:bg-pulse-blue/90"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={finishSurvey}
                  disabled={answers[currentQuestion] === null}
                  className="flex items-center bg-pulse-blue hover:bg-pulse-blue/90"
                >
                  Complete Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DemoSurvey;
