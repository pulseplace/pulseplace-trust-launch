
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, BarChart, LineChart, PieChart, Brain, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DemoNavigation from "../DemoNavigation";
import AIInsight from "../AIInsight";

const DemoDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-pulse-blue/10 rounded-full mb-4">
            <LayoutDashboard className="h-10 w-10 text-pulse-blue" />
          </div>
          <h1 className="text-3xl font-bold text-pulse-navy mb-2">
            AI-Powered Dashboard Experience
          </h1>
          <p className="text-lg text-gray-600">
            Explore how AI delivers ongoing trust insights and recommendations
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="overview" className="min-w-[120px]">
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="insights" className="min-w-[120px]">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Insights
                </TabsTrigger>
                <TabsTrigger value="trends" className="min-w-[120px]">
                  <LineChart className="h-4 w-4 mr-2" />
                  Trends
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center">
                      <BarChart className="h-4 w-4 mr-2 text-pulse-blue" />
                      Trust Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">88/100</div>
                    <p className="text-xs text-green-600 flex items-center">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      3% above industry average
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center">
                      <BarChart className="h-4 w-4 mr-2 text-purple-600" />
                      Engagement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">82/100</div>
                    <p className="text-xs text-green-600 flex items-center">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      5% increase from last quarter
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center">
                      <BarChart className="h-4 w-4 mr-2 text-amber-600" />
                      Wellbeing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">85/100</div>
                    <p className="text-xs text-amber-600 flex items-center">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      Steady from last quarter
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Trust Score by Department</CardTitle>
                    <CardDescription>AI-analyzed trust patterns across teams</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <BarChart className="h-12 w-12 mx-auto text-gray-300" />
                        <p className="text-gray-500">Interactive department trust comparison chart</p>
                        <p className="text-xs text-gray-400">Complete version includes AI-powered analysis of team dynamics</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Culture Health Overview</CardTitle>
                    <CardDescription>AI assessment of culture dimensions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <PieChart className="h-12 w-12 mx-auto text-gray-300" />
                        <p className="text-gray-500">Interactive culture dimension breakdown</p>
                        <p className="text-xs text-gray-400">Complete version includes 40+ culture metrics analyzed by AI</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="insights">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="h-5 w-5 mr-2 text-pulse-blue" />
                      AI-Generated Culture Insights
                    </CardTitle>
                    <CardDescription>
                      Real-time analysis of your workplace culture data
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <AIInsight 
                      title="Cross-Team Communication"
                      description="AI has detected a 23% variance in communication satisfaction between engineering and marketing teams. Consider implementing shared objectives and cross-functional projects."
                      confidence={91}
                      source="Team Comparison Analysis"
                      type="recommendation"
                    />
                    
                    <AIInsight 
                      title="Remote Work Impact"
                      description="Remote employees score 12% lower on 'feeling connected' than office-based staff, but 18% higher on work-life balance. AI recommends hybrid team building activities."
                      confidence={89}
                      source="Location Pattern Analysis"
                      type="insight"
                    />
                    
                    <AIInsight 
                      title="Q3 Engagement Prediction"
                      description="Based on current trust trajectory and seasonal patterns, AI predicts a 7% increase in overall engagement scores by Q3 if current initiatives continue."
                      confidence={85}
                      source="Predictive Culture Model"
                      type="prediction"
                    />
                  </CardContent>
                </Card>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex">
                    <Brain className="h-5 w-5 text-pulse-blue mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-pulse-navy">AI Dashboard Intelligence</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        In the complete platform, our AI continuously analyzes your culture data to provide 
                        actionable insights, identify patterns, and predict potential challenges before they 
                        become problems. The AI learns from your specific organization's culture patterns to 
                        provide increasingly personalized recommendations over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="trends">
              <Card>
                <CardHeader>
                  <CardTitle>AI Trust Trend Analysis</CardTitle>
                  <CardDescription>
                    AI-powered tracking of key metrics over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <LineChart className="h-12 w-12 mx-auto text-gray-300" />
                      <p className="text-gray-500">Interactive trend visualization across trust dimensions</p>
                      <p className="text-xs text-gray-400">
                        Complete version includes AI-powered trend analysis and future projections
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">AI Trend Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-green-50 rounded-md border border-green-100">
                        <div className="flex">
                          <Brain className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-green-800">
                              <span className="font-medium">Positive trend:</span> Psychological safety has increased 14% over the past quarter
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-amber-50 rounded-md border border-amber-100">
                        <div className="flex">
                          <Brain className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-amber-800">
                              <span className="font-medium">Attention needed:</span> Work-life balance scores dropping in engineering department
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">AI Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
                        <div className="flex">
                          <Brain className="h-4 w-4 text-pulse-blue mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-blue-800">
                              <span className="font-medium">Based on trends:</span> Continue leadership transparency initiatives for continued engagement growth
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
                        <div className="flex">
                          <Brain className="h-4 w-4 text-pulse-blue mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-blue-800">
                              <span className="font-medium">AI suggestion:</span> Consider flexible work policy adjustments for engineering team to address wellbeing
                            </p>
                          </div>
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
      
      <DemoNavigation nextLabel="Share Certification" />
    </div>
  );
};

export default DemoDashboard;
