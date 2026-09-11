"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Torque Wrenches", href: "/products/torque-wrenches" },
      { label: "Pneumatic Tools", href: "/products/pneumatic-tools" },
      { label: "Power Tools", href: "/products/power-tools" },
      { label: "Makita Tools", href: "/products/makita-tools" },
      { label: "Hydraulic Equipment", href: "/products/hydraulic-equipment" },
      { label: "Industrial Pumps", href: "/products/industrial-pumps" },
      { label: "Measuring Instruments", href: "/products/measuring-instruments" },
      { label: "Workshop Equipment", href: "/products/workshop-equipment" },
      { label: "Industrial Fasteners", href: "/products/industrial-fasteners" },
    ],
  },
  { label: "Brands", href: "/brands" },
  { label: "Industries", href: "/industries" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919363029940"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 93630 29940</span>
            </a>
            <a
              href="mailto:toollink@zohomail.in"
              className="flex items-center gap-1.5 hover:text-accent transition-colors hidden sm:flex"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>toollink@zohomail.in</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-white/70">
            <MapPin className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Chennai, Tamil Nadu</span>
            <span className="sm:hidden">Chennai</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 leading-tight">
            <Image
              src="/toollink-logo.svg"
              alt="Toollink Enterprises logo"
              width={40}
              height={40}
              className="w-9 h-9 lg:w-10 lg:h-10"
            />
            <span className="flex flex-col">
              <span className="text-xl lg:text-2xl font-extrabold text-navy tracking-tight">
                Toollink
              </span>
              <span className="text-[10px] lg:text-xs font-medium text-charcoal-light tracking-widest uppercase">
                Enterprises
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal hover:text-accent transition-colors"
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  {productsOpen && (
                    <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg border border-gray-100 py-2 min-w-[220px] animate-fade-in">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-charcoal hover:bg-accent-light hover:text-accent transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-charcoal hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-md"
            >
              Get a Quote
            </Link>
            <button
              className="lg:hidden p-2 text-charcoal hover:text-accent transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg animate-fade-in">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2.5 text-sm font-medium text-charcoal hover:text-accent hover:bg-accent-light rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-text-secondary hover:text-accent hover:bg-accent-light rounded-lg transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="block text-center mt-3 px-5 py-3 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
