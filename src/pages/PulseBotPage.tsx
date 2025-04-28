
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, Info, AlertTriangle, Sparkles, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";

// Message types for better type safety
type MessageRole = "user" | "bot" | "system";

interface Message {
  id: number;
  type: MessageRole;
  content: string;
  isThinking?: boolean; // For loading state
  context?: string; // Additional context like data source or confidence level
  alertLevel?: "none" | "info" | "warning" | "critical"; // For highlighting important insights
}

// Initial welcome message
const initialMessages: Message[] = [
  {
    id: 1,
    type: "system",
    content: "Welcome to PulseBot Assistant",
  },
  {
    id: 2,
    type: "bot",
    content: "Hi! I'm your PulseBot AI assistant focused on workplace culture. I can help you understand your PulseScore metrics, interpret trust trends, or provide evidence-based recommendations for improving workplace culture. How can I assist you today?",
  }
];

// Pre-defined prompts with culture-focused questions
const suggestedPrompts = [
  "How can we improve psychological safety?",
  "What metrics should we track for wellbeing?",
  "Analyze our trust trends from last quarter",
  "Recommendations to increase engagement",
  "How do our culture metrics compare to industry standards?",
  "What actions would most improve our PulseScore?",
];

// Off-topic detection keywords
const offTopicKeywords = [
  "crypto", "bitcoin", "investment", "lottery", "gambling", 
  "dating", "politics", "religion", "illegal", "hack", 
  "password", "credentials", "confidential"
];

const PulseBotPage = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Check if a message might be off-topic
  const isOffTopic = (message: string): boolean => {
    const lowercaseMsg = message.toLowerCase();
    return offTopicKeywords.some(keyword => lowercaseMsg.includes(keyword));
  };

  // Generate a context-aware response based on input
  const generateResponse = (userInput: string): Promise<Message> => {
    return new Promise((resolve) => {
      // Check for off-topic content
      if (isOffTopic(userInput)) {
        setTimeout(() => {
          resolve({
            id: Date.now(),
            type: "bot",
            content: "I'm designed to help with workplace culture questions. This topic appears to be outside my area of expertise. Could we focus on your organization's trust metrics, employee engagement, or culture initiatives instead?",
            alertLevel: "warning",
          });
        }, 1000);
        return;
      }

      // Context-aware responses based on keywords
      const lowercaseInput = userInput.toLowerCase();
      
      if (lowercaseInput.includes("psychological safety")) {
        setTimeout(() => {
          resolve({
            id: Date.now(),
            type: "bot",
            content: "Based on your PulseScore data, your psychological safety rating is 73/100, which is 7 points above industry average but 5 points below top-performing organizations.\n\nTo improve psychological safety, consider:\n\n1. Structured retrospectives where feedback is welcomed without attribution\n2. Leadership modeling vulnerability by sharing mistakes and learnings\n3. Creating clear communication guidelines that promote questioning assumptions\n\nThe most successful action among similar organizations has been implementing 'learning from failure' sessions, which typically raises psychological safety scores by 9-12 points within two quarters.",
            context: "Analysis based on 63 data points from your Q1-Q2 surveys",
          });
        }, 2000);
      } else if (lowercaseInput.includes("wellbeing") || lowercaseInput.includes("metrics")) {
        setTimeout(() => {
          resolve({
            id: Date.now(),
            type: "bot",
            content: "Your organization should track these key wellbeing metrics:\n\n1. Work-life harmony (current score: 72/100)\n2. Stress resilience (current score: 68/100)\n3. Belonging (current score: 85/100)\n4. Growth opportunities (current score: 79/100)\n5. Psychological safety (current score: 73/100)\n\nYour weakest dimension is stress resilience, which correlates strongly with your retention metrics. Organizations with similar profiles have successfully improved this by implementing meeting-free days and clearer work prioritization frameworks.\n\nWould you like more specific recommendations for improving stress resilience?",
            context: "Based on PulseScore algorithm and industry benchmarks",
          });
        }, 2500);
      } else if (lowercaseInput.includes("recognition") || lowercaseInput.includes("reward")) {
        setTimeout(() => {
          resolve({
            id: Date.now(),
            type: "bot",
            content: "Your recognition programs show a 68% effectiveness rating, with peer-to-peer recognition being particularly successful (82% positive impact).\n\nGaps in your recognition framework:\n\n1. Non-management contributions are recognized 37% less frequently than management\n2. Technical achievements receive less visibility than customer-facing wins\n3. Remote employees receive recognition 42% less often\n\nRecommendation: Implement a structured recognition system with equal weighting across: technical excellence, customer impact, culture contributions, and operational improvements. This approach has shown an average 14% improvement in engagement scores for similar organizations.",
            context: "Analysis based on 12-month recognition data and survey feedback",
          });
        }, 2200);
      } else if (lowercaseInput.includes("trust") || lowercaseInput.includes("transparency")) {
        setTimeout(() => {
          resolve({
            id: Date.now(),
            type: "bot",
            content: "Your trust metrics show strong leadership transparency (85/100) but lower cross-team collaboration trust (72/100).\n\nTrust trend analysis shows a positive trajectory (+7 points over 6 months) but with significant variation across departments:\n\n• Engineering: 81/100 (↑5)\n• Marketing: 76/100 (↑9)\n• Operations: 69/100 (↑2)\n• Sales: 85/100 (↑12)\n\nThe data suggests silos are forming between Operations and other departments. Organizations with similar patterns have successfully addressed this through structured cross-functional projects with shared OKRs and regular team rotations.",
            context: "Based on departmental trend analysis and pattern recognition",
          });
        }, 2300);
      } else if (lowercaseInput.includes("engagement") || lowercaseInput.includes("improve")) {
        setTimeout(() => {
          resolve({
            id: Date.now(),
            type: "bot",
            content: "To increase engagement based on your specific PulseScore data, focus on these high-impact areas:\n\n1. Role clarity (currently your lowest sub-dimension at 65/100)\n2. Growth opportunities (showing downward trend over last 2 quarters)\n3. Recognition frequency (particularly for technical and operational staff)\n\nAI recommendation with highest confidence (92%):\nImplement quarterly career development conversations with standardized framework addressing skills development, role evolution, and impact visibility.\n\nThis approach has shown a 9-13 point increase in engagement scores for organizations with similar profiles within 6-9 months.",
            alertLevel: "info",
            context: "High-confidence recommendation based on 1,200+ similar organizations",
          });
        }, 2100);
      } else if (lowercaseInput.includes("comparison") || lowercaseInput.includes("benchmark") || lowercaseInput.includes("industry")) {
        setTimeout(() => {
          resolve({
            id: Date.now(),
            type: "bot",
            content: "Industry Benchmark Comparison (Technology Sector, 100-500 employees):\n\nYour overall PulseScore: 78/100 (Industry avg: 72/100)\n\nStrengths (>5 points above industry):\n• Leadership transparency: 85/100 (Industry: 74/100)\n• Innovation culture: 83/100 (Industry: 76/100)\n• Learning opportunities: 81/100 (Industry: 73/100)\n\nOpportunities (<3 points above industry):\n• Work-life harmony: 72/100 (Industry: 69/100)\n• Role clarity: 65/100 (Industry: 71/100) ⚠️ Below industry average\n• Recognition: 70/100 (Industry: 68/100)\n\nYour overall culture health ranks in the top 28% of similar organizations.",
            context: "Based on anonymized data from 320 similar organizations",
          });
        }, 2400);
      } else if (lowercaseInput.includes("pulsescore") || lowercaseInput.includes("score")) {
        setTimeout(() => {
          resolve({
            id: Date.now(),
            type: "bot",
            content: "Your current PulseScore is 78/100, calculated from:\n\n• Trust Dynamics: 32/40 points (weight: 40%)\n• Engagement Stability: 23/30 points (weight: 30%)\n• Emotional Wellbeing: 23/30 points (weight: 30%)\n\nMost impactful actions to improve your score:\n\n1. Address role clarity issues in Operations and Engineering (potential +3 points)\n2. Enhance cross-team collaboration structures (potential +2.5 points)\n3. Implement stress management initiatives (potential +2 points)\n\nWith these targeted improvements, you could reach certification threshold (85/100) within 2 quarters based on current trajectory.",
            alertLevel: "info",
            context: "AI analysis with 89% prediction confidence",
          });
        }, 2700);
      } else {
        // Generic response for other workplace culture questions
        setTimeout(() => {
          resolve({
            id: Date.now(),
            type: "bot",
            content: "That's an interesting question about workplace culture. Based on your organization's PulseScore data, I notice several relevant patterns that might help:\n\n• Your trust metrics show strength in leadership transparency but opportunity in cross-team dynamics\n• Employee feedback highlights a desire for more structured growth conversations\n• Your recognition programs are effective but inconsistently applied\n\nCould you provide more specific details about which aspect of workplace culture you're most interested in improving? I can then provide targeted recommendations based on your organization's unique data and industry benchmarks.",
            context: "Based on aggregated PulseScore data",
          });
        }, 1800);
      }
    });
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      content: input.trim(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Add thinking indicator
    const thinkingId = Date.now() + 1;
    setMessages(prev => [...prev, {
      id: thinkingId,
      type: "bot",
      content: "",
      isThinking: true,
    }]);
    
    // Generate response
    try {
      const response = await generateResponse(userMessage.content);
      
      // Replace thinking indicator with real response
      setMessages(prev => 
        prev.filter(m => m.id !== thinkingId).concat(response)
      );
    } catch (error) {
      // Handle error
      toast({
        title: "Error",
        description: "Failed to generate a response. Please try again.",
        variant: "destructive",
      });
      
      // Remove thinking indicator
      setMessages(prev => prev.filter(m => m.id !== thinkingId));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && !isLoading) {
      e.preventDefault();
      handleSend();
    }
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  const clearChat = () => {
    setMessages(initialMessages);
    toast({
      title: "Chat cleared",
      description: "Your conversation has been reset.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">PulseBot</h1>
          <p className="text-gray-500">
            Your AI workplace culture assistant powered by PulsePlace.ai
          </p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={clearChat}
          className="flex items-center gap-1"
        >
          <X className="h-4 w-4" />
          Clear Chat
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col h-[calc(100vh-220px)]">
          <Card className="flex-1 flex flex-col">
            <CardHeader className="border-b">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2 bg-pulse-blue">
                  <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">
                  PulseBot
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="inline-block ml-2 h-4 w-4 text-gray-400 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>PulseBot analyzes your organization's culture data to provide personalized insights and evidence-based recommendations.</p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0">
              <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message) => {
                    if (message.type === "system") {
                      return (
                        <div key={message.id} className="text-center my-4">
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {message.content}
                          </span>
                        </div>
                      );
                    }
                    
                    return (
                      <div
                        key={message.id}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-lg p-3 ${
                            message.type === "user"
                              ? "bg-pulse-blue text-white"
                              : message.alertLevel === "warning" 
                                ? "bg-amber-50 border border-amber-200" 
                                : message.alertLevel === "info"
                                  ? "bg-blue-50 border border-blue-200"
                                  : message.alertLevel === "critical"
                                    ? "bg-red-50 border border-red-200"
                                    : "bg-gray-100"
                          }`}
                        >
                          {message.type === "bot" && (
                            <div className="flex items-center mb-1">
                              {message.isThinking ? (
                                <>
                                  <Bot className="h-4 w-4 mr-1" />
                                  <span className="text-xs font-medium">PulseBot is thinking</span>
                                </>
                              ) : message.alertLevel === "warning" ? (
                                <>
                                  <AlertTriangle className="h-4 w-4 mr-1 text-amber-500" />
                                  <span className="text-xs font-medium text-amber-700">PulseBot Alert</span>
                                </>
                              ) : message.alertLevel === "info" ? (
                                <>
                                  <Sparkles className="h-4 w-4 mr-1 text-blue-500" />
                                  <span className="text-xs font-medium text-blue-700">PulseBot Insight</span>
                                </>
                              ) : (
                                <>
                                  <Bot className="h-4 w-4 mr-1" />
                                  <span className="text-xs font-medium">PulseBot</span>
                                </>
                              )}
                            </div>
                          )}
                          
                          {message.isThinking ? (
                            <div className="flex space-x-1">
                              <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                              <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                              <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                            </div>
                          ) : (
                            <div>
                              <p className="text-sm whitespace-pre-line">{message.content}</p>
                              {message.context && (
                                <p className="text-xs mt-2 text-gray-500 italic">
                                  {message.context}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            </CardContent>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask about workplace culture, trust metrics, or engagement strategies..."
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
              <CardTitle>Suggested Topics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {suggestedPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left"
                  onClick={() => handlePromptClick(prompt)}
                  disabled={isLoading}
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
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Trust Index</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">82</span>
                    <span className="text-xs text-green-600 ml-1">↑3</span>
                  </div>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-pulse-blue w-[82%] rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Wellbeing Score</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">78</span>
                    <span className="text-xs text-green-600 ml-1">↑5</span>
                  </div>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[78%] rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Recognition</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">70</span>
                    <span className="text-xs text-red-600 ml-1">↓2</span>
                  </div>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[70%] rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Growth Opportunities</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">81</span>
                    <span className="text-xs text-green-600 ml-1">↑4</span>
                  </div>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[81%] rounded-full"></div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 text-center mt-2">
                Updated 2 days ago
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PulseBotPage;
