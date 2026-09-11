import type { Metadata } from "next";
import MakitaBrandPage from "@/components/MakitaBrandPage";

export const metadata: Metadata = {
  title: "Makita Tools - Authorized Dealer",
  description:
    "Explore the full range of Makita cordless power tools, outdoor equipment and accessories. 18V LXT, 40V XGT and more from Toollink Enterprises, Chennai.",
};

export default function MakitaBrand() {
  return <MakitaBrandPage />;
}
