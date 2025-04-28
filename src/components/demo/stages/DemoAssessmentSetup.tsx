
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, Search, ListChecks } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import DemoNavigation from "../DemoNavigation";
import AIProcessing from "../AIProcessing";
import AIInsight from "../AIInsight";
import { useDemo } from "@/contexts/DemoContext";

const DemoAssessmentSetup = () => {
  const { organizationName } = useDemo();
  const [showAIProcessing, setShowAIProcessing] = useState(true);
  const [showInsights, setShowInsights] = useState(false);

  // Simulate AI processing
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAIProcessing(false);
      setShowInsights(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-pulse-blue/10 rounded-full mb-4">
            <Brain className="h-10 w-10 text-pulse-blue" />
          </div>
          <h1 className="text-3xl font-bold text-pulse-navy mb-2">
            AI-Powered Assessment Setup
          </h1>
          <p className="text-lg text-gray-600">
            Watch how our AI analyzes your organization to set up a personalized assessment
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="mr-2 h-5 w-5 text-pulse-blue" /> 
              Company Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Organization Name
                  </label>
                  <Input 
                    value={organizationName} 
                    readOnly 
                    className="bg-gray-50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Organization Size
                  </label>
                  <Input 
                    value="251-500 employees" 
                    readOnly 
                    className="bg-gray-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Industry
                  </label>
                  <Input 
                    value="Technology" 
                    readOnly 
                    className="bg-gray-50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Region
                  </label>
                  <Input 
                    value="North America" 
                    readOnly 
                    className="bg-gray-50"
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {showAIProcessing ? (
          <Card>
            <CardContent className="py-8">
              <AIProcessing 
                message="AI is analyzing your organization profile..." 
                type="analyzing" 
              />
            </CardContent>
          </Card>
        ) : null}

        {showInsights && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ListChecks className="mr-2 h-5 w-5 text-pulse-blue" /> 
                  AI Assessment Customization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Based on AI analysis of your organization profile, we've customized your assessment:
                </p>
                <div className="space-y-4">
                  <AIInsight 
                    title="Technology Industry Focus"
                    description="AI has customized your assessment to focus on innovation culture and remote work trust dynamics, which are critical in technology companies."
                    confidence={92}
                    source="Industry Analysis"
                  />
                  
                  <AIInsight 
                    title="Mid-Size Organization Optimization"
                    description="Your assessment will include questions specific to communication across multiple teams and departments, typical of organizations in the 250-500 employee range."
                    confidence={89}
                    source="Organizational Structure Data"
                  />
                  
                  <AIInsight 
                    title="Regional Culture Patterns"
                    description="Based on North American workplace trends, your assessment will emphasize work-life balance metrics and psychological safety measures."
                    confidence={84}
                    type="insight"
                    source="Regional Culture Database"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-gray-600 mb-4 italic">
                In a real assessment, our AI would automatically detect and incorporate thousands of culture data points specific to your organization type.
              </p>
            </div>
          </motion.div>
        )}
      </div>
      
      <DemoNavigation />
    </div>
  );
};

export default DemoAssessmentSetup;
