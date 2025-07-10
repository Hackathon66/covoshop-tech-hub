
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <ServicesSection />
      <ContactForm />
    </div>
  );
};

export default HomePage;
