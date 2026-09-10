import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryBySlug, productCategories } from "@/data/products";
import { ArrowRight, Check, Mail } from "lucide-react";

export async function generateStaticParams() {
  return productCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const otherCategories = productCategories.filter((c) => c.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/products" className="hover:text-accent transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-white">{category.name}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            {category.description}
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {category.products.map((product) => (
              <div
                key={product.slug}
                className="product-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-accent tracking-wider">
                    Model: {product.model}
                  </span>
                  <h3 className="text-xl font-bold text-navy mt-1 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Features */}
                  {product.features && (
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-navy mb-2">
                        Key Features
                      </h4>
                      <ul className="space-y-1.5">
                        {product.features.slice(0, 4).map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2 text-sm text-text-secondary"
                          >
                            <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Applications */}
                  {product.applications && (
                    <div className="mb-5">
                      <h4 className="text-sm font-bold text-navy mb-2">
                        Applications
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {product.applications.map((a) => (
                          <span
                            key={a}
                            className="text-xs bg-surface text-text-secondary px-2 py-1 rounded"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors">
                    <Mail className="w-4 h-4" />
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Modal Content */}
      {category.products.some((p) => p.specifications) && (
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-navy mb-8 text-center">
              Product Specifications
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {category.products
                .filter((p) => p.specifications)
                .map((product) => (
                  <div
                    key={product.slug}
                    className="bg-white rounded-xl border border-gray-100 p-6"
                  >
                    <h3 className="text-lg font-bold text-navy mb-4">
                      {product.name}
                      {product.model && (
                        <span className="text-sm font-normal text-text-muted ml-2">
                          ({product.model})
                        </span>
                      )}
                    </h3>
                    <div className="space-y-2">
                      {Object.entries(product.specifications!).map(
                        ([key, val]) => (
                          <div
                            key={key}
                            className="flex justify-between py-1.5 border-b border-gray-50 text-sm"
                          >
                            <span className="text-text-secondary">{key}</span>
                            <span className="font-medium text-navy">{val}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Categories */}
      {otherCategories.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-navy mb-8 text-center">
              Related Categories
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherCategories.slice(0, 3).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="flex items-center gap-4 bg-surface rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <ArrowRight className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy group-hover:text-accent transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-text-secondary">
                      {cat.products.length} Products
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
