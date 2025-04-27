
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const CertificationResources = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Certification Resources</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button variant="outline" className="w-full justify-start">
          <FileText className="mr-2 h-4 w-4" />
          Usage Guidelines
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <FileText className="mr-2 h-4 w-4" />
          Brand Standards
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <FileText className="mr-2 h-4 w-4" />
          Press Release Template
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <FileText className="mr-2 h-4 w-4" />
          Social Media Kit
        </Button>
      </CardContent>
    </Card>
  );
};

export default CertificationResources;
