
import React from "react";

export const defaultSuggestions = [
  "How can we improve trust in our team?",
  "What metrics should we track for engagement?",
  "Best practices for emotional wellbeing",
  "Ways to celebrate team success",
  "How to interpret PulseScore trends"
];

interface SuggestedTopicsProps {
  onTopicClick: (topic: string) => void;
  suggestions?: string[];
}

export const SuggestedTopics: React.FC<SuggestedTopicsProps> = ({ 
  onTopicClick,
  suggestions = defaultSuggestions 
}) => {
  return (
    <div className="mt-4 mb-6">
      <h3 className="text-sm font-medium text-gray-500 mb-2">Suggested Topics</h3>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((topic, index) => (
          <button
            key={index}
            onClick={() => onTopicClick(topic)}
            className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedTopics;
