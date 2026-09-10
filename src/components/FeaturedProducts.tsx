"use client";

import { Mail } from "lucide-react";

const featured = [
  {
    name: "Digital Torque Wrench",
    model: "ATW-500",
    specs: "50-500 Nm | ±2% Accuracy | Rechargeable Battery",
    image:
      "https://images.unsplash.com/photo-1741827866663-6ad8ec20480c?w=600&q=80",
  },
  {
    name: "Heavy Duty Pneumatic Impact Wrench",
    model: "AIW-750",
    specs: "750 Nm Max Torque | 7-Vane Motor | Forward/Reverse",
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
  },
  {
    name: "Cordless Drill Driver",
    model: "CDR-1800",
    specs: "18V Brushless Motor | Two-Speed | 50 Nm Max Torque",
    image:
      "https://images.unsplash.com/photo-1592054286113-649ba108e968?w=600&q=80",
  },
  {
    name: "Hydraulic Hand Pump",
    model: "HHP-700",
    specs: "700 bar | Two-Stage | Steel Reservoir",
    image:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
            Featured
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            Featured Industrial Solutions
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item) => (
            <div
              key={item.model}
              className="product-card bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden group"
            >
              <div className="relative aspect-square overflow-hidden bg-surface">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-bold text-accent tracking-wider">
                  Model: {item.model}
                </span>
                <h3 className="text-lg font-bold text-navy mt-1 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {item.specs}
                </p>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-light transition-colors">
                  <Mail className="w-4 h-4" />
                  Send Enquiry
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
