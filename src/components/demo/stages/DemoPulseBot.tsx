
import React from "react";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import ChatInterface from "@/components/pulsebot/ChatInterface";
import SuggestedTopics from "@/components/pulsebot/SuggestedTopics";
import InsightsPanel from "@/components/pulsebot/InsightsPanel";
import DemoNavigation from "../DemoNavigation";
import { usePulseBotChat } from "../pulsebot/hooks/usePulseBotChat";
import { suggestedTopics } from "../pulsebot/data/suggestedTopics";

const DemoPulseBot = () => {
  const { messages, isLoading, handleSendMessage, handleClearChat } = usePulseBotChat();

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
