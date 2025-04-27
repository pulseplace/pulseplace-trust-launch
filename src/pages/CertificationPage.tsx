import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Download, Award, Share2, Code, ExternalLink, Check, FileText } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const CertificationPage = () => {
  const [embedCode, setEmbedCode] = useState(
    '<iframe src="https://pulseplace.ai/embed/certification/COMPANY123" width="300" height="150" frameborder="0"></iframe>'
  );

  const pulseScore = 85;
  const certificationStatus = "active"; // active, pending, or revoked
  const certificationDate = "June 15, 2025";
  const expirationDate = "June 15, 2026";

  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast({
          title: "Copied!",
          description: message,
        });
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: "Failed to copy text. Please try again.",
          variant: "destructive",
        });
      });
  };

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
          <Card>
            <CardHeader>
              <CardTitle>Certification Status</CardTitle>
              <CardDescription>
                Your organization's trust certification details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <div className="text-sm text-gray-500">PulseScore™</div>
                  <div className="text-4xl font-bold text-pulse-blue">{pulseScore}</div>
                </div>
                
                <div className="space-y-1">
                  <div className="text-sm text-gray-500">Status</div>
                  <div className="flex items-center">
                    <div className={`h-2 w-2 rounded-full mr-2 ${
                      certificationStatus === "active" ? "bg-green-500" :
                      certificationStatus === "pending" ? "bg-amber-500" :
                      "bg-red-500"
                    }`}></div>
                    <span className="font-medium">
                      {certificationStatus === "active" ? "Active" :
                       certificationStatus === "pending" ? "Pending" :
                       "Revoked"}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="text-sm text-gray-500">Certified On</div>
                  <div className="font-medium">{certificationDate}</div>
                </div>
                
                <div className="space-y-1">
                  <div className="text-sm text-gray-500">Expires On</div>
                  <div className="font-medium">{expirationDate}</div>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg bg-gray-50">
                <div className="text-sm text-gray-500 mb-2">
                  Your organization is certified for demonstrating excellence in:
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="text-green-600 h-4 w-4 mr-2" />
                    <span>Transparent leadership communication</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-600 h-4 w-4 mr-2" />
                    <span>Employee wellbeing programs</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-600 h-4 w-4 mr-2" />
                    <span>Psychological safety in teams</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-600 h-4 w-4 mr-2" />
                    <span>Growth and development opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-600 h-4 w-4 mr-2" />
                    <span>Learning and innovation culture</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

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
                
                <TabsContent value="embed" className="space-y-4">
                  <p className="text-sm text-gray-500">
                    Copy this code and paste it on your website to display your certification badge.
                  </p>
                  
                  <div className="relative">
                    <Textarea
                      value={embedCode}
                      onChange={(e) => setEmbedCode(e.target.value)}
                      className="h-24 font-mono text-sm"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(
                        embedCode,
                        "Embed code copied to clipboard"
                      )}
                    >
                      <Copy className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <div className="text-sm font-medium mb-2">Preview:</div>
                    <div className="flex justify-center">
                      <div className="border p-4 rounded-lg bg-white w-[300px]">
                        <div className="flex items-center justify-center mb-2">
                          <Award className="h-10 w-10 text-pulse-blue" />
                        </div>
                        <div className="text-center">
                          <div className="font-bold">PulsePlace Certified</div>
                          <div className="text-sm text-gray-500">Trust Score: {pulseScore}</div>
                          <div className="text-xs mt-1">Valid until {expirationDate}</div>
                          <div className="mt-2 text-xs text-pulse-blue">
                            Verified by PulsePlace.ai
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="download" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center">
                          <div className="border p-4 rounded-lg bg-white">
                            <Award className="h-20 w-20 text-pulse-blue" />
                          </div>
                          <h3 className="mt-4 font-medium">Standard Badge</h3>
                          <p className="text-xs text-gray-500 mb-4">
                            300 x 300px PNG file
                          </p>
                          <Button className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download PNG
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center">
                          <div className="border p-4 rounded-lg bg-white">
                            <div className="flex items-center">
                              <Award className="h-16 w-16 text-pulse-blue" />
                              <div className="ml-2">
                                <div className="font-bold">PulsePlace Certified</div>
                                <div className="text-sm">Trust Score: {pulseScore}</div>
                              </div>
                            </div>
                          </div>
                          <h3 className="mt-4 font-medium">Horizontal Badge</h3>
                          <p className="text-xs text-gray-500 mb-4">
                            600 x 200px PNG file
                          </p>
                          <Button className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download PNG
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Additional Formats</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        SVG
                      </Button>
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        PDF
                      </Button>
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        JPG
                      </Button>
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        EPS
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="share" className="space-y-4">
                  <p className="text-sm text-gray-500">
                    Share your certification across social media and professional networks.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <Button className="w-full">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                      </svg>
                      LinkedIn
                    </Button>
                    
                    <Button className="w-full">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                      Twitter
                    </Button>
                    
                    <Button className="w-full">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"></path>
                      </svg>
                      Facebook
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-medium mb-2">Direct Link</h3>
                    <div className="flex items-center space-x-2">
                      <Input
                        readOnly
                        value="https://pulseplace.ai/certification/COMPANY123"
                        className="font-mono text-sm"
                      />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => copyToClipboard(
                              "https://pulseplace.ai/certification/COMPANY123",
                              "Certification link copied to clipboard"
                            )}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Copy link</TooltipContent>
                      </Tooltip>
                      <Link 
                        to="https://pulseplace.ai/certification/COMPANY123" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
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
                    <h2 className="text-xl font-bold mt-1">Your Organization</h2>
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
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;
