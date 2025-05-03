import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CertificationStatusProps {
  title: string;
  description: string;
  score: number;
}

const CertificationStatus: React.FC<CertificationStatusProps> = ({ title, description, score }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Progress</span>
          <span className="text-sm text-gray-500">{score}%</span>
        </div>
        <Progress 
          value={score} 
          className="h-3 w-full bg-gray-200"
        >
          <div className="h-full bg-pulse-blue" style={{ width: `${score}%` }}></div>
        </Progress>
      </CardContent>
    </Card>
  );
};

export default CertificationStatus;
