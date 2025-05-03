
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";
import CertificationStatus from "@/components/certification/CertificationStatus";
import CertificationBadgePreview from "@/components/certification/CertificationBadgePreview";
import CertificationResources from "@/components/certification/CertificationResources";
import CertificationShare from "@/components/certification/CertificationShare";
import CertificationEmbed from "@/components/certification/CertificationEmbed";
import CertificationDownload from "@/components/certification/CertificationDownload";

const CertificationPage: React.FC = () => {
  // Mock certification data
  const certificationData = {
    pulseScore: 78,
    certificationStatus: "Certified",
    certificationDate: "2023-10-15",
    expirationDate: "2024-10-15",
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Certification Dashboard</h1>
          <p className="text-muted-foreground">Manage and track your organization's certification</p>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share Status
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <CertificationStatus
          title="Trust Score"
          description="Measures transparency, consistency, and alignment in leadership and team dynamics"
          score={82}
        />
        <CertificationStatus
          title="Engagement Stability"
          description="Evaluates sustainability of employee engagement and motivation levels"
          score={75}
        />
        <CertificationStatus
          title="Emotional Wellbeing"
          description="Assesses psychological safety and support in work environment"
          score={79}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="badge">
            <TabsList className="mb-4">
              <TabsTrigger value="badge">Badge</TabsTrigger>
              <TabsTrigger value="share">Share</TabsTrigger>
              <TabsTrigger value="embed">Embed</TabsTrigger>
              <TabsTrigger value="download">Download</TabsTrigger>
            </TabsList>
            
            <TabsContent value="badge" className="mt-0">
              <CertificationBadgePreview />
            </TabsContent>
            
            <TabsContent value="share" className="mt-0">
              <CertificationShare />
            </TabsContent>
            
            <TabsContent value="embed" className="mt-0">
              <CertificationEmbed />
            </TabsContent>
            
            <TabsContent value="download" className="mt-0">
              <CertificationDownload />
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <CertificationResources />
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;
