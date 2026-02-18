import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import InvestmentsSection from "@/components/InvestmentsSection";
import StatsSection from "@/components/StatsSection";
import PressSection from "@/components/PressSection";
import BoardSeatsSection from "@/components/BoardSeatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <IntroductionSection />
        <InvestmentsSection />
        <StatsSection />
        <PressSection />
        <BoardSeatsSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
