import React from "react";

type Step = {
  number: string;
  numberBg: string;
  title: string;
  description: string;
};

type ProcessCardProps = {
  steps: Step[];
};

const ProcessCard: React.FC<ProcessCardProps> = ({ steps }) => {
  return (
    <div className="flex flex-col">
      {steps.map((step, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 items-center py-5 gap-8"
        >
          {/* Number with background image */}
          <div
            className={`flex justify-center md:justify-center order-1 ${
              index % 2 === 0 ? "md:order-1" : "md:order-2"
            }`}
          >
            <h2
              className="text-[160px] md:text-[240px] font-extrabold leading-none bg-clip-text text-transparent text-center"
              style={{
                backgroundImage: `url(${step.numberBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                 WebkitTextStroke: "10px rgba(0,0,0,0.1)",
              }}
            >
              {step.number}
            </h2>
          </div>

          {/* Text Content */}
          <div
            className={`flex flex-col text-center md:text-left order-2 ${
              index % 2 === 0 ? "md:order-2" : "md:order-1"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
              {step.title}
            </h3>
            <p className="text-primary-foreground/70 text-lg mt-4">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessCard;
