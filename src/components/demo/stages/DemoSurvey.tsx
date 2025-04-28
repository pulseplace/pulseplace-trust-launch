
import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import DemoNavigation from "../DemoNavigation";
import AIInsight from "../AIInsight";
import { questions } from "../survey/surveyQuestions";
import SurveyQuestion from "@/components/survey/SurveyQuestion";
import ResponseFeedback from "../survey/ResponseFeedback";
import SurveyExplanation from "../survey/SurveyExplanation";
import { useSurveyLogic } from "../survey/hooks/useSurveyLogic";
import LivePulseScore from "../survey/LivePulseScore";
import ProcessingOverlay from "../survey/ProcessingOverlay";

const DemoSurvey = () => {
  const {
    currentQuestion,
    answers,
    showInsight,
    isComplete,
    isProcessing,
    scoreAnalysis,
    handleAnswerChange,
    handleNextQuestion,
    handlePreviousQuestion,
    progressPercentage,
  } = useSurveyLogic();

  const question = questions[currentQuestion];
  const hasAnsweredSome = answers.some(a => a !== null);
  const currentScore = scoreAnalysis?.totalScore || 0;
  const isLastQuestion = currentQuestion === questions.length - 1;

  // DEBUG logging
  console.log("Survey Status:", {
    isComplete,
    isProcessing,
    currentQuestion,
    totalQuestions: questions.length,
    answersCount: answers.filter(a => a !== null).length,
    pulseScore: currentScore
  });

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-pulse-blue/10 rounded-full mb-4">
            <BrainCircuit className="h-10 w-10 text-pulse-blue" />
          </div>
          <h1 className="text-3xl font-bold text-pulse-navy mb-2">
            AI-Enhanced Survey Experience
          </h1>
          <p className="text-lg text-gray-600">
            See how our AI provides real-time context and insights while you complete your assessment
          </p>
        </div>

        {!isComplete && (
          <>
            {/* Progress Card */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div>Question {currentQuestion + 1} of {questions.length}</div>
                    <div>{Math.round(progressPercentage)}% complete</div>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>
                <LivePulseScore 
                  scoreAnalysis={scoreAnalysis}
                  hasAnsweredSome={hasAnsweredSome}
                  currentScore={currentScore}
                />
              </CardContent>
            </Card>

            {/* Survey Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Question Card */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="pt-6">
                    <SurveyQuestion
                      id={question.id}
                      question={question.question}
                      options={question.options}
                      value={answers[currentQuestion]}
                      onChange={handleAnswerChange}
                      category={question.category}
                      contextualHelp={question.contextualHelp}
                    />
                  </CardContent>
                </Card>
              </div>
              
              {/* AI Insights Card */}
              <div className="lg:col-span-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center text-base">
                      <BrainCircuit className="h-5 w-5 mr-2 text-pulse-blue" />
                      AI Context & Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {showInsight ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <AIInsight {...question.aiInsight} />
                        <ResponseFeedback 
                          answer={answers[currentQuestion]} 
                          questionId={question.id}
                        />
                      </motion.div>
                    ) : (
                      <div className="text-sm text-gray-500 italic">
                        Answer the question to see AI insights...
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>

            <SurveyExplanation />
          </>
        )}

        {!isComplete && (
          <DemoNavigation 
            showBackButton={currentQuestion > 0}
            showNextButton={answers[currentQuestion] !== null}
            nextLabel={isLastQuestion ? "Complete Survey" : "Next Question"}
            backLabel="Previous Question"
            onNextClick={handleNextQuestion}
            onBackClick={handlePreviousQuestion}
          />
        )}
      </div>
      
      {isProcessing && <ProcessingOverlay />}
    </div>
  );
};

export default DemoSurvey;
