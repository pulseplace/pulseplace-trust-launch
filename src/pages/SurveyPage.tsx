
import React from "react";
import OrganizationDetailsForm from "@/components/survey/OrganizationDetailsForm";
import SurveySection from "@/components/survey/SurveySection";
import { useSurveyLogic } from "@/hooks/useSurveyLogic";

const SurveyPage = () => {
  const {
    currentQuestion,
    answers,
    organizationName,
    organizationSize,
    email,
    questions,
    setOrganizationName,
    setOrganizationSize,
    setEmail,
    handleAnswerChange,
    handleNext,
    handleBack,
    handleSkip,
    startSurvey
  } = useSurveyLogic();

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
