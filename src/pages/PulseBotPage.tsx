
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChatInterface } from "@/components/pulsebot/ChatInterface";
import { SuggestedTopics } from "@/components/pulsebot/SuggestedTopics";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

const PulseBotPage = () => {
  const { user, isLoading } = useAuth();
  const [messages, setMessages] = useState([{
    id: "welcome-message",
    content: "Hi there! I'm PulseBot, your workplace culture assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date()
  }]);

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

  // Handle topic selection
  const handleTopicClick = (topic: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      content: topic,
      sender: "user",
      timestamp: new Date()
    }]);
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

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
              <ChatInterface initialMessages={messages} />
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ask About</CardTitle>
            </CardHeader>
            <CardContent>
              <SuggestedTopics onTopicClick={handleTopicClick} />
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
