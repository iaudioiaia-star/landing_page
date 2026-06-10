import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import StatsCounter from "@/components/StatsCounter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <VideoSection />
      <HowItWorks />
      <Testimonials />
      <StatsCounter />
      <Footer />
    </div>
  );
};

export default Index;
