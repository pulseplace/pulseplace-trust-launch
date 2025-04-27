
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Download, Share2 } from "lucide-react";
import CertificationEmbed from "./CertificationEmbed";
import CertificationDownload from "./CertificationDownload";
import CertificationShare from "./CertificationShare";

const CertificationSharing = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Share Your Certification</CardTitle>
        <CardDescription>
          Display your certification badge on your website and recruitment materials
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="embed">
          <TabsList className="mb-4">
            <TabsTrigger value="embed">
              <Code className="h-4 w-4 mr-2" />
              Embed
            </TabsTrigger>
            <TabsTrigger value="download">
              <Download className="h-4 w-4 mr-2" />
              Download
            </TabsTrigger>
            <TabsTrigger value="share">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="embed">
            <CertificationEmbed />
          </TabsContent>
          
          <TabsContent value="download">
            <CertificationDownload />
          </TabsContent>
          
          <TabsContent value="share">
            <CertificationShare />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CertificationSharing;
