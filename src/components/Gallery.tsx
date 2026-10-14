"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const images = [
  {
    src: "/images/bosch/bosch-drill-driver.jpg",
    alt: "Bosch drill driver",
    caption: "Bosch Drill Driver",
  },
  {
    src: "/images/bosch/bosch-impact.jpg",
    alt: "Bosch impact drill",
    caption: "Bosch Impact Drill",
  },
  {
    src: "/images/chicago-pneumatic/cp7748.png",
    alt: "Chicago Pneumatic impact wrench",
    caption: "Chicago Pneumatic",
  },
  {
    src: "https://makita.in/wp-content/uploads/2026/08/HS014_PR_IMG.jpg",
    alt: "Makita circular saw",
    caption: "Makita Circular Saw",
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
