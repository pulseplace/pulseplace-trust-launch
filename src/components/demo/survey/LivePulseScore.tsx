
import React from 'react';
import { motion } from 'framer-motion';

interface LivePulseScoreProps {
  value: number;
}

const LivePulseScore: React.FC<LivePulseScoreProps> = ({ value }) => {
  // Calculate a score from 0-100 based on progress
  const calculatedScore = Math.min(Math.round(value / 2) + 50, 100);
  
  const getScoreColor = () => {
    if (calculatedScore < 60) return 'text-red-500';
    if (calculatedScore < 75) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center"
    >
      <div className="text-xs font-medium uppercase text-gray-500">Live Score</div>
      <div className={`text-2xl font-bold ${getScoreColor()}`}>{calculatedScore}</div>
    </motion.div>
  );
};

export default LivePulseScore;
