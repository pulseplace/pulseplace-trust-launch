
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import { ChartBar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SentimentDimension {
  dimension: string;
  value: number;
  benchmark: number;
}

interface SentimentAnalysisProps {
  dimensions: SentimentDimension[];
}

const SentimentAnalysis: React.FC<SentimentAnalysisProps> = ({ dimensions }) => {
  const maxValue = Math.max(...dimensions.map(d => Math.max(d.value, d.benchmark)));

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-base">
            <ChartBar className="h-5 w-5 mr-2 text-pulse-blue" />
            Sentiment Analysis
          </CardTitle>
          <Badge variant="outline" className="bg-blue-50">
            AI-Powered
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dimensions}>
              <PolarGrid />
              <PolarAngleAxis dataKey="dimension" />
              <Radar
                name="Current"
                dataKey="value"
                stroke="#1A5AFF"
                fill="#1A5AFF"
                fillOpacity={0.3}
              />
              <Radar
                name="Benchmark"
                dataKey="benchmark"
                stroke="#FF6B6B"
                fill="#FF6B6B"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 space-y-2">
          {dimensions.map((dim) => (
            <div key={dim.dimension} className="flex items-center justify-between text-sm">
              <span>{dim.dimension}</span>
              <div className="flex items-center gap-4">
                <span className="text-pulse-blue">You: {dim.value}%</span>
                <span className="text-coral">Benchmark: {dim.benchmark}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SentimentAnalysis;
