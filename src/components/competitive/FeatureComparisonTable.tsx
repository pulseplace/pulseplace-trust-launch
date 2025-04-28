
import React from "react";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Check, X, Clock, Star, Minus } from "lucide-react";
import { CompetitorFeature } from "@/data/competitiveAnalysis";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface FeatureComparisonTableProps {
  features: CompetitorFeature[];
  competitors: string[];
}

const FeatureComparisonTable: React.FC<FeatureComparisonTableProps> = ({ 
  features,
  competitors
}) => {
  const renderFeatureStatus = (status: string) => {
    switch (status) {
      case 'available':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-amber-500" />;
      case 'planned':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'unique':
        return <Star className="h-5 w-5 text-pulse-blue" />;
      case 'missing':
        return <X className="h-5 w-5 text-gray-300" />;
      default:
        return <Minus className="h-5 w-5 text-gray-300" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available';
      case 'in-progress':
        return 'In Development';
      case 'planned':
        return 'Planned';
      case 'unique':
        return 'Unique Feature';
      case 'missing':
        return 'Not Available';
      default:
        return 'Unknown';
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'trust':
        return <Badge className="bg-pulse-blue text-white">Trust</Badge>;
      case 'certification':
        return <Badge className="bg-[#F97316] text-white">Certification</Badge>;
      case 'analytics':
        return <Badge className="bg-[#8B5CF6] text-white">Analytics</Badge>;
      case 'engagement':
        return <Badge className="bg-[#0EA5E9] text-white">Engagement</Badge>;
      case 'security':
        return <Badge className="bg-[#F43F5E] text-white">Security</Badge>;
      case 'integration':
        return <Badge className="bg-[#10B981] text-white">Integration</Badge>;
      default:
        return <Badge>Other</Badge>;
    }
  };

  const getImportanceText = (importance: number) => {
    switch (importance) {
      case 5:
        return 'Critical';
      case 4:
        return 'High';
      case 3:
        return 'Medium';
      case 2:
        return 'Low';
      case 1:
        return 'Optional';
      default:
        return 'Unknown';
    }
  };

  const getImportanceBadge = (importance: number) => {
    switch (importance) {
      case 5:
        return <Badge className="bg-red-500 text-white">Critical</Badge>;
      case 4:
        return <Badge className="bg-amber-500 text-white">High</Badge>;
      case 3:
        return <Badge className="bg-blue-500 text-white">Medium</Badge>;
      case 2:
      case 1:
        return <Badge className="bg-gray-500 text-white">Low</Badge>;
      default:
        return null;
    }
  };

  return (
    <TooltipProvider>
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Feature</TableHead>
              <TableHead className="w-[100px]">Category</TableHead>
              <TableHead className="w-[100px]">Importance</TableHead>
              <TableHead className="w-[100px] text-center">PulsePlace.ai</TableHead>
              {competitors.map((competitor, index) => (
                <TableHead key={index} className="w-[100px] text-center">{competitor}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature) => (
              <TableRow key={feature.id}>
                <TableCell className="font-medium">
                  <div>
                    <p className="font-semibold">{feature.name}</p>
                    <p className="text-xs text-gray-500">{feature.description}</p>
                    {feature.notes && (
                      <p className="text-xs italic text-amber-700 mt-1">{feature.notes}</p>
                    )}
                  </div>
                </TableCell>
                <TableCell>{getCategoryBadge(feature.category)}</TableCell>
                <TableCell>
                  <Tooltip>
                    <TooltipTrigger>{getImportanceBadge(feature.importance)}</TooltipTrigger>
                    <TooltipContent>{getImportanceText(feature.importance)}</TooltipContent>
                  </Tooltip>
                </TableCell>
                <TableCell className="text-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex justify-center">
                        {renderFeatureStatus(feature.status.pulseplace)}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{getStatusText(feature.status.pulseplace)}</TooltipContent>
                  </Tooltip>
                </TableCell>
                <TableCell className="text-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex justify-center">
                        {renderFeatureStatus(feature.status.competitor1)}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{getStatusText(feature.status.competitor1)}</TooltipContent>
                  </Tooltip>
                </TableCell>
                <TableCell className="text-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex justify-center">
                        {renderFeatureStatus(feature.status.competitor2)}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{getStatusText(feature.status.competitor2)}</TooltipContent>
                  </Tooltip>
                </TableCell>
                <TableCell className="text-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex justify-center">
                        {renderFeatureStatus(feature.status.competitor3)}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{getStatusText(feature.status.competitor3)}</TooltipContent>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  );
};

export default FeatureComparisonTable;
