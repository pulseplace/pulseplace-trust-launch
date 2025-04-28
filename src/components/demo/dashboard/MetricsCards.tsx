
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, ThumbsUp } from "lucide-react";

const MetricsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <BarChart className="h-4 w-4 mr-2 text-pulse-blue" />
            Trust Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">88/100</div>
          <p className="text-xs text-green-600 flex items-center">
            <ThumbsUp className="h-3 w-3 mr-1" />
            3% above industry average
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <BarChart className="h-4 w-4 mr-2 text-purple-600" />
            Engagement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">82/100</div>
          <p className="text-xs text-green-600 flex items-center">
            <ThumbsUp className="h-3 w-3 mr-1" />
            5% increase from last quarter
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <BarChart className="h-4 w-4 mr-2 text-amber-600" />
            Wellbeing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">85/100</div>
          <p className="text-xs text-amber-600 flex items-center">
            <ThumbsUp className="h-3 w-3 mr-1" />
            Steady from last quarter
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetricsCards;
