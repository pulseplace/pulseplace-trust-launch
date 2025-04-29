
import React from "react";
import { motion } from "framer-motion";
import { ScoreAnalysis } from "./types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LivePulseScoreProps {
  scoreAnalysis: ScoreAnalysis | null;
  hasAnsweredSome: boolean;
  currentScore: number;
}

const LivePulseScore: React.FC<LivePulseScoreProps> = ({
  scoreAnalysis,
  hasAnsweredSome,
  currentScore
}) => {
  if (!hasAnsweredSome) {
    return null;
  }

  const getScoreColor = () => {
    if (currentScore >= 80) return "text-green-600";
    if (currentScore >= 60) return "text-blue-600";
    if (currentScore >= 40) return "text-amber-600";
    return "text-red-600";
  };

  const getScoreText = () => {
    if (currentScore >= 80) return "Excellent";
    if (currentScore >= 60) return "Good";
    if (currentScore >= 40) return "Fair";
    return "Needs Improvement";
  };

  const getScoreRingColor = () => {
    if (currentScore >= 80) return "text-green-500";
    if (currentScore >= 60) return "text-blue-500";
    if (currentScore >= 40) return "text-amber-500";
    return "text-red-500";
  };

  const getFormattedCategoryScores = () => {
    if (!scoreAnalysis?.categoryScores) return null;

    return {
      trust: Math.round(scoreAnalysis.categoryScores.trust),
      engagement: Math.round(scoreAnalysis.categoryScores.engagement),
      wellbeing: Math.round(scoreAnalysis.categoryScores.wellbeing)
    };
  };

  const categoryScores = getFormattedCategoryScores();

  return (
    <div className="mt-4 pt-4 border-t">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Live PulseScore™</h3>
          <p className="text-xs text-gray-400">Updates as you answer questions</p>
        </div>
        
        <div className="flex items-center">
          <motion.div
            key={currentScore}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center"
          >
            <svg className="w-16 h-16">
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="4"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray={2 * Math.PI * 28}
                strokeDashoffset={2 * Math.PI * 28 * (1 - currentScore / 100)}
                className={getScoreRingColor()}
                transform="rotate(-90 32 32)"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className={`text-xl font-bold ${getScoreColor()}`}>{currentScore}</span>
              <span className="text-xs">{getScoreText()}</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {categoryScores && (
        <div className="grid grid-cols-3 gap-2 mt-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="text-center">
                  <div className="text-xs text-gray-500">Trust</div>
                  <div className={`text-sm font-medium ${currentScore >= 60 ? 'text-blue-600' : 'text-gray-600'}`}>
                    {categoryScores.trust}
                  </div>
                  <div className="w-full bg-gray-200 h-1 mt-1 rounded-full">
                    <div 
                      className="bg-blue-500 h-1 rounded-full"
                      style={{ width: `${categoryScores.trust}%` }} 
                    />
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Trust score measures transparency and reliability</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="text-center">
                  <div className="text-xs text-gray-500">Engagement</div>
                  <div className={`text-sm font-medium ${currentScore >= 60 ? 'text-purple-600' : 'text-gray-600'}`}>
                    {categoryScores.engagement}
                  </div>
                  <div className="w-full bg-gray-200 h-1 mt-1 rounded-full">
                    <div 
                      className="bg-purple-500 h-1 rounded-full" 
                      style={{ width: `${categoryScores.engagement}%` }}
                    />
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Engagement measures employee involvement and commitment</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="text-center">
                  <div className="text-xs text-gray-500">Wellbeing</div>
                  <div className={`text-sm font-medium ${currentScore >= 60 ? 'text-amber-600' : 'text-gray-600'}`}>
                    {categoryScores.wellbeing}
                  </div>
                  <div className="w-full bg-gray-200 h-1 mt-1 rounded-full">
                    <div 
                      className="bg-amber-500 h-1 rounded-full" 
                      style={{ width: `${categoryScores.wellbeing}%` }}
                    />
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Wellbeing measures employee health and satisfaction</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}
    </div>
  );
};

export default LivePulseScore;
