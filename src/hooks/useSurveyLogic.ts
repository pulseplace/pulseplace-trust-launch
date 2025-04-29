
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { surveyQuestions } from "@/components/survey/questions";

export const useSurveyLogic = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(surveyQuestions.length).fill(null));
  const [organizationName, setOrganizationName] = useState("");
  const [organizationSize, setOrganizationSize] = useState("");
  const [email, setEmail] = useState("");

  const handleAnswerChange = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[currentQuestion] === null) {
      toast({
        title: "Please select an answer",
        description: "You need to select an option to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      window.scrollTo(0, 0);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSkip = () => {
    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      window.scrollTo(0, 0);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // Calculate PulseScore
    const validAnswers = answers.filter((answer) => answer !== null) as number[];
    const averageScore = validAnswers.reduce((sum, answer) => sum + answer, 0) / validAnswers.length;
    const pulseScore = Math.round(averageScore * 20); // Convert to 0-100 scale
    
    // Navigate to thank you page with the score
    navigate("/thank-you", { 
      state: { 
        pulseScore,
        organizationName,
        organizationSize,
        email 
      } 
    });
  };

  const startSurvey = () => {
    setCurrentQuestion(0);
  };

  return {
    currentQuestion,
    answers,
    organizationName,
    organizationSize,
    email,
    questions: surveyQuestions,
    setOrganizationName,
    setOrganizationSize,
    setEmail,
    handleAnswerChange,
    handleNext,
    handleBack,
    handleSkip,
    startSurvey
  };
};
