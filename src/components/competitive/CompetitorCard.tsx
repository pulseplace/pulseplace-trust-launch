
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Competitor } from "@/data/competitiveAnalysis";

interface CompetitorCardProps {
  competitor: Competitor;
}

const CompetitorCard: React.FC<CompetitorCardProps> = ({ competitor }) => {
  const getPricePointBadge = (pricePoint: string) => {
    switch (pricePoint) {
      case 'low':
        return <Badge className="bg-green-500">Low Price</Badge>;
      case 'medium':
        return <Badge className="bg-blue-500">Mid-Market</Badge>;
      case 'high':
        return <Badge className="bg-purple-500">High-End</Badge>;
      case 'enterprise':
        return <Badge className="bg-gray-800">Enterprise</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{competitor.name}</CardTitle>
          {getPricePointBadge(competitor.pricePoint)}
        </div>
        <p className="text-sm text-gray-500">{competitor.primaryFocus}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">Description</p>
          <p className="text-sm">{competitor.description}</p>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Strengths</p>
          <ul className="space-y-1">
            {competitor.strengthAreas.map((strength, index) => (
              <li key={index} className="text-sm flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                {strength}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Weaknesses</p>
          <ul className="space-y-1">
            {competitor.weaknessAreas.map((weakness, index) => (
              <li key={index} className="text-sm flex items-center">
                <X className="h-4 w-4 text-red-500 mr-2" />
                {weakness}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-2 text-sm text-gray-500 border-t">
          <p>Funding: <span className="font-medium">{competitor.fundingStage}</span></p>
          {competitor.marketShare && (
            <p>Market: <span className="font-medium">{competitor.marketShare}</span></p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CompetitorCard;
