
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
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-pulse-gray/10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pulse-navy">
            Your Path to Certification
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to transform your workplace culture from hidden potential to certified advantage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-pulse-blue/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-pulse-blue" />
              </div>
              <div className="absolute top-6 left-full w-full h-0.5 bg-pulse-blue/20 -z-10 hidden lg:block">
                {index < steps.length - 1 && <div className="w-full h-full bg-pulse-blue/20" />}
              </div>
              <h3 className="text-xl font-bold text-pulse-navy mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
