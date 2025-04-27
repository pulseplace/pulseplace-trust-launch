
import React from "react";
import { Award } from "lucide-react";

interface CertificationBadgePreviewProps {
  className?: string;
}

const CertificationBadgePreview = ({ className }: CertificationBadgePreviewProps) => {
  return (
    <div className={`border p-4 rounded-lg bg-white w-[300px] ${className}`}>
      <div className="flex items-center justify-center mb-2">
        <Award className="h-10 w-10 text-pulse-blue" />
      </div>
      <div className="text-center">
        <div className="font-bold">Pulse Certified™</div>
        <div className="text-sm text-gray-500">Trust Score: 85</div>
        <div className="text-xs mt-1">Valid until June 15, 2026</div>
        <div className="mt-2 text-xs text-pulse-blue">
          Verified by PulsePlace.ai
        </div>
      </div>
    </div>
  );
};

export default CertificationBadgePreview;
