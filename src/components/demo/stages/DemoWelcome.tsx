
import React from "react";
import { motion } from "framer-motion";
import { Bot, ArrowRight, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDemo, DemoStage } from "@/contexts/DemoContext";
import DemoNavigation from "../DemoNavigation";

const DemoWelcome = () => {
  const { nextStage } = useDemo();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Experience how our AI analyzes workplace culture data to generate actionable insights."
    },
    {
      icon: Bot,
      title: "Interactive AI Assistant",
      description: "Meet PulseBot, your AI culture guide that helps navigate trust challenges."
    },
    {
      icon: Sparkles,
      title: "Automatic Certification",
      description: "See how AI evaluates and generates trusted workplace culture certification."
    }
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-block p-3 bg-pulse-blue/10 rounded-full mb-4">
            <Bot className="h-10 w-10 text-pulse-blue" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-pulse-navy mb-4">
            Welcome to the AI-Powered <br />PulsePlace Experience
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            In this interactive demo, you'll experience how our AI transforms workplace culture data into actionable insights and verified certification.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
            >
              <div className="inline-flex items-center justify-center bg-pulse-blue/10 rounded-full p-3 mb-4">
                <feature.icon className="h-6 w-6 text-pulse-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Button 
            onClick={nextStage}
            size="lg"
            className="bg-pulse-blue hover:bg-pulse-blue/90"
          >
            Start the Experience
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            This is a guided demo that simulates the complete PulsePlace.ai experience
          </p>
        </motion.div>
      </div>
      
      <DemoNavigation 
        showBackButton={false} 
        nextLabel="Start the Experience"
      />
    </div>
  );
};

export default DemoWelcome;
