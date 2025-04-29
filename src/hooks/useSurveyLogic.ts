
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { surveyQuestions } from "@/components/survey/questions";
import { useSurveyData } from "@/hooks/useSurveyData";
import { useAuth } from "@/contexts/AuthContext";

export const useSurveyLogic = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { saveSurveyResponse } = useSurveyData();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(surveyQuestions.length).fill(null));
  const [organizationName, setOrganizationName] = useState("");
  const [organizationSize, setOrganizationSize] = useState("");
  const [email, setEmail] = useState("");

  // Pre-fill email if user is logged in
  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user]);

  const handleAnswerChange = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = async () => {
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
      await handleSubmit();
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

  const handleSubmit = async () => {
    try {
      // Calculate PulseScore
      const validAnswers = answers.filter((answer) => answer !== null) as number[];
      const averageScore = validAnswers.reduce((sum, answer) => sum + answer, 0) / validAnswers.length;
      const pulseScore = Math.round(averageScore * 20); // Convert to 0-100 scale
      
      // Save survey response
      const surveyData = {
        organizationName,
        organizationSize,
        email,
        answers,
        score: pulseScore
      };

      const saved = await saveSurveyResponse(surveyData);

      if (!saved) {
        toast({
          title: "Warning",
          description: "Your responses were saved locally but couldn't be uploaded to the server.",
          variant: "default",
        });
      }
      
      // Navigate to thank you page with the score
      navigate("/thank-you", { 
        state: { 
          pulseScore,
          organizationName,
          organizationSize,
          email 
        } 
      });
    } catch (error) {
      console.error("Error submitting survey:", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your survey. Please try again.",
        variant: "destructive",
      });
    }
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
