import type { Metadata } from "next";
import BoschBrandPage from "@/components/BoschBrandPage";

export const metadata: Metadata = {
  title: "Bosch Professional Tools | Apex Industrial",
  description:
    "Shop Bosch professional construction tools including cordless power tools, rotary hammers, grinders, saws and measuring instruments. Official distributor.",
  openGraph: {
    title: "Bosch Professional Tools | Apex Industrial",
    description:
      "Shop Bosch professional construction tools including cordless power tools, rotary hammers, grinders, saws and measuring instruments.",
  },
};

export default function BoschBrandPageWrapper() {
  return <BoschBrandPage />;
}
