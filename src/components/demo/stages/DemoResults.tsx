
import React from "react";
import { motion } from "framer-motion";
import { Award, ChartBar, Brain, Lightbulb, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useDemo } from "@/contexts/DemoContext";
import DemoNavigation from "../DemoNavigation";
import AIInsight from "../AIInsight";

const DemoResults = () => {
  const { pulseScore, pulseScoreDetails, organizationName } = useDemo();
  
  const { 
    categoryScores, 
    strengths, 
    opportunities, 
    recommendations,
    benchmarkComparison 
  } = pulseScoreDetails || {
    categoryScores: { trust: 0, engagement: 0, wellbeing: 0 },
    strengths: [],
    opportunities: [],
    recommendations: [],
    benchmarkComparison: 0
  };

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-pulse-blue/10 rounded-full mb-4">
            <ChartBar className="h-10 w-10 text-pulse-blue" />
          </div>
          <h1 className="text-3xl font-bold text-pulse-navy mb-2">
            AI-Generated PulseScore Results
          </h1>
          <p className="text-lg text-gray-600">
            Your AI-powered workplace culture analysis and certification status
          </p>
          <p className="text-md text-pulse-blue font-medium mt-2">
            {organizationName}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-pulse-blue via-purple-400 to-pulse-blue">
              <CardHeader className="bg-white">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    Your PulseScore™: {pulseScore}
                  </span>
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    Certification Eligible
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="bg-white pt-6">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-pulse-blue" style={{ width: `${pulseScore}%` }}></div>
                    </div>
                    <div className="absolute -top-2 left-[70%] h-6 border-l-2 border-dashed border-gray-400">
                      <div className="absolute -left-[30px] -top-4 text-xs text-gray-500">
                        Certification
                        <br />
                        Threshold
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center mt-2">
                    {benchmarkComparison > 0 ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {Math.abs(benchmarkComparison)}% above industry benchmark
                      </Badge>
                    ) : benchmarkComparison < 0 ? (
                      <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 flex items-center">
                        <TrendingDown className="h-3 w-3 mr-1" />
                        {Math.abs(benchmarkComparison)}% below industry benchmark
                      </Badge>
                    ) : (
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        On par with industry benchmark
                      </Badge>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-pulse-navy flex items-center">
                        <ChartBar className="h-4 w-4 mr-1" />
                        Trust Score
                      </h3>
                      <p className="text-2xl font-bold text-pulse-blue mt-1">{categoryScores.trust}/100</p>
                      <p className="text-xs text-gray-500 mt-1">40% of total score</p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-pulse-navy flex items-center">
                        <ChartBar className="h-4 w-4 mr-1" />
                        Engagement
                      </h3>
                      <p className="text-2xl font-bold text-purple-600 mt-1">{categoryScores.engagement}/100</p>
                      <p className="text-xs text-gray-500 mt-1">30% of total score</p>
                    </div>
                    
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-pulse-navy flex items-center">
                        <ChartBar className="h-4 w-4 mr-1" />
                        Wellbeing
                      </h3>
                      <p className="text-2xl font-bold text-amber-600 mt-1">{categoryScores.wellbeing}/100</p>
                      <p className="text-xs text-gray-500 mt-1">30% of total score</p>
                    </div>
                  </div>

                  {/* Strengths and Opportunities */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="border border-green-100 rounded-lg p-4">
                      <h3 className="text-green-700 font-medium flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Culture Strengths
                      </h3>
                      <ul className="mt-2 space-y-2">
                        {strengths.map((strength, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-sm">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border border-amber-100 rounded-lg p-4">
                      <h3 className="text-amber-700 font-medium flex items-center">
                        <TrendingDown className="h-4 w-4 mr-2" />
                        Improvement Opportunities
                      </h3>
                      <ul className="mt-2 space-y-2">
                        {opportunities.length > 0 ? opportunities.map((opportunity, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-amber-500 mr-2">→</span>
                            <span className="text-sm">{opportunity}</span>
                          </li>
                        )) : (
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-sm">No significant improvement areas detected</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center mb-4">
            <Brain className="h-6 w-6 text-pulse-blue mr-2" />
            <h2 className="text-xl font-bold text-pulse-navy">AI-Generated Insights</h2>
          </div>
          
          {/* AI Recommendations */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="font-medium text-pulse-navy mb-4">Recommendations Based on Your Results</h3>
              <div className="space-y-3">
                {recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 mr-2">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{recommendation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            <AIInsight
              title="Psychological Safety Strength"
              description="Your organization scores in the top 15% for psychological safety, which is strongly correlated with innovation success in technology companies."
              confidence={92}
              type="insight"
              source="Cultural Pattern Analysis"
            />
            
            <AIInsight
              title="Communication Opportunity"
              description={`AI detected a ${Math.abs(benchmarkComparison)}% variance in trust scores between departments. Consider implementing cross-functional projects to improve information flow.`}
              confidence={87}
              type="recommendation"
              source="Internal Variance Analysis"
            />
            
            <AIInsight
              title="Retention Risk Projection"
              description={`Based on current culture metrics, AI predicts a ${categoryScores.trust > 80 ? '15%' : '8%'} reduction in turnover risk compared to industry average over the next 12 months.`}
              confidence={84}
              type="prediction"
              source="Predictive Analytics Engine"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-4 border border-blue-100 bg-blue-50 rounded-md"
          >
            <div className="flex">
              <Lightbulb className="h-5 w-5 text-pulse-blue mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-pulse-navy">AI Result Explanation</h4>
                <p className="text-sm text-gray-600 mt-1">
                  In the complete platform, our AI engine provides extensive breakdowns of all 40+ trust metrics, 
                  showing exactly how your PulseScore was calculated and offering specific, actionable recommendations 
                  to improve each area of your workplace culture based on your organization's unique characteristics and industry benchmarks.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <DemoNavigation nextLabel="Generate Certification" />
    </div>
  );
};

export default DemoResults;
