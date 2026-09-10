"use client";

import { productCategories } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            Our Industrial Products
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Reliable equipment designed to improve productivity, safety and
            performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((cat) => (
            <ProductCard
              key={cat.slug}
              name={cat.name}
              category={cat.name}
              description={cat.description}
              image={cat.image}
              href={`/products/${cat.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
