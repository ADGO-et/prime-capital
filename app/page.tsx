import type { Metadata } from "next";
import HeroSlider from "../components/HeroSlider";
import MarketPrices from "@/components/MarketPrices";
import SignatureStrengths  from "../components/strategic-focus";
import VisionMissionSection from "../components/VisionMissionSection";
// import CallToAction from "@/components/Call-Toaction";
import PrimeCapitalInfo from "@/components/PrimeCapitalInfo";

export const metadata: Metadata = {
  title: "Prime Capital SC | Investment Bank",
  description:
    "Drive Ethiopia's capital market development",
  keywords: [
    "Prime Capital",
    "Prime Capital SC",
    "Prime Capital investment bank",
    "primecapitalsc.com",
    "Prime Investment",
    "prime investment",
    "investment bank",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Prime Capital SC",
        alternateName: ["Prime Capital", "Prime Investment"],
        url: "https://primecapitalsc.com",
        logo: "https://primecapitalsc.com/prime.png",
        description:
          "Prime Capital SC delivers investment banking, securities trading, corporate finance advisory, and capital market services in Ethiopia.",
      },
      {
        "@type": "WebSite",
        name: "Prime Capital SC",
        alternateName: ["Prime Capital", "Prime Investment"],
        url: "https://primecapitalsc.com",
      },
    ],
  };

  return (
    <main className="min-h-screen w-full bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MarketPrices />
      <HeroSlider />
      <PrimeCapitalInfo  />
      <SignatureStrengths />
      <VisionMissionSection />
      {/* <CallToAction /> */}
    </main>
  );
}
