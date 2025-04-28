
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface QuestionProps {
  id: string;
  question: string;
  options: { value: number; label: string }[];
  value: number | null;
  onChange: (value: number) => void;
  category?: "trust" | "engagement" | "wellbeing";
  contextualHelp?: string;
}

const SurveyQuestion: React.FC<QuestionProps> = ({
  id,
  question,
  options,
  value,
  onChange,
  category,
  contextualHelp
}) => {
  // Get category color
  const getCategoryColor = () => {
    switch (category) {
      case "trust":
        return "bg-blue-100 text-blue-800";
      case "engagement":
        return "bg-purple-100 text-purple-800";
      case "wellbeing":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Get category label
  const getCategoryLabel = () => {
    switch (category) {
      case "trust":
        return "Trust";
      case "engagement":
        return "Engagement";
      case "wellbeing":
        return "Wellbeing";
      default:
        return "General";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-medium">{question}</h3>
        {category && (
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor()}`}>
              {getCategoryLabel()}
            </span>
            {contextualHelp && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="cursor-help">
                      <Info className="h-4 w-4 text-gray-500" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>{contextualHelp}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        )}
      </div>

      <RadioGroup
        value={value?.toString()}
        onValueChange={(val) => onChange(parseInt(val))}
        className="grid grid-cols-1 gap-3 sm:grid-cols-5"
      >
        {options.map((option) => (
          <div
            key={option.value}
            className="flex flex-col items-center space-y-2"
          >
            <RadioGroupItem
              value={option.value.toString()}
              id={`${id}-${option.value}`}
              className="peer sr-only"
            />
            <Label
              htmlFor={`${id}-${option.value}`}
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-gray-50 hover:border-gray-200 peer-data-[state=checked]:border-pulse-blue [&:has([data-state=checked])]:border-pulse-blue cursor-pointer w-full"
            >
              <div className="text-lg font-semibold">{option.value}</div>
              <div className="text-xs text-center">{option.label}</div>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default SurveyQuestion;
