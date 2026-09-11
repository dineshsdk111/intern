import { Metadata } from "next";
import EndoKogyoBrandPage from "@/components/EndoKogyoBrandPage";

export const metadata: Metadata = {
  title: "Endo Kogyo Balancers | Apex Industrial",
  description:
    "Shop Endo Kogyo spring balancers, air hoists and retractors. Authorized dealer.",
  openGraph: {
    title: "Endo Kogyo Balancers | Apex Industrial",
    description:
      "Shop Endo Kogyo spring balancers, air hoists and retractors.",
  },
};

export default function EndoKogyoPage() {
  return <EndoKogyoBrandPage />;
}
