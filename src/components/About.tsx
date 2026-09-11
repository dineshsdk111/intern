"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "Genuine Industrial Products",
  "Technical Expertise",
  "Fast Delivery",
  "Customer Support",
];

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80')",
                }}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-accent text-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-extrabold">15+</div>
              <div className="text-xs font-medium text-white/90">Years</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-6">
              Engineering Excellence Since 2011
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Toollink Enterprises is a Chennai-based industrial equipment
              supplier providing reliable tools, machinery and engineering
              products to manufacturing, automotive, construction and
              maintenance industries.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              We work with trusted manufacturers to provide high-performance
              products, technical assistance and dependable after-sales support.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-charcoal">
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
