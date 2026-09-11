import type { Metadata } from "next";
import BrandsPageContent from "@/components/BrandsPageContent";

export const metadata: Metadata = {
  title: "Our Brands",
  description:
    "Explore the trusted industrial brands we partner with - Makita, Chicago Pneumatic, Endo Kogyo and Tohnichi.",
};

export default function BrandsPage() {
  return <BrandsPageContent />;
}
