
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
  const [isDemoComplete, setIsDemoComplete] = useState(false);
  const [scoreAnalysis, setScoreAnalysis] = useState<any>(null);

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
    setIsDemoComplete(true);
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  // Calculate real-time score if we have some answers
  const currentScore = scoreAnalysis?.totalScore || 0;
  const hasAnsweredSome = answers.some(a => a !== null);

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
        
        <SurveyExplanation />
      </div>
      
      <DemoNavigation 
        showBackButton={currentQuestion > 0}
        showNextButton={answers[currentQuestion] !== null}
        nextLabel={isLastQuestion ? "Continue to Analysis" : "Next Question"}
        backLabel="Previous Question"
        onNextClick={handleNextQuestion}
        onBackClick={handlePreviousQuestion}
      />
    </div>
  );
};

export default DemoSurvey;
