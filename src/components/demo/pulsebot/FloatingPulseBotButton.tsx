
import React from "react";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { motion } from "framer-motion";

interface FloatingPulseBotButtonProps {
  onClick: () => void;
}

export const FloatingPulseBotButton: React.FC<FloatingPulseBotButtonProps> = ({
  onClick,
}) => {
  return (
    <motion.div
      className="fixed bottom-24 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        onClick={onClick}
        size="lg"
        className="rounded-full h-14 w-14 bg-pulse-blue hover:bg-pulse-blue/90 shadow-lg"
        aria-label="Chat with PulseBot"
      >
        <Bot className="h-6 w-6" />
      </Button>
      <div className="bg-white px-3 py-1 rounded-md shadow-md mt-2 text-xs font-medium text-center">
        Ask PulseBot
      </div>
    </motion.div>
  );
};
