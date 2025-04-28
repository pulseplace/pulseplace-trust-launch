
import { useState, useEffect } from "react";
import { useDemo } from "@/contexts/DemoContext";
import { calculateWeightedScore } from "../scoreAnalyzer";
import { questions } from "../surveyQuestions";
import { toast } from "@/components/ui/use-toast";

export const useSurveyLogic = () => {
  const { nextStage, setPulseScore, setPulseScoreDetails } = useDemo();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showInsight, setShowInsight] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [scoreAnalysis, setScoreAnalysis] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const validAnswers = answers.filter(a => a !== null);
    if (validAnswers.length > 0) {
      const analysis = calculateWeightedScore(answers, questions);
      setScoreAnalysis(analysis);
      setPulseScore(analysis.totalScore);
      setPulseScoreDetails(analysis);
    }
  }, [answers, setPulseScore, setPulseScoreDetails]);

  useEffect(() => {
    if (isComplete) {
      setIsProcessing(true);
      const timer = setTimeout(() => {
        nextStage(); // This advances to the next stage in the demo flow
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
      completeDemo(); // This function completes the survey
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const completeDemo = () => {
    // Show a success toast
    toast({
      title: "Survey Complete!",
      description: "Preparing your PulseScore™ analysis...",
      duration: 2000,
    });
    
    setIsComplete(true);
  };

  return {
    currentQuestion,
    answers,
    showInsight,
    isComplete,
    isProcessing,
    scoreAnalysis,
    handleAnswerChange,
    handleNextQuestion,
    handlePreviousQuestion,
    progressPercentage: ((currentQuestion + 1) / questions.length) * 100,
  };
};
