
import React from "react";
import { Award, BarChart, Shield, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Award,
      title: "PulseScore™ Certification",
      description:
        "Validate your workplace culture with our proprietary trust assessment methodology.",
    },
    {
      icon: Shield,
      title: "Trust Benchmarking",
      description:
        "Compare your organization's trust metrics against industry standards and competitors.",
    },
    {
      icon: BarChart,
      title: "Real-time Analytics",
      description:
        "Track sentiment shifts and cultural health with intuitive, actionable dashboards.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Enable cross-functional alignment on cultural goals and improvement initiatives.",
    },
  ];

  return (
    <section id="learn-more" className="py-16 bg-pulse-gray">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-pulse-blue px-3 py-1 text-sm text-white">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Building Trust Through Transparency
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl">
              PulsePlace.ai provides comprehensive tools to measure, certify, and improve workplace culture.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-2 md:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-start space-y-3 rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="rounded-full bg-pulse-blue/10 p-3">
                <feature.icon className="h-5 w-5 text-pulse-blue" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
