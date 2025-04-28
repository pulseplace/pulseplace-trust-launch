
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Build Trust. <br />
                <span className="gradient-text">Certify Your Culture.</span>
              </h1>
              <p className="max-w-[600px] text-gray-600 text-xl">
                The world's first AI-powered workplace culture certification platform. 
                Transform hidden potential into verified trust leadership.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link to="/pulse-score-lite">
                <Button size="lg" className="bg-pulse-blue hover:bg-pulse-blue/90">
                  Start Free Culture Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button size="lg" variant="outline" className="border-pulse-blue text-pulse-blue">
                  See How It Works
                </Button>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-xl bg-gradient-to-br from-pulse-blue/20 via-pulse-coral/20 to-transparent p-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-pulse-blue">PulseScore™</h3>
                      <p className="text-sm text-gray-500">Trust Leadership Index</p>
                    </div>
                    <div className="h-12 w-12 bg-pulse-blue/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-pulse-blue">85</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Trust Score</span>
                        <span className="text-pulse-blue font-medium">88/100</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-pulse-blue w-[88%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Engagement</span>
                        <span className="text-pulse-coral font-medium">82/100</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-pulse-coral w-[82%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Wellbeing</span>
                        <span className="text-pulse-navy font-medium">85/100</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-pulse-navy w-[85%] rounded-full"></div>
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
