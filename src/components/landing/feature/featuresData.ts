import { Award, BarChartHorizontal, Database, MessageSquare, Badge, Shield, Lock } from "lucide-react";

export const features = [
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
