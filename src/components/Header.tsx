
import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">COVO Technologies</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-accent transition-colors">Home</a>
            <a href="#" className="hover:text-accent transition-colors">Services</a>
            <a href="#" className="hover:text-accent transition-colors">About</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
