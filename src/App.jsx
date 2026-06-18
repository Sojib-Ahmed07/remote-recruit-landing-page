import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlobalReach from "./components/GlobalReach";
import FeeFreeSec from "./components/FeeFreeSec";
import ShowcaseTalents from "./components/ShowcaseTalents";
import ReadySection from "./components/ReadySection";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <GlobalReach />
      <FeeFreeSec />
      <ShowcaseTalents />
      <ReadySection />
      <FAQ />
      <Pricing />
      <Footer />
    </div>
  );
}