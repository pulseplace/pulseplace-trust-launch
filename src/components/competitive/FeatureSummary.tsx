
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CompetitorFeature } from "@/data/competitiveAnalysis";
import { Star, AlertTriangle, Clock } from "lucide-react";

interface FeatureSummaryProps {
  uniqueFeatures: CompetitorFeature[];
  gapFeatures: CompetitorFeature[];
  roadmapPriorities: CompetitorFeature[];
}

const FeatureSummary: React.FC<FeatureSummaryProps> = ({
  uniqueFeatures,
  gapFeatures,
  roadmapPriorities
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Star className="h-5 w-5 text-pulse-blue mr-2" />
            Our Unique Differentiators
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {uniqueFeatures.map((feature) => (
              <li key={feature.id} className="border-b pb-2 last:border-b-0">
                <p className="font-medium text-sm">{feature.name}</p>
                <p className="text-xs text-gray-500">{feature.description}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
            Competitive Gaps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {gapFeatures.map((feature) => (
              <li key={feature.id} className="border-b pb-2 last:border-b-0">
                <p className="font-medium text-sm">{feature.name}</p>
                <p className="text-xs text-gray-500">{feature.description}</p>
                {feature.notes && (
                  <p className="text-xs text-amber-700 italic mt-1">{feature.notes}</p>
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Clock className="h-5 w-5 text-blue-500 mr-2" />
            Launch Roadmap Priorities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {roadmapPriorities.slice(0, 5).map((feature, index) => (
              <li key={feature.id} className="border-b pb-2 last:border-b-0">
                <div className="flex items-center">
                  <span className="bg-pulse-blue text-white text-xs w-5 h-5 rounded-full flex items-center justify-center mr-2">
                    {index + 1}
                  </span>
                  <p className="font-medium text-sm">{feature.name}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">{feature.description}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeatureSummary;
