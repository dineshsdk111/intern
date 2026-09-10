"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { brands } from "@/data/brands";

export default function BrandsPageContent() {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
            Partners
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Our Trusted Brands
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We partner with leading manufacturers to bring you the best industrial products.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, i) => (
              <div
                key={brand.slug}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActive(i)}
              >
                <div
                  className={`relative bg-white rounded-2xl border overflow-hidden transition-all duration-500 ${
                    hovered === i
                      ? "border-accent/30 shadow-xl shadow-accent/10 scale-[1.03]"
                      : "border-gray-100 shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Logo Image */}
                  <div className="relative h-44 overflow-hidden bg-gradient-to-br from-navy/5 to-surface">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                      style={{
                        backgroundImage: `url('${brand.logo}')`,
                        filter: hovered === i ? "none" : "grayscale(60%)",
                        opacity: hovered === i ? 1 : 0.7,
                        transform: hovered === i ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

                    {/* Shine sweep */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ${
                        hovered === i ? "translate-x-full" : "-translate-x-full"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="px-5 pb-6 -mt-4 relative">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          hovered === i ? "bg-accent" : "bg-gray-300"
                        }`}
                      />
                      <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                        {brand.specialty}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-accent transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-accent font-medium italic mb-3">
                      {brand.tagline}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {brand.description}
                    </p>
                    <div
                      className={`flex items-center gap-1.5 text-sm font-semibold text-accent transition-all duration-300 ${
                        hovered === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      }`}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Detail Modal */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-navy/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-56 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                style={{
                  backgroundImage: `url('${brands[active].logo}')`,
                  transform: "scale(1.1)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={() => setActive(null)}
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-5 left-6 right-6">
                <span className="inline-block text-[11px] font-bold text-accent uppercase tracking-wider bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                  {brands[active].specialty}
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  {brands[active].name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-base text-accent font-semibold italic mb-3">
                &ldquo;{brands[active].tagline}&rdquo;
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                {brands[active].description}
              </p>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex gap-2">
                  {brands.map((_, idx) => (
                    <button
                      key={idx}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === active
                          ? "bg-accent w-7"
                          : "bg-gray-200 hover:bg-gray-300 w-2"
                      }`}
                      onClick={() => setActive(idx)}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center text-charcoal hover:bg-surface hover:border-accent/30 transition-all"
                    onClick={() => setActive(active > 0 ? active - 1 : brands.length - 1)}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center text-charcoal hover:bg-surface hover:border-accent/30 transition-all"
                    onClick={() => setActive(active < brands.length - 1 ? active + 1 : 0)}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
