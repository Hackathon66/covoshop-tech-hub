
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Welcome to COVO Technologies
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Innovative technology solutions for the modern world. We build the future, one line of code at a time.
        </p>
        <div className="space-x-4">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Get Started
          </button>
          <button className="border border-border text-foreground px-8 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
