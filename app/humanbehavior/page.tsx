import type { Metadata } from "next";
import HBHeader from "../components/humanbehavior/HBHeader";
import HBHero from "../components/humanbehavior/HBHero";
import HBLogos from "../components/humanbehavior/HBLogos";
import HBFeatures from "../components/humanbehavior/HBFeatures";
import HBTestimonials from "../components/humanbehavior/HBTestimonials";
import HBPricing from "../components/humanbehavior/HBPricing";
import HBFooter from "../components/humanbehavior/HBFooter";

export const metadata: Metadata = {
  title: "Human Behavior — Automated Product Analytics",
  description:
    "Agents understand your product by watching session replays and act on it by fixing bugs with code agents. Set up in 90 seconds.",
};

export default function HumanBehaviorPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <HBHeader />
      <main>
        <HBHero />
        <HBLogos />
        <HBFeatures />
        <HBTestimonials />
        <HBPricing />
      </main>
      <HBFooter />
    </div>
  );
}
