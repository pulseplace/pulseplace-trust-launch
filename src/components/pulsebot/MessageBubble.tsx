
import React from "react";
import { Bot, AlertTriangle, Sparkles } from "lucide-react";
import { Message } from "./types";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  if (message.type === "system") {
    return (
      <div className="text-center my-4">
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          {message.content}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
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
};

export default MessageBubble;

