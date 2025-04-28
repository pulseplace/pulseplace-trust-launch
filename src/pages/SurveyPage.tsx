import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import OrganizationDetailsForm from "@/components/survey/OrganizationDetailsForm";
import SurveySection from "@/components/survey/SurveySection";

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
  },
  {
    id: "q4",
    question: "My organization values work-life balance and employee wellbeing.",
    options: [
      { value: 1, label: "Strongly Disagree" },
      { value: 2, label: "Disagree" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Agree" },
      { value: 5, label: "Strongly Agree" },
    ],
  },
  {
    id: "q5",
    question: "I feel psychologically safe to express my opinions and ideas.",
    options: [
      { value: 1, label: "Strongly Disagree" },
      { value: 2, label: "Disagree" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Agree" },
      { value: 5, label: "Strongly Agree" },
    ],
  },
  {
    id: "q6",
    question: "My organization acknowledges and learns from mistakes.",
    options: [
      { value: 1, label: "Strongly Disagree" },
      { value: 2, label: "Disagree" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Agree" },
      { value: 5, label: "Strongly Agree" },
    ],
  },
];

const SurveyPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
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
    
    if (currentQuestion < questions.length - 1) {
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
    if (currentQuestion < questions.length - 1) {
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

  // Show organization details form at the start
  if (currentQuestion === 0 && organizationName === "") {
    return (
      <OrganizationDetailsForm
        organizationName={organizationName}
        organizationSize={organizationSize}
        email={email}
        onOrganizationNameChange={setOrganizationName}
        onOrganizationSizeChange={setOrganizationSize}
        onEmailChange={setEmail}
        onSubmit={startSurvey}
      />
    );
  }

  return (
    <SurveySection
      currentQuestion={currentQuestion}
      questions={questions}
      answers={answers}
      onAnswerChange={handleAnswerChange}
      onNext={handleNext}
      onBack={handleBack}
      onSkip={handleSkip}
    />
  );
};

export default SurveyPage;
