
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Check } from "lucide-react";

interface CertificationStatusProps {
  pulseScore: number;
  certificationStatus: string;
  certificationDate: string;
  expirationDate: string;
}

const CertificationStatus = ({
  pulseScore,
  certificationStatus,
  certificationDate,
  expirationDate,
}: CertificationStatusProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Certification Status</CardTitle>
        <CardDescription>
          Your organization's trust certification details
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <div className="text-sm text-gray-500">PulseScore™</div>
            <div className="text-4xl font-bold text-pulse-blue">{pulseScore}</div>
          </div>
          
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Status</div>
            <div className="flex items-center">
              <div className={`h-2 w-2 rounded-full mr-2 ${
                certificationStatus === "active" ? "bg-green-500" :
                certificationStatus === "pending" ? "bg-amber-500" :
                "bg-red-500"
              }`}></div>
              <span className="font-medium">
                {certificationStatus === "active" ? "Active" :
                 certificationStatus === "pending" ? "Pending" :
                 "Revoked"}
              </span>
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Certified On</div>
            <div className="font-medium">{certificationDate}</div>
          </div>
          
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Expires On</div>
            <div className="font-medium">{expirationDate}</div>
          </div>
        </div>
        
        <div className="p-4 border rounded-lg bg-gray-50">
          <div className="text-sm text-gray-500 mb-2">
            Your organization is certified for demonstrating excellence in:
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Check className="text-green-600 h-4 w-4 mr-2" />
              <span>Transparent leadership communication</span>
            </div>
            <div className="flex items-center">
              <Check className="text-green-600 h-4 w-4 mr-2" />
              <span>Employee wellbeing programs</span>
            </div>
            <div className="flex items-center">
              <Check className="text-green-600 h-4 w-4 mr-2" />
              <span>Psychological safety in teams</span>
            </div>
            <div className="flex items-center">
              <Check className="text-green-600 h-4 w-4 mr-2" />
              <span>Growth and development opportunities</span>
            </div>
            <div className="flex items-center">
              <Check className="text-green-600 h-4 w-4 mr-2" />
              <span>Learning and innovation culture</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationStatus;
