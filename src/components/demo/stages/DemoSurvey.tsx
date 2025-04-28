
import React, { useState, useEffect } from "react";
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

const DemoSurvey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showInsight, setShowInsight] = useState(false);

  useEffect(() => {
    setShowInsight(false);
    const timer = setTimeout(() => {
      if (answers[currentQuestion] !== null) {
        setShowInsight(true);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentQuestion, answers]);

  const handleAnswerChange = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
    
    setTimeout(() => {
      setShowInsight(true);
    }, 500);
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

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
                    <ResponseFeedback answer={answers[currentQuestion]} />
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
      />
    </div>
  );
};

export default DemoSurvey;
