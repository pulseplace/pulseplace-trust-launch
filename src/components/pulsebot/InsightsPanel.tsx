
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricProps {
  label: string;
  value: number;
  change: number;
  color: string;
}

const Metric: React.FC<MetricProps> = ({ label, value, change, color }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex items-center">
        <span className="text-sm font-medium">{value}</span>
        <span className={`text-xs ${change >= 0 ? 'text-green-600' : 'text-red-600'} ml-1`}>
          {change >= 0 ? '↑' : '↓'}{Math.abs(change)}
        </span>
      </div>
    </div>
    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
      <div
        className={`h-full ${color} rounded-full`}
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

const InsightsPanel: React.FC = () => {
  const metrics = [
    { label: "Trust Index", value: 82, change: 3, color: "bg-pulse-blue" },
    { label: "Wellbeing Score", value: 78, change: 5, color: "bg-blue-500" },
    { label: "Recognition", value: 70, change: -2, color: "bg-purple-500" },
    { label: "Growth Opportunities", value: 81, change: 4, color: "bg-green-500" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Culture Insights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {metrics.map((metric, index) => (
          <Metric key={index} {...metric} />
        ))}
        <div className="text-xs text-gray-500 text-center mt-2">
          Updated 2 days ago
        </div>
      </CardContent>
    </Card>
  );
};

export default InsightsPanel;

