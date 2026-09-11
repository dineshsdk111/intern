"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { brands } from "@/data/brands";

export default function BrandSection() {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-accent" />
            Our Partners
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-3">
            Our Trusted Brands
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            We partner with leading manufacturers to bring you the best industrial products.
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {brands.map((brand, i) => {
            const isMakita = brand.slug === "makita";
            return (
              <div
                key={brand.slug}
                className="group relative"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {isMakita ? (
                  <Link href="/brands/makita" className="block">
                    <BrandCard brand={brand} i={i} hovered={hovered} />
                  </Link>
                ) : (
                  <div
                    className="cursor-pointer"
                    onClick={() => setActive(i)}
                  >
                    <BrandCard brand={brand} i={i} hovered={hovered} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/brands"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
          >
            View All Brands
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Brand Detail Modal (non-Makita brands) */}
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
            <div className="relative h-52 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${brands[active].logo}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <button
                className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={() => setActive(null)}
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-5 right-5">
                <span className="text-[11px] font-bold text-accent uppercase tracking-wider bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {brands[active].specialty}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-2">
                  {brands[active].name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-sm text-accent font-semibold italic mb-3">
                &ldquo;{brands[active].tagline}&rdquo;
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                {brands[active].description}
              </p>

              {/* Navigation dots */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {brands.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === active ? "bg-accent w-6" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      onClick={() => setActive(idx)}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    className="w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center text-charcoal hover:bg-surface transition-colors"
                    onClick={() => setActive(active > 0 ? active - 1 : brands.length - 1)}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    className="w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center text-charcoal hover:bg-surface transition-colors"
                    onClick={() => setActive(active < brands.length - 1 ? active + 1 : 0)}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function BrandCard({
  brand,
  i,
  hovered,
}: {
  brand: (typeof brands)[number];
  i: number;
  hovered: number | null;
}) {
  return (
    <div
      className={`relative bg-white rounded-2xl border overflow-hidden transition-all duration-500 ${
        hovered === i
          ? "border-accent/30 shadow-xl shadow-accent/10 scale-[1.03]"
          : "border-gray-100 shadow-sm hover:shadow-md"
      }`}
    >
      {/* Logo Image */}
      <div className="relative h-36 overflow-hidden bg-gradient-to-br from-navy/5 to-surface">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url('${brand.logo}')`,
            filter: hovered === i ? "none" : "grayscale(60%)",
            opacity: hovered === i ? 1 : 0.7,
            transform: hovered === i ? "scale(1.1)" : "scale(1)",
          }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

        {/* Hover shine effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ${
            hovered === i ? "translate-x-full" : "-translate-x-full"
          }`}
        />
      </div>

      {/* Content */}
      <div className="px-4 pb-5 -mt-4 relative">
        <div className="flex items-center gap-2 mb-1.5">
          <span
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              hovered === i ? "bg-accent" : "bg-gray-300"
            }`}
          />
          <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
            {brand.specialty}
          </span>
        </div>
        <h3 className="text-base font-bold text-navy mb-0.5 group-hover:text-accent transition-colors">
          {brand.name}
        </h3>
        <p className="text-xs text-accent font-medium italic">
          {brand.tagline}
        </p>

        {/* Explore link */}
        <div
          className={`flex items-center gap-1 mt-3 text-xs font-semibold text-accent transition-all duration-300 ${
            hovered === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Explore Brand
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}
