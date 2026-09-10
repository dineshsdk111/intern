import type { Metadata } from "next";
import Link from "next/link";
import { productCategories } from "@/data/products";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Browse our complete range of industrial tools, pneumatic equipment, hydraulic systems, power tools and engineering products.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
            Products
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Our Industrial Products
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Reliable equipment designed to improve productivity, safety and performance.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="product-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${cat.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                      {cat.products.length} Products
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-navy mb-2 group-hover:text-accent transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    View Products
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
