"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Package, Users, Star } from "lucide-react";

interface StatItemProps {
  end: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

function StatItem({ end, suffix = "", label, icon }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center group">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-4 group-hover:bg-accent/20 transition-colors">
        {icon}
      </div>
      <div className="text-3xl sm:text-4xl font-extrabold text-navy">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-text-secondary mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative -mt-12 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem
            end={15}
            suffix="+"
            label="Years of Experience"
            icon={<Award className="w-7 h-7 text-accent" />}
          />
          <StatItem
            end={500}
            suffix="+"
            label="Industrial Products"
            icon={<Package className="w-7 h-7 text-accent" />}
          />
          <StatItem
            end={1200}
            suffix="+"
            label="Satisfied Customers"
            icon={<Users className="w-7 h-7 text-accent" />}
          />
          <StatItem
            end={25}
            suffix="+"
            label="Trusted Brands"
            icon={<Star className="w-7 h-7 text-accent" />}
          />
        </div>
      </div>
    </section>
  );
}
