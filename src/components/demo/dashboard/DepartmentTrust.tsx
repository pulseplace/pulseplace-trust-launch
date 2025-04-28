
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart } from "lucide-react";

const DepartmentTrust = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trust Score by Department</CardTitle>
        <CardDescription>AI-analyzed trust patterns across teams</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-center justify-center">
          <div className="text-center space-y-3">
            <BarChart className="h-12 w-12 mx-auto text-gray-300" />
            <p className="text-gray-500">Interactive department trust comparison chart</p>
            <p className="text-xs text-gray-400">Complete version includes AI-powered analysis of team dynamics</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DepartmentTrust;
