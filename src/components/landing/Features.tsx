
import React, { useState } from "react";
import { Award, BarChartHorizontal, Database, MessageSquare, Badge, Shield, Lock, ChevronRight, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Shield,
      title: "PulseScore™",
      subtitle: "Explainable AI Scoring",
      description: "Transparent, audit-ready workplace trust scoring combining emotion, engagement, and wellbeing dimensions.",
      extendedDescription: "Our proprietary PulseScore algorithm analyzes 40+ workplace trust factors and provides a transparent breakdown of your organization's cultural health. Unlike black-box solutions, every score element can be traced back to specific feedback and metrics.",
      demoTitle: "See how PulseScore works",
      demoDescription: "Watch how PulseScore breaks down complex workplace dynamics into actionable insights that leadership can immediately implement.",
      color: "from-pulse-blue/20 to-pulse-blue/10",
      hoverColor: "group-hover:bg-pulse-blue/20",
      iconColor: "text-pulse-blue",
      demo: {
        type: "image",
        src: "/lovable-uploads/b55898f3-2485-4c4f-82c3-b6b92b4f34a5.png",
        caption: "PulseScore dashboard showing trust metrics analysis"
      }
    },
    {
      icon: Award,
      title: "Pulse Certified™",
      subtitle: "Accreditation System",
      description: "Earn a globally recognized culture trust certification — not just another engagement score.",
      extendedDescription: "Pulse Certified™ is the first workplace accreditation focused specifically on trust dynamics and emotional wellbeing. Our certification process involves comprehensive assessment across multiple dimensions with clear renewal criteria and improvement pathways.",
      demoTitle: "Certified Trust Leadership",
      demoDescription: "Explore how leading organizations use their Pulse Certification to attract top talent and build stakeholder confidence.",
      color: "from-[#FEC6A1]/20 to-[#FEC6A1]/10",
      hoverColor: "group-hover:bg-[#FEC6A1]/20",
      iconColor: "text-[#F97316]",
      demo: {
        type: "image",
        src: "/lovable-uploads/b55898f3-2485-4c4f-82c3-b6b92b4f34a5.png",
        caption: "Pulse Certified badge and certification dashboard"
      }
    },
    {
      icon: BarChartHorizontal,
      title: "Real-Time Insights",
      subtitle: "Dashboard",
      description: "Instant analytics on trust drivers, risk signals, engagement health — no need to wait months.",
      extendedDescription: "Traditional employee surveys provide delayed snapshots of workplace health. Our continuous listening approach with real-time visualization allows leadership to identify emerging issues before they impact performance or retention.",
      demoTitle: "Dynamic Trust Dashboard",
      demoDescription: "Interact with a live dashboard showing how trends emerge and how quick responses can prevent cultural deterioration.",
      color: "from-[#E5DEFF]/20 to-[#E5DEFF]/10",
      hoverColor: "group-hover:bg-[#E5DEFF]/20",
      iconColor: "text-[#8B5CF6]",
      demo: {
        type: "image",
        src: "/lovable-uploads/b55898f3-2485-4c4f-82c3-b6b92b4f34a5.png",
        caption: "Real-time insights dashboard with trend indicators"
      }
    },
    {
      icon: Database,
      title: "Global Benchmarking",
      subtitle: "Index Comparison",
      description: "Compare your trust and culture health against global standards, peers, and internal history.",
      extendedDescription: "Contextualize your culture metrics against industry peers, regional averages, and organizational size benchmarks. Track progress over time with historical trend analysis and set realistic improvement targets based on comparable organizations.",
      demoTitle: "Benchmark Comparison Tool",
      demoDescription: "See how your organization compares across multiple dimensions and identify specific areas for focused improvement.",
      color: "from-[#D3E4FD]/20 to-[#D3E4FD]/10",
      hoverColor: "group-hover:bg-[#D3E4FD]/20",
      iconColor: "text-[#0EA5E9]",
      demo: {
        type: "image",
        src: "/lovable-uploads/b55898f3-2485-4c4f-82c3-b6b92b4f34a5.png",
        caption: "Industry comparison chart with benchmark analysis"
      }
    },
    {
      icon: MessageSquare,
      title: "PulseBot",
      subtitle: "AI Culture Assistant",
      description: "Real-time pulse feedback, culture Q&A, and next-step coaching, tuned to your org's tone.",
      extendedDescription: "PulseBot leverages advanced natural language processing to understand the unique cultural context of your organization. It provides personalized coaching based on your specific culture challenges and allows team members to ask sensitive questions they might not feel comfortable raising directly.",
      demoTitle: "Meet PulseBot",
      demoDescription: "Experience a conversation with PulseBot and see how it can help identify blind spots in your culture strategy.",
      color: "from-[#FEF7CD]/20 to-[#FEF7CD]/10",
      hoverColor: "group-hover:bg-[#FEF7CD]/20",
      iconColor: "text-[#EAB308]",
      demo: {
        type: "image",
        src: "/lovable-uploads/b55898f3-2485-4c4f-82c3-b6b92b4f34a5.png",
        caption: "PulseBot interface showing culture conversation flow"
      }
    },
    {
      icon: Badge,
      title: "Trust Badges",
      subtitle: "Public Trust Signal",
      description: "Downloadable, embeddable Pulse Certified™ badges to showcase your trust leadership to the world.",
      extendedDescription: "Our digital trust badges integrate seamlessly with career sites, social profiles, and recruitment materials. Each badge includes verification links for authenticity and provides detailed certification information when potential candidates or partners want to learn more.",
      demoTitle: "Badge Implementation",
      demoDescription: "Discover the various ways organizations leverage trust badges to enhance their employer brand.",
      color: "from-[#F2FCE2]/20 to-[#F2FCE2]/10",
      hoverColor: "group-hover:bg-[#F2FCE2]/20",
      iconColor: "text-[#22C55E]",
      demo: {
        type: "image",
        src: "/lovable-uploads/b55898f3-2485-4c4f-82c3-b6b92b4f34a5.png",
        caption: "Trust badge display options on various platforms"
      }
    },
    {
      icon: Lock,
      title: "Privacy-First",
      subtitle: "Architecture",
      description: "No hidden tracking. No fake anonymity. Built with real blind aggregation and compliance in mind.",
      extendedDescription: "Trust requires genuine anonymity. Our platform uses advanced cryptographic methods to ensure responses cannot be traced back to individuals while still providing meaningful patterns. All data is processed with GDPR, CCPA, and other privacy regulations as foundational principles, not afterthoughts.",
      demoTitle: "Privacy Protection Demo",
      demoDescription: "See a technical demonstration of how our blind aggregation system protects individual privacy.",
      color: "from-[#FFDEE2]/20 to-[#FFDEE2]/10",
      hoverColor: "group-hover:bg-[#FFDEE2]/20",
      iconColor: "text-[#F43F5E]",
      demo: {
        type: "image",
        src: "/lovable-uploads/b55898f3-2485-4c4f-82c3-b6b92b4f34a5.png",
        caption: "Privacy architecture diagram showing data protection flow"
      }
    }
  ];

  // Animation variants for motion components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-pulse-gray/10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold tracking-tighter sm:text-5xl text-pulse-navy mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Built for Trust, <span className="gradient-text">Designed for Proof</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform your workplace culture from a hidden liability into a certified competitive advantage.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="h-full"
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <Card 
                className={`feature-card group h-full transition-all duration-300 overflow-hidden bg-gradient-to-br ${feature.color}`}
              >
                <div className="p-6 relative z-10 flex flex-col h-full">
                  <div className="flex flex-col items-start space-y-4 flex-grow">
                    <div className={`rounded-lg bg-white/80 p-3 ${feature.hoverColor} transition-colors shadow-sm`}>
                      <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-pulse-navy">{feature.title}</h3>
                      <p className={`text-sm ${feature.iconColor} font-medium mb-2`}>{feature.subtitle}</p>
                      <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${activeFeature === index ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-700 text-sm mt-4 mb-6 leading-relaxed">
                          {feature.extendedDescription}
                        </p>
                        
                        <div className="border-t border-gray-100 pt-4 mt-4">
                          <h4 className="font-semibold text-pulse-navy mb-2 flex items-center">
                            <ExternalLink className="w-4 h-4 mr-1 inline" /> 
                            {feature.demoTitle}
                          </h4>
                          <p className="text-xs text-gray-500 mb-4">{feature.demoDescription}</p>
                          
                          <div className="rounded-md overflow-hidden border border-gray-100 bg-white/50">
                            <img 
                              src={feature.demo.src} 
                              alt={feature.demo.caption}
                              className="w-full h-32 object-cover"
                            />
                            <p className="text-xs text-center py-2 px-3 text-gray-500">
                              {feature.demo.caption}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100/40">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className={`text-xs w-full justify-between ${feature.iconColor} hover:bg-white/50`}
                        >
                          <span>Learn more about {feature.title}</span>
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 p-0">
                        <div className="p-4">
                          <h4 className="font-bold text-pulse-navy mb-2">{feature.title}</h4>
                          <p className="text-sm text-gray-600 mb-4">{feature.extendedDescription}</p>
                          <div className="rounded-md overflow-hidden border border-gray-100">
                            <img 
                              src={feature.demo.src} 
                              alt={feature.demo.caption}
                              className="w-full h-32 object-cover"
                            />
                            <p className="text-xs text-center py-2">{feature.demo.caption}</p>
                          </div>
                          <Button className="w-full mt-4 bg-pulse-blue hover:bg-pulse-blue/90">
                            Request Demo
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
