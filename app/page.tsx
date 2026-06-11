import HeroSlider from "../components/HeroSlider";
// import MarketPrices from "@/components/MarketPrices";
import SignatureStrengths  from "../components/strategic-focus";
import VisionMissionSection from "../components/VisionMissionSection";
// import CallToAction from "@/components/Call-Toaction";
import PrimeCapitalInfo from "@/components/PrimeCapitalInfo";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      {/* <MarketPrices /> */}
      <HeroSlider />
      <PrimeCapitalInfo  />
      <SignatureStrengths />
      <VisionMissionSection />
      {/* <CallToAction /> */}
    </main>
  );
}
