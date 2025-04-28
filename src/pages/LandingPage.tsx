
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProblemStatement from "@/components/landing/ProblemStatement";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import CallToAction from "@/components/landing/CallToAction";
import Footer from "@/components/landing/Footer";
import { useDemo } from "@/contexts/DemoContext";

const LandingPage = () => {
  const { isDemoActive } = useDemo();
  const navigate = useNavigate();

  // Redirect to demo page if demo is active
  useEffect(() => {
    if (isDemoActive) {
      navigate("/demo");
    }
  }, [isDemoActive, navigate]);

  // Smooth scroll functionality
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = (target as HTMLAnchorElement).getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemStatement />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
        
        <div className="bg-pulse-navy/5 py-8 text-center">
          <div className="container px-4 mx-auto">
            <h3 className="text-lg font-medium mb-2">Project Resources</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/competitive-analysis" 
                className="text-pulse-blue hover:underline font-medium"
              >
                Competitive Analysis & Feature Roadmap
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
