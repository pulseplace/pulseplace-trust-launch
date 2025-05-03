
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';

interface SurveyExplanationProps {
  onStartClick: () => void;
  onBackClick: () => void;
}

const SurveyExplanation: React.FC<SurveyExplanationProps> = ({ onStartClick, onBackClick }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
          <CardHeader className="bg-pulse-blue text-white">
            <CardTitle className="text-2xl">Pulse Certified™ Assessment</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 pb-2">
            <p className="mb-6">
              This assessment helps measure key aspects of your workplace culture, focusing on
              trust dynamics, emotional wellbeing, and engagement stability. Your responses will
              help calculate your organization's PulseScore™.
            </p>
            
            <h3 className="font-semibold text-lg mb-3">About This Assessment:</h3>
            
            <ul className="space-y-3 mb-6">
              {[
                "6 questions covering trust, engagement, and wellbeing",
                "Takes approximately 2-3 minutes to complete",
                "Provides real-time feedback and insights",
                "Results in a certification score from 0-100",
                "All responses are confidential and secure"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <Check className="h-5 w-5 text-pulse-blue flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <p className="text-gray-600 text-sm">
              This is a demo version showing how the assessment works. In a real implementation, 
              your organization would receive a full certification and detailed analytics.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between pt-4">
            <Button 
              variant="outline" 
              onClick={onBackClick}
              className="flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button 
              onClick={onStartClick}
              className="bg-pulse-blue hover:bg-pulse-blue/90 flex items-center"
            >
              Start Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SurveyExplanation;
