import type { Metadata } from "next";
import GalleryComponent from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View our industrial tools, equipment, warehouse operations and engineering facilities.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Our Products & Operations
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A glimpse into our world of industrial tools, engineering expertise and operational excellence.
          </p>
        </div>
      </section>
      <GalleryComponent />
    </>
  );
}
