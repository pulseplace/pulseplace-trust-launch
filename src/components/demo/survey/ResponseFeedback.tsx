
import React from "react";
import { motion } from "framer-motion";

interface ResponseFeedbackProps {
  answer: number | null;
}

const ResponseFeedback: React.FC<ResponseFeedbackProps> = ({ answer }) => {
  if (answer === null) return null;

  if (answer === 4 || answer === 5) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 text-sm text-green-700 bg-green-50 p-3 rounded-md"
      >
        <strong>Strength detected:</strong> Your positive response suggests a healthy culture element.
      </motion.div>
    );
  }

  if (answer === 1 || answer === 2) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-md"
      >
        <strong>Opportunity area:</strong> This response identifies a potential area for cultural improvement.
      </motion.div>
    );
  }

  return null;
};

export default ResponseFeedback;
