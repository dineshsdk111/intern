"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div>
            <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-3">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-6">
              Get In Touch
            </h2>
            <p className="text-text-secondary mb-8">
              Apex Industrial Solutions
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-navy mb-0.5">Address</div>
                  <p className="text-sm text-text-secondary">
                    No. 24, Industrial Estate Road,
                    <br />
                    Guindy, Chennai, Tamil Nadu – 600032
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-navy mb-0.5">Phone</div>
                  <a
                    href="tel:+919876543210"
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-navy mb-0.5">Email</div>
                  <a
                    href="mailto:info@apexindustrial.in"
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    info@apexindustrial.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-navy mb-0.5">
                    Business Hours
                  </div>
                  <p className="text-sm text-text-secondary">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-gray-200 aspect-[16/9] bg-surface flex items-center justify-center">
              <div className="text-center text-text-muted">
                <MapPin className="w-10 h-10 mx-auto mb-2 opacity-50" />
                <p className="text-sm font-medium">Google Maps</p>
                <p className="text-xs">Guindy, Chennai</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <div className="bg-surface rounded-2xl p-8 border border-gray-100">
              {submitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    Thank You!
                  </h3>
                  <p className="text-text-secondary">
                    Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-navy mb-2">
                    Send an Enquiry
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">
                        Product / Requirement
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">
                        Quantity
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
