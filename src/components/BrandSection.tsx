"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brands } from "@/data/brands";

export default function BrandSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
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
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
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
          ? "border-accent/40 shadow-2xl shadow-accent/15 scale-[1.04]"
          : "border-gray-100 shadow-md hover:shadow-lg"
      }`}
    >
      {/* Logo Image - Larger and clearer */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-white via-surface to-white">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 p-4"
          style={{
            backgroundImage: `url('${brand.logo}')`,
            filter: "none",
            opacity: hovered === i ? 1 : 0.9,
            transform: hovered === i ? "scale(1.08)" : "scale(1)",
          }}
        />

        {/* Hover glow effect */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            hovered === i ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "radial-gradient(circle at center, rgba(220,38,38,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Hover shine effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ${
            hovered === i ? "translate-x-full" : "-translate-x-full"
          }`}
        />
      </div>

      {/* Content */}
      <div className="px-5 pb-5 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              hovered === i ? "bg-accent" : "bg-gray-300"
            }`}
          />
          <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
            {brand.specialty}
          </span>
        </div>
        <h3
          className={`text-lg font-bold mb-1 transition-colors duration-300 ${
            hovered === i ? "text-accent" : "text-navy"
          }`}
        >
          {brand.name}
        </h3>
        <p className="text-xs text-accent font-medium italic mb-3">
          {brand.tagline}
        </p>

        {/* Explore link */}
        <div
          className={`flex items-center justify-center gap-1 text-xs font-semibold text-accent transition-all duration-300 ${
            hovered === i
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
        >
          Explore Brand
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}
