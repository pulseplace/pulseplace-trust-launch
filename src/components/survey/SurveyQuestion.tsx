
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export interface QuestionProps {
  id: string;
  question: string;
  options: { value: number; label: string }[];
  value: number | null;
  onChange: (value: number) => void;
}

const SurveyQuestion: React.FC<QuestionProps> = ({
  id,
  question,
  options,
  value,
  onChange,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium">{question}</h3>
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
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-gray-50 hover:border-gray-200 peer-data-[state=checked]:border-pulse-blue [&:has([data-state=checked])]:border-pulse-blue cursor-pointer"
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
