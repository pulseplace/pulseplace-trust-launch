
import { useState } from "react";
import { Message } from "@/components/pulsebot/types";
import { generateDemoResponse } from "../utils/responseGenerator";

export const usePulseBotChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      content: "Hello! I'm PulseBot, your AI workplace culture assistant. How can I help you understand and improve your organization's trust dynamics today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

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

    // Simulate bot response after delay
    setTimeout(() => {
      setMessages((prev) => prev.filter(m => !m.isThinking));
      const response = generateDemoResponse(content);
      const botResponse: Message = {
        id: messages.length + 2,
        type: "bot",
        content: response.content,
        alertLevel: response.alertLevel,
        context: response.context
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 2000);
  };

  const handleClearChat = () => {
    setMessages([{
      id: 1,
      type: "bot",
      content: "Hello! I'm PulseBot, your AI workplace culture assistant. How can I help you understand and improve your organization's trust dynamics today?",
    }]);
  };

  return {
    messages,
    isLoading,
    handleSendMessage,
    handleClearChat
  };
};
