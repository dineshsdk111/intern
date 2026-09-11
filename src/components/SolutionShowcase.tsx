"use client";

import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Industrial Automation System Integration",
    description:
      "Complete automation solutions including PLC systems, vision systems, barcode readers, network infrastructure and software integration for production monitoring, torque tracking and traceability.",
    features: [
      "PLC & Control Systems",
      "Vision & Code Reading",
      "Network & Communication",
      "Software Integration",
      "Material Handling",
      "Production Monitoring",
    ],
    image: "/images/solutions/industrial-automation-system-integration.jpg",
  },
];

export default function SolutionShowcase() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
            Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            Featured Industrial Solutions
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            End-to-end system integration for modern manufacturing and industrial operations.
          </p>
        </div>

        {solutions.map((solution) => (
          <div
            key={solution.title}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-surface">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${solution.image}')` }}
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="inline-block text-xs font-bold text-accent uppercase tracking-wider mb-3">
                  System Integration
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
                  {solution.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {solution.description}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {solution.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm font-medium text-navy"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-light transition-colors w-fit"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
