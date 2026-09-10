"use client";

import {
  ShieldCheck,
  GraduationCap,
  Truck,
  BadgeIndianRupee,
  Headphones,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    desc: "We provide reliable and genuine industrial products.",
  },
  {
    icon: GraduationCap,
    title: "Technical Expertise",
    desc: "Our team helps customers select the right equipment.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Efficient order processing and dependable delivery.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Competitive Pricing",
    desc: "Cost-effective solutions for industrial requirements.",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    desc: "Dedicated assistance after product purchase.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Focus",
    desc: "Solutions designed around customer requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
            Why Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Why Choose Apex?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
