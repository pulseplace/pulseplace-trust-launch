
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DemoNavigation from "../DemoNavigation";
import AIInsight from "../AIInsight";
import { questions } from "../survey/surveyQuestions";
import SurveyQuestion from "@/components/survey/SurveyQuestion";
import ResponseFeedback from "../survey/ResponseFeedback";
import SurveyExplanation from "../survey/SurveyExplanation";
import { useDemo } from "@/contexts/DemoContext";
import { calculateWeightedScore } from "../survey/scoreAnalyzer";

const DemoSurvey = () => {
  const { nextStage, setPulseScore, setPulseScoreDetails } = useDemo();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showInsight, setShowInsight] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [scoreAnalysis, setScoreAnalysis] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setShowInsight(false);
    const timer = setTimeout(() => {
      if (answers[currentQuestion] !== null) {
        setShowInsight(true);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentQuestion, answers]);

  // Calculate scores whenever answers change
  useEffect(() => {
    // Only calculate if we have at least some answers
    const validAnswers = answers.filter(a => a !== null);
    if (validAnswers.length > 0) {
      const analysis = calculateWeightedScore(answers, questions);
      setScoreAnalysis(analysis);
      
      // Update context with calculated scores (this will be used in the results page)
      setPulseScore(analysis.totalScore);
      setPulseScoreDetails(analysis);
    }
  }, [answers, setPulseScore, setPulseScoreDetails]);

  // Effect to proceed to next stage when survey is completed
  useEffect(() => {
    if (isComplete) {
      setIsProcessing(true);
      // Add a small delay for a smoother transition
      const timer = setTimeout(() => {
        nextStage();
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isComplete, nextStage]);

  const handleAnswerChange = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
    
    setTimeout(() => {
      setShowInsight(true);
    }, 500);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowInsight(false);
    } else {
      completeDemo();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const completeDemo = () => {
    setIsComplete(true);
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  // Calculate real-time score if we have some answers
  const currentScore = scoreAnalysis?.totalScore || 0;
  const hasAnsweredSome = answers.some(a => a !== null);

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

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <div>Question {currentQuestion + 1} of {questions.length}</div>
                <div>{Math.round(progressPercentage)}% complete</div>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
            
            {/* Live PulseScore Update */}
            {hasAnsweredSome && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 p-3 bg-blue-50 rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-pulse-navy">Live PulseScore:</span>
                  <span className="text-pulse-blue font-bold">{currentScore}</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>This score updates in real-time as you answer questions. It's calculated using the PulsePlace algorithm (40% Trust, 30% Engagement, 30% Wellbeing).</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                
                {scoreAnalysis && (
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                      T: {scoreAnalysis.categoryScores.trust}
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                      E: {scoreAnalysis.categoryScores.engagement}
                    </span>
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
                      W: {scoreAnalysis.categoryScores.wellbeing}
                    </span>
                  </div>
                )}
              </motion.div>
            )}
          </CardContent>
        </Card>

        {!isComplete && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
        )}
        
        {!isComplete && <SurveyExplanation />}
      </div>
      
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
      
      {isProcessing && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="fixed inset-0 bg-white/80 flex items-center justify-center z-50"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
            <div className="inline-flex items-center justify-center p-3 bg-pulse-blue/10 rounded-full mb-6">
              <BrainCircuit className="h-10 w-10 text-pulse-blue" />
            </div>
            <h2 className="text-2xl font-bold text-pulse-navy mb-3">Analyzing Responses</h2>
            <p className="text-gray-600 mb-6">
              Our AI is processing your responses and preparing your PulseScore™ analysis...
            </p>
            
            <div className="flex flex-col items-center">
              <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
                <div className="absolute left-0 top-0 h-full bg-pulse-blue animate-pulse-progress"></div>
              </div>
              <div className="h-8 w-8 border-3 border-t-pulse-blue border-r-pulse-blue border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DemoSurvey;
