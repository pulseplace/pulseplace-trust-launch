
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChatInterface } from "@/components/pulsebot/ChatInterface";
import { SuggestedTopics } from "@/components/pulsebot/SuggestedTopics";

const PulseBotPage = () => {
  // Sample insights data
  const insights = [
    {
      title: "Trust Factor",
      content: "Recent surveys indicate a 12% increase in trust metrics across teams after implementing transparent communication practices."
    },
    {
      title: "Engagement Patterns",
      content: "Team engagement scores show higher correlation with direct manager interactions than with company-wide initiatives."
    },
    {
      title: "Wellbeing Analysis",
      content: "Flexible work arrangements have led to a 23% improvement in reported work-life balance satisfaction."
    }
  ];

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold mb-6">PulseBot Assistant</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="h-[600px] overflow-hidden">
            <CardHeader className="bg-pulse-blue text-white">
              <CardTitle>Chat with PulseBot</CardTitle>
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
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ask About</CardTitle>
            </CardHeader>
            <CardContent>
              <SuggestedTopics onTopicClick={(topic) => console.log("Selected:", topic)} />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Latest Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights.map((insight, i) => (
                  <div key={i} className="border-l-4 border-pulse-blue pl-3">
                    <h3 className="font-medium">{insight.title}</h3>
                    <p className="text-sm text-gray-600">{insight.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PulseBotPage;
