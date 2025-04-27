
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, Info } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

// Sample chat history for demo
const initialMessages = [
  {
    id: 1,
    type: "bot",
    content: "Hello! I'm PulseBot, your workplace culture assistant. I can help you understand your organization's culture metrics, suggest improvements, and answer questions about building trust in your workplace. How can I assist you today?",
  },
];

const suggestedPrompts = [
  "How can we improve psychological safety?",
  "What metrics should we track for wellbeing?",
  "Best practices for recognition programs",
  "How to interpret our trust metrics",
];

interface Message {
  id: number;
  type: "user" | "bot";
  content: string;
}

const PulseBotPage = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: "user" as const,
      content: input,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate response time
    setTimeout(() => {
      // Generate bot response based on user input
      let botResponse = "";
      
      if (input.toLowerCase().includes("psychological safety")) {
        botResponse = "Psychological safety is crucial for team performance. Based on your metrics, consider implementing regular team retrospectives where all members can safely share feedback. Your current psychological safety score is 73, which is good but could be improved. Research shows teams with high psychological safety are more innovative and resilient.";
      } else if (input.toLowerCase().includes("wellbeing") || input.toLowerCase().includes("metrics")) {
        botResponse = "For wellbeing tracking, I recommend monitoring: 1) Work-life balance satisfaction, 2) Stress levels, 3) Burnout risk factors, and 4) Support resource utilization. Your current wellbeing score is 78, with work-life balance being the lowest factor at 72. Consider implementing no-meeting Fridays and clear communication about after-hours expectations.";
      } else if (input.toLowerCase().includes("recognition")) {
        botResponse = "Effective recognition programs combine formal and informal elements. Based on your culture assessment, peer-to-peer recognition would align well with your collaborative environment. Consider implementing a points-based system where team members can award points that accumulate for tangible rewards, alongside public recognition in team meetings.";
      } else if (input.toLowerCase().includes("trust")) {
        botResponse = "Your trust metrics show strong results in leadership transparency (85) but lower scores in cross-team collaboration (72). This pattern suggests teams work well internally but may operate in silos. Consider creating cross-functional projects and shared objectives to build inter-team trust. Regular all-hands meetings with open Q&A have been proven effective for similar organizations.";
      } else {
        botResponse = "That's an interesting question about workplace culture. Based on research and best practices, organizations that emphasize transparent communication and regular feedback tend to build stronger trust. Would you like me to analyze specific aspects of this topic based on your company's PulseScore data?";
      }
      
      const newBotMessage = {
        id: messages.length + 2,
        type: "bot" as const,
        content: botResponse,
      };
      
      setMessages((prev) => [...prev, newBotMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">PulseBot</h1>
        <p className="text-gray-500">
          Your AI workplace culture assistant powered by PulsePlace.ai
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col h-[calc(100vh-220px)]">
          <Card className="flex-1 flex flex-col">
            <CardHeader className="border-b">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2 bg-pulse-blue">
                  <AvatarFallback>PB</AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">
                  PulseBot
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="inline-block ml-2 h-4 w-4 text-gray-400 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>PulseBot uses your organization's culture data to provide personalized insights and recommendations.</p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0">
              <ScrollArea className="h-full p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.type === "user"
                            ? "bg-pulse-blue text-white"
                            : "bg-gray-100"
                        }`}
                      >
                        {message.type === "bot" && (
                          <div className="flex items-center mb-1">
                            <Bot className="h-4 w-4 mr-1" />
                            <span className="text-xs font-medium">PulseBot</span>
                          </div>
                        )}
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-lg p-3 bg-gray-100">
                        <div className="flex items-center mb-1">
                          <Bot className="h-4 w-4 mr-1" />
                          <span className="text-xs font-medium">PulseBot</span>
                        </div>
                        <div className="flex space-x-1">
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask PulseBot about workplace culture..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSend} 
                  disabled={!input.trim() || isLoading}
                  className="bg-pulse-blue hover:bg-pulse-blue/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Suggested Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {suggestedPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left"
                  onClick={() => handlePromptClick(prompt)}
                >
                  {prompt}
                </Button>
              ))}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Your Culture Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Trust Index</span>
                  <span className="text-sm font-medium">82</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-pulse-blue w-[82%] rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Wellbeing Score</span>
                  <span className="text-sm font-medium">78</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-pulse-purple w-[78%] rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Communication</span>
                  <span className="text-sm font-medium">74</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-pulse-teal w-[74%] rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PulseBotPage;
