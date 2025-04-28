import { Card } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import type { Feature } from "./types";

interface FeatureCardProps extends Feature {
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const FeatureCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
  extendedDescription,
  demoTitle,
  demoDescription,
  actionLabel,
  color,
  hoverColor,
  iconColor,
  demo,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: FeatureCardProps) => {
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="h-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Card className={`feature-card group h-full transition-all duration-300 overflow-hidden bg-gradient-to-br ${color}`}>
        <div className="p-6 relative z-10 flex flex-col h-full">
          <div className="flex flex-col items-start space-y-4 flex-grow">
            <div className={`rounded-lg bg-white/80 p-3 ${hoverColor} transition-colors shadow-sm`}>
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-pulse-navy">{title}</h3>
              <p className={`text-sm ${iconColor} font-medium mb-2`}>{subtitle}</p>
              <p className="text-gray-600 text-sm mb-4">{description}</p>
              
              <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-700 text-sm mt-4 mb-6 leading-relaxed whitespace-pre-line">
                  {extendedDescription}
                </p>
                
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h4 className="font-semibold text-pulse-navy mb-2 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1 inline" /> 
                    {demoTitle}
                  </h4>
                  <p className="text-xs text-gray-500 mb-4">{demoDescription}</p>
                  
                  <div className="rounded-md overflow-hidden border border-gray-100 bg-white/50">
                    <img 
                      src={demo.src} 
                      alt={demo.caption}
                      className="w-full h-32 object-cover"
                    />
                    <p className="text-xs text-center py-2 px-3 text-gray-500">
                      {demo.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100/40">
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`text-xs w-full justify-between ${iconColor} hover:bg-white/50`}
                >
                  <span>{actionLabel}</span>
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0">
                <div className="p-4">
                  <h4 className="font-bold text-pulse-navy mb-2">{title}</h4>
                  <p className="text-sm text-gray-600 mb-4 whitespace-pre-line">{extendedDescription}</p>
                  <div className="rounded-md overflow-hidden border border-gray-100">
                    <img 
                      src={demo.src} 
                      alt={demo.caption}
                      className="w-full h-32 object-cover"
                    />
                    <p className="text-xs text-center py-2">{demo.caption}</p>
                  </div>
                  <Button className={`w-full mt-4 ${iconColor} bg-opacity-90 hover:bg-opacity-100`}>
                    {actionLabel}
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
