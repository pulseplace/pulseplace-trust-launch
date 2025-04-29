
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
  const [hasError, setHasError] = useState(false);

  // Whenever answers change, recalculate the score
  useEffect(() => {
    const validAnswers = answers.filter(a => a !== null);
    if (validAnswers.length > 0) {
      try {
        const analysis = calculateWeightedScore(answers, questions);
        setScoreAnalysis(analysis);
        setPulseScore(analysis.totalScore);
        setPulseScoreDetails(analysis);
        setHasError(false);
      } catch (error) {
        console.error("Error calculating score:", error);
        setHasError(true);
        toast({
          title: "Calculation Error",
          description: "There was an error calculating your score. Please try again.",
          variant: "destructive",
        });
      }
    }
  }, [answers, setPulseScore, setPulseScoreDetails]);

  // When survey is completed, advance to next stage after a delay
  useEffect(() => {
    if (isComplete) {
      setIsProcessing(true);
      console.log("Survey completed, advancing to next stage after delay...");
      const timer = setTimeout(() => {
        try {
          nextStage(); // This advances to the next stage in the demo flow
        } catch (error) {
          console.error("Error advancing to next stage:", error);
          toast({
            title: "Navigation Error",
            description: "There was an error moving to the next step. Please try again.",
            variant: "destructive",
          });
          setIsProcessing(false);
          setIsComplete(false);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isComplete, nextStage]);

  const handleAnswerChange = (value: number) => {
    try {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = value;
      setAnswers(newAnswers);
      
      // Debug log
      console.log(`Answer changed for question ${currentQuestion + 1}/${questions.length} to ${value}`);
      
      // Show insight immediately to improve user experience
      setShowInsight(true);
    } catch (error) {
      console.error("Error handling answer change:", error);
      toast({
        title: "Input Error",
        description: "There was an error saving your answer. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleNextQuestion = () => {
    try {
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
    } catch (error) {
      console.error("Error navigating to next question:", error);
      toast({
        title: "Navigation Error",
        description: "There was an error moving to the next question. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handlePreviousQuestion = () => {
    try {
      if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
        // Restore previous insight state when going back
        setShowInsight(answers[currentQuestion - 1] !== null);
        console.log(`Moved back to question: ${currentQuestion}/${questions.length}`);
      }
    } catch (error) {
      console.error("Error navigating to previous question:", error);
      toast({
        title: "Navigation Error",
        description: "There was an error moving to the previous question. Please try again.",
        variant: "destructive",
      });
    }
  };

  const completeDemo = () => {
    try {
      console.log("Survey complete function called");
      
      // Validate we have enough answers to generate a meaningful score
      const validAnswers = answers.filter(a => a !== null);
      if (validAnswers.length < Math.floor(questions.length / 2)) {
        toast({
          title: "More Answers Needed",
          description: "Please answer more questions to get an accurate score.",
          variant: "warning",
          duration: 3000,
        });
        return;
      }
      
      // Show a success toast
      toast({
        title: "Survey Complete!",
        description: "Preparing your PulseScore™ analysis...",
        duration: 2000,
      });
      
      // Set complete state to trigger the useEffect that advances stages
      setIsComplete(true);
    } catch (error) {
      console.error("Error completing survey:", error);
      toast({
        title: "Submission Error",
        description: "There was an error completing the survey. Please try again.",
        variant: "destructive",
      });
    }
  };

  return {
    currentQuestion,
    answers,
    showInsight,
    isComplete,
    isProcessing,
    scoreAnalysis,
    hasError,
    handleAnswerChange,
    handleNextQuestion,
    handlePreviousQuestion,
    progressPercentage: ((currentQuestion + 1) / questions.length) * 100,
  };
};
