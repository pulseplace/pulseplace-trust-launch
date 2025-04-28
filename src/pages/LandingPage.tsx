
import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProblemStatement from "@/components/landing/ProblemStatement";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import CallToAction from "@/components/landing/CallToAction";
import Footer from "@/components/landing/Footer";

const LandingPage = () => {
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
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
