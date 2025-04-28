
import { Card } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink, BrainCircuit } from "lucide-react";
import type { Feature } from "./types";
import { useDemo } from "@/contexts/DemoContext";
import { Link } from "react-router-dom";

interface FeatureCardProps extends Feature {
  isActive: boolean;
  isPermanentlyActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
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
  actionLink,
  color,
  hoverColor,
  iconColor,
  demo,
  isActive,
  isPermanentlyActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: FeatureCardProps) => {
  const { startDemo } = useDemo();
  
  const handleCtaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (actionLink === "demo") {
      startDemo();
    }
  };

  const showContent = isActive || isPermanentlyActive;
  
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
      onClick={onClick}
    >
      <Card 
        className={`feature-card group h-full transition-all duration-300 overflow-hidden ${color} ${isPermanentlyActive ? 'ring-2 ring-pulse-blue' : ''}`}
      >
        <div className="p-6 relative z-10 flex flex-col h-full">
          <div className="flex flex-col items-start space-y-4 flex-grow">
            <div className={`rounded-lg bg-white/80 p-3 ${hoverColor} transition-colors shadow-sm relative`}>
              <Icon className={`h-6 w-6 ${iconColor}`} />
              {title.includes("AI") || subtitle.includes("AI") ? (
                <div className="absolute -top-2 -right-2 bg-pulse-blue text-white text-xs px-1.5 py-0.5 rounded-full flex items-center">
                  <BrainCircuit className="h-3 w-3 mr-0.5" />
                  AI
                </div>
              ) : null}
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-pulse-navy">{title}</h3>
              <p className={`text-sm ${iconColor} font-medium mb-2`}>{subtitle}</p>
              <p className="text-gray-600 text-sm mb-4">{description}</p>
              
              <div className={`overflow-hidden transition-all duration-300 ${showContent ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
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
            {actionLink === "demo" ? (
              <Button 
                onClick={handleCtaClick} 
                variant="ghost" 
                className={`text-xs w-full justify-between ${iconColor} hover:bg-white/50`}
              >
                <span>{actionLabel}</span>
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Link to={actionLink || "#"} className="w-full block">
                <Button 
                  variant="ghost" 
                  className={`text-xs w-full justify-between ${iconColor} hover:bg-white/50`}
                >
                  <span>{actionLabel}</span>
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
