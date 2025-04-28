
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain } from "lucide-react";
import AIInsight from "@/components/demo/AIInsight";
import TrendAnalysis from "../insights/TrendAnalysis";
import SentimentAnalysis from "../insights/SentimentAnalysis";

const trendData = [
  { date: "Jan", value: 72 },
  { date: "Feb", value: 68 },
  { date: "Mar", value: 74 },
  { date: "Apr", value: 79 },
  { date: "May", value: 82 },
  { date: "Jun", value: 85 },
  { date: "Jul", value: 87, prediction: 87 },
  { date: "Aug", value: 0, prediction: 89 },
];

const sentimentData = [
  { dimension: "Trust", value: 85, benchmark: 75 },
  { dimension: "Communication", value: 78, benchmark: 72 },
  { dimension: "Leadership", value: 82, benchmark: 70 },
  { dimension: "Wellbeing", value: 75, benchmark: 68 },
  { dimension: "Growth", value: 88, benchmark: 73 },
];

const AIInsightsList = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="h-5 w-5 mr-2 text-pulse-blue" />
            AI-Generated Culture Insights
          </CardTitle>
          <CardDescription>
            Real-time analysis of your workplace culture data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TrendAnalysis
              title="Trust Score Trajectory"
              description="AI-predicted trust development based on current trends and initiatives"
              data={trendData}
            />
            <SentimentAnalysis dimensions={sentimentData} />
          </div>
          
          <AIInsight 
            title="Cross-Team Communication"
            description="AI has detected a 23% variance in communication satisfaction between engineering and marketing teams. Consider implementing shared objectives and cross-functional projects."
            confidence={91}
            source="Team Comparison Analysis"
            type="recommendation"
            impact="high"
          />
          
          <AIInsight 
            title="Remote Work Impact"
            description="Remote employees score 12% lower on 'feeling connected' than office-based staff, but 18% higher on work-life balance. AI recommends hybrid team building activities."
            confidence={89}
            source="Location Pattern Analysis"
            type="insight"
            impact="medium"
          />
          
          <AIInsight 
            title="Q3 Engagement Prediction"
            description="Based on current trust trajectory and seasonal patterns, AI predicts a 7% increase in overall engagement scores by Q3 if current initiatives continue."
            confidence={85}
            source="Predictive Culture Model"
            type="prediction"
            impact="medium"
            timeframe="Q3 2025"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AIInsightsList;
