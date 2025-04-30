
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  Radar 
} from "recharts";

const trustMetricsData = [
  { dimension: "Transparency", score: 78, benchmark: 65 },
  { dimension: "Communication", score: 82, benchmark: 70 },
  { dimension: "Reliability", score: 85, benchmark: 75 },
  { dimension: "Competence", score: 80, benchmark: 72 },
  { dimension: "Integrity", score: 88, benchmark: 78 },
  { dimension: "Benevolence", score: 82, benchmark: 68 },
];

const TrustMetrics = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Trust Dynamics</CardTitle>
        <CardDescription>
          Multi-dimensional analysis of organizational trust factors
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              outerRadius="80%"
              data={trustMetricsData}
            >
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis
                dataKey="dimension"
                tick={{ fill: "#64748b", fontSize: 12 }}
              />
              <Radar
                name="Your Score"
                dataKey="score"
                stroke="#1A5AFF"
                fill="#1A5AFF"
                fillOpacity={0.4}
              />
              <Radar
                name="Industry Benchmark"
                dataKey="benchmark"
                stroke="#FF6B6B"
                fill="#FF6B6B"
                fillOpacity={0.4}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#1A5AFF]"></div>
            <span className="text-sm">Your Organization</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
            <span className="text-sm">Industry Benchmark</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrustMetrics;
