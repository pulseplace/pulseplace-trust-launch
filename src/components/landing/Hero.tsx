
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useDemo } from "@/contexts/DemoContext";

const Hero = () => {
  const { startDemo } = useDemo();

  const handleDemoClick = () => {
    startDemo();
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-pulse-gray/5 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-pulse-navy">
              Build Trust.
              <br />
              <span className="gradient-text">
                Certify Your Culture.
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Transform hidden workplace potential into verified trust leadership with 
              the world's first AI-powered culture certification platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/pulse-score-lite">
                <Button size="lg" className="bg-pulse-blue hover:bg-pulse-blue/90 text-white">
                  Start Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-pulse-blue text-pulse-blue hover:bg-pulse-blue/5"
                onClick={handleDemoClick}
              >
                <Play className="mr-2 h-4 w-4" />
                Try AI Demo
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-pulse-blue/10 via-pulse-coral/10 to-transparent p-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold text-pulse-blue">PulseScore™</h3>
                        <p className="text-sm text-gray-500">Trust Leadership Index</p>
                      </div>
                      <div className="h-14 w-14 bg-pulse-blue/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-pulse-blue">85</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">Trust Score</span>
                          <span className="text-pulse-blue">88/100</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                          <div className="h-full bg-pulse-blue rounded-full" style={{width: '88%'}} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">Engagement</span>
                          <span className="text-pulse-coral">82/100</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                          <div className="h-full bg-pulse-coral rounded-full" style={{width: '82%'}} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">Wellbeing</span>
                          <span className="text-pulse-navy">85/100</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                          <div className="h-full bg-pulse-navy rounded-full" style={{width: '85%'}} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
