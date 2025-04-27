
import React from "react";
import { Award, BarChart, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  return (
    <section id="learn-more" className="py-16 bg-pulse-gray">
      <div className="container px-4 md:px-6">
        {/* Problem Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Workplace trust is invisible — until it breaks.
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl">
              51% of employees are disengaged or actively considering leaving their employer.
              Traditional engagement surveys fail to build real trust because they are hidden, slow, and often manipulated.
              Today's organizations need visible, verifiable proof of their workplace culture strength.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 max-w-3xl">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-pulse-blue">41%</div>
                <p className="text-gray-600">of workers are considering leaving their employer</p>
                <div className="text-xs text-gray-500 mt-2">Gallup</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-pulse-blue">67%</div>
                <p className="text-gray-600">of employees say they trust their peers more than leadership</p>
                <div className="text-xs text-gray-500 mt-2">Edelman</div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Solution Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-pulse-blue px-3 py-1 text-sm text-white">
              Solution
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Pulse Certified™ — Your Culture, Verified.
            </h2>
          </div>
          
          <div className="grid max-w-5xl grid-cols-1 gap-6 pt-8 md:grid-cols-2 md:gap-8">
            {[
              {
                icon: Award,
                title: "Transparent, explainable trust scoring",
              },
              {
                icon: Shield,
                title: "Benchmark comparison against global standards",
              },
              {
                icon: BarChart,
                title: "Official Pulse Certified™ recognition badge",
              },
              {
                icon: Users,
                title: "Real-time analytics and sentiment insights",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-start space-y-3 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="rounded-full bg-pulse-blue/10 p-3">
                  <feature.icon className="h-5 w-5 text-pulse-blue" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-8 max-w-3xl">
            <blockquote className="border-l-4 border-pulse-blue pl-4 italic text-xl">
              "In today's world, culture is your brand. Trust is your currency."
              <footer className="mt-2 text-sm text-gray-500">— PulsePlace.ai Manifesto</footer>
            </blockquote>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div id="how-it-works" className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-pulse-blue px-3 py-1 text-sm text-white">
              Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
          </div>
          
          <div className="grid max-w-5xl grid-cols-1 gap-8 pt-12 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                step: 1,
                title: "Launch anonymous PulseScore Lite survey",
                description: "5 minutes",
              },
              {
                step: 2,
                title: "AI analyzes trust, engagement, emotional wellbeing",
                description: "Secure processing",
              },
              {
                step: 3,
                title: "Get instant PulseScore with certification eligibility",
                description: "Transparent results",
              },
              {
                step: 4,
                title: "Download your Pulse Certified™ badge or next steps plan",
                description: "Take action",
              },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pulse-blue text-white text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="font-medium">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
