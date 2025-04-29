
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

  // Whenever answers change, recalculate the score
  useEffect(() => {
    const validAnswers = answers.filter(a => a !== null);
    if (validAnswers.length > 0) {
      const analysis = calculateWeightedScore(answers, questions);
      setScoreAnalysis(analysis);
      setPulseScore(analysis.totalScore);
      setPulseScoreDetails(analysis);
    }
  }, [answers, setPulseScore, setPulseScoreDetails]);

  // When survey is completed, advance to next stage after a delay
  useEffect(() => {
    if (isComplete) {
      setIsProcessing(true);
      console.log("Survey completed, advancing to next stage after delay...");
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
    
    // Debug log
    console.log(`Answer changed for question ${currentQuestion + 1}/${questions.length} to ${value}`);
    
    setTimeout(() => {
      setShowInsight(true);
    }, 500);
  };

  const handleNextQuestion = () => {
    // Debug log current state
    const isLast = currentQuestion === questions.length - 1;
    console.log(`Current question: ${currentQuestion + 1}/${questions.length}, isLastQuestion: ${isLast}`);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowInsight(false);
      console.log(`Advanced to next question: ${currentQuestion + 2}/${questions.length}`);
    } else {
      // We're at the last question, complete the survey
      console.log("Last question reached, completing survey...");
      completeDemo();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      console.log(`Moved back to question: ${currentQuestion}/${questions.length}`);
    }
  };

  const completeDemo = () => {
    console.log("Survey complete function called");
    
    // Show a success toast
    toast({
      title: "Survey Complete!",
      description: "Preparing your PulseScore™ analysis...",
      duration: 2000,
    });
    
    // Set complete state to trigger the useEffect that advances stages
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
