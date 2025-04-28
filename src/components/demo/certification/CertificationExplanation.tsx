
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const CertificationExplanation: React.FC = () => {
  return (
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
  );
};

export default CertificationExplanation;
