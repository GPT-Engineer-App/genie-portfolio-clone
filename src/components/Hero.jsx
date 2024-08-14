import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-5xl font-bold mb-6">Genie</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Genie is an AI-powered code generator that turns natural language into production-ready code.
      </p>
      <div className="flex justify-center space-x-4">
        <Button size="lg" className="bg-white text-black hover:bg-gray-200">Get Started</Button>
        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">Learn More</Button>
      </div>
    </div>
  );
};

export default Hero;