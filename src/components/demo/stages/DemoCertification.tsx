
import React, { useState, useEffect } from "react";
import { useDemo } from "@/contexts/DemoContext";
import DemoNavigation from "../DemoNavigation";
import CertificationHeader from "../certification/CertificationHeader";
import CertificationProcessing from "../certification/CertificationProcessing";
import CertificationContent from "../certification/CertificationContent";

const DemoCertification = () => {
  const { pulseScore, organizationName } = useDemo();
  const [isGenerating, setIsGenerating] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  
  // Format the certification date as today's date
  const certificationDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  // Expiration date is one year from now
  const expirationDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    .toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

  // Debug logging
  console.log("DemoCertification rendering:", { 
    pulseScore, 
    organizationName, 
    isGenerating 
  });

  // Simulate certificate generation
  useEffect(() => {
    console.log("DemoCertification effect running");
    const timer = setTimeout(() => {
      console.log("Certification generation complete");
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
          <CertificationProcessing />
        ) : (
          <CertificationContent
            pulseScore={pulseScore}
            organizationName={organizationName}
            certificationDate={certificationDate}
            expirationDate={expirationDate}
          />
        )}
      </div>
      
      <DemoNavigation nextLabel="Explore Dashboard" />
    </div>
  );
};

export default DemoCertification;
