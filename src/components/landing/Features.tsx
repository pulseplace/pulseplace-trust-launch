
import React from "react";
import { Award, BarChart, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  return (
    <section id="learn-more" className="py-20 bg-gradient-to-b from-white to-pulse-gray/20">
      <div className="container px-4 md:px-6">
        {/* Problem Section */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-pulse-navy">
            Trust is your <span className="gradient-text">competitive advantage</span>
          </h2>
          <p className="max-w-[900px] text-gray-600 text-lg md:text-xl">
            51% of employees are disengaged or actively considering leaving their employer.
            Traditional engagement surveys fail to build real trust because they lack transparency and accountability.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full max-w-4xl">
            <Card className="feature-card">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-pulse-blue">41%</div>
                <p className="text-gray-600 mt-2">of workers are considering leaving their employer</p>
                <div className="text-sm text-pulse-blue mt-4">Gallup Workplace Report</div>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-pulse-blue">67%</div>
                <p className="text-gray-600 mt-2">of employees trust their peers more than leadership</p>
                <div className="text-sm text-pulse-blue mt-4">Edelman Trust Barometer</div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Solution Section */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-20">
          <div className="inline-block rounded-lg bg-pulse-blue/10 px-4 py-2 text-pulse-blue font-medium mb-4">
            The Solution
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-pulse-navy">
            Pulse Certified™ — Your Culture, Verified
          </h2>
          
          <div className="grid max-w-6xl grid-cols-1 gap-8 pt-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "Trust Scoring",
                description: "Transparent, explainable metrics",
              },
              {
                icon: BarChart,
                title: "Benchmarking",
                description: "Compare against global standards",
              },
              {
                icon: Award,
                title: "Certification",
                description: "Official recognition badge",
              },
              {
                icon: Users,
                title: "Real-time Insights",
                description: "Live sentiment analytics",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="feature-card group"
              >
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  <div className="rounded-full bg-pulse-blue/10 p-3 group-hover:bg-pulse-blue/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-pulse-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-pulse-navy">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="inline-block rounded-lg bg-pulse-coral/10 px-4 py-2 text-pulse-coral font-medium mb-4">
            The Process
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-pulse-navy">
            Four Steps to Certification
          </h2>
          
          <div className="grid max-w-6xl grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: 1,
                title: "Launch Survey",
                description: "5-minute anonymous PulseScore assessment",
              },
              {
                step: 2,
                title: "AI Analysis",
                description: "Trust, engagement & wellbeing metrics",
              },
              {
                step: 3,
                title: "Get PulseScore",
                description: "Instant certification eligibility",
              },
              {
                step: 4,
                title: "Take Action",
                description: "Download badge or improvement plan",
              },
            ].map((step, i) => (
              <div key={i} className="feature-card">
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pulse-blue text-white text-lg font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-pulse-navy">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
