// ServiceCard.tsx
import React from "react";

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  whyChoose: string[];
  whyBest: string[];
  icon: React.ComponentType<{ size?: number }>;
  link: string;
}

export interface MasonryItem {
  src: string;
  alt?: string;
  className?: string;
}

interface ServiceCardProps {
  services: Service[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-card-background text-card-foreground  shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 duration-500"
          style={{
            clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)",
            borderTopLeftRadius: "50px",
          }}
        >
          <div className="relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-50 object-cover"
            />
            <div className="absolute -bottom-4 left-4 bg-primary text-primary-foreground p-2 rounded-full shadow ring-4">
              <service.icon size={28}/>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-xl text-foreground font-semibold mb-2 mt-4 line-clamp-1">{service.title}</h3>
            <div className="text-foreground mb-3 line-clamp-3"  dangerouslySetInnerHTML={{ __html: service.description }} />
            <a
              href={`/services/${service.id}`}
              className="text-foreground font-medium hover:underline"
            >
              Learn more &rarr;
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
