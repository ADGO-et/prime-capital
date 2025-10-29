import Hero from "../components/Hero";
import SignatureStrengths  from "../components/strategic-focus";
import VisionMissionSection from "../components/VisionMissionSection";
import CallToAction from "@/components/Call-Toaction";
import PrimeCapitalInfo from "@/components/PrimeCapitalInfo";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-primary to-secondary">
      <Hero />
      <PrimeCapitalInfo  />
      <SignatureStrengths />
      <VisionMissionSection />
      <CallToAction />
    </main>
  );
}
