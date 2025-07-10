
import React from 'react';
import { Code, Database, Cloud, Shield, Loader2 } from 'lucide-react';
import { useServices } from '../hooks/useServices';

// Map icon names to actual Lucide React icons
const iconMap = {
  Code,
  Database,
  Cloud,
  Shield,
} as const;

const ServicesSection = () => {
  const { data: services, isLoading, error } = useServices();

  if (isLoading) {
    return (
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Services
          </h3>
          <div className="flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading services:', error);
    return (
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Services
          </h3>
          <div className="text-center text-muted-foreground">
            Unable to load services. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center text-foreground mb-12">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services?.map((service) => {
            const IconComponent = iconMap[service.icon_name as keyof typeof iconMap] || Code;
            return (
              <div key={service.id} className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                <IconComponent className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold text-card-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
