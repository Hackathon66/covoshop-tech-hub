
import React from 'react';
import { Code, Database, Cloud, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Scalable database design and optimization for your business needs.'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud infrastructure and deployment solutions for maximum reliability.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security solutions to protect your digital assets.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center text-foreground mb-12">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold text-card-foreground mb-2">
                {service.title}
              </h4>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
