
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

const ProcessingOverlay = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="fixed inset-0 bg-white/80 flex items-center justify-center z-50"
    >
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
        <div className="inline-flex items-center justify-center p-3 bg-pulse-blue/10 rounded-full mb-6">
          <BrainCircuit className="h-10 w-10 text-pulse-blue" />
        </div>
        <h2 className="text-2xl font-bold text-pulse-navy mb-3">Analyzing Responses</h2>
        <p className="text-gray-600 mb-6">
          Our AI is processing your responses and preparing your PulseScore™ analysis...
        </p>
        
        <div className="flex flex-col items-center">
          <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
            <div className="absolute left-0 top-0 h-full bg-pulse-blue animate-pulse-progress"></div>
          </div>
          <div className="h-8 w-8 border-3 border-t-pulse-blue border-r-pulse-blue border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessingOverlay;
