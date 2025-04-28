
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Shield, Check, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDemo } from "@/contexts/DemoContext";
import DemoNavigation from "../DemoNavigation";
import AIProcessing from "../AIProcessing";

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
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-pulse-blue/10 rounded-full mb-4">
            <Award className="h-10 w-10 text-pulse-blue" />
          </div>
          <h1 className="text-3xl font-bold text-pulse-navy mb-2">
            AI-Powered Certification Generation
          </h1>
          <p className="text-lg text-gray-600">
            Watch as our AI engine verifies and generates your trusted culture certification
          </p>
        </div>

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
                <div className="border p-6 rounded-lg bg-gradient-to-b from-white to-gray-50 shadow-inner">
                  <div className="flex flex-col items-center">
                    <div className="text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        PulsePlace.ai Certifies
                      </div>
                      <h2 className="text-xl font-bold mt-1">{organizationName}</h2>
                      <div className="text-sm text-gray-600 mt-1">
                        for excellence in workplace culture
                      </div>
                    </div>
                    
                    <div className="my-6 relative">
                      <motion.div
                        animate={{ rotateY: [0, 360] }}
                        transition={{ 
                          duration: 2, 
                          repeat: 0,
                          ease: "easeInOut" 
                        }}
                        className="relative z-10"
                      >
                        <Award className="h-28 w-28 text-pulse-blue" />
                      </motion.div>
                      <motion.div
                        animate={{ 
                          opacity: [0, 0.6, 0],
                          scale: [1, 1.5]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop" 
                        }}
                        className="absolute inset-0 bg-pulse-blue rounded-full"
                        style={{
                          filter: "blur(20px)",
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pulse-blue">
                        PulseScore™: {pulseScore}
                      </div>
                      <div className="text-sm mt-2">
                        This organization demonstrates outstanding
                        <br />
                        commitment to building a culture of trust.
                      </div>
                      
                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        <div className="bg-blue-50 px-3 py-1 rounded-full text-xs text-blue-700 flex items-center">
                          <Check className="h-3 w-3 mr-1" />
                          Transparent Leadership
                        </div>
                        <div className="bg-purple-50 px-3 py-1 rounded-full text-xs text-purple-700 flex items-center">
                          <Check className="h-3 w-3 mr-1" />
                          Psychological Safety
                        </div>
                        <div className="bg-green-50 px-3 py-1 rounded-full text-xs text-green-700 flex items-center">
                          <Check className="h-3 w-3 mr-1" />
                          Employee Wellbeing
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-500 mt-6">
                        Certified: {certificationDate} • Expires: {expirationDate}
                      </div>
                    </div>
                    
                    <div className="mt-8 border-t pt-4 w-full text-center flex items-center justify-center">
                      <Shield className="h-4 w-4 text-pulse-blue mr-1" />
                      <div>
                        <div className="text-xs text-gray-500">
                          Verified by
                        </div>
                        <div className="font-semibold">
                          PulsePlace.ai Certification Authority
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                        Blockchain Verified
                      </div>
                      <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                        Tamper-Proof
                      </div>
                      <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                        AI-Authenticated
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 p-4 border border-blue-100 bg-blue-50 rounded-md"
                >
                  <div className="flex">
                    <Sparkles className="h-5 w-5 text-pulse-blue mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-pulse-navy">AI-Powered Certification</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        In the complete platform, our AI uses blockchain technology to create tamper-proof 
                        certifications that can be independently verified by anyone. Each certification includes 
                        a comprehensive trust assessment with detailed metrics across all dimensions of workplace culture.
                      </p>
                    </div>
                  </div>
                </motion.div>
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
