"use client";

import { useState } from "react";
import { Mail, X, ChevronRight } from "lucide-react";

const featured = [
  {
    name: "Digital Torque Wrench",
    model: "ATW-500",
    specs: "50-500 Nm | ±2% Accuracy | Rechargeable Battery",
    image:
      "https://images.unsplash.com/photo-1741827866663-6ad8ec20480c?w=600&q=80",
    description:
      "Precision digital torque wrench with programmable settings, real-time torque display and data logging capability for quality-critical fastening applications.",
    features: [
      "Digital torque display with LED indicators",
      "Programmable target torque settings",
      "±2% accuracy in CW and CCW directions",
      "Rechargeable Li-ion battery",
      "Data logging via Bluetooth",
      "Ergonomic non-slip grip",
    ],
  },
  {
    name: "Heavy Duty Pneumatic Impact Wrench",
    model: "AIW-750",
    specs: "750 Nm Max Torque | 7-Vane Motor | Forward/Reverse",
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
    description:
      "High-torque pneumatic impact wrench built for heavy-duty automotive and industrial fastening with robust 7-vane motor design.",
    features: [
      "750 Nm maximum torque output",
      "7-vane motor for smooth operation",
      "Forward/reverse toggle switch",
      "Composite housing for durability",
      "Ergonomic rubber grip",
      "Built-in air regulator",
    ],
  },
  {
    name: "Cordless Drill Driver",
    model: "CDR-1800",
    specs: "18V Brushless Motor | Two-Speed | 50 Nm Max Torque",
    image:
      "https://images.unsplash.com/photo-1592054286113-649ba108e968?w=600&q=80",
    description:
      "Compact 18V cordless drill driver with brushless motor technology for extended runtime and maximum drilling performance.",
    features: [
      "18V brushless motor technology",
      "Two-speed gearbox (0-500 / 0-1800 RPM)",
      "50 Nm maximum torque",
      "20+1 torque settings",
      "LED work light",
      "Fast charger with battery indicator",
    ],
  },
  {
    name: "Hydraulic Hand Pump",
    model: "HHP-700",
    specs: "700 bar | Two-Stage | Steel Reservoir",
    image:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80",
    description:
      "Professional two-stage hydraulic hand pump rated to 700 bar for powering hydraulic cylinders, crimpers, cutters and tensioning tools.",
    features: [
      "700 bar (10,000 PSI) max pressure",
      "Two-stage pumping for fast advance",
      "Heavy-duty steel reservoir",
      "Pressure relief valve",
      "Variable stroke rate",
      "Ergonomic handle design",
    ],
  },
  {
    name: "Industrial Automation System Integration",
    model: "SYS-INT",
    specs: "PLC | Vision | Network | Software | Full Turnkey",
    image: "/images/solutions/industrial-automation-system-integration.jpg",
    description:
      "Complete industrial automation and system integration solutions covering PLC control systems, vision inspection, barcode reading, network infrastructure, material handling and production monitoring software.",
    features: [
      "PLC & Control System Integration",
      "Vision System & Code Reader Setup",
      "Wireless & Bluetooth Network Infrastructure",
      "Production Monitoring & Traceability Software",
      "Conveyor & Material Handling Systems",
      "Torque Monitoring & Data Collection",
    ],
  },
  {
    name: "Pneumatic Accessories & Fittings",
    model: "PNEU-ACC",
    specs: "Couplings | Connectors | Hoses | FRL Units | Air Line",
    image: "/images/solutions/pneumatic-accessories-fittings.jpg",
    description:
      "Complete range of pneumatic accessories and fittings including quick couplings, push-in connectors, air hoses, FRL units and air line management systems for industrial compressed air applications.",
    features: [
      "Quick Release Couplings (Universal & Profile)",
      "Push-In Pneumatic Connectors",
      "Air Hoses & Reinforced Tubing",
      "FRL Units (Filter, Regulator, Lubricator)",
      "Manifold & Distribution Blocks",
      "Emergency Stop & Safety Valves",
    ],
  },
  {
    name: "Fire Evacuation Plan",
    model: "FEP-SOL",
    specs: "Safety | Compliance | Training | Signage | Drills",
    image: "/images/solutions/fire-evacuation-plan.png",
    description:
      "Comprehensive fire evacuation planning and safety solutions for industrial facilities, ensuring regulatory compliance, employee safety and emergency preparedness.",
    features: [
      "Fire Evacuation Route Planning",
      "Emergency Assembly Point Design",
      "Fire Safety Signage & Labels",
      "Fire Extinguisher Placement Strategy",
      "Employee Safety Training Programs",
      "Regular Drill Scheduling & Audits",
    ],
  },
];

export default function FeaturedProducts() {
  const [selected, setSelected] = useState<(typeof featured)[number] | null>(
    null
  );

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div
              key={item.model}
              className="product-card bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div
                className="relative aspect-square overflow-hidden bg-surface cursor-pointer"
                onClick={() => setSelected(item)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/95 text-navy text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    View Details <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
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
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelected(item)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 border-2 border-navy text-navy text-sm font-semibold rounded-lg hover:bg-navy hover:text-white transition-colors"
                  >
                    View Details
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-light transition-colors">
                    <Mail className="w-4 h-4" />
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="aspect-[16/9] overflow-hidden rounded-t-2xl bg-surface">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${selected.image}')` }}
                />
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-navy" />
              </button>
            </div>

            <div className="p-8">
              <span className="text-xs font-bold text-accent uppercase tracking-wider">
                Model: {selected.model}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy mt-2 mb-4">
                {selected.name}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {selected.description}
              </p>

              <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-3">
                Key Features
              </h4>
              <ul className="space-y-2 mb-8">
                {selected.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <a
                  href="/contact"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-light transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Send Enquiry
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="px-6 py-3 border border-gray-200 text-navy text-sm font-semibold rounded-lg hover:bg-surface transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
