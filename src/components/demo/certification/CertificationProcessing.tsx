
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import AIProcessing from "../AIProcessing";

const CertificationProcessing: React.FC = () => {
  return (
    <Card>
      <CardContent className="py-8">
        <AIProcessing 
          message="AI is verifying certification criteria..." 
          type="generating"
        />
      </CardContent>
    </Card>
  );
};

export default CertificationProcessing;
