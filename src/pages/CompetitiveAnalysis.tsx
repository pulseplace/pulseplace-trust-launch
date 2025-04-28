
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CompetitorCard from "@/components/competitive/CompetitorCard";
import FeatureComparisonTable from "@/components/competitive/FeatureComparisonTable";
import FeatureSummary from "@/components/competitive/FeatureSummary";
import { competitors, features, getFeaturesByCategory, getUniqueFeatures, getCompetitiveGapFeatures, getRoadmapPriorities } from "@/data/competitiveAnalysis";

const CompetitiveAnalysisPage: React.FC = () => {
  const [category, setCategory] = useState<string>("all");
  
  const filteredFeatures = category === "all" 
    ? features 
    : getFeaturesByCategory(category);
  
  const uniqueFeatures = getUniqueFeatures();
  const gapFeatures = getCompetitiveGapFeatures();
  const roadmapPriorities = getRoadmapPriorities();
  
  const competitorNames = competitors.map(c => c.name);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-pulse-navy mb-2">
            Competitive Analysis & Feature Roadmap
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Track PulsePlace.ai's market position, unique differentiators, and development priorities for pre-seed funding and beta launch
          </p>
        </div>

        <Tabs defaultValue="summary" className="mb-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="competitors">Competitors</TabsTrigger>
            <TabsTrigger value="features">Feature Matrix</TabsTrigger>
            <TabsTrigger value="roadmap">Launch Roadmap</TabsTrigger>
          </TabsList>
          
          <TabsContent value="summary" className="py-6">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Market Position Overview</CardTitle>
                <CardDescription>
                  Key metrics and differentiators for PulsePlace.ai
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-pulse-blue/20 to-pulse-blue/10 p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">Primary Differentiator</h3>
                    <p className="text-2xl font-bold text-pulse-navy">Trust Certification Platform</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Only platform offering public, verifiable workplace trust certification badges
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#FEF7CD]/30 to-[#FEF7CD]/10 p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">Target Market Focus</h3>
                    <p className="text-2xl font-bold text-pulse-navy">B2B & Enterprise</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Culture-forward organizations seeking public trust verification and analytics
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#D3E4FD]/30 to-[#D3E4FD]/10 p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">Launch Readiness</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-pulse-navy">76%</span>
                      <Badge>Pre-Seed Ready</Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      10 critical features ready, 3 in development, 2 planned
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <FeatureSummary 
              uniqueFeatures={uniqueFeatures} 
              gapFeatures={gapFeatures} 
              roadmapPriorities={roadmapPriorities}
            />
          </TabsContent>
          
          <TabsContent value="competitors" className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {competitors.map(competitor => (
                <CompetitorCard key={competitor.id} competitor={competitor} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="features" className="py-6">
            <div className="mb-4 flex justify-end">
              <Select
                value={category}
                onValueChange={(value) => setCategory(value)}
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="trust">Trust</SelectItem>
                  <SelectItem value="certification">Certification</SelectItem>
                  <SelectItem value="analytics">Analytics</SelectItem>
                  <SelectItem value="engagement">Engagement</SelectItem>
                  <SelectItem value="security">Security</SelectItem>
                  <SelectItem value="integration">Integration</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <FeatureComparisonTable features={filteredFeatures} competitors={competitorNames} />
          </TabsContent>
          
          <TabsContent value="roadmap" className="py-6">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Beta Launch Requirements</CardTitle>
                  <CardDescription>
                    Critical features needed before onboarding initial beta clients
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Pre-seed Readiness</h3>
                      <ul className="space-y-3">
                        {roadmapPriorities.slice(0, 3).map((feature, index) => (
                          <li key={feature.id} className="flex items-start">
                            <Badge className="mt-0.5 mr-2">{index + 1}</Badge>
                            <div>
                              <p className="font-medium">{feature.name}</p>
                              <p className="text-sm text-gray-600">{feature.description}</p>
                              {feature.notes && (
                                <p className="text-sm italic text-amber-700 mt-1">{feature.notes}</p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h3 className="font-semibold text-lg mb-4">Client Onboarding Requirements</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="bg-gray-50">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Beta Client 1</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              <li className="text-sm">✓ Pulse Certification Engine</li>
                              <li className="text-sm">✓ Trust Analytics Dashboard</li>
                              <li className="text-sm">✓ Survey & Assessment Tools</li>
                              <li className="text-sm">✓ Embedding & Sharing</li>
                              <li className="text-sm font-medium text-amber-700">⚠ Role-based permissions</li>
                            </ul>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-gray-50">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Beta Client 2</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              <li className="text-sm">✓ PulseBot AI Assistant</li>
                              <li className="text-sm">✓ Trust Analytics Dashboard</li>
                              <li className="text-sm">✓ Benchmark Comparisons</li>
                              <li className="text-sm font-medium text-amber-700">⚠ Action Planning Tools</li>
                              <li className="text-sm font-medium text-amber-700">⚠ Slack Integration</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Development Timeline</CardTitle>
                  <CardDescription>
                    Projected development schedule for key features
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-semibold mb-3">Near Term (1-2 Months)</h3>
                      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                        <p className="text-sm">
                          <span className="font-medium">Role-based Access Controls:</span> Granular permissions for viewing sensitive trust data
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Trust Action Planning:</span> Guided workflows for improving trust metrics
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Slack Basic Integration:</span> Initial integration for survey notifications
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">Mid Term (3-4 Months)</h3>
                      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                        <p className="text-sm">
                          <span className="font-medium">Predictive Trust Analytics:</span> AI-powered predictions of trust trends
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Advanced Slack Integration:</span> Deep integration for surveys and insights
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Microsoft Teams Integration:</span> Deep integration for workplace collaboration
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">Long Term (5-6 Months)</h3>
                      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                        <p className="text-sm">
                          <span className="font-medium">CRM Integration:</span> Integration with major CRM platforms
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Advanced Trust Action Planning:</span> Enhanced action planning with AI suggestions
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Open API:</span> APIs for custom integrations and extensions
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default CompetitiveAnalysisPage;
