import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, ChevronRight, ChevronLeft, BrainCircuit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import DemoNavigation from "../DemoNavigation";
import AIInsight from "../AIInsight";

const questions = [
  {
    id: "q1",
    question: "I feel that leadership communicates transparently with all employees.",
    options: [
      { value: 1, label: "Strongly Disagree" },
      { value: 2, label: "Disagree" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Agree" },
      { value: 5, label: "Strongly Agree" },
    ],
    aiInsight: {
      title: "Communication Pattern Analysis",
      description: "Organizations with transparent leadership communication show 34% higher employee engagement and 29% better retention rates.",
      confidence: 94,
      source: "PulsePlace Culture Database",
      type: "insight" as const,
      impact: "high" as const,
      timeframe: "12 months"
    }
  },
  {
    id: "q2",
    question: "My colleagues consistently follow through on their commitments.",
    options: [
      { value: 1, label: "Strongly Disagree" },
      { value: 2, label: "Disagree" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Agree" },
      { value: 5, label: "Strongly Agree" },
    ],
    aiInsight: {
      title: "Trust Foundation Analysis",
      description: "Reliability among team members is the strongest predictor of long-term trust sustainability in organizations. Your industry benchmark is 3.8/5.",
      confidence: 91,
      source: "Trust Research Data"
    }
  },
  {
    id: "q3",
    question: "I have the resources and support I need to do my job effectively.",
    options: [
      { value: 1, label: "Strongly Disagree" },
      { value: 2, label: "Disagree" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Agree" },
      { value: 5, label: "Strongly Agree" },
    ],
    aiInsight: {
      title: "Resource Optimization Analysis",
      description: "Tech companies with proper resource allocation show 27% higher innovation rates and better employee satisfaction scores.",
      confidence: 88,
      type: "prediction",
      source: "Industry Benchmarking"
    }
  }
];

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

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
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
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">{question.question}</h3>
                  <RadioGroup
                    value={answers[currentQuestion]?.toString()}
                    onValueChange={(val) => handleAnswerChange(parseInt(val))}
                    className="grid grid-cols-1 gap-3 sm:grid-cols-5"
                  >
                    {question.options.map((option) => (
                      <div
                        key={option.value}
                        className="flex flex-col items-center space-y-2"
                      >
                        <RadioGroupItem
                          value={option.value.toString()}
                          id={`${question.id}-${option.value}`}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={`${question.id}-${option.value}`}
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-gray-50 hover:border-gray-200 peer-data-[state=checked]:border-pulse-blue [&:has([data-state=checked])]:border-pulse-blue cursor-pointer"
                        >
                          <div className="text-lg font-semibold">{option.value}</div>
                          <div className="text-xs text-center">{option.label}</div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={handleBack}
                      disabled={currentQuestion === 0}
                      className={`flex items-center text-gray-600 ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:text-pulse-blue'}`}
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                    </button>
                    
                    <button
                      onClick={handleNext}
                      disabled={answers[currentQuestion] === null || currentQuestion === questions.length - 1}
                      className={`flex items-center text-pulse-blue ${(answers[currentQuestion] === null || currentQuestion === questions.length - 1) ? 'opacity-50 cursor-not-allowed' : 'hover:underline'}`}
                    >
                      Next <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <MessageSquare className="h-5 w-5 mr-2 text-pulse-blue" />
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
                    <AIInsight
                      title={question.aiInsight.title}
                      description={question.aiInsight.description}
                      confidence={question.aiInsight.confidence}
                      source={question.aiInsight.source}
                      type={question.aiInsight.type}
                      impact={question.aiInsight.impact}
                      timeframe={question.aiInsight.timeframe}
                    />

                    {answers[currentQuestion] === 4 || answers[currentQuestion] === 5 ? (
                      <div className="mt-4 text-sm text-green-700 bg-green-50 p-3 rounded-md">
                        <strong>Strength detected:</strong> Your positive response suggests a healthy culture element.
                      </div>
                    ) : answers[currentQuestion] === 1 || answers[currentQuestion] === 2 ? (
                      <div className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-md">
                        <strong>Opportunity area:</strong> This response identifies a potential area for cultural improvement.
                      </div>
                    ) : null}
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
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-4 border border-blue-100 bg-blue-50 rounded-md"
        >
          <div className="flex">
            <BrainCircuit className="h-5 w-5 text-pulse-blue mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-pulse-navy">AI Survey Enhancement</h4>
              <p className="text-sm text-gray-600 mt-1">
                In the full version, our AI analyzes thousands of responses from similar organizations to provide real-time context and benchmark information. This helps survey participants understand why questions matter and how their responses compare to industry standards.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <DemoNavigation showBackButton={currentQuestion > 0} />
    </div>
  );
};

export default DemoSurvey;
