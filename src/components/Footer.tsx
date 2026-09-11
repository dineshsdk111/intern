"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Brands", href: "/brands" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: "Torque Wrenches", href: "/products/torque-wrenches" },
  { label: "Pneumatic Tools", href: "/products/pneumatic-tools" },
  { label: "Hydraulic Equipment", href: "/products/hydraulic-equipment" },
  { label: "Power Tools", href: "/products/power-tools" },
  { label: "Makita Tools", href: "/products/makita-tools" },
  { label: "Measuring Instruments", href: "/products/measuring-instruments" },
  { label: "Workshop Equipment", href: "/products/workshop-equipment" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image
                src="/toollink-logo.svg"
                alt="Toollink Enterprises logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight">Toollink</span>
                <span className="text-[10px] font-medium text-white/60 tracking-widest uppercase">
                  Enterprises
                </span>
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Powering Industry with Precision & Reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                39/A Indira Nagar, Ambattur, Chennai - 600053
              </li>
              <li>
                <a
                  href="tel:+919363029940"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +91 93630 29940
                </a>
              </li>
              <li>
                <a
                  href="mailto:toollink@zohomail.in"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  toollink@zohomail.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; 2026 Toollink Enterprises. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/60 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
