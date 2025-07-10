
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';

const HomePage = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <ServicesSection />
    </div>
  );
};

export default HomePage;
