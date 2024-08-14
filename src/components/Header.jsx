import React from 'react';
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-[#0f0f0f]">
      <div className="text-2xl font-bold">Genie</div>
      <nav>
        <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black">
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </nav>
    </header>
  );
};

export default Header;