
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, XCircle, Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface CertificationStatusProps {
  pulseScore: number;
  certificationStatus: "active" | "pending" | "revoked";
  certificationDate: string;
  expirationDate: string;
}

const CertificationStatus: React.FC<CertificationStatusProps> = ({
  pulseScore,
  certificationStatus,
  certificationDate,
  expirationDate,
}) => {
  const getStatusDetails = () => {
    switch (certificationStatus) {
      case "active":
        return {
          icon: <CheckCircle className="h-6 w-6 text-green-600" />,
          label: "Active",
          color: "bg-green-100 text-green-800",
          message: "Your certification is active and in good standing.",
        };
      case "pending":
        return {
          icon: <Clock className="h-6 w-6 text-amber-600" />,
          label: "Pending",
          color: "bg-amber-100 text-amber-800",
          message: "Your certification is being processed.",
        };
      case "revoked":
        return {
          icon: <XCircle className="h-6 w-6 text-red-600" />,
          label: "Revoked",
          color: "bg-red-100 text-red-800",
          message: "Your certification has been revoked.",
        };
      default:
        return {
          icon: <Clock className="h-6 w-6 text-gray-600" />,
          label: "Unknown",
          color: "bg-gray-100 text-gray-800",
          message: "Status unknown.",
        };
    }
  };

  const status = getStatusDetails();
  
  // Calculate days remaining until expiration
  const today = new Date();
  const expDate = new Date(expirationDate);
  const totalDays = 365; // Assuming 1 year certification
  const daysRemaining = Math.max(0, Math.ceil((expDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
  const progressPercentage = ((totalDays - daysRemaining) / totalDays) * 100;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Award className="h-6 w-6 text-pulse-blue" />
          Certification Status
        </CardTitle>
        <Badge className={status.color}>
          <div className="flex items-center gap-1">
            {status.icon}
            <span>{status.label}</span>
          </div>
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">PulseScore™</span>
                <span className="font-bold text-xl">{pulseScore}/100</span>
              </div>
              <Progress 
                value={pulseScore} 
                className="h-3" 
                indicatorClassName={`${pulseScore >= 85 
                  ? "bg-green-500" 
                  : pulseScore >= 70 
                  ? "bg-amber-500" 
                  : "bg-red-500"}`} 
              />
              <div className="flex justify-between mt-1 text-xs">
                <span>Needs Improvement</span>
                <span>Certified</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Calendar className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Certification Date</p>
                <p className="font-medium">{certificationDate}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Calendar className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Expiration Date</p>
                <p className="font-medium">{expirationDate}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Certification Timeline</h3>
              <p className="text-sm text-gray-600">{status.message}</p>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between mb-1 text-sm">
                <span>Days Remaining</span>
                <span>{daysRemaining} of {totalDays}</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
              
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-gray-500">{certificationDate}</span>
                <span className="text-xs text-gray-500">{expirationDate}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationStatus;
