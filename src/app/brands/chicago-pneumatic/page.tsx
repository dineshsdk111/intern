import { Metadata } from "next";
import ChicagoPneumaticBrandPage from "@/components/ChicagoPneumaticBrandPage";

export const metadata: Metadata = {
  title: "Chicago Pneumatic Tools | Apex Industrial",
  description:
    "Shop Chicago Pneumatic pneumatic and cordless tools including impact wrenches, grinders, drills and sanders. Authorized dealer.",
  openGraph: {
    title: "Chicago Pneumatic Tools | Apex Industrial",
    description:
      "Shop Chicago Pneumatic pneumatic and cordless tools including impact wrenches, grinders, drills and sanders.",
  },
};

export default function ChicagoPneumaticPage() {
  return <ChicagoPneumaticBrandPage />;
}
