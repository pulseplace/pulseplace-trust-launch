
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  BarChart,
  Monitor,
  Users,
  MessageSquare,
  Award,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isAdmin?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  setIsOpen, 
  isAdmin = false 
}) => {
  const location = useLocation();
  const { user, profile } = useAuth();
  
  const userNavItems = [
    {
      name: "Team Dashboard",
      href: "/dashboard",
      icon: BarChart,
      exact: true,
    },
    {
      name: "PulseBot Assistant",
      href: "/dashboard/pulsebot",
      icon: MessageSquare,
    },
    {
      name: "Certification",
      href: "/dashboard/certification",
      icon: Award,
    }
  ];

  const adminNavItems = [
    {
      name: "Overview",
      href: "/admin",
      icon: Monitor,
      exact: true,
    },
    {
      name: "Teams",
      href: "/admin/teams",
      icon: Users,
    },
    {
      name: "Certifications",
      href: "/admin/certifications",
      icon: Shield,
    }
  ];

  const navItems = isAdmin ? adminNavItems : userNavItems;

  // Get user initials for avatar fallback
  const getInitials = () => {
    if (profile?.full_name) {
      return profile.full_name
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
    }
    return user?.email?.substring(0, 2).toUpperCase() || "U";
  };
  
  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-20 flex flex-col bg-white border-r shadow-sm transition-all duration-300",
      isOpen ? "w-64" : "w-16"
    )}>
      <div className="flex items-center justify-between h-16 px-4 border-b">
        <Link to="/" className="flex items-center">
          {isOpen ? (
            <span className="text-xl font-bold text-pulse-blue">PulsePlace.ai</span>
          ) : (
            <span className="text-xl font-bold text-pulse-blue">PP</span>
          )}
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full"
        >
          {isOpen ? (
            <ChevronLeft className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto py-4">
        <nav className="px-2 space-y-1">
          {navItems.map((item) => {
            const isActive = item.exact 
              ? location.pathname === item.href
              : location.pathname.startsWith(item.href);
              
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md transition-colors",
                  isActive 
                    ? "bg-pulse-blue text-white" 
                    : "text-gray-600 hover:bg-pulse-gray"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5 shrink-0",
                  isOpen ? "mr-3" : "mx-auto"
                )} />
                {isOpen && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t">
        {isOpen ? (
          <div className="flex items-center">
            <Avatar className="h-10 w-10">
              {profile?.avatar_url && (
                <AvatarImage src={profile.avatar_url} alt="User avatar" />
              )}
              <AvatarFallback className="bg-pulse-purple text-white">
                {getInitials()}
              </AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="text-sm font-medium">{profile?.full_name || user?.email}</p>
              <p className="text-xs text-gray-500">
                {isAdmin ? "Administrator" : profile?.role || "Team Member"}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <Avatar className="h-10 w-10">
              {profile?.avatar_url && (
                <AvatarImage src={profile.avatar_url} alt="User avatar" />
              )}
              <AvatarFallback className="bg-pulse-purple text-white">
                {getInitials()}
              </AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
