
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Send, Bot, Lightbulb } from "lucide-react";
import MessageBubble from "./MessageBubble";
import SuggestedTopics from "./SuggestedTopics";
import { Message } from "./types";

interface ChatInterfaceProps {
  messages: Message[];
  isLoading: boolean;
  onSendMessage: (content: string) => Promise<void>;
  onClearChat: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  messages,
  isLoading,
  onSendMessage,
  onClearChat,
}) => {
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showSuggestions, setShowSuggestions] = useState(messages.length <= 1);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    
    onSendMessage(inputValue);
    setInputValue("");
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSendMessage(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="flex flex-col h-full bg-white border rounded-lg overflow-hidden">
      {/* Chat header */}
      <div className="p-4 border-b bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-pulse-blue/10 p-2 rounded-full">
              <Bot className="h-5 w-5 text-pulse-blue" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">PulseBot</h2>
              <p className="text-xs text-gray-500">AI Workplace Culture Assistant</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClearChat}>
            Clear Chat
          </Button>
        </div>
      </div>

      {/* Chat messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-6">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          
          {isLoading && (
            <MessageBubble
              message={{
                id: "loading",
                type: "bot",
                content: "",
                isThinking: true,
              }}
            />
          )}
          
          {showSuggestions && messages.length <= 2 && (
            <div className="animate-fadeIn">
              <div className="flex items-center space-x-2 mb-4 text-gray-500">
                <Lightbulb className="h-4 w-4" />
                <span className="text-sm">Try asking about:</span>
              </div>
              <SuggestedTopics onTopicSelect={handleSuggestionClick} />
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <Separator />

      {/* Input area */}
      <form onSubmit={handleSubmit} className="p-4 bg-gray-50">
        <div className="flex space-x-2">
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about trust metrics, culture improvement..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || inputValue.trim() === ""}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;
