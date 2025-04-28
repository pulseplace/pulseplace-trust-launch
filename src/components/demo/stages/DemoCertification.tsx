
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDemo } from "@/contexts/DemoContext";
import DemoNavigation from "../DemoNavigation";
import AIProcessing from "../AIProcessing";
import CertificationHeader from "../certification/CertificationHeader";
import CertificationBadge from "../certification/CertificationBadge";
import CertificationExplanation from "../certification/CertificationExplanation";

const DemoCertification = () => {
  const { pulseScore, organizationName } = useDemo();
  const [isGenerating, setIsGenerating] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  
  const certificationDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const expirationDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    .toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

  // Simulate certificate generation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGenerating(false);
      setIsComplete(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-4xl mx-auto">
        <CertificationHeader />

        {isGenerating ? (
          <Card>
            <CardContent className="py-8">
              <AIProcessing 
                message="AI is verifying certification criteria..." 
                type="generating"
              />
            </CardContent>
          </Card>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Your PulsePlace Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <CertificationBadge 
                  pulseScore={pulseScore}
                  organizationName={organizationName}
                  certificationDate={certificationDate}
                  expirationDate={expirationDate}
                />
                
                <CertificationExplanation />
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
      
      <DemoNavigation nextLabel="Explore Dashboard" />
    </div>
  );
};

export default DemoCertification;
