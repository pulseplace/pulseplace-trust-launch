
import React from "react";
import { motion } from "framer-motion";
import { questions } from "./surveyQuestions";

interface ResponseFeedbackProps {
  answer: number | null;
  questionId?: string;
}

const ResponseFeedback: React.FC<ResponseFeedbackProps> = ({ answer, questionId }) => {
  if (answer === null) return null;

  const question = questionId 
    ? questions.find(q => q.id === questionId) 
    : null;
  
  const benchmarkScore = question?.benchmarkScore || 3.5;
  const benchmarkComparison = answer - benchmarkScore;
  
  if (answer === 4 || answer === 5) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 text-sm text-green-700 bg-green-50 p-3 rounded-md"
      >
        <div className="flex justify-between items-center mb-1">
          <strong>Strength detected:</strong>
          <span className="text-xs bg-green-100 px-2 py-1 rounded-full">
            {benchmarkComparison > 0 
              ? `${Math.abs(Math.round(benchmarkComparison * 20))}% above benchmark` 
              : 'On par with benchmark'}
          </span>
        </div>
        <p>Your positive response suggests a healthy culture element. This builds a strong foundation for trust and engagement.</p>
        {question?.contextualHelp && (
          <p className="mt-2 text-xs italic">{question.contextualHelp}</p>
        )}
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
        <div className="flex justify-between items-center mb-1">
          <strong>Opportunity area:</strong>
          <span className="text-xs bg-amber-100 px-2 py-1 rounded-full">
            {`${Math.abs(Math.round(benchmarkComparison * 20))}% below benchmark`}
          </span>
        </div>
        <p>This response identifies a potential area for cultural improvement that could impact overall organizational health.</p>
        {question?.contextualHelp && (
          <p className="mt-2 text-xs italic">{question.contextualHelp}</p>
        )}
      </motion.div>
    );
  }

  if (answer === 3) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 text-sm text-blue-700 bg-blue-50 p-3 rounded-md"
      >
        <div className="flex justify-between items-center mb-1">
          <strong>Neutral response:</strong>
          <span className="text-xs bg-blue-100 px-2 py-1 rounded-full">
            {Math.abs(benchmarkComparison) < 0.5 
              ? 'Near benchmark' 
              : `${Math.abs(Math.round(benchmarkComparison * 20))}% ${benchmarkComparison > 0 ? 'above' : 'below'} benchmark`}
          </span>
        </div>
        <p>This area has potential for either improvement or becoming a strength with focused attention.</p>
        {question?.contextualHelp && (
          <p className="mt-2 text-xs italic">{question.contextualHelp}</p>
        )}
      </motion.div>
    );
  }

  return null;
};

export default ResponseFeedback;
