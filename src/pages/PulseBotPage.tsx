
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { ChatInterface } from "@/components/pulsebot/ChatInterface";
import { SuggestedTopics } from "@/components/pulsebot/SuggestedTopics";
import InsightsPanel from "@/components/pulsebot/InsightsPanel";

const PulseBotPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  
  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    toast({
      title: "Topic selected",
      description: `You selected: ${topic}`
    });
  };
  
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[600px] flex flex-col">
            <div className="bg-pulse-blue text-white p-4">
              <h2 className="text-lg font-semibold">PulseBot Assistant</h2>
              <p className="text-sm opacity-80">AI-powered culture and trust guidance</p>
            </div>
            
            <ChatInterface />
          </div>
          
          <div className="mt-4">
            <SuggestedTopics onTopicClick={handleTopicClick} />
          </div>
        </div>
        
        <div>
          <InsightsPanel 
            insights={[
              {
                title: "Trust Enhancers",
                content: "Regular team meetings and clear communication channels are building blocks for high-trust organizations."
              },
              {
                title: "Engagement Tips",
                content: "Recognize achievements publicly and create spaces for authentic team connection."
              },
              {
                title: "Wellbeing Focus",
                content: "Encourage work-life balance and create psychological safety for sharing concerns."
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PulseBotPage;
