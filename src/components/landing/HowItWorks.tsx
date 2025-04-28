
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Take the Assessment",
    description: "Complete our carefully designed culture and trust diagnostic survey"
  },
  {
    title: "Get Your PulseScore™",
    description: "Receive your detailed trust and culture health analysis"
  },
  {
    title: "Implement Insights",
    description: "Use actionable recommendations to strengthen workplace trust"
  },
  {
    title: "Earn Certification",
    description: "Achieve Pulse Certified™ status and showcase your badge"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white via-pulse-gray/5 to-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-pulse-navy mb-6">
            Your Path to Certification
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to transform your workplace culture from hidden potential to certified advantage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-pulse-blue/10 flex items-center justify-center mb-6 group-hover:bg-pulse-blue/20 transition-colors">
                <CheckCircle2 className="h-8 w-8 text-pulse-blue" />
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-4rem)] h-0.5 bg-pulse-blue/20" />
              )}
              <h3 className="text-xl font-bold text-pulse-navy mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
