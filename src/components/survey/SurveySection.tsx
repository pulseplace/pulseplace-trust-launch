
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SurveyQuestion from './SurveyQuestion';
import SurveyProgress from './SurveyProgress';

interface SurveySectionProps {
  currentQuestion: number;
  questions: any[];
  answers: (number | null)[];
  onAnswerChange: (value: number) => void;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

const SurveySection = ({
  currentQuestion,
  questions,
  answers,
  onAnswerChange,
  onNext,
  onBack,
  onSkip,
}: SurveySectionProps) => {
  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-pulse-blue">PulsePlace.ai Assessment</h1>
          <p className="mt-2 text-gray-500">
            Help us understand your workplace culture and trust framework.
          </p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <SurveyProgress 
              currentQuestion={currentQuestion + 1} 
              totalQuestions={questions.length} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <SurveyQuestion
              id={question.id}
              question={question.question}
              options={question.options}
              value={answers[currentQuestion]}
              onChange={onAnswerChange}
            />
            
            <div className="mt-8 flex justify-between">
              <div>
                {currentQuestion > 0 && (
                  <Button variant="outline" onClick={onBack}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                )}
              </div>
              
              <div className="flex space-x-3">
                <Button variant="ghost" onClick={onSkip}>
                  Skip
                </Button>
                
                <Button 
                  onClick={onNext}
                  disabled={answers[currentQuestion] === null}
                  className="bg-pulse-blue hover:bg-pulse-blue/90"
                >
                  {currentQuestion < questions.length - 1 ? (
                    <>
                      Next
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SurveySection;
