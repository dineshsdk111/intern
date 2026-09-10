"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  image: string;
  href: string;
}

export default function ProductCard({
  name,
  category,
  description,
  image,
  href,
}: ProductCardProps) {
  return (
    <div className="product-card bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-bold text-accent uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-lg font-bold text-navy mt-1 mb-2 group-hover:text-accent transition-colors">
          {name}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
        >
          View Products
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
