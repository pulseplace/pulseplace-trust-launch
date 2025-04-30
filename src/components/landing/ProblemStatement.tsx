
import { AlertTriangle, ThumbsDown, UserX, ShieldOff } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemStatement = () => {
  const problems = [
    {
      icon: <ThumbsDown className="h-6 w-6 text-pulse-coral" />,
      title: "Lost Talent",
      description: "Top candidates choose employers with proven culture credentials"
    },
    {
      icon: <ShieldOff className="h-6 w-6 text-pulse-coral" />,
      title: "Trust Deficit",
      description: "Teams struggle without transparent culture measurement"
    },
    {
      icon: <UserX className="h-6 w-6 text-pulse-coral" />,
      title: "Brand Risk",
      description: "Missing trust validation damages employer reputation"
    }
  ];

  return (
    <section id="problem" className="py-24 bg-gradient-to-b from-white via-pulse-gray/5 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          <div className="rounded-full bg-pulse-coral/10 p-3">
            <AlertTriangle className="h-6 w-6 text-pulse-coral" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-pulse-navy">
            The Hidden Cost of Unclear Workplace Culture
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            In today's competitive landscape, undefined culture metrics and opaque trust signals 
            are silently eroding team performance and talent retention.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
            {problems.map((problem, index) => (
              <Card 
                key={index} 
                className="p-6 bg-white hover:shadow-lg transition-all duration-300 border-pulse-blue/10 group"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="rounded-full bg-pulse-coral/10 p-3 group-hover:bg-pulse-coral/20 transition-all duration-300">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-bold text-pulse-navy">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 border border-pulse-blue/20 rounded-lg bg-pulse-blue/5 max-w-3xl">
            <p className="text-lg font-medium text-pulse-navy">
              Without measurable trust metrics, organizations lose candidates, face higher turnover, 
              and struggle to differentiate in competitive markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
