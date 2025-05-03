
import React from 'react';

interface SuggestedTopicsProps {
  onTopicClick: (topic: string) => void;
  suggestions?: string[];
}

export const SuggestedTopics: React.FC<SuggestedTopicsProps> = ({ onTopicClick, suggestions }) => {
  const defaultTopics = [
    "How is the PulseScore calculated?",
    "What is Trust Certification?",
    "How do Pulse Surveys work?",
    "What metrics track emotional wellbeing?",
    "How can I improve team engagement?"
  ];
  
  const topics = suggestions || defaultTopics;

  return (
    <div className="space-y-2">
      {topics.map((topic, index) => (
        <button
          key={index}
          className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => onTopicClick(topic)}
        >
          {topic}
        </button>
      ))}
    </div>
  );
};
