
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Brain } from "lucide-react";

interface TrendPoint {
  date: string;
  value: number;
  prediction?: number;
}

interface TrendAnalysisProps {
  title: string;
  description: string;
  data: TrendPoint[];
}

const TrendAnalysis: React.FC<TrendAnalysisProps> = ({ title, description, data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-base">
          <Brain className="h-5 w-5 mr-2 text-pulse-blue" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#1A5AFF"
                strokeWidth={2}
                dot={{ fill: "#1A5AFF" }}
              />
              {data.some(point => point.prediction !== undefined) && (
                <Line
                  type="monotone"
                  dataKey="prediction"
                  stroke="#FF6B6B"
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  dot={{ fill: "#FF6B6B" }}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendAnalysis;
