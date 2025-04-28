
import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

const SurveyExplanation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-8 p-4 border border-blue-100 bg-blue-50 rounded-md"
    >
      <div className="flex">
        <BrainCircuit className="h-5 w-5 text-pulse-blue mr-2 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-pulse-navy">AI Survey Enhancement</h4>
          <p className="text-sm text-gray-600 mt-1">
            In the full version, our AI analyzes thousands of responses from similar organizations to provide real-time context and benchmark information. This helps survey participants understand why questions matter and how their responses compare to industry standards.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SurveyExplanation;
