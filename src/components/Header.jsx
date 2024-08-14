import React from 'react';
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white">
      <div className="text-2xl font-bold">Your Name</div>
      <nav>
        <Button variant="outline" size="sm">
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </nav>
    </header>
  );
};

export default Header;