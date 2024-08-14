import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-5xl font-bold mb-6">Your Portfolio</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Showcase your projects and skills with this beautiful portfolio website.
      </p>
      <Button size="lg">View Projects</Button>
    </div>
  );
};

export default Hero;