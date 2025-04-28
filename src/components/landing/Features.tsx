import React, { useState } from "react";
import { Award, BarChartHorizontal, Database, MessageSquare, Badge, Shield, Lock, ChevronRight, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
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
      description: "Trust metrics that make sense - see exactly how your workplace culture score is calculated.",
      extendedDescription: "Our proprietary PulseScore algorithm provides complete transparency in how your organization's cultural health is measured. Unlike black-box solutions, we break down each component:\n\n• Trust Dynamics (40%): Leadership transparency, peer relationships, communication patterns\n• Engagement Stability (30%): Team cohesion, role clarity, growth opportunities\n• Emotional Wellbeing (30%): Work-life harmony, stress levels, psychological safety",
      demoTitle: "See Score Demo",
      demoDescription: "Experience how PulseScore breaks down complex workplace dynamics into actionable metrics.",
      actionLabel: "Calculate Your Score",
      color: "from-pulse-blue/20 to-pulse-blue/10",
      hoverColor: "group-hover:bg-pulse-blue/20",
      iconColor: "text-pulse-blue",
      demo: {
        type: "image",
        src: "/lovable-uploads/b55898f3-2485-4c4f-82c3-b6b92b4f34a5.png",
        caption: "Interactive PulseScore dashboard showing real-time trust metrics"
      }
    },
    {
      icon: Award,
      title: "Pulse Certified™",
      subtitle: "Trust Leadership Certification",
      description: "Join elite organizations with verified workplace cultures that attract and retain top talent.",
      extendedDescription: "Pulse Certified™ is the premier workplace culture certification program with:\n\n• Comprehensive trust assessment across 12 dimensions\n• Quarterly pulse checks to maintain certification\n• Industry-specific benchmarking\n• Public trust profile and verification\n• Digital badge for career sites and social media",
      demoTitle: "Preview Certification",
      demoDescription: "See how leading organizations leverage their Pulse Certification for competitive advantage.",
      actionLabel: "Get Certified",
      color: "from-[#FEC6A1]/20 to-[#FEC6A1]/10",
      hoverColor: "group-hover:bg-[#FEC6A1]/20",
      iconColor: "text-[#F97316]",
      demo: {
        type: "image",
        src: "/lovable-uploads/b55898f3-2485-4c4f-82c3-b6b92b4f34a5.png",
        caption: "Interactive certification dashboard with trust metrics"
      }
    },
    {
      icon: BarChartHorizontal,
      title: "Real-Time Insights",
      subtitle: "Live Trust Analytics",
      description: "Monitor workplace culture health with real-time data visualization and early warning signals.",
      extendedDescription: "Transform raw feedback into actionable insights:\n\n• Live sentiment tracking across teams\n• Predictive attrition indicators\n• Trust trend analysis\n• Engagement pattern recognition\n• Cultural health forecasting\n• Custom report generation",
      demoTitle: "View Live Demo",
      demoDescription: "Watch how our real-time analytics detect and predict cultural shifts before they impact performance.",
      actionLabel: "Explore Analytics",
      color: "from-[#E5DEFF]/20 to-[#E5DEFF]/10",
      hoverColor: "group-hover:bg-[#E5DEFF]/20",
      iconColor: "text-[#8B5CF6]",
      demo: {
        type: "image",
        src: "/lovable-uploads/b55898f3-2485-4c4f-82c3-b6b92b4f34a5.png",
        caption: "Live dashboard showing real-time culture analytics"
      }
    },
    {
      icon: Database,
      title: "Global Benchmarking",
      subtitle: "Industry Standards",
      description: "See how your culture metrics stack up against industry leaders and competitors.",
      extendedDescription: "Comprehensive benchmarking data including:\n\n• Industry-specific trust baselines\n• Regional cultural norms\n• Company size comparisons\n• Growth stage analytics\n• Sector-specific engagement patterns\n• Historical trend analysis",
      demoTitle: "Compare Metrics",
      demoDescription: "Interactive tool to benchmark your organization against industry standards.",
      actionLabel: "Start Comparing",
      color: "from-[#D3E4FD]/20 to-[#D3E4FD]/10",
      hoverColor: "group-hover:bg-[#D3E4FD]/20",
      iconColor: "text-[#0EA5E9]",
      demo: {
        type: "image",
        src: "/lovable-uploads/b55898f3-2485-4c4f-82c3-b6b92b4f34a5.png",
        caption: "Interactive benchmarking tool showing industry comparisons"
      }
    },
    {
      icon: MessageSquare,
      title: "PulseBot",
      subtitle: "AI Culture Assistant",
      description: "Your 24/7 culture coach powered by advanced natural language processing.",
      extendedDescription: "AI-powered cultural intelligence:\n\n• Anonymous feedback collection\n• Sentiment analysis\n• Cultural insight generation\n• Personalized recommendations\n• Trend identification\n• Action planning assistance",
      demoTitle: "Chat with PulseBot",
      demoDescription: "Experience how PulseBot helps identify and address culture challenges.",
      actionLabel: "Try PulseBot",
      color: "from-[#FEF7CD]/20 to-[#FEF7CD]/10",
      hoverColor: "group-hover:bg-[#FEF7CD]/20",
      iconColor: "text-[#EAB308]",
      demo: {
        type: "image",
        src: "/lovable-uploads/b55898f3-2485-4c4f-82c3-b6b92b4f34a5.png",
        caption: "Live PulseBot interaction demonstrating cultural insights"
      }
    },
    {
      icon: Badge,
      title: "Trust Badges",
      subtitle: "Verified Culture Status",
      description: "Showcase your commitment to workplace trust with verified digital badges.",
      extendedDescription: "Digital trust verification system:\n\n• Customizable badge designs\n• Verification QR codes\n• Social media integration\n• API for career sites\n• Analytics tracking\n• Automated renewal notifications",
      demoTitle: "Preview Badges",
      demoDescription: "See how organizations showcase their culture certification across platforms.",
      actionLabel: "View Badge Gallery",
      color: "from-[#F2FCE2]/20 to-[#F2FCE2]/10",
      hoverColor: "group-hover:bg-[#F2FCE2]/20",
      iconColor: "text-[#22C55E]",
      demo: {
        type: "image",
        src: "/lovable-uploads/b55898f3-2485-4c4f-82c3-b6b92b4f34a5.png",
        caption: "Interactive badge customization and preview tool"
      }
    },
    {
      icon: Lock,
      title: "Privacy-First",
      subtitle: "Secure & Anonymous",
      description: "Enterprise-grade security with genuine anonymity for honest feedback.",
      extendedDescription: "Advanced security features:\n\n• End-to-end encryption\n• Blind data aggregation\n• GDPR compliance\n• SOC 2 certification\n• Regular security audits\n• Custom data retention",
      demoTitle: "Security Demo",
      demoDescription: "See how we protect sensitive cultural data while maintaining actionable insights.",
      actionLabel: "Learn About Security",
      color: "from-[#FFDEE2]/20 to-[#FFDEE2]/10",
      hoverColor: "group-hover:bg-[#FFDEE2]/20",
      iconColor: "text-[#F43F5E]",
      demo: {
        type: "image",
        src: "/lovable-uploads/b55898f3-2485-4c4f-82c3-b6b92b4f34a5.png",
        caption: "Security architecture and privacy protection demonstration"
      }
    }
  ];

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
                        <p className="text-gray-700 text-sm mt-4 mb-6 leading-relaxed whitespace-pre-line">
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
                          <span>{feature.actionLabel}</span>
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 p-0">
                        <div className="p-4">
                          <h4 className="font-bold text-pulse-navy mb-2">{feature.title}</h4>
                          <p className="text-sm text-gray-600 mb-4 whitespace-pre-line">{feature.extendedDescription}</p>
                          <div className="rounded-md overflow-hidden border border-gray-100">
                            <img 
                              src={feature.demo.src} 
                              alt={feature.demo.caption}
                              className="w-full h-32 object-cover"
                            />
                            <p className="text-xs text-center py-2">{feature.demo.caption}</p>
                          </div>
                          <Button className={`w-full mt-4 ${feature.iconColor} bg-opacity-90 hover:bg-opacity-100`}>
                            {feature.actionLabel}
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
