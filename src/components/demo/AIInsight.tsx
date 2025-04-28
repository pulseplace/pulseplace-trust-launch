
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Brain, ChartBar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export type InsightType = "insight" | "prediction" | "recommendation";

interface AIInsightProps {
  title: string;
  description: string;
  confidence?: number;
  source?: string;
  type?: InsightType;
  impact?: "high" | "medium" | "low";
  timeframe?: string;
}

const AIInsight = ({
  title,
  description,
  confidence = 85,
  source = "Survey Data",
  type = "insight",
  impact = "medium",
  timeframe,
}: AIInsightProps) => {
  const getIcon = () => {
    switch (type) {
      case "prediction":
        return <Brain className="h-5 w-5 text-purple-500" />;
      case "recommendation":
        return <Lightbulb className="h-5 w-5 text-amber-500" />;
      case "insight":
      default:
        return <ChartBar className="h-5 w-5 text-pulse-blue" />;
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

  const getImpactBadge = () => {
    const colors = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-green-100 text-green-800",
    };

    return (
      <Badge variant="secondary" className={colors[impact]}>
        {impact.charAt(0).toUpperCase() + impact.slice(1)} Impact
      </Badge>
    );
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
            <div className={`p-2 rounded-full ${
              type === "prediction" ? "bg-purple-100" :
              type === "recommendation" ? "bg-amber-100" :
              "bg-blue-100"
            }`}>
              {getIcon()}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                {getTypeBadge()}
                {getImpactBadge()}
                <span className="text-sm text-gray-500">
                  AI Confidence: {confidence}%
                </span>
              </div>
              <h4 className="font-semibold mt-2">{title}</h4>
              <p className="text-gray-600 text-sm mt-1">{description}</p>
              <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                <span>Source: {source}</span>
                {timeframe && <span>Timeframe: {timeframe}</span>}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AIInsight;
