
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-pulse-blue">PulsePlace.ai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="#" className="text-gray-600 hover:text-pulse-blue">Features</Link>
            <Link to="#" className="text-gray-600 hover:text-pulse-blue">About</Link>
            <Link to="#" className="text-gray-600 hover:text-pulse-blue">Pricing</Link>
            <Link to="#" className="text-gray-600 hover:text-pulse-blue">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/survey">
              <Button className="bg-pulse-blue hover:bg-pulse-blue/90">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link to="#" className="text-gray-600 hover:text-pulse-blue" onClick={() => setIsOpen(false)}>
                Features
              </Link>
              <Link to="#" className="text-gray-600 hover:text-pulse-blue" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="#" className="text-gray-600 hover:text-pulse-blue" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              <Link to="#" className="text-gray-600 hover:text-pulse-blue" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </nav>
            <div className="flex flex-col space-y-2">
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">Sign In</Button>
              </Link>
              <Link to="/survey" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-pulse-blue hover:bg-pulse-blue/90">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
