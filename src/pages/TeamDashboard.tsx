
import React from "react";
import MetricsCards from "@/components/demo/dashboard/MetricsCards";
import TrustMetrics from "@/components/dashboard/TrustMetrics";
import EngagementTrends from "@/components/dashboard/EngagementTrends";
import AIInsightsList from "@/components/demo/dashboard/AIInsightsList";

const TeamDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Team Dashboard</h1>
        <p className="text-gray-500">
          Monitor your organization's trust dynamics and culture health
        </p>
      </div>

      <MetricsCards />

      <div className="grid grid-cols-12 gap-6">
        <TrustMetrics />
        <EngagementTrends />
      </div>

      <AIInsightsList />
    </div>
  );
};

export default TeamDashboard;
