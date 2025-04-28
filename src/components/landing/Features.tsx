import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import FeatureCard from "./feature/FeatureCard";
import { features } from "./feature/featuresData";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [permanentlyActiveFeature, setPermanentlyActiveFeature] = useState<number | null>(null);
  const [aiHighlightActive, setAiHighlightActive] = useState(false);

  useEffect(() => {
    if (permanentlyActiveFeature !== null) return;

    const rotateInterval = setInterval(() => {
      setActiveFeature(prev => {
        if (prev === null || prev >= features.length - 1) return 0;
        return prev + 1;
      });
    }, 6000);
    
    return () => clearInterval(rotateInterval);
  }, [permanentlyActiveFeature]);

  useEffect(() => {
    const highlightInterval = setInterval(() => {
      setAiHighlightActive(true);
      setTimeout(() => setAiHighlightActive(false), 1500);
    }, 10000);
    
    return () => clearInterval(highlightInterval);
  }, []);

  const handleFeatureClick = (index: number) => {
    if (permanentlyActiveFeature === index) {
      setPermanentlyActiveFeature(null);
    } else {
      setPermanentlyActiveFeature(index);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const aiPulseEffect = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        repeat: 1,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-pulse-gray/10 relative overflow-hidden">
      {aiHighlightActive && (
        <motion.div 
          className="absolute inset-0 bg-pulse-blue/5 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 relative">
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 -mt-16 opacity-80"
            variants={aiPulseEffect}
            initial="hidden"
            animate={aiHighlightActive ? "visible" : "hidden"}
          >
            <div className="text-pulse-blue/50" style={{ fontSize: '120px' }}>
              <BrainCircuit />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold tracking-tighter sm:text-5xl text-pulse-navy mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Built for Trust, <span className="gradient-text">Designed for Proof</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-4">
              Transform your workplace culture from a hidden liability into a certified competitive advantage.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pulse-blue/10 rounded-full text-pulse-blue font-medium text-sm">
              <BrainCircuit className="h-4 w-4" />
              Powered by our AI culture engine
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              isActive={activeFeature === index}
              isPermanentlyActive={permanentlyActiveFeature === index}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(permanentlyActiveFeature)}
              onClick={() => handleFeatureClick(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
