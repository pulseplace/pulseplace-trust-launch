
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain } from "lucide-react";

interface SurveyQuestionProps {
  id: string;
  question: string;
  options: { value: number; label: string }[];
  value: number | null;
  onChange: (value: number) => void;
  showInsight?: boolean;
}

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({
  id,
  question,
  options,
  value,
  onChange,
  showInsight = false,
}) => {
  // Generate a fake insight when a question is answered
  const getInsight = () => {
    const insights = [
      "Organizations scoring high on this dimension see 34% higher employee retention.",
      "Teams with strong alignment on this point show 27% higher productivity.",
      "Companies that excel here report 23% fewer workplace conflicts.",
      "Leaders who focus on this area build teams with 31% higher engagement scores.",
      "This factor correlates with 42% improved internal collaboration metrics."
    ];
    
    return insights[Math.floor(Math.random() * insights.length)];
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">{question}</h2>
      
      <RadioGroup
        value={value?.toString()}
        onValueChange={(val) => onChange(parseInt(val))}
        className="space-y-3"
      >
        {options.map((option) => (
          <div
            key={option.value}
            className={`flex items-center space-x-2 rounded-md border p-4 transition-all
              ${value === option.value ? "border-pulse-blue bg-pulse-blue/5" : "border-gray-200 hover:border-gray-300"}`}
          >
            <RadioGroupItem value={option.value.toString()} id={`${id}-${option.value}`} />
            <Label
              htmlFor={`${id}-${option.value}`}
              className="flex-grow cursor-pointer text-base font-medium"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>

      {showInsight && value !== null && (
        <Card className="p-4 bg-blue-50 border-blue-200 mt-6 animate-fadeIn">
          <div className="flex items-start gap-3">
            <div className="bg-pulse-blue/20 rounded-full p-2">
              <Brain className="h-5 w-5 text-pulse-blue" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold">AI Culture Insight</h4>
                <Badge variant="outline" className="bg-blue-100/60">
                  PulsePlace AI
                </Badge>
              </div>
              <p className="text-sm text-gray-700">{getInsight()}</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SurveyQuestion;
