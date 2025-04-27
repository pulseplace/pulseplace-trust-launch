
import React, { useState } from "react";
import CertificationStatus from "@/components/certification/CertificationStatus";
import CertificationSharing from "@/components/certification/CertificationSharing";
import CertificationCard from "@/components/certification/CertificationCard";
import CertificationResources from "@/components/certification/CertificationResources";

const CertificationPage = () => {
  const pulseScore = 85;
  const certificationStatus = "active"; // active, pending, or revoked
  const certificationDate = "June 15, 2025";
  const expirationDate = "June 15, 2026";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Certification</h1>
        <p className="text-gray-500">
          Manage and share your PulsePlace.ai certification
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <CertificationStatus
            pulseScore={pulseScore}
            certificationStatus={certificationStatus}
            certificationDate={certificationDate}
            expirationDate={expirationDate}
          />
          <CertificationSharing />
        </div>

        <div className="space-y-6">
          <CertificationCard
            pulseScore={pulseScore}
            certificationDate={certificationDate}
            expirationDate={expirationDate}
          />
          <CertificationResources />
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;
