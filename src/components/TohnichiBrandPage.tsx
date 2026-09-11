"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Check,
  Zap,
  Wrench,
  Factory,
} from "lucide-react";
import {
  tohnichiCategories,
  tohnichiBrandInfo,
  BrandProduct,
} from "@/data/tohnichi";

export default function TohnichiBrandPage() {
  const [activeCategory, setActiveCategory] = useState(
    tohnichiCategories[0].slug
  );
  const [selectedTool, setSelectedTool] = useState<BrandProduct | null>(null);

  const currentCategory = tohnichiCategories.find(
    (c) => c.slug === activeCategory
  );

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.tohnichi.com/wp-content/uploads/bg-hero.jpg')] bg-cover opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/brands" className="hover:text-accent transition-colors">
              Brands
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{tohnichiBrandInfo.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
                Official Partner
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                {tohnichiBrandInfo.name}
              </h1>
              <p className="text-lg text-white/70 mb-6 max-w-xl">
                {tohnichiBrandInfo.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {tohnichiBrandInfo.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-extrabold text-accent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/60 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={tohnichiBrandInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
                >
                  Visit Tohnichi
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <img
                  src={tohnichiBrandInfo.logo}
                  alt="Tohnichi Logo"
                  className="w-full h-32 object-contain mb-4"
                />
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-white/80">
                    <Factory className="w-4 h-4 text-accent" />
                    <span>Founded: {tohnichiBrandInfo.founded}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Wrench className="w-4 h-4 text-accent" />
                    <span>HQ: {tohnichiBrandInfo.headquarters}</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tohnichiBrandInfo.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar gap-1 -mb-px">
            {tohnichiCategories.map((cat) => (
              <button
                key={cat.slug}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  activeCategory === cat.slug
                    ? "border-accent text-accent"
                    : "border-transparent text-text-secondary hover:text-navy hover:border-gray-200"
                }`}
                onClick={() => setActiveCategory(cat.slug)}
              >
                {cat.name}
                <span className="text-xs bg-surface px-2 py-0.5 rounded-full">
                  {cat.tools.length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 bg-surface min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentCategory && (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-extrabold text-navy mb-2">
                  {currentCategory.name}
                </h2>
                <p className="text-text-secondary max-w-2xl">
                  {currentCategory.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentCategory.tools.map((tool) => (
                  <div
                    key={tool.slug}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-lg hover:border-accent/20 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedTool(tool)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url('${tool.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs font-semibold text-white bg-accent px-3 py-1.5 rounded-lg">
                          View Details
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">
                          {tool.subcategory}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                        Model: {tool.model}
                      </span>
                      <h3 className="text-base font-bold text-navy mt-1 group-hover:text-accent transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Tool Detail Modal */}
      {selectedTool && (
        <div
          className="fixed inset-0 z-[9999] bg-navy/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedTool(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${selectedTool.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={() => setSelectedTool(null)}
              >
                ✕
              </button>
              <div className="absolute bottom-5 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {selectedTool.category}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  {selectedTool.name}
                </h3>
                <p className="text-sm text-white/70 mt-1">
                  Model: {selectedTool.model}
                </p>
              </div>
            </div>

            <div className="p-6">
              <p className="text-text-secondary leading-relaxed mb-6">
                {selectedTool.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-navy mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  Key Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedTool.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-sm text-text-secondary bg-surface rounded-lg px-3 py-2"
                    >
                      <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {selectedTool.specifications && (
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-navy mb-3 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-accent" />
                    Technical Specifications
                  </h4>
                  <div className="bg-surface rounded-xl overflow-hidden">
                    {Object.entries(selectedTool.specifications).map(
                      ([key, val], i) => (
                        <div
                          key={key}
                          className={`flex justify-between items-center px-4 py-3 text-sm ${
                            i % 2 === 0 ? "bg-white" : "bg-surface"
                          }`}
                        >
                          <span className="text-text-secondary">{key}</span>
                          <span className="font-semibold text-navy">{val}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
                >
                  Request Quote for {selectedTool.model}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={tohnichiBrandInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-surface text-navy font-semibold rounded-lg hover:bg-gray-200 transition-colors border border-gray-200"
                >
                  View on Tohnichi.com
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Need Tohnichi Torque Tools for Your Project?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Contact us for competitive pricing, bulk orders and expert
            recommendations on the right Tohnichi tools for your application.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919363029940"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Call: +91 93630 29940
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
