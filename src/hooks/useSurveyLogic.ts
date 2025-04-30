
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { surveyQuestions } from "@/components/survey/questions";
import { useSurveyData } from "@/hooks/useSurveyData";

export const useSurveyLogic = () => {
  const navigate = useNavigate();
  const { saveSurveyResponse } = useSurveyData();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(surveyQuestions.length).fill(null));
  const [organizationName, setOrganizationName] = useState("");
  const [organizationSize, setOrganizationSize] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showInsight, setShowInsight] = useState(false);
  
  const questions = surveyQuestions;
  
  // Calculate the total score when answers change
  const calculateScore = () => {
    const validAnswers = answers.filter(a => a !== null);
    if (validAnswers.length === 0) return 0;
    
    return Math.round(validAnswers.reduce((sum, val) => sum + (val || 0), 0) / validAnswers.length * 20);
  };

  const handleAnswerChange = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
    setShowInsight(true);
  };

  const handleNext = async () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowInsight(false);
    } else {
      // Submit survey
      await handleSubmitSurvey();
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowInsight(answers[currentQuestion - 1] !== null);
    }
  };

  const handleSkip = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowInsight(false);
    }
  };

  const startSurvey = () => {
    if (!organizationName || !email) {
      toast({
        title: "Missing Information",
        description: "Please provide your organization name and email.",
        variant: "destructive",
      });
      return;
    }
    
    setCurrentQuestion(1); // Move to first actual question
  };

  const handleSubmitSurvey = async () => {
    try {
      setIsSubmitting(true);
      
      const validAnswers = answers.filter(a => a !== null);
      if (validAnswers.length < 3) {
        toast({
          title: "More Responses Needed",
          description: "Please answer at least 3 questions to generate meaningful insights.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      
      const score = calculateScore();
      
      // Save the survey response
      const success = await saveSurveyResponse({
        organizationName,
        organizationSize,
        email,
        answers,
        score,
      });
      
      if (success) {
        toast({
          title: "Survey Completed",
          description: "Thank you for completing the survey!",
        });
        navigate("/thank-you");
      }
    } catch (error) {
      console.error("Error submitting survey:", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your survey. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    currentQuestion,
    answers,
    organizationName,
    organizationSize,
    email,
    questions,
    showInsight,
    isSubmitting,
    setOrganizationName,
    setOrganizationSize,
    setEmail,
    handleAnswerChange,
    handleNext,
    handleBack,
    handleSkip,
    startSurvey,
    progressPercentage: ((currentQuestion + 1) / questions.length) * 100
  };
};
