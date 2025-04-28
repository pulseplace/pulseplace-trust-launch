import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Sparkles, Cpu } from "lucide-react";

interface AIProcessingProps {
  message?: string;
  duration?: number;
  onComplete?: () => void;
  type?: "thinking" | "analyzing" | "generating";
}

const AIProcessing = ({
  message = "AI is processing your data...",
  duration = 3000,
  onComplete,
  type = "analyzing",
}: AIProcessingProps) => {
  const [isComplete, setIsComplete] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prev) => {
        const increment = 100 - prev > 50 ? 3 : 1;
        return Math.min(prev + increment, 100);
      });
    }, duration / 100);

    const timeout = setTimeout(() => {
      setIsComplete(true);
      if (onComplete) onComplete();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [duration, onComplete]);

  const getIcon = () => {
    switch (type) {
      case "thinking":
        return Brain;
      case "generating":
        return Sparkles;
      case "analyzing":
      default:
        return Cpu;
    }
  };

  const Icon = getIcon();

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="bg-pulse-blue/10 rounded-full p-8"
        >
          <Icon className="h-12 w-12 text-pulse-blue" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isComplete ? 1 : 0, scale: isComplete ? 1 : 0.8 }}
          className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1 text-white"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      </div>

      <div className="flex flex-col items-center space-y-4 mt-4">
        <h3 className="text-lg font-medium text-pulse-navy">{message}</h3>
        
        <div className="w-64 bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-pulse-blue h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progressValue}%` }}
          />
        </div>

        <div className="text-sm text-gray-600 text-center">
          {progressValue < 33 && "Analyzing patterns..."}
          {progressValue >= 33 && progressValue < 66 && "Processing insights..."}
          {progressValue >= 66 && progressValue < 100 && "Generating recommendations..."}
          {progressValue === 100 && "Analysis complete!"}
        </div>

        <div className="flex space-x-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-2 w-2 bg-pulse-blue rounded-full"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIProcessing;
