import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Check, Download, Award } from "lucide-react";

const ThankYouPage = () => {
  const location = useLocation();
  const { pulseScore, organizationName, email } = location.state || { 
    pulseScore: 75, 
    organizationName: "Your Organization", 
    email: "user@example.com" 
  };

  const certificationStatus = pulseScore >= 70 ? "certified" : "not-certified";
  
  const getFeedback = () => {
    if (pulseScore >= 85) {
      return "Exceptional culture health! Your organization demonstrates excellence in trust and wellbeing.";
    } else if (pulseScore >= 70) {
      return "Strong culture foundation. Your organization qualifies for PulsePlace certification.";
    } else if (pulseScore >= 50) {
      return "Good progress, with opportunity areas. Review detailed insights to strengthen your culture.";
    } else {
      return "Your culture health needs attention. We've identified key improvement areas.";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <div className="bg-green-100 rounded-full p-3">
              <Check className="h-8 w-8 text-green-600" />
            </div>
          </div>
          
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            Assessment Complete!
          </h1>
          
          <p className="mt-2 text-gray-600">
            Thank you for completing the PulsePlace.ai assessment. Below is your organization's PulseScore™.
          </p>
        </div>
        
        <Card className="mb-8 overflow-hidden">
          <div className={`p-1 ${certificationStatus === "certified" ? "bg-gradient-to-r from-pulse-blue via-pulse-purple to-pulse-blue" : ""}`}>
            <CardHeader className="bg-white">
              <CardTitle>
                <span className="text-2xl font-bold">
                  Your PulseScore™: {pulseScore}
                </span>
              </CardTitle>
              <CardDescription>
                {organizationName}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="bg-white pt-6">
              <div className="space-y-4">
                <div className="relative">
                  <Progress 
                    value={pulseScore} 
                    className={`h-4 ${
                      pulseScore >= 85 ? "bg-green-500" :
                      pulseScore >= 70 ? "bg-pulse-blue" :
                      pulseScore >= 50 ? "bg-amber-500" : "bg-red-500"
                    }`}
                  />
                  <div className="absolute -top-2 left-[70%] h-6 border-l-2 border-dashed border-gray-400">
                    <div className="absolute -left-[30px] -top-4 text-xs text-gray-500">
                      Certification
                      <br />
                      Threshold
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mt-2">
                  {getFeedback()}
                </p>
                
                <div className="pt-4">
                  {certificationStatus === "certified" ? (
                    <div className="rounded-lg bg-green-50 p-4 border border-green-100">
                      <div className="flex">
                        <Award className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <div>
                          <h3 className="text-sm font-medium text-green-800">
                            Congratulations! Your organization is eligible for PulsePlace Certification
                          </h3>
                          <div className="mt-2 text-sm text-green-700">
                            <p>
                              Your organization has demonstrated a strong culture of trust and wellbeing. 
                              You can now display the PulsePlace Certified badge on your website and 
                              recruitment materials.
                            </p>
                          </div>
                          <div className="mt-4">
                            <Button 
                              className="bg-green-600 hover:bg-green-700 text-white" 
                              size="sm"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Download Certification Badge
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-lg bg-amber-50 p-4 border border-amber-100">
                      <div className="flex">
                        <div className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0">⚠️</div>
                        <div>
                          <h3 className="text-sm font-medium text-amber-800">
                            Your organization is not currently eligible for PulsePlace Certification
                          </h3>
                          <div className="mt-2 text-sm text-amber-700">
                            <p>
                              Based on your assessment, we've identified several areas for improvement.
                              Our team can help you develop strategies to strengthen your workplace culture.
                            </p>
                          </div>
                          <div className="mt-4">
                            <Button 
                              className="bg-amber-600 hover:bg-amber-700 text-white" 
                              size="sm"
                            >
                              Request Culture Consultation
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t">
                <p className="text-sm text-gray-500">
                  A detailed report has been sent to {email}. You can also access your results anytime through the dashboard.
                </p>
              </div>
            </CardContent>
          </div>
        </Card>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
          <Link to="/">
            <Button variant="outline">Return to Homepage</Button>
          </Link>
          
          <Link to="/dashboard">
            <Button className="bg-pulse-blue hover:bg-pulse-blue/90">
              View Full Dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
