
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

interface ResponseFeedbackProps {
  value: number;
}

const ResponseFeedback: React.FC<ResponseFeedbackProps> = ({ value }) => {
  const getFeedback = () => {
    switch (value) {
      case 1:
        return "This indicates a critical area that needs immediate attention.";
      case 2:
        return "This suggests room for significant improvement in this aspect of workplace culture.";
      case 3:
        return "This shows a neutral perception, with potential for both improvement and building on existing strengths.";
      case 4:
        return "This reflects a positive aspect of your workplace culture that can be leveraged further.";
      case 5:
        return "This represents an exceptional strength that sets your organization apart.";
      default:
        return "Please select a response to see feedback.";
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-md"
    >
      <div className="flex items-start gap-3">
        <div className="bg-blue-100 rounded-full p-2">
          <Lightbulb className="h-4 w-4 text-blue-600" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-blue-800">Response Feedback</h4>
          <p className="text-sm text-blue-700 mt-1">{getFeedback()}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ResponseFeedback;
