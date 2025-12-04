import React from "react";
import { useParams } from "react-router-dom";

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

interface ServiceLayoutProps {
  services: Service[];
}

function ServiceLayout({ services }: ServiceLayoutProps) {
  const { id } = useParams<{ id: string }>();
  const activeService = services.find((s) => s.id === id) || services[0];

  return (
    <div className="px-4 md:px-[10%] pt-20 pb-10">
      <img
        src={activeService.image}
        alt={activeService.title}
        className="w-full h-96 object-cover rounded-2xl shadow-xl mb-10"
      />

      <div className="flex items-center gap-3 mb-6">
        <activeService.icon size={32} />
        <h1 className="text-4xl font-bold">{activeService.title}</h1>
      </div>

      <div
        className="
              mt-5 prose prose-neutral dark:prose-invert max-w-none
              [&>h2]:text-4xl [&>h2]:font-bold [&>h2]:mt-6 [&>h2]:mb-3 [&>h2]:py-2 [&>h2]:text-gradient
              [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:mt-5 [&>h3]:mb-3 [&>h3]:py-2 [&>h3]:text-foreground/90
              [&>h4]:text-lg [&>h4]:font-medium [&>h4]:mt-4 [&>h4]:mb-2 [&>h4]:py-2 [&>h4]:text-foreground/85
              [&>p]:text-base [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:py-2 [&>p]:text-foreground/80
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:py-2
              [&>li]:text-base [&>li]:leading-relaxed [&>li]:mb-1 [&>li]:py-1 [&>li]:text-foreground/80
              [&>a]:text-primary [&>a]:underline hover:[&>a]:text-primary/80
              [&>strong]:text-foreground [&>strong]:font-semibold
              [&>img]:rounded-xl [&>img]:my-4 [&>img]:shadow-md
              [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
              [&_blockquote]:border-l-4 [&_blockquote]:border-primary/50 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-foreground/70 [&_blockquote]:my-4
            "
        dangerouslySetInnerHTML={{ __html: activeService.description }}
      />

      {/* Highlights */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4  text-primary">
          Our Expertise
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          {activeService.highlights.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="mb-12 bg-background rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Why Choose Us
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          {activeService.whyChoose.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Why We Are the Best */}
      <div className="mb-12 bg-background rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          What Makes Us the Best
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          {activeService.whyBest.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceLayout;
