
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                Build Trust. <span className="gradient-text">Certify Culture.</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                PulsePlace.ai is the enterprise platform for transparent workplace culture certification.
                Discover how your team's trust and wellbeing stack up against industry benchmarks.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/survey">
                <Button size="lg" className="bg-pulse-blue hover:bg-pulse-blue/90">
                  Start Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#learn-more">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-video overflow-hidden rounded-xl border bg-gradient-to-br from-pulse-purple/20 via-pulse-blue/20 to-transparent p-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-pulse-blue">PulseScore™</h3>
                      <p className="text-sm text-gray-500">Trusted by 500+ teams</p>
                    </div>
                    <div className="h-12 w-12 bg-pulse-purple/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-pulse-purple">85</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Trust</span>
                      <div className="h-2 w-3/4 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-pulse-blue w-4/5 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Wellbeing</span>
                      <div className="h-2 w-3/4 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-pulse-purple w-3/4 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Growth</span>
                      <div className="h-2 w-3/4 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-pulse-teal w-[85%] rounded-full"></div>
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
