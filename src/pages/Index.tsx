
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Difference from "@/components/Difference";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import AppPreview from "@/components/AppPreview";
import EarlyAccess from "@/components/EarlyAccess";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Difference />
      <HowItWorks />
      <Benefits />
      <AppPreview />
      <EarlyAccess />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
