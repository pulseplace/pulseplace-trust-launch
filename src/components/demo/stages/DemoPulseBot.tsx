
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { Message } from "@/components/pulsebot/types";
import ChatInterface from "@/components/pulsebot/ChatInterface";
import SuggestedTopics from "@/components/pulsebot/SuggestedTopics";
import InsightsPanel from "@/components/pulsebot/InsightsPanel";
import DemoNavigation from "../DemoNavigation";

const DemoPulseBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      content: "Hello! I'm PulseBot, your AI workplace culture assistant. How can I help you understand and improve your organization's trust dynamics today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const suggestedTopics = [
    "How can we improve psychological safety?",
    "What are our trust metrics telling us?",
    "Tips for building transparent leadership",
    "Analyzing team engagement patterns",
    "Best practices for culture surveys"
  ];

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content,
    };
    setMessages((prev) => [...prev, userMessage]);
    
    // Show bot typing
    setIsLoading(true);
    const thinkingMessage: Message = {
      id: messages.length + 2,
      type: "bot",
      content: "",
      isThinking: true,
    };
    setMessages((prev) => [...prev, thinkingMessage]);

    // Simulate bot response after delay
    setTimeout(() => {
      setMessages((prev) => prev.filter(m => !m.isThinking));
      const botResponse: Message = {
        id: messages.length + 2,
        type: "bot",
        content: generateDemoResponse(content),
        alertLevel: detectAlertLevel(content),
        context: "Based on analysis of 10,000+ similar organizations"
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 2000);
  };

  const generateDemoResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    if (lowercaseMessage.includes("psychological safety")) {
      return "Based on our analysis, psychological safety can be improved through:\n\n1. Regular anonymous feedback channels\n2. 'Learning from failure' sessions\n3. Active celebration of diverse viewpoints\n4. Clear escalation paths for concerns\n\nWould you like specific implementation strategies for any of these areas?";
    }
    
    if (lowercaseMessage.includes("trust metrics")) {
      return "Your organization's trust metrics show:\n\n- Leadership transparency: 78%\n- Peer-to-peer trust: 82%\n- Information sharing: 71%\n- Decision-making clarity: 75%\n\nThe most significant opportunity for improvement is in information sharing practices. Would you like recommendations for improvement?";
    }
    
    if (lowercaseMessage.includes("transparent leadership")) {
      return "Here are key practices for transparent leadership:\n\n1. Regular town halls with open Q&A\n2. Shared OKRs and progress tracking\n3. Clear communication of strategic decisions\n4. Consistent feedback loops\n\nI notice successful organizations implement these gradually. Would you like a step-by-step implementation plan?";
    }

    return "I understand you're interested in improving workplace culture. Could you tell me more specifically what aspects you'd like to focus on? For example:\n\n- Trust building\n- Employee engagement\n- Leadership development\n- Team communication";
  };

  const detectAlertLevel = (message: string): "none" | "info" | "warning" | "critical" => {
    const lowercaseMessage = message.toLowerCase();
    
    if (lowercaseMessage.includes("problem") || 
        lowercaseMessage.includes("issue") || 
        lowercaseMessage.includes("concerned")) {
      return "warning";
    }
    
    if (lowercaseMessage.includes("improve") || 
        lowercaseMessage.includes("suggest") || 
        lowercaseMessage.includes("how")) {
      return "info";
    }
    
    return "none";
  };

  const handleClearChat = () => {
    setMessages([{
      id: 1,
      type: "bot",
      content: "Hello! I'm PulseBot, your AI workplace culture assistant. How can I help you understand and improve your organization's trust dynamics today?",
    }]);
  };

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-pulse-blue/10 rounded-full mb-4">
            <Bot className="h-10 w-10 text-pulse-blue" />
          </div>
          <h1 className="text-3xl font-bold text-pulse-navy mb-2">
            Meet PulseBot: Your AI Culture Guide
          </h1>
          <p className="text-lg text-gray-600">
            Experience how AI can help analyze and improve workplace culture
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ChatInterface
                messages={messages}
                isLoading={isLoading}
                onSendMessage={handleSendMessage}
                onClearChat={handleClearChat}
              />
            </motion.div>
          </div>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <SuggestedTopics
                topics={suggestedTopics}
                onTopicSelect={handleSendMessage}
                isLoading={isLoading}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <InsightsPanel />
            </motion.div>
          </div>
        </div>
      </div>
      
      <DemoNavigation nextLabel="View Results" />
    </div>
  );
};

export default DemoPulseBot;
