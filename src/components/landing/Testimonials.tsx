
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Head of People Operations",
    company: "TechCorp Inc.",
    quote:
      "PulsePlace.ai transformed how we approach workplace culture measurement. The certification helped us attract top talent who value transparency.",
    avatar: "SJ",
  },
  {
    name: "Michael T.",
    role: "Chief People Officer",
    company: "GrowthWave",
    quote:
      "The insights from our PulseScore enabled us to make targeted improvements that boosted overall employee satisfaction by 28% in just one quarter.",
    avatar: "MT",
  },
  {
    name: "Elena M.",
    role: "CEO",
    company: "Innovate Partners",
    quote:
      "As a leader, having objective culture metrics has been invaluable. It's removed the guesswork from our wellbeing initiatives and built incredible trust.",
    avatar: "EM",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-pulse-purple px-3 py-1 text-sm text-white">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by Forward-Thinking Teams
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl">
              See how organizations are leveraging PulsePlace.ai to build transparent, 
              trust-centered workplace cultures.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-pulse-blue text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
