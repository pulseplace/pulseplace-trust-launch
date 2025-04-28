
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SuggestedTopicsProps {
  topics: string[];
  onTopicSelect: (topic: string) => void;
  isLoading: boolean;
}

const SuggestedTopics: React.FC<SuggestedTopicsProps> = ({
  topics,
  onTopicSelect,
  isLoading,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Suggested Topics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {topics.map((topic, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full justify-start text-left"
            onClick={() => onTopicSelect(topic)}
            disabled={isLoading}
          >
            {topic}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default SuggestedTopics;

