
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-pulse-blue via-pulse-purple to-pulse-blue">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Ready to Certify Your Workplace Culture?
            </h2>
            <p className="max-w-[900px] text-white/90 md:text-xl">
              Join the organizations building trust through cultural transparency.
              Start your PulseScore assessment today.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link to="/survey">
              <Button size="lg" className="bg-white text-pulse-blue hover:bg-white/90">
                Start Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="#">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
