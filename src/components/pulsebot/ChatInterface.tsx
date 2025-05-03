
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import MessageBubble from "./MessageBubble";
import { defaultSuggestions } from "./SuggestedTopics";

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatInterfaceProps {
  initialMessages?: Message[];
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ initialMessages = [] }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!input.trim()) return;
    
    // Create unique ID for the message
    const userMessageId = `msg_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    
    // Add user message to chat
    const userMessage: Message = {
      id: userMessageId,
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateResponse(input);
      const botMessageId = `msg_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      
      const botMessage: Message = {
        id: botMessageId,
        content: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  // Simple response generator
  const generateResponse = (query: string): string => {
    // Simple keyword matching
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('trust') || lowerQuery.includes('trustworthy')) {
      return "Building trust requires consistency, transparency, and follow-through. Regular check-ins and honoring commitments are foundational elements of a high-trust workplace.";
    } else if (lowerQuery.includes('metric') || lowerQuery.includes('measure') || lowerQuery.includes('track')) {
      return "Key engagement metrics include survey participation rates, retention metrics, trust scores, and emotional wellbeing indicators. The PulseScore provides a weighted average across these dimensions.";
    } else if (lowerQuery.includes('wellbeing') || lowerQuery.includes('wellness')) {
      return "Emotional wellbeing can be improved through flexible work arrangements, mental health resources, regular check-ins, and creating psychological safety for all team members.";
    } else if (lowerQuery.includes('celebrate') || lowerQuery.includes('recognition')) {
      return "Celebrating team success can be done through public recognition, team events, personalized notes, achievement badges, and making space for informal celebrations.";
    } else if (lowerQuery.includes('pulse') || lowerQuery.includes('score') || lowerQuery.includes('trend')) {
      return "PulseScore trends reveal patterns in workplace culture over time. Look for correlations with business events, leadership changes, or new initiatives to understand what impacts your culture.";
    } else {
      return "Thanks for your question. As PulseBot, I'm here to help with workplace culture, trust building, and engagement strategies. Could you provide more details about what specific aspect of workplace dynamics you're interested in?";
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center mt-8 space-y-4">
            <h2 className="text-xl font-bold text-pulse-blue">Welcome to PulseBot Assistant!</h2>
            <p className="text-gray-500">
              I can help answer questions about workplace culture, trust metrics, and engagement strategies.
            </p>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Try asking about:</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {defaultSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message.content}
                isUser={message.sender === 'user'}
                timestamp={message.timestamp}
              />
            ))}
            
            {isTyping && (
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="text-xs">PulseBot is typing...</span>
              </div>
            )}
          </>
        )}
        <div ref={endOfMessagesRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="p-4 border-t flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
        />
        <Button type="submit" size="icon" disabled={!input.trim() || isTyping}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default ChatInterface;
