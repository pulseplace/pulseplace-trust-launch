
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DemoNavigation from "../DemoNavigation";
import MetricsCards from "../dashboard/MetricsCards";
import DepartmentTrust from "../dashboard/DepartmentTrust";
import CultureHealth from "../dashboard/CultureHealth";
import AIInsightsList from "../dashboard/AIInsightsList";

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
              </TabsList>
            </div>
            
            <TabsContent value="overview">
              <MetricsCards />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DepartmentTrust />
                <CultureHealth />
              </div>

              <div className="mt-6">
                <AIInsightsList />
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
