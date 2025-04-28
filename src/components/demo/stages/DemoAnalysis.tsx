
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Check, FileBarChart, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DemoNavigation from "../DemoNavigation";
import AIProcessing from "../AIProcessing";

const DemoAnalysis = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { 
      title: "Processing Survey Data",
      message: "AI is analyzing response patterns...",
      icon: Cpu,
      duration: 3000 
    },
    { 
      title: "Comparing to Benchmarks",
      message: "Comparing with 10,000+ similar organizations...",
      icon: FileBarChart,
      duration: 3000 
    },
    { 
      title: "Generating PulseScore",
      message: "Calculating your organization's PulseScore™...",
      icon: Sparkles,
      duration: 4000 
    },
  ];

  useEffect(() => {
    if (currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, steps[currentStep].duration);
      
      return () => clearTimeout(timer);
    }
  }, [currentStep]);
  
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-pulse-blue/10 rounded-full mb-4">
            <Cpu className="h-10 w-10 text-pulse-blue" />
          </div>
          <h1 className="text-3xl font-bold text-pulse-navy mb-2">
            AI Analysis in Progress
          </h1>
          <p className="text-lg text-gray-600">
            Watch as our AI engine processes your data to generate insights
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className={`border ${index < currentStep ? 'border-green-200' : index === currentStep ? 'border-pulse-blue' : 'border-gray-200'}`}
            >
              <CardHeader className={`pb-2 ${index < currentStep ? 'text-green-600' : index === currentStep ? 'text-pulse-blue' : 'text-gray-400'}`}>
                <CardTitle className="flex items-center text-base">
                  {index < currentStep ? (
                    <Check className="mr-2 h-5 w-5" />
                  ) : (
                    <step.icon className="mr-2 h-5 w-5" />
                  )}
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {index === currentStep ? (
                  <AIProcessing message={step.message} duration={step.duration} />
                ) : index < currentStep ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 text-center text-green-600"
                  >
                    <Check className="h-8 w-8 mx-auto mb-2" />
                    <p>Processing complete</p>
                  </motion.div>
                ) : (
                  <div className="p-4 text-center text-gray-400">
                    <p>Waiting to begin...</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          {currentStep === steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="mt-8 p-5 border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-sm"
            >
              <div className="flex">
                <Sparkles className="h-6 w-6 text-pulse-blue mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-lg text-pulse-navy">AI Processing Information</h4>
                  <p className="text-gray-600 mt-2">
                    In the full version, our AI engine:
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                      <span>Processes 40+ trust metrics across different organizational dimensions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                      <span>Compares your results against millions of anonymized data points</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                      <span>Identifies specific trust patterns and anomalies in your culture</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                      <span>Generates completely customized recommendations based on your unique trust profile</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      <DemoNavigation 
        showNextButton={currentStep === steps.length - 1}
        nextLabel="View Results" 
      />
    </div>
  );
};

export default DemoAnalysis;
