"use client";

import { MessageSquare, Search, Settings, FileText, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Tell Us Your Requirement",
    desc: "Share your application and technical needs with our team.",
  },
  {
    icon: Search,
    num: "02",
    title: "Product Consultation",
    desc: "Our experts analyze your requirements and suggest options.",
  },
  {
    icon: Settings,
    num: "03",
    title: "Technical Recommendation",
    desc: "Receive detailed technical specifications and guidance.",
  },
  {
    icon: FileText,
    num: "04",
    title: "Quotation",
    desc: "Get competitive pricing with clear terms and timelines.",
  },
  {
    icon: Truck,
    num: "05",
    title: "Delivery & Support",
    desc: "Fast delivery with dedicated after-sales support.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative flex flex-col items-center text-center px-4"
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-20%)] h-0.5 bg-accent/30 z-0" />
                )}

                <div className="relative z-10 w-16 h-16 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <span className="text-xs font-bold text-accent mb-1">
                  {step.num}
                </span>
                <h3 className="text-sm font-bold text-navy mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
