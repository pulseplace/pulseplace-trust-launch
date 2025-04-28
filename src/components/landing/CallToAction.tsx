
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pulse-blue via-pulse-coral to-pulse-navy opacity-90" />
      <div className="container relative px-4 md:px-6 z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Build Trust. Certify Culture.
          </h2>
          <p className="text-xl text-white/90 max-w-3xl">
            Join forward-thinking organizations using PulsePlace to build transparent, 
            trust-centered workplace cultures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to="/pulse-score-lite">
              <Button 
                size="lg" 
                className="bg-white text-pulse-blue hover:bg-white/90 text-lg px-8"
              >
                Start Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8"
              >
                See How It Works
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
