
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart } from "lucide-react";

const CultureHealth = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Culture Health Overview</CardTitle>
        <CardDescription>AI assessment of culture dimensions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-center justify-center">
          <div className="text-center space-y-3">
            <PieChart className="h-12 w-12 mx-auto text-gray-300" />
            <p className="text-gray-500">Interactive culture dimension breakdown</p>
            <p className="text-xs text-gray-400">Complete version includes 40+ culture metrics analyzed by AI</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CultureHealth;
