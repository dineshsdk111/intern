import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import ProductGrid from "@/components/ProductGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandSection from "@/components/BrandSection";
import IndustrySection from "@/components/IndustrySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <ProductGrid />
      <FeaturedProducts />
      <BrandSection />
      <IndustrySection />
      <WhyChooseUs />
      <ProcessSection />
      <Gallery />
      <CTA />
      <ContactForm />
    </>
  );
}
