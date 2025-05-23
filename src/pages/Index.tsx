
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Difference from "@/components/Difference";
import HowItWorksSection from "@/components/HowItWorksSection";
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
      <HowItWorksSection />
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
