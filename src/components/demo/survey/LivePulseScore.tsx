
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LivePulseScoreProps {
  scoreAnalysis: any;
  hasAnsweredSome: boolean;
  currentScore: number;
}

const LivePulseScore = ({ scoreAnalysis, hasAnsweredSome, currentScore }: LivePulseScoreProps) => {
  if (!hasAnsweredSome) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }} 
      animate={{ opacity: 1, height: "auto" }}
      className="mt-4 p-3 bg-blue-50 rounded-lg flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <span className="font-medium text-pulse-navy">Live PulseScore:</span>
        <span className="text-pulse-blue font-bold">{currentScore}</span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                <HelpCircle className="h-4 w-4 text-gray-400" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p>This score updates in real-time as you answer questions. It's calculated using the PulsePlace algorithm (40% Trust, 30% Engagement, 30% Wellbeing).</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      {scoreAnalysis && (
        <div className="flex gap-2 text-xs">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
            T: {scoreAnalysis.categoryScores.trust}
          </span>
          <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
            E: {scoreAnalysis.categoryScores.engagement}
          </span>
          <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
            W: {scoreAnalysis.categoryScores.wellbeing}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default LivePulseScore;
