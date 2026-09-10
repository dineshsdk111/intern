"use client";

import {
  Car,
  Factory,
  HardHat,
  Flame,
  Cog,
  Wrench,
} from "lucide-react";
import { industries } from "@/data/brands";

const icons = [Car, Factory, HardHat, Flame, Cog, Wrench];

export default function IndustrySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
            Sectors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            Industries We Serve
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const Icon = icons[i];
            return (
              <div
                key={ind.slug}
                className="product-card bg-surface rounded-xl p-6 border border-gray-100 group hover:border-accent/20 transition-all"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {ind.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {ind.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
