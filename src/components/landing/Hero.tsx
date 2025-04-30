
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Brain, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useDemo } from "@/contexts/DemoContext";

const Hero = () => {
  const { startDemo } = useDemo();

  const features = [
    { 
      icon: <Award className="h-5 w-5 text-pulse-blue" />, 
      text: "Get Pulse Certified™" 
    },
    { 
      icon: <BarChart3 className="h-5 w-5 text-pulse-coral" />, 
      text: "Verify Trust Metrics" 
    },
    { 
      icon: <Brain className="h-5 w-5 text-pulse-navy" />, 
      text: "AI-Powered Culture Insights" 
    },
  ];

  return (
    <section className="pt-24 pb-16 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-pulse-blue/10 px-3 py-1 text-sm text-pulse-blue">
                Introducing PulsePlace.ai
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                The {" "}
                <span className="text-pulse-blue">Workplace Trust</span>{" "}
                Certification Platform
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Transform your workplace culture from a hidden asset into a 
                certified competitive advantage with transparent trust metrics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-pulse-blue hover:bg-pulse-blue/90 text-lg h-12 px-6"
                onClick={startDemo}
              >
                Try Interactive Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Link to="/pulse-score-lite">
                <Button variant="outline" className="border-pulse-blue text-pulse-blue hover:bg-pulse-blue/10 text-lg h-12 px-6">
                  Free Assessment
                </Button>
              </Link>
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-2">
                  {feature.icon}
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto max-w-[500px] rotate-2 lg:max-w-none">
            <div className="relative flex flex-col gap-8 rounded-xl bg-white p-2 shadow-lg">
              <div className="overflow-hidden rounded-lg bg-pulse-navy/5">
                <div className="flex items-center justify-between bg-pulse-navy/10 p-3">
                  <div className="text-lg font-semibold">PulseScore™ Dashboard</div>
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6 grid grid-cols-3 gap-3">
                    <div className="rounded-lg border border-pulse-blue/20 bg-white p-3 text-center">
                      <div className="text-xl font-bold text-pulse-blue">86</div>
                      <div className="text-xs">Trust</div>
                    </div>
                    <div className="rounded-lg border border-pulse-coral/20 bg-white p-3 text-center">
                      <div className="text-xl font-bold text-pulse-coral">82</div>
                      <div className="text-xs">Engagement</div>
                    </div>
                    <div className="rounded-lg border border-pulse-navy/20 bg-white p-3 text-center">
                      <div className="text-xl font-bold text-pulse-navy">89</div>
                      <div className="text-xs">Wellbeing</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 w-4/5 rounded-full bg-pulse-blue"></div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 w-3/4 rounded-full bg-pulse-coral"></div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 w-[85%] rounded-full bg-pulse-navy"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -top-6 rotate-12 rounded-lg border-4 border-white bg-pulse-blue/10 p-4 shadow-lg">
                <Award className="h-12 w-12 text-pulse-blue" />
                <div className="mt-1 text-center text-sm font-medium">Pulse Certified™</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-xl bg-gradient-to-br from-pulse-coral via-pulse-blue to-pulse-navy opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
