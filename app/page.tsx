import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Approach from "./components/Approach";
import Sectors from "./components/Sectors";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Approach />
        <Sectors />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
