
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Download } from "lucide-react";

interface CertificationCardProps {
  pulseScore: number;
  organizationName?: string;
  certificationDate: string;
  expirationDate: string;
}

const CertificationCard = ({
  pulseScore,
  organizationName = "Your Organization",
  certificationDate,
  expirationDate,
}: CertificationCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Certificate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border p-4 rounded-lg bg-gradient-to-b from-white to-gray-50 shadow-inner">
          <div className="flex flex-col items-center">
            <div className="text-center mt-4">
              <div className="text-xs uppercase tracking-wide text-gray-500">
                PulsePlace.ai Certifies
              </div>
              <h2 className="text-xl font-bold mt-1">{organizationName}</h2>
              <div className="text-sm text-gray-600 mt-1">
                for excellence in workplace culture
              </div>
            </div>
            
            <div className="my-4">
              <Award className="h-20 w-20 text-pulse-blue" />
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-pulse-blue">
                PulseScore™: {pulseScore}
              </div>
              <div className="text-sm mt-2">
                This organization demonstrates outstanding
                <br />
                commitment to building a culture of trust.
              </div>
              <div className="text-xs text-gray-500 mt-4">
                Certified: {certificationDate} • Expires: {expirationDate}
              </div>
            </div>
            
            <div className="mt-8 border-t pt-4 w-full text-center">
              <div className="text-xs text-gray-500">
                Verified by
              </div>
              <div className="font-semibold">
                PulsePlace.ai Certification Authority
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex justify-center">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download Certificate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationCard;
