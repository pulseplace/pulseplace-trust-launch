
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain } from "lucide-react";
import AIInsight from "@/components/demo/AIInsight";

const AIInsightsList = () => {
  return (
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
      <CardContent className="space-y-4">
        <AIInsight 
          title="Cross-Team Communication"
          description="AI has detected a 23% variance in communication satisfaction between engineering and marketing teams. Consider implementing shared objectives and cross-functional projects."
          confidence={91}
          source="Team Comparison Analysis"
          type="recommendation"
        />
        
        <AIInsight 
          title="Remote Work Impact"
          description="Remote employees score 12% lower on 'feeling connected' than office-based staff, but 18% higher on work-life balance. AI recommends hybrid team building activities."
          confidence={89}
          source="Location Pattern Analysis"
          type="insight"
        />
        
        <AIInsight 
          title="Q3 Engagement Prediction"
          description="Based on current trust trajectory and seasonal patterns, AI predicts a 7% increase in overall engagement scores by Q3 if current initiatives continue."
          confidence={85}
          source="Predictive Culture Model"
          type="prediction"
        />
      </CardContent>
    </Card>
  );
};

export default AIInsightsList;
