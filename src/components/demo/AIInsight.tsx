
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AIInsightProps {
  title: string;
  description: string;
  confidence?: number;
  source?: string;
  type?: "insight" | "prediction" | "recommendation";
}

const AIInsight = ({
  title,
  description,
  confidence = 85,
  source = "Survey Data",
  type = "insight",
}: AIInsightProps) => {
  const getIcon = () => {
    switch (type) {
      case "prediction":
        return <Brain className="h-5 w-5" />;
      case "recommendation":
        return <Lightbulb className="h-5 w-5 text-amber-500" />;
      case "insight":
      default:
        return <Lightbulb className="h-5 w-5" />;
    }
  };

  const getTypeBadge = () => {
    switch (type) {
      case "prediction":
        return (
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            AI Prediction
          </Badge>
        );
      case "recommendation":
        return (
          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
            AI Recommendation
          </Badge>
        );
      case "insight":
      default:
        return (
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            AI Insight
          </Badge>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border-l-4 border-l-pulse-blue">
        <CardContent className="p-4">
          <div className="flex items-start space-x-4">
            <div className="bg-pulse-blue/10 p-2 rounded-full">
              {getIcon()}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getTypeBadge()}
                  <span className="text-sm text-gray-500">
                    AI Confidence: {confidence}%
                  </span>
                </div>
              </div>
              <h4 className="font-semibold mt-1">{title}</h4>
              <p className="text-gray-600 text-sm mt-1">{description}</p>
              <div className="mt-2 text-xs text-gray-500">
                Source: {source}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AIInsight;
