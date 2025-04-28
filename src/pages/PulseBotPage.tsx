import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import ChatInterface from "@/components/pulsebot/ChatInterface";
import SuggestedTopics from "@/components/pulsebot/SuggestedTopics";
import InsightsPanel from "@/components/pulsebot/InsightsPanel";
import { Message } from "@/components/pulsebot/types";

// Pre-defined prompts
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

const PulseBotPage = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;
    
    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      content: message.trim(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    const thinkingId = Date.now() + 1;
    setMessages(prev => [...prev, {
      id: thinkingId,
      type: "bot",
      content: "",
      isThinking: true,
    }]);
    
    try {
      const response = await generateResponse(userMessage.content);
      
      setMessages(prev => 
        prev.filter(m => m.id !== thinkingId).concat(response)
      );
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate a response. Please try again.",
        variant: "destructive",
      });
      
      setMessages(prev => prev.filter(m => m.id !== thinkingId));
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages(initialMessages);
    toast({
      title: "Chat cleared",
      description: "Your conversation has been reset.",
    });
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
          <ChatInterface
            messages={messages}
            isLoading={isLoading}
            onSendMessage={handleSendMessage}
            onClearChat={handleClearChat}
          />
        </div>
        
        <div className="space-y-6">
          <SuggestedTopics
            topics={suggestedPrompts}
            onTopicSelect={(topic) => handleSendMessage(topic)}
            isLoading={isLoading}
          />
          <InsightsPanel />
        </div>
      </div>
    </div>
  );
};

export default PulseBotPage;
