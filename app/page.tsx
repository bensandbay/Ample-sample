import Header from "./components/Header";
import Hero from "./components/Hero";
import MarketStrip from "./components/MarketStrip";
import FeatureSections from "./components/FeatureSections";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <MarketStrip />
        <FeatureSections />
        <DownloadApp />
      </main>
      <Footer />
    </>
  );
}
