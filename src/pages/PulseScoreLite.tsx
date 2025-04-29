
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";
import OrganizationDetailsForm from "@/components/survey/OrganizationDetailsForm";

const PulseScoreLite = () => {
  const navigate = useNavigate();
  const [step, setStep] = React.useState<"intro" | "form">("intro");
  const [organizationName, setOrganizationName] = React.useState("");
  const [organizationSize, setOrganizationSize] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleStartForm = () => {
    setStep("form");
  };

  const handleFormSubmit = () => {
    // Navigate to survey page with the org details
    navigate("/survey", { 
      state: { 
        organizationName,
        organizationSize,
        email 
      } 
    });
  };

  const handleBack = () => {
    if (step === "form") {
      setStep("intro");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pulse-blue/5 to-white py-12 px-4">
      <div className="container mx-auto">
        <Button 
          variant="ghost" 
          onClick={handleBack} 
          className="mb-6 hover:bg-white/50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        {step === "intro" ? (
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-pulse-navy mb-6">
              PulseScore™ Lite Assessment
            </h1>
            
            <Card className="shadow-lg border-none mb-8">
              <CardHeader>
                <h2 className="text-2xl font-semibold text-pulse-blue">
                  Measure Your Workplace Trust & Culture
                </h2>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-700">
                  Get a snapshot of your organization's trust dynamics with our complimentary 
                  assessment. This simplified version of our full certification process helps 
                  you understand the key metrics that drive workplace culture.
                </p>
                
                <h3 className="text-xl font-medium mb-3">What You'll Receive:</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    "Basic PulseScore™ rating (0-100)",
                    "Overview of trust dynamics",
                    "Comparison to industry benchmarks",
                    "Key improvement opportunities"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-pulse-coral mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={handleStartForm}
                  className="w-full bg-pulse-blue hover:bg-pulse-blue/90 mt-4"
                  size="lg"
                >
                  Start Free Assessment
                </Button>
              </CardContent>
            </Card>
            
            <div className="text-center text-sm text-gray-500">
              <p>
                The full PulsePlace.ai certification includes in-depth analysis, 
                official certification, and ongoing support.
              </p>
            </div>
          </div>
        ) : (
          <OrganizationDetailsForm
            organizationName={organizationName}
            organizationSize={organizationSize}
            email={email}
            onOrganizationNameChange={setOrganizationName}
            onOrganizationSizeChange={setOrganizationSize}
            onEmailChange={setEmail}
            onSubmit={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default PulseScoreLite;
