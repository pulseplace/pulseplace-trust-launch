
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
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const engagementData = [
  { month: "Jan", engagement: 72, wellbeing: 70 },
  { month: "Feb", engagement: 68, wellbeing: 73 },
  { month: "Mar", engagement: 74, wellbeing: 75 },
  { month: "Apr", engagement: 79, wellbeing: 72 },
  { month: "May", engagement: 81, wellbeing: 76 },
  { month: "Jun", engagement: 85, wellbeing: 80 },
  { month: "Jul", engagement: 87, wellbeing: 83 },
];

const EngagementTrends = () => {
  return (
    <Card className="col-span-8">
      <CardHeader>
        <CardTitle>Engagement & Wellbeing Trends</CardTitle>
        <CardDescription>
          Six-month tracking of key employee experience metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis domain={[50, 100]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="engagement"
                stroke="#1A5AFF"
                strokeWidth={3}
                dot={{ fill: "#1A5AFF", r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="wellbeing"
                stroke="#FF6B6B"
                strokeWidth={3}
                dot={{ fill: "#FF6B6B", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#1A5AFF]"></div>
            <span className="text-sm">Engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
            <span className="text-sm">Wellbeing</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EngagementTrends;
