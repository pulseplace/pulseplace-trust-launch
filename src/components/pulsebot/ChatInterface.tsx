
import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import MessageBubble from "./MessageBubble";
import { Message } from "./types";

interface ChatInterfaceProps {
  initialMessages?: Message[];
  onSendMessage?: (message: string) => void;
}

export const ChatInterface = ({ 
  initialMessages = [], 
  onSendMessage 
}: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Scroll to the bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current;
      scrollElement.scrollTop = scrollElement.scrollHeight;
    }
  }, [messages]);

  // Focus on input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSend = () => {
    if (input.trim() === "") return;

    // Create a user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    // Add message to state
    setMessages((prev) => [...prev, userMessage]);

    // Call external handler if provided
    if (onSendMessage) {
      onSendMessage(input);
    } else {
      // Default behavior: add a mock bot response
      setTimeout(() => {
        const botResponses = [
          "That's a great question about workplace culture!",
          "I recommend focusing on trust-building exercises with your team.",
          "Employee engagement can be improved through regular feedback sessions.",
          "Based on research, transparency is the foundation of trust in organizations.",
          "PulseScore trends show that companies with regular check-ins have 27% better retention."
        ];
        
        const botMessage: Message = {
          id: `bot-${Date.now()}`,
          content: botResponses[Math.floor(Math.random() * botResponses.length)],
          sender: "bot",
          timestamp: new Date(),
        };
        
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    }

    // Clear input
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="flex flex-col space-y-4">
          {messages.map((message) => (
            <MessageBubble
              key={typeof message.id === 'number' ? message.id.toString() : message.id}
              message={message}
            />
          ))}
        </div>
      </ScrollArea>
      
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask PulseBot a question..."
            className="flex-1"
          />
          <Button 
            onClick={handleSend} 
            size="icon"
            className="bg-pulse-blue hover:bg-pulse-blue/90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
