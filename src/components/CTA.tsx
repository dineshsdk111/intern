"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 bg-navy overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Looking for the Right Industrial Solution?
        </h2>
        <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
          Tell us your requirement and our technical team will help you find the
          right product for your application.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-all shadow-lg"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+919363029940"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
          >
            <Phone className="w-4 h-4" />
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
