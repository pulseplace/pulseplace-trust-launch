
import React from "react";
import { motion } from "framer-motion";
import { Award, Check, ShieldCheck } from "lucide-react";

interface CertificationBadgeProps {
  pulseScore: number;
  organizationName: string;
  certificationDate: string;
  expirationDate: string;
}

const CertificationBadge: React.FC<CertificationBadgeProps> = ({
  pulseScore,
  organizationName,
  certificationDate,
  expirationDate
}) => {
  return (
    <div className="border p-6 rounded-lg bg-gradient-to-b from-white to-gray-50 shadow-inner">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <div className="text-xs uppercase tracking-wide text-gray-500">
            PulsePlace.ai Certifies
          </div>
          <h2 className="text-xl font-bold mt-1">{organizationName}</h2>
          <div className="text-sm text-gray-600 mt-1">
            for excellence in workplace culture
          </div>
        </div>
        
        <div className="my-6 relative">
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ 
              duration: 2, 
              repeat: 0,
              ease: "easeInOut" 
            }}
            className="relative z-10"
          >
            <Award className="h-28 w-28 text-pulse-blue" />
          </motion.div>
          <motion.div
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [1, 1.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop" 
            }}
            className="absolute inset-0 bg-pulse-blue rounded-full"
            style={{
              filter: "blur(20px)",
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-pulse-blue">
            PulseScore™: {pulseScore}
          </div>
          <div className="text-sm mt-2">
            This organization demonstrates outstanding
            <br />
            commitment to building a culture of trust.
          </div>
          
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <div className="bg-blue-50 px-3 py-1 rounded-full text-xs text-blue-700 flex items-center">
              <Check className="h-3 w-3 mr-1" />
              Transparent Leadership
            </div>
            <div className="bg-purple-50 px-3 py-1 rounded-full text-xs text-purple-700 flex items-center">
              <Check className="h-3 w-3 mr-1" />
              Psychological Safety
            </div>
            <div className="bg-green-50 px-3 py-1 rounded-full text-xs text-green-700 flex items-center">
              <Check className="h-3 w-3 mr-1" />
              Employee Wellbeing
            </div>
          </div>
          
          <div className="text-xs text-gray-500 mt-6">
            Certified: {certificationDate} • Expires: {expirationDate}
          </div>
        </div>
        
        <div className="mt-8 border-t pt-4 w-full text-center flex items-center justify-center">
          <ShieldCheck className="h-4 w-4 text-pulse-blue mr-1" />
          <div>
            <div className="text-xs text-gray-500">
              Verified by
            </div>
            <div className="font-semibold">
              PulsePlace.ai Certification Authority
            </div>
          </div>
        </div>

        <div className="mt-3 flex gap-2">
          <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
            Blockchain Verified
          </div>
          <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
            Tamper-Proof
          </div>
          <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
            AI-Authenticated
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationBadge;
