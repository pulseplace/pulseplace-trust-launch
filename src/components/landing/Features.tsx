
import React from "react";
import { Award, BarChartHorizontal, Database, MessageSquare, Badge, Shield, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "PulseScore™",
      subtitle: "Explainable AI Scoring",
      description: "Transparent, audit-ready workplace trust scoring combining emotion, engagement, and wellbeing dimensions."
    },
    {
      icon: Award,
      title: "Pulse Certified™",
      subtitle: "Accreditation System",
      description: "Earn a globally recognized culture trust certification — not just another engagement score."
    },
    {
      icon: BarChartHorizontal,
      title: "Real-Time Insights",
      subtitle: "Dashboard",
      description: "Instant analytics on trust drivers, risk signals, engagement health — no need to wait months."
    },
    {
      icon: Database,
      title: "Global Benchmarking",
      subtitle: "Index Comparison",
      description: "Compare your trust and culture health against global standards, peers, and internal history."
    },
    {
      icon: MessageSquare,
      title: "PulseBot",
      subtitle: "AI Culture Assistant",
      description: "Real-time pulse feedback, culture Q&A, and next-step coaching, tuned to your org's tone."
    },
    {
      icon: Badge,
      title: "Trust Badges",
      subtitle: "Public Trust Signal",
      description: "Downloadable, embeddable Pulse Certified™ badges to showcase your trust leadership to the world."
    },
    {
      icon: Lock,
      title: "Privacy-First",
      subtitle: "Architecture",
      description: "No hidden tracking. No fake anonymity. Built with real blind aggregation and compliance in mind."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-pulse-gray/10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-pulse-navy mb-4">
            Built for Trust, <span className="gradient-text">Designed for Proof</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Transform your workplace culture from a hidden liability into a certified competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="feature-card group hover:scale-105 transition-all duration-300"
            >
              <div className="p-6 relative z-10">
                <div className="flex flex-col items-start space-y-4">
                  <div className="rounded-lg bg-pulse-blue/10 p-3 group-hover:bg-pulse-blue/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-pulse-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pulse-navy">{feature.title}</h3>
                    <p className="text-sm text-pulse-blue font-medium mb-2">{feature.subtitle}</p>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
