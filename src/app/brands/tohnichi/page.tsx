import { Metadata } from "next";
import TohnichiBrandPage from "@/components/TohnichiBrandPage";

export const metadata: Metadata = {
  title: "Tohnichi Torque Tools | Apex Industrial",
  description:
    "Shop Tohnichi precision torque wrenches, torque screwdrivers, power tools and testers. Authorized dealer.",
  openGraph: {
    title: "Tohnichi Torque Tools | Apex Industrial",
    description:
      "Shop Tohnichi precision torque wrenches, torque screwdrivers, power tools and testers.",
  },
};

export default function TohnichiPage() {
  return <TohnichiBrandPage />;
}
