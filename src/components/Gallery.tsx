"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1741827866663-6ad8ec20480c?w=800&q=80",
    alt: "Industrial torque wrenches",
    caption: "Torque Wrenches",
  },
  {
    src: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
    alt: "Pneumatic impact tools",
    caption: "Pneumatic Tools",
  },
  {
    src: "https://images.unsplash.com/photo-1592054286113-649ba108e968?w=800&q=80",
    alt: "Cordless power drill",
    caption: "Power Tools",
  },
  {
    src: "https://images.unsplash.com/photo-1610742805112-20134ceb40e8?w=800&q=80",
    alt: "Hydraulic equipment pipes",
    caption: "Hydraulic Systems",
  },
  {
    src: "https://images.unsplash.com/photo-1745571479548-7e8c708c4eb0?w=800&q=80",
    alt: "Precision measuring instruments",
    caption: "Measuring Instruments",
  },
  {
    src: "https://images.unsplash.com/photo-1773325076564-502be7dd4eba?w=800&q=80",
    alt: "Workshop with tools and equipment",
    caption: "Workshop Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1759688506129-9da70e74e9fa?w=800&q=80",
    alt: "Industrial bolts and fasteners",
    caption: "Industrial Fasteners",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    alt: "Engineer working with equipment",
    caption: "Engineering Team",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            Our Products & Operations
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelected(i)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${img.src}')` }}
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center">
                  <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                  <span className="text-sm font-medium text-white">
                    {img.caption}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl animate-scale-in"
          />
          <div className="absolute bottom-8 text-center text-white/80 text-sm">
            {images[selected].caption}
          </div>
        </div>
      )}
    </section>
  );
}
