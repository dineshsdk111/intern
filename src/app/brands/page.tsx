import type { Metadata } from "next";
import BrandsPageContent from "@/components/BrandsPageContent";

export const metadata: Metadata = {
  title: "Our Brands",
  description:
    "Explore the trusted brands we partner with - APEX Tools, ProTorque, HydroMax, AirForce Industrial and more.",
};

export default function BrandsPage() {
  return <BrandsPageContent />;
}
