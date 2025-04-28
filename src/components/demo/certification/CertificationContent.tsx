
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CertificationBadge from "./CertificationBadge";
import CertificationExplanation from "./CertificationExplanation";

interface CertificationContentProps {
  pulseScore: number;
  organizationName: string;
  certificationDate: string;
  expirationDate: string;
}

const CertificationContent: React.FC<CertificationContentProps> = ({
  pulseScore,
  organizationName,
  certificationDate,
  expirationDate
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Your PulsePlace Certification</CardTitle>
        </CardHeader>
        <CardContent>
          <CertificationBadge 
            pulseScore={pulseScore}
            organizationName={organizationName}
            certificationDate={certificationDate}
            expirationDate={expirationDate}
          />
          
          <CertificationExplanation />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CertificationContent;
