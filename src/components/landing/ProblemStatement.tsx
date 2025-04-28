
import { AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemStatement = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="rounded-full bg-pulse-coral/10 p-3 text-pulse-coral">
            <AlertTriangle className="h-6 w-6" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-pulse-navy max-w-3xl">
            The Hidden Cost of Unclear Workplace Culture
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
            In today's competitive landscape, undefined culture metrics and opaque trust signals 
            are silently eroding team performance and talent retention.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl">
            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-pulse-navy mb-2">Lost Talent</h3>
              <p className="text-gray-600">Top candidates choose employers with proven culture credentials</p>
            </Card>

            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-pulse-navy mb-2">Trust Deficit</h3>
              <p className="text-gray-600">Teams struggle without transparent culture measurement</p>
            </Card>

            <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-pulse-navy mb-2">Brand Risk</h3>
              <p className="text-gray-600">Missing trust validation damages employer reputation</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
