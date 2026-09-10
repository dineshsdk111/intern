import type { Metadata } from "next";
import { industries } from "@/data/brands";
import {
  Car,
  Factory,
  HardHat,
  Flame,
  Cog,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Apex Industrial Solutions serves automotive, manufacturing, construction, oil & gas, engineering and maintenance industries.",
};

const icons = [Car, Factory, HardHat, Flame, Cog, Wrench];

export default function IndustriesPage() {
  return (
    <>
      <section className="relative py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
            Sectors
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Industries We Serve
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Providing specialized industrial solutions for diverse sectors and applications.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={ind.slug}
                  className="bg-surface rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {ind.name}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
