
import React from 'react';
import { useDemo } from "@/contexts/DemoContext";
import { DemoNavigation } from "@/components/demo/DemoNavigation";
import { ChatInterface } from "@/components/pulsebot/ChatInterface";
import { SuggestedTopics } from "@/components/pulsebot/SuggestedTopics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DemoPulseBot = () => {
  const { goToNextStage, goToPreviousStage } = useDemo();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">PulseBot Assistant</h1>
      <p className="text-gray-600 text-center mb-8">
        Meet your AI workplace culture advisor, available 24/7
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden h-[600px]">
            <CardHeader className="bg-pulse-blue text-white">
              <CardTitle>PulseBot Conversation</CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-[calc(100%-73px)]">
              <ChatInterface initialMessages={[{
                id: "welcome",
                content: "Hi there! I'm PulseBot, your workplace culture assistant. How can I help you today?",
                sender: "bot",
                timestamp: new Date()
              }]} />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ask PulseBot About...</CardTitle>
            </CardHeader>
            <CardContent>
              <SuggestedTopics 
                onTopicClick={(topic) => console.log(`Selected topic: ${topic}`)}
                suggestions={[
                  "How can we build more trust?",
                  "What are leading indicators of engagement?",
                  "Best practices for onboarding",
                  "Ways to improve team communication",
                  "How to interpret PulseScore changes"
                ]}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>PulseBot Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Workplace culture best practices</li>
                <li>Trust-building strategies</li>
                <li>Engagement improvement tactics</li>
                <li>PulseScore interpretation</li>
                <li>Team wellbeing recommendations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <DemoNavigation 
        onNext={goToNextStage}
        onPrevious={goToPreviousStage}
      />
    </div>
  );
};

export default DemoPulseBot;
