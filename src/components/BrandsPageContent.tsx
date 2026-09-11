"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brands } from "@/data/brands";

export default function BrandsPageContent() {
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
                  className="group relative"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
              <Link href={`/brands/${brand.slug}`} className="block">
                <BrandCard brand={brand} i={i} hovered={hovered} />
              </Link>
                </div>
          ))}
          </div>
        </div>
      </section>
    </>
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
  );
}
