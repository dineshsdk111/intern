"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up opacity-0">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-sm font-medium text-white/90">
              Trusted Since 2011
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up opacity-0 delay-100">
            Precision Tools. Powerful Solutions. Better Performance.
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed animate-fade-in-up opacity-0 delay-200">
            Your trusted partner for high-quality industrial tools, pneumatic
            equipment, hydraulic systems and engineering solutions.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 delay-300">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-all shadow-lg hover:shadow-xl"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
            >
              Request a Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
