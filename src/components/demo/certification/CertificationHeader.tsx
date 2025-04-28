
import React from "react";
import { Award } from "lucide-react";

const CertificationHeader: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-block p-3 bg-pulse-blue/10 rounded-full mb-4">
        <Award className="h-10 w-10 text-pulse-blue" />
      </div>
      <h1 className="text-3xl font-bold text-pulse-navy mb-2">
        AI-Powered Certification Generation
      </h1>
      <p className="text-lg text-gray-600">
        Watch as our AI engine verifies and generates your trusted culture certification
      </p>
    </div>
  );
};

export default CertificationHeader;
