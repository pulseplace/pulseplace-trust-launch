
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SurveyQuestion from "@/components/survey/SurveyQuestion";
import SurveyProgress from "@/components/survey/SurveyProgress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

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

  const handleSubmit = () => {
    // In a real app, we would send the survey data to a backend
    // For now, we'll just simulate a submission and navigate to the thank you page
    
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

  const handleSkipQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      window.scrollTo(0, 0);
    } else {
      handleSubmit();
    }
  };

  // Show organization details input form at the start
  if (currentQuestion === 0 && organizationName === "") {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-pulse-blue">PulsePlace.ai</h1>
            <h2 className="mt-3 text-xl font-semibold">Get Started with Your Trust Assessment</h2>
            <p className="mt-2 text-gray-500">
              Tell us a bit about your organization to begin.
            </p>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="organization-name">Organization Name</Label>
                  <Input
                    id="organization-name"
                    placeholder="Enter your organization name"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="organization-size">Organization Size</Label>
                  <Input
                    id="organization-size"
                    placeholder="Number of employees"
                    value={organizationSize}
                    onChange={(e) => setOrganizationSize(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email to receive results"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <Button 
                  type="button" 
                  className="w-full bg-pulse-blue hover:bg-pulse-blue/90"
                  onClick={handleNext}
                  disabled={!organizationName || !email}
                >
                  Start Assessment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-pulse-blue">PulsePlace.ai Assessment</h1>
          <p className="mt-2 text-gray-500">
            Help us understand your workplace culture and trust framework.
          </p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <SurveyProgress 
              currentQuestion={currentQuestion + 1} 
              totalQuestions={questions.length} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <SurveyQuestion
              id={question.id}
              question={question.question}
              options={question.options}
              value={answers[currentQuestion]}
              onChange={handleAnswerChange}
            />
            
            <div className="mt-8 flex justify-between">
              <div>
                {currentQuestion > 0 && (
                  <Button variant="outline" onClick={handleBack}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                )}
              </div>
              
              <div className="flex space-x-3">
                <Button variant="ghost" onClick={handleSkipQuestion}>
                  Skip
                </Button>
                
                <Button 
                  onClick={handleNext}
                  disabled={answers[currentQuestion] === null}
                  className="bg-pulse-blue hover:bg-pulse-blue/90"
                >
                  {currentQuestion < questions.length - 1 ? (
                    <>
                      Next
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SurveyPage;
