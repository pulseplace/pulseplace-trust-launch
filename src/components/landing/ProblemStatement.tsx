
import { AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemStatement = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-pulse-gray/5 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          <div className="rounded-full bg-pulse-coral/10 p-3">
            <AlertTriangle className="h-6 w-6 text-pulse-coral" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-pulse-navy">
            The Hidden Cost of Unclear Workplace Culture
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl">
            In today's competitive landscape, undefined culture metrics and opaque trust signals 
            are silently eroding team performance and talent retention.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
            <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 border-pulse-blue/10">
              <h3 className="text-xl font-bold text-pulse-navy mb-3">Lost Talent</h3>
              <p className="text-gray-600">Top candidates choose employers with proven culture credentials</p>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 border-pulse-blue/10">
              <h3 className="text-xl font-bold text-pulse-navy mb-3">Trust Deficit</h3>
              <p className="text-gray-600">Teams struggle without transparent culture measurement</p>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 border-pulse-blue/10">
              <h3 className="text-xl font-bold text-pulse-navy mb-3">Brand Risk</h3>
              <p className="text-gray-600">Missing trust validation damages employer reputation</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
