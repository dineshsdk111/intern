import type { Metadata } from "next";
import {
  Check,
  Target,
  Eye,
  Award,
  Users,
  Truck,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Apex Industrial Solutions - Chennai-based industrial equipment supplier providing tools, machinery and engineering products since 2011.",
};

const values = [
  { icon: Target, title: "Our Mission", desc: "To provide reliable, high-performance industrial tools and equipment that empower businesses to achieve operational excellence." },
  { icon: Eye, title: "Our Vision", desc: "To be the most trusted industrial equipment partner for businesses across India, known for quality, expertise and service." },
  { icon: Award, title: "Quality Policy", desc: "We are committed to sourcing and supplying only genuine, certified industrial products that meet the highest standards." },
];

const team = [
  { icon: Users, title: "Expert Team", desc: "Skilled professionals with deep knowledge of industrial tools and applications." },
  { icon: Truck, title: "Logistics", desc: "Efficient supply chain management ensuring timely delivery across India." },
  { icon: Headphones, title: "Support", desc: "Dedicated customer support for pre-sales consultation and after-sales service." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Engineering Excellence Since 2011
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Building lasting partnerships through quality products, technical expertise and dependable service.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl font-extrabold text-navy mt-2 mb-6">
                Who We Are
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Apex Industrial Solutions was established in 2011 in Chennai, Tamil Nadu, with a clear vision: to become a trusted supplier of industrial tools, machinery and engineering products for businesses across India.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Over the years, we have built strong relationships with leading manufacturers and have earned the trust of over 1,200 customers across various industries including automotive, manufacturing, construction and maintenance.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Our commitment to quality, technical expertise and customer satisfaction drives everything we do. We don&apos;t just sell products — we provide complete industrial solutions tailored to our customers&apos; needs.
              </p>
            </div>
            <div className="relative">
              <div
                className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-2xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1745921204896-c2011440a4e2?w=800&q=80')",
                }}
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-xl p-5 shadow-lg">
                <div className="text-3xl font-extrabold">15+</div>
                <div className="text-sm font-medium text-white/90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-navy">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-xl p-8 border border-gray-100 text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team & Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-navy">Our Capabilities</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {team.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="flex items-start gap-4 p-6 bg-surface rounded-xl">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">{t.title}</h3>
                    <p className="text-sm text-text-secondary">{t.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Genuine Industrial Products",
              "Technical Expertise",
              "Fast Delivery Across India",
              "Dedicated Customer Support",
              "Competitive Pricing",
              "Wide Product Range",
              "Trusted Brand Partners",
              "Quality Certifications",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white/5 rounded-lg p-4 border border-white/10">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-white">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
