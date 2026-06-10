import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import VideoSection from "@/components/sections/VideoSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import StatsCounter from "@/components/sections/StatsCounter";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <VideoSection />
      <HowItWorks />
      <Testimonials />
      <StatsCounter />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
