
import { Award, ChartBar, Shield, MessageSquare, Badge, Lock, BrainCircuit, LineChart } from "lucide-react";
import type { Feature } from "./types";

export const features: Feature[] = [
  {
    icon: Award,
    title: "PulseScore™",
    subtitle: "Explainable AI Scoring",
    description: "Trust metrics that make sense - see exactly how your workplace culture score is calculated.",
    extendedDescription: "Our proprietary PulseScore algorithm provides complete transparency in how your organization's cultural health is measured. Unlike black-box solutions, we break down each component:\n\n• Trust Dynamics (40%): Leadership transparency, peer relationships, communication patterns\n• Engagement Stability (30%): Team cohesion, role clarity, growth opportunities\n• Emotional Wellbeing (30%): Work-life harmony, stress levels, psychological safety",
    demoTitle: "See Score Demo",
    demoDescription: "Experience how PulseScore breaks down complex workplace dynamics into actionable metrics.",
    actionLabel: "Calculate Your Score",
    actionLink: "demo",
    color: "from-blue-50 to-blue-100/50",
    hoverColor: "group-hover:bg-pulse-blue/20",
    iconColor: "text-pulse-blue",
    demo: {
      type: "image",
      src: "/lovable-uploads/5816cf99-ba1f-4cd2-a127-b486b15c411d.png",
      caption: "Interactive PulseScore dashboard showing real-time trust metrics"
    }
  },
  {
    icon: Badge,
    title: "Pulse Certified™",
    subtitle: "Trust Leadership Certification",
    description: "Join elite organizations with verified workplace cultures that attract and retain top talent.",
    extendedDescription: "Pulse Certified™ is the premier workplace culture certification program with:\n\n• Comprehensive trust assessment across 12 dimensions\n• Quarterly pulse checks to maintain certification\n• Industry-specific benchmarking\n• Public trust profile and verification\n• Digital badge for career sites and social media",
    demoTitle: "Preview Certification",
    demoDescription: "See how leading organizations leverage their Pulse Certification for competitive advantage.",
    actionLabel: "Get Certified",
    actionLink: "demo",
    color: "from-[#FDF2EC] to-[#FFF6F1]",
    hoverColor: "group-hover:bg-[#FEC6A1]/20",
    iconColor: "text-[#F97316]",
    demo: {
      type: "image",
      src: "/lovable-uploads/9966b0a7-c74e-4b42-9cfc-01ae51f146e9.png",
      caption: "Interactive certification dashboard with trust metrics"
    }
  },
  {
    icon: LineChart,
    title: "Real-Time Insights",
    subtitle: "Live Trust Analytics",
    description: "Monitor workplace culture health with real-time data visualization and early warning signals.",
    extendedDescription: "Transform raw feedback into actionable insights:\n\n• Live sentiment tracking across teams\n• Predictive attrition indicators\n• Trust trend analysis\n• Engagement pattern recognition\n• Cultural health forecasting\n• Custom report generation",
    demoTitle: "View Live Demo",
    demoDescription: "Watch how our real-time analytics detect and predict cultural shifts before they impact performance.",
    actionLabel: "Explore Analytics",
    actionLink: "demo",
    color: "from-[#F5F3FF]/80 to-[#EBE8FD]",
    hoverColor: "group-hover:bg-[#E5DEFF]/20",
    iconColor: "text-[#8B5CF6]",
    demo: {
      type: "image",
      src: "/lovable-uploads/1046046e-7ab8-48ff-9ece-2e6e87659feb.png",
      caption: "Live dashboard showing real-time culture analytics"
    }
  },
  {
    icon: Shield,
    title: "Global Benchmarking",
    subtitle: "Industry Standards",
    description: "See how your culture metrics stack up against industry leaders and competitors.",
    extendedDescription: "Comprehensive benchmarking data including:\n\n• Industry-specific trust baselines\n• Regional cultural norms\n• Company size comparisons\n• Growth stage analytics\n• Sector-specific engagement patterns\n• Historical trend analysis",
    demoTitle: "Compare Metrics",
    demoDescription: "Interactive tool to benchmark your organization against industry standards.",
    actionLabel: "Start Comparing",
    actionLink: "demo",
    color: "from-[#EFF8FF] to-[#F5FAFF]",
    hoverColor: "group-hover:bg-[#D3E4FD]/20",
    iconColor: "text-[#0EA5E9]",
    demo: {
      type: "image",
      src: "/lovable-uploads/03f40ec7-9d5e-4653-93c9-5f9f81f18917.png",
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
    actionLink: "demo",
    color: "from-[#FFFCE8] to-[#FFFEF5]",
    hoverColor: "group-hover:bg-[#FEF7CD]/20",
    iconColor: "text-[#EAB308]",
    demo: {
      type: "image",
      src: "/lovable-uploads/9e145159-29da-4f38-8b3c-3536b72a242e.png",
      caption: "Live PulseBot interaction demonstrating cultural insights"
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
    actionLink: "demo",
    color: "from-[#FFF1F3] to-[#FFF7F8]",
    hoverColor: "group-hover:bg-[#FFDEE2]/20",
    iconColor: "text-[#F43F5E]",
    demo: {
      type: "image",
      src: "/lovable-uploads/9e145159-29da-4f38-8b3c-3536b72a242e.png",
      caption: "Security architecture and privacy protection demonstration"
    }
  }
];
