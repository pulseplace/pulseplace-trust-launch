
import { useState, useEffect } from "react";
import { Message } from "@/components/pulsebot/types";
import { generateDemoResponse } from "../utils/responseGenerator";
import { useDemo } from "@/contexts/DemoContext";

export const usePulseBotChat = () => {
  const { organizationName, pulseScore, pulseScoreDetails } = useDemo();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      content: `Hello! I'm PulseBot, your AI workplace culture assistant. I can help with questions about ${organizationName}'s culture metrics, trust dynamics, and engagement strategies. How can I assist you today?`,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Update initial message if organization name changes
  useEffect(() => {
    setMessages([
      {
        id: 1,
        type: "bot",
        content: `Hello! I'm PulseBot, your AI workplace culture assistant. I can help with questions about ${organizationName}'s culture metrics, trust dynamics, and engagement strategies. How can I assist you today?`,
      },
    ]);
  }, [organizationName]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content,
    };
    setMessages((prev) => [...prev, userMessage]);
    
    setIsLoading(true);
    const thinkingMessage: Message = {
      id: messages.length + 2,
      type: "bot",
      content: "",
      isThinking: true,
    };
    setMessages((prev) => [...prev, thinkingMessage]);

    // Add context from demo data
    const contextEnriched = content + ` (Organization: ${organizationName}, PulseScore: ${pulseScore})`;

    // Simulate bot response after delay
    setTimeout(() => {
      setMessages((prev) => prev.filter(m => !m.isThinking));
      const response = generateDemoResponse(contextEnriched);
      const botResponse: Message = {
        id: messages.length + 2,
        type: "bot",
        content: response.content,
        alertLevel: response.alertLevel,
        context: response.context
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500 + Math.random() * 1000); // Variable timing for realism
  };

  const handleClearChat = () => {
    setMessages([{
      id: 1,
      type: "bot",
      content: `Hello! I'm PulseBot, your AI workplace culture assistant. I can help with questions about ${organizationName}'s culture metrics, trust dynamics, and engagement strategies. How can I assist you today?`,
    }]);
  };

  return {
    messages,
    isLoading,
    handleSendMessage,
    handleClearChat
  };
};
