
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Code, Download, Link, Award, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useDemo } from "@/contexts/DemoContext";
import DemoNavigation from "../DemoNavigation";

const DemoSharing = () => {
  const { exitDemo } = useDemo();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("embed");
  const [copied, setCopied] = useState(false);
  
  const embedCode = '<iframe src="https://pulseplace.ai/embed/certification/DEMO123" width="300" height="150" frameborder="0"></iframe>';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode)
      .then(() => {
        setCopied(true);
        toast({
          title: "Copied!",
          description: "Embed code copied to clipboard",
        });
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to copy text. Please try again.",
          variant: "destructive",
        });
      });
  };

  const finishDemo = () => {
    exitDemo();
    navigate("/");
  };

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-pulse-blue/10 rounded-full mb-4">
            <Share2 className="h-10 w-10 text-pulse-blue" />
          </div>
          <h1 className="text-3xl font-bold text-pulse-navy mb-2">
            AI-Enhanced Certification Sharing
          </h1>
          <p className="text-lg text-gray-600">
            Explore how AI helps maximize the impact of your culture certification
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Share Your AI-Generated Certification</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="embed" onValueChange={setActiveTab}>
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
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500">
                      Embed your AI-generated certification badge on your website to showcase your workplace culture.
                    </p>
                    
                    <div className="relative">
                      <Textarea
                        value={embedCode}
                        className="h-24 font-mono text-sm"
                        readOnly
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={copyToClipboard}
                      >
                        {copied ? (
                          <Check className="h-3.5 w-3.5 text-green-500" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
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
                            <div className="font-bold">Pulse Certified™</div>
                            <div className="text-sm text-gray-500">Trust Score: 85</div>
                            <div className="text-xs mt-1">AI-Verified</div>
                            <div className="mt-2 text-xs text-pulse-blue">
                              Verified by PulsePlace.ai
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="download">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500">
                      Download your AI-verified certification badge in various formats.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border">
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
                      
                      <Card className="border">
                        <CardContent className="pt-6">
                          <div className="flex flex-col items-center">
                            <div className="border p-4 rounded-lg bg-white">
                              <div className="flex items-center">
                                <Award className="h-16 w-16 text-pulse-blue" />
                                <div className="ml-2">
                                  <div className="font-bold">PulsePlace Certified</div>
                                  <div className="text-sm">Trust Score: 85</div>
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
                  </div>
                </TabsContent>
                
                <TabsContent value="share">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500">
                      Share your AI-verified certification on social media and other platforms.
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <Button className="w-full" variant="outline">
                        <Link className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Button>
                      <Button className="w-full" variant="outline">
                        <Link className="mr-2 h-4 w-4" />
                        Twitter
                      </Button>
                      <Button className="w-full" variant="outline">
                        <Link className="mr-2 h-4 w-4" />
                        Facebook
                      </Button>
                      <Button className="w-full" variant="outline">
                        <Link className="mr-2 h-4 w-4" />
                        Email
                      </Button>
                    </div>
                    
                    <div className="mt-4 p-4 bg-gray-50 rounded-md">
                      <h4 className="text-sm font-medium mb-2">Personalized Share Link:</h4>
                      <div className="flex">
                        <input
                          type="text"
                          className="flex-1 text-sm p-2 border rounded-l-md"
                          value="https://pulseplace.ai/cert/DEMO123"
                          readOnly
                        />
                        <Button className="rounded-l-none">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 p-4 border border-blue-100 bg-blue-50 rounded-md">
                <div className="flex">
                  <Award className="h-5 w-5 text-pulse-blue mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-pulse-navy">AI Enhancement</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      In the complete platform, our AI tracks certification badge impressions and engagement, 
                      providing insights on which sharing methods generate the most interest. It also tailors 
                      messaging for each platform to maximize impact and provides tailored recommendations 
                      for improving your employer brand.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-pulse-navy mb-4">
            Demo Experience Complete!
          </h2>
          <p className="text-gray-600 mb-6">
            You've explored PulsePlace.ai's AI-driven workplace culture certification journey.
            Ready to start your organization's trust transformation?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-pulse-blue hover:bg-pulse-blue/90"
              onClick={finishDemo}
            >
              Start Your Assessment
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={finishDemo}
            >
              Return to Homepage
            </Button>
          </div>
        </motion.div>
      </div>
      
      <DemoNavigation 
        showNextButton={false} 
        backLabel="Previous Step" 
      />
    </div>
  );
};

export default DemoSharing;

const Copy = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
  </svg>
);
