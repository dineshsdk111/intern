import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Apex Industrial Solutions for industrial tools, equipment and engineering product enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We&apos;re here to help you find the right industrial solution for your application.
          </p>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
